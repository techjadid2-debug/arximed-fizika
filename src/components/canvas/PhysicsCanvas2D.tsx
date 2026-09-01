"use client";

import { useEffect, useRef } from "react";

import {
  advanceProjectile,
  createProjectileState,
  FIXED_TIME_STEP,
  getProjectileBounds,
  getProjectileTelemetry,
} from "@/lib/physics/projectile";
import { cn } from "@/lib/utils";
import { usePhysicsStore } from "@/store/usePhysicsStore";
import type {
  PhysicsState,
  ProjectileConfig,
  Vector2D,
} from "@/types/physics";

interface PhysicsCanvas2DProps {
  className?: string;
}

interface Viewport {
  width: number;
  height: number;
  dpr: number;
}

interface Camera {
  originX: number;
  groundY: number;
  scale: number;
}

const MAX_FRAME_DELTA = 0.1;
const TELEMETRY_INTERVAL = 0.1;

function configFromStore(): ProjectileConfig {
  return {
    ...usePhysicsStore.getState().parameters,
    origin: { x: 0, y: 0 },
  };
}

export function PhysicsCanvas2D({ className }: PhysicsCanvas2DProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const stateRef = useRef<PhysicsState | null>(null);
  const configRef = useRef<ProjectileConfig>(configFromStore());
  const trailRef = useRef<Vector2D[]>([]);
  const viewportRef = useRef<Viewport>({ width: 0, height: 0, dpr: 1 });
  const accumulatorRef = useRef(0);
  const lastFrameRef = useRef<number | null>(null);
  const lastTelemetryRef = useRef(0);
  const isRunningRef = useRef(usePhysicsStore.getState().isRunning);
  const isVisibleRef = useRef(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d", { alpha: false });
    if (!context) return;

    let animationFrame = 0;

    const initializeSimulation = () => {
      configRef.current = configFromStore();
      stateRef.current = createProjectileState(configRef.current);
      trailRef.current = [{ ...configRef.current.origin }];
      accumulatorRef.current = 0;
      lastFrameRef.current = null;
      const telemetry = getProjectileTelemetry(
        stateRef.current,
        configRef.current,
      );
      usePhysicsStore.getState().publishTelemetry(telemetry);
    };

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = Math.max(1, Math.round(rect.width));
      const height = Math.max(1, Math.round(rect.height));

      viewportRef.current = { width, height, dpr };
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      context.imageSmoothingEnabled = true;
    };

    const unsubscribe = usePhysicsStore.subscribe((state, previousState) => {
      if (state.isRunning !== previousState.isRunning) {
        isRunningRef.current = state.isRunning;
        lastFrameRef.current = null;
      }

      if (state.resetVersion !== previousState.resetVersion) {
        initializeSimulation();
      }
    });

    const resizeObserver = new ResizeObserver(resizeCanvas);
    resizeObserver.observe(canvas);

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry?.isIntersecting ?? true;
        lastFrameRef.current = null;
      },
      { threshold: 0.01 },
    );
    intersectionObserver.observe(canvas);

    const handleVisibilityChange = () => {
      lastFrameRef.current = null;
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    const frame = (timestamp: number) => {
      const state = stateRef.current;
      const { width, height } = viewportRef.current;

      if (
        state &&
        width > 0 &&
        height > 0 &&
        isVisibleRef.current &&
        !document.hidden
      ) {
        const lastFrame = lastFrameRef.current ?? timestamp;
        const frameDelta = Math.min(
          MAX_FRAME_DELTA,
          Math.max(0, (timestamp - lastFrame) / 1000),
        );
        lastFrameRef.current = timestamp;

        if (isRunningRef.current && state.status !== "landed") {
          accumulatorRef.current += frameDelta;
          let didLand = false;

          while (accumulatorRef.current >= FIXED_TIME_STEP) {
            const status = advanceProjectile(
              state,
              configRef.current,
              FIXED_TIME_STEP,
            );
            accumulatorRef.current -= FIXED_TIME_STEP;

            const lastPoint = trailRef.current.at(-1);
            if (
              !lastPoint ||
              Math.abs(state.position.x - lastPoint.x) > 0.12 ||
              Math.abs(state.position.y - lastPoint.y) > 0.12
            ) {
              trailRef.current.push({ ...state.position });
            }

            if (status === "landed") {
              didLand = true;
              break;
            }
          }

          if (didLand) {
            accumulatorRef.current = 0;
            isRunningRef.current = false;
            usePhysicsStore.getState().setRunning(false);
          }
        }

        const interpolation = Math.min(
          1,
          accumulatorRef.current / FIXED_TIME_STEP,
        );
        drawScene(
          context,
          viewportRef.current,
          state,
          configRef.current,
          trailRef.current,
          interpolation,
        );

        if (timestamp / 1000 - lastTelemetryRef.current >= TELEMETRY_INTERVAL) {
          lastTelemetryRef.current = timestamp / 1000;
          usePhysicsStore
            .getState()
            .publishTelemetry(getProjectileTelemetry(state, configRef.current));
        }
      } else {
        lastFrameRef.current = null;
      }

      animationFrame = window.requestAnimationFrame(frame);
    };

    initializeSimulation();
    resizeCanvas();
    animationFrame = window.requestAnimationFrame(frame);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      unsubscribe();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={cn("block size-full touch-none", className)}
      role="img"
      aria-label="Burchak ostida uchirilgan jismning jonli 2D simulyatsiyasi"
    >
      Brauzeringiz HTML Canvas elementini qo‘llab-quvvatlamaydi.
    </canvas>
  );
}

