# Physica / Arximed — Loyiha Arxitekturasi va Texnik Hujjati

Ushbu hujjat loyihaning texnik tuzilishi, ma’lumotlar oqimi, komponentlar tizimi va kelgusi rivojlantirish qoidalarini to‘liq bayon qiladi.

---

## 1. Texnologik Stack

* **Freyamvork:** Next.js 16.3.3 (App Router, Turbopack)
* **Til:** TypeScript (Strict Mode)
* **Frontend UI:** React 19, Tailwind CSS 4, shadcn/ui komponentlari, Lucide React piktogrammalari
* **Matematik formulalar:** KaTeX (`remark-math`, `rehype-katex`, `react-markdown`)
* **Fizika simulyatsiyasi:** HTML5 Canvas (2D Velocity Verlet, 60fps fixed time-step)
* **Holat boshqaruvi (State Management):** Zustand (`useProgressStore`, `useLessonStore`, `usePhysicsStore`)
* **Ma’lumotlar bazasi va Auth:** Supabase (PostgreSQL, Row Level Security)
* **Testlash:** Vitest (Birlik va mantiqiy testlar)

---

## 2. Loyiha Papkalari Tuzilishi

```
Arximed.uz/
├── docs/                               # Loyiha hujjatlari
│   ├── ILK_QADAM_KURSI.md              # Maktab o‘quvchilari uchun darslar metodikasi va dasturi
│   ├── PROJECT_ARCHITECTURE.md         # Ushbu texnik arxitektura hujjati
│   ├── ADMIN.md                        # Supabase va admin boshqaruv qo‘llanmasi
│   └── physica-ui-ux-roadmap-plan.md   # Dizayn va UX yo‘nalishlari
├── public/                             # Statik fayllar (rasmlar, PDF materiallar, fontlar)
├── scripts/                            # Yordamchi skriptlar
│   ├── seed-supabase.mjs               # Supabase bazasiga kurs ma’lumotlarini yuklash
│   ├── make-admin.mjs                  # Yangi admin yaratish
│   └── create_lesson01_homework_pdf.py # 01-dars uchun PDF generatsiyasi
├── src/
│   ├── app/                            # Next.js App Router marshrutlari
│   │   ├── [locale]/                   # Ko‘p tilli marshrutlar (/uz, /en, /ru)
│   │   │   ├── courses/ilk-qadam/      # 78 darslik to‘liq yo‘l xaritasi (Roadmap)
│   │   │   └── learn/[course]/[lesson]/# Dars Cheatsheet va interaktiv ko‘rinish
│   │   └── admin/                      # Admin paneli (/admin, /admin/lessons/[number])
│   ├── components/
│   │   ├── learn/                      # Dars o‘tish va o‘rganish komponentlari
│   │   │   ├── LessonCheatsheetView.tsx# O‘qituvchi cheatsheet / spargalka ko‘rinishi
│   │   │   ├── CourseRoadmap.tsx       # 78 darslik interaktiv yo‘l xaritasi
│   │   │   ├── LessonShell.tsx         # Dars o‘tish qobig‘i (Slayd -> Quiz -> Uyga vazifa)
│   │   │   ├── LessonSlideDeck.tsx     # 12 ta interaktiv slaydlar ko‘rinishi
│   │   │   ├── MathContent.tsx         # KaTeX formulalarini render qiluvchi komponent
│   │   │   ├── PracticeBlock.tsx       # Sonli javobli interaktiv masalalar bloki
│   │   │   └── labs/                   # Virtual laboratoriyalar (MeasurementLab.tsx)
│   │   ├── canvas/                     # Fizika simulyatsiyalari
│   │   │   ├── PhysicsCanvas2D.tsx     # Kinematika / otilgan jism simulyatori
│   │   │   └── SimulationOverlay.tsx   # Telemetriya va nazorat tugmalari
│   │   └── ui/                         # shadcn/ui umumiy komponentlari (Button, Card, Tabs, ...)
│   ├── data/
│   │   ├── cheatsheets/ilk-qadam.ts    # 1-chorak (16 dars) to‘liq spargalkalari va fallback
│   │   ├── courses/ilk-qadam.ts        # 5 chorak va 78 dars metama’lumotlari
│   │   └── lessons/ilk-qadam-01.ts     # 01-darsning 12 slaydi, 10 quiz va 10 amaliy masalasi
│   ├── lib/                            # Yordamchi kutubxonalar va server amallari
│   │   ├── physics/projectile.ts       # Fizika simulyatsiyasi matematik formulalari
│   │   ├── lessons.ts                  # Supabase dan darslarni o‘qish
│   │   └── i18n.ts                     # Tillarni aniqlash va tekshirish
│   ├── store/                          # Zustand do‘konlari
│   │   ├── useProgressStore.ts         # Foydalanuvchi yutuqlari (XP, streak, completed)
│   │   ├── useLessonStore.ts           # Dars bosqichlari va urinishlari
│   │   └── usePhysicsStore.ts          # Simulyatsiya parametrlari va telemetriya
│   └── types/                          # TypeScript interfeyslari (lesson.ts, physics.ts)
└── supabase/
    ├── migrations/0001_init.sql        # Supabase sxemasi va RLS qoidalari
    └── seed/ilk-qadam.json             # 78 darslik dastlabki ma’lumotlar to‘plami
```

