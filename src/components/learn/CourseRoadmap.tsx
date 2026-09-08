"use client";

import { Check, ChevronRight, FileText, GraduationCap, Sparkles, Video } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import type { Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { useProgressStore } from "@/store/useProgressStore";
import type { Course } from "@/types/lesson";

export function CourseRoadmap({ course, locale }: { course: Course; locale: Locale }) {
  const hasHydrated = useProgressStore((state) => state.hasHydrated);
  const completedLessons = useProgressStore((state) => state.completedLessons);

  const t = {
    tagline:
      locale === "uz"
        ? "O‘qituvchi Yo‘l Xaritasi: Darslar ro‘yxati, kirish va spargalkalar (Cheatsheet)"
        : locale === "en"
          ? "Instructor Roadmap: Lesson overviews, teaching plans & cheatsheets"
          : "План преподавателя: обзор уроков, планы и шпаргалки",
    quarter: (n: number) =>
      locale === "uz" ? `${n}-chorak` : locale === "en" ? `Quarter ${n}` : `${n}-я четверть`,
    done: locale === "uz" ? "Tugallandi" : locale === "en" ? "Completed" : "Завершён",
    count: (n: number) =>
      locale === "uz" ? `${n} dars` : locale === "en" ? `${n} lessons` : `${n} уроков`,
    cheatsheetReady:
      locale === "uz" ? "Spargalka tayyor" : locale === "en" ? "Cheatsheet ready" : "Шпаргалка готова",
  };

  const isDone = (number: string) =>
    hasHydrated && completedLessons.includes(`${course.slug}-${number}`);

  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="flex flex-wrap items-center gap-2.5">
        <Badge variant="outline" className="gap-1.5 font-mono text-[11px] uppercase tracking-[.16em] text-primary">
          <GraduationCap className="size-3.5" />
          {t.count(course.lessons.length)} · {course.modules.length} chorak
        </Badge>
        <span className="text-xs text-muted-foreground">· Erkin kirish rejimi</span>
      </div>

      <h1 className="mt-4 text-4xl font-semibold tracking-[-.05em] sm:text-5xl">{course.title}</h1>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
        {t.tagline}
      </p>

      <div className="mt-10 space-y-4">
        {course.modules.map((module) => {
          const lessons = course.lessons.filter((item) => item.moduleId === module.id);
          const isFirstQuarter = module.position === 1;

          return (
            <details
              key={module.id}
              open={isFirstQuarter}
              className="group rounded-xl border border-border bg-card transition-colors hover:border-border/80"
            >
              <summary className="flex min-h-20 cursor-pointer list-none items-center justify-between px-6">
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-mono text-[10px] uppercase tracking-wider text-primary">
                      {t.quarter(module.position)}
                    </p>
                    {isFirstQuarter && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-600 dark:text-emerald-400">
                        <Sparkles className="size-2.5" />
                        To‘liq spargalka (16 dars)
                      </span>
                    )}
                  </div>
                  <h2 className="mt-1 text-xl font-semibold">{module.title}</h2>
                </div>
                <ChevronRight className="size-5 text-muted-foreground transition-transform group-open:rotate-90" />
              </summary>

              <div className="border-t border-border p-2 sm:p-3 space-y-1">
                {lessons.map((lesson) => {
                  const done = isDone(lesson.number);
                  const numVal = parseInt(lesson.number, 10);
                  const isDetailed = numVal >= 1 && numVal <= 16;

                  return (
                    <Link
                      key={lesson.id}
                      href={`/${locale}/learn/${course.slug}/${lesson.number}`}
                      className={cn(
                        "group/row flex min-h-14 items-center gap-3.5 rounded-lg px-3 sm:px-4 py-2.5 transition-all",
                        "hover:bg-accent/60 hover:text-foreground",
                        done && "bg-muted/40",
                      )}
                    >
                      <span className="w-6 font-mono text-xs font-semibold text-muted-foreground group-hover/row:text-primary">
                        {lesson.number}
                      </span>

                      <span className="flex-1 text-sm font-medium leading-snug text-foreground/90 group-hover/row:text-foreground">
                        {lesson.title}
                      </span>

                      {isDetailed && (
                        <span className="hidden sm:inline-flex items-center gap-1 rounded-md border border-primary/20 bg-primary/5 px-2 py-0.5 font-mono text-[10px] font-medium text-primary">
                          <FileText className="size-3" />
                          {t.cheatsheetReady}
                        </span>
                      )}

                      {lesson.hasVideo && (
                        <span title="Video dars mavjud">
                          <Video className="size-3.5 text-muted-foreground" />
                        </span>
                      )}

                      {done ? (
                        <span
                          title={t.done}
                          className="flex size-5 shrink-0 items-center justify-center rounded-sm bg-foreground text-background"
                        >
                          <Check className="size-3" strokeWidth={3} />
                        </span>
                      ) : (
                        <ChevronRight className="size-4 shrink-0 text-muted-foreground/50 transition-transform group-hover/row:translate-x-0.5 group-hover/row:text-foreground" />
                      )}
                    </Link>
                  );
                })}
              </div>
            </details>
          );
        })}
      </div>
    </main>
  );
}
