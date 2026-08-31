import { notFound } from "next/navigation";
import { FirstLessonRunner } from "@/components/learn/FirstLessonRunner";
import { isLocale, type Locale } from "@/lib/i18n";

export default async function FirstLessonPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params; if (!isLocale(locale)) notFound();
  return <FirstLessonRunner locale={locale as Locale} />;
}
