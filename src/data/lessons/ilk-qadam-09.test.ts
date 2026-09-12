import { describe, expect, it } from "vitest";

import { lesson09Practice, lesson09Quiz, lesson09Slides, lesson09Static } from "./ilk-qadam-09";

describe("Lesson 09 Data Integrity", () => {
  it("should have exactly 6 slides for uz, en, and ru locales", () => {
    expect(lesson09Slides.uz).toHaveLength(6);
    expect(lesson09Slides.en).toHaveLength(6);
    expect(lesson09Slides.ru).toHaveLength(6);

    for (const locale of ["uz", "en", "ru"] as const) {
      lesson09Slides[locale].forEach((slide, index) => {
        expect(slide.id).toBe(index + 1);
        expect(slide.title.length).toBeGreaterThan(3);
        expect(slide.content.length).toBeGreaterThan(10);
      });
    }
  });

  it("should have exactly 1 quiz question with exactly one correct option", () => {
    expect(lesson09Quiz).toHaveLength(1);

    lesson09Quiz.forEach((q, index) => {
      expect(q.position).toBe(index + 1);
      expect(q.options.length).toBeGreaterThanOrEqual(3);
      const correctCount = q.options.filter((o) => o.isCorrect).length;
      expect(correctCount).toBe(1);
      expect(q.explanation.length).toBeGreaterThan(5);
    });
  });

  it("should have exactly 1 model practice task with valid numerical answer", () => {
    expect(lesson09Practice).toHaveLength(1);

    const task = lesson09Practice[0];
    expect(task.position).toBe(1);
    expect(Number.isFinite(task.answer)).toBe(true);
    expect(task.tolerance).toBeGreaterThan(0);
    expect(task.unit.length).toBeGreaterThan(0);
    expect(task.hint.length).toBeGreaterThan(5);
    expect(task.solution).toContain("Namunaviy yechim");
  });

  it("should correctly compute practice answers", () => {
    // 60 * 10 = 600 N
    expect(lesson09Practice[0].answer).toBe(600);
  });

  it("should export a valid static lesson object", () => {
    expect(lesson09Static.id).toBe("ilk-qadam-09");
    expect(lesson09Static.number).toBe("09");
    expect(lesson09Static.quiz).toHaveLength(1);
    expect(lesson09Static.practice).toHaveLength(1);
    expect(lesson09Static.homework.title.length).toBeGreaterThan(5);
  });
});
