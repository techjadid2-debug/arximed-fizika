import type { Locale } from "@/lib/i18n";
import type { Lesson, PracticeTask, QuizQuestion } from "@/types/lesson";
import type { LessonSlide } from "./ilk-qadam-01";

export const lesson10Slides: Record<Locale, LessonSlide[]> = {
  uz: [
    {
      id: 1,
      eyebrow: "01 / Yakuniy Ko‘rik",
      title: "2-Checkpoint: Dinamika Xulosasi",
      content:
        "Ajoyib natija! Siz fizikaning eng buyuk bo‘limlaridan biri — **Dinamika va Nyuton qonunlari**ni (06–10 darslar) muvaffaqiyatli yakunladingiz.\n\nUshbu dars — maxsus sinov darsi bo‘lib, bilimlaringizni sinash uchun **10 talik test** (5 ta tezkor nazariy savol va 5 ta amaliy hisoblash masalasi)dan iborat.",
      badge: "Checkpoint 2",
      highlight: "Dinamika bo‘yicha 10 talik test orqali o‘z bilimingizni 100% tekshirib oling!",
    },
    {
      id: 2,
      eyebrow: "02 / 6-Dars",
      title: "Nyutonning 1-Qonuni va Inersiya",
      content:
        "Agar jismga ta'sir qiluvchi kuchlar yig‘indisi nolga teng bo‘lsa, jism tinch turadi yoki to‘g‘ri chiziqli tekis harakat qiladi:\n\n$$\\sum \\vec{F} = 0 \\implies \\vec{v} = \\text{const}$$\n\nMassa ($m$) — jismning inersiya o‘lchovidir.",
      badge: "Formulalar 6",
      formula: "\\sum \\vec{F} = 0 \\implies \\vec{v} = \\text{const}",
    },
    {
      id: 3,
      eyebrow: "03 / 7-Dars",
      title: "Nyutonning 2-Qonuni (F = ma)",
      content:
        "Kuch va tezlanish bog‘liqligi — klassik mexanikaning bosh formulasi:\n\n* **Kuch:** $F = m \\cdot a$\n* **Tezlanish:** $a = \\frac{F}{m}$\n* **Massa:** $m = \\frac{F}{a}$\n\nKuch va tezlanish yo‘nalishlari har doim bir xil bo‘ladi.",
      badge: "Formulalar 7",
      formula: "F = ma, \\quad a = \\frac{F}{m}",
    },
    {
      id: 4,
      eyebrow: "04 / 8-Dars",
      title: "Nyutonning 3-Qonuni: Ta’sir va Aks Ta’sir",
      content:
        "Tabiatda kuchlar faqat juft holda uchraydi:\n\n* Modul jihatdan teng: $|F_1| = |F_2|$\n* Yo‘nalish jihatdan qarama-qarshi: $\\vec{F}_1 = -\\vec{F}_2$\n* Turli jismlarga qo‘yiladi, shuning uchun bir-birini yo‘qotmaydi!",
      badge: "Formulalar 8",
      formula: "\\vec{F}_{12} = -\\vec{F}_{21}",
    },
    {
      id: 5,
      eyebrow: "05 / 9–10 Darslar",
      title: "Og‘irlik va Ishqalanish Kuchlari",
      content:
        "1. **Og‘irlik kuchi:** $F_{\\text{og‘}} = m \\cdot g$ ($g \\approx 10\\text{ m/s}^2$).\n2. **Liftda vazn:** $P = m(g \\pm a)$.\n3. **Sirpanish ishqalanish kuchi:** $F_{\\text{ishq}} = \\mu m g$.\n\nIshqalanish kuchi sirt yuzasi maydoniga bog‘liq emas!",
      badge: "Formulalar 9-10",
      formula: "F_{\\text{og‘}} = mg, \\quad F_{\\text{ishq}} = \\mu mg",
    },
    {
      id: 6,
      eyebrow: "06 / Qoidalar",
      title: "Sinovdan O‘tish Tartibi",
      content:
        "1. Avval quyidagi **5 ta savol**ga javob bering.\n2. So‘ngra qog‘oz va qalam bilan **5 ta masala**ni qadamma-qadam yeching va javoblarini kiriting.\n3. Har 5 darsda o‘tkaziladigan bunday sinovlar sizni mustahkam bilimga ega qiladi!",
      badge: "Start",
      highlight: "Oq yo‘l! Dinamika sinovini boshlaymiz!",
    },
  ],
  en: [
    {
      id: 1,
      eyebrow: "01 / Overview",
      title: "Checkpoint 2: Dynamics Review",
      content:
        "Congratulations on completing the core dynamics lessons (06–10)!\n\nThis is a special checkpoint lesson consisting of a **10-item test** (5 conceptual questions + 5 calculation problems) to cement your understanding.",
      badge: "Checkpoint 2",
      highlight: "Test your mastery of Newton's laws and forces with 10 questions and problems!",
    },
    {
      id: 2,
      eyebrow: "02 / Lesson 6",
      title: "Newton's 1st Law and Inertia",
      content:
        "An object maintains constant velocity when net force is zero:\n$$\\sum \\vec{F} = 0 \\implies \\vec{v} = \\text{const}$$\nMass is the quantitative measure of inertia.",
      badge: "Formulas 6",
      formula: "\\sum \\vec{F} = 0 \\implies \\vec{v} = \\text{const}",
    },
    {
      id: 3,
      eyebrow: "03 / Lesson 7",
      title: "Newton's 2nd Law (F = ma)",
      content:
        "The core equation of dynamics:\n* Force: $F = m \\cdot a$\n* Acceleration: $a = F / m$\nForce and acceleration always share the same direction.",
      badge: "Formulas 7",
      formula: "F = ma, \\quad a = \\frac{F}{m}",
    },
    {
      id: 4,
      eyebrow: "04 / Lesson 8",
      title: "Newton's 3rd Law: Action & Reaction",
      content:
        "Forces always come in interacting pairs:\n* Equal in magnitude: $|F_1| = |F_2|$\n* Opposite in direction: $\\vec{F}_1 = -\\vec{F}_2$\n* Act on different bodies, so they never cancel!",
      badge: "Formulas 8",
      formula: "\\vec{F}_{12} = -\\vec{F}_{21}",
    },
    {
      id: 5,
      eyebrow: "05 / Lessons 9–10",
      title: "Gravity and Friction",
      content:
        "1. Gravity force: $F_{\\text{grav}} = mg$ ($g \\approx 10\\text{ m/s}^2$).\n2. Apparent weight in elevators: $P = m(g \\pm a)$.\n3. Kinetic friction on flat surface: $F_{\\text{fric}} = \\mu mg$.",
      badge: "Formulas 9-10",
      formula: "F_{\\text{grav}} = mg, \\quad F_{\\text{fric}} = \\mu mg",
    },
    {
      id: 6,
      eyebrow: "06 / Instructions",
      title: "Checkpoint Instructions",
      content:
        "1. Answer the 5 theoretical questions.\n2. Work through the 5 calculation problems step by step.\n3. Regular checkpoints ensure lasting mastery.",
      badge: "Ready",
      highlight: "Good luck on your second checkpoint!",
    },
  ],
  ru: [
    {
      id: 1,
      eyebrow: "01 / Обзор",
      title: "Чекпоинт 2: Итоги динамики",
      content:
        "Поздравляем с завершением уроков динамики и законов Ньютона (06–10)!\n\nЭтот проверочный урок содержит **тест из 10 заданий** (5 теоретических вопросов + 5 расчетных задач).",
      badge: "Чекпоинт 2",
      highlight: "Проверьте свои знания в тесте из 10 заданий по динамике!",
    },
    {
      id: 2,
      eyebrow: "02 / Урок 6",
      title: "Первый закон Ньютона и инерция",
      content:
        "Тело сохраняет постоянную скорость, если равнодействующая сил равна нулю:\n$$\\sum \\vec{F} = 0 \\implies \\vec{v} = \\text{const}$$\nМасса — мера инертности тела.",
      badge: "Формулы 6",
      formula: "\\sum \\vec{F} = 0 \\implies \\vec{v} = \\text{const}",
    },
    {
      id: 3,
      eyebrow: "03 / Урок 7",
      title: "Второй закон Ньютона (F = ma)",
      content:
        "Главный закон динамики:\n* Сила: $F = m \\cdot a$\n* Ускорение: $a = F / m$\nВекторы силы и ускорения всегда сонаправлены.",
      badge: "Формулы 7",
      formula: "F = ma, \\quad a = \\frac{F}{m}",
    },
    {
      id: 4,
      eyebrow: "04 / Урок 8",
      title: "Третий закон Ньютона",
      content:
        "Силы всегда возникают парами:\n* Равны по модулю: $|F_1| = |F_2|$\n* Противоположны по направлению: $\\vec{F}_1 = -\\vec{F}_2$\n* Приложены к разным телам и не компенсируют друг друга!",
      badge: "Формулы 8",
      formula: "\\vec{F}_{12} = -\\vec{F}_{21}",
    },
    {
      id: 5,
      eyebrow: "05 / Уроки 9–10",
      title: "Сила тяжести и трение",
      content:
        "1. Сила тяжести: $F_{\\text{тяж}} = mg$ ($g \\approx 10\\text{ м/с}^2$).\n2. Вес в лифте: $P = m(g \\pm a)$.\n3. Сила трения скольжения: $F_{\\text{тр}} = \\mu mg$.",
      badge: "Формулы 9-10",
      formula: "F_{\\text{тяж}} = mg, \\quad F_{\\text{тр}} = \\mu mg",
    },
    {
      id: 6,
      eyebrow: "06 / Правила",
      title: "Инструкция к тесту",
      content:
        "1. Ответьте на 5 теоретических вопросов.\n2. Решите 5 задач на черновике и введите ответы.\n3. Желаем отличных результатов на втором рубеже!",
      badge: "Старт",
      highlight: "Желаем успехов на втором чекпоинте!",
    },
  ],
};

