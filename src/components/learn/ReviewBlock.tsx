"use client";

import { CheckCircle2, RotateCcw, XCircle } from "lucide-react";

import { MathContent } from "@/components/learn/MathContent";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useLessonStore } from "@/store/useLessonStore";
import {
  dueMistakes,
  todayKey,
  useProgressStore,
  XP,
} from "@/store/useProgressStore";
import type { Lesson } from "@/types/lesson";

/**
 * Muddati kelgan xatolar bloki — Duolingo'dagi «takrorlash».
 * Noto'g'ri javob berilgan savol 1 → 3 → 7 kun oralig'ida qayta chiqadi.
 */
export function ReviewBlock({
  lessonId,
  lesson,
  title,
  hint,
}: {
  lessonId: string;
  lesson: Lesson;
  title: string;
  hint: string;
}) {
  const hasHydrated = useProgressStore((state) => state.hasHydrated);
  const mistakes = useProgressStore((state) => state.mistakes);
  const clearMistake = useProgressStore((state) => state.clearMistake);
  const recordMistake = useProgressStore((state) => state.recordMistake);
  const award = useProgressStore((state) => state.award);
  const submitQuiz = useLessonStore((state) => state.submitQuiz);
  const progress = useLessonStore((state) => state.progressByLesson[lessonId]);

  const today = todayKey();
  const due = hasHydrated
    ? dueMistakes(mistakes, today).filter((item) => item.lessonId === lessonId && item.kind === "quiz")
    : [];
  const questions = due
    .map((item) => lesson.quiz.find((question) => question.id === item.itemId))
    .filter((question) => question !== undefined);

  if (questions.length === 0) return null;

  return (
    <Card className="border border-amber-500/30 bg-amber-500/[0.04] dark:bg-amber-500/[0.06]">
      <CardContent className="p-6 sm:p-8">
        <div className="flex items-center gap-2.5">
          <RotateCcw className="size-4 text-amber-500" />
          <p className="font-mono text-xs uppercase tracking-wider text-amber-600 dark:text-amber-400 font-medium">
            {title}
          </p>
          <span className="font-mono text-xs tabular-nums text-muted-foreground">
            ({questions.length})
          </span>
        </div>
        <p className="mt-2.5 max-w-xl text-sm leading-6 text-muted-foreground">{hint}</p>

        <div className="mt-6 space-y-6">
          {questions.map((question) => {
            const attempt = progress?.quizAttempts[question.id];
            return (
              <div key={question.id} className="border-t border-border pt-5">
                <div className="font-medium leading-6">
                  <MathContent content={question.question} inline />
                </div>
                <div className="mt-4 grid gap-2.5 sm:grid-cols-3">
                  {question.options.map((option) => {
                    const isSelected = attempt?.selectedOptionId === option.id;
                    let buttonStyle = "border-border hover:bg-accent/50";
                    if (attempt) {
                      if (isSelected) {
                        buttonStyle = attempt.isCorrect
                          ? "border-emerald-500 bg-emerald-500/10 text-emerald-950 dark:text-emerald-300 font-medium"
                          : "border-rose-500 bg-rose-500/10 text-rose-950 dark:text-rose-300 font-medium";
                      } else if (option.isCorrect) {
                        buttonStyle =
                          "border-emerald-500/40 bg-emerald-500/5 text-emerald-900 dark:text-emerald-300/80";
                      } else {
                        buttonStyle = "opacity-50 border-border";
                      }
                    }

                    return (
                      <Button
                        key={option.id}
                        variant="outline"
                        className={cn("min-h-11 justify-start rounded-md px-4 text-left transition-all", buttonStyle)}
                        onClick={() => {
                          const isCorrect = option.isCorrect;
                          submitQuiz(lessonId, question.id, option.id, isCorrect);
                          if (isCorrect) {
                            clearMistake(question.id, today);
                            award(XP.quizCorrect, today);
                          } else {
                            recordMistake(lessonId, question.id, "quiz", today);
                          }
                        }}
                      >
                        <MathContent content={option.label} className="text-left leading-5" />
                      </Button>
                    );
                  })}
                </div>
                {attempt && (
                  <div
                    className={cn(
                      "mt-3.5 flex items-start gap-2.5 rounded-md p-3.5 text-sm leading-6",
                      attempt.isCorrect
                        ? "border border-emerald-500/20 bg-emerald-500/10 text-emerald-950 dark:text-emerald-200"
                        : "border border-border bg-muted/60 text-muted-foreground",
                    )}
                  >
                    {attempt.isCorrect ? (
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-500" />
                    ) : (
                      <XCircle className="mt-0.5 size-4 shrink-0 text-rose-500" />
                    )}
                    <div className="flex-1">
                      <MathContent content={question.explanation} inline className="text-sm" />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
