import Link from "next/link";
import { Check, Pencil, Video } from "lucide-react";

import { requireAdmin } from "@/lib/admin/guard";
import { getCourse } from "@/lib/lessons";
import { cn } from "@/lib/utils";

export default async function AdminHome() {
  const admin = await requireAdmin();
  const course = await getCourse("ilk-qadam");

  if (!course) {
    return (
      <main className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
        <h1 className="text-3xl font-semibold tracking-tight">Darslar</h1>
        <p className="mt-4 max-w-lg leading-7 text-muted-foreground">
          Kurs bazada topilmadi. <span className="font-mono">node scripts/seed-supabase.mjs</span>{" "}
          buyrug‘i bilan boshlang‘ich ma’lumotlarni yuklang.
        </p>
      </main>
    );
  }

  const published = course.lessons.filter((lesson) => lesson.isPublished).length;
  const withVideo = course.lessons.filter((lesson) => lesson.hasVideo).length;

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[.16em] text-muted-foreground">
            {admin.email}
          </p>
          <h1 className="mt-2.5 text-3xl font-semibold tracking-tight">{course.title}</h1>
        </div>
        <div className="flex gap-2 font-mono text-xs text-muted-foreground">
          <span className="rounded-md border border-border px-3 py-2">
            {published} / {course.lessons.length} chop etilgan
          </span>
          <span className="rounded-md border border-border px-3 py-2">
            {withVideo} videoli
          </span>
        </div>
      </div>

      <div className="mt-10 space-y-4">
        {course.modules.map((module) => {
          const lessons = course.lessons.filter((item) => item.moduleId === module.id);
          return (
            <details
              key={module.id}
              open={module.position === 1}
              className="group rounded-xl border border-border bg-card"
            >
              <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between px-5">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                    {module.position}-chorak
                  </p>
                  <h2 className="mt-0.5 font-semibold">{module.title}</h2>
                </div>
                <span className="font-mono text-xs text-muted-foreground">
                  {lessons.filter((l) => l.isPublished).length} / {lessons.length}
                </span>
              </summary>

              <div className="border-t border-border p-2">
                {lessons.map((lesson) => (
                  <Link
                    key={lesson.id}
                    href={`/admin/lessons/${lesson.number}`}
                    className="flex min-h-14 items-center gap-4 rounded-lg px-3 transition-colors hover:bg-muted"
                  >
                    <span className="w-7 font-mono text-xs text-muted-foreground">
                      {lesson.number}
                    </span>
                    <span className="flex-1 text-sm leading-5">{lesson.title}</span>
                    {lesson.hasVideo && (
                      <Video className="size-3.5 text-muted-foreground" aria-label="Video bor" />
                    )}
                    <span
                      className={cn(
                        "flex size-5 items-center justify-center rounded-sm",
                        lesson.isPublished
                          ? "bg-foreground text-background"
                          : "border border-border text-muted-foreground",
                      )}
                      title={lesson.isPublished ? "Chop etilgan" : "Qoralama"}
                    >
                      {lesson.isPublished ? <Check className="size-3" strokeWidth={3} /> : null}
                    </span>
                    <Pencil className="size-3.5 text-muted-foreground" />
                  </Link>
                ))}
              </div>
            </details>
          );
        })}
      </div>
    </main>
  );
}
