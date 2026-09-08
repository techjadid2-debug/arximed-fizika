import { describe, expect, it } from "vitest";

import { detailedCheatsheets, getLessonCheatsheet } from "./ilk-qadam";

describe("Ilk Qadam Cheatsheets", () => {
  it("should have 16 detailed cheatsheets for Quarter 1 (Mexanika)", () => {
    const keys = Object.keys(detailedCheatsheets);
    expect(keys.length).toBe(16);

    for (let i = 1; i <= 16; i++) {
      const num = String(i).padStart(2, "0");
      const sheet = detailedCheatsheets[num];
      expect(sheet).toBeDefined();
      expect(sheet.number).toBe(num);
      expect(sheet.title.length).toBeGreaterThan(5);
      expect(sheet.hook.length).toBeGreaterThan(20);
      expect(sheet.teachingPlan.length).toBeGreaterThanOrEqual(2);
      expect(sheet.keyFormulas.length).toBeGreaterThanOrEqual(1);
      expect(sheet.workedExamples.length).toBeGreaterThanOrEqual(1);
      expect(sheet.commonPitfalls.length).toBeGreaterThanOrEqual(1);
      expect(sheet.realWorldApplications.length).toBeGreaterThanOrEqual(1);
    }
  });

  it("should generate a fallback cheatsheet for lessons 17-78 without errors", () => {
    const sheet17 = getLessonCheatsheet("17");
    expect(sheet17).toBeDefined();
    expect(sheet17.number).toBe("17");
    expect(sheet17.quarter).toBe(2);
    expect(sheet17.title).toContain("Moddaning atom-molekulyar tuzilishi");
    expect(sheet17.teachingPlan.length).toBeGreaterThan(0);

    const sheet78 = getLessonCheatsheet("78");
    expect(sheet78).toBeDefined();
    expect(sheet78.number).toBe("78");
    expect(sheet78.quarter).toBe(5);
  });
});
