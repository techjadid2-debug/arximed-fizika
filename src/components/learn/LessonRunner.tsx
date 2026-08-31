"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, ChevronLeft } from "lucide-react";

import { PhysicsCanvas2D } from "@/components/canvas/PhysicsCanvas2D";
import {
  SimulationControls,
  SimulationTelemetry,
} from "@/components/canvas/SimulationOverlay";
import { LessonStepContent } from "@/components/learn/LessonStepContent";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { type LessonProgress, useLessonStore } from "@/store/useLessonStore";
import type { Lesson } from "@/types/physics";

interface LessonRunnerProps {
  lesson: Lesson;
}

const EMPTY_PROGRESS: LessonProgress = {
  activeStepIndex: 0,
  completedStepIds: [],
  inputs: {},
  quizAttempts: {},
  problemAttempts: {},
  completedActivityIds: [],
  updatedAt: "",
};

export function LessonRunner({ lesson }: LessonRunnerProps) {
  const progress = useLessonStore(
    (state) => state.progressByLesson[lesson.id] ?? EMPTY_PROGRESS,
  );
  const openLesson = useLessonStore((state) => state.openLesson);
  const goToStep = useLessonStore((state) => state.goToStep);
  const nextStep = useLessonStore((state) => state.nextStep);
  const previousStep = useLessonStore((state) => state.previousStep);
  const completeStep = useLessonStore((state) => state.completeStep);

  useEffect(() => {
    openLesson(lesson.id);
  }, [lesson.id, openLesson]);

  const activeStepIndex = Math.min(
    progress.activeStepIndex,
    lesson.steps.length - 1,
  );
  const activeStep = lesson.steps[activeStepIndex];
  if (!activeStep) return null;

  const isFirstStep = activeStepIndex === 0;
  const isLastStep = activeStepIndex === lesson.steps.length - 1;
  const quizAttempt = progress.quizAttempts[activeStep.id];
  const problemAttempt = progress.problemAttempts[activeStep.id];
  const requiresCorrectAnswer =
    (activeStep.type === "CONCEPT_QUIZ" && !quizAttempt?.isCorrect) ||
    (activeStep.type === "PROBLEM_SOLVING" && !problemAttempt?.isCorrect);
  const progressValue =
    (progress.completedStepIds.length / lesson.steps.length) * 100;

  const handleNext = () => {
    completeStep(lesson.id, activeStep.id);
    if (!isLastStep) nextStep(lesson.id, lesson.steps.length);
  };

  return (
    <main className="min-h-dvh bg-black text-zinc-50 lg:grid lg:h-dvh lg:grid-cols-[minmax(360px,38%)_minmax(0,62%)] lg:overflow-hidden">
      <section className="order-2 min-h-[60svh] border-t border-zinc-800 bg-black lg:order-1 lg:h-dvh lg:overflow-y-auto lg:border-r lg:border-t-0">
        <header className="sticky top-0 z-10 border-b border-zinc-800 bg-black/95 px-5 py-4 backdrop-blur-md sm:px-7 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="-ml-3 min-h-11 text-zinc-400 hover:bg-zinc-900 hover:text-zinc-50"
            >
              <Link href="/dashboard">
                <ChevronLeft className="size-4" aria-hidden="true" />
                Kurslar
              </Link>
            </Button>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
              {String(activeStepIndex + 1).padStart(2, "0")} / {" "}
              {String(lesson.steps.length).padStart(2, "0")}
            </span>
          </div>
          <Progress
            value={Math.max(
              progressValue,
              (activeStepIndex / lesson.steps.length) * 100,
            )}
            className="mt-3 h-px rounded-none bg-zinc-900"
            aria-label="Dars jarayoni"
          />
        </header>

        <div className="px-5 py-8 sm:px-7 lg:px-8 lg:py-10">
          <div className="mx-auto max-w-xl">
            <div className="mb-8">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
                {activeStep.eyebrow}
              </p>
              <h1 className="mt-3 text-2xl font-semibold tracking-[-0.035em] text-zinc-50 sm:text-3xl">
                {activeStep.title}
              </h1>
              <div className="mt-4 flex items-center gap-2">
                <Badge
                  variant="outline"
                  className="rounded-none border-zinc-800 font-mono text-[10px] font-normal text-zinc-500"
                >
                  ~{activeStep.estimatedMinutes} daqiqa
                </Badge>
                {progress.completedStepIds.includes(activeStep.id) ? (
                  <span className="flex items-center gap-1 text-[10px] uppercase tracking-[0.14em] text-zinc-400">
                    <Check className="size-3" aria-hidden="true" /> Bajarildi
                  </span>
                ) : null}
              </div>
            </div>

            <LessonStepContent
              lessonId={lesson.id}
              step={activeStep}
              progress={progress}
            />

            <Separator className="my-8 bg-zinc-800" />

            <nav className="flex items-center justify-between gap-3" aria-label="Dars qadamlari">
              <Button
                type="button"
                variant="outline"
                className="min-h-11 rounded-none border-zinc-800 bg-transparent text-zinc-300 hover:bg-zinc-900 hover:text-zinc-50"
                onClick={() => previousStep(lesson.id)}
                disabled={isFirstStep}
              >
                <ArrowLeft className="size-4" aria-hidden="true" />
                Orqaga
              </Button>

              <div className="hidden items-center gap-1.5 sm:flex">
                {lesson.steps.map((step, index) => (
                  <Button
                    key={step.id}
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="size-8 hover:bg-zinc-900"
                    onClick={() =>
                      goToStep(lesson.id, index, lesson.steps.length)
                    }
                    aria-label={`${index + 1}-qadamga o‘tish`}
                    aria-current={index === activeStepIndex ? "step" : undefined}
                  >
                    <span
                      className={cn(
                        "size-1.5 rounded-full bg-zinc-700",
                        index === activeStepIndex && "bg-zinc-50",
                        progress.completedStepIds.includes(step.id) &&
                          "ring-1 ring-zinc-500 ring-offset-2 ring-offset-black",
                      )}
                    />
                  </Button>
                ))}
              </div>

              <Button
                type="button"
                className="min-h-11 rounded-none bg-zinc-50 text-black hover:bg-zinc-200"
                onClick={handleNext}
                disabled={requiresCorrectAnswer}
              >
                {isLastStep ? "Yakunlash" : "Davom etish"}
                {!isLastStep ? (
                  <ArrowRight className="size-4" aria-hidden="true" />
                ) : (
                  <Check className="size-4" aria-hidden="true" />
                )}
              </Button>
            </nav>

            {requiresCorrectAnswer ? (
              <p className="mt-3 text-right text-xs text-zinc-600">
                Davom etish uchun to‘g‘ri javobni toping.
              </p>
            ) : null}
          </div>
        </div>
      </section>

      <section className="sticky top-0 order-1 z-20 h-[40svh] min-h-72 overflow-hidden bg-zinc-950 lg:order-2 lg:h-dvh lg:min-h-0">
        <PhysicsCanvas2D />
        <SimulationTelemetry />
        <SimulationControls />
        <div className="pointer-events-none absolute right-4 top-4 hidden border border-white/10 bg-black/70 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.16em] text-zinc-500 backdrop-blur sm:block">
          Canvas 2D · 60 Hz
        </div>
      </section>
    </main>
  );
}
