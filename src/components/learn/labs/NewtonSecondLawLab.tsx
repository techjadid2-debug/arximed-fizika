"use client";

import { useEffect, useRef, useState } from "react";
import { CheckCircle2, Gauge, Pause, Play, RotateCcw, Sparkles, Zap } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import type { Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

interface NewtonSecondLawLabProps {
  locale?: Locale;
}

export function NewtonSecondLawLab({ locale = "uz" }: NewtonSecondLawLabProps) {
  const [force, setForce] = useState<number>(20); // N
  const [mass, setMass] = useState<number>(4); // kg
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const [cartVelocity, setCartVelocity] = useState<number>(0);
  const [cartPosition, setCartPosition] = useState<number>(5); // percent 5..90
  const lastTimeRef = useRef<number | null>(null);

  // a = F / m
  const acceleration = force / mass;

  useEffect(() => {
    let animId: number;

    const loop = (time: number) => {
      if (lastTimeRef.current !== null && isPlaying) {
        const dt = Math.min((time - lastTimeRef.current) / 1000, 0.1);

        setElapsedTime((t) => t + dt);
        setCartVelocity((v) => v + acceleration * dt);

        setCartPosition((pos) => {
          let next = pos + (cartVelocity + 0.5 * acceleration * dt) * dt * 8;
          if (next > 88) {
            next = 5;
            setCartVelocity(0);
          }
          return next;
        });
      }
      lastTimeRef.current = time;
      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, [isPlaying, acceleration, cartVelocity]);

  const handleReset = () => {
    setElapsedTime(0);
    setCartVelocity(0);
    setCartPosition(5);
    setForce(20);
    setMass(4);
  };

  const isChallengeDone = Math.abs(acceleration - 5) < 0.05;

  const t = {
    uz: {
      badge: "Virtual Tajriba",
      title: "Nyutonning 2-Qonuni Simulyatori: a = F / m",
      challenge: "Topshiriq: Kuch va massani shunday tanlangki, tezlanish roppa-rosa 5 m/s² bo‘lsin!",
      challengeDone: "Barakalla! a = F / m = 5 m/s² ga erishildi!",
      force: "Kuch (F):",
      mass: "Massa (m):",
      acc: "Tezlanish (a):",
      speed: "Joriy tezlik (v):",
      time: "Vaqt (t):",
      play: "Davom etish",
      pause: "To‘xtatish",
      reset: "Qayta o‘rnatish",
      formulaTitle: "Jonli Formula:",
      formulaNote: "Kuch oshsa tezlanish ortadi, massa oshsa tezlanish kamayadi.",
    },
    en: {
      badge: "Virtual Lab",
      title: "Newton's 2nd Law Simulator: a = F / m",
      challenge: "Mission: Adjust Force and Mass so acceleration is exactly 5 m/s²!",
      challengeDone: "Awesome! a = F / m = 5 m/s² achieved!",
      force: "Force (F):",
      mass: "Mass (m):",
      acc: "Acceleration (a):",
      speed: "Velocity (v):",
      time: "Time (t):",
      play: "Resume",
      pause: "Pause",
      reset: "Reset",
      formulaTitle: "Live Formula:",
      formulaNote: "Greater force yields higher acceleration; greater mass dampens it.",
    },
    ru: {
      badge: "Виртуальная лаборатория",
      title: "Симулятор 2-го закона Ньютона: a = F / m",
      challenge: "Задание: Настройте силу и массу так, чтобы ускорение было ровно 5 м/с²!",
      challengeDone: "Отлично! a = F / m = 5 м/с² достигнуто!",
      force: "Сила (F):",
      mass: "Масса (m):",
      acc: "Ускорение (a):",
      speed: "Скорость (v):",
      time: "Время (t):",
      play: "Продолжить",
      pause: "Пауза",
      reset: "Сброс",
      formulaTitle: "Живая формула:",
      formulaNote: "Больше сила — больше ускорение; больше масса — меньше ускорение.",
    },
  }[locale];

  return (
    <Card className="w-full overflow-hidden border-border bg-card">
      <CardContent className="p-4 sm:p-6">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/60 pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="gap-1.5 font-mono text-[10px] uppercase text-primary">
                <Zap className="size-3" />
                {t.badge}
              </Badge>
              <span className="font-mono text-xs text-muted-foreground">F = m · a</span>
            </div>
            <h3 className="text-lg font-semibold tracking-tight sm:text-xl">{t.title}</h3>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsPlaying(!isPlaying)}
              className="gap-1.5 text-xs"
            >
              {isPlaying ? <Pause className="size-3.5" /> : <Play className="size-3.5" />}
              {isPlaying ? t.pause : t.play}
            </Button>
            <Button variant="ghost" size="sm" onClick={handleReset} className="size-8 p-0">
              <RotateCcw className="size-3.5" />
            </Button>
          </div>
        </div>

        {/* Challenge Banner */}
        <div
          className={cn(
            "mt-4 flex items-center gap-2.5 rounded-lg border p-3 text-xs sm:text-sm transition-colors",
            isChallengeDone
              ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
              : "border-primary/20 bg-primary/5 text-foreground/80",
          )}
        >
          {isChallengeDone ? (
            <CheckCircle2 className="size-4 shrink-0 text-emerald-500" />
          ) : (
            <Sparkles className="size-4 shrink-0 text-primary" />
          )}
          <span className="font-medium">{isChallengeDone ? t.challengeDone : t.challenge}</span>
        </div>

        {/* 2D Canvas Track Animation */}
        <div className="relative mt-5 h-44 w-full overflow-hidden rounded-xl border border-border bg-gradient-to-b from-muted/30 to-muted/80">
          {/* Track rail and tick marks */}
          <div className="absolute inset-x-0 bottom-8 h-2 bg-border">
            <div className="flex justify-between px-4 text-[9px] font-mono text-muted-foreground pt-3">
              <span>0 m</span>
              <span>10 m</span>
              <span>20 m</span>
              <span>30 m</span>
              <span>40 m</span>
              <span>50 m</span>
            </div>
          </div>

          {/* Cart with mass and wheels */}
          <div
            className="absolute bottom-8 transition-all duration-75 ease-linear"
            style={{ left: `${cartPosition}%`, transform: "translateX(-50%)" }}
          >
            {/* Force vector arrow */}
            <div className="absolute -top-7 left-full flex items-center gap-1">
              <div
                className="h-1 bg-primary rounded-full transition-all"
                style={{ width: `${Math.min(force * 1.5, 60)}px` }}
              />
              <span className="text-[10px] font-mono font-bold text-primary whitespace-nowrap">
                F={force}N →
              </span>
            </div>

            {/* Cart Body */}
            <div
              className={cn(
                "relative flex items-center justify-center rounded-md border-2 border-primary/60 bg-primary/20 text-center font-mono text-xs font-bold text-primary shadow-md transition-all",
                mass > 6 ? "h-14 w-20" : mass > 3 ? "h-12 w-16" : "h-10 w-14",
              )}
            >
              <span>{mass} kg</span>
            </div>

            {/* Wheels */}
            <div className="flex justify-between px-1 -mt-1.5">
              <div className="size-3.5 rounded-full border border-foreground/40 bg-foreground/20 animate-spin" />
              <div className="size-3.5 rounded-full border border-foreground/40 bg-foreground/20 animate-spin" />
            </div>
          </div>

          {/* Top telemetry badges */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-2">
            <Badge variant="secondary" className="font-mono text-[11px]">
              {t.acc} <span className="font-bold text-primary ml-1">{acceleration.toFixed(2)} m/s²</span>
            </Badge>
            <Badge variant="secondary" className="font-mono text-[11px]">
              {t.speed} <span className="font-bold text-foreground ml-1">{cartVelocity.toFixed(1)} m/s</span>
            </Badge>
            <Badge variant="secondary" className="font-mono text-[11px]">
              {t.time} <span className="text-muted-foreground ml-1">{elapsedTime.toFixed(1)} s</span>
            </Badge>
          </div>
        </div>

        {/* Live Calculation Display */}
        <div className="mt-4 rounded-lg border border-border/80 bg-muted/30 p-3 text-center">
          <div className="text-xs text-muted-foreground font-mono">{t.formulaTitle}</div>
          <div className="mt-1 font-mono text-base sm:text-lg font-bold text-foreground">
            a = <span className="text-primary">{force} N</span> ÷{" "}
            <span className="text-primary">{mass} kg</span> ={" "}
            <span className="text-emerald-500 font-extrabold">{acceleration.toFixed(2)} m/s²</span>
          </div>
          <div className="mt-1 text-[11px] text-muted-foreground">{t.formulaNote}</div>
        </div>

        {/* Sliders Control Panel */}
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          {/* Force Slider */}
          <div className="space-y-2 rounded-xl border border-border p-4 bg-card">
            <div className="flex items-center justify-between text-xs sm:text-sm">
              <span className="font-medium text-foreground flex items-center gap-1.5">
                <Gauge className="size-4 text-primary" />
                {t.force}
              </span>
              <span className="font-mono font-bold text-primary">{force} N</span>
            </div>
            <Slider
              value={[force]}
              min={2}
              max={50}
              step={1}
              onValueChange={(vals) => setForce(vals[0])}
            />
            <div className="flex justify-between text-[10px] font-mono text-muted-foreground">
              <span>2 N (Kuchsiz)</span>
              <span>50 N (Kuchli)</span>
            </div>
          </div>

          {/* Mass Slider */}
          <div className="space-y-2 rounded-xl border border-border p-4 bg-card">
            <div className="flex items-center justify-between text-xs sm:text-sm">
              <span className="font-medium text-foreground flex items-center gap-1.5">
                <Zap className="size-4 text-emerald-500" />
                {t.mass}
              </span>
              <span className="font-mono font-bold text-emerald-500">{mass} kg</span>
            </div>
            <Slider
              value={[mass]}
              min={1}
              max={10}
              step={0.5}
              onValueChange={(vals) => setMass(vals[0])}
            />
            <div className="flex justify-between text-[10px] font-mono text-muted-foreground">
              <span>1 kg (Yengil)</span>
              <span>10 kg (Og‘ir)</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
