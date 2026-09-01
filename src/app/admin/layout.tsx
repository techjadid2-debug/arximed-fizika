import Link from "next/link";
import { Atom, LogOut } from "lucide-react";

import { signOut } from "@/lib/admin/actions";
import { Button } from "@/components/ui/button";

export const metadata = { title: "Physica admin" };

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col">
      <header className="sticky top-0 z-30 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link href="/admin" className="flex min-h-11 items-center gap-2 font-semibold tracking-tight">
            <span className="grid size-8 place-items-center rounded-md bg-primary text-primary-foreground">
              <Atom className="size-4" aria-hidden="true" />
            </span>
            Physica
            <span className="ml-1 rounded-sm border border-border px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
              admin
            </span>
          </Link>
          <div className="flex items-center gap-2">
            <Button asChild variant="ghost" className="min-h-11 rounded-md">
              <Link href="/uz/courses/ilk-qadam">Saytni ko‘rish</Link>
            </Button>
            <form action={signOut}>
              <Button type="submit" variant="outline" className="min-h-11 rounded-md">
                <LogOut />
                Chiqish
              </Button>
            </form>
          </div>
        </div>
      </header>
      {children}
    </div>
  );
}
