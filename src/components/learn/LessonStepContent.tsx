"use client";

import { FormEvent } from "react";
import { Check, CircleAlert, Lightbulb, Target } from "lucide-react";

import { MathContent } from "@/components/learn/MathContent";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import type { LessonProgress } from "@/store/useLessonStore";
import { useLessonStore } from "@/store/useLessonStore";
import { usePhysicsStore } from "@/store/usePhysicsStore";
import type {
  ConceptQuizStep,
  IntuitiveExplorationStep,
  LessonParameter,
  LessonStep,
  ProblemSolvingStep,
  TheoryEquationStep,
} from "@/types/physics";

interface LessonStepContentProps {
  lessonId: string;
  step: LessonStep;
  progress: LessonProgress;
}

export function LessonStepContent({
  lessonId,
  step,
  progress,
}: LessonStepContentProps) {
  switch (step.type) {
    case "INTUITIVE_EXPLORATION":
      return <ExplorationContent step={step} />;
    case "THEORY_EQUATION":
      return <TheoryContent step={step} />;
    case "CONCEPT_QUIZ":
      return (
        <QuizContent lessonId={lessonId} step={step} progress={progress} />
      );
    case "PROBLEM_SOLVING":
      return (
        <ProblemContent lessonId={lessonId} step={step} progress={progress} />
      );
  }
}

function ExplorationContent({ step }: { step: IntuitiveExplorationStep }) {
  const range = usePhysicsStore(
    (state) => state.telemetry?.horizontalRange ?? 0,
  );
  const goalReached = range >= 50;

  return (
    <div className="space-y-6">
      <p className="text-base leading-7 text-zinc-300">{step.prompt}</p>

      <Card className="rounded-none border-zinc-800 bg-zinc-950/60 shadow-none">
        <CardContent className="flex gap-3 px-4 py-4">
          <Target
            className={cn(
              "mt-0.5 size-4 shrink-0",
              goalReached ? "text-zinc-50" : "text-zinc-500",
            )}
            aria-hidden="true"
          />
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-500">
              Maqsad
            </p>
            <p className="mt-1 text-sm leading-6 text-zinc-200">{step.goal}</p>
            {goalReached ? (
              <p className="mt-2 flex items-center gap-1.5 text-xs text-zinc-100">
                <Check className="size-3.5" aria-hidden="true" />
                Bajarildi — {range.toFixed(1)} m
              </p>
            ) : null}
          </div>
        </CardContent>
      </Card>

      <div className="space-y-5" aria-label="Simulyatsiya parametrlari">
        {step.parameters.map((parameter) => (
          <ParameterControl key={parameter.id} parameter={parameter} />
        ))}
      </div>

      <div className="flex gap-3 border-t border-zinc-800 pt-5 text-sm leading-6 text-zinc-400">
        <Lightbulb className="mt-1 size-4 shrink-0" aria-hidden="true" />
        <p>{step.hint}</p>
      </div>
    </div>
  );
}

function ParameterControl({ parameter }: { parameter: LessonParameter }) {
  const value = usePhysicsStore((state) => state.parameters[parameter.id]);
  const setParameter = usePhysicsStore((state) => state.setParameter);
  const restart = usePhysicsStore((state) => state.restart);

  return (
    <div className="space-y-3">
      <div className="flex items-end justify-between gap-4">
        <Label
          htmlFor={`parameter-${parameter.id}`}
          className="text-sm font-normal text-zinc-300"
        >
          {parameter.label}
        </Label>
        <output
          htmlFor={`parameter-${parameter.id}`}
          className="font-mono text-xs tabular-nums text-zinc-100"
        >
          {parameter.symbol} = {value.toFixed(parameter.step < 1 ? 1 : 0)} {parameter.unit}
        </output>
      </div>
      <Slider
        id={`parameter-${parameter.id}`}
        value={[value]}
        min={parameter.min}
        max={parameter.max}
        step={parameter.step}
        onValueChange={([nextValue]) => {
          if (nextValue !== undefined) setParameter(parameter.id, nextValue);
        }}
        onValueCommit={restart}
        aria-label={parameter.label}
        className="min-h-11 cursor-pointer"
      />
    </div>
  );
}

