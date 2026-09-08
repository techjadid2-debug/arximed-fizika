import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

import { SUPABASE_ANON_KEY, SUPABASE_URL, isSupabaseConfigured } from "@/lib/supabase/env";

/**
 * Sessiya cookie'sini yangilab turadi va `/admin` ni himoyalaydi.
 * Next 16 da bu fayl `proxy.ts` deb ataladi (ilgari `middleware.ts` edi).
 */
export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isAdminArea = pathname.startsWith("/admin");
  const isLoginPage = pathname === "/admin/login";

  let response = NextResponse.next({ request });

  // Oddiy o‘quvchilar va ommaviy sahifalar uchun darhol qaytaramiz (0ms kechikish)
  if (!isAdminArea) {
    return response;
  }

  if (!isSupabaseConfigured()) {
    // Baza ulanmagan — admin sahifasi ochilmaydi.
    const url = request.nextUrl.clone();
    url.pathname = "/admin/setup";
    if (pathname !== "/admin/setup") return NextResponse.redirect(url);
    return response;
  }

  try {
    const supabase = createServerClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
      cookies: {
        getAll: () => request.cookies.getAll(),
        setAll: (list) => {
          for (const { name, value } of list) request.cookies.set(name, value);
          response = NextResponse.next({ request });
          for (const { name, value, options } of list) response.cookies.set(name, value, options);
        },
      },
    });

    // 1 soniya timeout bilan sessiyani tekshiramiz
    const authPromise = supabase.auth.getUser();
    const timeoutPromise = new Promise<{ data: { user: null } }>((resolve) =>
      setTimeout(() => resolve({ data: { user: null } }), 1000),
    );

    const {
      data: { user },
    } = await Promise.race([authPromise, timeoutPromise]);

    if (!isLoginPage && !user) {
      const url = request.nextUrl.clone();
      url.pathname = "/admin/login";
      url.searchParams.set("next", pathname);
      return NextResponse.redirect(url);
    }

    if (isLoginPage && user) {
      const url = request.nextUrl.clone();
      url.pathname = "/admin";
      url.search = "";
      return NextResponse.redirect(url);
    }
  } catch {
    // Baza xatosi bo‘lsa ham sahifani qotirmaymiz
  }

  return response;
}

export const config = {
  matcher: [
    // Statik fayllar va rasmlardan tashqari hammasi — sessiya yangilanishi uchun.
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|pdf)$).*)",
  ],
};
