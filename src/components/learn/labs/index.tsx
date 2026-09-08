import type { ReactNode } from "react";

import type { Locale } from "@/lib/i18n";
import { AcceleratedMotionLab } from "./AcceleratedMotionLab";
import { FreeFallLab } from "./FreeFallLab";
import { MeasurementLab } from "./MeasurementLab";
import { RelativeMotionLab } from "./RelativeMotionLab";
import { UniformMotionLab } from "./UniformMotionLab";

export function getLessonLab(number: string, locale: Locale): ReactNode | null {
  if (number === "01") {
    return <MeasurementLab locale={locale} />;
  }
  if (number === "02") {
    return <RelativeMotionLab locale={locale} />;
  }
  if (number === "03") {
    return <UniformMotionLab locale={locale} />;
  }
  if (number === "04") {
    return <AcceleratedMotionLab locale={locale} />;
  }
  if (number === "05") {
    return <FreeFallLab locale={locale} />;
  }
  return null;
}

export function hasLessonLab(number: string): boolean {
  return number === "01" || number === "02" || number === "03" || number === "04" || number === "05";
}

export { AcceleratedMotionLab } from "./AcceleratedMotionLab";
export { FreeFallLab } from "./FreeFallLab";
export { MeasurementLab } from "./MeasurementLab";
export { RelativeMotionLab } from "./RelativeMotionLab";
export { UniformMotionLab } from "./UniformMotionLab";
