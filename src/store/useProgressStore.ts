import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type MistakeKind = "quiz" | "practice";

export interface Mistake {
  lessonId: string;
  itemId: string;
  kind: MistakeKind;
  /** Necha marta to‘g‘ri javob berilgan — interval shu bilan o‘sadi. */
  streak: number;
  /** ISO sana (YYYY-MM-DD) — shu kundan takrorlashga chiqadi. */
  dueOn: string;
}

/** To‘g‘ri javobdan keyingi takrorlash oralig‘i (kun). */
const REVIEW_INTERVALS = [1, 3, 7];

export const XP = {
  videoWatched: 20,
  quizCorrect: 10,
  practiceCorrect: 15,
  lessonComplete: 50,
} as const;

interface ProgressState {
  xp: number;
  /** YYYY-MM-DD → o‘sha kuni yig‘ilgan XP. */
  xpByDate: Record<string, number>;
  streakDays: number;
  lastActiveDate: string | null;
  dailyGoal: number;
  completedLessons: string[];
  mistakes: Mistake[];
  hasHydrated: boolean;

  setHasHydrated: (value: boolean) => void;
  /** XP qo‘shadi va streak’ni yangilaydi. `today` — YYYY-MM-DD. */
  award: (amount: number, today: string) => void;
  completeLesson: (lessonId: string, today: string) => void;
  /** Noto‘g‘ri javob — xatolar ro‘yxatiga qo‘shadi yoki muddatini tiklaydi. */
  recordMistake: (lessonId: string, itemId: string, kind: MistakeKind, today: string) => void;
  /** To‘g‘ri javob — intervalni oshiradi, uchinchisidan keyin o‘chiradi. */
  clearMistake: (itemId: string, today: string) => void;
  reset: () => void;
}

const serverStorage: Storage = {
  length: 0,
  clear: () => undefined,
  getItem: () => null,
  key: () => null,
  removeItem: () => undefined,
  setItem: () => undefined,
};

/** `2026-09-01` ga `days` kun qo‘shadi. */
function addDays(date: string, days: number): string {
  const [year, month, day] = date.split("-").map(Number);
  const next = new Date(Date.UTC(year, month - 1, day + days));
  return next.toISOString().slice(0, 10);
}

function daysBetween(from: string, to: string): number {
  const parse = (value: string) => {
    const [y, m, d] = value.split("-").map(Number);
    return Date.UTC(y, m - 1, d);
  };
  return Math.round((parse(to) - parse(from)) / 86_400_000);
}

const initial = {
  xp: 0,
  xpByDate: {} as Record<string, number>,
  streakDays: 0,
  lastActiveDate: null as string | null,
  dailyGoal: 50,
  completedLessons: [] as string[],
  mistakes: [] as Mistake[],
};

export const useProgressStore = create<ProgressState>()(
  persist(
    (set) => ({
      ...initial,
      hasHydrated: false,
      setHasHydrated: (hasHydrated) => set({ hasHydrated }),

      award: (amount, today) =>
        set((state) => {
          const gap = state.lastActiveDate ? daysBetween(state.lastActiveDate, today) : null;
          const streakDays =
            gap === null || gap > 1 ? 1 : gap === 1 ? state.streakDays + 1 : state.streakDays || 1;
          return {
            xp: state.xp + amount,
            xpByDate: { ...state.xpByDate, [today]: (state.xpByDate[today] ?? 0) + amount },
            streakDays,
            lastActiveDate: today,
          };
        }),

      completeLesson: (lessonId, today) =>
        set((state) => {
          if (state.completedLessons.includes(lessonId)) return state;
          const gap = state.lastActiveDate ? daysBetween(state.lastActiveDate, today) : null;
          const streakDays =
            gap === null || gap > 1 ? 1 : gap === 1 ? state.streakDays + 1 : state.streakDays || 1;
          return {
            completedLessons: [...state.completedLessons, lessonId],
            xp: state.xp + XP.lessonComplete,
            xpByDate: {
              ...state.xpByDate,
              [today]: (state.xpByDate[today] ?? 0) + XP.lessonComplete,
            },
            streakDays,
            lastActiveDate: today,
          };
        }),

      recordMistake: (lessonId, itemId, kind, today) =>
        set((state) => {
          const rest = state.mistakes.filter((item) => item.itemId !== itemId);
          return {
            mistakes: [
              ...rest,
              { lessonId, itemId, kind, streak: 0, dueOn: addDays(today, 1) },
            ],
          };
        }),

      clearMistake: (itemId, today) =>
        set((state) => {
          const found = state.mistakes.find((item) => item.itemId === itemId);
          if (!found) return state;
          const streak = found.streak + 1;
          // Uchta intervaldan o‘tgach atama o‘zlashtirilgan hisoblanadi.
          if (streak >= REVIEW_INTERVALS.length) {
            return { mistakes: state.mistakes.filter((item) => item.itemId !== itemId) };
          }
          return {
            mistakes: state.mistakes.map((item) =>
              item.itemId === itemId
                ? { ...item, streak, dueOn: addDays(today, REVIEW_INTERVALS[streak]) }
                : item,
            ),
          };
        }),

      reset: () => set({ ...initial }),
    }),
    {
      name: "physica-progress-v1",
      version: 1,
      storage: createJSONStorage(() =>
        typeof window === "undefined" ? serverStorage : window.localStorage,
      ),
      partialize: (state) => ({
        xp: state.xp,
        xpByDate: state.xpByDate,
        streakDays: state.streakDays,
        lastActiveDate: state.lastActiveDate,
        dailyGoal: state.dailyGoal,
        completedLessons: state.completedLessons,
        mistakes: state.mistakes,
      }),
      onRehydrateStorage: () => (state) => state?.setHasHydrated(true),
    },
  ),
);

/** Bugungi sana YYYY-MM-DD ko‘rinishida (mahalliy vaqt bo‘yicha). */
export function todayKey(): string {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
}

/** Muddati kelgan xatolar. */
export function dueMistakes(mistakes: Mistake[], today: string): Mistake[] {
  return mistakes.filter((item) => item.dueOn <= today);
}
