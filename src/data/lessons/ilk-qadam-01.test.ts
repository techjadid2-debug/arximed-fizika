import { describe, expect, it } from "vitest";

import { lesson01Practice, lesson01Quiz, lesson01Slides } from "./ilk-qadam-01";

describe("Lesson 01 Data Integrity", () => {
  it("should have exactly 12 slides for uz, en, and ru locales", () => {
    expect(lesson01Slides.uz).toHaveLength(12);
    expect(lesson01Slides.en).toHaveLength(12);
    expect(lesson01Slides.ru).toHaveLength(12);

    for (const locale of ["uz", "en", "ru"] as const) {
      lesson01Slides[locale].forEach((slide, index) => {
        expect(slide.id).toBe(index + 1);
        expect(slide.title.length).toBeGreaterThan(3);
        expect(slide.content.length).toBeGreaterThan(10);
      });
    }
  });

  it("should have exactly 10 quiz questions with exactly one correct option each", () => {
    expect(lesson01Quiz).toHaveLength(10);

    lesson01Quiz.forEach((q, index) => {
      expect(q.position).toBe(index + 1);
      expect(q.options.length).toBeGreaterThanOrEqual(3);
      const correctCount = q.options.filter((o) => o.isCorrect).length;
      expect(correctCount).toBe(1);
      expect(q.explanation.length).toBeGreaterThan(5);
    });
  });

  it("should have exactly 10 practice tasks sorted with valid answers and tolerances", () => {
    expect(lesson01Practice).toHaveLength(10);

    lesson01Practice.forEach((task, index) => {
      expect(task.position).toBe(index + 1);
      expect(Number.isFinite(task.answer)).toBe(true);
      expect(task.tolerance).toBeGreaterThan(0);
      expect(task.unit.length).toBeGreaterThan(0);
      expect(task.hint.length).toBeGreaterThan(5);
      expect(task.solution.length).toBeGreaterThan(5);
    });
  });

  it("should correctly compute practice answers", () => {
    // Task 1: 310 km -> m
    expect(lesson01Practice[0].answer).toBe(310000);
    // Task 2: 45 min -> s
    expect(lesson01Practice[1].answer).toBe(2700);
    // Task 3: 350 g -> kg
    expect(lesson01Practice[2].answer).toBe(0.35);
    // Task 4: 300 cm^2 -> m^2
    expect(lesson01Practice[3].answer).toBe(0.03);
    // Task 5: 2.5 L -> cm^3
    expect(lesson01Practice[4].answer).toBe(2500);
    // Task 6: 108 km/h -> m/s
    expect(lesson01Practice[5].answer).toBe(30);
    // Task 7: 2.7 g/cm^3 -> kg/m^3
    expect(lesson01Practice[6].answer).toBe(2700);
    // Task 8: (1.5 * 10^-3) / (3 * 10^-9) = 500,000
    expect(lesson01Practice[7].answer).toBe(500000);
    // Task 9: 180,000 cm / 9000 s = 20 cm/s
    expect(lesson01Practice[8].answer).toBe(20);
    // Task 10: 800 N / 0.04 m^2 = 20,000 Pa = 20 kPa
    expect(lesson01Practice[9].answer).toBe(20);
  });
});
