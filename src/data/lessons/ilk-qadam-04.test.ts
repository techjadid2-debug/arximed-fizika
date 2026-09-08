import { describe, expect, it } from "vitest";

import { lesson04Practice, lesson04Quiz, lesson04Slides, lesson04Static } from "./ilk-qadam-04";

describe("Lesson 04 Data Integrity", () => {
  it("should have exactly 6 slides for uz, en, and ru locales", () => {
    expect(lesson04Slides.uz).toHaveLength(6);
    expect(lesson04Slides.en).toHaveLength(6);
    expect(lesson04Slides.ru).toHaveLength(6);

    for (const locale of ["uz", "en", "ru"] as const) {
      lesson04Slides[locale].forEach((slide, index) => {
        expect(slide.id).toBe(index + 1);
        expect(slide.title.length).toBeGreaterThan(3);
        expect(slide.content.length).toBeGreaterThan(10);
      });
    }
  });

  it("should have exactly 5 quiz questions with exactly one correct option each", () => {
    expect(lesson04Quiz).toHaveLength(5);

    lesson04Quiz.forEach((q, index) => {
      expect(q.position).toBe(index + 1);
      expect(q.options.length).toBeGreaterThanOrEqual(3);
      const correctCount = q.options.filter((o) => o.isCorrect).length;
      expect(correctCount).toBe(1);
      expect(q.explanation.length).toBeGreaterThan(5);
    });
  });

  it("should have exactly 5 practice tasks with valid numerical answers", () => {
    expect(lesson04Practice).toHaveLength(5);

    lesson04Practice.forEach((task, index) => {
      expect(task.position).toBe(index + 1);
      expect(Number.isFinite(task.answer)).toBe(true);
      expect(task.tolerance).toBeGreaterThan(0);
      expect(task.unit.length).toBeGreaterThan(0);
      expect(task.hint.length).toBeGreaterThan(5);
      expect(task.solution.length).toBeGreaterThan(5);
    });
  });

  it("should correctly compute practice answers", () => {
    // Task 1: 3 * 4 = 12 m/s
    expect(lesson04Practice[0].answer).toBe(12);
    // Task 2: 20 / 5 = 4 m/s^2
    expect(lesson04Practice[1].answer).toBe(4);
    // Task 3: 2 * 9 / 2 = 9 m
    expect(lesson04Practice[2].answer).toBe(9);
    // Task 4: 100 / 8 = 12.5 m
    expect(lesson04Practice[3].answer).toBe(12.5);
    // Task 5: (35 - 15) / 10 = 2 m/s^2
    expect(lesson04Practice[4].answer).toBe(2);
  });

  it("should export a valid static lesson object", () => {
    expect(lesson04Static.id).toBe("ilk-qadam-04");
    expect(lesson04Static.number).toBe("04");
    expect(lesson04Static.quiz).toHaveLength(5);
    expect(lesson04Static.practice).toHaveLength(5);
    expect(lesson04Static.homework.title.length).toBeGreaterThan(5);
  });
});
