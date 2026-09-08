import { notFound } from "next/navigation";

import { CourseRoadmap } from "@/components/learn/CourseRoadmap";
import { ilkQadamRoadmap } from "@/data/courses/ilk-qadam";
import { isLocale, type Locale } from "@/lib/i18n";
import { getCourse } from "@/lib/lessons";
import type { Course } from "@/types/lesson";

function getStaticIlkQadamCourse(): Course {
  const modules = ilkQadamRoadmap.map((q) => ({
    id: `mod-${q.number}`,
    position: q.number,
    title: q.title,
  }));

  const lessons = ilkQadamRoadmap.flatMap((q) =>
    q.lessons.map((l) => ({
      id: `lesson-${l.id}`,
      number: String(l.id).padStart(2, "0"),
      position: l.id,
      title: l.title,
      moduleId: `mod-${q.number}`,
      hasVideo: l.id === 1,
      isPublished: true,
    })),
  );

  return {
    id: "ilk-qadam-static",
    slug: "ilk-qadam",
    title: "Ilk qadam",
    description: "78 dars · 5 chorak · Fizika asoslari",
    modules,
    lessons,
  };
}

export default async function IlkQadamRoadmapPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();

  // Baza orqali olishga urinish, bo‘lmasa to‘liq statik ma’lumot bilan ochish
  const dbCourse = await getCourse("ilk-qadam").catch(() => null);
  const course = dbCourse && dbCourse.lessons.length > 0 ? dbCourse : getStaticIlkQadamCourse();

  return <CourseRoadmap course={course} locale={rawLocale as Locale} />;
}
