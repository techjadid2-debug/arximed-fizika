"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowLeftRight, CheckCircle2, Compass, Play, RotateCcw, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import type { Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import confetti from "canvas-confetti";
import { playCelebrationSound } from "@/lib/sound";

interface RelativeMotionLabProps {
  locale?: Locale;
}

export function RelativeMotionLab({ locale = "uz" }: RelativeMotionLabProps) {
  // Qayiq va oqim parametrlari
  const [boatSpeed, setBoatSpeed] = useState<number>(4); // m/s
  const [currentSpeed, setCurrentSpeed] = useState<number>(2); // m/s
  const [isWithCurrent, setIsWithCurrent] = useState<boolean>(true); // oqim bo'ylab yoki qarshi
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [hasCelebrated, setHasCelebrated] = useState<boolean>(false);

  // Animatsiya pozitsiyalari (0 dan 100% gacha)
  const [boatPos, setBoatPos] = useState<number>(20);
  const [waterOffset, setWaterOffset] = useState<number>(0);
  const lastTimeRef = useRef<number | null>(null);

  // Natijaviy tezlik (qirg'oqqa nisbatan)
  const netSpeed = isWithCurrent ? boatSpeed + currentSpeed : boatSpeed - currentSpeed;

  // Animatsiya tsikli
  useEffect(() => {
    let animId: number;

    const loop = (time: number) => {
      if (lastTimeRef.current !== null && isPlaying) {
        const dt = Math.min((time - lastTimeRef.current) / 1000, 0.1);

        // Suv oqimi animatsiyasi (doim o'ngga oqadi)
        setWaterOffset((prev) => (prev + currentSpeed * dt * 15) % 100);

        // Qayiq harakati
        setBoatPos((prev) => {
          let next = prev + netSpeed * dt * 6;
          if (next > 95) next = 5;
          if (next < 5) next = 95;
          return next;
        });
      }
      lastTimeRef.current = time;
      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, [isPlaying, netSpeed, currentSpeed]);

  const t = {
    title:
      locale === "uz"
        ? "Daryoda Qayiq: Harakatning Nisbiyligi"
        : locale === "en"
          ? "Boat on a River: Relative Motion"
          : "Лодка на реке: Относительность движения",
    desc:
      locale === "uz"
        ? "Slayderlarni suring va qirg‘oqdagi kuzatuvchiga nisbatan qayiq tezligi qanday o‘zgarishini ko‘ring."
        : locale === "en"
          ? "Adjust sliders to see how the boat's speed changes relative to a stationary observer on the shore."
          : "Передвигайте ползунки, чтобы увидеть изменение скорости лодки относительно берега.",
    boatLabel:
      locale === "uz" ? "Qayiq tezligi (suvga nisbatan)" : locale === "en" ? "Boat speed" : "Скорость лодки",
    currentLabel:
      locale === "uz" ? "Daryo oqimi tezligi" : locale === "en" ? "River current" : "Скорость течения",
    withCurrent:
      locale === "uz" ? "Oqim bo‘ylab ➔" : locale === "en" ? "With current ➔" : "По течению ➔",
    againstCurrent:
      locale === "uz" ? "Oqimga qarshi ⬅" : locale === "en" ? "Against current ⬅" : "Против течения ⬅",
    shoreSpeedLabel:
      locale === "uz"
        ? "Qirg‘oqqa nisbatan natijaviy tezlik:"
        : locale === "en"
          ? "Net speed relative to shore:"
          : "Скорость относительно берега:",
    stoppedState:
      locale === "uz"
        ? "Qayiq joyida to‘xtab turibdi! Qirg‘oqdagilarga u qimirlamayotgandek ko‘rinadi."
        : locale === "en"
          ? "The boat is stationary relative to the shore (v = 0 m/s)!"
          : "Лодка неподвижна относительно берега (v = 0 м/с)!",
    pushedBackState:
      locale === "uz"
        ? "Oqim qayiqdan kuchliroq! Qayiq orqaga surilmoqda."
        : locale === "en"
          ? "The current is overpowering the boat! Moving backwards."
          : "Течение сильнее! Лодку сносит назад.",
    boostedState:
      locale === "uz"
        ? "Oqim qayiqqa yordam bermoqda!"
        : locale === "en"
          ? "The current is boosting the boat forward!"
          : "Течение помогает лодке!",
    forwardState:
      locale === "uz"
        ? "Qayiq oqimni yengib oldinga suzmoqda."
        : locale === "en"
          ? "The boat is moving forward against the current."
          : "Лодка движется вперёд против течения.",
    challenge:
      locale === "uz"
        ? "Topshiriq: Qayiq qirg‘oqqa nisbatan to‘xtab turishi (v = 0) uchun tezliklarni tenglashtiring!"
        : locale === "en"
          ? "Challenge: Match the speeds against the current so the boat stays still (v = 0)!"
          : "Задание: Уравняйте скорости против течения, чтобы лодка замерла (v = 0)!",
    challengeDone:
      locale === "uz"
        ? "Ajoyib! Qayiq harakatlanyapti, lekin qirg‘oqqa nisbatan tezligi 0 m/s!"
        : locale === "en"
          ? "Perfect! The boat motors through water, but remains still relative to the riverbank!"
          : "Отлично! Лодка плывёт в воде, но неподвижна относительно берега!",
  };

  const isStationaryChallengeMet = !isWithCurrent && Math.abs(netSpeed) < 0.05 && boatSpeed > 0;

  useEffect(() => {
    if (isStationaryChallengeMet && !hasCelebrated) {
      setHasCelebrated(true);
      playCelebrationSound();
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.6 },
      });
    } else if (!isStationaryChallengeMet && hasCelebrated) {
      setHasCelebrated(false);
    }
  }, [isStationaryChallengeMet, hasCelebrated]);

  return (
    <Card className="overflow-hidden border-border bg-card shadow-sm">
      <CardContent className="p-5 sm:p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/80 pb-4">
          <div>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="gap-1 font-mono text-[10px] text-primary">
                <Compass className="size-3" />
                Kinematika · Lab 02
              </Badge>
              {isStationaryChallengeMet && (
                <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/20 px-2.5 py-0.5 text-xs font-bold text-amber-600 dark:text-amber-400 animate-pulse border border-amber-500/30">
                  <Sparkles className="size-3" />
                  ⭐⭐⭐ {locale === "uz" ? "Missiya bajarildi! (+25 XP)" : "Mission Accomplished!"}
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
              onClick={() => {
                setBoatSpeed(4);
                setCurrentSpeed(2);
                setIsWithCurrent(true);
                setBoatPos(20);
              }}
              className="h-8 gap-1 text-xs text-muted-foreground"
              title="Qayta o‘rnatish"
            >
              <RotateCcw className="size-3.5" />
            </Button>
          </div>
        </div>

        {/* ── Virtual Simulyatsiya Maydoni (Canvas/CSS) ──────────────────── */}
        <div className="relative h-48 sm:h-56 w-full overflow-hidden rounded-xl border border-border bg-slate-900 select-none">
          {/* Yuqori qirg'oq (Sanoq jismi) */}
          <div className="absolute top-0 inset-x-0 h-9 bg-emerald-800/80 border-b border-emerald-700/60 flex items-center justify-between px-4 z-10">
            <span className="font-mono text-[10px] text-emerald-200/90 font-medium">
              🌲 Qirg‘oq (Qo‘zg‘almas sanoq jismi)
            </span>
            <span className="font-mono text-[10px] text-emerald-200/60 hidden sm:inline">x = 0...100 m</span>
          </div>

          {/* Daryo suvi */}
          <div className="absolute inset-x-0 top-9 bottom-9 bg-linear-to-b from-sky-600/90 via-blue-600 to-indigo-700 overflow-hidden">
            {/* Oqim to'lqinlari chiziqlari */}
            <div
              className="absolute inset-0 opacity-25"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(255,255,255,0.4) 40px, rgba(255,255,255,0.4) 60px)",
                transform: `translateX(${waterOffset}px)`,
                transition: "transform 0.05s linear",
              }}
            />

            {/* Oqim yo'nalishi ko'rsatkichi */}
            <div className="absolute bottom-2 left-4 flex items-center gap-1.5 font-mono text-[11px] font-semibold text-white/70 bg-black/30 px-2 py-0.5 rounded">
              <span>Oqim: {currentSpeed} m/s ➔</span>
            </div>

            {/* Qayiq obyekti */}
            <div
              className="absolute top-1/2 -translate-y-1/2 transition-transform duration-75 flex flex-col items-center"
              style={{
                left: `${boatPos}%`,
                transform: `translate(-50%, -50%) ${!isWithCurrent ? "scaleX(-1)" : ""}`,
              }}
            >
              {/* Qayiq SVG */}
              <div className="relative">
                <svg width="64" height="36" viewBox="0 0 64 36" fill="none" className="drop-shadow-md">
                  {/* Yelkan / ustun */}
                  <path d="M30 4 L30 22" stroke="#e2e8f0" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M30 6 L46 16 L30 20 Z" fill="#f59e0b" />
                  {/* Qayiq korpusi */}
                  <path
                    d="M8 22 L56 22 L48 32 L16 32 Z"
                    fill="#3b82f6"
                    stroke="#1e3a8a"
                    strokeWidth="1.5"
                  />
                  {/* Suv to'lqini tagida */}
                  <path
                    d="M4 32 C12 34, 20 31, 28 33 C36 31, 44 34, 58 32"
                    stroke="rgba(255,255,255,0.7)"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              {/* Qayiq ustidagi tezlik ko'rsatkichi */}
              <span
                className={cn(
                  "mt-1 rounded px-1.5 py-0.5 font-mono text-[10px] font-bold text-white shadow-xs",
                  netSpeed > 0 ? "bg-emerald-600" : netSpeed === 0 ? "bg-amber-600" : "bg-rose-600",
                )}
                style={{ transform: !isWithCurrent ? "scaleX(-1)" : undefined }}
              >
                {netSpeed > 0 ? `+${netSpeed.toFixed(1)}` : netSpeed.toFixed(1)} m/s
              </span>
            </div>
          </div>

          {/* Pastki qirg'oq */}
          <div className="absolute bottom-0 inset-x-0 h-9 bg-emerald-800/80 border-t border-emerald-700/60 flex items-center justify-between px-4 z-10">
            <span className="font-mono text-[10px] text-emerald-200/90 font-medium">
              🏡 Kuzatuvchi (Bekatda tinch turibdi)
            </span>
            <span className="font-mono text-[10px] text-emerald-200/80 font-semibold">
              v = {netSpeed.toFixed(1)} m/s
            </span>
          </div>
        </div>

        {/* ── Boshqaruv Slayderlari & Tugmalar ───────────────────────────── */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 pt-2">
          {/* Qayiq tezligi */}
          <div className="space-y-2 rounded-xl border border-border/80 bg-muted/30 p-4">
            <div className="flex items-center justify-between text-xs sm:text-sm">
              <span className="font-medium text-foreground">{t.boatLabel}</span>
              <span className="font-mono font-bold text-primary">{boatSpeed} m/s</span>
            </div>
            <Slider
              value={[boatSpeed]}
              min={0}
              max={10}
              step={0.5}
              onValueChange={(val) => setBoatSpeed(val[0])}
            />
            <div className="flex justify-between text-[10px] font-mono text-muted-foreground">
              <span>0 m/s (Dvigatel o‘chiq)</span>
              <span>10 m/s</span>
            </div>
          </div>

          {/* Oqim tezligi */}
          <div className="space-y-2 rounded-xl border border-border/80 bg-muted/30 p-4">
            <div className="flex items-center justify-between text-xs sm:text-sm">
              <span className="font-medium text-foreground">{t.currentLabel}</span>
              <span className="font-mono font-bold text-sky-600 dark:text-sky-400">{currentSpeed} m/s</span>
            </div>
            <Slider
              value={[currentSpeed]}
              min={0}
              max={6}
              step={0.5}
              onValueChange={(val) => setCurrentSpeed(val[0])}
            />
            <div className="flex justify-between text-[10px] font-mono text-muted-foreground">
              <span>0 m/s (Ko‘l)</span>
              <span>6 m/s (Tez oqim)</span>
            </div>
          </div>
        </div>

        {/* Yo'nalish tugmalari */}
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-border bg-card p-4">
          <span className="text-xs sm:text-sm font-medium text-foreground">
            Harakat yo‘nalishi:
          </span>
          <div className="flex items-center gap-2">
            <Button
              variant={isWithCurrent ? "default" : "outline"}
              size="sm"
              onClick={() => setIsWithCurrent(true)}
              className="text-xs font-medium"
            >
              {t.withCurrent}
            </Button>
            <Button
              variant={!isWithCurrent ? "default" : "outline"}
              size="sm"
              onClick={() => setIsWithCurrent(false)}
              className="text-xs font-medium"
            >
              {t.againstCurrent}
            </Button>
          </div>
        </div>

        {/* ── Natijaviy Katta Ko'rsatkich Kartasi (Minimalist Telemetry) ──── */}
        <div
          className={cn(
            "rounded-xl border p-4 sm:p-5 transition-all",
            isStationaryChallengeMet
              ? "border-emerald-500/40 bg-emerald-500/10"
              : netSpeed < 0
                ? "border-rose-500/30 bg-rose-500/5"
                : "border-primary/20 bg-primary/5",
          )}
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <p className="text-xs font-medium text-muted-foreground">{t.shoreSpeedLabel}</p>
              <div className="mt-1 flex items-baseline gap-2">
                <span className="font-mono text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
                  {Math.abs(netSpeed).toFixed(1)}
                  <span className="text-base font-normal text-muted-foreground"> m/s</span>
                </span>
                <span className="font-mono text-xs text-muted-foreground">
                  ({boatSpeed} {isWithCurrent ? "+" : "−"} {currentSpeed})
                </span>
              </div>
            </div>

            <div className="text-xs sm:text-sm font-medium">
              {netSpeed === 0 ? (
                <span className="text-amber-600 dark:text-amber-400 flex items-center gap-1.5">
                  <ArrowLeftRight className="size-4" />
                  {t.stoppedState}
                </span>
              ) : netSpeed < 0 ? (
                <span className="text-rose-600 dark:text-rose-400">
                  {t.pushedBackState}
                </span>
              ) : isWithCurrent ? (
                <span className="text-emerald-600 dark:text-emerald-400">
                  {t.boostedState} ({boatSpeed} + {currentSpeed} = {netSpeed} m/s)
                </span>
              ) : (
                <span className="text-foreground/90">
                  {t.forwardState} ({boatSpeed} − {currentSpeed} = {netSpeed} m/s)
                </span>
              )}
            </div>
          </div>

          {/* Topshiriq eslatmasi */}
          <div className="mt-4 border-t border-border/60 pt-3 flex items-center gap-2 text-xs text-muted-foreground">
            {isStationaryChallengeMet ? (
              <span className="text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1.5">
                <CheckCircle2 className="size-4" />
                {t.challengeDone}
              </span>
            ) : (
              <span>💡 {t.challenge}</span>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
