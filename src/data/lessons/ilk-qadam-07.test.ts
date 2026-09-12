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

  it("should have exactly 1 quiz question with exactly one correct option", () => {
    expect(lesson07Quiz).toHaveLength(1);

    lesson07Quiz.forEach((q, index) => {
      expect(q.position).toBe(index + 1);
      expect(q.options.length).toBeGreaterThanOrEqual(3);
      const correctCount = q.options.filter((o) => o.isCorrect).length;
      expect(correctCount).toBe(1);
      expect(q.explanation.length).toBeGreaterThan(5);
    });
  });

  it("should have exactly 1 model practice task with valid numerical answer", () => {
    expect(lesson07Practice).toHaveLength(1);

    const task = lesson07Practice[0];
    expect(task.position).toBe(1);
    expect(Number.isFinite(task.answer)).toBe(true);
    expect(task.tolerance).toBeGreaterThan(0);
    expect(task.unit.length).toBeGreaterThan(0);
    expect(task.hint.length).toBeGreaterThan(5);
    expect(task.solution).toContain("Namunaviy yechim");
  });

  it("should correctly compute practice answers", () => {
    // 20 / 4 = 5 m/s²
    expect(lesson07Practice[0].answer).toBe(5);
  });

  it("should export a valid static lesson object", () => {
    expect(lesson07Static.id).toBe("ilk-qadam-07");
    expect(lesson07Static.number).toBe("07");
    expect(lesson07Static.quiz).toHaveLength(1);
    expect(lesson07Static.practice).toHaveLength(1);
    expect(lesson07Static.homework.title.length).toBeGreaterThan(5);
  });
});
