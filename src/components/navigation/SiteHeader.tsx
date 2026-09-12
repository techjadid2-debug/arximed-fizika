import Link from "next/link";
import { Sparkles } from "lucide-react";

import { AudioToggle } from "@/components/navigation/AudioToggle";
import { ProgressBadges } from "@/components/navigation/ProgressBadges";
import { LanguageSwitcher, MobileLanguageLink, ThemeToggle } from "@/components/navigation/SiteControls";
import { type Locale, ui } from "@/lib/i18n";

export function SiteHeader({ locale }: { locale: Locale }) {
  const copy = ui[locale];
  return (
    <header className="sticky top-0 z-30 border-b border-border/80 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href={`/${locale}`} className="flex min-h-11 items-center gap-2 font-bold tracking-tight text-lg">
          <span className="grid size-8 place-items-center rounded-lg bg-gradient-to-tr from-emerald-600 to-cyan-500 text-white shadow-sm">
            <Sparkles className="size-4" aria-hidden="true" />
          </span>
          <span>Arximed<span className="text-emerald-500">.uz</span></span>
        </Link>
        <nav className="flex items-center gap-2">
          <Link
            href={`/${locale}/courses`}
            className="hidden rounded-md px-3.5 py-2 text-sm font-medium text-muted-foreground transition hover:bg-accent hover:text-accent-foreground sm:block"
          >
            {copy.courses}
          </Link>
          <ProgressBadges />
          <AudioToggle />
          <LanguageSwitcher locale={locale} />
          <MobileLanguageLink locale={locale} />
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
