import { describe, expect, it } from "vitest";

import { lesson10Practice, lesson10Quiz, lesson10Slides, lesson10Static } from "./ilk-qadam-10";

describe("Lesson 10 Data Integrity", () => {
  it("should have exactly 6 slides for uz, en, and ru locales", () => {
    expect(lesson10Slides.uz).toHaveLength(6);
    expect(lesson10Slides.en).toHaveLength(6);
    expect(lesson10Slides.ru).toHaveLength(6);

    for (const locale of ["uz", "en", "ru"] as const) {
      lesson10Slides[locale].forEach((slide, index) => {
        expect(slide.id).toBe(index + 1);
        expect(slide.title.length).toBeGreaterThan(3);
        expect(slide.content.length).toBeGreaterThan(10);
      });
    }
  });

  it("should have exactly 5 quiz questions with exactly one correct option each", () => {
    expect(lesson10Quiz).toHaveLength(5);

    lesson10Quiz.forEach((q, index) => {
      expect(q.position).toBe(index + 1);
      expect(q.options.length).toBeGreaterThanOrEqual(3);
      const correctCount = q.options.filter((o) => o.isCorrect).length;
      expect(correctCount).toBe(1);
      expect(q.explanation.length).toBeGreaterThan(5);
    });
  });

  it("should have exactly 5 practice tasks with valid numerical answers", () => {
    expect(lesson10Practice).toHaveLength(5);

    lesson10Practice.forEach((task, index) => {
      expect(task.position).toBe(index + 1);
      expect(Number.isFinite(task.answer)).toBe(true);
      expect(task.tolerance).toBeGreaterThan(0);
      expect(task.hint.length).toBeGreaterThan(5);
      expect(task.solution.length).toBeGreaterThan(5);
    });
  });

  it("should correctly compute practice answers", () => {
    // Task 1: 0.3 * 5 * 10 = 15 N
    expect(lesson10Practice[0].answer).toBe(15);
    // Task 2: 40 / 200 = 0.2
    expect(lesson10Practice[1].answer).toBe(0.2);
    // Task 3: 100 - 10 = 90 N
    expect(lesson10Practice[2].answer).toBe(90);
    // Task 4: 90 / 10 = 9 m/s²
    expect(lesson10Practice[3].answer).toBe(9);
    // Task 5: 0.6 / 0.05 = 12 times
    expect(lesson10Practice[4].answer).toBe(12);
  });

  it("should export a valid static lesson object", () => {
    expect(lesson10Static.id).toBe("ilk-qadam-10");
    expect(lesson10Static.number).toBe("10");
    expect(lesson10Static.quiz).toHaveLength(5);
    expect(lesson10Static.practice).toHaveLength(5);
    expect(lesson10Static.homework.title.length).toBeGreaterThan(5);
  });
});
