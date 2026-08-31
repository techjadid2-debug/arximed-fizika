import { create } from "zustand";

import { DEFAULT_PROJECTILE_CONFIG } from "@/lib/physics/projectile";
import type { ProjectileConfig, Telemetry } from "@/types/physics";

type EditableProjectileParameter = Exclude<keyof ProjectileConfig, "origin">;

interface PhysicsStore {
  parameters: Omit<ProjectileConfig, "origin">;
  isRunning: boolean;
  resetVersion: number;
  telemetry: Telemetry | null;
  setParameter: (key: EditableProjectileParameter, value: number) => void;
  setRunning: (isRunning: boolean) => void;
  toggleRunning: () => void;
  restart: () => void;
  reset: () => void;
  publishTelemetry: (telemetry: Telemetry) => void;
}

const initialParameters = {
  initialSpeed: DEFAULT_PROJECTILE_CONFIG.initialSpeed,
  launchAngle: DEFAULT_PROJECTILE_CONFIG.launchAngle,
  gravity: DEFAULT_PROJECTILE_CONFIG.gravity,
  mass: DEFAULT_PROJECTILE_CONFIG.mass,
};

export const usePhysicsStore = create<PhysicsStore>((set, get) => ({
  parameters: initialParameters,
  isRunning: true,
  resetVersion: 0,
  telemetry: null,
  setParameter: (key, value) =>
    set((state) => ({
      parameters: { ...state.parameters, [key]: value },
      resetVersion: state.resetVersion + 1,
      isRunning: false,
    })),
  setRunning: (isRunning) => set({ isRunning }),
  toggleRunning: () => {
    const state = get();
    if (!state.isRunning && state.telemetry?.status === "landed") {
      set({ isRunning: true, resetVersion: state.resetVersion + 1 });
      return;
    }
    set({ isRunning: !state.isRunning });
  },
  restart: () =>
    set((state) => ({
      isRunning: true,
      resetVersion: state.resetVersion + 1,
    })),
  reset: () =>
    set((state) => ({
      isRunning: false,
      resetVersion: state.resetVersion + 1,
    })),
  publishTelemetry: (telemetry) => set({ telemetry }),
}));
