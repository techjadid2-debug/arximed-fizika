"use client";

import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Copy,
  GraduationCap,
  Lightbulb,
  PenTool,
  Printer,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { MathContent } from "@/components/learn/MathContent";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { LessonCheatsheet } from "@/data/cheatsheets/ilk-qadam";
import type { Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

interface LessonCheatsheetViewProps {
  cheatsheet: LessonCheatsheet;
  locale: Locale;
  courseSlug: string;
  totalLessons?: number;
}

export function LessonCheatsheetView({
  cheatsheet,
  locale,
  courseSlug,
  totalLessons = 78,
}: LessonCheatsheetViewProps) {
  const [copied, setCopied] = useState(false);

  const currentNum = parseInt(cheatsheet.number, 10);
  const prevNum = currentNum > 1 ? String(currentNum - 1).padStart(2, "0") : null;
  const nextNum = currentNum < totalLessons ? String(currentNum + 1).padStart(2, "0") : null;

  const handleCopySummary = async () => {
    const text = `# ${cheatsheet.number}. ${cheatsheet.title}\nSavol: ${cheatsheet.hook}\nFormulalar:\n${cheatsheet.keyFormulas.map((f) => `- ${f.name}: ${f.latex}`).join("\n")}`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  return (
    <div className="mx-auto w-full max-w-5xl px-3 py-6 sm:px-6 lg:px-8 print:p-0">
      {/* ── Boshqaruv & Navigatsiya ──────────────────────────────────────── */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-3 print:hidden">
        <Link
          href={`/${locale}/courses/${courseSlug}`}
          className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="size-3.5" />
          <span>Yo‘l xaritasi</span>
        </Link>

        <div className="flex items-center gap-1.5">
          {prevNum && (
            <Button variant="ghost" size="sm" asChild className="h-7 px-2 text-xs">
              <Link href={`/${locale}/learn/${courseSlug}/${prevNum}`}>
                <ChevronLeft className="size-3" />
                <span>{prevNum}</span>
              </Link>
            </Button>
          )}

          <Badge variant="outline" className="font-mono text-xs">
            {cheatsheet.number} / {totalLessons}
          </Badge>

          {nextNum && (
            <Button variant="ghost" size="sm" asChild className="h-7 px-2 text-xs">
              <Link href={`/${locale}/learn/${courseSlug}/${nextNum}`}>
                <span>{nextNum}</span>
                <ChevronRight className="size-3" />
              </Link>
            </Button>
          )}

          <Button
            variant="outline"
            size="sm"
            onClick={handleCopySummary}
            className="h-7 px-2 text-xs gap-1"
          >
            {copied ? (
              <CheckCircle2 className="size-3 text-emerald-500" />
            ) : (
              <Copy className="size-3" />
            )}
            <span className="hidden sm:inline">{copied ? "Nusxalandi" : "Nusxalash"}</span>
          </Button>

          <Button
            variant="ghost"
            size="sm"
            onClick={() => window.print()}
            className="h-7 px-2 text-xs"
          >
            <Printer className="size-3.5" />
          </Button>
        </div>
      </div>

      {/* ── Sarlavha & Metalar ───────────────────────────────────────────── */}
      <div className="mt-4 flex flex-wrap items-baseline gap-2">
        <span className="font-mono text-xs font-bold text-primary">
          {cheatsheet.number}-DARS
        </span>
        <span className="text-xs text-muted-foreground">·</span>
        <span className="text-xs font-medium text-muted-foreground">
          {cheatsheet.quarterTitle}
        </span>
      </div>

      <h1 className="mt-1 text-xl font-bold tracking-tight text-foreground sm:text-2xl">
        {cheatsheet.title}
      </h1>

      {/* ── 01. Hook (Darsni boshlovchi bitta savol) ─────────────────────── */}
      <div className="mt-4 rounded-lg border border-amber-500/30 bg-amber-500/5 p-3.5 dark:bg-amber-500/10">
        <div className="flex items-start gap-2.5">
          <Lightbulb className="mt-0.5 size-4 shrink-0 text-amber-600 dark:text-amber-400" />
          <div className="text-xs sm:text-sm font-medium leading-snug text-foreground">
            <span className="font-bold text-amber-700 dark:text-amber-400">Dars savoli: </span>
            {cheatsheet.hook}
          </div>
        </div>
      </div>

      {/* ── Asosiy Grid: Chapda Reja & Masala, O‘ngda Formulalar & Xatolar ── */}
      <div className="mt-5 grid gap-5 lg:grid-cols-12">
        {/* Chap blok: 7 ustun */}
        <div className="space-y-5 lg:col-span-7">
          {/* Dars Rejasi */}
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="flex items-center gap-1.5 border-b border-border pb-2.5 text-xs font-bold uppercase tracking-wider text-muted-foreground">
              <BookOpen className="size-3.5 text-primary" />
              <span>Dars qadamlari (O‘rgatish tartibi)</span>
            </div>

            <div className="mt-3 divide-y divide-border/60">
              {cheatsheet.teachingPlan.map((step) => (
                <div key={step.step} className="py-2.5 first:pt-0 last:pb-0">
                  <div className="flex items-start gap-2">
                    <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 font-mono text-[11px] font-bold text-primary">
                      {step.step}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-foreground">
                        {step.title}
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                        {step.explanation}
                      </p>

                      {step.boardTip && (
                        <div className="mt-1.5 flex items-start gap-1.5 rounded bg-muted/60 px-2 py-1 text-[11px] font-mono text-foreground/90">
                          <PenTool className="mt-0.5 size-3 shrink-0 text-emerald-600 dark:text-emerald-400" />
                          <div className="truncate">
                            <span className="text-emerald-600 dark:text-emerald-400 font-sans font-medium">Doskaga: </span>
                            <MathContent content={step.boardTip} inline className="text-[11px]" />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Namunaviy Masala */}
          {cheatsheet.workedExamples && cheatsheet.workedExamples.length > 0 && (
            <div className="rounded-lg border border-border bg-card p-4">
              <div className="flex items-center gap-1.5 border-b border-border pb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                <Sparkles className="size-3.5 text-primary" />
                <span>Doskada yechiladigan masala</span>
              </div>

              <div className="mt-3 space-y-3">
                {cheatsheet.workedExamples.map((ex, idx) => (
                  <div key={idx} className="rounded-md border border-border/70 p-3 text-xs">
                    <p className="font-medium text-foreground">
                      <MathContent content={ex.problem} inline />
                    </p>
                    <div className="mt-2 rounded bg-muted/50 p-2 text-muted-foreground text-[11px]">
                      <span className="font-semibold text-foreground">Yechimi: </span>
                      <MathContent content={ex.solution} inline />
                    </div>
                    <p className="mt-1.5 text-right font-mono font-bold text-emerald-600 dark:text-emerald-400">
                      Javob: {ex.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* O‘ng blok: 5 ustun */}
        <div className="space-y-5 lg:col-span-5">
          {/* Asosiy Formulalar */}
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="flex items-center gap-1.5 border-b border-border pb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
              <GraduationCap className="size-3.5 text-primary" />
              <span>Asosiy Formulalar</span>
            </div>

            <div className="mt-3 space-y-2.5">
              {cheatsheet.keyFormulas.map((f, i) => (
                <div key={i} className="rounded-md border border-border/60 bg-muted/30 p-2.5">
                  <div className="flex items-baseline justify-between gap-1">
                    <span className="text-[11px] font-medium text-foreground">{f.name}</span>
                    {f.unit && (
                      <span className="font-mono text-[10px] text-muted-foreground">[{f.unit}]</span>
                    )}
                  </div>
                  <div className="mt-1 overflow-x-auto py-1 text-center font-semibold">
                    <MathContent content={`$$${f.latex}$$`} />
                  </div>
                  {f.description && (
                    <p className="text-[10px] text-muted-foreground leading-tight">
                      {f.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Adashma! (Common Pitfalls) */}
          {cheatsheet.commonPitfalls && cheatsheet.commonPitfalls.length > 0 && (
            <div className="rounded-lg border border-rose-500/30 bg-rose-500/5 p-4 dark:bg-rose-500/10">
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-rose-700 dark:text-rose-400">
                <AlertTriangle className="size-3.5" />
                <span>Adashma! (Katta xatolar)</span>
              </div>
              <ul className="mt-2.5 space-y-1.5">
                {cheatsheet.commonPitfalls.map((pitfall, i) => (
                  <li key={i} className="flex items-start gap-1.5 text-xs text-foreground/90 leading-snug">
                    <span className="font-bold text-rose-500 shrink-0">⚠️</span>
                    <span>{pitfall}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Hayotda qayerda? */}
          {cheatsheet.realWorldApplications && cheatsheet.realWorldApplications.length > 0 && (
            <div className="rounded-lg border border-border bg-card p-3.5">
              <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                Hayotda qayerda ishlatiladi?
              </p>
              <ul className="mt-2 space-y-1 text-xs text-muted-foreground">
                {cheatsheet.realWorldApplications.map((app, i) => (
                  <li key={i}>🚀 {app}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* ── Pastki Tezkor Tugmalar ───────────────────────────────────────── */}
      <div className="mt-8 flex items-center justify-between border-t border-border pt-4 print:hidden">
        {prevNum ? (
          <Button variant="outline" size="sm" asChild className="gap-1.5 text-xs">
            <Link href={`/${locale}/learn/${courseSlug}/${prevNum}`}>
              <ArrowLeft className="size-3.5" />
              Oldingi: #{prevNum}
            </Link>
          </Button>
        ) : <div />}

        <Button variant="ghost" size="sm" asChild className="text-xs text-muted-foreground">
          <Link href={`/${locale}/courses/${courseSlug}`}>
            Yo‘l xaritasi
          </Link>
        </Button>

        {nextNum ? (
          <Button variant="default" size="sm" asChild className="gap-1.5 text-xs">
            <Link href={`/${locale}/learn/${courseSlug}/${nextNum}`}>
              Keyingi: #{nextNum}
              <ArrowRight className="size-3.5" />
            </Link>
          </Button>
        ) : <div />}
      </div>
    </div>
  );
}
