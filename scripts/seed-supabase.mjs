#!/usr/bin/env node
/**
 * Boshlang'ich ma'lumotlarni Supabase'ga yozadi:
 *   kurs → 5 chorak → 78 dars → 1-dars quiz va mashqlari
 *
 *   node scripts/seed-supabase.mjs
 *
 * Kerakli muhit o'zgaruvchilari (.env.local):
 *   NEXT_PUBLIC_SUPABASE_URL
 *   SUPABASE_SERVICE_ROLE_KEY   ← RLS ni chetlab o'tadi, faqat shu skript uchun
 */
import { readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { createClient } from "@supabase/supabase-js";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");

// .env.local ni qo'lda o'qiymiz — Node uni avtomatik yuklamaydi.
async function loadEnv() {
  try {
    const raw = await readFile(join(ROOT, ".env.local"), "utf8");
    for (const line of raw.split("\n")) {
      const match = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
      if (match && !process.env[match[1]]) {
        process.env[match[1]] = match[2].replace(/^["']|["']$/g, "");
      }
    }
  } catch {
    // .env.local bo'lmasa — muhit o'zgaruvchilari tashqaridan kelgan deb hisoblaymiz
  }
}

await loadEnv();

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!url || !serviceKey) {
  console.error("Xato: NEXT_PUBLIC_SUPABASE_URL va SUPABASE_SERVICE_ROLE_KEY kerak.");
  console.error("Supabase → Settings → API dan service_role kalitini oling va .env.local ga qo'shing.");
  process.exit(1);
}

const db = createClient(url, serviceKey, { auth: { persistSession: false } });
const seed = JSON.parse(await readFile(join(ROOT, "supabase/seed/ilk-qadam.json"), "utf8"));

const step = (message) => console.log(`  ${message}`);

// ─── Kurs ────────────────────────────────────────────────────────────────────
const { data: course, error: courseError } = await db
  .from("courses")
  .upsert(seed.course, { onConflict: "slug" })
  .select("id")
  .single();

if (courseError) {
  console.error("Kurs yozilmadi:", courseError.message);
  process.exit(1);
}
step(`kurs: ${seed.course.slug}`);

// ─── Choraklar ───────────────────────────────────────────────────────────────
const { data: modules, error: modulesError } = await db
  .from("modules")
  .upsert(
    seed.modules.map((m) => ({ course_id: course.id, position: m.position, title: m.title })),
    { onConflict: "course_id,position" },
  )
  .select("id, position");

if (modulesError) {
  console.error("Choraklar yozilmadi:", modulesError.message);
  process.exit(1);
}
const moduleByPosition = new Map(modules.map((m) => [m.position, m.id]));
step(`choraklar: ${modules.length}`);

// ─── Darslar ─────────────────────────────────────────────────────────────────
const content = seed.lessonContent ?? {};
const lessonRows = seed.lessons.map((lesson) => {
  const extra = content[lesson.number] ?? {};
  return {
    course_id: course.id,
    module_id: moduleByPosition.get(lesson.modulePosition) ?? null,
    number: lesson.number,
    position: lesson.position,
    title: lesson.title,
    intro: extra.intro ?? "",
    video_url: extra.videoUrl ?? null,
    video_duration_min: extra.videoDurationMin ?? null,
    homework_title: extra.homeworkTitle ?? "",
    homework_body: extra.homeworkBody ?? "",
    homework_pdf_url: extra.homeworkPdfUrl ?? null,
    // Faqat kontenti bor darslar chop etiladi
    is_published: Boolean(content[lesson.number]),
  };
});

const { data: lessons, error: lessonsError } = await db
  .from("lessons")
  .upsert(lessonRows, { onConflict: "course_id,number" })
  .select("id, number");

if (lessonsError) {
  console.error("Darslar yozilmadi:", lessonsError.message);
  process.exit(1);
}
const lessonByNumber = new Map(lessons.map((l) => [l.number, l.id]));
step(`darslar: ${lessons.length}`);

// ─── Quiz va mashqlar ────────────────────────────────────────────────────────
for (const [number, data] of Object.entries(content)) {
  const lessonId = lessonByNumber.get(number);
  if (!lessonId) continue;

  // Qayta ishga tushirishda takrorlanmasligi uchun avval tozalaymiz
  await db.from("quiz_questions").delete().eq("lesson_id", lessonId);
  await db.from("practice_tasks").delete().eq("lesson_id", lessonId);

  for (const question of data.quiz ?? []) {
    const { data: created, error } = await db
      .from("quiz_questions")
      .insert({
        lesson_id: lessonId,
        position: question.position,
        question: question.question,
        explanation: question.explanation ?? "",
      })
      .select("id")
      .single();
    if (error) {
      console.error(`Savol yozilmadi (${number}/${question.position}):`, error.message);
      process.exit(1);
    }

    const { error: optionsError } = await db.from("quiz_options").insert(
      question.options.map((option) => ({
        question_id: created.id,
        position: option.position,
        label: option.label,
        is_correct: option.isCorrect,
      })),
    );
    if (optionsError) {
      console.error(`Variantlar yozilmadi (${number}/${question.position}):`, optionsError.message);
      process.exit(1);
    }
  }
  step(`${number}-dars quiz: ${(data.quiz ?? []).length} savol`);

  if ((data.practice ?? []).length > 0) {
    const { error } = await db.from("practice_tasks").insert(
      data.practice.map((task) => ({
        lesson_id: lessonId,
        position: task.position,
        prompt: task.prompt,
        unit: task.unit ?? "",
        answer: task.answer,
        tolerance: task.tolerance ?? 0.01,
        hint: task.hint ?? "",
        solution: task.solution ?? "",
      })),
    );
    if (error) {
      console.error(`Mashqlar yozilmadi (${number}):`, error.message);
      process.exit(1);
    }
    step(`${number}-dars mashqlar: ${data.practice.length}`);
  }
}

console.log("");
console.log("Tayyor. Endi o'zingizni admin qiling:");
console.log("  node scripts/make-admin.mjs <email>");
