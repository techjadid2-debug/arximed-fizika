import { beforeEach, describe, expect, it } from "vitest";

import { dueMistakes, useProgressStore, XP } from "./useProgressStore";

const reset = () => useProgressStore.getState().reset();

describe("useProgressStore · XP va streak", () => {
  beforeEach(reset);

  it("XP qo‘shiladi va kunlik hisobga yoziladi", () => {
    useProgressStore.getState().award(XP.quizCorrect, "2026-09-01");
    useProgressStore.getState().award(XP.videoWatched, "2026-09-01");
    const state = useProgressStore.getState();
    expect(state.xp).toBe(30);
    expect(state.xpByDate["2026-09-01"]).toBe(30);
  });

  it("ketma-ket kunlar streak’ni oshiradi", () => {
    const { award } = useProgressStore.getState();
    award(10, "2026-09-01");
    expect(useProgressStore.getState().streakDays).toBe(1);
    useProgressStore.getState().award(10, "2026-09-02");
    expect(useProgressStore.getState().streakDays).toBe(2);
    useProgressStore.getState().award(10, "2026-09-03");
    expect(useProgressStore.getState().streakDays).toBe(3);
  });

  it("bir kun o‘tkazib yuborilsa streak 1 ga tushadi", () => {
    useProgressStore.getState().award(10, "2026-09-01");
    useProgressStore.getState().award(10, "2026-09-02");
    useProgressStore.getState().award(10, "2026-09-05");
    expect(useProgressStore.getState().streakDays).toBe(1);
  });

  it("bir kunda bir necha marta XP olish streak’ni oshirmaydi", () => {
    useProgressStore.getState().award(10, "2026-09-01");
    useProgressStore.getState().award(10, "2026-09-01");
    expect(useProgressStore.getState().streakDays).toBe(1);
  });

  it("dars ikki marta tugallanmaydi", () => {
    useProgressStore.getState().completeLesson("ilk-qadam-01", "2026-09-01");
    useProgressStore.getState().completeLesson("ilk-qadam-01", "2026-09-01");
    const state = useProgressStore.getState();
    expect(state.completedLessons).toEqual(["ilk-qadam-01"]);
    expect(state.xp).toBe(XP.lessonComplete);
  });
});

describe("useProgressStore · xatolarni takrorlash", () => {
  beforeEach(reset);

  it("noto‘g‘ri javob ertaga takrorlashga qo‘yiladi", () => {
    useProgressStore.getState().recordMistake("ilk-qadam-01", "q1", "quiz", "2026-09-01");
    const [mistake] = useProgressStore.getState().mistakes;
    expect(mistake.dueOn).toBe("2026-09-02");
    expect(mistake.streak).toBe(0);
  });

  it("to‘g‘ri javob intervalni 1 → 3 → 7 kunga uzaytiradi, so‘ng o‘chiradi", () => {
    const store = useProgressStore.getState();
    store.recordMistake("ilk-qadam-01", "q1", "quiz", "2026-09-01");

    useProgressStore.getState().clearMistake("q1", "2026-09-02");
    expect(useProgressStore.getState().mistakes[0].dueOn).toBe("2026-09-05");

    useProgressStore.getState().clearMistake("q1", "2026-09-05");
    expect(useProgressStore.getState().mistakes[0].dueOn).toBe("2026-09-12");

    useProgressStore.getState().clearMistake("q1", "2026-09-12");
    expect(useProgressStore.getState().mistakes).toHaveLength(0);
  });

  it("bir xil savol ikki marta qo‘shilmaydi", () => {
    const store = useProgressStore.getState();
    store.recordMistake("ilk-qadam-01", "q1", "quiz", "2026-09-01");
    useProgressStore.getState().recordMistake("ilk-qadam-01", "q1", "quiz", "2026-09-03");
    expect(useProgressStore.getState().mistakes).toHaveLength(1);
    expect(useProgressStore.getState().mistakes[0].dueOn).toBe("2026-09-04");
  });

  it("dueMistakes faqat muddati kelganlarni qaytaradi", () => {
    const store = useProgressStore.getState();
    store.recordMistake("ilk-qadam-01", "q1", "quiz", "2026-09-01");
    useProgressStore.getState().recordMistake("ilk-qadam-01", "q2", "quiz", "2026-09-10");
    const all = useProgressStore.getState().mistakes;
    expect(dueMistakes(all, "2026-09-02").map((m) => m.itemId)).toEqual(["q1"]);
    expect(dueMistakes(all, "2026-09-11").map((m) => m.itemId)).toEqual(["q1", "q2"]);
  });

  it("oy chegarasidan o‘tadigan sana to‘g‘ri hisoblanadi", () => {
    useProgressStore.getState().recordMistake("ilk-qadam-01", "q1", "quiz", "2026-09-30");
    expect(useProgressStore.getState().mistakes[0].dueOn).toBe("2026-10-01");
  });
});
