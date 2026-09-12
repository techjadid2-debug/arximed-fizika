import { describe, expect, it } from "vitest";

import { lesson08Practice, lesson08Quiz, lesson08Slides, lesson08Static } from "./ilk-qadam-08";

describe("Lesson 08 Data Integrity", () => {
  it("should have exactly 6 slides for uz, en, and ru locales", () => {
    expect(lesson08Slides.uz).toHaveLength(6);
    expect(lesson08Slides.en).toHaveLength(6);
    expect(lesson08Slides.ru).toHaveLength(6);

    for (const locale of ["uz", "en", "ru"] as const) {
      lesson08Slides[locale].forEach((slide, index) => {
        expect(slide.id).toBe(index + 1);
        expect(slide.title.length).toBeGreaterThan(3);
        expect(slide.content.length).toBeGreaterThan(10);
      });
    }
  });

  it("should have exactly 1 quiz question with exactly one correct option", () => {
    expect(lesson08Quiz).toHaveLength(1);

    lesson08Quiz.forEach((q, index) => {
      expect(q.position).toBe(index + 1);
      expect(q.options.length).toBeGreaterThanOrEqual(3);
      const correctCount = q.options.filter((o) => o.isCorrect).length;
      expect(correctCount).toBe(1);
      expect(q.explanation.length).toBeGreaterThan(5);
    });
  });

  it("should have exactly 1 model practice task with valid numerical answer", () => {
    expect(lesson08Practice).toHaveLength(1);

    const task = lesson08Practice[0];
    expect(task.position).toBe(1);
    expect(Number.isFinite(task.answer)).toBe(true);
    expect(task.tolerance).toBeGreaterThan(0);
    expect(task.unit.length).toBeGreaterThan(0);
    expect(task.hint.length).toBeGreaterThan(5);
    expect(task.solution).toContain("Namunaviy yechim");
  });

  it("should correctly compute practice answers", () => {
    // 120 N
    expect(lesson08Practice[0].answer).toBe(120);
  });

  it("should export a valid static lesson object", () => {
    expect(lesson08Static.id).toBe("ilk-qadam-08");
    expect(lesson08Static.number).toBe("08");
    expect(lesson08Static.quiz).toHaveLength(1);
    expect(lesson08Static.practice).toHaveLength(1);
    expect(lesson08Static.homework.title.length).toBeGreaterThan(5);
  });
});