function getThemeColors() {
  const isDark =
    typeof document !== "undefined" &&
    document.documentElement.classList.contains("dark");

  return {
    bg: isDark ? "#09090B" : "#FAFAFA",
    grid: isDark ? "#27272A" : "#E4E4E7",
    ground: isDark ? "#52525B" : "#A1A1AA",
    text: isDark ? "#71717A" : "#71717A",
    projectile: isDark ? "#FAFAFA" : "#18181B",
    trail: isDark ? "#71717A" : "#A1A1AA",
    velocity: isDark ? "#FAFAFA" : "#18181B",
    gravity: isDark ? "#A1A1AA" : "#71717A",
    shadow: isDark ? "rgba(250, 250, 250, 0.28)" : "rgba(24, 24, 27, 0.15)",
  };
}

function drawScene(
  context: CanvasRenderingContext2D,
  viewport: Viewport,
  state: PhysicsState,
  config: ProjectileConfig,
  trail: Vector2D[],
  interpolation: number,
) {
  const { width, height } = viewport;
  const camera = getCamera(width, height, config);
  const colors = getThemeColors();
  const renderPosition = {
    x:
      state.previousPosition.x +
      (state.position.x - state.previousPosition.x) * interpolation,
    y:
      state.previousPosition.y +
      (state.position.y - state.previousPosition.y) * interpolation,
  };

  context.clearRect(0, 0, width, height);
  context.fillStyle = colors.bg;
  context.fillRect(0, 0, width, height);

  drawGrid(context, viewport, camera, config, colors);
  drawTrail(context, camera, trail, colors);
  drawProjectile(context, camera, renderPosition, colors);
  drawVector(
    context,
    camera,
    renderPosition,
    state.velocity,
    2.4,
    colors.velocity,
    "v",
  );
  drawVector(
    context,
    camera,
    renderPosition,
    state.acceleration,
    3.2,
    colors.gravity,
    "g",
  );
}

function getCamera(
  width: number,
  height: number,
  config: ProjectileConfig,
): Camera {
  const bounds = getProjectileBounds(config);
  const horizontalPadding = Math.min(52, width * 0.1);
  const topPadding = Math.min(48, height * 0.14);
  const bottomPadding = Math.min(48, height * 0.16);
  const scale = Math.max(
    1,
    Math.min(
      (width - horizontalPadding * 2) / bounds.width,
      (height - topPadding - bottomPadding) / bounds.height,
    ),
  );

  return {
    originX: horizontalPadding,
    groundY: height - bottomPadding,
    scale,
  };
}

function worldToScreen(camera: Camera, point: Vector2D): Vector2D {
  return {
    x: camera.originX + point.x * camera.scale,
    y: camera.groundY - point.y * camera.scale,
  };
}

