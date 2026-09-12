import { describe, expect, it } from "vitest";

import { lesson02Practice, lesson02Quiz, lesson02Slides, lesson02Static } from "./ilk-qadam-02";

describe("Lesson 02 Data Integrity", () => {
  it("should have exactly 6 slides for uz, en, and ru locales", () => {
    expect(lesson02Slides.uz).toHaveLength(6);
    expect(lesson02Slides.en).toHaveLength(6);
    expect(lesson02Slides.ru).toHaveLength(6);

    for (const locale of ["uz", "en", "ru"] as const) {
      lesson02Slides[locale].forEach((slide, index) => {
        expect(slide.id).toBe(index + 1);
        expect(slide.title.length).toBeGreaterThan(3);
        expect(slide.content.length).toBeGreaterThan(10);
      });
    }
  });

  it("should have exactly 1 quiz question with exactly one correct option", () => {
    expect(lesson02Quiz).toHaveLength(1);

    lesson02Quiz.forEach((q, index) => {
      expect(q.position).toBe(index + 1);
      expect(q.options.length).toBeGreaterThanOrEqual(3);
      const correctCount = q.options.filter((o) => o.isCorrect).length;
      expect(correctCount).toBe(1);
      expect(q.explanation.length).toBeGreaterThan(5);
    });
  });

  it("should have exactly 1 model practice task with valid numerical answer", () => {
    expect(lesson02Practice).toHaveLength(1);

    const task = lesson02Practice[0];
    expect(task.position).toBe(1);
    expect(Number.isFinite(task.answer)).toBe(true);
    expect(task.tolerance).toBeGreaterThan(0);
    expect(task.unit.length).toBeGreaterThan(0);
    expect(task.hint.length).toBeGreaterThan(5);
    expect(task.solution).toContain("Namunaviy yechim");
  });

  it("should correctly compute practice answers", () => {
    // 12 + 3 = 15 m/s
    expect(lesson02Practice[0].answer).toBe(15);
  });

  it("should export a valid static lesson object", () => {
    expect(lesson02Static.id).toBe("ilk-qadam-02");
    expect(lesson02Static.number).toBe("02");
    expect(lesson02Static.quiz).toHaveLength(1);
    expect(lesson02Static.practice).toHaveLength(1);
    expect(lesson02Static.homework.title.length).toBeGreaterThan(5);
  });
});
