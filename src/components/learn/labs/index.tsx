import type { ReactNode } from "react";

import type { Locale } from "@/lib/i18n";
import { MeasurementLab } from "./MeasurementLab";
import { RelativeMotionLab } from "./RelativeMotionLab";

export function getLessonLab(number: string, locale: Locale): ReactNode | null {
  if (number === "01") {
    return <MeasurementLab locale={locale} />;
  }
  if (number === "02") {
    return <RelativeMotionLab locale={locale} />;
  }
  return null;
}

export function hasLessonLab(number: string): boolean {
  return number === "01" || number === "02";
}

export { MeasurementLab } from "./MeasurementLab";
export { RelativeMotionLab } from "./RelativeMotionLab";