function drawGrid(
  context: CanvasRenderingContext2D,
  viewport: Viewport,
  camera: Camera,
  config: ProjectileConfig,
  colors: ReturnType<typeof getThemeColors>,
) {
  const bounds = getProjectileBounds(config);
  const gridStep = niceGridStep(bounds.width / 8);

  context.save();
  context.lineWidth = 1;
  context.strokeStyle = colors.grid;
  context.fillStyle = colors.text;
  context.font = '10px "Geist Mono", ui-monospace, monospace';

  for (let x = 0; x <= bounds.width; x += gridStep) {
    const screen = worldToScreen(camera, { x, y: 0 });
    context.beginPath();
    context.moveTo(screen.x, 0);
    context.lineTo(screen.x, viewport.height);
    context.stroke();
    context.fillText(`${Math.round(x)} m`, screen.x + 5, camera.groundY + 17);
  }

  const verticalLines = Math.ceil(bounds.height / gridStep);
  for (let index = 1; index <= verticalLines; index += 1) {
    const y = index * gridStep;
    const screen = worldToScreen(camera, { x: 0, y });
    context.beginPath();
    context.moveTo(0, screen.y);
    context.lineTo(viewport.width, screen.y);
    context.stroke();
    context.fillText(`${Math.round(y)} m`, 8, screen.y - 6);
  }

  context.strokeStyle = colors.ground;
  context.lineWidth = 1.5;
  context.beginPath();
  context.moveTo(0, camera.groundY);
  context.lineTo(viewport.width, camera.groundY);
  context.stroke();
  context.restore();
}

function drawTrail(
  context: CanvasRenderingContext2D,
  camera: Camera,
  trail: Vector2D[],
  colors: ReturnType<typeof getThemeColors>,
) {
  if (trail.length < 2) return;

  context.save();
  context.strokeStyle = colors.trail;
  context.lineWidth = 1.5;
  context.setLineDash([4, 5]);
  context.beginPath();
  trail.forEach((point, index) => {
    const screen = worldToScreen(camera, point);
    if (index === 0) context.moveTo(screen.x, screen.y);
    else context.lineTo(screen.x, screen.y);
  });
  context.stroke();
  context.restore();
}

function drawProjectile(
  context: CanvasRenderingContext2D,
  camera: Camera,
  position: Vector2D,
  colors: ReturnType<typeof getThemeColors>,
) {
  const screen = worldToScreen(camera, position);

  context.save();
  context.shadowBlur = 16;
  context.shadowColor = colors.shadow;
  context.fillStyle = colors.projectile;
  context.beginPath();
  context.arc(screen.x, screen.y, 6, 0, Math.PI * 2);
  context.fill();
  context.restore();
}

function drawVector(
  context: CanvasRenderingContext2D,
  camera: Camera,
  origin: Vector2D,
  vector: Vector2D,
  pixelScale: number,
  color: string,
  label: string,
) {
  const start = worldToScreen(camera, origin);
  const end = {
    x: start.x + vector.x * pixelScale,
    y: start.y - vector.y * pixelScale,
  };
  const angle = Math.atan2(end.y - start.y, end.x - start.x);
  const headLength = 7;

  context.save();
  context.strokeStyle = color;
  context.fillStyle = color;
  context.lineWidth = 1.5;
  context.beginPath();
  context.moveTo(start.x, start.y);
  context.lineTo(end.x, end.y);
  context.stroke();
  context.beginPath();
  context.moveTo(end.x, end.y);
  context.lineTo(
    end.x - headLength * Math.cos(angle - Math.PI / 6),
    end.y - headLength * Math.sin(angle - Math.PI / 6),
  );
  context.lineTo(
    end.x - headLength * Math.cos(angle + Math.PI / 6),
    end.y - headLength * Math.sin(angle + Math.PI / 6),
  );
  context.closePath();
  context.fill();
  context.font = '11px "Geist Mono", ui-monospace, monospace';
  context.fillText(label, end.x + 6, end.y - 5);
  context.restore();
}

function niceGridStep(rawStep: number): number {
  const magnitude = 10 ** Math.floor(Math.log10(Math.max(rawStep, 0.01)));
  const normalized = rawStep / magnitude;
  const nice = normalized < 1.5 ? 1 : normalized < 3.5 ? 2 : 5;
  return nice * magnitude;
}
