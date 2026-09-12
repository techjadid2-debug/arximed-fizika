import type { Locale } from "@/lib/i18n";
import type { Lesson } from "@/types/lesson";
import { lesson01Slides, lesson01Static, type LessonSlide } from "./ilk-qadam-01";
import { lesson02Slides, lesson02Static } from "./ilk-qadam-02";
import { lesson03Slides, lesson03Static } from "./ilk-qadam-03";
import { lesson04Slides, lesson04Static } from "./ilk-qadam-04";
import { lesson05Slides, lesson05Static } from "./ilk-qadam-05";
import { lesson06Slides, lesson06Static } from "./ilk-qadam-06";
import { lesson07Slides, lesson07Static } from "./ilk-qadam-07";
import { lesson08Slides, lesson08Static } from "./ilk-qadam-08";
import { lesson09Slides, lesson09Static } from "./ilk-qadam-09";
import { lesson10Slides, lesson10Static } from "./ilk-qadam-10";

export function getStaticLesson(courseSlug: string, number: string): Lesson | null {
  if (courseSlug === "ilk-qadam") {
    if (number === "01") return lesson01Static;
    if (number === "02") return lesson02Static;
    if (number === "03") return lesson03Static;
    if (number === "04") return lesson04Static;
    if (number === "05") return lesson05Static;
    if (number === "06") return lesson06Static;
    if (number === "07") return lesson07Static;
    if (number === "08") return lesson08Static;
    if (number === "09") return lesson09Static;
    if (number === "10") return lesson10Static;
  }
  return null;
}

export function getLessonSlides(number: string, locale: Locale): LessonSlide[] {
  if (number === "02") return lesson02Slides[locale] ?? lesson02Slides.uz;
  if (number === "03") return lesson03Slides[locale] ?? lesson03Slides.uz;
  if (number === "04") return lesson04Slides[locale] ?? lesson04Slides.uz;
  if (number === "05") return lesson05Slides[locale] ?? lesson05Slides.uz;
  if (number === "06") return lesson06Slides[locale] ?? lesson06Slides.uz;
  if (number === "07") return lesson07Slides[locale] ?? lesson07Slides.uz;
  if (number === "08") return lesson08Slides[locale] ?? lesson08Slides.uz;
  if (number === "09") return lesson09Slides[locale] ?? lesson09Slides.uz;
  if (number === "10") return lesson10Slides[locale] ?? lesson10Slides.uz;
  return lesson01Slides[locale] ?? lesson01Slides.uz;
}

