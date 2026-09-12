import { describe, expect, it } from "vitest";

import { lesson10Practice, lesson10Quiz, lesson10Slides, lesson10Static } from "./ilk-qadam-10";

describe("Lesson 10 (Checkpoint 2) Data Integrity", () => {
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

  it("should have exactly 5 quiz questions for Checkpoint test (5 of 10 items)", () => {
    expect(lesson10Quiz).toHaveLength(5);

    lesson10Quiz.forEach((q, index) => {
      expect(q.position).toBe(index + 1);
      expect(q.options.length).toBeGreaterThanOrEqual(3);
      const correctCount = q.options.filter((o) => o.isCorrect).length;
      expect(correctCount).toBe(1);
      expect(q.explanation.length).toBeGreaterThan(5);
    });
  });

  it("should have exactly 5 calculation problems for Checkpoint test (5 of 10 items)", () => {
    expect(lesson10Practice).toHaveLength(5);

    lesson10Practice.forEach((task, index) => {
      expect(task.position).toBe(index + 1);
      expect(Number.isFinite(task.answer)).toBe(true);
      expect(task.tolerance).toBeGreaterThan(0);
      expect(task.unit.length).toBeGreaterThan(0);
      expect(task.hint.length).toBeGreaterThan(5);
      expect(task.solution).toContain("Namunaviy yechim");
    });
  });

  it("should total exactly 10 test items (5 quiz questions + 5 practice problems)", () => {
    const totalItems = lesson10Quiz.length + lesson10Practice.length;
    expect(totalItems).toBe(10);
  });

  it("should correctly compute practice answers", () => {
    // Task 1: 15 - 15 = 0 N
    expect(lesson10Practice[0].answer).toBe(0);
    // Task 2: 12 / 3 = 4 m/s²
    expect(lesson10Practice[1].answer).toBe(4);
    // Task 3: 50 N
    expect(lesson10Practice[2].answer).toBe(50);
    // Task 4: 40 * 10 = 400 N
    expect(lesson10Practice[3].answer).toBe(400);
    // Task 5: 0.2 * 2 * 10 = 4 N
    expect(lesson10Practice[4].answer).toBe(4);
  });

  it("should export a valid static lesson object for Checkpoint 2", () => {
    expect(lesson10Static.id).toBe("ilk-qadam-10");
    expect(lesson10Static.number).toBe("10");
    expect(lesson10Static.quiz).toHaveLength(5);
    expect(lesson10Static.practice).toHaveLength(5);
    expect(lesson10Static.title).toContain("Checkpoint");
    expect(lesson10Static.homework.title.length).toBeGreaterThan(5);
  });
});
