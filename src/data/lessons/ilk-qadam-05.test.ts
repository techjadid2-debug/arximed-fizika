import { describe, expect, it } from "vitest";

import { lesson05Practice, lesson05Quiz, lesson05Slides, lesson05Static } from "./ilk-qadam-05";

describe("Lesson 05 Data Integrity", () => {
  it("should have exactly 6 slides for uz, en, and ru locales", () => {
    expect(lesson05Slides.uz).toHaveLength(6);
    expect(lesson05Slides.en).toHaveLength(6);
    expect(lesson05Slides.ru).toHaveLength(6);

    for (const locale of ["uz", "en", "ru"] as const) {
      lesson05Slides[locale].forEach((slide, index) => {
        expect(slide.id).toBe(index + 1);
        expect(slide.title.length).toBeGreaterThan(3);
        expect(slide.content.length).toBeGreaterThan(10);
      });
    }
  });

  it("should have exactly 5 quiz questions with exactly one correct option each", () => {
    expect(lesson05Quiz).toHaveLength(5);

    lesson05Quiz.forEach((q, index) => {
      expect(q.position).toBe(index + 1);
      expect(q.options.length).toBeGreaterThanOrEqual(3);
      const correctCount = q.options.filter((o) => o.isCorrect).length;
      expect(correctCount).toBe(1);
      expect(q.explanation.length).toBeGreaterThan(5);
    });
  });

  it("should have exactly 5 practice tasks with valid numerical answers", () => {
    expect(lesson05Practice).toHaveLength(5);

    lesson05Practice.forEach((task, index) => {
      expect(task.position).toBe(index + 1);
      expect(Number.isFinite(task.answer)).toBe(true);
      expect(task.tolerance).toBeGreaterThan(0);
      expect(task.unit.length).toBeGreaterThan(0);
      expect(task.hint.length).toBeGreaterThan(5);
      expect(task.solution.length).toBeGreaterThan(5);
    });
  });

  it("should correctly compute practice answers", () => {
    // Task 1: 10 * 9 / 2 = 45 m
    expect(lesson05Practice[0].answer).toBe(45);
    // Task 2: sqrt(2 * 10 * 5) = 10 m/s
    expect(lesson05Practice[1].answer).toBe(10);
    // Task 3: sqrt(2 * 80 / 10) = 4 s
    expect(lesson05Practice[2].answer).toBe(4);
    // Task 4: 10 * 4 = 40 m/s
    expect(lesson05Practice[3].answer).toBe(40);
    // Task 5: 10 * 4 / 2 = 20 m
    expect(lesson05Practice[4].answer).toBe(20);
  });

  it("should export a valid static lesson object", () => {
    expect(lesson05Static.id).toBe("ilk-qadam-05");
    expect(lesson05Static.number).toBe("05");
    expect(lesson05Static.quiz).toHaveLength(5);
    expect(lesson05Static.practice).toHaveLength(5);
    expect(lesson05Static.homework.title.length).toBeGreaterThan(5);
  });
});
