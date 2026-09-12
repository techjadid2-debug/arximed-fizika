"use client";

import { useEffect, useRef, useState } from "react";
import { CheckCircle2, Flame, Layers, Pause, Play, RotateCcw, ShieldAlert, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import type { Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

interface FrictionLabProps {
  locale?: Locale;
}

interface Material {
  id: string;
  nameUz: string;
  nameEn: string;
  nameRu: string;
  mu: number;
  colorClass: string;
}

const MATERIALS: Material[] = [
  { id: "ice", nameUz: "Muz ustida", nameEn: "Ice", nameRu: "На льду", mu: 0.05, colorClass: "bg-sky-500/20 border-sky-400 text-sky-500" },
  { id: "wood", nameUz: "Yog‘och sirt", nameEn: "Wood", nameRu: "Дерево", mu: 0.3, colorClass: "bg-amber-500/20 border-amber-400 text-amber-500" },
  { id: "steel", nameUz: "Po‘lat sirt", nameEn: "Steel", nameRu: "Сталь", mu: 0.18, colorClass: "bg-slate-500/20 border-slate-400 text-slate-400" },
  { id: "rubber", nameUz: "Rezina / Asfalt", nameEn: "Rubber / Asphalt", nameRu: "Резина / Асфальт", mu: 0.7, colorClass: "bg-emerald-500/20 border-emerald-400 text-emerald-500" },
];

export function FrictionLab({ locale = "uz" }: FrictionLabProps) {
  const [selectedMat, setSelectedMat] = useState<Material>(MATERIALS[1]); // Wood default (0.3)
  const [mass, setMass] = useState<number>(4); // kg
  const [pullForce, setPullForce] = useState<number>(15); // N
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [blockPos, setBlockPos] = useState<number>(10); // %
  const [velocity, setVelocity] = useState<number>(0);
  const lastTimeRef = useRef<number | null>(null);

  // g = 10 m/s^2
  const normalForce = mass * 10;
  const maxFriction = selectedMat.mu * normalForce;
  const isMoving = pullForce > maxFriction;
  const netForce = isMoving ? pullForce - maxFriction : 0;
  const acceleration = isMoving ? netForce / mass : 0;

  useEffect(() => {
    let animId: number;

    const loop = (time: number) => {
      if (lastTimeRef.current !== null && isPlaying) {
        const dt = Math.min((time - lastTimeRef.current) / 1000, 0.1);

        if (isMoving) {
          setVelocity((v) => v + acceleration * dt);
          setBlockPos((pos) => {
            let next = pos + (velocity + 0.5 * acceleration * dt) * dt * 7;
            if (next > 86) {
              next = 10;
              setVelocity(0);
            }
            return next;
          });
        } else {
          setVelocity(0);
        }
      }
      lastTimeRef.current = time;
      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, [isPlaying, isMoving, acceleration, velocity]);

  const handleReset = () => {
    setBlockPos(10);
    setVelocity(0);
    setPullForce(15);
    setMass(4);
    setSelectedMat(MATERIALS[1]);
  };

  const isChallengeDone = isMoving && selectedMat.id === "wood";

  const t = {
    uz: {
      badge: "Virtual Tajriba",
      title: "Ishqalanish Kuchi Simulyatori: F_ishq = μ · mg",
      challenge: "Topshiriq: Tortish kuchini shunday oshiringki, yog‘och blok joyidan siljib harakatlansin!",
      challengeDone: "Barakalla! Tortish kuchi maksimal ishqalanishni yengdi!",
      material: "Sirt materiali (μ):",
      mass: "Jism massasi (m):",
      pull: "Tortish kuchi (F_tort):",
      fric: "Ishqalanish kuchi:",
      net: "Natijaviy kuch:",
      statusAtRest: "Tinch turibdi (F_tort ≤ F_ishq)",
      statusMoving: "Sirpanmoqda (F_tort > F_ishq)",
      play: "Davom etish",
      pause: "To‘xtatish",
      reset: "Qayta o‘rnatish",
    },
    en: {
      badge: "Virtual Lab",
      title: "Friction Simulator: F_fric = μ · mg",
      challenge: "Mission: Increase pulling force above max friction to get the wooden block sliding!",
      challengeDone: "Bravo! Applied force overcame maximum friction!",
      material: "Surface Material (μ):",
      mass: "Mass (m):",
      pull: "Pulling Force (F_pull):",
      fric: "Friction Force:",
      net: "Net Force:",
      statusAtRest: "At Rest (F_pull ≤ F_fric)",
      statusMoving: "Sliding (F_pull > F_fric)",
      play: "Resume",
      pause: "Pause",
      reset: "Reset",
    },
    ru: {
      badge: "Виртуальная лаборатория",
      title: "Симулятор силы трения: F_тр = μ · mg",
      challenge: "Задание: Увеличьте силу тяги, чтобы преодолеть трение и сдвинуть брусок!",
      challengeDone: "Отлично! Сила тяги преодолела силу трения покоя!",
      material: "Материал поверхности (μ):",
      mass: "Масса (m):",
      pull: "Сила тяги (F_тяги):",
      fric: "Сила трения:",
      net: "Равнодействующая:",
      statusAtRest: "В покое (F_тяги ≤ F_тр)",
      statusMoving: "Скользит (F_тяги > F_тр)",
      play: "Продолжить",
      pause: "Пауза",
      reset: "Сброс",
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
                <Layers className="size-3" />
                {t.badge}
              </Badge>
              <span className="font-mono text-xs text-muted-foreground">F_ishq = μ · N</span>
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
        <div className="relative mt-5 h-44 w-full overflow-hidden rounded-xl border border-border bg-gradient-to-b from-muted/20 to-muted/70">
          {/* Surface texture indicator */}
          <div className="absolute inset-x-0 bottom-0 h-10 border-t border-border bg-muted/90 flex items-center justify-center">
            <span className="font-mono text-xs font-semibold text-muted-foreground tracking-widest uppercase">
              {locale === "uz" ? selectedMat.nameUz : locale === "en" ? selectedMat.nameEn : selectedMat.nameRu} (μ = {selectedMat.mu})
            </span>
          </div>

          {/* Block with pulling and friction vector arrows */}
          <div
            className="absolute bottom-10 transition-all duration-75 ease-linear"
            style={{ left: `${blockPos}%`, transform: "translateX(-50%)" }}
          >
            {/* Pulling Force Arrow (Right) */}
            <div className="absolute -top-6 left-full flex items-center gap-1">
              <div
                className="h-1 bg-primary rounded-full transition-all"
                style={{ width: `${Math.min(pullForce * 1.5, 60)}px` }}
              />
              <span className="text-[10px] font-mono font-bold text-primary whitespace-nowrap">
                F_tort={pullForce}N →
              </span>
            </div>

            {/* Friction Force Arrow (Left) */}
            <div className="absolute -top-6 right-full flex items-center gap-1">
              <span className="text-[10px] font-mono font-bold text-rose-500 whitespace-nowrap">
                ← F_ishq={isMoving ? maxFriction.toFixed(1) : pullForce}N
              </span>
              <div
                className="h-1 bg-rose-500 rounded-full transition-all"
                style={{ width: `${Math.min(maxFriction * 1.5, 60)}px` }}
              />
            </div>

            {/* Wooden/Metal Block */}
            <div
              className={cn(
                "relative flex items-center justify-center rounded-lg border-2 border-amber-700/60 bg-amber-600/30 text-center font-mono text-xs font-bold text-amber-900 dark:text-amber-200 shadow-lg",
                mass > 6 ? "h-16 w-20" : mass > 3 ? "h-14 w-16" : "h-12 w-14",
              )}
            >
              <div className="flex flex-col items-center">
                <span>{mass} kg</span>
                {isMoving && <Flame className="size-3.5 text-rose-500 animate-bounce mt-0.5" />}
              </div>
            </div>
          </div>

          {/* State Badges */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-2">
            <Badge
              variant={isMoving ? "default" : "secondary"}
              className={cn(
                "font-mono text-[11px] gap-1",
                isMoving ? "bg-emerald-500 hover:bg-emerald-600 text-white" : "text-muted-foreground",
              )}
            >
              {isMoving ? <Sparkles className="size-3" /> : <ShieldAlert className="size-3" />}
              {isMoving ? t.statusMoving : t.statusAtRest}
            </Badge>

            {isMoving && (
              <Badge variant="outline" className="font-mono text-[11px]">
                a = <span className="font-bold text-primary ml-1">{acceleration.toFixed(2)} m/s²</span>
              </Badge>
            )}
          </div>
        </div>

        {/* Live Calculation Cards */}
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-center font-mono text-xs">
          <div className="rounded-lg border border-border p-2.5 bg-muted/20">
            <div className="text-[10px] text-muted-foreground uppercase">N = mg</div>
            <div className="mt-1 font-bold text-sm text-foreground">{normalForce} N</div>
          </div>
          <div className="rounded-lg border border-border p-2.5 bg-muted/20">
            <div className="text-[10px] text-muted-foreground uppercase">F_ishq (μ·N)</div>
            <div className="mt-1 font-bold text-sm text-rose-500">{maxFriction.toFixed(1)} N</div>
          </div>
          <div className="rounded-lg border border-border p-2.5 bg-muted/20">
            <div className="text-[10px] text-muted-foreground uppercase">F_tortish</div>
            <div className="mt-1 font-bold text-sm text-primary">{pullForce} N</div>
          </div>
          <div className="rounded-lg border border-border p-2.5 bg-muted/20">
            <div className="text-[10px] text-muted-foreground uppercase">F_nat (F - F_ishq)</div>
            <div className="mt-1 font-bold text-sm text-emerald-500">{netForce.toFixed(1)} N</div>
          </div>
        </div>

        {/* Material Selector Buttons */}
        <div className="mt-5 space-y-2">
          <label className="text-xs font-medium text-foreground">{t.material}</label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {MATERIALS.map((mat) => {
              const active = selectedMat.id === mat.id;
              const name = locale === "uz" ? mat.nameUz : locale === "en" ? mat.nameEn : mat.nameRu;
              return (
                <button
                  key={mat.id}
                  onClick={() => setSelectedMat(mat)}
                  className={cn(
                    "flex flex-col items-center justify-center p-2.5 rounded-xl border text-xs font-mono transition-all",
                    active
                      ? "border-primary bg-primary/10 text-foreground font-bold ring-2 ring-primary/20 shadow-xs"
                      : "border-border bg-card hover:bg-muted text-muted-foreground",
                  )}
                >
                  <span>{name}</span>
                  <span className="text-[10px] opacity-70">μ = {mat.mu}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Sliders Control Panel */}
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          {/* Pull Force Slider */}
          <div className="space-y-2 rounded-xl border border-border p-4 bg-card">
            <div className="flex items-center justify-between text-xs sm:text-sm">
              <span className="font-medium text-foreground">{t.pull}</span>
              <span className="font-mono font-bold text-primary">{pullForce} N</span>
            </div>
            <Slider
              value={[pullForce]}
              min={0}
              max={60}
              step={1}
              onValueChange={(vals) => setPullForce(vals[0])}
            />
            <div className="flex justify-between text-[10px] font-mono text-muted-foreground">
              <span>0 N</span>
              <span>Maksimal: {maxFriction.toFixed(1)} N</span>
              <span>60 N</span>
            </div>
          </div>

          {/* Mass Slider */}
          <div className="space-y-2 rounded-xl border border-border p-4 bg-card">
            <div className="flex items-center justify-between text-xs sm:text-sm">
              <span className="font-medium text-foreground">{t.mass}</span>
              <span className="font-mono font-bold text-amber-500">{mass} kg</span>
            </div>
            <Slider
              value={[mass]}
              min={1}
              max={10}
              step={0.5}
              onValueChange={(vals) => setMass(vals[0])}
            />
            <div className="flex justify-between text-[10px] font-mono text-muted-foreground">
              <span>1 kg</span>
              <span>10 kg</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
