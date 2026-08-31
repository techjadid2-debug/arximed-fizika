import { describe, expect, it } from "vitest";

import {
  advanceProjectile,
  createProjectileState,
  DEFAULT_PROJECTILE_CONFIG,
  FIXED_TIME_STEP,
  getProjectileTelemetry,
} from "@/lib/physics/projectile";

describe("projectile engine", () => {
  it("produces identical results for identical fixed-step runs", () => {
    const first = createProjectileState(DEFAULT_PROJECTILE_CONFIG);
    const second = createProjectileState(DEFAULT_PROJECTILE_CONFIG);

    for (let index = 0; index < 120; index += 1) {
      advanceProjectile(first, DEFAULT_PROJECTILE_CONFIG, FIXED_TIME_STEP);
      advanceProjectile(second, DEFAULT_PROJECTILE_CONFIG, FIXED_TIME_STEP);
    }

    expect(first).toEqual(second);
  });

  it("lands close to the analytical range", () => {
    const config = {
      ...DEFAULT_PROJECTILE_CONFIG,
      initialSpeed: 20,
      launchAngle: 45,
      gravity: 10,
    };
    const state = createProjectileState(config);

    for (let index = 0; index < 600 && state.status !== "landed"; index += 1) {
      advanceProjectile(state, config, FIXED_TIME_STEP);
    }

    const telemetry = getProjectileTelemetry(state, config);
    expect(telemetry.status).toBe("landed");
    expect(telemetry.horizontalRange).toBeCloseTo(40, 0);
    expect(telemetry.elapsed).toBeCloseTo(2.83, 1);
  });

  it("keeps total mechanical energy nearly constant in flight", () => {
    const state = createProjectileState(DEFAULT_PROJECTILE_CONFIG);
    const initialEnergy = getProjectileTelemetry(
      state,
      DEFAULT_PROJECTILE_CONFIG,
    ).totalEnergy;

    for (let index = 0; index < 90; index += 1) {
      advanceProjectile(state, DEFAULT_PROJECTILE_CONFIG, FIXED_TIME_STEP);
    }

    const laterEnergy = getProjectileTelemetry(
      state,
      DEFAULT_PROJECTILE_CONFIG,
    ).totalEnergy;
    expect(laterEnergy).toBeCloseTo(initialEnergy, 8);
  });
});
