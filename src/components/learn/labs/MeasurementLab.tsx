"use client";

import { useState } from "react";
import { CheckCircle2, Gauge, HelpCircle, Layers, Ruler, Sparkles } from "lucide-react";

import { MathContent } from "@/components/learn/MathContent";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const SI_BASE_UNITS = [
  { quantity: "Uzunlik (Length)", symbol: "l, x", unit: "metr (meter)", unitSymbol: "m", standard: "Vakuumda yorug‘likning 1/299792458 soniyada bosib o‘tgan masofasi" },
  { quantity: "Vaqt (Time)", symbol: "t", unit: "soniya (second)", unitSymbol: "s", standard: "Seziy-133 atomi nurlanishining 9 192 631 770 davriga teng vaqt" },
  { quantity: "Massa (Mass)", symbol: "m", unit: "kilogramm (kilogram)", unitSymbol: "kg", standard: "Plank doimiysi h = 6.62607015×10⁻³⁴ J·s orqali aniqlangan" },
  { quantity: "Elektr toki (Current)", symbol: "I", unit: "amper (ampere)", unitSymbol: "A", standard: "Elementar zaryad e = 1.602176634×10⁻¹⁹ C orqali aniqlangan" },
  { quantity: "Termodinamik harorat (Temp)", symbol: "T", unit: "kelvin (kelvin)", unitSymbol: "K", standard: "Bolsman doimiysi k = 1.380649×10⁻²³ J/K orqali aniqlangan" },
  { quantity: "Modda miqdori (Amount)", symbol: "n", unit: "mol (mole)", unitSymbol: "mol", standard: "Avogadro soni NA = 6.02214076×10²³ ta zarracha" },
  { quantity: "Yorug‘lik kuchi (Luminosity)", symbol: "Iv", unit: "kandela (candela)", unitSymbol: "cd", standard: "540×10¹² Hz chastotali nurlanish manbai kuchi" },
];

const PREFIXES = [
  { name: "giga (G)", factor: 1e9, power: "10^9", example: "1 GHz = 10⁹ Hz" },
  { name: "mega (M)", factor: 1e6, power: "10^6", example: "1 MW = 10⁶ W" },
  { name: "kilo (k)", factor: 1e3, power: "10^3", example: "1 km = 1000 m" },
  { name: "detsi (d)", factor: 1e-1, power: "10^{-1}", example: "1 dm = 0.1 m" },
  { name: "santi (c)", factor: 1e-2, power: "10^{-2}", example: "1 cm = 0.01 m" },
  { name: "milli (m)", factor: 1e-3, power: "10^{-3}", example: "1 mm = 0.001 m" },
  { name: "mikro (µ)", factor: 1e-6, power: "10^{-6}", example: "1 µm = 10⁻⁶ m" },
  { name: "nano (n)", factor: 1e-9, power: "10^{-9}", example: "1 nm = 10⁻⁹ m" },
];

