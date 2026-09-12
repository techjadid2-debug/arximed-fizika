import Link from "next/link";
import { ArrowRight, Atom, LockKeyhole, Orbit, Trophy } from "lucide-react";
import { notFound } from "next/navigation";

import { Card, CardContent } from "@/components/ui/card";
import { isLocale, type Locale } from "@/lib/i18n";

const courses = {
  uz: [["Ilk qadam", "78 dars · 5 chorak · fundamental fizika", "Ochiq"], ["Milliy sertifikat", "Sertifikat uchun chuqurlashtirilgan tayyorgarlik", "Tez orada"], ["AP/A-Level", "Xalqaro dasturlar uchun masalalar banki", "Tez orada"], ["Olimpiada", "Murakkab masalalar va strategiyalar", "Tez orada"]],
  en: [["First Steps", "78 lessons · 5 quarters · physics foundations", "Open"], ["National certification", "In-depth certification preparation", "Coming soon"], ["AP/A-Level", "Problem bank for international curricula", "Coming soon"], ["Olympiad", "Challenging problems and strategies", "Coming soon"]],
  ru: [["Первые шаги", "78 уроков · 5 четвертей · основы физики", "Открыт"], ["Национальная сертификация", "Углублённая подготовка к сертификации", "Скоро"], ["AP/A-Level", "Банк задач для международных программ", "Скоро"], ["Олимпиада", "Сложные задачи и стратегии", "Скоро"]],
} as const;
const icons = [Orbit, Atom, Trophy, LockKeyhole];

export function generateStaticParams() {
  return [{ locale: "uz" }, { locale: "en" }, { locale: "ru" }];
}

export default async function Courses({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params; if (!isLocale(rawLocale)) notFound(); const locale = rawLocale as Locale;
  return <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8"><p className="font-mono text-[11px] uppercase tracking-[.16em] text-primary">Physica courses</p><h1 className="mt-4 text-4xl font-semibold tracking-[-.05em] sm:text-5xl">{locale === "uz" ? "O‘zingizga mos yo‘lni tanlang." : locale === "en" ? "Choose your learning path." : "Выберите свой путь обучения."}</h1><div className="mt-10 grid gap-4 md:grid-cols-2">{courses[locale].map(([title, description, status], index) => { const Icon = icons[index]; const open = index === 0; const body = <Card className="h-full rounded-xl border border-border transition-transform hover:-translate-y-1"><CardContent className="flex min-h-56 flex-col p-7"><div className="flex items-center justify-between"><div className="grid size-11 place-items-center rounded-lg bg-primary/10 text-primary"><Icon className="size-5"/></div><span className="rounded-md border border-border px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{status}</span></div><div className="mt-auto pt-12"><h2 className="text-2xl font-semibold">{title}</h2><p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>{open && <span className="mt-5 flex items-center gap-2 text-sm text-primary">{locale === "uz" ? "Roadmapni ochish" : locale === "en" ? "Open roadmap" : "Открыть программу"}<ArrowRight className="size-4"/></span>}</div></CardContent></Card>; return open ? <Link key={title} href={`/${locale}/courses/ilk-qadam`}>{body}</Link> : <div key={title} aria-disabled="true">{body}</div>; })}</div></main>;
}
