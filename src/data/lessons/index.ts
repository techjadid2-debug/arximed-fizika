import { projectileMotionLesson } from "@/data/lessons/projectile-motion";
import type { Lesson } from "@/types/physics";

const lessons: Lesson[] = [projectileMotionLesson];

export function getLesson(trackId: string, lessonId: string) {
  return lessons.find(
    (lesson) => lesson.trackId === trackId && lesson.id === lessonId,
  );
}

export function getAllLessons() {
  return lessons;
}
