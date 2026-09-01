import "server-only";

import { redirect } from "next/navigation";

import { createSupabaseServerClient } from "@/lib/supabase/server";

export interface AdminSession {
  userId: string;
  email: string;
}

/**
 * Admin sahifalari va Server Action'lari uchun himoya.
 * Proxy allaqachon login'ni tekshiradi; bu yerda `admins` jadvalidagi
 * a'zolik ham tekshiriladi — kirgan har bir foydalanuvchi admin emas.
 */
export async function requireAdmin(): Promise<AdminSession> {
  const supabase = await createSupabaseServerClient();
  if (!supabase) redirect("/admin/setup");

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/admin/login");

  const { data } = await supabase
    .from("admins")
    .select("user_id")
    .eq("user_id", user.id)
    .maybeSingle();

  if (!data) redirect("/admin/forbidden");

  return { userId: user.id, email: user.email ?? "" };
}
