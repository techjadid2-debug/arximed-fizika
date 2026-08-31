export const locales = ["uz", "en", "ru"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "uz";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export const localeLabels: Record<Locale, string> = {
  uz: "O‘zbekcha",
  en: "English",
  ru: "Русский",
};

export const ui = {
  uz: {
    courses: "Kurslar",
    roadmap: "Yo‘l xaritasi",
    start: "Boshlash",
    continue: "Davom etish",
    comingSoon: "Tez orada",
    lessons: "dars",
    quarters: "chorak",
    sandbox: "Sandbox",
  },
  en: {
    courses: "Courses",
    roadmap: "Roadmap",
    start: "Start",
    continue: "Continue",
    comingSoon: "Coming soon",
    lessons: "lessons",
    quarters: "quarters",
    sandbox: "Sandbox",
  },
  ru: {
    courses: "Курсы",
    roadmap: "Программа",
    start: "Начать",
    continue: "Продолжить",
    comingSoon: "Скоро",
    lessons: "уроков",
    quarters: "четвертей",
    sandbox: "Песочница",
  },
} as const;
