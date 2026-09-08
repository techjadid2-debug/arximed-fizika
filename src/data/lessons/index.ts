import type { Locale } from "@/lib/i18n";
import type { Lesson } from "@/types/lesson";
import { lesson01Slides, lesson01Static, type LessonSlide } from "./ilk-qadam-01";
import { lesson02Slides, lesson02Static } from "./ilk-qadam-02";

export function getStaticLesson(courseSlug: string, number: string): Lesson | null {
  if (courseSlug === "ilk-qadam") {
    if (number === "01") return lesson01Static;
    if (number === "02") return lesson02Static;
  }
  return null;
}

export function getLessonSlides(number: string, locale: Locale): LessonSlide[] {
  if (number === "02") {
    return lesson02Slides[locale] ?? lesson02Slides.uz;
  }
  return lesson01Slides[locale] ?? lesson01Slides.uz;
}
