"use client";

import { useCallback, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle2, Maximize2, Minimize2, Sparkles } from "lucide-react";

import { MathContent } from "@/components/learn/MathContent";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { getLessonSlides } from "@/data/lessons";
import type { LessonSlide } from "@/data/lessons/ilk-qadam-01";
import type { Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

interface LessonSlideDeckProps {
  lessonNumber?: string;
  slides?: LessonSlide[];
  locale?: Locale;
  onComplete?: () => void;
}

export function LessonSlideDeck({
  lessonNumber = "01",
  slides: explicitSlides,
  locale = "uz",
  onComplete,
}: LessonSlideDeckProps) {
  const slides: LessonSlide[] = explicitSlides ?? getLessonSlides(lessonNumber, locale);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const currentSlide = slides[currentIndex];
  const progressPercent = ((currentIndex + 1) / slides.length) * 100;
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === slides.length - 1;

  const handleNext = useCallback(() => {
    if (!isLast) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      onComplete?.();
    }
  }, [isLast, onComplete]);

  const handlePrev = useCallback(() => {
    if (!isFirst) {
      setCurrentIndex((prev) => prev - 1);
    }
  }, [isFirst]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        handleNext();
      } else if (event.key === "ArrowLeft") {
        handlePrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev]);

  return (
    <Card
      className={cn(
        "overflow-hidden border-border bg-card transition-all duration-300 shadow-sm",
        isExpanded && "fixed inset-4 z-50 flex flex-col justify-between overflow-y-auto bg-background/95 backdrop-blur-xl md:inset-10",
      )}
    >
      {/* Top Slide Header */}
      <div className="flex items-center justify-between border-b border-border/80 bg-muted/30 px-5 py-3.5 sm:px-6">
        <div className="flex items-center gap-2.5">
          <span className="grid size-7 place-items-center rounded-md bg-primary/10 text-primary font-mono text-xs font-semibold">
            <BookOpen className="size-3.5" />
          </span>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
              {currentSlide.eyebrow}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="font-mono text-xs tabular-nums text-muted-foreground">
            {currentIndex + 1} / {slides.length}
          </span>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsExpanded((prev) => !prev)}
            className="size-8 rounded-md text-muted-foreground hover:text-foreground"
            title={isExpanded ? "Kichiklashtirish" : "Kattalashtirish"}
          >
            {isExpanded ? <Minimize2 className="size-4" /> : <Maximize2 className="size-4" />}
          </Button>
        </div>
      </div>

      {/* Progress Bar */}
      <Progress value={progressPercent} className="h-1 rounded-none bg-muted/60" />

      {/* Slide Body Content */}
      <CardContent className="flex flex-1 flex-col justify-between p-6 sm:p-8">
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2.5">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-foreground">
              {currentSlide.title}
            </h2>
            {currentSlide.badge && (
              <span className="rounded-md border border-primary/20 bg-primary/10 px-2.5 py-0.5 font-mono text-[11px] font-medium text-primary">
                {currentSlide.badge}
              </span>
            )}
          </div>

          <div className="mt-4 text-base leading-7 text-foreground/90 sm:text-lg sm:leading-8">
            <MathContent content={currentSlide.content} />
          </div>

          {currentSlide.highlight && (
            <div className="mt-5 flex items-start gap-3 rounded-xl border border-primary/20 bg-primary/5 p-4 text-sm font-medium text-primary">
              <Sparkles className="mt-0.5 size-4 shrink-0" />
              <span>{currentSlide.highlight}</span>
            </div>
          )}
        </div>

        {/* Slide Navigation Footer */}
        <div className="mt-8 flex items-center justify-between border-t border-border pt-5">
          <Button
            variant="outline"
            onClick={handlePrev}
            disabled={isFirst}
            className="min-h-11 rounded-md px-4 text-xs sm:text-sm"
          >
            <ArrowLeft className="mr-1 size-4" />
            {locale === "uz" ? "Oldingi" : locale === "en" ? "Previous" : "Назад"}
          </Button>

          {/* Dot Indicators */}
          <div className="hidden sm:flex items-center gap-1.5">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentIndex(index)}
                aria-label={`Slide ${index + 1}`}
                className={cn(
                  "size-2 rounded-full transition-all",
                  index === currentIndex
                    ? "w-6 bg-primary"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/60",
                )}
              />
            ))}
          </div>

          <Button
            onClick={handleNext}
            className={cn(
              "min-h-11 rounded-md px-5 text-xs sm:text-sm font-medium",
              isLast && "bg-emerald-600 hover:bg-emerald-700 text-white",
            )}
          >
            {isLast ? (
              <>
                <CheckCircle2 className="mr-1.5 size-4" />
                {locale === "uz" ? "Slaydlar tugadi" : locale === "en" ? "Finished" : "Завершено"}
              </>
            ) : (
              <>
                {locale === "uz" ? "Keyingi" : locale === "en" ? "Next" : "Далее"}
                <ArrowRight className="ml-1 size-4" />
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
