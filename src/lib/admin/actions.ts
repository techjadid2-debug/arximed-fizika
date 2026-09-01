"use server";

import { revalidatePath } from "next/cache";

import { requireAdmin } from "@/lib/admin/guard";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { youtubeId } from "@/lib/youtube";

export interface ActionResult {
  ok: boolean;
  message: string;
}

async function client() {
  await requireAdmin();
  const supabase = await createSupabaseServerClient();
  if (!supabase) throw new Error("Supabase ulanmagan");
  return supabase;
}

function refresh(courseSlug: string, number: string) {
  revalidatePath("/admin");
  revalidatePath(`/admin/lessons/${number}`);
  for (const locale of ["uz", "en", "ru"]) {
    revalidatePath(`/${locale}/courses/${courseSlug}`);
    revalidatePath(`/${locale}/learn/${courseSlug}/${number}`);
  }
}

/** Dars sarlavhasi, kirish matni, video va uyga vazifa matnini saqlaydi. */
export async function saveLessonDetails(
  lessonId: string,
  courseSlug: string,
  number: string,
  form: FormData,
): Promise<ActionResult> {
  const supabase = await client();

  const rawVideo = String(form.get("videoUrl") ?? "").trim();
  if (rawVideo && !youtubeId(rawVideo)) {
    return { ok: false, message: "YouTube havolasi tanilmadi. Masalan: https://youtu.be/XXXXXXXXXXX" };
  }

  const durationRaw = String(form.get("videoDurationMin") ?? "").trim();
  const duration = durationRaw ? Number.parseInt(durationRaw, 10) : null;
  if (durationRaw && (!Number.isFinite(duration) || duration! <= 0)) {
    return { ok: false, message: "Davomiylik musbat butun son bo‘lishi kerak." };
  }

  const title = String(form.get("title") ?? "").trim();
  if (!title) return { ok: false, message: "Sarlavha bo‘sh bo‘lmasin." };

  const { error } = await supabase
    .from("lessons")
    .update({
      title,
      intro: String(form.get("intro") ?? "").trim(),
      video_url: rawVideo || null,
      video_duration_min: duration,
      homework_title: String(form.get("homeworkTitle") ?? "").trim(),
      homework_body: String(form.get("homeworkBody") ?? "").trim(),
      homework_pdf_url: String(form.get("homeworkPdfUrl") ?? "").trim() || null,
      is_published: form.get("isPublished") === "on",
    })
    .eq("id", lessonId);

  if (error) return { ok: false, message: error.message };
  refresh(courseSlug, number);
  return { ok: true, message: "Saqlandi" };
}

/** Yangi quiz savoli (uchta bo‘sh variant bilan). */
export async function addQuestion(
  lessonId: string,
  courseSlug: string,
  number: string,
): Promise<ActionResult> {
  const supabase = await client();

  const { data: last } = await supabase
    .from("quiz_questions")
    .select("position")
    .eq("lesson_id", lessonId)
    .order("position", { ascending: false })
    .limit(1)
    .maybeSingle();

  const { data: created, error } = await supabase
    .from("quiz_questions")
    .insert({
      lesson_id: lessonId,
      position: (last?.position ?? 0) + 1,
      question: "Yangi savol",
      explanation: "",
    })
    .select("id")
    .single();

  if (error || !created) return { ok: false, message: error?.message ?? "Savol qo‘shilmadi" };

  const { error: optionsError } = await supabase.from("quiz_options").insert([
    { question_id: created.id, position: 1, label: "Variant A", is_correct: true },
    { question_id: created.id, position: 2, label: "Variant B", is_correct: false },
    { question_id: created.id, position: 3, label: "Variant C", is_correct: false },
  ]);

  if (optionsError) return { ok: false, message: optionsError.message };
  refresh(courseSlug, number);
  return { ok: true, message: "Savol qo‘shildi" };
}

