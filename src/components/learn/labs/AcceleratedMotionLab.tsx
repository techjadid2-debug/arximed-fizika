"use client";

import { useEffect, useRef, useState } from "react";
import { AlertTriangle, CheckCircle2, Flame, Gauge, Play, RotateCcw, ShieldAlert, Sparkles, Timer } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import type { Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

interface AcceleratedMotionLabProps {
  locale?: Locale;
}

export function AcceleratedMotionLab({ locale = "uz" }: AcceleratedMotionLabProps) {
  const [initialSpeed, setInitialSpeed] = useState<number>(20); // m/s (72 km/h)
  const [currentSpeed, setCurrentSpeed] = useState<number>(20);
  const [acceleration, setAcceleration] = useState<number>(4); // m/s^2
  const [mode, setMode] = useState<"idle" | "accelerating" | "braking" | "stopped">("idle");
  const [distance, setDistance] = useState<number>(0);
  const [carX, setCarX] = useState<number>(10); // 0..90%
  const lastTimeRef = useRef<number | null>(null);

  // Braking distance calculation: s = v^2 / (2a)
  const theoreticalBrakeDist = (initialSpeed * initialSpeed) / (2 * acceleration);

  useEffect(() => {
    let animId: number;

    const loop = (time: number) => {
      if (lastTimeRef.current !== null) {
        const dt = Math.min((time - lastTimeRef.current) / 1000, 0.1);

        if (mode === "accelerating") {
          setCurrentSpeed((prev) => {
            const next = prev + acceleration * dt;
            if (next >= 45) {
              setMode("idle");
              return 45;
            }
            return next;
          });
          setDistance((prev) => prev + currentSpeed * dt);
          setCarX((prev) => (prev + currentSpeed * dt * 2 > 90 ? 10 : prev + currentSpeed * dt * 2));
        } else if (mode === "braking") {
          setCurrentSpeed((prev) => {
            const next = prev - acceleration * dt;
            if (next <= 0) {
              setMode("stopped");
              return 0;
            }
            return next;
          });
          setDistance((prev) => prev + currentSpeed * dt);
          setCarX((prev) => Math.min(prev + currentSpeed * dt * 2, 88));
        }
      }
      lastTimeRef.current = time;
      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, [mode, currentSpeed, acceleration]);

  const handleStartBrake = () => {
    setCurrentSpeed(initialSpeed);
    setDistance(0);
    setCarX(10);
    setMode("braking");
  };

  const handleStartAccel = () => {
    setCurrentSpeed(initialSpeed);
    setDistance(0);
    setCarX(10);
    setMode("accelerating");
  };

  const handleReset = () => {
    setMode("idle");
    setCurrentSpeed(initialSpeed);
    setDistance(0);
    setCarX(10);
  };

  const t = {
    title:
      locale === "uz"
        ? "Tezlanish va Tormoz Yo‘li Tajribasi"
        : locale === "en"
          ? "Acceleration & Braking Distance Lab"
          : "Лаборатория ускорения и тормозного пути",
    desc:
      locale === "uz"
        ? "Boshlang‘ich tezlikni o‘zgartiring va tormoz bosing. Tezlik 2 marta oshganda tormoz yo‘li 4 marta uzayishini ko‘ring."
        : locale === "en"
          ? "Adjust initial speed and hit the brakes. Notice how doubling speed quadruples the stopping distance."
          : "Изменяйте скорость и тормозите. Убедитесь, что удвоение скорости учетверяет тормозной путь.",
    speedLabel:
      locale === "uz" ? "Boshlang‘ich tezlik (v₀)" : locale === "en" ? "Initial speed (v₀)" : "Начальная скорость",
    accelLabel:
      locale === "uz" ? "Tezlanish (a)" : locale === "en" ? "Acceleration (a)" : "Ускорение (a)",
    brakeBtn:
      locale === "uz" ? "Tormoz berish 🛑" : locale === "en" ? "Hit Brakes 🛑" : "Тормоз 🛑",
    gasBtn:
      locale === "uz" ? "Gaz bosish 🚀" : locale === "en" ? "Accelerate 🚀" : "Газ 🚀",
    stoppingDist:
      locale === "uz" ? "To‘xtash masofasi:" : locale === "en" ? "Stopping distance:" : "Тормозной путь:",
    formulaNote:
      locale === "uz"
        ? "Formula: s = v₀² / (2a). Kvadratik proporsionallik!"
        : locale === "en"
          ? "Formula: s = v₀² / (2a). Quadratic proportionality!"
          : "Формула: s = v₀² / (2a). Квадратичная зависимость!",
  };

  return (
    <Card className="overflow-hidden border-border bg-card shadow-sm">
      <CardContent className="p-5 sm:p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/80 pb-4">
          <div>
            <Badge variant="outline" className="gap-1 font-mono text-[10px] text-primary">
              <Flame className="size-3" />
              Kinematika · Lab 04
            </Badge>
            <h3 className="mt-1 text-lg font-bold sm:text-xl text-foreground">{t.title}</h3>
            <p className="mt-1 text-xs sm:text-sm text-muted-foreground">{t.desc}</p>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleReset}
              className="h-8 gap-1 text-xs text-muted-foreground"
            >
              <RotateCcw className="size-3.5" />
              Reset
            </Button>
          </div>
        </div>

        {/* ── Yo'l va Mashina Animatsiyasi ───────────────────────────────── */}
        <div className="relative h-44 sm:h-48 w-full overflow-hidden rounded-xl border border-border bg-slate-900 select-none">
          {/* Yo'l cheti */}
          <div className="absolute top-0 inset-x-0 h-6 bg-zinc-950 border-b border-zinc-800 flex items-center justify-between px-4">
            <span className="font-mono text-[10px] text-zinc-400">START (x = 0)</span>
            <span className="font-mono text-[10px] text-zinc-400">
              {mode === "braking" ? "⚠️ Tormozlanish zonasi" : "Tekis o‘zgaruvchan harakat"}
            </span>
          </div>

          {/* Asfalt yo'l */}
          <div className="absolute inset-x-0 top-6 bottom-6 bg-zinc-800 flex items-center overflow-hidden">
            {/* Tormoz izlari (agar tormoz bo'lsa) */}
            {mode === "braking" && (
              <div
                className="absolute h-1 bg-zinc-950/80 rounded-full"
                style={{
                  left: "10%",
                  width: `${Math.min(carX - 10, 78)}%`,
                  top: "60%",
                }}
              />
            )}

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
                <path
                  d="M6 22 C6 22, 10 12, 18 10 C26 8, 42 8, 50 12 C58 14, 62 20, 62 22 L64 24 C64 26, 62 27, 58 27 L10 27 C6 27, 4 26, 4 24 Z"
                  fill={mode === "braking" ? "#f97316" : "#3b82f6"}
                />
                <path d="M20 11 L46 11 L48 18 L18 18 Z" fill="#38bdf8" opacity="0.8" />
                <circle cx="16" cy="26" r="6" fill="#18181b" stroke="#71717a" strokeWidth="2" />
                <circle cx="50" cy="26" r="6" fill="#18181b" stroke="#71717a" strokeWidth="2" />
                {/* Tormoz chiroqlari */}
                <rect
                  x="4"
                  y="20"
                  width="3"
                  height="4"
                  rx="1"
                  fill={mode === "braking" ? "#ef4444" : "#7f1d1d"}
                />
              </svg>
            </div>
          </div>

          {/* Pastki panel */}
          <div className="absolute bottom-0 inset-x-0 h-6 bg-zinc-950 border-t border-zinc-800 flex items-center justify-between px-4">
            <span className="font-mono text-[10px] text-zinc-400">
              v = {currentSpeed.toFixed(1)} m/s ({(currentSpeed * 3.6).toFixed(0)} km/h)
            </span>
            <span className="font-mono text-[10px] text-amber-400 font-bold">
              s = {distance.toFixed(1)} m
            </span>
          </div>
        </div>

        {/* ── Boshqaruv Tugmalari & Slayderlar ────────────────────────────── */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-2 rounded-xl border border-border/80 bg-muted/30 p-4">
            <div className="flex items-center justify-between text-xs sm:text-sm">
              <span className="font-medium text-foreground">{t.speedLabel}</span>
              <span className="font-mono font-bold text-primary">
                {initialSpeed} m/s ({(initialSpeed * 3.6).toFixed(0)} km/h)
              </span>
            </div>
            <Slider
              value={[initialSpeed]}
              min={10}
              max={40}
              step={5}
              disabled={mode !== "idle"}
              onValueChange={(val) => {
                setInitialSpeed(val[0]);
                setCurrentSpeed(val[0]);
              }}
            />
            <div className="flex justify-between text-[10px] font-mono text-muted-foreground">
              <span>10 m/s (36 km/h)</span>
              <span>20 m/s (72 km/h)</span>
              <span>40 m/s (144 km/h)</span>
            </div>
          </div>

          <div className="space-y-2 rounded-xl border border-border/80 bg-muted/30 p-4">
            <div className="flex items-center justify-between text-xs sm:text-sm">
              <span className="font-medium text-foreground">{t.accelLabel}</span>
              <span className="font-mono font-bold text-amber-500">{acceleration} m/s²</span>
            </div>
            <Slider
              value={[acceleration]}
              min={2}
              max={8}
              step={1}
              disabled={mode !== "idle"}
              onValueChange={(val) => setAcceleration(val[0])}
            />
            <div className="flex justify-between text-[10px] font-mono text-muted-foreground">
              <span>2 m/s² (Yumshoq)</span>
              <span>4 m/s² (Oddiy)</span>
              <span>8 m/s² (Keskin)</span>
            </div>
          </div>
        </div>

        {/* Harakat Tugmalari */}
        <div className="flex flex-wrap items-center gap-3">
          <Button
            onClick={handleStartBrake}
            disabled={mode === "braking"}
            className="flex-1 min-h-11 bg-rose-600 hover:bg-rose-700 text-white font-medium"
          >
            {t.brakeBtn}
          </Button>
          <Button
            onClick={handleStartAccel}
            disabled={mode === "accelerating"}
            variant="outline"
            className="flex-1 min-h-11 font-medium"
          >
            {t.gasBtn}
          </Button>
        </div>

        {/* ── Natija Kartasi ─────────────────────────────────────────────── */}
        <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 sm:p-5">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <p className="text-xs font-medium text-muted-foreground">{t.stoppingDist}</p>
              <p className="mt-1 font-mono text-3xl font-extrabold text-foreground">
                {theoreticalBrakeDist.toFixed(1)}{" "}
                <span className="text-base font-normal text-muted-foreground">metr</span>
              </p>
            </div>
            <div className="text-xs text-muted-foreground space-y-1">
              <p className="font-mono">{t.formulaNote}</p>
              <p className="text-emerald-600 dark:text-emerald-400 font-medium">
                💡 10 m/s da: {((10 * 10) / (2 * acceleration)).toFixed(1)} m ➔ 20 m/s da:{" "}
                {((20 * 20) / (2 * acceleration)).toFixed(1)} m (4 marta uzunroq!)
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
