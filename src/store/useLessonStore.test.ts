import { beforeEach, describe, expect, it } from "vitest";
import { createJSONStorage } from "zustand/middleware";

import { useLessonStore } from "@/store/useLessonStore";

const storedValues = new Map<string, string>();
const memoryStorage = {
  getItem: (key: string) => storedValues.get(key) ?? null,
  setItem: (key: string, value: string) => {
    storedValues.set(key, value);
  },
  removeItem: (key: string) => {
    storedValues.delete(key);
  },
};

describe("useLessonStore", () => {
  beforeEach(() => {
    storedValues.clear();
    useLessonStore.persist.setOptions({
      storage: createJSONStorage(() => memoryStorage),
    });
    useLessonStore.persist.clearStorage();
    useLessonStore.setState({
      activeLessonId: null,
      progressByLesson: {},
      hasHydrated: true,
    });
  });

  it("clamps navigation to the lesson step range", () => {
    const store = useLessonStore.getState();
    store.openLesson("demo");
    store.goToStep("demo", 99, 4);

    expect(
      useLessonStore.getState().progressByLesson.demo.activeStepIndex,
    ).toBe(3);
  });

  it("records quiz attempts and completes a correct step", () => {
    const store = useLessonStore.getState();
    store.openLesson("demo");
    store.submitQuiz("demo", "quiz-1", "wrong", false);
    useLessonStore
      .getState()
      .submitQuiz("demo", "quiz-1", "correct", true);

    const progress = useLessonStore.getState().progressByLesson.demo;
    expect(progress.quizAttempts["quiz-1"]).toMatchObject({
      selectedOptionId: "correct",
      isCorrect: true,
      attempts: 2,
    });
    expect(progress.completedStepIds).toContain("quiz-1");
    expect(storedValues.has("physica-lesson-progress-v1")).toBe(true);
  });
});
