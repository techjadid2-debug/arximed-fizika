"use client";

import { ChevronRight, Download, FileText } from "lucide-react";
import { useCallback, useEffect, useMemo } from "react";

import { LessonStages, STAGE_IDS, type StageId } from "@/components/learn/LessonStages";
import { PracticeBlock } from "@/components/learn/PracticeBlock";
import { ReviewBlock } from "@/components/learn/ReviewBlock";
import { VideoBadge, VideoPlayer } from "@/components/learn/VideoPlayer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { Locale } from "@/lib/i18n";
import { useLessonStore } from "@/store/useLessonStore";
import { todayKey, useProgressStore, XP } from "@/store/useProgressStore";
import type { Lesson } from "@/types/lesson";

const stageInput = "stage";
const watchedActivity = "video.watched";
const quizActivity = "quiz.complete";

export function LessonShell({
  lessonId,
  lesson,
  locale,
}: {
  /** `ilk-qadam-01` — progress store kaliti. */
  lessonId: string;
  lesson: Lesson;
  locale: Locale;
}) {
  const openLesson = useLessonStore((state) => state.openLesson);
  const setInput = useLessonStore((state) => state.setInput);
  const submitQuiz = useLessonStore((state) => state.submitQuiz);
  const completeActivity = useLessonStore((state) => state.completeActivity);
  const progress = useLessonStore((state) => state.progressByLesson[lessonId]);
  const award = useProgressStore((state) => state.award);
  const completeLessonXp = useProgressStore((state) => state.completeLesson);
  const recordMistake = useProgressStore((state) => state.recordMistake);
  const clearMistake = useProgressStore((state) => state.clearMistake);

  useEffect(() => {
    openLesson(lessonId);
  }, [openLesson, lessonId]);

  const t = useMemo(
    () => ({
      video: locale === "uz" ? "Video dars" : locale === "en" ? "Video lesson" : "Видеоурок",
      quiz: locale === "uz" ? "Quiz" : locale === "en" ? "Quiz" : "Квиз",
      homework: locale === "uz" ? "Uyga vazifa" : locale === "en" ? "Homework" : "Домашнее задание",
      watched: locale === "uz" ? "Videoni ko‘rdim" : locale === "en" ? "I watched it" : "Я посмотрел",
      toQuiz: locale === "uz" ? "Quizga o‘tish" : locale === "en" ? "Go to quiz" : "К квизу",
      toHomework:
        locale === "uz" ? "Uyga vazifaga o‘tish" : locale === "en" ? "Go to homework" : "К заданию",
      answer:
        locale === "uz" ? "Javob bering" : locale === "en" ? "Answer every question" : "Ответьте на все вопросы",
      complete: locale === "uz" ? "Quiz yakunlandi" : locale === "en" ? "Quiz complete" : "Квиз завершён",
      soon:
        locale === "uz"
          ? "Video tez orada shu yerda bo‘ladi."
          : locale === "en"
            ? "The video will appear here soon."
            : "Видео скоро появится здесь.",
      download: locale === "uz" ? "PDF-ni yuklab olish" : locale === "en" ? "Download PDF" : "Скачать PDF",
      practiceTitle: locale === "uz" ? "Tez tekshiruv" : locale === "en" ? "Quick check" : "Быстрая проверка",
      practiceBody:
        locale === "uz"
          ? "Javobni son sifatida kiriting — birlikni yozish shart emas."
          : locale === "en"
            ? "Enter the answer as a number — the unit is not required."
            : "Введите ответ числом — единицу писать не нужно.",
      review: locale === "uz" ? "Takrorlash" : locale === "en" ? "Review" : "Повторение",
      reviewHint:
        locale === "uz"
          ? "Oldin xato qilgan savollaringiz. To‘g‘ri javob bersangiz, keyingi safar kechroq chiqadi."
          : locale === "en"
            ? "Questions you got wrong earlier. Answer correctly and they return later."
            : "Вопросы, в которых вы ошиблись. Ответьте верно — они вернутся позже.",
    }),
    [locale],
  );

  const answered = lesson.quiz.filter((item) => progress?.quizAttempts[item.id]).length;

  const completed = useMemo<Record<StageId, boolean>>(
    () => ({
      video: progress?.completedActivityIds.includes(watchedActivity) ?? false,
      quiz:
        lesson.quiz.length === 0 ||
        (progress?.completedActivityIds.includes(quizActivity) ?? false),
      homework:
        lesson.practice.length > 0 &&
        lesson.practice.every((task) => progress?.problemAttempts[task.id]?.isCorrect),
    }),
    [progress, lesson.quiz.length, lesson.practice],
  );

  const unlocked = useMemo<Record<StageId, boolean>>(
    () => ({ video: true, quiz: completed.video, homework: completed.quiz }),
    [completed],
  );

  const storedStage = progress?.inputs[stageInput];
  const stage: StageId =
    typeof storedStage === "string" && STAGE_IDS.includes(storedStage as StageId)
      ? (storedStage as StageId)
      : "video";
  const activeStage = unlocked[stage] ? stage : "video";

  const goToStage = useCallback(
    (next: StageId) => setInput(lessonId, stageInput, next),
    [setInput, lessonId],
  );

  const lessonDone = completed.video && completed.quiz && completed.homework;
  useEffect(() => {
    if (lessonDone) completeLessonXp(lessonId, todayKey());
  }, [lessonDone, completeLessonXp, lessonId]);

  return (
    <main className="mx-auto w-full max-w-4xl px-4 pb-16 pt-8 sm:px-6 lg:px-8">
      <header>
        <div className="flex flex-wrap items-center gap-3">
          <p className="font-mono text-[11px] uppercase tracking-[.16em] text-muted-foreground">
            {lesson.courseSlug} · {lesson.number}
          </p>
          <VideoBadge minutes={lesson.videoDurationMin} />
        </div>
        <h1 className="mt-2.5 text-3xl font-semibold tracking-[-.04em] sm:text-4xl">
          {lesson.title}
        </h1>
        {lesson.intro && (
          <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">{lesson.intro}</p>
        )}
      </header>

      <div className="mt-7 border-y border-border py-4">
        <LessonStages
          labels={{ video: t.video, quiz: t.quiz, homework: t.homework }}
          active={activeStage}
          completed={completed}
          unlocked={unlocked}
          onSelect={goToStage}
        />
      </div>

      {/* ── 01 Video ────────────────────────────────────────────────────── */}
      {activeStage === "video" && (
        <section className="mt-7">
          <VideoPlayer url={lesson.videoUrl} title={lesson.title} emptyLabel={t.soon} />
          <div className="mt-5 flex justify-end">
            <Button
              onClick={() => {
                if (!completed.video) {
                  completeActivity(lessonId, watchedActivity);
                  award(XP.videoWatched, todayKey());
                }
                goToStage("quiz");
              }}
              className="min-h-11 rounded-md"
            >
              {completed.video ? t.toQuiz : t.watched}
              <ChevronRight />
            </Button>
          </div>
        </section>
      )}

      {/* ── 02 Quiz ─────────────────────────────────────────────────────── */}
      {activeStage === "quiz" && (
        <section className="mt-7 space-y-5">
          <ReviewBlock lessonId={lessonId} lesson={lesson} title={t.review} hint={t.reviewHint} />

          <Card className="border border-border">
            <CardContent className="p-6 sm:p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  02 / {t.quiz}
                </p>
                <p className="font-mono text-xs tabular-nums text-muted-foreground">
                  {answered} / {lesson.quiz.length}
                </p>
              </div>
              <h2 className="mt-3 text-2xl font-semibold">
                {completed.quiz ? t.complete : t.answer}
              </h2>

              <div className="mt-6 space-y-6">
                {lesson.quiz.map((question, index) => {
                  const attempt = progress?.quizAttempts[question.id];
                  return (
                    <div key={question.id} className="border-t border-border pt-5">
                      <p className="font-medium leading-6">
                        <span className="mr-3 font-mono text-xs text-muted-foreground">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        {question.question}
                      </p>
                      <div className="mt-4 grid gap-2 sm:grid-cols-3">
                        {question.options.map((option) => (
                          <Button
                            key={option.id}
                            variant={attempt?.selectedOptionId === option.id ? "secondary" : "outline"}
                            className="min-h-11 justify-start rounded-md px-4 text-left"
                            onClick={() => {
                              const today = todayKey();
                              submitQuiz(lessonId, question.id, option.id, option.isCorrect);
                              // XP faqat birinchi urinishdagi to‘g‘ri javob uchun.
                              if (option.isCorrect && !attempt) award(XP.quizCorrect, today);
                              if (option.isCorrect) clearMistake(question.id, today);
                              else recordMistake(lessonId, question.id, "quiz", today);
                              if (answered + (attempt ? 0 : 1) === lesson.quiz.length) {
                                completeActivity(lessonId, quizActivity);
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

              {completed.quiz && (
                <div className="mt-7 flex justify-end border-t border-border pt-5">
                  <Button onClick={() => goToStage("homework")} className="min-h-11 rounded-md">
                    {t.toHomework}
                    <ChevronRight />
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </section>
      )}

      {/* ── 03 Uyga vazifa ──────────────────────────────────────────────── */}
      {activeStage === "homework" && (
        <section className="mt-7">
          <Card className="border border-border">
            <CardContent className="p-6 sm:p-8">
              <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                03 / {t.homework}
              </p>
              <div className="mt-3 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
                <div>
                  <h2 className="text-2xl font-semibold">{lesson.homework.title}</h2>
                  {lesson.homework.body && (
                    <p className="mt-3 max-w-xl leading-7 text-muted-foreground">
                      {lesson.homework.body}
                    </p>
                  )}
                </div>
                {lesson.homework.pdfUrl && (
                  <Button asChild className="min-h-11 shrink-0 rounded-md">
                    <a href={lesson.homework.pdfUrl} download>
                      <Download />
                      {t.download}
                    </a>
                  </Button>
                )}
              </div>

              {lesson.practice.length > 0 && (
                <div className="mt-8 border-t border-border pt-6">
                  <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    {t.practiceTitle}
                  </p>
                  <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">
                    {t.practiceBody}
                  </p>
                  <div className="mt-5">
                    <PracticeBlock
                      lessonId={lessonId}
                      tasks={lesson.practice}
                      locale={locale}
                      onResult={(taskId, isCorrect, firstTry) => {
                        const today = todayKey();
                        if (isCorrect) {
                          if (firstTry) award(XP.practiceCorrect, today);
                          clearMistake(taskId, today);
                        } else {
                          recordMistake(lessonId, taskId, "practice", today);
                        }
                      }}
                    />
                  </div>
                </div>
              )}

              {lesson.homework.pdfUrl && (
                <div className="mt-6 flex items-center gap-3 border-t border-border pt-5 font-mono text-xs text-muted-foreground">
                  <FileText className="size-4" />
                  {lesson.homework.pdfUrl.split("/").pop()}
                </div>
              )}
            </CardContent>
          </Card>
        </section>
      )}
    </main>
  );
}