function TheoryContent({ step }: { step: TheoryEquationStep }) {
  return (
    <div className="space-y-6">
      <MathContent content={step.content} className="text-base leading-7" />

      <div className="space-y-3">
        {step.equations.map((equation) => (
          <Card
            key={equation.label}
            className="rounded-none border-zinc-800 bg-zinc-950/60 py-0 shadow-none"
          >
            <CardContent className="px-4 py-4">
              <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-zinc-500">
                {equation.label}
              </p>
              <MathContent
                content={`$$${equation.latex}$$`}
                className="font-mono text-base"
              />
              <p className="text-xs leading-5 text-zinc-500">{equation.note}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div>
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-zinc-500">
          Esda tuting
        </p>
        <ul className="space-y-3 text-sm leading-6 text-zinc-300">
          {step.takeaways.map((takeaway) => (
            <li key={takeaway} className="flex gap-3">
              <span className="mt-2 size-1 shrink-0 rounded-full bg-zinc-500" />
              {takeaway}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function QuizContent({
  lessonId,
  step,
  progress,
}: {
  lessonId: string;
  step: ConceptQuizStep;
  progress: LessonProgress;
}) {
  const submitQuiz = useLessonStore((state) => state.submitQuiz);
  const attempt = progress.quizAttempts[step.id];
  const selectedOption = step.options.find(
    (option) => option.id === attempt?.selectedOptionId,
  );

  return (
    <div className="space-y-5">
      <MathContent content={step.question} className="text-base leading-7" />
      <div className="grid gap-2" role="group" aria-label="Javob variantlari">
        {step.options.map((option, index) => {
          const isSelected = attempt?.selectedOptionId === option.id;
          return (
            <Button
              key={option.id}
              type="button"
              variant="outline"
              className={cn(
                "h-auto min-h-12 justify-start whitespace-normal rounded-none border-zinc-800 bg-transparent px-4 py-3 text-left text-sm font-normal leading-6 text-zinc-300 hover:border-zinc-600 hover:bg-zinc-900 hover:text-zinc-50",
                isSelected && "border-zinc-500 bg-zinc-900 text-zinc-50",
              )}
              onClick={() =>
                submitQuiz(
                  lessonId,
                  step.id,
                  option.id,
                  option.id === step.correctOptionId,
                )
              }
            >
              <span className="mr-3 font-mono text-xs text-zinc-600">
                {String.fromCharCode(65 + index)}
              </span>
              {option.label}
            </Button>
          );
        })}
      </div>

      {attempt && selectedOption ? (
        <div
          className={cn(
            "border-l-2 py-1 pl-4 text-sm leading-6",
            attempt.isCorrect
              ? "border-zinc-100 text-zinc-200"
              : "border-zinc-600 text-zinc-400",
          )}
          role="status"
        >
          <p className="flex items-center gap-2 font-medium text-zinc-100">
            {attempt.isCorrect ? (
              <Check className="size-4" aria-hidden="true" />
            ) : (
              <CircleAlert className="size-4" aria-hidden="true" />
            )}
            {attempt.isCorrect ? "To‘g‘ri" : "Yana bir bor o‘ylab ko‘ring"}
          </p>
          <p className="mt-1">{selectedOption.feedback}</p>
          {attempt.isCorrect ? (
            <MathContent content={step.explanation} className="mt-2 text-sm" />
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

function ProblemContent({
  lessonId,
  step,
  progress,
}: {
  lessonId: string;
  step: ProblemSolvingStep;
  progress: LessonProgress;
}) {
  const setInput = useLessonStore((state) => state.setInput);
  const submitProblem = useLessonStore((state) => state.submitProblem);
  const inputValue = progress.inputs[step.id] ?? "";
  const attempt = progress.problemAttempts[step.id];

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const numericValue = Number(inputValue);
    if (!Number.isFinite(numericValue)) return;
    const isCorrect =
      Math.abs(numericValue - step.answer.value) <= step.answer.tolerance;
    submitProblem(lessonId, step.id, numericValue, isCorrect);
  };

  return (
    <div className="space-y-6">
      <MathContent content={step.prompt} className="text-base leading-7" />

      <div className="flex flex-wrap gap-2">
        {step.givens.map((given) => (
          <Badge
            key={given.symbol}
            variant="outline"
            className="rounded-none border-zinc-800 px-3 py-1.5 font-mono font-normal text-zinc-300"
          >
            {given.symbol} = {given.value} {given.unit}
          </Badge>
        ))}
      </div>

      <form className="space-y-3" onSubmit={handleSubmit}>
        <Label htmlFor={`answer-${step.id}`} className="text-zinc-300">
          Javobingiz
        </Label>
        <div className="flex gap-2">
          <div className="relative min-w-0 flex-1">
            <Input
              id={`answer-${step.id}`}
              inputMode="decimal"
              value={inputValue}
              onChange={(event) =>
                setInput(lessonId, step.id, event.target.value)
              }
              className="h-12 rounded-none border-zinc-800 bg-zinc-950 pr-12 font-mono text-zinc-100"
              placeholder="0.0"
              aria-describedby={`answer-unit-${step.id}`}
            />
            <span
              id={`answer-unit-${step.id}`}
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 font-mono text-xs text-zinc-500"
            >
              {step.answer.unit}
            </span>
          </div>
          <Button
            type="submit"
            className="h-12 rounded-none bg-zinc-50 px-5 text-black hover:bg-zinc-200"
          >
            Tekshirish
          </Button>
        </div>
      </form>

      {attempt ? (
        <div
          className={cn(
            "border-l-2 py-1 pl-4 text-sm leading-6",
            attempt.isCorrect
              ? "border-zinc-100 text-zinc-200"
              : "border-zinc-600 text-zinc-400",
          )}
          role="status"
        >
          <p className="font-medium text-zinc-100">
            {attempt.isCorrect
              ? "To‘g‘ri natija."
              : `Hozircha mos emas. Urinish: ${attempt.attempts}`}
          </p>
          {attempt.isCorrect ? (
            <MathContent content={step.solution} className="mt-2" />
          ) : (
            <p className="mt-1">x va y komponentlarini alohida yozib ko‘ring.</p>
          )}
        </div>
      ) : null}
    </div>
  );
}
