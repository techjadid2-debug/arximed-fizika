import { describe, expect, it } from "vitest";

import type { Course, LessonSummary } from "@/types/lesson";

function isLessonUnlocked(
  course: Course,
  lesson: LessonSummary,
  completedLessons: string[],
): boolean {
  const isDone = (number: string) => completedLessons.includes(`${course.slug}-${number}`);
  const done = isDone(lesson.number);
  const previousGlobal = course.lessons.find(
    (item) => item.position === lesson.position - 1,
  );
  return lesson.position === 1 || done || (previousGlobal ? isDone(previousGlobal.number) : false);
}

describe("Roadmap Unlocking Logic", () => {
  const mockCourse: Course = {
    id: "course-1",
    slug: "ilk-qadam",
    title: "Ilk qadam",
    description: "78 lessons",
    modules: [
      { id: "mod-1", position: 1, title: "1-Chorak (Mexanika)" },
      { id: "mod-2", position: 2, title: "2-Chorak (Termodinamika)" },
    ],
    lessons: [
      { id: "l-1", number: "01", position: 1, title: "Lesson 1", moduleId: "mod-1", hasVideo: true, isPublished: true },
      { id: "l-2", number: "02", position: 2, title: "Lesson 2", moduleId: "mod-1", hasVideo: true, isPublished: true },
      { id: "l-16", number: "16", position: 16, title: "Lesson 16 (Quarter 1 End)", moduleId: "mod-1", hasVideo: true, isPublished: true },
      { id: "l-17", number: "17", position: 17, title: "Lesson 17 (Quarter 2 Start)", moduleId: "mod-2", hasVideo: true, isPublished: true },
      { id: "l-18", number: "18", position: 18, title: "Lesson 18", moduleId: "mod-2", hasVideo: true, isPublished: true },
    ],
  };

  it("should unlock lesson 1 by default", () => {
    const l1 = mockCourse.lessons[0];
    expect(isLessonUnlocked(mockCourse, l1, [])).toBe(true);
  });

  it("should lock lesson 2 when lesson 1 is not completed", () => {
    const l2 = mockCourse.lessons[1];
    expect(isLessonUnlocked(mockCourse, l2, [])).toBe(false);
  });

  it("should unlock lesson 2 when lesson 1 is completed", () => {
    const l2 = mockCourse.lessons[1];
    expect(isLessonUnlocked(mockCourse, l2, ["ilk-qadam-01"])).toBe(true);
  });

  it("should unlock Quarter 2 first lesson (17) when Quarter 1 last lesson (16) is completed", () => {
    const l17 = mockCourse.lessons[3];
    expect(isLessonUnlocked(mockCourse, l17, ["ilk-qadam-16"])).toBe(true);
  });

  it("should keep Quarter 2 lesson 17 locked if Quarter 1 lesson 16 is NOT completed", () => {
    const l17 = mockCourse.lessons[3];
    expect(isLessonUnlocked(mockCourse, l17, ["ilk-qadam-15"])).toBe(false);
  });
});
