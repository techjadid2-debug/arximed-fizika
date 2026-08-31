"use client";

import { Check, ChevronRight, Crosshair, Ruler, Rocket } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { Locale } from "@/lib/i18n";
import { useLessonStore } from "@/store/useLessonStore";

const lessonId = "ilk-qadam-01";
const requiredActivities = ["measure", "convert", "quiz", "problem"];

const copy = {
  uz: { title: "Fizik kattaliklar va SI", lead: "Agar hamma o‘z qarichi bilan o‘lchasa, koinot kemasini qanday quramiz?", careerName: "Metrolog / Kosmik muhandis", intro: "Kirish", simulation: "Interaktiv tajriba", math: "Matematik asos", career: "Kasb bilan bog‘liqlik", lab: "Quiz va laboratoriya", measure: "Raqamli shtangensirkul", convert: "Koinot missiyasi", quiz: "Tezkor savol", problem: "Hisoblash", complete: "Dars yakunlandi", answer: "Javobni tekshirish", correct: "To‘g‘ri!", prompt: "Qalam uzunligini o‘lchang", mission: "2.4 km parvoz yo‘li necha metr?", quizQuestion: "SI sistemasida uzunlikning asosiy birligi qaysi?", problemQuestion: "750 sm necha metr?" },
  en: { title: "Physical quantities and SI", lead: "If everyone measured with their own handspan, how could we build a spacecraft?", careerName: "Metrologist / Space engineer", intro: "Intro", simulation: "Interactive exploration", math: "Mathematical foundation", career: "Career spotlight", lab: "Quiz & lab", measure: "Digital caliper", convert: "Space mission", quiz: "Quick quiz", problem: "Calculation", complete: "Lesson complete", answer: "Check answer", correct: "Correct!", prompt: "Measure the pencil length", mission: "How many metres is a 2.4 km flight path?", quizQuestion: "What is the SI base unit of length?", problemQuestion: "How many metres is 750 cm?" },
  ru: { title: "Физические величины и СИ", lead: "Как построить космический корабль, если каждый измеряет своей пядью?", careerName: "Метролог / космический инженер", intro: "Введение", simulation: "Интерактивный опыт", math: "Математическая основа", career: "Связь с профессией", lab: "Квиз и лаборатория", measure: "Цифровой штангенциркуль", convert: "Космическая миссия", quiz: "Быстрый квиз", problem: "Расчёт", complete: "Урок завершён", answer: "Проверить", correct: "Верно!", prompt: "Измерьте длину карандаша", mission: "Сколько метров в траектории 2,4 км?", quizQuestion: "Какая единица длины является основной в СИ?", problemQuestion: "Сколько метров в 750 см?" },
} as const;

