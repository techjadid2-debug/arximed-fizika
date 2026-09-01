import { notFound } from "next/navigation";

import { CourseRoadmap } from "@/components/learn/CourseRoadmap";
import { getCourse } from "@/lib/lessons";
import { isLocale, type Locale } from "@/lib/i18n";

export default async function IlkQadamRoadmapPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();

  const course = await getCourse("ilk-qadam");
  if (!course) {
    return (
      <main className="mx-auto w-full max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold tracking-tight">Ilk qadam</h1>
        <p className="mt-4 max-w-lg leading-7 text-muted-foreground">
          Kurs ma’lumotlari hali bazaga yuklanmagan. Admin panel orqali darslarni qo‘shing.
        </p>
      </main>
    );
  }

  return <CourseRoadmap course={course} locale={rawLocale as Locale} />;
}
