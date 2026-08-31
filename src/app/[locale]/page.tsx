import Link from "next/link";
import { ArrowRight, Gauge } from "lucide-react";

import { PhysicsCanvas2D } from "@/components/canvas/PhysicsCanvas2D";
import { SimulationControls, SimulationTelemetry } from "@/components/canvas/SimulationOverlay";
import { Button } from "@/components/ui/button";
import { isLocale, type Locale } from "@/lib/i18n";
import { notFound } from "next/navigation";

const copy = {
  uz: ["Fizikani formuladan oldin his qiling.", "Har bir qonunni tajriba, aniq formula va haqiqiy kasblar bilan tushuning.", "Ilk darsni boshlash", "Kurslar", "Tushunish · Tajriba · Natija"],
  en: ["Feel physics before the formula.", "Understand every law through experiments, clear formulae and real careers.", "Start lesson one", "Courses", "Understand · Explore · Apply"],
  ru: ["Почувствуйте физику до формулы.", "Понимайте каждый закон через опыт, точные формулы и реальные профессии.", "Начать первый урок", "Курсы", "Понять · Исследовать · Применить"],
} as const;

export default async function LocalizedHome({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;
  const t = copy[locale];
  return <main className="min-h-[calc(100dvh-4.5rem)] overflow-hidden"><div className="mx-auto grid max-w-7xl lg:grid-cols-[.85fr_1.15fr]"><section className="flex min-h-[52svh] flex-col justify-between px-5 py-14 sm:px-8 lg:px-12 lg:py-20"><div><p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[.16em] text-primary"><Gauge className="size-4"/>{t[4]}</p><h1 className="mt-8 max-w-xl text-5xl font-semibold leading-[.98] tracking-[-.065em] sm:text-6xl">{t[0]}</h1><p className="mt-7 max-w-md text-base leading-7 text-muted-foreground">{t[1]}</p><div className="mt-9 flex flex-wrap gap-3"><Button asChild className="min-h-12 rounded-md px-6"><Link href={`/${locale}/learn/ilk-qadam/01`}>{t[2]}<ArrowRight/></Link></Button><Button asChild variant="outline" className="min-h-12 rounded-md px-6"><Link href={`/${locale}/courses`}>{t[3]}</Link></Button></div></div><p className="mt-16 font-mono text-[10px] uppercase tracking-[.13em] text-muted-foreground">13+ · 2D / 3D labs · 60 Hz engine</p></section><section className="relative min-h-[52svh] overflow-hidden border-y border-border bg-card lg:border-l"><PhysicsCanvas2D/><SimulationTelemetry/><SimulationControls/></section></div></main>;
}
