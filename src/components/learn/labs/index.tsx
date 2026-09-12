import dynamic from "next/dynamic";
import type { ReactNode } from "react";

import type { Locale } from "@/lib/i18n";

function LabSkeleton() {
  return (
    <div className="flex min-h-[440px] w-full animate-pulse items-center justify-center rounded-2xl border border-border bg-card/60 p-8">
      <div className="flex flex-col items-center gap-3">
        <div className="size-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
        <span className="font-mono text-xs text-muted-foreground">Laboratoriya simulyatori yuklanmoqda...</span>
      </div>
    </div>
  );
}

const DynamicMeasurementLab = dynamic(
  () => import("./MeasurementLab").then((m) => m.MeasurementLab),
  { ssr: false, loading: LabSkeleton },
);

const DynamicRelativeMotionLab = dynamic(
  () => import("./RelativeMotionLab").then((m) => m.RelativeMotionLab),
  { ssr: false, loading: LabSkeleton },
);

const DynamicUniformMotionLab = dynamic(
  () => import("./UniformMotionLab").then((m) => m.UniformMotionLab),
  { ssr: false, loading: LabSkeleton },
);

const DynamicAcceleratedMotionLab = dynamic(
  () => import("./AcceleratedMotionLab").then((m) => m.AcceleratedMotionLab),
  { ssr: false, loading: LabSkeleton },
);

const DynamicFreeFallLab = dynamic(
  () => import("./FreeFallLab").then((m) => m.FreeFallLab),
  { ssr: false, loading: LabSkeleton },
);

const DynamicNewtonSecondLawLab = dynamic(
  () => import("./NewtonSecondLawLab").then((m) => m.NewtonSecondLawLab),
  { ssr: false, loading: LabSkeleton },
);

const DynamicFrictionLab = dynamic(
  () => import("./FrictionLab").then((m) => m.FrictionLab),
  { ssr: false, loading: LabSkeleton },
);

export function getLessonLab(number: string, locale: Locale): ReactNode | null {
  if (number === "01") {
    return <DynamicMeasurementLab locale={locale} />;
  }
  if (number === "02") {
    return <DynamicRelativeMotionLab locale={locale} />;
  }
  if (number === "03") {
    return <DynamicUniformMotionLab locale={locale} />;
  }
  if (number === "04") {
    return <DynamicAcceleratedMotionLab locale={locale} />;
  }
  if (number === "05") {
    return <DynamicFreeFallLab locale={locale} />;
  }
  if (number === "07") {
    return <DynamicNewtonSecondLawLab locale={locale} />;
  }
  if (number === "10") {
    return <DynamicFrictionLab locale={locale} />;
  }
  return null;
}

export function hasLessonLab(number: string): boolean {
  return (
    number === "01" ||
    number === "02" ||
    number === "03" ||
    number === "04" ||
    number === "05" ||
    number === "07" ||
    number === "10"
  );
}

export {
  DynamicMeasurementLab as MeasurementLab,
  DynamicRelativeMotionLab as RelativeMotionLab,
  DynamicUniformMotionLab as UniformMotionLab,
  DynamicAcceleratedMotionLab as AcceleratedMotionLab,
  DynamicFreeFallLab as FreeFallLab,
  DynamicNewtonSecondLawLab as NewtonSecondLawLab,
  DynamicFrictionLab as FrictionLab,
};
