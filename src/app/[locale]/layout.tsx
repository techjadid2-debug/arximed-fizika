import { notFound } from "next/navigation";
import type { ReactNode } from "react";

import { SiteHeader } from "@/components/navigation/SiteHeader";
import { isLocale, type Locale } from "@/lib/i18n";

export function generateStaticParams() {
  return [{ locale: "uz" }, { locale: "en" }, { locale: "ru" }];
}

export default async function LocaleLayout({ children, params }: { children: ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <><SiteHeader locale={locale as Locale} />{children}</>;
}

