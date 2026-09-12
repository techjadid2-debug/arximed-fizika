import { describe, expect, it } from "vitest";

import { lesson01Practice, lesson01Quiz, lesson01Slides, lesson01Static } from "./ilk-qadam-01";

describe("Lesson 01 Data Integrity", () => {
  it("should have slides for uz, en, and ru locales", () => {
    expect(lesson01Slides.uz.length).toBeGreaterThan(0);
    expect(lesson01Slides.en.length).toBeGreaterThan(0);
    expect(lesson01Slides.ru.length).toBeGreaterThan(0);

    for (const locale of ["uz", "en", "ru"] as const) {
      lesson01Slides[locale].forEach((slide, index) => {
        expect(slide.id).toBe(index + 1);
        expect(slide.title.length).toBeGreaterThan(3);
        expect(slide.content.length).toBeGreaterThan(10);
      });
    }
  });

  it("should have exactly 1 quiz question with exactly one correct option", () => {
    expect(lesson01Quiz).toHaveLength(1);

    lesson01Quiz.forEach((q, index) => {
      expect(q.position).toBe(index + 1);
      expect(q.options.length).toBeGreaterThanOrEqual(3);
      const correctCount = q.options.filter((o) => o.isCorrect).length;
      expect(correctCount).toBe(1);
      expect(q.explanation.length).toBeGreaterThan(5);
    });
  });

  it("should have exactly 1 model practice task with valid numerical answer", () => {
    expect(lesson01Practice).toHaveLength(1);

    const task = lesson01Practice[0];
    expect(task.position).toBe(1);
    expect(Number.isFinite(task.answer)).toBe(true);
    expect(task.tolerance).toBeGreaterThan(0);
    expect(task.unit.length).toBeGreaterThan(0);
    expect(task.hint.length).toBeGreaterThan(5);
    expect(task.solution).toContain("Namunaviy yechim");
  });

  it("should correctly compute practice answer", () => {
    // 72 km/h -> 20 m/s
    expect(lesson01Practice[0].answer).toBe(20);
  });

  it("should export a valid static lesson object", () => {
    expect(lesson01Static.id).toBe("ilk-qadam-01");
    expect(lesson01Static.number).toBe("01");
    expect(lesson01Static.quiz).toHaveLength(1);
    expect(lesson01Static.practice).toHaveLength(1);
  });
});
