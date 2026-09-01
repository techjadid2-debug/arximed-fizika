import { notFound } from "next/navigation";

import { LessonShell } from "@/components/learn/LessonShell";
import { getLesson } from "@/lib/lessons";
import { isLocale, type Locale } from "@/lib/i18n";

export default async function LessonPage({
  params,
}: {
  params: Promise<{ locale: string; course: string; lesson: string }>;
}) {
  const { locale: rawLocale, course, lesson: number } = await params;
  if (!isLocale(rawLocale)) notFound();

  const lesson = await getLesson(course, number);
  if (!lesson) notFound();

  return (
    <LessonShell
      lessonId={`${course}-${number}`}
      lesson={lesson}
      locale={rawLocale as Locale}
    />
  );
}
