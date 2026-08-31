"use client";

import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { defaultLocale, localeLabels, locales, type Locale } from "@/lib/i18n";

function replaceLocale(pathname: string, locale: Locale) {
  const segments = pathname.split("/");
  if (locales.includes(segments[1] as Locale)) segments[1] = locale;
  else segments.splice(1, 0, locale);
  return segments.join("/") || `/${locale}`;
}

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();

  return (
    <div className="hidden items-center rounded-md border border-border bg-card p-1 sm:flex">
      {locales.map((candidate) => (
        <Button
          key={candidate}
          asChild
          variant={candidate === locale ? "default" : "ghost"}
          size="sm"
          className="h-8 rounded-sm px-3 text-xs"
        >
          <Link href={replaceLocale(pathname, candidate)} title={localeLabels[candidate]}>
            {candidate.toUpperCase()}
          </Link>
        </Button>
      ))}
    </div>
  );
}

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme !== "light";

  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      className="size-11 rounded-md"
      aria-label={isDark ? "Light rejimga o‘tish" : "Dark rejimga o‘tish"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </Button>
  );
}

export function MobileLanguageLink({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const nextLocale = locales[(locales.indexOf(locale) + 1) % locales.length] ?? defaultLocale;
  return (
    <Button asChild variant="outline" size="sm" className="h-11 rounded-md px-3 sm:hidden">
      <Link href={replaceLocale(pathname, nextLocale)}>{nextLocale.toUpperCase()}</Link>
    </Button>
  );
}
