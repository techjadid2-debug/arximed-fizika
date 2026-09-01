"use client";

import { Flame, Zap } from "lucide-react";

import { useProgressStore } from "@/store/useProgressStore";
import { cn } from "@/lib/utils";

/**
 * Header'dagi streak va XP ko'rsatkichi.
 * Gidratatsiyagacha ko'rsatilmaydi — localStorage server bilan farq qiladi.
 */
export function ProgressBadges() {
  const hasHydrated = useProgressStore((state) => state.hasHydrated);
  const xp = useProgressStore((state) => state.xp);
  const streakDays = useProgressStore((state) => state.streakDays);

  if (!hasHydrated || xp === 0) return null;

  return (
    <div className="flex items-center gap-1.5">
      {streakDays > 0 && (
        <span
          title={`${streakDays} kun ketma-ket`}
          className="flex min-h-9 items-center gap-1.5 rounded-md border border-border px-2.5 font-mono text-xs tabular-nums"
        >
          <Flame className={cn("size-3.5", streakDays >= 3 ? "text-foreground" : "text-muted-foreground")} />
          {streakDays}
        </span>
      )}
      <span
        title={`${xp} XP`}
        className="flex min-h-9 items-center gap-1.5 rounded-md border border-border px-2.5 font-mono text-xs tabular-nums"
      >
        <Zap className="size-3.5 text-muted-foreground" />
        {xp}
      </span>
    </div>
  );
}
