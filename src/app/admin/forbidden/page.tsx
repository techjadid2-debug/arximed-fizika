import Link from "next/link";

import { Button } from "@/components/ui/button";
import { signOut } from "@/lib/admin/actions";

export default function ForbiddenPage() {
  return (
    <main className="mx-auto w-full max-w-lg px-4 py-24 text-center sm:px-6">
      <h1 className="text-3xl font-semibold tracking-tight">Ruxsat yo‘q</h1>
      <p className="mt-4 leading-7 text-muted-foreground">
        Hisobingiz tizimga kirdi, lekin admin ro‘yxatida emas. Supabase’dagi{" "}
        <span className="font-mono text-foreground">admins</span> jadvaliga user_id ingizni qo‘shing.
      </p>
      <div className="mt-8 flex justify-center gap-3">
        <form action={signOut}>
          <Button type="submit" variant="outline" className="min-h-11 rounded-md">
            Chiqish
          </Button>
        </form>
        <Button asChild className="min-h-11 rounded-md">
          <Link href="/uz">Bosh sahifa</Link>
        </Button>
      </div>
    </main>
  );
}
