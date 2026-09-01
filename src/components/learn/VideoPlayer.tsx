"use client";

import { PlayCircle, Video } from "lucide-react";

import { youtubeEmbedUrl } from "@/lib/youtube";

interface VideoPlayerProps {
  url: string | null;
  title: string;
  emptyLabel: string;
}

/**
 * YouTube video 16:9 ramkada. `youtube-nocookie` domeni ishlatiladi —
 * kuzatuv kamroq va oxirida boshqa kanallarning videosi chiqmaydi.
 */
export function VideoPlayer({ url, title, emptyLabel }: VideoPlayerProps) {
  const embed = youtubeEmbedUrl(url);

  if (!embed) {
    return (
      <div className="flex aspect-video w-full flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-border bg-muted/40 text-muted-foreground">
        <PlayCircle className="size-8" strokeWidth={1.25} />
        <p className="text-sm">{emptyLabel}</p>
      </div>
    );
  }

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-border bg-black">
      <iframe
        src={embed}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
        className="absolute inset-0 size-full"
      />
    </div>
  );
}

export function VideoBadge({ minutes, locale = "uz" }: { minutes: number | null; locale?: string }) {
  if (!minutes) return null;
  const label = locale === "uz" ? "daq" : locale === "en" ? "min" : "мин";
  return (
    <span className="flex min-h-8 items-center gap-1.5 rounded-md border border-border px-2.5 font-mono text-xs text-muted-foreground">
      <Video className="size-3.5" />
      {minutes} {label}
    </span>
  );
}
