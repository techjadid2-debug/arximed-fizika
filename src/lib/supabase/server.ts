import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

import { SUPABASE_ANON_KEY, SUPABASE_URL, isSupabaseConfigured } from "./env";

/**
 * Server komponentlar va Server Action'lar uchun Supabase mijozi.
 * Sessiya cookie'da saqlanadi, shuning uchun admin auth server tomonda ishlaydi.
 */
export async function createSupabaseServerClient() {
  if (!isSupabaseConfigured()) return null;
  const cookieStore = await cookies();

  return createServerClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    cookies: {
      getAll: () => cookieStore.getAll(),
      setAll: (list) => {
        try {
          for (const { name, value, options } of list) {
            cookieStore.set(name, value, options);
          }
        } catch {
          // Server Component ichida cookie yozib bo‘lmaydi — proxy yangilaydi.
        }
      },
    },
  });
}
