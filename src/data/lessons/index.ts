import type { Locale } from "@/lib/i18n";
import type { Lesson } from "@/types/lesson";
import { lesson01Slides, lesson01Static, type LessonSlide } from "./ilk-qadam-01";
import { lesson02Slides, lesson02Static } from "./ilk-qadam-02";
import { lesson03Slides, lesson03Static } from "./ilk-qadam-03";
import { lesson04Slides, lesson04Static } from "./ilk-qadam-04";
import { lesson05Slides, lesson05Static } from "./ilk-qadam-05";

export function getStaticLesson(courseSlug: string, number: string): Lesson | null {
  if (courseSlug === "ilk-qadam") {
    if (number === "01") return lesson01Static;
    if (number === "02") return lesson02Static;
    if (number === "03") return lesson03Static;
    if (number === "04") return lesson04Static;
    if (number === "05") return lesson05Static;
  }
  return null;
}

export function getLessonSlides(number: string, locale: Locale): LessonSlide[] {
  if (number === "02") {
    return lesson02Slides[locale] ?? lesson02Slides.uz;
  }
  if (number === "03") {
    return lesson03Slides[locale] ?? lesson03Slides.uz;
  }
  if (number === "04") {
    return lesson04Slides[locale] ?? lesson04Slides.uz;
  }
  if (number === "05") {
    return lesson05Slides[locale] ?? lesson05Slides.uz;
  }
  return lesson01Slides[locale] ?? lesson01Slides.uz;
}
