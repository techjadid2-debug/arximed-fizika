"use client";

import { Volume2, VolumeX } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { isAudioMuted, setAudioMuted } from "@/lib/sound";

export function AudioToggle() {
  const [muted, setMuted] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    setMuted(isAudioMuted());

    const handleToggle = () => setMuted(isAudioMuted());
    window.addEventListener("arximed_audio_toggle", handleToggle);
    return () => window.removeEventListener("arximed_audio_toggle", handleToggle);
  }, []);

  if (!mounted) return null;

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setAudioMuted(!muted)}
          className="size-9 rounded-md text-muted-foreground hover:text-foreground"
          aria-label={muted ? "Ovozni yoqish" : "Ovozni o‘chirish"}
        >
          {muted ? <VolumeX className="size-4 text-rose-500" /> : <Volume2 className="size-4 text-primary" />}
        </Button>
      </TooltipTrigger>
      <TooltipContent side="bottom">
        <p className="text-xs">{muted ? "Ovozni yoqish (SFX)" : "Ovozni o‘chirish"}</p>
      </TooltipContent>
    </Tooltip>
  );
}
