import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Atom,
  Gauge,
  Magnet,
  Orbit,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Kurslar",
};

const tracks = [
  {
    id: "kinematics",
    title: "Kinematika",
    description: "Harakat, tezlik, tezlanish va 2D trayektoriyalar.",
    lessons: "1 / 8 dars",
    icon: Orbit,
    href: "/learn/kinematics/projectile-motion",
    available: true,
  },
  {
    id: "dynamics",
    title: "Dinamika",
    description: "Nyuton qonunlari, kuchlar va ishqalanish.",
    lessons: "0 / 9 dars",
    icon: Gauge,
    href: "#",
    available: false,
  },
  {
    id: "energy",
    title: "Energiya",
    description: "Ish, energiya saqlanishi va impuls.",
    lessons: "0 / 7 dars",
    icon: Atom,
    href: "#",
    available: false,
  },
  {
    id: "electromagnetism",
    title: "Elektromagnetizm",
    description: "Maydonlar, zaryadlar va 3D vektor fazosi.",
    lessons: "0 / 10 dars",
    icon: Magnet,
    href: "#",
    available: false,
  },
];

export default function DashboardPage() {
  return (
    <main className="min-h-dvh bg-black text-zinc-50">
      <header className="border-b border-zinc-900">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
          <Link href="/" className="flex min-h-11 items-center gap-2 text-sm font-semibold">
            <Atom className="size-4" aria-hidden="true" /> Physica
          </Link>
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="min-h-11 text-zinc-400 hover:bg-zinc-900 hover:text-zinc-50"
          >
            <Link href="/">
              <ArrowLeft className="size-4" aria-hidden="true" /> Bosh sahifa
            </Link>
          </Button>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="max-w-2xl">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
            O‘quv yo‘nalishlari
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
            Har bir qonunni tajribada ko‘ring.
          </h1>
          <p className="mt-5 text-base leading-7 text-zinc-400">
            MVP bosqichida Kinematika yo‘nalishining birinchi interaktiv darsi
            ochiq. Qolgan modullar shu engine asosida qo‘shiladi.
          </p>
        </div>

        <div className="mt-12 grid gap-px border border-zinc-800 bg-zinc-800 md:grid-cols-2">
          {tracks.map((track) => {
            const Icon = track.icon;
            const content = (
              <Card className="group h-full rounded-none border-0 bg-black py-0 shadow-none transition-colors hover:bg-zinc-950">
                <CardContent className="flex min-h-64 flex-col p-6 sm:p-7">
                  <div className="flex items-start justify-between">
                    <div className="grid size-10 place-items-center border border-zinc-800 text-zinc-400">
                      <Icon className="size-4" aria-hidden="true" />
                    </div>
                    <Badge
                      variant="outline"
                      className="rounded-none border-zinc-800 font-mono text-[9px] font-normal uppercase tracking-[0.12em] text-zinc-500"
                    >
                      {track.available ? track.lessons : "Tez orada"}
                    </Badge>
                  </div>
                  <div className="mt-auto pt-12">
                    <h2 className="text-xl font-medium tracking-tight text-zinc-100">
                      {track.title}
                    </h2>
                    <p className="mt-2 max-w-sm text-sm leading-6 text-zinc-500">
                      {track.description}
                    </p>
                    {track.available ? (
                      <span className="mt-5 flex items-center gap-2 text-xs text-zinc-300">
                        Davom etish
                        <ArrowRight
                          className="size-3.5 transition-transform group-hover:translate-x-1"
                          aria-hidden="true"
                        />
                      </span>
                    ) : null}
                  </div>
                </CardContent>
              </Card>
            );

            return track.available ? (
              <Link key={track.id} href={track.href} className="block">
                {content}
              </Link>
            ) : (
              <div key={track.id} aria-disabled="true">
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
