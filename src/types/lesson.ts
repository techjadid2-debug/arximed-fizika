/**
 * Dars tuzilmasi: Video → Quiz → Uyga vazifa.
 * Kontent Supabase bazasida saqlanadi, admin panel orqali tahrirlanadi.
 */

export interface QuizOption {
  id: string;
  label: string;
  isCorrect: boolean;
}

export interface QuizQuestion {
  id: string;
  position: number;
  question: string;
  explanation: string;
  options: QuizOption[];
}

export interface PracticeTask {
  id: string;
  position: number;
  prompt: string;
  unit: string;
  answer: number;
  tolerance: number;
  hint: string;
  solution: string;
}

export interface LessonHomework {
  title: string;
  body: string;
  /** Supabase Storage'dagi PDF havolasi. */
  pdfUrl: string | null;
}

export interface Lesson {
  id: string;
  courseSlug: string;
  /** Marshrutdagi raqam: "01", "02", … */
  number: string;
  /** Kurs bo‘yicha global tartib (1..78). */
  position: number;
  title: string;
  intro: string;
  /** YouTube havolasi. Bo‘sh bo‘lsa video bosqichi «tez orada» holatida. */
  videoUrl: string | null;
  videoDurationMin: number | null;
  quiz: QuizQuestion[];
  practice: PracticeTask[];
  homework: LessonHomework;
  isPublished: boolean;
}

export interface CourseModule {
  id: string;
  position: number;
  title: string;
}

/** Yo‘l xaritasi uchun yengil ko‘rinish — quiz va mashqlarsiz. */
export interface LessonSummary {
  id: string;
  number: string;
  position: number;
  title: string;
  moduleId: string | null;
  hasVideo: boolean;
  isPublished: boolean;
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  description: string;
  modules: CourseModule[];
  lessons: LessonSummary[];
}