export function FirstLessonRunner({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const [ruler, setRuler] = useState(0);
  const [conversion, setConversion] = useState("");
  const [quiz, setQuiz] = useState("");
  const [problem, setProblem] = useState("");
  const completeActivity = useLessonStore((state) => state.completeActivity);
  const progress = useLessonStore((state) => state.progressByLesson[lessonId]);
  const complete = progress?.completedActivityIds ?? [];
  const done = requiredActivities.every((item) => complete.includes(item));
  const finishMeasure = () => ruler === 12 && completeActivity(lessonId, "measure");
  const finishConvert = () => Number(conversion) === 2400 && completeActivity(lessonId, "convert");
  const finishQuiz = (value: string) => { setQuiz(value); if (value === "metre") completeActivity(lessonId, "quiz"); };
  const finishProblem = () => Number(problem) === 7.5 && completeActivity(lessonId, "problem");

  const stages = [t.intro, t.simulation, t.math, t.career, t.lab];
  return (
    <main className="mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <p className="font-mono text-[11px] uppercase tracking-[.18em] text-muted-foreground">Ilk qadam · 01</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-.05em] sm:text-5xl">{t.title}</h1>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">{t.lead}</p>
          <div className="mt-8 space-y-3 border-l border-border pl-4">
            {stages.map((stage, index) => <p key={stage} className="text-sm"><span className="mr-3 font-mono text-primary">0{index + 1}</span>{stage}</p>)}
          </div>
        </aside>
        <section className="space-y-5">
          <Card className="rounded-[2rem] border border-border shadow-sm"><CardContent className="p-6 sm:p-8"><div className="flex gap-3"><Rocket className="mt-1 size-5 text-primary"/><div><p className="font-mono text-xs uppercase tracking-wider text-primary">{t.intro}</p><h2 className="mt-2 text-2xl font-semibold">{locale === "uz" ? "Birliklar — umumiy til" : locale === "en" ? "Units are a shared language" : "Единицы — общий язык"}</h2><p className="mt-3 leading-7 text-muted-foreground">{locale === "uz" ? "O‘lchash kelishuvdan boshlanadi: bir xil metr, sekund va kilogramm aniq tajriba hamda xavfsiz muhandislikni yaratadi." : locale === "en" ? "Measurement begins with agreement: the same metre, second and kilogram make precise experiments and safe engineering possible." : "Измерение начинается с договорённости: единые метр, секунда и килограмм делают возможными точные эксперименты и безопасную инженерию."}</p></div></div></CardContent></Card>
          <Card className="rounded-[2rem] border border-border"><CardContent className="p-6 sm:p-8"><p className="font-mono text-xs uppercase tracking-wider text-primary">{t.simulation} · {t.measure}</p><h2 className="mt-2 text-2xl font-semibold">{t.prompt}</h2><div className="mt-7 rounded-2xl bg-muted p-5"><div className="relative h-20 overflow-hidden rounded-xl bg-background"><div className="absolute left-8 top-8 h-4 w-[48%] rounded-full bg-amber-500"/><div className="absolute bottom-0 left-0 right-0 flex justify-between px-3 font-mono text-[10px] text-muted-foreground">{Array.from({length: 16}, (_, i) => <span key={i}>{i}</span>)}</div></div><input aria-label="Ruler" type="range" min="0" max="15" value={ruler} onChange={(event) => setRuler(Number(event.target.value))} className="mt-5 w-full accent-primary"/><div className="mt-3 flex items-center justify-between font-mono text-sm"><span>{ruler.toFixed(1)} cm</span><Button onClick={finishMeasure} disabled={ruler !== 12} className="min-h-11 rounded-full">{complete.includes("measure") ? <Check/> : <Ruler/>}{complete.includes("measure") ? t.correct : t.answer}</Button></div></div></CardContent></Card>
          <Card className="rounded-[2rem] border border-border"><CardContent className="p-6 sm:p-8"><p className="font-mono text-xs uppercase tracking-wider text-primary">{t.simulation} · {t.convert}</p><h2 className="mt-2 text-2xl font-semibold">{t.mission}</h2><div className="mt-6 flex gap-3"><input value={conversion} onChange={(e) => setConversion(e.target.value)} inputMode="decimal" placeholder="m" className="min-h-12 w-full rounded-full border bg-background px-5 font-mono outline-none focus:ring-2 focus:ring-primary"/><Button onClick={finishConvert} className="min-h-12 rounded-full px-5">{complete.includes("convert") ? <Check/> : <Rocket/>}</Button></div></CardContent></Card>
          <Card className="rounded-[2rem] border border-border"><CardContent className="p-6 sm:p-8"><p className="font-mono text-xs uppercase tracking-wider text-primary">{t.math}</p><div className="mt-4 rounded-2xl bg-muted px-5 py-4 font-mono text-xl">1 km = 10³ m &nbsp;·&nbsp; 1 m = 10² cm</div><p className="mt-4 leading-7 text-muted-foreground">Darajali ko‘paytuvchilar katta va juda kichik miqdorlarni tez, aniq va universal yozish imkonini beradi.</p></CardContent></Card>
          <Card className="rounded-[2rem] border border-border"><CardContent className="p-6 sm:p-8"><p className="font-mono text-xs uppercase tracking-wider text-primary">{t.career}</p><h2 className="mt-2 text-2xl font-semibold">{t.careerName}</h2><p className="mt-3 leading-7 text-muted-foreground">{locale === "uz" ? "Kosmik apparat detali millimetr darajasida mos kelishi uchun muhandislar SI birliklari va kalibrlangan asboblarga tayanadi." : locale === "en" ? "Engineers rely on SI units and calibrated tools so every spacecraft part fits to the millimetre." : "Инженеры используют единицы СИ и калиброванные приборы, чтобы детали космического аппарата совпадали до миллиметра."}</p></CardContent></Card>
          <Card className="rounded-[2rem] border border-border"><CardContent className="p-6 sm:p-8"><p className="font-mono text-xs uppercase tracking-wider text-primary">{t.lab}</p><h2 className="mt-2 text-2xl font-semibold">{t.quiz}</h2><p className="mt-4">{t.quizQuestion}</p><div className="mt-4 flex flex-wrap gap-2">{["metre", "second", "kilogram"].map((choice) => <Button key={choice} variant={quiz === choice ? "default" : "outline"} onClick={() => finishQuiz(choice)} className="min-h-11 rounded-full">{choice}</Button>)}</div><h2 className="mt-8 text-2xl font-semibold">{t.problem}</h2><p className="mt-3">{t.problemQuestion}</p><div className="mt-4 flex gap-3"><input value={problem} onChange={(e) => setProblem(e.target.value)} inputMode="decimal" placeholder="m" className="min-h-12 w-full rounded-full border bg-background px-5 font-mono outline-none focus:ring-2 focus:ring-primary"/><Button onClick={finishProblem} className="min-h-12 rounded-full">{complete.includes("problem") ? <Check/> : <Crosshair/>}</Button></div></CardContent></Card>
          <div className="flex min-h-20 items-center justify-between rounded-[2rem] border border-primary/30 bg-primary/10 px-6"><span className="font-medium">{done ? t.complete : `${complete.length}/4`}</span>{done ? <Check className="size-6 text-primary"/> : <ChevronRight className="size-5 text-muted-foreground"/>}</div>
        </section>
      </div>
    </main>
  );
}
