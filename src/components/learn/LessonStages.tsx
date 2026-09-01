"use client";

import { Check, Lock } from "lucide-react";

import { cn } from "@/lib/utils";

export const STAGE_IDS = ["video", "quiz", "homework"] as const;
export type StageId = (typeof STAGE_IDS)[number];

interface LessonStagesProps {
  labels: Record<StageId, string>;
  active: StageId;
  completed: Record<StageId, boolean>;
  unlocked: Record<StageId, boolean>;
  onSelect: (stage: StageId) => void;
}

export function LessonStages({ labels, active, completed, unlocked, onSelect }: LessonStagesProps) {
  return (
    <nav aria-label="Dars bosqichlari" className="flex flex-wrap items-center gap-1.5">
      {STAGE_IDS.map((id, index) => {
        const isActive = id === active;
        const isDone = completed[id];
        const isOpen = unlocked[id];
        return (
          <button
            key={id}
            type="button"
            disabled={!isOpen}
            aria-current={isActive ? "step" : undefined}
            onClick={() => onSelect(id)}
            className={cn(
              "flex min-h-11 items-center gap-2.5 rounded-md border px-4 text-sm transition-colors",
              isActive
                ? "border-foreground/30 bg-foreground/[0.07] font-medium text-foreground"
                : isOpen
                  ? "border-border bg-card text-muted-foreground hover:bg-accent hover:text-foreground"
                  : "cursor-not-allowed border-border/60 text-muted-foreground/50",
            )}
          >
            <span
              className={cn(
                "flex size-5 shrink-0 items-center justify-center rounded-sm font-mono text-[10px]",
                isDone ? "bg-foreground text-background" : "border border-border",
              )}
            >
              {isDone ? <Check className="size-3" strokeWidth={3} /> : index + 1}
            </span>
            {labels[id]}
            {!isOpen && <Lock className="size-3.5 shrink-0" />}
          </button>
        );
      })}
    </nav>
  );
}
