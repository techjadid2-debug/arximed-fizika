export type Vector2D = Readonly<{
  x: number;
  y: number;
}>;

export type MutableVector2D = {
  x: number;
  y: number;
};

export type StepType =
  | "INTUITIVE_EXPLORATION"
  | "THEORY_EQUATION"
  | "CONCEPT_QUIZ"
  | "PROBLEM_SOLVING";

export type SimulationRenderer = "CANVAS_2D" | "WEBGL_3D";
export type SimulationModel = "PROJECTILE" | "FRICTION" | "PENDULUM";

export interface LessonParameter {
  id: "initialSpeed" | "launchAngle" | "gravity" | "mass";
  label: string;
  symbol: string;
  unit: string;
  min: number;
  max: number;
  step: number;
  defaultValue: number;
}

interface BaseLessonStep {
  id: string;
  type: StepType;
  title: string;
  eyebrow: string;
  estimatedMinutes: number;
}

export interface IntuitiveExplorationStep extends BaseLessonStep {
  type: "INTUITIVE_EXPLORATION";
  prompt: string;
  goal: string;
  hint: string;
  simulation: {
    renderer: SimulationRenderer;
    model: SimulationModel;
  };
  parameters: LessonParameter[];
}

export interface TheoryEquationStep extends BaseLessonStep {
  type: "THEORY_EQUATION";
  content: string;
  equations: Array<{
    label: string;
    latex: string;
    note: string;
  }>;
  takeaways: string[];
}

export interface QuizOption {
  id: string;
  label: string;
  feedback: string;
}

export interface ConceptQuizStep extends BaseLessonStep {
  type: "CONCEPT_QUIZ";
  question: string;
  options: QuizOption[];
  correctOptionId: string;
  explanation: string;
}

export interface ProblemSolvingStep extends BaseLessonStep {
  type: "PROBLEM_SOLVING";
  prompt: string;
  givens: Array<{
    symbol: string;
    value: number;
    unit: string;
  }>;
  answer: {
    value: number;
    tolerance: number;
    unit: string;
  };
  solution: string;
}

export type LessonStep =
  | IntuitiveExplorationStep
  | TheoryEquationStep
  | ConceptQuizStep
  | ProblemSolvingStep;

export interface Lesson {
  id: string;
  trackId: string;
  title: string;
  subtitle: string;
  description: string;
  level: "FOUNDATION" | "AP_PHYSICS_1" | "AP_PHYSICS_2" | "NATIONAL_CERT";
  estimatedMinutes: number;
  steps: LessonStep[];
}

export interface ProjectileConfig {
  initialSpeed: number;
  launchAngle: number;
  gravity: number;
  mass: number;
  origin: Vector2D;
}

export type SimulationStatus = "idle" | "flying" | "landed";

export interface PhysicsState {
  position: MutableVector2D;
  previousPosition: MutableVector2D;
  velocity: MutableVector2D;
  acceleration: MutableVector2D;
  elapsed: number;
  maxHeight: number;
  horizontalRange: number;
  status: SimulationStatus;
}

export interface Telemetry {
  position: Vector2D;
  velocity: Vector2D;
  acceleration: Vector2D;
  speed: number;
  elapsed: number;
  maxHeight: number;
  horizontalRange: number;
  kineticEnergy: number;
  potentialEnergy: number;
  totalEnergy: number;
  status: SimulationStatus;
}
