"use client";

import { ChevronLeft, ChevronRight, Download, FileText, PlayCircle } from "lucide-react";
import { useEffect } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { firstLessonContent } from "@/data/lessons/ilk-qadam-01";
import type { Locale } from "@/lib/i18n";
import { useLessonStore } from "@/store/useLessonStore";

const lessonId = "ilk-qadam-01";
const slideInput = "slides.active-index";
const quizActivity = "quiz.complete";

export function FirstLessonRunner({ locale }: { locale: Locale }) {
  const content = firstLessonContent[locale];
  const openLesson = useLessonStore((state) => state.openLesson);
  const setInput = useLessonStore((state) => state.setInput);
  const submitQuiz = useLessonStore((state) => state.submitQuiz);
  const completeActivity = useLessonStore((state) => state.completeActivity);
  const progress = useLessonStore((state) => state.progressByLesson[lessonId]);
  const storedIndex = progress?.inputs[slideInput];
  const slideIndex = typeof storedIndex === "number" ? storedIndex : 0;

  useEffect(() => {
    openLesson(lessonId);
  }, [openLesson]);

  const goToSlide = (index: number) => {
    setInput(lessonId, slideInput, index);
  };

  const answered = content.quiz.filter(
    (item) => progress?.quizAttempts[item.id],
  ).length;
  const quizDone = progress?.completedActivityIds.includes(quizActivity) ?? false;
  const slide = content.slides[slideIndex];
  const labels = {
    previous: locale === "uz" ? "Oldingi" : locale === "en" ? "Previous" : "Назад",
    next: locale === "uz" ? "Keyingi" : locale === "en" ? "Next" : "Далее",
    answer: locale === "uz" ? "Javob bering" : locale === "en" ? "Answer every question" : "Ответьте на все вопросы",
    complete: locale === "uz" ? "Quiz yakunlandi" : locale === "en" ? "Quiz complete" : "Квиз завершён",
    video: locale === "uz" ? "Video tushuntirish tez orada shu yerda bo‘ladi." : locale === "en" ? "A video explanation will appear here soon." : "Видеообъяснение скоро появится здесь.",
  };

  if (!slide) return null;

  return (
    <main className="mx-auto max-w-6xl px-4 pb-16 pt-8 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[260px_minmax(0,1fr)]">
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <p className="font-mono text-[11px] uppercase tracking-[.16em] text-muted-foreground">
            {content.lessonLabel}
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-[-.05em]">
            {content.title}
          </h1>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            {content.intro}
          </p>
          <ol className="mt-8 space-y-1 border-l border-border">
            {content.stages.map((stage, index) => (
              <li key={stage} className="flex min-h-10 items-center gap-3 px-4 text-sm">
                <span className="font-mono text-xs text-muted-foreground">0{index + 1}</span>
                {stage}
              </li>
            ))}
          </ol>
        </aside>

        <section className="space-y-5">
          <Card className="border border-border">
            <CardContent className="p-6 sm:p-8">
              <div className="flex items-center justify-between gap-4 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                <span>{slide.eyebrow}</span>
                <span>{slideIndex + 1} / {content.slides.length}</span>
              </div>
              <div className="mt-12 min-h-48 max-w-2xl">
                <h2 className="text-3xl font-semibold tracking-[-.04em] sm:text-4xl">{slide.title}</h2>
                <p className="mt-5 max-w-xl text-lg leading-8 text-muted-foreground">{slide.body}</p>
              </div>
              <div className="mt-12 flex items-center justify-between border-t border-border pt-5">
                <Button variant="outline" onClick={() => goToSlide(Math.max(0, slideIndex - 1))} disabled={slideIndex === 0} className="min-h-11 rounded-md"><ChevronLeft />{labels.previous}</Button>
                <div className="hidden gap-1 sm:flex">
                  {content.slides.map((_, index) => <button key={index} type="button" onClick={() => goToSlide(index)} aria-label={`Slide ${index + 1}`} className={`size-2 rounded-sm ${index === slideIndex ? "bg-foreground" : "bg-border"}`} />)}
                </div>
                <Button onClick={() => goToSlide(Math.min(content.slides.length - 1, slideIndex + 1))} disabled={slideIndex === content.slides.length - 1} className="min-h-11 rounded-md">{labels.next}<ChevronRight /></Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-border">
            <CardContent className="p-6 sm:p-8">
              <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">02 / {content.stages[1]}</p>
              <h2 className="mt-3 text-2xl font-semibold">{quizDone ? labels.complete : labels.answer}</h2>
              <div className="mt-6 space-y-6">
                {content.quiz.map((question, index) => {
                  const attempt = progress?.quizAttempts[question.id];
                  return <div key={question.id} className="border-t border-border pt-5">
                    <p className="font-medium"><span className="mr-3 font-mono text-xs text-muted-foreground">0{index + 1}</span>{question.question}</p>
                    <div className="mt-4 grid gap-2 sm:grid-cols-3">
                      {question.options.map((option) => <Button key={option.id} variant={attempt?.selectedOptionId === option.id ? "secondary" : "outline"} className="min-h-11 justify-start rounded-md px-4 text-left" onClick={() => {
                        submitQuiz(lessonId, question.id, option.id, option.id === question.correctId);
                        if (answered + (attempt ? 0 : 1) === content.quiz.length) completeActivity(lessonId, quizActivity);
                      }}>{option.label}</Button>)}
                    </div>
                    {attempt && <p className="mt-3 text-sm text-muted-foreground"><span className="font-medium text-foreground">{attempt.isCorrect ? "✓ " : "→ "}</span>{question.explanation}</p>}
                  </div>;
                })}
              </div>
            </CardContent>
          </Card>

          <Card className="border border-border">
            <CardContent className="p-6 sm:p-8">
              <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">03 / {content.example.eyebrow}</p>
              <h2 className="mt-3 text-2xl font-semibold">{content.example.title}</h2>
              <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">{content.example.prompt}</p>
              <ol className="mt-6 space-y-3 border-l border-border pl-5">
                {content.example.steps.map((step, index) => <li key={step} className="text-sm leading-6"><span className="mr-3 font-mono text-xs text-muted-foreground">{index + 1}.</span>{step}</li>)}
              </ol>
              <div className="mt-6 border border-border bg-muted px-5 py-4 font-mono text-sm">{content.example.answer}</div>
              <div className="mt-5 flex items-center gap-3 border-t border-border pt-5 text-sm text-muted-foreground"><PlayCircle className="size-4" />{labels.video}</div>
            </CardContent>
          </Card>

          <Card className="border border-border">
            <CardContent className="p-6 sm:p-8">
              <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">04 / {content.homework.eyebrow}</p>
              <div className="mt-3 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
                <div><h2 className="text-2xl font-semibold">{content.homework.title}</h2><p className="mt-3 max-w-xl leading-7 text-muted-foreground">{content.homework.body}</p></div>
                <Button asChild className="min-h-11 shrink-0 rounded-md"><a href="/materials/ilk-qadam/01-uyga-vazifa.pdf" download><Download />{content.homework.download}</a></Button>
              </div>
              <div className="mt-6 flex items-center gap-3 border-t border-border pt-5 font-mono text-xs text-muted-foreground"><FileText className="size-4" />01-uyga-vazifa.pdf</div>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  );
}
