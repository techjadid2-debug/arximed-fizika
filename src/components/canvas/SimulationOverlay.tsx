"use client";

import { Pause, Play, RotateCcw } from "lucide-react";

import { Button } from "@/components/ui/button";
import { usePhysicsStore } from "@/store/usePhysicsStore";

export function SimulationTelemetry() {
  const telemetry = usePhysicsStore((state) => state.telemetry);

  const metrics = [
    {
      label: "Vaqt",
      value: `${(telemetry?.elapsed ?? 0).toFixed(2)} s`,
    },
    {
      label: "Tezlik",
      value: `${(telemetry?.speed ?? 0).toFixed(1)} m/s`,
    },
    {
      label: "Masofa",
      value: `${(telemetry?.horizontalRange ?? 0).toFixed(1)} m`,
    },
  ];

  return (
    <div className="pointer-events-none absolute inset-x-3 top-3 z-10 grid grid-cols-3 gap-1.5 sm:inset-x-auto sm:left-4 sm:top-4 sm:gap-2">
      {metrics.map((metric) => (
        <div
          key={metric.label}
          className="min-w-0 border border-white/10 bg-black/80 px-2.5 py-2 backdrop-blur-md sm:min-w-24 sm:px-3"
        >
          <p className="truncate text-[9px] font-medium uppercase tracking-[0.16em] text-zinc-500">
            {metric.label}
          </p>
          <p className="mt-0.5 truncate font-mono text-[11px] tabular-nums text-zinc-100 sm:text-xs">
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
        className="size-11 border-white/15 bg-black/80 text-zinc-100 backdrop-blur-md hover:bg-zinc-900"
        onClick={restart}
        aria-label="Simulyatsiyani qayta boshlash"
      >
        <RotateCcw className="size-4" aria-hidden="true" />
      </Button>
      <Button
        type="button"
        size="icon"
        className="size-11 bg-zinc-50 text-black hover:bg-zinc-200"
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
