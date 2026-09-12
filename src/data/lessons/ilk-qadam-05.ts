import type { Locale } from "@/lib/i18n";
import type { Lesson, PracticeTask, QuizQuestion } from "@/types/lesson";
import type { LessonSlide } from "./ilk-qadam-01";

export const lesson05Slides: Record<Locale, LessonSlide[]> = {
  uz: [
    {
      id: 1,
      eyebrow: "01 / Yakuniy Ko‘rik",
      title: "1-Checkpoint: Kinematika Xulosasi",
      content:
        "Tabriklaymiz! Siz fizikaning eng muhim bo‘limlaridan biri bo‘lgan **Kinematika** asoslarini (01–05 darslar) muvaffaqiyatli o‘rgangansiz.\n\nUshbu dars — maxsus sinov darsi bo‘lib, bilimlaringizni mustahkamlash uchun **10 talik test** (5 ta tezkor savol va 5 ta amaliy masala)dan iborat.",
      badge: "Checkpoint 1",
      highlight: "10 talik test orqali o‘z bilimingizni 100% tekshirib oling!",
    },
    {
      id: 2,
      eyebrow: "02 / 1–2 Darslar",
      title: "SI Birliklari va Nisbiy Harakat",
      content:
        "1. **Tezlikni o‘tkazish qoidasi:**\n$$1\\text{ km/h} = \\frac{1}{3.6}\\text{ m/s}, \\quad 36\\text{ km/h} = 10\\text{ m/s}$$\n2. **Oqim bo‘ylab harakat:** Tezliklar qo‘shiladi: $v_{\\text{natija}} = v_{\\text{qayiq}} + v_{\\text{oqim}}$.\n3. **Oqimga qarshi harakat:** Tezliklar ayriladi: $v_{\\text{natija}} = v_{\\text{qayiq}} - v_{\\text{oqim}}$.",
      badge: "Formulalar 1-2",
      formula: "v_{\\text{oqim bo‘ylab}} = v_q + v_o",
    },
    {
      id: 3,
      eyebrow: "03 / 3-Dars",
      title: "To‘g‘ri Chiziqli Tekis Harakat",
      content:
        "Tezlik doimiy bo‘lgan harakatda ($v = \\text{const}$):\n\n* **Tezlik:** $v = \\frac{s}{t}$\n* **Bosib o‘tilgan yo‘l:** $s = v \\cdot t$\n* **Vaqt:** $t = \\frac{s}{v}$\n\nBu harakatda tezlanish har doim nolga teng: $a = 0$.",
      badge: "Formulalar 3",
      formula: "s = v \\cdot t",
    },
    {
      id: 4,
      eyebrow: "04 / 4-Dars",
      title: "Tezlanuvchan Harakat",
      content:
        "Tezlik bir tekisda o‘zgarib borganda ($a = \\text{const}$):\n\n* **Tezlanish:** $a = \\frac{v - v_0}{t}$\n* **Tezlik tenglamasi:** $v(t) = v_0 + a t$\n* **Yo‘l ($v_0 = 0$ bo‘lganda):** $s = \\frac{a t^2}{2}$",
      badge: "Formulalar 4",
      formula: "v = v_0 + a t, \\quad s = \\frac{a t^2}{2}",
    },
    {
      id: 5,
      eyebrow: "05 / 5-Dars",
      title: "Erkin Tushish Harakati",
      content:
        "Havo qarshiligisiz og‘irlik kuchi ta'siridagi erkin tushishda tezlanish $g \\approx 10\\text{ m/s}^2$ bo‘ladi:\n\n* **Tezlik:** $v = g t$\n* **Tushish balandligi:** $h = \\frac{g t^2}{2}$\n\nBarcha jismlar massasidan qat'i nazar bir xil tezlanish bilan tushadi!",
      badge: "Formulalar 5",
      formula: "h = \\frac{g t^2}{2}, \\quad v = g t",
    },
    {
      id: 6,
      eyebrow: "06 / Qoidalar",
      title: "Sinovdan O‘tish Tartibi",
      content:
        "1. Avval quyidagi **5 ta savol**ga javob bering.\n2. So‘ngra qog‘oz va ruchka olib **5 ta masala**ni qadamma-qadam yeching va javoblarni kiriting.\n3. Har 5 darsda o‘tkaziladigan bunday sinovlar sizni fizika olimpiadalari va DTM testlariga tayyorlaydi!",
      badge: "Start",
      highlight: "Oq yo‘l! Qani, sinovni boshlaymiz!",
    },
  ],
  en: [
    {
      id: 1,
      eyebrow: "01 / Overview",
      title: "Checkpoint 1: Kinematics Review",
      content:
        "Congratulations on completing the core kinematics lessons (01–05)!\n\nThis is a special checkpoint lesson consisting of a **10-item test** (5 conceptual questions + 5 calculation problems) to solidify your foundation.",
      badge: "Checkpoint 1",
      highlight: "Test your mastery with 10 essential questions and problems!",
    },
    {
      id: 2,
      eyebrow: "02 / Lessons 1–2",
      title: "SI Units and Relative Motion",
      content:
        "1. **Unit conversion:** $1\\text{ m/s} = 3.6\\text{ km/h}$, so $36\\text{ km/h} = 10\\text{ m/s}$.\n2. **Downstream speed:** $v = v_{\\text{boat}} + v_{\\text{stream}}$.\n3. **Upstream speed:** $v = v_{\\text{boat}} - v_{\\text{stream}}$.",
      badge: "Formulas 1-2",
      formula: "v_{\\text{downstream}} = v_b + v_s",
    },
    {
      id: 3,
      eyebrow: "03 / Lesson 3",
      title: "Uniform Linear Motion",
      content:
        "When velocity is constant ($v = \\text{const}$):\n* Speed: $v = s / t$\n* Distance: $s = v \\cdot t$\n* Acceleration is zero: $a = 0$.",
      badge: "Formulas 3",
      formula: "s = v \\cdot t",
    },
    {
      id: 4,
      eyebrow: "04 / Lesson 4",
      title: "Uniformly Accelerated Motion",
      content:
        "When acceleration is constant:\n* $a = (v - v_0) / t$\n* Velocity: $v = v_0 + at$\n* Distance (from rest $v_0 = 0$): $s = at^2 / 2$.",
      badge: "Formulas 4",
      formula: "v = v_0 + a t, \\quad s = \\frac{a t^2}{2}",
    },
    {
      id: 5,
      eyebrow: "05 / Lesson 5",
      title: "Free Fall",
      content:
        "Under gravity alone without air resistance ($g \\approx 10\\text{ m/s}^2$):\n* Velocity: $v = gt$\n* Height: $h = gt^2 / 2$\nAll masses accelerate at the exact same rate.",
      badge: "Formulas 5",
      formula: "h = \\frac{g t^2}{2}, \\quad v = g t",
    },
    {
      id: 6,
      eyebrow: "06 / Guidelines",
      title: "Checkpoint Instructions",
      content:
        "1. Complete the 5 conceptual questions.\n2. Work through the 5 calculation problems with paper and pen.\n3. Checkpoints every 5 lessons guarantee deep retention.",
      badge: "Ready",
      highlight: "Good luck on your first checkpoint!",
    },
  ],
  ru: [
    {
      id: 1,
      eyebrow: "01 / Обзор",
      title: "Чекпоинт 1: Итоги кинематики",
      content:
        "Поздравляем с завершением уроков кинематики (01–05)!\n\nЭтот проверочный урок содержит **тест из 10 заданий** (5 концептуальных вопросов + 5 расчетных задач) для закрепления материала.",
      badge: "Чекпоинт 1",
      highlight: "Проверьте свои знания в тесте из 10 заданий!",
    },
    {
      id: 2,
      eyebrow: "02 / Уроки 1–2",
      title: "Единицы СИ и относительность",
      content:
        "1. **Перевод единиц:** $36\\text{ км/ч} = 10\\text{ м/с}$.\n2. **По течению:** $v = v_{\\text{лодки}} + v_{\\text{течения}}$.\n3. **Против течения:** $v = v_{\\text{лодки}} - v_{\\text{течения}}$.",
      badge: "Формулы 1-2",
      formula: "v_{\\text{по теч}} = v_л + v_т",
    },
    {
      id: 3,
      eyebrow: "03 / Урок 3",
      title: "Равномерное прямолинейное движение",
      content:
        "При постоянной скорости ($v = \\text{const}$):\n* Скорость: $v = s / t$\n* Путь: $s = v \\cdot t$\n* Ускорение равно нулю: $a = 0$.",
      badge: "Формулы 3",
      formula: "s = v \\cdot t",
    },
    {
      id: 4,
      eyebrow: "04 / Урок 4",
      title: "Равноускоренное движение",
      content:
        "При постоянном ускорении:\n* $a = (v - v_0) / t$\n* Скорость: $v = v_0 + at$\n* Путь из покоя: $s = at^2 / 2$.",
      badge: "Формулы 4",
      formula: "v = v_0 + a t, \\quad s = \\frac{a t^2}{2}",
    },
    {
      id: 5,
      eyebrow: "05 / Урок 5",
      title: "Свободное падение",
      content:
        "Под действием силы тяжести без воздуха ($g \\approx 10\\text{ м/с}^2$):\n* Скорость: $v = gt$\n* Высота: $h = gt^2 / 2$\nВсе тела падают с одинаковым ускорением независимо от массы.",
      badge: "Формулы 5",
      formula: "h = \\frac{g t^2}{2}, \\quad v = g t",
    },
    {
      id: 6,
      eyebrow: "06 / Правила",
      title: "Инструкция к тесту",
      content:
        "1. Ответьте на 5 теоретических вопросов.\n2. Решите 5 задач на черновике и введите ответы.\n3. Регулярные чекпоинты гарантируют глубокое понимание физики.",
      badge: "Старт",
      highlight: "Желаем успехов на первом рубеже!",
    },
  ],
};

