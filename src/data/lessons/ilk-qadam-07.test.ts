import { describe, expect, it } from "vitest";

import { lesson07Practice, lesson07Quiz, lesson07Slides, lesson07Static } from "./ilk-qadam-07";

describe("Lesson 07 Data Integrity", () => {
  it("should have exactly 6 slides for uz, en, and ru locales", () => {
    expect(lesson07Slides.uz).toHaveLength(6);
    expect(lesson07Slides.en).toHaveLength(6);
    expect(lesson07Slides.ru).toHaveLength(6);

    for (const locale of ["uz", "en", "ru"] as const) {
      lesson07Slides[locale].forEach((slide, index) => {
        expect(slide.id).toBe(index + 1);
        expect(slide.title.length).toBeGreaterThan(3);
        expect(slide.content.length).toBeGreaterThan(10);
      });
    }
  });

  it("should have exactly 5 quiz questions with exactly one correct option each", () => {
    expect(lesson07Quiz).toHaveLength(5);

    lesson07Quiz.forEach((q, index) => {
      expect(q.position).toBe(index + 1);
      expect(q.options.length).toBeGreaterThanOrEqual(3);
      const correctCount = q.options.filter((o) => o.isCorrect).length;
      expect(correctCount).toBe(1);
      expect(q.explanation.length).toBeGreaterThan(5);
    });
  });

  it("should have exactly 5 practice tasks with valid numerical answers", () => {
    expect(lesson07Practice).toHaveLength(5);

    lesson07Practice.forEach((task, index) => {
      expect(task.position).toBe(index + 1);
      expect(Number.isFinite(task.answer)).toBe(true);
      expect(task.tolerance).toBeGreaterThan(0);
      expect(task.unit.length).toBeGreaterThan(0);
      expect(task.hint.length).toBeGreaterThan(5);
      expect(task.solution.length).toBeGreaterThan(5);
    });
  });

  it("should correctly compute practice answers", () => {
    // Task 1: 15 / 3 = 5 m/s²
    expect(lesson07Practice[0].answer).toBe(5);
    // Task 2: 1200 * 2.5 = 3000 N
    expect(lesson07Practice[1].answer).toBe(3000);
    // Task 3: 50 / 2 = 25 kg
    expect(lesson07Practice[2].answer).toBe(25);
    // Task 4: 0.5 * 40 = 20 N
    expect(lesson07Practice[3].answer).toBe(20);
    // Task 5: (18 - 6) / 4 = 3 m/s²
    expect(lesson07Practice[4].answer).toBe(3);
  });

  it("should export a valid static lesson object", () => {
    expect(lesson07Static.id).toBe("ilk-qadam-07");
    expect(lesson07Static.number).toBe("07");
    expect(lesson07Static.quiz).toHaveLength(5);
    expect(lesson07Static.practice).toHaveLength(5);
    expect(lesson07Static.homework.title.length).toBeGreaterThan(5);
  });
});
