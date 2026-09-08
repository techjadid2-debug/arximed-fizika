import "server-only";

import { getStaticLesson } from "@/data/lessons";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import type { Course, Lesson, LessonSummary, PracticeTask, QuizQuestion } from "@/types/lesson";

/**
 * Darslarni Supabase'dan o‘qish. Baza ulanmagan bo‘lsa `null` qaytaradi —
 * sahifalar buni «tez orada» holati sifatida ko‘rsatadi.
 */

interface OptionRow {
  id: string;
  position: number;
  label: string;
  is_correct: boolean;
}

interface QuestionRow {
  id: string;
  position: number;
  question: string;
  explanation: string;
  quiz_options: OptionRow[];
}

interface PracticeRow {
  id: string;
  position: number;
  prompt: string;
  unit: string;
  answer: number | string;
  tolerance: number | string;
  hint: string;
  solution: string;
}

const byPosition = <T extends { position: number }>(rows: T[]): T[] =>
  [...rows].sort((a, b) => a.position - b.position);

function toQuiz(rows: QuestionRow[]): QuizQuestion[] {
  return byPosition(rows).map((row) => ({
    id: row.id,
    position: row.position,
    question: row.question,
    explanation: row.explanation,
    options: byPosition(row.quiz_options ?? []).map((option) => ({
      id: option.id,
      label: option.label,
      isCorrect: option.is_correct,
    })),
  }));
}

function toPractice(rows: PracticeRow[]): PracticeTask[] {
  return byPosition(rows).map((row) => ({
    id: row.id,
    position: row.position,
    prompt: row.prompt,
    unit: row.unit,
    answer: Number(row.answer),
    tolerance: Number(row.tolerance),
    hint: row.hint,
    solution: row.solution,
  }));
}

export async function getCourse(slug: string): Promise<Course | null> {
  const supabase = await createSupabaseServerClient().catch(() => null);
  if (!supabase) return null;

  try {
    const timeoutPromise = new Promise<null>((resolve) => setTimeout(() => resolve(null), 500));
    const queryPromise = supabase
      .from("courses")
      .select(
        `id, slug, title, description,
         modules ( id, position, title ),
         lessons ( id, number, position, title, module_id, video_url, is_published )`,
      )
      .eq("slug", slug)
      .maybeSingle()
      .then(({ data, error }) => (error || !data ? null : data));

    const data = await Promise.race([queryPromise, timeoutPromise]);
    if (!data) return null;

    const lessons: LessonSummary[] = byPosition(
      (data.lessons ?? []) as {
        id: string;
        number: string;
        position: number;
        title: string;
        module_id: string | null;
        video_url: string | null;
        is_published: boolean;
      }[],
    ).map((row) => ({
      id: row.id,
      number: row.number,
      position: row.position,
      title: row.title,
      moduleId: row.module_id,
      hasVideo: Boolean(row.video_url),
      isPublished: row.is_published,
    }));

    return {
      id: data.id,
      slug: data.slug,
      title: data.title,
      description: data.description,
      modules: byPosition((data.modules ?? []) as { id: string; position: number; title: string }[]),
      lessons,
    };
  } catch {
    return null;
  }
}

export async function getLesson(courseSlug: string, number: string): Promise<Lesson | null> {
  // 1. Agar dars statik ma'lumotlarda mavjud bo'lsa (masalan 01, 02), uni DARHOL qaytaramiz (0ms!)
  const staticLesson = getStaticLesson(courseSlug, number);
  if (staticLesson) return staticLesson;

  const supabase = await createSupabaseServerClient().catch(() => null);
  if (!supabase) return null;

  try {
    const timeoutPromise = new Promise<null>((resolve) => setTimeout(() => resolve(null), 500));
    const queryPromise = supabase
      .from("lessons")
      .select(
        `id, number, position, title, intro, video_url, video_duration_min,
         homework_title, homework_body, homework_pdf_url, is_published,
         courses!inner ( slug ),
         quiz_questions ( id, position, question, explanation,
                          quiz_options ( id, position, label, is_correct ) ),
         practice_tasks ( id, position, prompt, unit, answer, tolerance, hint, solution )`,
      )
      .eq("courses.slug", courseSlug)
      .eq("number", number)
      .maybeSingle()
      .then(({ data, error }) => (error || !data ? null : data));

    const data = await Promise.race([queryPromise, timeoutPromise]);
    if (!data) return null;

    return {
      id: data.id,
      courseSlug,
      number: data.number,
      position: data.position,
      title: data.title,
      intro: data.intro,
      videoUrl: data.video_url,
      videoDurationMin: data.video_duration_min,
      quiz: toQuiz((data.quiz_questions ?? []) as unknown as QuestionRow[]),
      practice: toPractice((data.practice_tasks ?? []) as unknown as PracticeRow[]),
      homework: {
        title: data.homework_title,
        body: data.homework_body,
        pdfUrl: data.homework_pdf_url,
      },
      isPublished: data.is_published,
    };
  } catch {
    return null;
  }
}