export const lesson05Quiz: QuizQuestion[] = [
  {
    id: "ilk-05-q1",
    position: 1,
    question: "Xalqaro birliklar sistemasida (SI) tezlikning asosiy o‘lchov birligi qaysi?",
    explanation: "SI sistemasida masofa metrda, vaqt esa sekundda o‘lchanadi, shuning uchun tezlik birligi m/s.",
    options: [
      { id: "o1", label: "m/s", isCorrect: true },
      { id: "o2", label: "km/soat", isCorrect: false },
      { id: "o3", label: "sm/s", isCorrect: false },
      { id: "o4", label: "km/s", isCorrect: false },
    ],
  },
  {
    id: "ilk-05-q2",
    position: 2,
    question: "Oqim bo‘ylab suzayotgan qayiqning qirg‘oqqa nisbatan tezligi qanday topiladi?",
    explanation: "Oqim yo‘nalishida harakatlanganda suv qayiqqa yordam beradi, tezliklar qo‘shiladi (v_q + v_o).",
    options: [
      { id: "o1", label: "Qayiq va daryo tezliklari qo‘shiladi", isCorrect: true },
      { id: "o2", label: "Qayiq tezligidan daryo tezligi ayriladi", isCorrect: false },
      { id: "o3", label: "Tezliklar bir-biriga ko‘paytiriladi", isCorrect: false },
      { id: "o4", label: "Faqat qayiqning o‘z tezligiga teng bo‘ladi", isCorrect: false },
    ],
  },
  {
    id: "ilk-05-q3",
    position: 3,
    question: "Jism doimiy 10 m/s tezlik bilan to‘g‘ri chiziqli tekis harakatlanmoqda. Uning tezlanishi nimaga teng?",
    explanation: "Tekis harakatda tezlik o‘zgarmaydi, ya'ni tezlik o‘zgarishi nolga teng. Demak tezlanish ham a = 0 bo‘ladi.",
    options: [
      { id: "o1", label: "0 m/s²", isCorrect: true },
      { id: "o2", label: "10 m/s²", isCorrect: false },
      { id: "o3", label: "9.8 m/s²", isCorrect: false },
      { id: "o4", label: "1 m/s²", isCorrect: false },
    ],
  },
  {
    id: "ilk-05-q4",
    position: 4,
    question: "Tezlanishning SI sistemasidagi asosiy o‘lchov birligi qaysi?",
    explanation: "Tezlanish — tezlikning vaqtga nisbati: (m/s) / s = m/s².",
    options: [
      { id: "o1", label: "m/s²", isCorrect: true },
      { id: "o2", label: "m/s", isCorrect: false },
      { id: "o3", label: "metr", isCorrect: false },
      { id: "o4", label: "sekund²", isCorrect: false },
    ],
  },
  {
    id: "ilk-05-q5",
    position: 5,
    question: "Vakuumda (havosiz muhitda) og‘ir tosh va yengil qush pati bir vaqtda tashlansa nima bo‘ladi?",
    explanation: "Vakuumda havo qarshiligi yo‘q, barcha jismlar massasidan qat'i nazar bir xil g tezlanish bilan tushadi va bir vaqtda yetib keladi.",
    options: [
      { id: "o1", label: "Ikkala jism bir xil vaqtda yerga yetib keladi", isCorrect: true },
      { id: "o2", label: "Og‘ir tosh ancha tezroq tushadi", isCorrect: false },
      { id: "o3", label: "Qush pati havoda muallaq qolib ketadi", isCorrect: false },
      { id: "o4", label: "Og‘ir tosh sekinroq tushadi", isCorrect: false },
    ],
  },
];

