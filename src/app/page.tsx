import Link from "next/link";
import { ArrowRight, Atom, Gauge, MoveUpRight } from "lucide-react";

import { PhysicsCanvas2D } from "@/components/canvas/PhysicsCanvas2D";
import {
  SimulationControls,
  SimulationTelemetry,
} from "@/components/canvas/SimulationOverlay";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-dvh overflow-hidden bg-black text-zinc-50">
      <nav className="mx-auto flex h-16 max-w-[1440px] items-center justify-between border-x border-zinc-900 px-5 sm:px-8">
        <Link
          href="/"
          className="flex min-h-11 items-center gap-2 text-sm font-semibold tracking-tight"
          aria-label="Physica bosh sahifasi"
        >
          <Atom className="size-4" aria-hidden="true" />
          Physica
        </Link>
        <Button
          asChild
          variant="ghost"
          className="min-h-11 text-xs text-zinc-400 hover:bg-zinc-900 hover:text-zinc-50"
        >
          <Link href="/dashboard">
            Kurslar <MoveUpRight className="size-3.5" aria-hidden="true" />
          </Link>
        </Button>
      </nav>

      <div className="mx-auto grid min-h-[calc(100dvh-4rem)] max-w-[1440px] border border-b-0 border-zinc-900 lg:grid-cols-[43%_57%]">
        <section className="flex flex-col justify-between px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
          <div>
            <div className="mb-10 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
              <Gauge className="size-3.5" aria-hidden="true" />
              Tushunish · Tajriba · Natija
            </div>
            <h1 className="max-w-xl text-5xl font-semibold leading-[0.98] tracking-[-0.065em] text-zinc-50 sm:text-6xl lg:text-7xl">
              Fizikani formuladan oldin his qiling.
            </h1>
            <p className="mt-7 max-w-md text-base leading-7 text-zinc-400">
              AP Physics va milliy sertifikat uchun jonli simulyatsiyalar,
              konseptual savollar va qadamma-qadam masalalar.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button
                asChild
                className="min-h-12 rounded-none bg-zinc-50 px-6 text-black hover:bg-zinc-200"
              >
                <Link href="/learn/kinematics/projectile-motion">
                  Birinchi tajribani boshlash
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="min-h-12 rounded-none border-zinc-800 bg-transparent px-6 text-zinc-300 hover:bg-zinc-900 hover:text-zinc-50"
              >
                <Link href="/dashboard">Yo‘nalishlarni ko‘rish</Link>
              </Button>
            </div>
          </div>

          <div className="mt-16 grid max-w-md grid-cols-3 border-y border-zinc-900 py-4 font-mono text-[10px] uppercase tracking-[0.13em] text-zinc-600 lg:mt-10">
            <span>13+ yosh</span>
            <span className="text-center">AP 1 / AP 2</span>
            <span className="text-right">60 Hz engine</span>
          </div>
        </section>

        <section className="relative min-h-[52svh] overflow-hidden border-t border-zinc-900 bg-zinc-950 lg:min-h-0 lg:border-l lg:border-t-0">
          <PhysicsCanvas2D />
          <SimulationTelemetry />
          <SimulationControls />
          <p className="pointer-events-none absolute bottom-5 left-5 max-w-48 font-mono text-[9px] uppercase leading-4 tracking-[0.15em] text-zinc-600 sm:left-6">
            θ va v₀ ni keyingi sahifada o‘zgartiring
          </p>
        </section>
      </div>
    </main>
  );
}
