import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";

import { LessonEditor } from "@/app/admin/lessons/[number]/LessonEditor";
import { Button } from "@/components/ui/button";
import { requireAdmin } from "@/lib/admin/guard";
import { getLesson } from "@/lib/lessons";

const COURSE = "ilk-qadam";

export default async function AdminLessonPage({
  params,
}: {
  params: Promise<{ number: string }>;
}) {
  await requireAdmin();
  const { number } = await params;
  const lesson = await getLesson(COURSE, number);
  if (!lesson) notFound();

  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Button asChild variant="ghost" className="min-h-11 rounded-md">
          <Link href="/admin">
            <ArrowLeft />
            Darslar
          </Link>
        </Button>
        <Button asChild variant="outline" className="min-h-11 rounded-md">
          <Link href={`/uz/learn/${COURSE}/${number}`} target="_blank">
            Saytda ochish
            <ExternalLink />
          </Link>
        </Button>
      </div>

      <p className="mt-6 font-mono text-[11px] uppercase tracking-[.16em] text-muted-foreground">
        {COURSE} · {lesson.number}
      </p>
      <h1 className="mt-2.5 text-3xl font-semibold tracking-tight">{lesson.title}</h1>

      <LessonEditor lesson={lesson} courseSlug={COURSE} />
    </main>
  );
}
