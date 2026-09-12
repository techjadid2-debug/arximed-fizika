"use client";

import confetti from "canvas-confetti";
import { BookOpen, Check, CheckCircle2, ChevronRight, Download, FileText, FlaskConical, PlayCircle, Sparkles, Trophy, XCircle } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef } from "react";

import { getLessonLab, hasLessonLab } from "@/components/learn/labs";
import { LessonSlideDeck } from "@/components/learn/LessonSlideDeck";
import { LessonStages, STAGE_IDS, type StageId } from "@/components/learn/LessonStages";
import { MathContent } from "@/components/learn/MathContent";
import { PracticeBlock } from "@/components/learn/PracticeBlock";
import { ReviewBlock } from "@/components/learn/ReviewBlock";
import { VideoBadge, VideoPlayer } from "@/components/learn/VideoPlayer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { Locale } from "@/lib/i18n";
import { playCelebrationSound, playCorrectSound, playWrongSound } from "@/lib/sound";
import { cn } from "@/lib/utils";
import { useLessonStore } from "@/store/useLessonStore";
import { todayKey, useProgressStore, XP } from "@/store/useProgressStore";
import type { Lesson } from "@/types/lesson";

const stageInput = "stage";
const watchedActivity = "video.watched";
const quizActivity = "quiz.complete";
const homeworkActivity = "homework.completed";

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
      completeHomeworkBtn:
        locale === "uz"
          ? "Vazifani o‘qidim · Darsni yakunlash"
          : locale === "en"
            ? "Reviewed homework · Complete lesson"
            : "Ознакомился · Завершить урок",
      lessonDoneSuccess:
        locale === "uz"
          ? "Dars muvaffaqiyatli yakunlandi! +50 XP"
          : locale === "en"
            ? "Lesson completed successfully! +50 XP"
            : "Урок успешно завершён! +50 XP",
      correctTitle: locale === "uz" ? "To‘g‘ri! " : locale === "en" ? "Correct! " : "Верно! ",
      wrongTitle: locale === "uz" ? "Noto‘g‘ri. " : locale === "en" ? "Incorrect. " : "Неверно. ",
    }),
    [locale],
  );

  const answered = lesson.quiz.filter((item) => progress?.quizAttempts[item.id]).length;

  const completed = useMemo<Record<StageId, boolean>>(() => {
    const hasPractice = lesson.practice.length > 0;
    const practiceDone =
      hasPractice && lesson.practice.every((task) => progress?.problemAttempts[task.id]?.isCorrect);
    const homeworkDone = progress?.completedActivityIds.includes(homeworkActivity) ?? false;

    return {
      video: progress?.completedActivityIds.includes(watchedActivity) ?? false,
      quiz:
        lesson.quiz.length === 0 ||
        (progress?.completedActivityIds.includes(quizActivity) ?? false),
      homework: hasPractice ? practiceDone : homeworkDone,
    };
  }, [progress, lesson.quiz.length, lesson.practice]);

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
  const celebratedRef = useRef(false);
  useEffect(() => {
    if (lessonDone && !celebratedRef.current) {
      celebratedRef.current = true;
      completeLessonXp(lessonId, todayKey());
      playCelebrationSound();
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
      });
    }
  }, [lessonDone, completeLessonXp, lessonId]);

  return (
    <main className="mx-auto w-full max-w-4xl px-4 pb-16 pt-8 sm:px-6 lg:px-8">
      <header>
        <div className="flex flex-wrap items-center gap-3">
          <p className="font-mono text-[11px] uppercase tracking-[.16em] text-muted-foreground">
            {lesson.courseSlug} · {lesson.number}
          </p>
          <VideoBadge minutes={lesson.videoDurationMin} locale={locale} />
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

      {/* ── 01 Nazariya / Slaydlar / Video ───────────────────────────────── */}
      {activeStage === "video" && (
        <section className="mt-7 space-y-6">
          {hasLessonLab(lesson.number) || lesson.number === "01" || lesson.number === "02" ? (
            <Tabs defaultValue="slides" className="w-full">
              {hasLessonLab(lesson.number) && (
                <div className="mb-4 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-emerald-500/30 bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-transparent p-3.5 sm:p-4 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="grid size-9 shrink-0 place-items-center rounded-lg bg-emerald-500/20 text-emerald-600 dark:text-emerald-400">
                      <FlaskConical className="size-5" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-semibold text-foreground">
                        {locale === "uz"
                          ? "Ustoz tavsiyasi: Avval Virtual Laboratoriyada tajriba o‘tkazing!"
                          : locale === "en"
                            ? "Teacher's Tip: Try the Virtual Lab first!"
                            : "Совет учителя: Сначала испытайте виртуальную лабораторию!"}
                      </p>
                      <p className="text-[11px] sm:text-xs text-muted-foreground">
                        {locale === "uz"
                          ? "Fizikani quruq formulalardan oldin o‘z ko‘zingiz bilan ko‘rib, his eting."
                          : locale === "en"
                            ? "Experience the physics firsthand before reading the formulas."
                            : "Почувствуйте физику на реальном опыте до формул."}
                      </p>
                    </div>
                  </div>
                </div>
              )}
              <div className="flex items-center justify-between">
                <TabsList className="min-h-10">
                  <TabsTrigger value="slides" className="text-xs sm:text-sm">
                    <BookOpen className="mr-1.5 size-3.5" />
                    {locale === "uz" ? "Slaydlar" : locale === "en" ? "Slides" : "Слайды"}
                  </TabsTrigger>
                  {hasLessonLab(lesson.number) && (
                    <TabsTrigger value="lab" className="text-xs sm:text-sm">
                      <FlaskConical className="mr-1.5 size-3.5 text-emerald-500 animate-pulse" />
                      {locale === "uz" ? "Virtual Laboratoriya 🧪" : locale === "en" ? "Virtual Lab 🧪" : "Лаборатория 🧪"}
                    </TabsTrigger>
                  )}
                  <TabsTrigger value="video" className="text-xs sm:text-sm">
                    <PlayCircle className="mr-1.5 size-3.5" />
                    {locale === "uz" ? "Video dars" : locale === "en" ? "Video Lesson" : "Видеоурок"}
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="slides" className="mt-4">
                <LessonSlideDeck
                  lessonNumber={lesson.number}
                  locale={locale}
                  onComplete={() => {
                    if (!completed.video) {
                      completeActivity(lessonId, watchedActivity);
                      award(XP.videoWatched, todayKey());
                    }
                  }}
                />
              </TabsContent>

              {hasLessonLab(lesson.number) && (
                <TabsContent value="lab" className="mt-4">
                  {getLessonLab(lesson.number, locale)}
                </TabsContent>
              )}

              <TabsContent value="video" className="mt-4">
                <VideoPlayer url={lesson.videoUrl} title={lesson.title} emptyLabel={t.soon} />
              </TabsContent>
            </Tabs>
          ) : (
            <VideoPlayer url={lesson.videoUrl} title={lesson.title} emptyLabel={t.soon} />
          )}

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
                      <div className="flex items-start gap-3">
                        <span className="mt-0.5 font-mono text-xs text-muted-foreground">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <div className="flex-1 font-medium leading-6">
                          <MathContent content={question.question} inline />
                        </div>
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
                              className={cn(
                                "min-h-12 justify-start rounded-md px-4 text-left transition-all",
                                buttonStyle,
                              )}
                              onClick={() => {
                                const today = todayKey();
                                submitQuiz(lessonId, question.id, option.id, option.isCorrect);
                                if (option.isCorrect) {
                                  playCorrectSound();
                                  if (!attempt) award(XP.quizCorrect, today);
                                  clearMistake(question.id, today);
                                } else {
                                  playWrongSound();
                                  recordMistake(lessonId, question.id, "quiz", today);
                                }
                                if (answered + (attempt ? 0 : 1) === lesson.quiz.length) {
                                  completeActivity(lessonId, quizActivity);
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
                            <span className="font-semibold text-foreground">
                              {attempt.isCorrect ? t.correctTitle : t.wrongTitle}
                            </span>
                            <MathContent content={question.explanation} inline className="text-sm" />
                          </div>
                        </div>
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
                    <div className="mt-3 max-w-xl text-muted-foreground">
                      <MathContent content={lesson.homework.body} />
                    </div>
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

              {lesson.practice.length > 0 ? (
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
              ) : (
                <div className="mt-8 border-t border-border pt-6">
                  {!completed.homework ? (
                    <div className="flex justify-end">
                      <Button
                        onClick={() => {
                          completeActivity(lessonId, homeworkActivity);
                          award(XP.practiceCorrect, todayKey());
                        }}
                        className="min-h-11 rounded-md"
                      >
                        <Check className="size-4" />
                        {t.completeHomeworkBtn}
                      </Button>
                    </div>
                  ) : null}
                </div>
              )}

              {lessonDone && (
                <div className="mt-7 flex flex-col sm:flex-row items-center justify-between gap-5 rounded-2xl border border-emerald-500/40 bg-gradient-to-r from-emerald-500/15 via-emerald-500/5 to-cyan-500/15 p-6 shadow-lg shadow-emerald-500/5">
                  <div className="flex items-center gap-4">
                    <div className="grid size-12 shrink-0 place-items-center rounded-xl bg-emerald-500 text-white shadow-md">
                      <Trophy className="size-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                          {locale === "uz" ? "Dars muvaffaqiyatli yakunlandi!" : locale === "en" ? "Lesson Completed!" : "Урок пройден!"}
                        </span>
                        <span className="inline-flex items-center rounded-full bg-emerald-500/20 px-2 py-0.5 text-xs font-bold text-emerald-700 dark:text-emerald-300">
                          +50 XP ⚡
                        </span>
                      </div>
                      <p className="mt-1 text-sm font-medium text-foreground">
                        {locale === "uz"
                          ? "Ajoyib natija! Siz bugun yana bir muhim qonunni o‘zlashtirdingiz."
                          : locale === "en"
                            ? "Great job! You mastered another fundamental law of physics."
                            : "Отличный результат! Вы освоили ещё один закон физики."}
                      </p>
                    </div>
                  </div>
                  {parseInt(lesson.number, 10) < 78 && (
                    <Link
                      href={`/${locale}/learn/${lesson.courseSlug}/${String(parseInt(lesson.number, 10) + 1).padStart(2, "0")}`}
                      className="w-full sm:w-auto"
                    >
                      <Button size="default" className="w-full sm:w-auto gap-2 bg-emerald-600 text-white hover:bg-emerald-700 font-semibold shadow-md">
                        <span>
                          {locale === "uz"
                            ? `Keyingi dars: ${String(parseInt(lesson.number, 10) + 1).padStart(2, "0")}`
                            : locale === "en"
                              ? `Next lesson: ${String(parseInt(lesson.number, 10) + 1).padStart(2, "0")}`
                              : `Следующий урок: ${String(parseInt(lesson.number, 10) + 1).padStart(2, "0")}`}
                        </span>
                        <ChevronRight className="size-4" />
                      </Button>
                    </Link>
                  )}
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
