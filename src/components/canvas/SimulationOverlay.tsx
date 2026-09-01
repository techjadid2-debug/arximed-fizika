"use client";

import { Pause, Play, RotateCcw } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { Locale } from "@/lib/i18n";
import { usePhysicsStore } from "@/store/usePhysicsStore";

export function SimulationTelemetry({ locale = "uz" }: { locale?: Locale }) {
  const telemetry = usePhysicsStore((state) => state.telemetry);

  const labels = {
    time: locale === "uz" ? "Vaqt" : locale === "en" ? "Time" : "Время",
    speed: locale === "uz" ? "Tezlik" : locale === "en" ? "Speed" : "Скорость",
    range: locale === "uz" ? "Masofa" : locale === "en" ? "Range" : "Дистанция",
  };

  const metrics = [
    {
      label: labels.time,
      value: `${(telemetry?.elapsed ?? 0).toFixed(2)} s`,
    },
    {
      label: labels.speed,
      value: `${(telemetry?.speed ?? 0).toFixed(1)} m/s`,
    },
    {
      label: labels.range,
      value: `${(telemetry?.horizontalRange ?? 0).toFixed(1)} m`,
    },
  ];

  return (
    <div className="pointer-events-none absolute inset-x-3 top-3 z-10 grid grid-cols-3 gap-1.5 sm:inset-x-auto sm:left-4 sm:top-4 sm:gap-2">
      {metrics.map((metric) => (
        <div
          key={metric.label}
          className="min-w-0 rounded-md border border-border/60 bg-background/85 px-2.5 py-2 backdrop-blur-md shadow-xs sm:min-w-24 sm:px-3"
        >
          <p className="truncate text-[9px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
            {metric.label}
          </p>
          <p className="mt-0.5 truncate font-mono text-[11px] tabular-nums text-foreground sm:text-xs">
            {metric.value}
          </p>
        </div>
      ))}
    </div>
  );
}

export function SimulationControls() {
  const isRunning = usePhysicsStore((state) => state.isRunning);
  const toggleRunning = usePhysicsStore((state) => state.toggleRunning);
  const restart = usePhysicsStore((state) => state.restart);

  return (
    <div className="absolute bottom-4 right-4 z-10 flex items-center gap-2">
      <Button
        type="button"
        variant="outline"
        size="icon"
        className="size-11 rounded-md border-border/80 bg-background/80 text-foreground backdrop-blur-md hover:bg-accent"
        onClick={restart}
        aria-label="Simulyatsiyani qayta boshlash"
      >
        <RotateCcw className="size-4" aria-hidden="true" />
      </Button>
      <Button
        type="button"
        size="icon"
        className="size-11 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 shadow-xs"
        onClick={toggleRunning}
        aria-label={isRunning ? "Simulyatsiyani pauza qilish" : "Simulyatsiyani boshlash"}
      >
        {isRunning ? (
          <Pause className="size-4" aria-hidden="true" />
        ) : (
          <Play className="ml-0.5 size-4" aria-hidden="true" />
        )}
      </Button>
    </div>
  );
}
