import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type LessonInputValue = string | number | null;

export interface QuizAttempt {
  selectedOptionId: string;
  isCorrect: boolean;
  attempts: number;
}

export interface ProblemAttempt {
  submittedValue: number;
  isCorrect: boolean;
  attempts: number;
}

export interface LessonProgress {
  activeStepIndex: number;
  completedStepIds: string[];
  inputs: Record<string, LessonInputValue>;
  quizAttempts: Record<string, QuizAttempt>;
  problemAttempts: Record<string, ProblemAttempt>;
  completedActivityIds: string[];
  updatedAt: string;
}

interface LessonStore {
  activeLessonId: string | null;
  progressByLesson: Record<string, LessonProgress>;
  hasHydrated: boolean;
  setHasHydrated: (hasHydrated: boolean) => void;
  openLesson: (lessonId: string) => void;
  goToStep: (lessonId: string, stepIndex: number, stepCount: number) => void;
  nextStep: (lessonId: string, stepCount: number) => void;
  previousStep: (lessonId: string) => void;
  setInput: (lessonId: string, stepId: string, value: LessonInputValue) => void;
  submitQuiz: (
    lessonId: string,
    stepId: string,
    selectedOptionId: string,
    isCorrect: boolean,
  ) => void;
  submitProblem: (
    lessonId: string,
    stepId: string,
    submittedValue: number,
    isCorrect: boolean,
  ) => void;
  completeStep: (lessonId: string, stepId: string) => void;
  completeActivity: (lessonId: string, activityId: string) => void;
  resetLesson: (lessonId: string) => void;
}

const serverStorage: Storage = {
  length: 0,
  clear: () => undefined,
  getItem: () => null,
  key: () => null,
  removeItem: () => undefined,
  setItem: () => undefined,
};

function createLessonProgress(): LessonProgress {
  return {
    activeStepIndex: 0,
    completedStepIds: [],
    inputs: {},
    quizAttempts: {},
    problemAttempts: {},
    completedActivityIds: [],
    updatedAt: new Date().toISOString(),
  };
}

function getProgress(
  progressByLesson: Record<string, LessonProgress>,
  lessonId: string,
): LessonProgress {
  return progressByLesson[lessonId] ?? createLessonProgress();
}

export const useLessonStore = create<LessonStore>()(
  persist(
    (set) => ({
      activeLessonId: null,
      progressByLesson: {},
      hasHydrated: false,
      setHasHydrated: (hasHydrated) => set({ hasHydrated }),
      openLesson: (lessonId) =>
        set((state) => ({
          activeLessonId: lessonId,
          progressByLesson: {
            ...state.progressByLesson,
            [lessonId]: getProgress(state.progressByLesson, lessonId),
          },
        })),
      goToStep: (lessonId, stepIndex, stepCount) =>
        set((state) => {
          const progress = getProgress(state.progressByLesson, lessonId);
          const activeStepIndex = Math.max(
            0,
            Math.min(stepIndex, Math.max(0, stepCount - 1)),
          );
          return {
            activeLessonId: lessonId,
            progressByLesson: {
              ...state.progressByLesson,
              [lessonId]: {
                ...progress,
                activeStepIndex,
                updatedAt: new Date().toISOString(),
              },
            },
          };
        }),
      nextStep: (lessonId, stepCount) =>
        set((state) => {
          const progress = getProgress(state.progressByLesson, lessonId);
          return {
            progressByLesson: {
              ...state.progressByLesson,
              [lessonId]: {
                ...progress,
                activeStepIndex: Math.min(
                  progress.activeStepIndex + 1,
                  Math.max(0, stepCount - 1),
                ),
                updatedAt: new Date().toISOString(),
              },
            },
          };
        }),
      previousStep: (lessonId) =>
        set((state) => {
          const progress = getProgress(state.progressByLesson, lessonId);
          return {
            progressByLesson: {
              ...state.progressByLesson,
              [lessonId]: {
                ...progress,
                activeStepIndex: Math.max(0, progress.activeStepIndex - 1),
                updatedAt: new Date().toISOString(),
              },
            },
          };
        }),
      setInput: (lessonId, stepId, value) =>
        set((state) => {
          const progress = getProgress(state.progressByLesson, lessonId);
          return {
            progressByLesson: {
              ...state.progressByLesson,
              [lessonId]: {
                ...progress,
                inputs: { ...progress.inputs, [stepId]: value },
                updatedAt: new Date().toISOString(),
              },
            },
          };
        }),
      submitQuiz: (lessonId, stepId, selectedOptionId, isCorrect) =>
        set((state) => {
          const progress = getProgress(state.progressByLesson, lessonId);
          const previousAttempt = progress.quizAttempts[stepId];
          return {
            progressByLesson: {
              ...state.progressByLesson,
              [lessonId]: {
                ...progress,
                quizAttempts: {
                  ...progress.quizAttempts,
                  [stepId]: {
                    selectedOptionId,
                    isCorrect,
                    attempts: (previousAttempt?.attempts ?? 0) + 1,
                  },
                },
                completedStepIds: isCorrect
                  ? Array.from(new Set([...progress.completedStepIds, stepId]))
                  : progress.completedStepIds,
                updatedAt: new Date().toISOString(),
              },
            },
          };
        }),
      submitProblem: (lessonId, stepId, submittedValue, isCorrect) =>
        set((state) => {
          const progress = getProgress(state.progressByLesson, lessonId);
          const previousAttempt = progress.problemAttempts[stepId];
          return {
            progressByLesson: {
              ...state.progressByLesson,
              [lessonId]: {
                ...progress,
                problemAttempts: {
                  ...progress.problemAttempts,
                  [stepId]: {
                    submittedValue,
                    isCorrect,
                    attempts: (previousAttempt?.attempts ?? 0) + 1,
                  },
                },
                completedStepIds: isCorrect
                  ? Array.from(new Set([...progress.completedStepIds, stepId]))
                  : progress.completedStepIds,
                updatedAt: new Date().toISOString(),
              },
            },
          };
        }),
      completeStep: (lessonId, stepId) =>
        set((state) => {
          const progress = getProgress(state.progressByLesson, lessonId);
          return {
            progressByLesson: {
              ...state.progressByLesson,
              [lessonId]: {
                ...progress,
                completedStepIds: Array.from(
                  new Set([...progress.completedStepIds, stepId]),
                ),
                updatedAt: new Date().toISOString(),
              },
            },
          };
        }),
      completeActivity: (lessonId, activityId) =>
        set((state) => {
          const progress = getProgress(state.progressByLesson, lessonId);
          return {
            progressByLesson: {
              ...state.progressByLesson,
              [lessonId]: {
                ...progress,
                completedActivityIds: Array.from(
                  new Set([...progress.completedActivityIds, activityId]),
                ),
                updatedAt: new Date().toISOString(),
              },
            },
          };
        }),
      resetLesson: (lessonId) =>
        set((state) => ({
          progressByLesson: {
            ...state.progressByLesson,
            [lessonId]: createLessonProgress(),
          },
        })),
    }),
    {
      name: "physica-lesson-progress-v1",
      version: 1,
      storage: createJSONStorage(() =>
        typeof window === "undefined" ? serverStorage : window.localStorage,
      ),
      partialize: (state) => ({
        activeLessonId: state.activeLessonId,
        progressByLesson: state.progressByLesson,
      }),
      onRehydrateStorage: () => (state) => state?.setHasHydrated(true),
    },
  ),
);
