import { isSupabaseConfigured } from "@/lib/supabase/env";
import { redirect } from "next/navigation";

export default function AdminSetupPage() {
  if (isSupabaseConfigured()) redirect("/admin");

  return (
    <main className="mx-auto w-full max-w-2xl px-4 py-16 sm:px-6">
      <p className="font-mono text-[11px] uppercase tracking-[.16em] text-muted-foreground">
        Sozlash
      </p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight">Baza hali ulanmagan</h1>
      <p className="mt-4 leading-7 text-muted-foreground">
        Admin panel ishlashi uchun Supabase ulanishi kerak. Quyidagi qadamlarni bajaring:
      </p>

      <ol className="mt-8 space-y-5 border-l border-border pl-6">
        {[
          {
            title: "Vercel Marketplace shartlarini qabul qiling",
            body: "vercel.com hisobingizda Supabase integratsiyasi uchun shartlarni tasdiqlang.",
          },
          {
            title: "Integratsiyani o‘rnating",
            body: "vercel integration add supabase — muhit o‘zgaruvchilari avtomatik qo‘shiladi.",
          },
          {
            title: "Sxemani qo‘llang",
            body: "supabase/migrations/0001_init.sql faylini Supabase SQL editorida ishga tushiring.",
          },
          {
            title: "Kontentni yuklang",
            body: "node scripts/seed-supabase.mjs — 78 dars va 1-dars kontenti bazaga yoziladi.",
          },
          {
            title: "O‘zingizni admin qiling",
            body: "Supabase’da foydalanuvchi yarating, so‘ng admins jadvaliga user_id ni qo‘shing.",
          },
        ].map((step, index) => (
          <li key={step.title}>
            <p className="font-medium">
              <span className="mr-2.5 font-mono text-xs text-muted-foreground">
                {index + 1}.
              </span>
              {step.title}
            </p>
            <p className="mt-1.5 pl-7 text-sm leading-6 text-muted-foreground">{step.body}</p>
          </li>
        ))}
      </ol>

      <p className="mt-10 rounded-lg border border-border bg-muted/40 p-4 text-sm leading-6 text-muted-foreground">
        To‘liq yo‘riqnoma: <span className="font-mono">docs/ADMIN.md</span>
      </p>
    </main>
  );
}