export const lesson05Practice: PracticeTask[] = [
  {
    id: "ilk-05-p1",
    position: 1,
    prompt:
      "1-Masala (01-dars):\n$36\\text{ km/soat}$ tezlikni metr taqsim sekundga ($\\text{m/s}$) aylantiring.",
    unit: "m/s",
    answer: 10,
    tolerance: 0.1,
    hint: "$1\\text{ km/h} = \\frac{1000\\text{ m}}{3600\\text{ s}} = \\frac{1}{3.6}\\text{ m/s}$. Shuning uchun 36 ni 3.6 ga bo‘ling.",
    solution:
      "**Namunaviy yechim:**\n- **Berilgan:** $v = 36\\text{ km/soat}$\n- **Topish kerak:** $v (\\text{m/s}) - ?$\n- **Formula:** $v = \\frac{36}{3.6}\\text{ m/s}$\n- **Yechilishi:** $v = 10\\text{ m/s}$\n- **Javob:** $10\\text{ m/s}$.",
  },
  {
    id: "ilk-05-p2",
    position: 2,
    prompt:
      "2-Masala (02-dars):\nQayiqning suvga nisbatan tezligi $8\\text{ m/s}$, daryo oqimining tezligi esa $2\\text{ m/s}$. Qayiq oqim bo‘ylab harakatlansa, uning qirg‘oqqa nisbatan tezligini ($\\text{m/s}$) toping.",
    unit: "m/s",
    answer: 10,
    tolerance: 0.1,
    hint: "Oqim bo‘ylab harakatda tezliklar qo‘shiladi: $v = v_{\\text{qayiq}} + v_{\\text{oqim}}$.",
    solution:
      "**Namunaviy yechim:**\n- **Berilgan:** $v_q = 8\\text{ m/s}$, $v_o = 2\\text{ m/s}$\n- **Topish kerak:** $v_{\\text{nat}} - ?$\n- **Formula:** $v_{\\text{nat}} = v_q + v_o$\n- **Yechilishi:** $v_{\\text{nat}} = 8 + 2 = 10\\text{ m/s}$\n- **Javob:** $10\\text{ m/s}$.",
  },
  {
    id: "ilk-05-p3",
    position: 3,
    prompt:
      "3-Masala (03-dars):\nVelosipedchi $5\\text{ m/s}$ doimiy tezlik bilan $20\\text{ sekund}$ harakatlandi. Velosipedchi bosib o‘tgan masofani ($\\text{m}$) hisoblang.",
    unit: "m",
    answer: 100,
    tolerance: 0.1,
    hint: "Tekis harakatda masofa formulasi: $s = v \\cdot t$.",
    solution:
      "**Namunaviy yechim:**\n- **Berilgan:** $v = 5\\text{ m/s}$, $t = 20\\text{ s}$\n- **Topish kerak:** $s - ?$\n- **Formula:** $s = v \\cdot t$\n- **Yechilishi:** $s = 5 \\times 20 = 100\\text{ m}$\n- **Javob:** $100\\text{ m}$.",
  },
  {
    id: "ilk-05-p4",
    position: 4,
    prompt:
      "4-Masala (04-dars):\nTinch turgan avtomobil ($v_0 = 0$) $2\\text{ m/s}^2$ doimiy tezlanish bilan $5\\text{ sekund}$ harakatlandi. Avtomobilning oxirgi tezligini ($\\text{m/s}$) hisoblang.",
    unit: "m/s",
    answer: 10,
    tolerance: 0.1,
    hint: "Tezlik tenglamasi: $v = v_0 + at = 0 + 2 \\times 5$.",
    solution:
      "**Namunaviy yechim:**\n- **Berilgan:** $v_0 = 0\\text{ m/s}$, $a = 2\\text{ m/s}^2$, $t = 5\\text{ s}$\n- **Topish kerak:** $v - ?$\n- **Formula:** $v = v_0 + at$\n- **Yechilishi:** $v = 0 + 2 \\times 5 = 10\\text{ m/s}$\n- **Javob:** $10\\text{ m/s}$.",
  },
  {
    id: "ilk-05-p5",
    position: 5,
    prompt:
      "5-Masala (05-dars):\nBoshlang‘ich tezliksiz ($v_0 = 0$) erkin tushayotgan tosh $2\\text{ sekund}$da qanday balandlikdan ($\\text{m}$) tushadi? ($g = 10\\text{ m/s}^2$).",
    unit: "m",
    answer: 20,
    tolerance: 0.1,
    hint: "Erkin tushish balandligi: $h = \\frac{gt^2}{2} = \\frac{10 \\times 2^2}{2}$.",
    solution:
      "**Namunaviy yechim:**\n- **Berilgan:** $v_0 = 0\\text{ m/s}$, $t = 2\\text{ s}$, $g = 10\\text{ m/s}^2$\n- **Topish kerak:** $h - ?$\n- **Formula:** $h = \\frac{gt^2}{2}$\n- **Yechilishi:** $h = \\frac{10 \\times 2^2}{2} = \\frac{10 \\times 4}{2} = 20\\text{ m}$\n- **Javob:** $20\\text{ m}$.",
  },
];

export const lesson05Static: Lesson = {
  id: "ilk-qadam-05",
  courseSlug: "ilk-qadam",
  number: "05",
  position: 5,
  title: "1-Checkpoint: Kinematika Sinov Testi (01–05 darslar)",
  intro:
    "Dastlabki 5 ta dars bo‘yicha 10 talik sinov testi: 5 ta muhim nazariy savol va 5 ta amaliy hisoblash masalasi.",
  videoUrl: null,
  videoDurationMin: 15,
  quiz: lesson05Quiz,
  practice: lesson05Practice,
  homework: {
    title: "1-Checkpoint tahlili",
    body: "1. 10 talik sinov natijalaringizni tekshiring.\n2. Qaysi savol yoki masalada qiynalgan bo‘lsangiz, o‘sha mavzuni (01–04 darslar) takrorlang.",
    pdfUrl: null,
  },
  isPublished: true,
};
