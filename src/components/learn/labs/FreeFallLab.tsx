"use client";

import { useEffect, useRef, useState } from "react";
import { AlertCircle, ArrowDown, CheckCircle2, Droplets, Gauge, Play, RotateCcw, Sparkles, Timer, Wind } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import type { Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import confetti from "canvas-confetti";
import { playCelebrationSound, playCorrectSound } from "@/lib/sound";

interface FreeFallLabProps {
  locale?: Locale;
}

export function FreeFallLab({ locale = "uz" }: FreeFallLabProps) {
  const [height, setHeight] = useState<number>(45); // meters (Pisa tower ~45m)
  const [isVacuum, setIsVacuum] = useState<boolean>(false);
  const [gravity] = useState<number>(9.8); // m/s^2
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [isFinished, setIsFinished] = useState<boolean>(false);

  // Positions (0 = top, height = bottom)
  const [ballPos, setBallPos] = useState<number>(0);
  const [featherPos, setFeatherPos] = useState<number>(0);
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const [ballTime, setBallTime] = useState<number | null>(null);
  const [featherTime, setFeatherTime] = useState<number | null>(null);

  const lastTimeRef = useRef<number | null>(null);
  const stateRef = useRef({
    ballY: 0,
    ballV: 0,
    featherY: 0,
    featherV: 0,
    t: 0,
  });

  // Theoretical vacuum time: t = sqrt(2h/g)
  const theoreticalVacuumTime = Math.sqrt((2 * height) / gravity);
  const impactSpeed = Math.sqrt(2 * gravity * height);

  const handleStart = () => {
    stateRef.current = {
      ballY: 0,
      ballV: 0,
      featherY: 0,
      featherV: 0,
      t: 0,
    };
    setBallPos(0);
    setFeatherPos(0);
    setElapsedTime(0);
    setBallTime(null);
    setFeatherTime(null);
    setIsFinished(false);
    setIsRunning(true);
    lastTimeRef.current = null;
  };

  const handleReset = () => {
    setIsRunning(false);
    setIsFinished(false);
    stateRef.current = {
      ballY: 0,
      ballV: 0,
      featherY: 0,
      featherV: 0,
      t: 0,
    };
    setBallPos(0);
    setFeatherPos(0);
    setElapsedTime(0);
    setBallTime(null);
    setFeatherTime(null);
    lastTimeRef.current = null;
  };

  useEffect(() => {
    let animId: number;

    const loop = (timestamp: number) => {
      if (isRunning) {
        if (lastTimeRef.current !== null) {
          const dt = Math.min((timestamp - lastTimeRef.current) / 1000, 0.05);
          const state = stateRef.current;
          state.t += dt;
          setElapsedTime(state.t);

          // 1. Ball physics
          if (state.ballY < height) {
            const ballDrag = isVacuum ? 0 : 0.001 * state.ballV * state.ballV;
            const ballAccel = Math.max(0, gravity - ballDrag);
            state.ballV += ballAccel * dt;
            state.ballY += state.ballV * dt;

            if (state.ballY >= height) {
              state.ballY = height;
              setBallTime(state.t);
            }
            setBallPos(state.ballY);
          }

          // 2. Feather physics
          if (state.featherY < height) {
            // High drag in air: terminal velocity ~ 4 m/s
            const featherDrag = isVacuum ? 0 : 0.6 * state.featherV * state.featherV;
            const featherAccel = Math.max(0, gravity - featherDrag);
            state.featherV += featherAccel * dt;
            state.featherY += state.featherV * dt;

            if (state.featherY >= height) {
              state.featherY = height;
              setFeatherTime(state.t);
            }
            setFeatherPos(state.featherY);
          }

          // Check if both finished
          if (state.ballY >= height && state.featherY >= height) {
            setIsRunning(false);
            setIsFinished(true);
          }
        }
        lastTimeRef.current = timestamp;
      }
      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, [isRunning, height, isVacuum, gravity]);

  useEffect(() => {
    if (isFinished) {
      if (isVacuum) {
        playCelebrationSound();
        confetti({
          particleCount: 75,
          spread: 70,
          origin: { y: 0.6 },
        });
      } else {
        playCorrectSound();
      }
    }
  }, [isFinished, isVacuum]);

  const t = {
    title:
      locale === "uz"
        ? "Erkin Tushish: Nyuton Naychasi Tajribasi"
        : locale === "en"
          ? "Free Fall: Newton's Vacuum Tube Lab"
          : "Свободное падение: Трубка Ньютона",
    desc:
      locale === "uz"
        ? "Havo borligida qush pati sekin tushadi. Vakuum (havosiz bo‘shliq)da esa og‘ir shar va yengil pat bir vaqtda tushadi!"
        : locale === "en"
          ? "Air drag slows down the feather. In a vacuum, both the heavy ball and light feather drop simultaneously!"
          : "В воздухе перо падает медленно из-за сопротивления. В вакууме шар и перо падают одновременно!",
    airMode: locale === "uz" ? "Havo bor (Normal)" : locale === "en" ? "With Air (Drag)" : "С воздухом",
    vacuumMode: locale === "uz" ? "Vakuum (Havosiz)" : locale === "en" ? "Vacuum (No drag)" : "Вакуум",
    heightLabel: locale === "uz" ? "Balandlik (h)" : locale === "en" ? "Height (h)" : "Высота (h)",
    startBtn: locale === "uz" ? "Tashlash" : locale === "en" ? "Drop" : "Сбросить",
    resetBtn: locale === "uz" ? "Qayta o‘rnatish" : locale === "en" ? "Reset" : "Сброс",
    ballLabel: locale === "uz" ? "Metall shar (5 kg)" : locale === "en" ? "Steel ball (5 kg)" : "Стальной шар (5 кг)",
    featherLabel: locale === "uz" ? "Qush pati (1 g)" : locale === "en" ? "Feather (1 g)" : "Перо (1 г)",
    timeElapsed: locale === "uz" ? "O‘tgan vaqt" : locale === "en" ? "Elapsed Time" : "Время",
    impactSpeedLabel: locale === "uz" ? "Urilish tezligi" : locale === "en" ? "Impact Speed" : "Скорость удара",
    vacuumSuccess:
      locale === "uz"
        ? "Galiley qonuni isbotlandi! Havosiz bo‘shliqda jism massasi erkin tushish tezligiga ta’sir qilmaydi (g = 9.8 m/s²)."
        : locale === "en"
          ? "Galileo was right! In a vacuum, mass does not affect fall time — both accelerate at g = 9.8 m/s²."
          : "Закон Галилея доказан! В вакууме масса тела не влияет на время падения (g = 9.8 м/с²).",
    airExplanation:
      locale === "uz"
        ? "Havoda qush pati havo qarshiligi tufayli kechikadi. Og‘ir metall shar esa qarshilikni oson yoradi."
        : locale === "en"
          ? "In air, aerodynamic drag quickly halts feather acceleration, while the heavy ball cuts through."
          : "В воздухе сопротивление замедляет перо, а тяжелый шар быстро преодолевает его.",
  };

  // Percentages for rendering within 320px tube
  const ballPercent = Math.min(100, (ballPos / height) * 100);
  const featherPercent = Math.min(100, (featherPos / height) * 100);

  return (
    <div className="space-y-6">
      {/* Header & Concept intro */}
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">{t.title}</h3>
            <Badge variant="outline" className="text-xs text-blue-600 dark:text-blue-400">
              g ≈ 9.8 m/s²
            </Badge>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">{t.desc}</p>
        </div>

        {/* Vacuum Switch */}
        <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800/80 p-1.5 rounded-xl border border-slate-200 dark:border-slate-700/60 self-start md:self-auto">
          <Button
            size="sm"
            variant={!isVacuum ? "default" : "ghost"}
            onClick={() => {
              if (!isRunning) setIsVacuum(false);
            }}
            disabled={isRunning}
            className="text-xs h-8 gap-1.5"
          >
            <Wind className="w-3.5 h-3.5 text-blue-500" />
            {t.airMode}
          </Button>
          <Button
            size="sm"
            variant={isVacuum ? "default" : "ghost"}
            onClick={() => {
              if (!isRunning) setIsVacuum(true);
            }}
            disabled={isRunning}
            className="text-xs h-8 gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            {t.vacuumMode}
          </Button>
        </div>
      </div>

      {/* Main Lab Display */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left / Center: Interactive Vacuum Tube Chamber */}
        <Card className="lg:col-span-8 border-slate-200 dark:border-slate-800 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden shadow-xl">
          <CardContent className="p-6">
            {/* Environment Indicator Bar */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <span className="inline-block w-2.5 h-2.5 rounded-full animate-pulse bg-emerald-400" />
                <span>
                  {locale === "uz" ? "Kamera holati: " : locale === "en" ? "Chamber: " : "Камера: "}
                  <strong className={isVacuum ? "text-amber-400" : "text-blue-400"}>
                    {isVacuum ? "0.0 kPa (Absolyut Vakuum)" : "101.3 kPa (Havo muhiti)"}
                  </strong>
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span>g = 9.8 m/s²</span>
                <span>h = {height} m</span>
              </div>
            </div>

            {/* Vertical Falling Tubes */}
            <div className="relative h-[360px] bg-slate-900/60 rounded-2xl border border-slate-800/80 p-4 flex justify-around items-stretch overflow-hidden">
              {/* Background height scale ticks */}
              <div className="absolute left-3 top-4 bottom-4 flex flex-col justify-between text-[10px] text-slate-500 font-mono select-none">
                <span>0 m (tepa)</span>
                <span>{Math.round(height * 0.25)} m</span>
                <span>{Math.round(height * 0.5)} m</span>
                <span>{Math.round(height * 0.75)} m</span>
                <span>{height} m (yer)</span>
              </div>

              {/* Lane 1: Steel Ball */}
              <div className="relative w-28 flex flex-col items-center">
                <div className="text-[11px] font-semibold text-slate-400 mb-2 flex items-center gap-1">
                  <span>⚽</span> {t.ballLabel}
                </div>
                <div className="relative flex-1 w-16 bg-slate-950/70 border border-slate-700/60 rounded-xl overflow-hidden">
                  {/* Steel Ball Object */}
                  <div
                    className="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-slate-200 via-slate-400 to-slate-700 shadow-[0_0_12px_rgba(255,255,255,0.3)] transition-all ease-linear"
                    style={{
                      top: `calc(${ballPercent}% - ${ballPercent > 90 ? 32 : 0}px)`,
                    }}
                  >
                    <div className="absolute top-1 left-2 w-2 h-2 rounded-full bg-white/70" />
                  </div>
                </div>
                <div className="mt-2 text-xs font-mono text-slate-300">
                  {ballTime !== null ? `${ballTime.toFixed(2)} s` : isRunning ? `${elapsedTime.toFixed(2)} s` : "--"}
                </div>
              </div>

              {/* Lane 2: Feather */}
              <div className="relative w-28 flex flex-col items-center">
                <div className="text-[11px] font-semibold text-slate-400 mb-2 flex items-center gap-1">
                  <span>🪶</span> {t.featherLabel}
                </div>
                <div className="relative flex-1 w-16 bg-slate-950/70 border border-slate-700/60 rounded-xl overflow-hidden">
                  {/* Air particles when not vacuum */}
                  {!isVacuum && (
                    <div className="absolute inset-0 pointer-events-none opacity-20 flex flex-col justify-around items-center">
                      <Wind className="w-4 h-4 text-blue-300 animate-pulse" />
                      <Wind className="w-4 h-4 text-blue-300 animate-pulse delay-100" />
                      <Wind className="w-4 h-4 text-blue-300 animate-pulse delay-200" />
                    </div>
                  )}

                  {/* Feather Object */}
                  <div
                    className={cn(
                      "absolute left-1/2 -translate-x-1/2 text-2xl select-none transition-all ease-linear",
                      !isVacuum && isRunning && "animate-bounce"
                    )}
                    style={{
                      top: `calc(${featherPercent}% - ${featherPercent > 90 ? 32 : 0}px)`,
                      transform: `translateX(-50%) rotate(${!isVacuum && isRunning ? (elapsedTime * 60) % 30 - 15 : 0}deg)`,
                    }}
                  >
                    🪶
                  </div>
                </div>
                <div className="mt-2 text-xs font-mono text-slate-300">
                  {featherTime !== null
                    ? `${featherTime.toFixed(2)} s`
                    : isRunning
                      ? `${elapsedTime.toFixed(2)} s`
                      : "--"}
                </div>
              </div>
            </div>

            {/* Live Telemetry & Result message */}
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-900/90 border border-slate-800 rounded-xl p-4">
              <div className="flex items-center gap-6 text-sm">
                <div>
                  <span className="text-xs text-slate-500 block">{t.timeElapsed}</span>
                  <span className="text-xl font-bold font-mono text-white">{elapsedTime.toFixed(2)} s</span>
                </div>
                <div>
                  <span className="text-xs text-slate-500 block">{t.impactSpeedLabel} (v = √2gh)</span>
                  <span className="text-xl font-bold font-mono text-emerald-400">{impactSpeed.toFixed(1)} m/s</span>
                  <span className="text-xs text-slate-500 ml-1">({(impactSpeed * 3.6).toFixed(0)} km/h)</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                <Button
                  onClick={handleStart}
                  disabled={isRunning}
                  className="bg-blue-600 hover:bg-blue-500 text-white font-medium px-5 gap-2"
                >
                  <Play className="w-4 h-4" />
                  {t.startBtn}
                </Button>
                <Button
                  onClick={handleReset}
                  variant="outline"
                  className="border-slate-700 text-slate-300 hover:bg-slate-800 gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  {t.resetBtn}
                </Button>
              </div>
            </div>

            {/* Conclusion Alert */}
            {isFinished && (
              <div
                className={cn(
                  "mt-4 p-4 rounded-xl border flex items-start gap-3",
                  isVacuum
                    ? "bg-emerald-950/40 border-emerald-800/80 text-emerald-200"
                    : "bg-blue-950/40 border-blue-800/80 text-blue-200"
                )}
              >
                {isVacuum ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                )}
                <div className="text-xs leading-relaxed">
                  <strong className="block text-sm font-bold mb-1 flex items-center gap-1.5 text-amber-300">
                    {isVacuum ? (
                      <>
                        <span>⭐⭐⭐</span> Galiley g‘alabasi! (t₁ = t₂) · +30 XP
                      </>
                    ) : (
                      "Havo qarshiligi effekti"
                    )}
                  </strong>
                  {isVacuum ? t.vacuumSuccess : t.airExplanation}
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Right: Controls & Core School Formulas */}
        <div className="lg:col-span-4 space-y-4">
          {/* Height Control */}
          <Card className="border-slate-200 dark:border-slate-800 shadow-sm">
            <CardContent className="p-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{t.heightLabel}</span>
                <span className="text-sm font-bold font-mono text-blue-600 dark:text-blue-400">{height} m</span>
              </div>
              <Slider
                value={[height]}
                min={10}
                max={100}
                step={5}
                disabled={isRunning}
                onValueChange={(val) => {
                  setHeight(val[0]);
                  handleReset();
                }}
              />
              <div className="flex justify-between text-[11px] text-slate-400">
                <span>10 m (3-qavat)</span>
                <span>45 m (Piza minorasi)</span>
                <span>100 m</span>
              </div>
            </CardContent>
          </Card>

          {/* Golden Formulas Card */}
          <Card className="border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/50 shadow-sm">
            <CardContent className="p-5 space-y-3">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                {locale === "uz"
                  ? "Asosiy formulalar"
                  : locale === "en"
                    ? "Fundamental Formulas"
                    : "Основные формулы"}
              </div>

              <div className="space-y-2 text-xs">
                <div className="bg-white dark:bg-slate-950 p-2.5 rounded-lg border border-slate-200/80 dark:border-slate-800 flex justify-between items-center">
                  <span className="text-slate-600 dark:text-slate-400">Tushish vaqti:</span>
                  <span className="font-mono font-bold text-blue-600 dark:text-blue-400">t = √(2h / g)</span>
                </div>
                <div className="bg-white dark:bg-slate-950 p-2.5 rounded-lg border border-slate-200/80 dark:border-slate-800 flex justify-between items-center">
                  <span className="text-slate-600 dark:text-slate-400">Tushish balandligi:</span>
                  <span className="font-mono font-bold text-purple-600 dark:text-purple-400">h = (g · t²) / 2</span>
                </div>
                <div className="bg-white dark:bg-slate-950 p-2.5 rounded-lg border border-slate-200/80 dark:border-slate-800 flex justify-between items-center">
                  <span className="text-slate-600 dark:text-slate-400">Tezlik formulasi:</span>
                  <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400">v = g · t = √(2gh)</span>
                </div>
              </div>

              <div className="text-[11px] text-slate-500 leading-normal pt-1">
                {locale === "uz"
                  ? "Diqqat: Erkin tushishda tezlanish doimo g ≈ 9.8 m/s² (maktab masalalarida 10 m/s²) ga teng bo‘lib, massaga mutlaqo bog‘liq emas."
                  : locale === "en"
                    ? "Note: Free fall acceleration is always g ≈ 9.8 m/s² (10 m/s² in school problems), completely independent of object mass."
                    : "Внимание: Ускорение свободного падения всегда равно g ≈ 9.8 м/с² и абсолютно не зависит от массы."}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
