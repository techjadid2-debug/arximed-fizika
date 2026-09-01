import { Suspense } from "react";

import { LoginForm } from "@/app/admin/login/LoginForm";

export default function AdminLoginPage() {
  return (
    <main className="mx-auto flex w-full max-w-sm flex-1 flex-col justify-center px-4 py-20 sm:px-6">
      <p className="font-mono text-[11px] uppercase tracking-[.16em] text-muted-foreground">
        Physica admin
      </p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight">Kirish</h1>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">
        Dars materiallarini tahrirlash uchun tizimga kiring.
      </p>
      <div className="mt-8">
        {/* useSearchParams() statik prerender uchun Suspense chegarasini talab qiladi */}
        <Suspense fallback={<div className="h-64" />}>
          <LoginForm />
        </Suspense>
      </div>
    </main>
  );
}