export async function saveQuestion(
  questionId: string,
  courseSlug: string,
  number: string,
  form: FormData,
): Promise<ActionResult> {
  const supabase = await client();

  const question = String(form.get("question") ?? "").trim();
  if (!question) return { ok: false, message: "Savol matni bo‘sh bo‘lmasin." };

  const correct = String(form.get("correct") ?? "");
  if (!correct) return { ok: false, message: "To‘g‘ri variantni belgilang." };

  const { error } = await supabase
    .from("quiz_questions")
    .update({ question, explanation: String(form.get("explanation") ?? "").trim() })
    .eq("id", questionId);
  if (error) return { ok: false, message: error.message };

  // Variantlar: label va to‘g‘riligi
  // Triggerni buzmaslik uchun avval noto‘g‘ri variantlarni is_correct=false qilamiz,
  // so‘ngra tanlangan to‘g‘ri variantni is_correct=true qilamiz.
  const { data: options } = await supabase
    .from("quiz_options")
    .select("id")
    .eq("question_id", questionId);

  const optionList = options ?? [];
  const targetCorrectOption = optionList.find((option) => option.id === correct);
  const otherOptions = optionList.filter((option) => option.id !== correct);

  for (const option of otherOptions) {
    const label = String(form.get(`label-${option.id}`) ?? "").trim();
    if (!label) return { ok: false, message: "Variant matni bo‘sh bo‘lmasin." };
    const { error: updateError } = await supabase
      .from("quiz_options")
      .update({ label, is_correct: false })
      .eq("id", option.id);
    if (updateError) return { ok: false, message: updateError.message };
  }

  if (targetCorrectOption) {
    const label = String(form.get(`label-${targetCorrectOption.id}`) ?? "").trim();
    if (!label) return { ok: false, message: "Variant matni bo‘sh bo‘lmasin." };
    const { error: updateError } = await supabase
      .from("quiz_options")
      .update({ label, is_correct: true })
      .eq("id", targetCorrectOption.id);
    if (updateError) return { ok: false, message: updateError.message };
  }

  refresh(courseSlug, number);
  return { ok: true, message: "Savol saqlandi" };
}

export async function deleteQuestion(
  questionId: string,
  courseSlug: string,
  number: string,
): Promise<ActionResult> {
  const supabase = await client();
  const { error } = await supabase.from("quiz_questions").delete().eq("id", questionId);
  if (error) return { ok: false, message: error.message };
  refresh(courseSlug, number);
  return { ok: true, message: "Savol o‘chirildi" };
}

/** Yangi tekshiriladigan mashq. */
export async function addTask(
  lessonId: string,
  courseSlug: string,
  number: string,
): Promise<ActionResult> {
  const supabase = await client();

  const { data: last } = await supabase
    .from("practice_tasks")
    .select("position")
    .eq("lesson_id", lessonId)
    .order("position", { ascending: false })
    .limit(1)
    .maybeSingle();

  const { error } = await supabase.from("practice_tasks").insert({
    lesson_id: lessonId,
    position: (last?.position ?? 0) + 1,
    prompt: "Yangi mashq",
    unit: "",
    answer: 0,
    tolerance: 0.01,
  });

  if (error) return { ok: false, message: error.message };
  refresh(courseSlug, number);
  return { ok: true, message: "Mashq qo‘shildi" };
}

export async function saveTask(
  taskId: string,
  courseSlug: string,
  number: string,
  form: FormData,
): Promise<ActionResult> {
  const supabase = await client();

  const prompt = String(form.get("prompt") ?? "").trim();
  if (!prompt) return { ok: false, message: "Mashq matni bo‘sh bo‘lmasin." };

  // Kasrda vergul ham qabul qilinadi: «2,5» → 2.5
  const answer = Number.parseFloat(String(form.get("answer") ?? "").replace(",", "."));
  const tolerance = Number.parseFloat(String(form.get("tolerance") ?? "").replace(",", "."));
  if (!Number.isFinite(answer)) return { ok: false, message: "Javob son bo‘lishi kerak." };
  if (!Number.isFinite(tolerance) || tolerance <= 0) {
    return { ok: false, message: "Xatolik chegarasi musbat son bo‘lishi kerak." };
  }

  const { error } = await supabase
    .from("practice_tasks")
    .update({
      prompt,
      unit: String(form.get("unit") ?? "").trim(),
      answer,
      tolerance,
      hint: String(form.get("hint") ?? "").trim(),
      solution: String(form.get("solution") ?? "").trim(),
    })
    .eq("id", taskId);

  if (error) return { ok: false, message: error.message };
  refresh(courseSlug, number);
  return { ok: true, message: "Mashq saqlandi" };
}

export async function deleteTask(
  taskId: string,
  courseSlug: string,
  number: string,
): Promise<ActionResult> {
  const supabase = await client();
  const { error } = await supabase.from("practice_tasks").delete().eq("id", taskId);
  if (error) return { ok: false, message: error.message };
  refresh(courseSlug, number);
  return { ok: true, message: "Mashq o‘chirildi" };
}

export async function signOut(): Promise<void> {
  const supabase = await createSupabaseServerClient();
  await supabase?.auth.signOut();
  revalidatePath("/admin");
}
