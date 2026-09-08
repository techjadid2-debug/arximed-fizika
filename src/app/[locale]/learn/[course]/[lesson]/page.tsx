import { notFound } from "next/navigation";
import { BookOpen, GraduationCap } from "lucide-react";

import { LessonCheatsheetView } from "@/components/learn/LessonCheatsheetView";
import { LessonShell } from "@/components/learn/LessonShell";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getLessonCheatsheet } from "@/data/cheatsheets/ilk-qadam";
import { isLocale, type Locale } from "@/lib/i18n";
import { getLesson } from "@/lib/lessons";

export default async function LessonPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string; course: string; lesson: string }>;
  searchParams?: Promise<{ mode?: string }>;
}) {
  const { locale: rawLocale, course, lesson: number } = await params;
  if (!isLocale(rawLocale)) notFound();

  const query = searchParams ? await searchParams : undefined;
  const initialMode = query?.mode === "interactive" ? "interactive" : "cheatsheet";

  // O‘qituvchi cheatsheeti (barcha darslar uchun mavjud)
  const cheatsheet = getLessonCheatsheet(number);

  // Supabase darsi (mavjud bo‘lsa)
  const lesson = await getLesson(course, number).catch(() => null);

  const hasInteractiveContent = Boolean(
    lesson && (lesson.quiz.length > 0 || lesson.videoUrl || ["01", "02", "03", "04", "05"].includes(number)),
  );

  return (
    <main className="min-h-screen bg-background text-foreground">
      {hasInteractiveContent && lesson ? (
        <Tabs defaultValue={initialMode} className="w-full">
          <div className="border-b border-border bg-muted/40 print:hidden">
            <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
              <TabsList className="h-9">
                <TabsTrigger value="cheatsheet" className="gap-1.5 text-xs sm:text-sm">
                  <GraduationCap className="size-3.5" />
                  O‘qituvchi Cheatsheet
                </TabsTrigger>
                <TabsTrigger value="interactive" className="gap-1.5 text-xs sm:text-sm">
                  <BookOpen className="size-3.5" />
                  O‘quvchi Ko‘rinishi (Slaydlar / Lab / Test)
                </TabsTrigger>
              </TabsList>
              <span className="font-mono text-xs text-muted-foreground hidden sm:inline">
                {course} · #{number}
              </span>
            </div>
          </div>

          <TabsContent value="cheatsheet" className="m-0 focus-visible:outline-hidden">
            <LessonCheatsheetView
              cheatsheet={cheatsheet}
              locale={rawLocale as Locale}
              courseSlug={course}
            />
          </TabsContent>

          <TabsContent value="interactive" className="m-0 focus-visible:outline-hidden">
            <LessonShell
              lessonId={`${course}-${number}`}
              lesson={lesson}
              locale={rawLocale as Locale}
            />
          </TabsContent>
        </Tabs>
      ) : (
        <LessonCheatsheetView
          cheatsheet={cheatsheet}
          locale={rawLocale as Locale}
          courseSlug={course}
        />
      )}
    </main>
  );
}
