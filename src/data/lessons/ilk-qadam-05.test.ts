import { describe, expect, it } from "vitest";

import { lesson05Practice, lesson05Quiz, lesson05Slides, lesson05Static } from "./ilk-qadam-05";

describe("Lesson 05 (Checkpoint 1) Data Integrity", () => {
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

  it("should have exactly 5 quiz questions for Checkpoint test (5 of 10 items)", () => {
    expect(lesson05Quiz).toHaveLength(5);

    lesson05Quiz.forEach((q, index) => {
      expect(q.position).toBe(index + 1);
      expect(q.options.length).toBeGreaterThanOrEqual(3);
      const correctCount = q.options.filter((o) => o.isCorrect).length;
      expect(correctCount).toBe(1);
      expect(q.explanation.length).toBeGreaterThan(5);
    });
  });

  it("should have exactly 5 calculation problems for Checkpoint test (5 of 10 items)", () => {
    expect(lesson05Practice).toHaveLength(5);

    lesson05Practice.forEach((task, index) => {
      expect(task.position).toBe(index + 1);
      expect(Number.isFinite(task.answer)).toBe(true);
      expect(task.tolerance).toBeGreaterThan(0);
      expect(task.unit.length).toBeGreaterThan(0);
      expect(task.hint.length).toBeGreaterThan(5);
      expect(task.solution).toContain("Namunaviy yechim");
    });
  });

  it("should total exactly 10 test items (5 quiz questions + 5 practice problems)", () => {
    const totalItems = lesson05Quiz.length + lesson05Practice.length;
    expect(totalItems).toBe(10);
  });

  it("should correctly compute practice answers", () => {
    // Task 1: 36 km/h -> 10 m/s
    expect(lesson05Practice[0].answer).toBe(10);
    // Task 2: 8 + 2 = 10 m/s
    expect(lesson05Practice[1].answer).toBe(10);
    // Task 3: 5 * 20 = 100 m
    expect(lesson05Practice[2].answer).toBe(100);
    // Task 4: 0 + 2 * 5 = 10 m/s
    expect(lesson05Practice[3].answer).toBe(10);
    // Task 5: 10 * 4 / 2 = 20 m
    expect(lesson05Practice[4].answer).toBe(20);
  });

  it("should export a valid static lesson object for Checkpoint 1", () => {
    expect(lesson05Static.id).toBe("ilk-qadam-05");
    expect(lesson05Static.number).toBe("05");
    expect(lesson05Static.quiz).toHaveLength(5);
    expect(lesson05Static.practice).toHaveLength(5);
    expect(lesson05Static.title).toContain("Checkpoint");
    expect(lesson05Static.homework.title.length).toBeGreaterThan(5);
  });
});
