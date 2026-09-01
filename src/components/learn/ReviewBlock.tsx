"use client";

import { RotateCcw } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { Lesson } from "@/types/lesson";
import { useLessonStore } from "@/store/useLessonStore";
import {
  dueMistakes,
  todayKey,
  useProgressStore,
  XP,
} from "@/store/useProgressStore";
import { cn } from "@/lib/utils";

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
    <Card className="border border-foreground/25 bg-foreground/[0.03]">
      <CardContent className="p-6 sm:p-8">
        <div className="flex items-center gap-2.5">
          <RotateCcw className="size-4 text-muted-foreground" />
          <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
            {title}
          </p>
          <span className="font-mono text-xs tabular-nums text-muted-foreground">
            {questions.length}
          </span>
        </div>
        <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground">{hint}</p>

        <div className="mt-6 space-y-6">
          {questions.map((question) => {
            const attempt = progress?.quizAttempts[question.id];
            return (
              <div key={question.id} className="border-t border-border pt-5">
                <p className="font-medium leading-6">{question.question}</p>
                <div className="mt-4 grid gap-2 sm:grid-cols-3">
                  {question.options.map((option) => (
                    <Button
                      key={option.id}
                      variant={attempt?.selectedOptionId === option.id ? "secondary" : "outline"}
                      className={cn("min-h-11 justify-start rounded-md px-4 text-left")}
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
                      {option.label}
                    </Button>
                  ))}
                </div>
                {attempt && (
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    <span className="font-medium text-foreground">
                      {attempt.isCorrect ? "✓ " : "→ "}
                    </span>
                    {question.explanation}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
