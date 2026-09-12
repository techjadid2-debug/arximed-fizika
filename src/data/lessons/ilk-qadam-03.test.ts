import { describe, expect, it } from "vitest";

import { lesson03Practice, lesson03Quiz, lesson03Slides, lesson03Static } from "./ilk-qadam-03";

describe("Lesson 03 Data Integrity", () => {
  it("should have exactly 6 slides for uz, en, and ru locales", () => {
    expect(lesson03Slides.uz).toHaveLength(6);
    expect(lesson03Slides.en).toHaveLength(6);
    expect(lesson03Slides.ru).toHaveLength(6);

    for (const locale of ["uz", "en", "ru"] as const) {
      lesson03Slides[locale].forEach((slide, index) => {
        expect(slide.id).toBe(index + 1);
        expect(slide.title.length).toBeGreaterThan(3);
        expect(slide.content.length).toBeGreaterThan(10);
      });
    }
  });

  it("should have exactly 1 quiz question with exactly one correct option", () => {
    expect(lesson03Quiz).toHaveLength(1);

    lesson03Quiz.forEach((q, index) => {
      expect(q.position).toBe(index + 1);
      expect(q.options.length).toBeGreaterThanOrEqual(3);
      const correctCount = q.options.filter((o) => o.isCorrect).length;
      expect(correctCount).toBe(1);
      expect(q.explanation.length).toBeGreaterThan(5);
    });
  });

  it("should have exactly 1 model practice task with valid numerical answer", () => {
    expect(lesson03Practice).toHaveLength(1);

    const task = lesson03Practice[0];
    expect(task.position).toBe(1);
    expect(Number.isFinite(task.answer)).toBe(true);
    expect(task.tolerance).toBeGreaterThan(0);
    expect(task.unit.length).toBeGreaterThan(0);
    expect(task.hint.length).toBeGreaterThan(5);
    expect(task.solution).toContain("Namunaviy yechim");
  });

  it("should correctly compute practice answers", () => {
    // 6 * 15 = 90 m
    expect(lesson03Practice[0].answer).toBe(90);
  });

  it("should export a valid static lesson object", () => {
    expect(lesson03Static.id).toBe("ilk-qadam-03");
    expect(lesson03Static.number).toBe("03");
    expect(lesson03Static.quiz).toHaveLength(1);
    expect(lesson03Static.practice).toHaveLength(1);
    expect(lesson03Static.homework.title.length).toBeGreaterThan(5);
  });
});