export const lesson10Quiz: QuizQuestion[] = [
  {
    id: "ilk-10-q1",
    position: 1,
    question: "Nyutonning birinchi qonuniga ko‘ra, jismga ta'sir qiluvchi kuchlar yig‘indisi nolga teng bo‘lsa jism qanday harakatlanadi?",
    explanation: "Kuchlar tenglashganda (F_nat = 0), jism tinch turadi yoki to‘g‘ri chiziqli tekis harakatini davom ettiradi.",
    options: [
      { id: "o1", label: "Tinch turadi yoki to‘g‘ri chiziqli tekis harakat qiladi", isCorrect: true },
      { id: "o2", label: "Doimiy ortib boruvchi tezlanish bilan harakatlanadi", isCorrect: false },
      { id: "o3", label: "Darhol to‘xtaydi", isCorrect: false },
      { id: "o4", label: "Aylana bo‘ylab harakat qiladi", isCorrect: false },
    ],
  },
  {
    id: "ilk-10-q2",
    position: 2,
    question: "Nyutonning ikkinchi qonuniga ko‘ra jism oladigan tezlanish qanday kattaliklarga bog‘liq?",
    explanation: "Tezlanish ta'sir qiluvchi kuchga to‘g‘ri proporsional, jism massasiga teskari proporsionaldir: a = F / m.",
    options: [
      { id: "o1", label: "Kuchga to‘g‘ri va massaga teskari proporsional (a = F / m)", isCorrect: true },
      { id: "o2", label: "Faqat jism tezligiga to‘g‘ri proporsional", isCorrect: false },
      { id: "o3", label: "Faqat vaqtga teskari proporsional", isCorrect: false },
      { id: "o4", label: "Kuch va massaga to‘g‘ri proporsional", isCorrect: false },
    ],
  },
  {
    id: "ilk-10-q3",
    position: 3,
    question: "Nyutonning uchinchi qonuniga ko‘ra ta'sir va aks ta'sir kuchlari haqidagi qaysi fikr to‘g‘ri?",
    explanation: "Ular modul jihatdan teng, yo‘nalish jihatdan qarama-qarshi va ikki xil jismga qo‘yilgan bo‘ladi.",
    options: [
      { id: "o1", label: "Modullari teng, yo‘nalishlari qarama-qarshi va turli jismlarga qo‘yilgan", isCorrect: true },
      { id: "o2", label: "Bitta jismga qo‘yilgani uchun bir-birini yo‘qotadi", isCorrect: false },
      { id: "o3", label: "Ta'sir kuchi har doim aks ta'sir kuchidan katta", isCorrect: false },
      { id: "o4", label: "Faqat jismlar to‘qnashganda paydo bo‘ladi", isCorrect: false },
    ],
  },
  {
    id: "ilk-10-q4",
    position: 4,
    question: "Massa va og‘irlik orasidagi asosiy farq nimada?",
    explanation: "Massa — jismning o‘zgarmas skalyar xossasi (kg), og‘irlik esa tayanchga ko‘rsatiladigan bosim kuchidir (N).",
    options: [
      { id: "o1", label: "Massa kilogrammda (o‘zgarmas), og‘irlik esa Nyutonda o‘lchanadi", isCorrect: true },
      { id: "o2", label: "Massa va og‘irlik bitta tushuncha", isCorrect: false },
      { id: "o3", label: "Og‘irlik skalyar, massa esa vektor kattalik", isCorrect: false },
      { id: "o4", label: "Oyda massa kamayadi, og‘irlik esa o‘zgarmaydi", isCorrect: false },
    ],
  },
  {
    id: "ilk-10-q5",
    position: 5,
    question: "Gorizontal tekislikdagi jism uchun sirpanish ishqalanish kuchi qaysi formula orqali topiladi?",
    explanation: "Gorizontal sirtda tayanch reaksiyasi N = mg bo‘ladi, shuning uchun F_ishq = μ · mg.",
    options: [
      { id: "o1", label: "F_ishq = μ · m · g", isCorrect: true },
      { id: "o2", label: "F_ishq = m · a", isCorrect: false },
      { id: "o3", label: "F_ishq = k · x", isCorrect: false },
      { id: "o4", label: "F_ishq = m · v² / 2", isCorrect: false },
    ],
  },
];

