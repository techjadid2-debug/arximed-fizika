import { notFound } from "next/navigation";

import { LessonShell } from "@/components/learn/LessonShell";
import { isAdmin } from "@/lib/admin/guard";
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

  // Dars sarlavhalari yo‘l xaritasida hammaga ko‘rinadi, lekin chop etilmagan
  // darsning o‘zini faqat admin ocha oladi (oldindan ko‘rish uchun).
  if (!lesson.isPublished && !(await isAdmin())) notFound();

  return (
    <LessonShell
      lessonId={`${course}-${number}`}
      lesson={lesson}
      locale={rawLocale as Locale}
    />
  );
}
