import type {
  PhysicsState,
  ProjectileConfig,
  SimulationStatus,
  Telemetry,
} from "@/types/physics";

export const FIXED_TIME_STEP = 1 / 60;

export const DEFAULT_PROJECTILE_CONFIG: ProjectileConfig = {
  initialSpeed: 24,
  launchAngle: 45,
  gravity: 9.81,
  mass: 1,
  origin: { x: 0, y: 0 },
};

export function createProjectileState(config: ProjectileConfig): PhysicsState {
  const angle = degreesToRadians(config.launchAngle);

  return {
    position: { ...config.origin },
    previousPosition: { ...config.origin },
    velocity: {
      x: config.initialSpeed * Math.cos(angle),
      y: config.initialSpeed * Math.sin(angle),
    },
    acceleration: { x: 0, y: -config.gravity },
    elapsed: 0,
    maxHeight: config.origin.y,
    horizontalRange: 0,
    status: "idle",
  };
}

/**
 * Velocity Verlet integration. The function mutates one long-lived state object
 * so the 60 Hz physics loop does not allocate or trigger React renders.
 */
export function advanceProjectile(
  state: PhysicsState,
  config: ProjectileConfig,
  dt = FIXED_TIME_STEP,
): SimulationStatus {
  if (state.status === "landed" || dt <= 0) return state.status;

  state.status = "flying";
  state.previousPosition.x = state.position.x;
  state.previousPosition.y = state.position.y;

  state.position.x +=
    state.velocity.x * dt + 0.5 * state.acceleration.x * dt * dt;
  state.position.y +=
    state.velocity.y * dt + 0.5 * state.acceleration.y * dt * dt;
  state.velocity.x += state.acceleration.x * dt;
  state.velocity.y += state.acceleration.y * dt;
  state.elapsed += dt;
  state.maxHeight = Math.max(state.maxHeight, state.position.y);
  state.horizontalRange = Math.max(
    0,
    state.position.x - config.origin.x,
  );

  if (state.position.y <= config.origin.y && state.elapsed > dt) {
    state.position.y = config.origin.y;
    state.status = "landed";
  }

  return state.status;
}

export function getProjectileTelemetry(
  state: PhysicsState,
  config: ProjectileConfig,
): Telemetry {
  const speedSquared =
    state.velocity.x * state.velocity.x + state.velocity.y * state.velocity.y;
  const kineticEnergy = 0.5 * config.mass * speedSquared;
  const potentialEnergy =
    config.mass * config.gravity * Math.max(0, state.position.y);

  return {
    position: { ...state.position },
    velocity: { ...state.velocity },
    acceleration: { ...state.acceleration },
    speed: Math.sqrt(speedSquared),
    elapsed: state.elapsed,
    maxHeight: state.maxHeight,
    horizontalRange: state.horizontalRange,
    kineticEnergy,
    potentialEnergy,
    totalEnergy: kineticEnergy + potentialEnergy,
    status: state.status,
  };
}

export function getProjectileBounds(config: ProjectileConfig) {
  const angle = degreesToRadians(config.launchAngle);
  const speedSquared = config.initialSpeed * config.initialSpeed;
  const range =
    (speedSquared * Math.sin(2 * angle)) / Math.max(config.gravity, 0.01);
  const height =
    (speedSquared * Math.sin(angle) ** 2) /
    (2 * Math.max(config.gravity, 0.01));

  return {
    width: Math.max(12, range * 1.15),
    height: Math.max(8, height * 1.45),
  };
}

export function degreesToRadians(degrees: number): number {
  return (degrees * Math.PI) / 180;
}
