// Zero-dependency, zero-latency Web Audio API sound synthesizer for Arximed.uz
// Works 100% offline, requires no network requests, and provides immediate audio feedback.

let audioCtx: AudioContext | null = null;
let isMuted = false;

function getAudioContext(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (!audioCtx) {
    const AudioContextClass =
      window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === "suspended") {
    audioCtx.resume();
  }
  return audioCtx;
}

export function isAudioMuted(): boolean {
  if (typeof window === "undefined") return false;
  const stored = localStorage.getItem("arximed_audio_muted");
  return stored === "true";
}

export function setAudioMuted(muted: boolean): void {
  isMuted = muted;
  if (typeof window !== "undefined") {
    localStorage.setItem("arximed_audio_muted", String(muted));
    window.dispatchEvent(new Event("arximed_audio_toggle"));
  }
}

/**
 * Chime for correct answer (warm rising major chord: C5 -> E5 -> G5)
 */
export function playCorrectSound(): void {
  if (isAudioMuted()) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  const notes = [523.25, 659.25, 783.99]; // C5, E5, G5
  notes.forEach((freq, index) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, ctx.currentTime + index * 0.08);

    gain.gain.setValueAtTime(0, ctx.currentTime + index * 0.08);
    gain.gain.linearRampToValueAtTime(0.18, ctx.currentTime + index * 0.08 + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + index * 0.08 + 0.35);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(ctx.currentTime + index * 0.08);
    osc.stop(ctx.currentTime + index * 0.08 + 0.36);
  });
}

/**
 * Gentle encouraging sound for wrong answer (soft descending tone, not harsh)
 */
export function playWrongSound(): void {
  if (isAudioMuted()) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = "triangle";
  osc.frequency.setValueAtTime(280, ctx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(180, ctx.currentTime + 0.25);

  gain.gain.setValueAtTime(0, ctx.currentTime);
  gain.gain.linearRampToValueAtTime(0.15, ctx.currentTime + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.28);

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start(ctx.currentTime);
  osc.stop(ctx.currentTime + 0.29);
}

/**
 * Triumphant fanfare chord when completing a lesson (+50 XP celebration)
 */
export function playCelebrationSound(): void {
  if (isAudioMuted()) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  // C4, E4, G4, C5 rising arpeggio + triumphant chord
  const chord = [
    { freq: 261.63, time: 0.0 }, // C4
    { freq: 329.63, time: 0.1 }, // E4
    { freq: 392.0, time: 0.2 }, // G4
    { freq: 523.25, time: 0.3 }, // C5
    { freq: 659.25, time: 0.4 }, // E5
    { freq: 783.99, time: 0.5 }, // G5 (sustained)
  ];

  chord.forEach(({ freq, time }) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "triangle";
    osc.frequency.setValueAtTime(freq, ctx.currentTime + time);

    gain.gain.setValueAtTime(0, ctx.currentTime + time);
    gain.gain.linearRampToValueAtTime(0.2, ctx.currentTime + time + 0.03);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + time + 0.6);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(ctx.currentTime + time);
    osc.stop(ctx.currentTime + time + 0.65);
  });
}
