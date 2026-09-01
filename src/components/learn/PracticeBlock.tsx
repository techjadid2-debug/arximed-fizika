"use client";

import { Check, Lightbulb, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { PracticeTask } from "@/types/lesson";
import type { Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { useLessonStore } from "@/store/useLessonStore";

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

  const labels = {
    check: locale === "uz" ? "Tekshirish" : locale === "en" ? "Check" : "Проверить",
    correct: locale === "uz" ? "To‘g‘ri" : locale === "en" ? "Correct" : "Верно",
    retry: locale === "uz" ? "Qayta urinib ko‘ring" : locale === "en" ? "Try again" : "Попробуйте ещё",
    placeholder: locale === "uz" ? "Javob" : locale === "en" ? "Answer" : "Ответ",
  };

  const check = (task: PracticeTask) => {
    const parsed = Number.parseFloat((drafts[task.id] ?? "").replace(",", "."));
    if (!Number.isFinite(parsed)) return;
    const isCorrect = Math.abs(parsed - task.answer) <= task.tolerance;
    const firstTry = !attempts?.[task.id];
    submitProblem(lessonId, task.id, parsed, isCorrect);
    onResult?.(task.id, isCorrect, firstTry);
  };

  return (
    <ol className="space-y-3">
      {tasks.map((task, index) => {
        const attempt = attempts?.[task.id];
        const solved = attempt?.isCorrect ?? false;

        return (
          <li
            key={task.id}
            className={cn(
              "rounded-lg border p-4",
              solved ? "border-foreground/25 bg-foreground/[0.04]" : "border-border bg-muted/40",
            )}
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <p className="flex-1 text-sm leading-6">
                <span className="mr-3 font-mono text-xs text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {task.prompt}
              </p>

              <div className="flex shrink-0 items-center gap-2">
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
                    className="min-h-11 w-32 pr-12 font-mono tabular-nums"
                  />
                  <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 font-mono text-xs text-muted-foreground">
                    {task.unit}
                  </span>
                </div>
                <Button
                  variant={solved ? "secondary" : "outline"}
                  onClick={() => check(task)}
                  className="min-h-11 rounded-md"
                >
                  {solved ? <Check /> : null}
                  {labels.check}
                </Button>
              </div>
            </div>

            {attempt && (
              <p
                className={cn(
                  "mt-3 flex items-start gap-2 border-t pt-3 text-sm leading-6",
                  solved ? "border-foreground/15" : "border-border",
                )}
              >
                {solved ? (
                  <Check className="mt-1 size-3.5 shrink-0 text-foreground" />
                ) : (
                  <X className="mt-1 size-3.5 shrink-0 text-destructive" />
                )}
                <span className={solved ? "text-muted-foreground" : "text-muted-foreground"}>
                  <span className="font-medium text-foreground">
                    {solved ? `${labels.correct}. ` : `${labels.retry}. `}
                  </span>
                  {solved ? task.solution : task.hint}
                </span>
              </p>
            )}

            {!attempt && (
              <p className="mt-3 flex items-start gap-2 text-xs leading-5 text-muted-foreground">
                <Lightbulb className="mt-0.5 size-3.5 shrink-0" />
                {task.hint}
              </p>
            )}
          </li>
        );
      })}
    </ol>
  );
}