export const lesson10Practice: PracticeTask[] = [
  {
    id: "ilk-10-p1",
    position: 1,
    prompt:
      "1-Masala (06-dars):\nGorizontal stolda turgan jismga bir to‘g‘ri chiziq bo‘ylab o‘ng tomonga $15\\text{ N}$, chap tomonga esa $15\\text{ N}$ qarama-qarshi kuch ta'sir qilmoqda. Jismga ta'sir qiluvchi natijaviy kuchni ($\\text{N}$) hisoblang.",
    unit: "N",
    answer: 0,
    tolerance: 0.01,
    hint: "Qarama-qarshi kuchlar ayiriladi: $F_{\\text{nat}} = F_1 - F_2 = 15 - 15$.",
    solution:
      "**Namunaviy yechim:**\n- **Berilgan:** $F_1 = 15\\text{ N}$, $F_2 = 15\\text{ N}$\n- **Topish kerak:** $F_{\\text{nat}} - ?$\n- **Formula:** $F_{\\text{nat}} = F_1 - F_2$\n- **Yechilishi:** $F_{\\text{nat}} = 15 - 15 = 0\\text{ N}$\n- **Javob:** $0\\text{ N}$.",
  },
  {
    id: "ilk-10-p2",
    position: 2,
    prompt:
      "2-Masala (07-dars):\nMassasi $3\\text{ kg}$ bo‘lgan aravachaga $12\\text{ N}$ doimiy gorizontal kuch ta'sir qilmoqda. Aravachaning tezlanishini ($\\text{m/s}^2$) hisoblang.",
    unit: "m/s²",
    answer: 4,
    tolerance: 0.1,
    hint: "Nyutonning ikkinchi qonuni: $a = \\frac{F}{m} = \\frac{12}{3}$.",
    solution:
      "**Namunaviy yechim:**\n- **Berilgan:** $m = 3\\text{ kg}$, $F = 12\\text{ N}$\n- **Topish kerak:** $a - ?$\n- **Formula:** $a = \\frac{F}{m}$\n- **Yechilishi:** $a = \\frac{12\\text{ N}}{3\\text{ kg}} = 4\\text{ m/s}^2$\n- **Javob:** $4\\text{ m/s}^2$.",
  },
  {
    id: "ilk-10-p3",
    position: 3,
    prompt:
      "3-Masala (08-dars):\nQayiqdagi kishi sohilni $50\\text{ N}$ kuch bilan itardi. Nyutonning uchinchi qonuniga ko‘ra, sohil odamga qanday aks ta'sir kuchi ($\\text{N}$) beradi?",
    unit: "N",
    answer: 50,
    tolerance: 0.1,
    hint: "Nyutonning uchinchi qonuniga ko‘ra, ta'sir kuchi aks ta'sir kuchiga teng: $|F_2| = |F_1|$.",
    solution:
      "**Namunaviy yechim:**\n- **Berilgan:** $F_1 = 50\\text{ N}$\n- **Topish kerak:** $F_2 - ?$\n- **Formula:** $|F_2| = |F_1|$\n- **Yechilishi:** $F_2 = 50\\text{ N}$\n- **Javob:** $50\\text{ N}$.",
  },
  {
    id: "ilk-10-p4",
    position: 4,
    prompt:
      "4-Masala (09-dars):\nMassasi $40\\text{ kg}$ bo‘lgan o‘quvchining Yer sirtidagi og‘irlik kuchini ($\\text{N}$) hisoblang. ($g = 10\\text{ m/s}^2$).",
    unit: "N",
    answer: 400,
    tolerance: 1,
    hint: "Og‘irlik kuchi: $F_{\\text{og‘}} = m \\cdot g = 40 \\times 10$.",
    solution:
      "**Namunaviy yechim:**\n- **Berilgan:** $m = 40\\text{ kg}$, $g = 10\\text{ m/s}^2$\n- **Topish kerak:** $F_{\\text{og‘}} - ?$\n- **Formula:** $F_{\\text{og‘}} = m \\cdot g$\n- **Yechilishi:** $F_{\\text{og‘}} = 40 \\times 10 = 400\\text{ N}$\n- **Javob:** $400\\text{ N}$.",
  },
  {
    id: "ilk-10-p5",
    position: 5,
    prompt:
      "5-Masala (10-dars):\nMassasi $2\\text{ kg}$ bo‘lgan brusok gorizontal stolda yotibdi. Ishqalanish koeffitsiyenti $\\mu = 0.2$ bo‘lsa, sirpanish ishqalanish kuchini ($\\text{N}$) hisoblang. ($g = 10\\text{ m/s}^2$).",
    unit: "N",
    answer: 4,
    tolerance: 0.1,
    hint: "Sirpanish ishqalanish kuchi: $F_{\\text{ishq}} = \\mu m g = 0.2 \\times 2 \\times 10$.",
    solution:
      "**Namunaviy yechim:**\n- **Berilgan:** $m = 2\\text{ kg}$, $\\mu = 0.2$, $g = 10\\text{ m/s}^2$\n- **Topish kerak:** $F_{\\text{ishq}} - ?$\n- **Formula:** $F_{\\text{ishq}} = \\mu \\cdot m \\cdot g$\n- **Yechilishi:** $F_{\\text{ishq}} = 0.2 \\times 2 \\times 10 = 4\\text{ N}$\n- **Javob:** $4\\text{ N}$.",
  },
];

export const lesson10Static: Lesson = {
  id: "ilk-qadam-10",
  courseSlug: "ilk-qadam",
  number: "10",
  position: 10,
  title: "2-Checkpoint: Dinamika va Kuchlar Sinov Testi (06–10 darslar)",
  intro:
    "Dinamika va Nyuton qonunlari bo‘yicha 10 talik sinov testi: 5 ta muhim nazariy savol va 5 ta amaliy hisoblash masalasi.",
  videoUrl: null,
  videoDurationMin: 16,
  quiz: lesson10Quiz,
  practice: lesson10Practice,
  homework: {
    title: "2-Checkpoint tahlili",
    body: "1. 10 talik test natijalarini ko‘rib chiqing.\n2. Inersiya, Nyuton qonunlari, og‘irlik va ishqalanish kuchlari bo‘yicha xatolaringiz ustida ishlang.",
    pdfUrl: null,
  },
  isPublished: true,
};
