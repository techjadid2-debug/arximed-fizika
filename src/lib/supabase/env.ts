/**
 * Supabase muhit o‘zgaruvchilari. Vercel Marketplace integratsiyasi
 * `NEXT_PUBLIC_SUPABASE_URL` va `NEXT_PUBLIC_SUPABASE_ANON_KEY` ni o‘zi qo‘yadi.
 *
 * Baza hali ulanmagan bo‘lsa sayt yiqilmasligi kerak — shuning uchun
 * qiymatlar ixtiyoriy va `isSupabaseConfigured` bilan tekshiriladi.
 */
export const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
export const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

export function isSupabaseConfigured(): boolean {
  return SUPABASE_URL.length > 0 && SUPABASE_ANON_KEY.length > 0;
}
