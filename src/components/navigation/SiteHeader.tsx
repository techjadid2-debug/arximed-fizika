import Link from "next/link";
import { Atom } from "lucide-react";

import { LanguageSwitcher, MobileLanguageLink, ThemeToggle } from "@/components/navigation/SiteControls";
import { type Locale, ui } from "@/lib/i18n";

export function SiteHeader({ locale }: { locale: Locale }) {
  const copy = ui[locale];
  return (
    <header className="sticky top-0 z-30 border-b border-border/80 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href={`/${locale}`} className="flex min-h-11 items-center gap-2 font-semibold tracking-tight">
          <span className="grid size-8 place-items-center rounded-full bg-primary text-primary-foreground">
            <Atom className="size-4" aria-hidden="true" />
          </span>
          Physica
        </Link>
        <nav className="flex items-center gap-2">
          <Link href={`/${locale}/courses`} className="hidden rounded-full px-4 py-2 text-sm text-muted-foreground transition hover:bg-accent hover:text-accent-foreground sm:block">
            {copy.courses}
          </Link>
          <LanguageSwitcher locale={locale} />
          <MobileLanguageLink locale={locale} />
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