---

## 3. Ma’lumotlar Oqimi (Data Flow)

### A. Yo‘l Xaritasi (Roadmap)
1. Foydalanuvchi `/[locale]/courses/ilk-qadam` ga kiradi.
2. `IlkQadamRoadmapPage` avval Supabase bazasidan ma’lumot olishga urinadi.
3. Agar baza javob bermasa yoki ulanmagan bo‘lsa, `src/data/courses/ilk-qadam.ts` dagi to‘liq statik ro‘yxatdan foydalanadi — natijada sahifa har qanday sharoitda xatosiz ochiladi.
4. `CourseRoadmap` barcha 78 ta darsni ochiq va bosiladigan holda ko‘rsatadi. 1-chorak darslari yonida **"Spargalka tayyor"** belgisi turadi.

### B. Dars Sahifasi (Lesson Page)
1. Foydalanuvchi `/[locale]/learn/ilk-qadam/[lesson]` (masalan `02`) ga kiradi.
2. `getLessonCheatsheet(number)` orqali o‘qituvchi cheatsheet ma’lumotlari olinadi.
3. Sahifada `LessonCheatsheetView` asosiy ko‘rinish sifatida ochiladi:
   - Dars boshidagi qiziqarli muammo (Hook)
   - Bosqichma-bosqich o‘rgatish qadamlari va doska eslatmalari
   - Asosiy formulalar doskasi (KaTeX)
   - Namunaviy masalalar va yechimlari
   - O‘quvchilar ko‘p qiladigan xatolar
   - Hayotiy misollar
4. Agar darsda o‘quvchi slaydlari va laboratoriya bo‘lsa (masalan `01`), sahifa yuqorisida **Tabs** chiqadi va bir marta bosish bilan "O‘quvchi Ko‘rinishi"ga o‘tish mumkin bo‘ladi.

---

## 4. Testlash va Sifat Nazorati

Loyihada barcha asosiy mantiqlar Vitest orqali qoplangan:
* `src/data/cheatsheets/ilk-qadam.test.ts` — 1-chorakning 16 darsi to‘liqligi va 17-78 darslar fallback'i.
* `src/data/lessons/ilk-qadam-01.test.ts` — 01-dars slaydlar, testlar va masalalar to‘liqligi.
* `src/lib/physics/projectile.test.ts` — Fizika dvigatelining matematik aniqligi.
* `src/components/learn/roadmap.test.ts` — Yo‘l xaritasi mantiqiy funksiyalari.
* `src/store/useProgressStore.test.ts` — XP, streak va takrorlash algoritmi.

Testlarni ishga tushirish:
```bash
npm test
```

Ishlab chiqarish (Production) build tekshiruvi:
```bash
npm run build
```
