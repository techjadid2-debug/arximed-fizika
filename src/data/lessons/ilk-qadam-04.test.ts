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

  it("should have exactly 1 quiz question with exactly one correct option", () => {
    expect(lesson04Quiz).toHaveLength(1);

    lesson04Quiz.forEach((q, index) => {
      expect(q.position).toBe(index + 1);
      expect(q.options.length).toBeGreaterThanOrEqual(3);
      const correctCount = q.options.filter((o) => o.isCorrect).length;
      expect(correctCount).toBe(1);
      expect(q.explanation.length).toBeGreaterThan(5);
    });
  });

  it("should have exactly 1 model practice task with valid numerical answer", () => {
    expect(lesson04Practice).toHaveLength(1);

    const task = lesson04Practice[0];
    expect(task.position).toBe(1);
    expect(Number.isFinite(task.answer)).toBe(true);
    expect(task.tolerance).toBeGreaterThan(0);
    expect(task.unit.length).toBeGreaterThan(0);
    expect(task.hint.length).toBeGreaterThan(5);
    expect(task.solution).toContain("Namunaviy yechim");
  });

  it("should correctly compute practice answers", () => {
    // 3 * 4 = 12 m/s
    expect(lesson04Practice[0].answer).toBe(12);
  });

  it("should export a valid static lesson object", () => {
    expect(lesson04Static.id).toBe("ilk-qadam-04");
    expect(lesson04Static.number).toBe("04");
    expect(lesson04Static.quiz).toHaveLength(1);
    expect(lesson04Static.practice).toHaveLength(1);
    expect(lesson04Static.homework.title.length).toBeGreaterThan(5);
  });
});
