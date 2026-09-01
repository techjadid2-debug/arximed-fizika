"use client";

import { createBrowserClient } from "@supabase/ssr";

import { SUPABASE_ANON_KEY, SUPABASE_URL, isSupabaseConfigured } from "./env";

let cached: ReturnType<typeof createBrowserClient> | null = null;

/** Brauzer tomonidagi Supabase mijozi (admin login uchun). */
export function getSupabaseBrowserClient() {
  if (!isSupabaseConfigured()) return null;
  cached ??= createBrowserClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  return cached;
}
