"use client";

import { Check, Lightbulb, X } from "lucide-react";
import { useState } from "react";

import { MathContent } from "@/components/learn/MathContent";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { useLessonStore } from "@/store/useLessonStore";
import type { PracticeTask } from "@/types/lesson";

interface PracticeBlockProps {
  lessonId: string;
  tasks: PracticeTask[];
  locale: Locale;
  /** Har javobdan keyin chaqiriladi — XP va xatolarni qayd etish uchun. */
  onResult?: (taskId: string, isCorrect: boolean, firstTry: boolean) => void;
}

export function PracticeBlock({ lessonId, tasks, locale, onResult }: PracticeBlockProps) {
  const submitProblem = useLessonStore((state) => state.submitProblem);
  const attempts = useLessonStore((state) => state.progressByLesson[lessonId]?.problemAttempts);
  const [drafts, setDrafts] = useState<Record<string, string>>({});
  const [showHintMap, setShowHintMap] = useState<Record<string, boolean>>({});

  const labels = {
    check: locale === "uz" ? "Tekshirish" : locale === "en" ? "Check" : "Проверить",
    correct: locale === "uz" ? "To‘g‘ri" : locale === "en" ? "Correct" : "Верно",
    retry: locale === "uz" ? "Qayta urinib ko‘ring" : locale === "en" ? "Try again" : "Попробуйте ещё",
    placeholder: locale === "uz" ? "Javob" : locale === "en" ? "Answer" : "Ответ",
    hintBtn: locale === "uz" ? "Yordam olish" : locale === "en" ? "Get hint" : "Подсказка",
  };

  const check = (task: PracticeTask) => {
    const raw = drafts[task.id] ?? (attempts?.[task.id] ? String(attempts[task.id].submittedValue) : "");
    const parsed = Number.parseFloat(raw.replace(",", "."));
    if (!Number.isFinite(parsed)) return;
    const isCorrect = Math.abs(parsed - task.answer) <= task.tolerance;
    const firstTry = !attempts?.[task.id];
    submitProblem(lessonId, task.id, parsed, isCorrect);
    if (!isCorrect) {
      // Noto‘g‘ri bo‘lsa yordamni avtomatik ochamiz
      setShowHintMap((prev) => ({ ...prev, [task.id]: true }));
    }
    onResult?.(task.id, isCorrect, firstTry);
  };

  const toggleHint = (taskId: string) => {
    setShowHintMap((prev) => ({ ...prev, [taskId]: !prev[taskId] }));
  };

  return (
    <ol className="space-y-3.5">
      {tasks.map((task, index) => {
        const attempt = attempts?.[task.id];
        const solved = attempt?.isCorrect ?? false;
        const isHintVisible = showHintMap[task.id] || (attempt && !solved);

        return (
          <li
            key={task.id}
            className={cn(
              "rounded-xl border p-4 sm:p-5 transition-colors",
              solved
                ? "border-emerald-500/30 bg-emerald-500/[0.04] dark:bg-emerald-500/[0.07]"
                : attempt
                  ? "border-rose-500/30 bg-rose-500/[0.03] dark:bg-rose-500/[0.06]"
                  : "border-border bg-card",
            )}
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex flex-1 items-start gap-3">
                <span className="mt-0.5 font-mono text-xs text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="flex-1 text-sm leading-6">
                  <MathContent content={task.prompt} inline />
                </div>
              </div>

              <div className="flex shrink-0 items-center gap-2 self-end sm:self-start">
                <div className="relative">
                  <Input
                    value={drafts[task.id] ?? (attempt ? String(attempt.submittedValue) : "")}
                    onChange={(event) =>
                      setDrafts((previous) => ({ ...previous, [task.id]: event.target.value }))
                    }
                    onKeyDown={(event) => {
                      if (event.key === "Enter") check(task);
                    }}
                    inputMode="decimal"
                    placeholder={labels.placeholder}
                    aria-label={`${index + 1}. ${task.prompt}`}
                    className={cn(
                      "min-h-11 w-32 pr-10 font-mono tabular-nums",
                      solved && "border-emerald-500/50 text-emerald-900 dark:text-emerald-300 font-semibold",
                    )}
                  />
                  {task.unit && (
                    <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 font-mono text-xs text-muted-foreground">
                      {task.unit}
                    </span>
                  )}
                </div>
                <Button
                  variant={solved ? "default" : "outline"}
                  onClick={() => check(task)}
                  className={cn(
                    "min-h-11 rounded-md",
                    solved && "bg-emerald-600 hover:bg-emerald-700 text-white",
                  )}
                >
                  {solved ? <Check className="size-4" /> : null}
                  {labels.check}
                </Button>
              </div>
            </div>

            {/* Hint & Solution */}
            {attempt && (
              <div
                className={cn(
                  "mt-3.5 flex items-start gap-2.5 border-t pt-3 text-sm leading-6",
                  solved ? "border-emerald-500/20" : "border-border",
                )}
              >
                {solved ? (
                  <Check className="mt-1 size-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                ) : (
                  <X className="mt-1 size-4 shrink-0 text-rose-500" />
                )}
                <div className="flex-1 text-muted-foreground">
                  <span className={cn("font-medium", solved ? "text-emerald-950 dark:text-emerald-300" : "text-rose-950 dark:text-rose-300")}>
                    {solved ? `${labels.correct}. ` : `${labels.retry}. `}
                  </span>
                  <MathContent content={solved ? (task.solution || task.hint) : task.hint} inline />
                </div>
              </div>
            )}

            {!attempt && task.hint && (
              <div className="mt-3 border-t border-border/50 pt-2.5">
                {isHintVisible ? (
                  <p className="flex items-start gap-2 text-xs leading-5 text-muted-foreground">
                    <Lightbulb className="mt-0.5 size-3.5 shrink-0 text-amber-500" />
                    <span><MathContent content={task.hint} inline className="text-xs" /></span>
                  </p>
                ) : (
                  <button
                    type="button"
                    onClick={() => toggleHint(task.id)}
                    className="flex items-center gap-1.5 font-mono text-[11px] text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Lightbulb className="size-3" />
                    <span>{labels.hintBtn}</span>
                  </button>
                )}
              </div>
            )}
          </li>
        );
      })}
    </ol>
  );
}
