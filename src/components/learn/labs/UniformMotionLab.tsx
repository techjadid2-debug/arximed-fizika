"use client";

import { useEffect, useRef, useState } from "react";
import { CheckCircle2, Gauge, Play, RotateCcw, Sparkles, Timer } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import type { Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

interface UniformMotionLabProps {
  locale?: Locale;
}

export function UniformMotionLab({ locale = "uz" }: UniformMotionLabProps) {
  const [speed, setSpeed] = useState<number>(10); // m/s
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const [distance, setDistance] = useState<number>(0);
  const [carX, setCarX] = useState<number>(5); // 0..90%
  const lastTimeRef = useRef<number | null>(null);

  // Speed conversions
  const speedKmh = Math.round(speed * 3.6);

  useEffect(() => {
    let animId: number;

    const loop = (time: number) => {
      if (lastTimeRef.current !== null && isPlaying && speed > 0) {
        const dt = Math.min((time - lastTimeRef.current) / 1000, 0.1);

        setElapsedTime((prev) => prev + dt);
        setDistance((prev) => prev + speed * dt);

        setCarX((prev) => {
          let next = prev + speed * dt * 4;
          if (next > 92) next = 5;
          return next;
        });
      }
      lastTimeRef.current = time;
      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, [isPlaying, speed]);

  const handleReset = () => {
    setElapsedTime(0);
    setDistance(0);
    setCarX(5);
    setSpeed(10);
  };

  const isChallengeDone = speed === 20;

  const t = {
    title:
      locale === "uz"
        ? "To‘g‘ri Chiziqli Tekis Harakat Simulyatori"
        : locale === "en"
          ? "Uniform Rectilinear Motion Simulator"
          : "Симулятор прямолинейного равномерного движения",
    desc:
      locale === "uz"
        ? "Tezlikni o‘zgartiring va masofa vaqtga qanday proporsional ortishini (s = vt) kuzating."
        : locale === "en"
          ? "Adjust speed and observe how distance increases linearly with time (s = vt)."
          : "Изменяйте скорость и наблюдайте, как путь пропорционален времени (s = vt).",
    speedLabel:
      locale === "uz" ? "Tezlik (v)" : locale === "en" ? "Speed (v)" : "Скорость (v)",
    distLabel:
      locale === "uz" ? "Bosib o‘tilgan yo‘l (s = vt)" : locale === "en" ? "Distance (s = vt)" : "Пройденный путь",
    timeLabel:
      locale === "uz" ? "O‘tgan vaqt (t)" : locale === "en" ? "Time (t)" : "Время (t)",
    challenge:
      locale === "uz"
        ? "Topshiriq: Mashina 5 sekundda 100 metr yurishi uchun tezlikni necha m/s ga sozlash kerak? (v = 100 / 5)"
        : locale === "en"
          ? "Challenge: What speed covers 100m in 5 seconds? (v = 100 / 5)"
          : "Задание: Какая скорость нужна, чтобы проехать 100м за 5 секунд? (v = 100 / 5)",
    challengeDone:
      locale === "uz"
        ? "To‘g‘ri! 20 m/s (72 km/soat) tezlikda mashina 5 sekundda roppa-rosa 100 m bosib o‘tadi!"
        : locale === "en"
          ? "Correct! At 20 m/s (72 km/h), the car covers exactly 100m in 5 seconds!"
          : "Верно! При 20 м/с (72 км/ч) машина проходит ровно 100м за 5 секунд!",
  };

  return (
    <Card className="overflow-hidden border-border bg-card shadow-sm">
      <CardContent className="p-5 sm:p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/80 pb-4">
          <div>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="gap-1 font-mono text-[10px] text-primary">
                <Gauge className="size-3" />
                Kinematika · Lab 03
              </Badge>
              {isChallengeDone && (
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  <Sparkles className="size-3" />
                  Topshiriq bajarildi!
                </span>
              )}
            </div>
            <h3 className="mt-1 text-lg font-bold sm:text-xl text-foreground">{t.title}</h3>
            <p className="mt-1 text-xs sm:text-sm text-muted-foreground">{t.desc}</p>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsPlaying((prev) => !prev)}
              className="h-8 gap-1.5 text-xs"
            >
              <Play className={cn("size-3.5", isPlaying && "text-emerald-500")} />
              {isPlaying ? (locale === "uz" ? "Pauza" : "Pause") : locale === "uz" ? "Start" : "Play"}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleReset}
              className="h-8 gap-1 text-xs text-muted-foreground"
              title="Qayta o‘rnatish"
            >
              <RotateCcw className="size-3.5" />
            </Button>
          </div>
        </div>

        {/* ── Yo'l va Mashina Animatsiyasi ───────────────────────────────── */}
        <div className="relative h-44 sm:h-48 w-full overflow-hidden rounded-xl border border-border bg-slate-900 select-none">
          {/* Yo'l cheti maysazor */}
          <div className="absolute top-0 inset-x-0 h-7 bg-emerald-950/80 border-b border-emerald-800/40 flex items-center justify-between px-4">
            <span className="font-mono text-[10px] text-emerald-400/80">0 m</span>
            <span className="font-mono text-[10px] text-emerald-400/80">50 m</span>
            <span className="font-mono text-[10px] text-emerald-400/80">100 m</span>
            <span className="font-mono text-[10px] text-emerald-400/80">150 m</span>
            <span className="font-mono text-[10px] text-emerald-400/80">200 m</span>
          </div>

          {/* Asfalt yo'l */}
          <div className="absolute inset-x-0 top-7 bottom-7 bg-zinc-800 flex items-center overflow-hidden">
            {/* Oq uzuq-uzuq chiziqlar */}
            <div className="w-full border-b-2 border-dashed border-zinc-400/40" />

            {/* Mashina obyekti */}
            <div
              className="absolute transition-transform duration-75"
              style={{
                left: `${carX}%`,
                transform: "translate(-50%, -50%)",
                top: "50%",
              }}
            >
              <svg width="68" height="34" viewBox="0 0 68 34" fill="none" className="drop-shadow-lg">
                {/* Kuzov */}
                <path
                  d="M6 22 C6 22, 10 12, 18 10 C26 8, 42 8, 50 12 C58 14, 62 20, 62 22 L64 24 C64 26, 62 27, 58 27 L10 27 C6 27, 4 26, 4 24 Z"
                  fill="#ef4444"
                />
                {/* Oynalar */}
                <path
                  d="M20 11 L46 11 L48 18 L18 18 Z"
                  fill="#38bdf8"
                  opacity="0.8"
                />
                {/* G'ildiraklar */}
                <circle cx="16" cy="26" r="6" fill="#18181b" stroke="#71717a" strokeWidth="2" />
                <circle cx="50" cy="26" r="6" fill="#18181b" stroke="#71717a" strokeWidth="2" />
                {/* Fara */}
                <rect x="60" y="19" width="4" height="4" rx="1" fill="#fef08a" />
              </svg>
            </div>
          </div>

          {/* Pastki chet */}
          <div className="absolute bottom-0 inset-x-0 h-7 bg-emerald-950/80 border-t border-emerald-800/40 flex items-center justify-between px-4">
            <span className="font-mono text-[10px] text-emerald-400/70">Tekis harakat: v = const</span>
            <span className="font-mono text-[10px] text-emerald-300 font-bold">s = {distance.toFixed(1)} m</span>
          </div>
        </div>

        {/* ── Boshqaruv Slayderi ─────────────────────────────────────────── */}
        <div className="space-y-3 rounded-xl border border-border/80 bg-muted/30 p-4">
          <div className="flex items-center justify-between text-xs sm:text-sm">
            <span className="font-medium text-foreground">{t.speedLabel}</span>
            <div className="flex items-center gap-2">
              <span className="font-mono text-base font-bold text-primary">{speed} m/s</span>
              <span className="rounded bg-primary/10 px-1.5 py-0.5 font-mono text-xs text-primary font-medium">
                {speedKmh} km/soat
              </span>
            </div>
          </div>
          <Slider
            value={[speed]}
            min={0}
            max={30}
            step={1}
            onValueChange={(val) => setSpeed(val[0])}
          />
          <div className="flex justify-between text-[10px] font-mono text-muted-foreground">
            <span>0 m/s (Tinch)</span>
            <span>10 m/s (36 km/h)</span>
            <span>20 m/s (72 km/h)</span>
            <span>30 m/s (108 km/h)</span>
          </div>
        </div>

        {/* ── Telemetriya Kartalari (3 ta Aniq Karta) ────────────────────── */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-border bg-card p-4">
            <div className="flex items-center gap-2 text-muted-foreground text-xs">
              <Gauge className="size-3.5" />
              <span>Tezlik (v)</span>
            </div>
            <p className="mt-1 font-mono text-2xl sm:text-3xl font-bold text-foreground">
              {speed} <span className="text-xs font-normal text-muted-foreground">m/s</span>
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card p-4">
            <div className="flex items-center gap-2 text-muted-foreground text-xs">
              <Timer className="size-3.5" />
              <span>{t.timeLabel}</span>
            </div>
            <p className="mt-1 font-mono text-2xl sm:text-3xl font-bold text-foreground">
              {elapsedTime.toFixed(1)} <span className="text-xs font-normal text-muted-foreground">s</span>
            </p>
          </div>

          <div className="rounded-xl border border-primary/30 bg-primary/5 p-4">
            <div className="flex items-center gap-2 text-primary text-xs font-medium">
              <Sparkles className="size-3.5" />
              <span>{t.distLabel}</span>
            </div>
            <p className="mt-1 font-mono text-2xl sm:text-3xl font-extrabold text-primary">
              {distance.toFixed(1)} <span className="text-xs font-normal text-muted-foreground">m</span>
            </p>
          </div>
        </div>

        {/* Topshiriq qismi */}
        <div
          className={cn(
            "rounded-xl border p-3.5 text-xs transition-colors",
            isChallengeDone
              ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-950 dark:text-emerald-200"
              : "border-border bg-muted/20 text-muted-foreground",
          )}
        >
          {isChallengeDone ? (
            <span className="flex items-center gap-1.5 font-medium text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 className="size-4" />
              {t.challengeDone}
            </span>
          ) : (
            <span>💡 {t.challenge}</span>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