export function MeasurementLab({ locale = "uz" }: { locale?: Locale }) {
  // Vernier caliper simulation state
  const [measurementMm, setMeasurementMm] = useState<number>(24.6);
  const [userGuess, setUserGuess] = useState<string>("");
  const [verified, setVerified] = useState<boolean | null>(null);

  // Unit converter state
  const [convertValue, setConvertValue] = useState<number>(5.4);
  const [selectedPrefixIndex, setSelectedPrefixIndex] = useState<number>(2); // kilo

  const selectedPrefix = PREFIXES[selectedPrefixIndex];
  const convertedStandard = convertValue * selectedPrefix.factor;

  const handleCheckCaliper = () => {
    const parsed = Number.parseFloat(userGuess.replace(",", "."));
    if (Number.isFinite(parsed) && Math.abs(parsed - measurementMm) <= 0.15) {
      setVerified(true);
    } else {
      setVerified(false);
    }
  };

  const randomNewCaliper = () => {
    const next = Math.round((Math.random() * 40 + 5) * 10) / 10;
    setMeasurementMm(next);
    setUserGuess("");
    setVerified(null);
  };

  return (
    <Card className="mt-7 overflow-hidden border-border bg-card shadow-xs">
      <div className="border-b border-border bg-muted/30 px-6 py-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span className="grid size-8 place-items-center rounded-md bg-primary/10 text-primary">
              <Ruler className="size-4" />
            </span>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-wider text-primary font-medium">
                {locale === "uz" ? "Virtual Laboratoriya" : locale === "en" ? "Virtual Lab" : "Виртуальная лаборатория"}
              </p>
              <h3 className="text-base font-semibold leading-5">
                {locale === "uz" ? "O‘lchash va SI Birliklari Simulyatori" : locale === "en" ? "Measurement & SI Units Simulator" : "Симулятор измерений и единиц СИ"}
              </h3>
            </div>
          </div>
          <span className="rounded-md border border-border bg-background px-2.5 py-1 font-mono text-xs text-muted-foreground">
            01-Dars amaliyoti
          </span>
        </div>
      </div>

      <CardContent className="p-6">
        <Tabs defaultValue="caliper" className="w-full">
          <TabsList className="grid w-full grid-cols-3 min-h-11">
            <TabsTrigger value="caliper" className="text-xs sm:text-sm">
              <Ruler className="mr-1.5 size-3.5" />
              Shtangensirkul (2D)
            </TabsTrigger>
            <TabsTrigger value="converter" className="text-xs sm:text-sm">
              <Gauge className="mr-1.5 size-3.5" />
              Prefikslar (SI)
            </TabsTrigger>
            <TabsTrigger value="baseunits" className="text-xs sm:text-sm">
              <Layers className="mr-1.5 size-3.5" />
              7 Asosiy Birlik
            </TabsTrigger>
          </TabsList>

          {/* 1. Shtangensirkul Virtual Laboratoriyasi */}
          <TabsContent value="caliper" className="mt-5 space-y-5">
            <div className="rounded-xl border border-border bg-muted/20 p-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-sm font-medium text-foreground">
                  Virtual Shtangensirkul bilan detalni o‘lchang:
                </p>
                <Button size="sm" variant="outline" onClick={randomNewCaliper} className="h-8 text-xs">
                  Yangi detal
                </Button>
              </div>

              {/* Caliper 2D Scale Visualization */}
              <div className="relative mt-5 overflow-x-auto rounded-lg border border-border/80 bg-background p-4 shadow-inner">
                <div className="min-w-[480px]">
                  {/* Main Ruler Scale (0 - 50 mm) */}
                  <div className="relative h-14 border-b-2 border-primary">
                    <div className="absolute left-0 top-0 font-mono text-[10px] text-muted-foreground">
                      Asosiy shkala (0.1 sm = 1 mm)
                    </div>
                    <div className="absolute bottom-0 left-6 right-6 flex justify-between">
                      {Array.from({ length: 11 }).map((_, i) => (
                        <div key={i} className="relative flex flex-col items-center">
                          <div className="h-4 w-0.5 bg-foreground" />
                          <span className="mt-1 font-mono text-[10px] text-muted-foreground">{i * 5}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Vernier Nonius scale slider representation */}
                  <div
                    className="relative mt-1 h-12 rounded-sm border border-primary/40 bg-primary/10 transition-all"
                    style={{
                      marginLeft: `${(measurementMm / 50) * 80 + 3}%`,
                      width: "35%",
                    }}
                  >
                    <div className="p-1 font-mono text-[9px] text-primary">
                      Nonius (0.1 mm) → [▲ {measurementMm} mm]
                    </div>
                    <div className="absolute bottom-0 left-2 right-2 flex justify-between">
                      {Array.from({ length: 11 }).map((_, i) => (
                        <div key={i} className="flex flex-col items-center">
                          <div className="h-2.5 w-0.5 bg-primary" />
                          <span className="font-mono text-[8px] text-primary/80">{i}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Slider Controller */}
              <div className="mt-5 space-y-2">
                <div className="flex justify-between font-mono text-xs text-muted-foreground">
                  <span>Jag‘ni surish (Position):</span>
                  <span className="text-foreground font-semibold">{measurementMm.toFixed(1)} mm</span>
                </div>
                <Slider
                  value={[measurementMm]}
                  min={0}
                  max={50}
                  step={0.1}
                  onValueChange={([val]) => {
                    setMeasurementMm(val);
                    setVerified(null);
                  }}
                />
              </div>

              {/* Self-check answer area */}
              <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-border pt-4">
                <p className="text-xs font-medium text-muted-foreground">
                  Ko‘rsatkichni kiriting (mm):
                </p>
                <Input
                  value={userGuess}
                  onChange={(e) => setUserGuess(e.target.value)}
                  placeholder="masalan: 24.6"
                  className="h-9 w-32 font-mono text-sm"
                  onKeyDown={(e) => e.key === "Enter" && handleCheckCaliper()}
                />
                <Button size="sm" onClick={handleCheckCaliper} className="h-9">
                  Tekshirish
                </Button>

                {verified !== null && (
                  <div
                    className={cn(
                      "flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium",
                      verified
                        ? "bg-emerald-500/15 text-emerald-950 dark:text-emerald-300"
                        : "bg-rose-500/15 text-rose-950 dark:text-rose-300",
                    )}
                  >
                    {verified ? (
                      <>
                        <CheckCircle2 className="size-3.5 text-emerald-500" />
                        <span>A’lo! Aniq o‘lchandi: {measurementMm} mm</span>
                      </>
                    ) : (
                      <>
                        <HelpCircle className="size-3.5 text-rose-500" />
                        <span>Xatolik bor. To‘g‘ri javob: {measurementMm} mm</span>
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>
          </TabsContent>

          {/* 2. SI Prefikslari Konverteri */}
          <TabsContent value="converter" className="mt-5 space-y-4">
            <div className="rounded-xl border border-border bg-muted/20 p-5">
              <h4 className="text-sm font-semibold">SI Prefikslari va Standart Shakl:</h4>
              <p className="mt-1 text-xs text-muted-foreground">
                Kattalikni prefiksdan asosiy SI birligiga darhol o‘giring.
              </p>

              <div className="mt-5 grid gap-4 sm:grid-cols-[160px_1fr]">
                <div>
                  <label className="text-xs font-medium text-muted-foreground">Miqdor:</label>
                  <Input
                    type="number"
                    value={convertValue}
                    onChange={(e) => setConvertValue(Number.parseFloat(e.target.value) || 0)}
                    className="mt-1.5 h-10 font-mono"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-muted-foreground">Prefiks tanlang:</label>
                  <div className="mt-1.5 flex flex-wrap gap-1.5">
                    {PREFIXES.map((p, idx) => (
                      <Button
                        key={p.name}
                        size="sm"
                        variant={selectedPrefixIndex === idx ? "default" : "outline"}
                        onClick={() => setSelectedPrefixIndex(idx)}
                        className="h-8 rounded-md text-xs font-mono"
                      >
                        {p.name}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Conversion Result Box */}
              <div className="mt-6 rounded-lg border border-primary/20 bg-primary/5 p-4">
                <div className="flex items-center gap-2 text-xs font-mono text-primary font-medium">
                  <Sparkles className="size-3.5" />
                  <span>Natija va Matematik ifoda:</span>
                </div>
                <div className="mt-3 space-y-2 font-mono text-sm">
                  <p>
                    <span className="text-muted-foreground">Boshlang‘ich:</span>{" "}
                    <span className="font-semibold">{convertValue} {selectedPrefix.name.split(" ")[0]}</span>
                  </p>
                  <p>
                    <span className="text-muted-foreground">SI ifodasi:</span>{" "}
                    <MathContent
                      content={`$$${convertValue} \\times ${selectedPrefix.power} = ${convertedStandard.toExponential(4).replace("e+", " \\times 10^{").replace("e-", " \\times 10^{-") + "}"}$$`}
                    />
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* 3. 7 ta Asosiy Birlik Ma'lumotnomasi */}
          <TabsContent value="baseunits" className="mt-5">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {SI_BASE_UNITS.map((item) => (
                <div key={item.quantity} className="rounded-lg border border-border bg-card p-4 transition hover:border-primary/40">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-sm">{item.quantity}</span>
                    <span className="rounded-md bg-primary/10 px-2 py-0.5 font-mono text-xs font-bold text-primary">
                      {item.unitSymbol}
                    </span>
                  </div>
                  <p className="mt-1 font-mono text-xs text-muted-foreground">
                    Belgisi: {item.symbol} · Birligi: {item.unit}
                  </p>
                  <p className="mt-2.5 text-[11px] leading-4 text-muted-foreground/90 border-t border-border/50 pt-2">
                    {item.standard}
                  </p>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
