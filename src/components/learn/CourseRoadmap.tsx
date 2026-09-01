"use client";

import { Check, ChevronRight, LockKeyhole, Play, Video } from "lucide-react";
import Link from "next/link";

import type { Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { useProgressStore } from "@/store/useProgressStore";
import type { Course } from "@/types/lesson";

export function CourseRoadmap({ course, locale }: { course: Course; locale: Locale }) {
  const hasHydrated = useProgressStore((state) => state.hasHydrated);
  const completedLessons = useProgressStore((state) => state.completedLessons);

  const t = {
    flow:
      locale === "uz"
        ? "Video → quiz → uyga vazifa."
        : locale === "en"
          ? "Video → quiz → homework."
          : "Видео → квиз → домашнее задание.",
    quarter: (n: number) =>
      locale === "uz" ? `${n}-chorak` : locale === "en" ? `Quarter ${n}` : `${n}-я четверть`,
    done: locale === "uz" ? "Tugallandi" : locale === "en" ? "Completed" : "Завершён",
    soon: locale === "uz" ? "Tez orada" : locale === "en" ? "Coming soon" : "Скоро",
    count: (n: number) =>
      locale === "uz" ? `${n} dars` : locale === "en" ? `${n} lessons` : `${n} уроков`,
  };

  const isDone = (number: string) =>
    hasHydrated && completedLessons.includes(`${course.slug}-${number}`);

  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <p className="font-mono text-[11px] uppercase tracking-[.16em] text-primary">
        {t.count(course.lessons.length)} · {course.modules.length} chorak
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-[-.05em] sm:text-5xl">{course.title}</h1>
      <p className="mt-5 max-w-2xl leading-7 text-muted-foreground">{t.flow}</p>

      <div className="mt-10 space-y-4">
        {course.modules.map((module) => {
          const lessons = course.lessons.filter((item) => item.moduleId === module.id);
          return (
            <details
              key={module.id}
              open={module.position === 1}
              className="group rounded-xl border border-border bg-card"
            >
              <summary className="flex min-h-20 cursor-pointer list-none items-center justify-between px-6">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-primary">
                    {t.quarter(module.position)}
                  </p>
                  <h2 className="mt-1 text-xl font-semibold">{module.title}</h2>
                </div>
                <ChevronRight className="size-5 transition-transform group-open:rotate-90" />
              </summary>

              <div className="border-t border-border p-3">
                {lessons.map((lesson, index) => {
                  const done = isDone(lesson.number);
                  const previous = lessons[index - 1];
                  const unlocked =
                    lesson.position === 1 || done || (previous ? isDone(previous.number) : false);
                  const available = lesson.isPublished && unlocked;

                  const row = (
                    <div
                      className={cn(
                        "flex min-h-16 items-center gap-4 rounded-lg px-4 transition-colors",
                        available ? "hover:bg-muted" : "opacity-60",
                      )}
                    >
                      <span className="w-7 font-mono text-xs text-muted-foreground">
                        {lesson.number}
                      </span>
                      <span className="flex-1 text-sm leading-5">{lesson.title}</span>
                      {lesson.hasVideo && available && (
                        <Video className="size-3.5 text-muted-foreground" />
                      )}
                      {!lesson.isPublished && unlocked && (
                        <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                          {t.soon}
                        </span>
                      )}
                      {done ? (
                        <span
                          title={t.done}
                          className="flex size-5 items-center justify-center rounded-sm bg-foreground text-background"
                        >
                          <Check className="size-3" strokeWidth={3} />
                        </span>
                      ) : available ? (
                        <Play className="size-4 text-primary" />
                      ) : (
                        <LockKeyhole className="size-4 text-muted-foreground" />
                      )}
                    </div>
                  );

                  return available ? (
                    <Link
                      key={lesson.id}
                      href={`/${locale}/learn/${course.slug}/${lesson.number}`}
                    >
                      {row}
                    </Link>
                  ) : (
                    <div key={lesson.id} aria-disabled="true">
                      {row}
                    </div>
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
