import { describe, expect, it } from "vitest";

import { lesson06Practice, lesson06Quiz, lesson06Slides, lesson06Static } from "./ilk-qadam-06";

describe("Lesson 06 Data Integrity", () => {
  it("should have exactly 6 slides for uz, en, and ru locales", () => {
    expect(lesson06Slides.uz).toHaveLength(6);
    expect(lesson06Slides.en).toHaveLength(6);
    expect(lesson06Slides.ru).toHaveLength(6);

    for (const locale of ["uz", "en", "ru"] as const) {
      lesson06Slides[locale].forEach((slide, index) => {
        expect(slide.id).toBe(index + 1);
        expect(slide.title.length).toBeGreaterThan(3);
        expect(slide.content.length).toBeGreaterThan(10);
      });
    }
  });

  it("should have exactly 5 quiz questions with exactly one correct option each", () => {
    expect(lesson06Quiz).toHaveLength(5);

    lesson06Quiz.forEach((q, index) => {
      expect(q.position).toBe(index + 1);
      expect(q.options.length).toBeGreaterThanOrEqual(3);
      const correctCount = q.options.filter((o) => o.isCorrect).length;
      expect(correctCount).toBe(1);
      expect(q.explanation.length).toBeGreaterThan(5);
    });
  });

  it("should have exactly 5 practice tasks with valid numerical answers", () => {
    expect(lesson06Practice).toHaveLength(5);

    lesson06Practice.forEach((task, index) => {
      expect(task.position).toBe(index + 1);
      expect(Number.isFinite(task.answer)).toBe(true);
      expect(task.tolerance).toBeGreaterThan(0);
      expect(task.unit.length).toBeGreaterThan(0);
      expect(task.hint.length).toBeGreaterThan(5);
      expect(task.solution.length).toBeGreaterThan(5);
    });
  });

  it("should correctly compute practice answers", () => {
    // Task 1: 12 - 12 = 0 N
    expect(lesson06Practice[0].answer).toBe(0);
    // Task 2: 8 m/s (speed remains constant)
    expect(lesson06Practice[1].answer).toBe(8);
    // Task 3: 120 / 15 = 8 m/s
    expect(lesson06Practice[2].answer).toBe(8);
    // Task 4: 10 / 2 = 5 times
    expect(lesson06Practice[3].answer).toBe(5);
    // Task 5: 0 N (net force is 0)
    expect(lesson06Practice[4].answer).toBe(0);
  });

  it("should export a valid static lesson object", () => {
    expect(lesson06Static.id).toBe("ilk-qadam-06");
    expect(lesson06Static.number).toBe("06");
    expect(lesson06Static.quiz).toHaveLength(5);
    expect(lesson06Static.practice).toHaveLength(5);
    expect(lesson06Static.homework.title.length).toBeGreaterThan(5);
  });
});
