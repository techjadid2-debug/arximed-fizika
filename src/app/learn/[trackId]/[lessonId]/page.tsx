import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { LessonRunner } from "@/components/learn/LessonRunner";
import { getLesson } from "@/data/lessons";

interface LessonPageProps {
  params: Promise<{
    trackId: string;
    lessonId: string;
  }>;
}

export async function generateMetadata({
  params,
}: LessonPageProps): Promise<Metadata> {
  const { trackId, lessonId } = await params;
  const lesson = getLesson(trackId, lessonId);

  return {
    title: lesson?.title ?? "Dars topilmadi",
    description: lesson?.description,
  };
}

export default async function LessonPage({ params }: LessonPageProps) {
  const { trackId, lessonId } = await params;
  const lesson = getLesson(trackId, lessonId);

  if (!lesson) notFound();

  return <LessonRunner lesson={lesson} />;
}
