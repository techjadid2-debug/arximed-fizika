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

  it("should have exactly 1 quiz question with exactly one correct option", () => {
    expect(lesson06Quiz).toHaveLength(1);

    lesson06Quiz.forEach((q, index) => {
      expect(q.position).toBe(index + 1);
      expect(q.options.length).toBeGreaterThanOrEqual(3);
      const correctCount = q.options.filter((o) => o.isCorrect).length;
      expect(correctCount).toBe(1);
      expect(q.explanation.length).toBeGreaterThan(5);
    });
  });

  it("should have exactly 1 model practice task with valid numerical answer", () => {
    expect(lesson06Practice).toHaveLength(1);

    const task = lesson06Practice[0];
    expect(task.position).toBe(1);
    expect(Number.isFinite(task.answer)).toBe(true);
    expect(task.tolerance).toBeGreaterThan(0);
    expect(task.unit.length).toBeGreaterThan(0);
    expect(task.hint.length).toBeGreaterThan(5);
    expect(task.solution).toContain("Namunaviy yechim");
  });

  it("should correctly compute practice answers", () => {
    // 12 - 12 = 0 N
    expect(lesson06Practice[0].answer).toBe(0);
  });

  it("should export a valid static lesson object", () => {
    expect(lesson06Static.id).toBe("ilk-qadam-06");
    expect(lesson06Static.number).toBe("06");
    expect(lesson06Static.quiz).toHaveLength(1);
    expect(lesson06Static.practice).toHaveLength(1);
    expect(lesson06Static.homework.title.length).toBeGreaterThan(5);
  });
});
