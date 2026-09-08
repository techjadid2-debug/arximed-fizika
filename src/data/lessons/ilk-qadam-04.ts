import type { Locale } from "@/lib/i18n";
import type { Lesson, PracticeTask, QuizQuestion } from "@/types/lesson";
import type { LessonSlide } from "./ilk-qadam-01";

export const lesson04Slides: Record<Locale, LessonSlide[]> = {
  uz: [
    {
      id: 1,
      eyebrow: "01 / Kirish",
      title: "Tezlanish Nima?",
      content:
        "Tesla elektromobili ham, og‘ir yuk mashinasi ham $0$ dan $100\\text{ km/soat}$ tezlikka chiqa oladi. Lekin Tesla bunga 2 sekund sarflaydi, yuk mashinasi esa 30 sekund!\n\nTezlik qanchalik tez o‘zgarayotganini ko‘rsatuvchi kattalik **tezlanish** deb ataladi.",
      badge: "Tezlanish",
      highlight: "Tezlanish — tezlik o‘zgarishining tezligi.",
    },
    {
      id: 2,
      eyebrow: "02 / Formula",
      title: "Tezlanish Formulasi",
      content:
        "Tezlanish — tezlik o‘zgarishining shu o‘zgarish yuz bergan vaqtga nisbatidir:\n$$a = \\frac{v - v_0}{t}$$\n\n* $v_0$ — boshlang‘ich tezlik.\n* $v$ — oxirgi tezlik.\n* $t$ — vaqt.\n\nSI birligi: **metr taqsim sekund kvadrat** ($\\text{m/s}^2$).\nAgar tezlik oshsa $a > 0$, tormoz berilsa $a < 0$ bo‘ladi.",
      badge: "Asosiy formula",
      formula: "a = \\frac{v - v_0}{t}, \\quad [a] = \\text{m/s}^2",
    },
    {
      id: 3,
      eyebrow: "03 / Tezlik",
      title: "Tezlik Tenglamasi",
      content:
        "Tekis o‘zgaruvchan harakatda ixtiyoriy vaqtdagi tezlik quyidagicha topiladi:\n$$v(t) = v_0 + a t$$\n\n**Misol:** Avtomobil $10\\text{ m/s}$ boshlang‘ich tezlik bilan ketmoqda. U $2\\text{ m/s}^2$ tezlanish bilan gaz bossa, 4 sekunddan keyin tezligi:\n$$v = 10 + 2 \\times 4 = \\mathbf{18\\text{ m/s}}$$",
      badge: "Tezlik",
      formula: "v(t) = v_0 + a t",
    },
    {
      id: 4,
      eyebrow: "04 / Masofa",
      title: "Yo‘l Formulasi",
      content:
        "Tezlanuvchan harakatda bosib o‘tilgan yo‘l:\n$$s = v_0 t + \\frac{a t^2}{2}$$\n\nAgar jism joyidan qo‘zg‘alsa (tinch holatdan, $v_0 = 0$):\n$$s = \\frac{a t^2}{2}$$\n\nE'tibor bering: vaqt 2 marta oshsa, yo‘l 4 marta oshadi ($s \\sim t^2$).",
      badge: "Yo‘l",
      formula: "s = v_0 t + \\frac{a t^2}{2}",
    },
    {
      id: 5,
      eyebrow: "05 / Hayotiy Xavfsizlik",
      title: "Tormoz Yo‘li Qoidasi",
      content:
        "Haydovchilar bilishi shart bo‘lgan eng muhim qoida:\n$$s_{\\text{tormoz}} = \\frac{v_0^2}{2a}$$\n\nTormoz yo‘li boshlang‘ich tezlikning **kvadratiga** to‘g‘ri proporsional!\n* Tezlik 2 marta oshsa $\\to$ tormoz yo‘li **4 marta** oshadi!\n* Tezlik 3 marta oshsa $\\to$ tormoz yo‘li **9 marta** oshadi!\nShu sababli maktablar oldida tezlik cheklovi qat'iy o‘rnatiladi.",
      badge: "Hayotiy qoida",
      formula: "s_{\\text{tormoz}} \\sim v_0^2",
      highlight: "Tezlik 2 marta oshganda tormoz yo‘li 4 marta uzayadi!",
    },
    {
      id: 6,
      eyebrow: "06 / Xulosa",
      title: "Qisqa Xulosa",
      content:
        "1. Tezlanish — 1 sekundda tezlik qanchaga o‘zgargani ($a = \\Delta v / t$).\n2. Tinch holatdan harakatda: $v = at$ va $s = at^2 / 2$.\n3. Kvadratik munosabat: $v^2 - v_0^2 = 2as$.",
      badge: "Xulosa",
      highlight: "Sekinlanishda tezlanish tezlikka qarama-qarshi yo‘nalgan bo‘ladi.",
    },
  ],
  en: [
    {
      id: 1,
      eyebrow: "01 / Introduction",
      title: "What is Acceleration?",
      content:
        "Both a sports car and a loaded freight truck can reach $100\\text{ km/h}$. But the sports car does it in 2 seconds, while the truck takes 30 seconds!\n\n**Acceleration** measures how rapidly velocity changes over time.",
      badge: "Acceleration",
      highlight: "Acceleration is the rate of change of velocity.",
    },
    {
      id: 2,
      eyebrow: "02 / Formula",
      title: "Acceleration Formula",
      content:
        "Acceleration is the change in velocity divided by elapsed time:\n$$a = \\frac{v - v_0}{t}$$\n\n* $v_0$: initial velocity.\n* $v$: final velocity.\n* $t$: time interval.\n\nSI unit: **meters per second squared** ($\\text{m/s}^2$).",
      badge: "Formula",
      formula: "a = \\frac{v - v_0}{t}, \\quad [a] = \\text{m/s}^2",
    },
    {
      id: 3,
      eyebrow: "03 / Velocity",
      title: "Velocity Equation",
      content:
        "Velocity at any instant under constant acceleration:\n$$v(t) = v_0 + a t$$\n\nExample: An initial speed $v_0 = 10\\text{ m/s}$ with $a = 2\\text{ m/s}^2$ after 4 seconds reaches $10 + 2 \\times 4 = \\mathbf{18\\text{ m/s}}$.",
      badge: "Velocity",
      formula: "v(t) = v_0 + a t",
    },
    {
      id: 4,
      eyebrow: "04 / Distance",
      title: "Distance Formula",
      content:
        "Distance covered under constant acceleration:\n$$s = v_0 t + \\frac{a t^2}{2}$$\n\nStarting from rest ($v_0 = 0$):\n$$s = \\frac{a t^2}{2}$$\n\nIf time doubles, distance quadruples ($s \\sim t^2$).",
      badge: "Distance",
      formula: "s = v_0 t + \\frac{a t^2}{2}",
    },
    {
      id: 5,
      eyebrow: "05 / Safety",
      title: "Braking Distance Rule",
      content:
        "Braking distance is proportional to the square of initial speed:\n$$s_{\\text{brake}} = \\frac{v_0^2}{2a}$$\n\n* Double the speed $\\to$ **4 times** longer braking distance!\n* Triple the speed $\\to$ **9 times** longer braking distance!\nThis is why school zone speed limits are critical.",
      badge: "Safety",
      formula: "s_{\\text{brake}} \\sim v_0^2",
      highlight: "Doubling speed quadruples the stopping distance!",
    },
    {
      id: 6,
      eyebrow: "06 / Summary",
      title: "Core Takeaways",
      content:
        "1. Acceleration is change in speed per second ($a = \\Delta v / t$).\n2. From rest: $v = at$ and $s = at^2 / 2$.\n3. Braking distance grows quadratically with speed.",
      badge: "Summary",
      highlight: "Deceleration has acceleration opposing motion.",
    },
  ],
  ru: [
    {
      id: 1,
      eyebrow: "01 / Введение",
      title: "Что такое ускорение?",
      content:
        "И спорткар, и грузовик могут разогнаться до $100\\text{ км/ч}$. Но спорткар сделает это за 2 секунды, а грузовик — за 30!\n\nВеличина, показывающая быстроту изменения скорости, называется **ускорением**.",
      badge: "Ускорение",
      highlight: "Ускорение — это быстрота изменения скорости.",
    },
    {
      id: 2,
      eyebrow: "02 / Формула",
      title: "Формула ускорения",
      content:
        "Ускорение — отношение изменения скорости ко времени:\n$$a = \\frac{v - v_0}{t}$$\n\nЕдиница в СИ: **метр на секунду в квадрате** ($\\text{м/с}^2$).\nПри разгоне $a > 0$, при торможении $a < 0$.",
      badge: "Формула",
      formula: "a = \\frac{v - v_0}{t}, \\quad [a] = \\text{м/с}^2",
    },
    {
      id: 3,
      eyebrow: "03 / Скорость",
      title: "Уравнение скорости",
      content:
        "Скорость при равноускоренном движении:\n$$v(t) = v_0 + a t$$\n\nПример: $v_0 = 10\\text{ м/с}$, $a = 2\\text{ м/с}^2$, через 4 секунды: $v = 10 + 2 \\times 4 = \\mathbf{18\\text{ м/с}}$.",
      badge: "Скорость",
      formula: "v(t) = v_0 + a t",
    },
    {
      id: 4,
      eyebrow: "04 / Путь",
      title: "Формула пути",
      content:
        "Пройденный путь:\n$$s = v_0 t + \\frac{a t^2}{2}$$\n\nИз состояния покоя ($v_0 = 0$):\n$$s = \\frac{a t^2}{2}$$\n\nЕсли время увеличится в 2 раза, путь увеличится в 4 раза.",
      badge: "Путь",
      formula: "s = v_0 t + \\frac{a t^2}{2}",
    },
    {
      id: 5,
      eyebrow: "05 / Безопасность",
      title: "Тормозной путь",
      content:
        "Тормозной путь пропорционален квадрату начальной скорости:\n$$s_{\\text{торм}} = \\frac{v_0^2}{2a}$$\n\n* Скорость выросла в 2 раза $\\to$ тормозной путь вырос в **4 раза**!\n* Скорость выросла в 3 раза $\\to$ тормозной путь вырос в **9 раз**!",
      badge: "Правило",
      formula: "s_{\\text{торм}} \\sim v_0^2",
      highlight: "Удвоение скорости учетверяет тормозной путь!",
    },
    {
      id: 6,
      eyebrow: "06 / Итог",
      title: "Краткий итог",
      content:
        "1. Ускорение — изменение скорости за секунду ($a = \\Delta v / t$).\n2. Из покоя: $v = at$ и $s = at^2 / 2$.\n3. Тормозной путь зависит от квадрата скорости.",
      badge: "Итог",
      highlight: "При торможении вектор ускорения направлен против скорости.",
    },
  ],
};

export const lesson04Quiz: QuizQuestion[] = [
  {
    id: "ilk-04-q1",
    position: 1,
    question: "Tezlanish fizikada nimani ifodalaydi?",
    explanation: "Tezlanish jism tezligining vaqt birligi (1 sekund) ichida qanchalik tez o‘zgarishini ko‘rsatadi.",
    options: [
      { id: "o1", label: "Tezlikning vaqt birligi ichida o‘zgarish tezligini", isCorrect: true },
      { id: "o2", label: "Jism bosib o‘tgan umumiy masofani", isCorrect: false },
      { id: "o3", label: "Jismning massasini", isCorrect: false },
      { id: "o4", label: "Harakatning umumiy davomiyligini", isCorrect: false },
    ],
  },
  {
    id: "ilk-04-q2",
    position: 2,
    question: "Tezlanishning SI sistemasidagi o‘lchov birligi qaysi?",
    explanation: "Tezlik m/s bo‘lgani uchun uni yana sekundga bo‘lsak, m/s² hosil bo‘ladi.",
    options: [
      { id: "o1", label: "m/s²", isCorrect: true },
      { id: "o2", label: "m/s", isCorrect: false },
      { id: "o3", label: "km/soat", isCorrect: false },
      { id: "o4", label: "metr", isCorrect: false },
    ],
  },
  {
    id: "ilk-04-q3",
    position: 3,
    question: "Tinch turgan avtomobil 4 sekund ichida tezligini 20 m/s ga yetkazdi. Avtomobilning tezlanishi qancha?",
    explanation: "a = (v - v₀) / t = (20 - 0) / 4 = 5 m/s².",
    options: [
      { id: "o1", label: "5 m/s²", isCorrect: true },
      { id: "o2", label: "80 m/s²", isCorrect: false },
      { id: "o3", label: "4 m/s²", isCorrect: false },
      { id: "o4", label: "20 m/s²", isCorrect: false },
    ],
  },
  {
    id: "ilk-04-q4",
    position: 4,
    question: "Avtomobil tezligi 2 marta oshsa, uning tormoz yo‘li necha marta uzayadi?",
    explanation: "Tormoz yo‘li boshlang‘ich tezlik kvadratiga proporsional (s ~ v²). Shuning uchun 2² = 4 marta uzayadi.",
    options: [
      { id: "o1", label: "4 marta", isCorrect: true },
      { id: "o2", label: "2 marta", isCorrect: false },
      { id: "o3", label: "8 marta", isCorrect: false },
      { id: "o4", label: "O‘zgarmaydi", isCorrect: false },
    ],
  },
  {
    id: "ilk-04-q5",
    position: 5,
    question: "Tekis sekinlanuvchan harakatda tezlanish vektori qaysi tomonga yo‘nalgan bo‘ladi?",
    explanation: "Sekinlanayotgan jismda tezlanish har doim tezlik yo‘nalishiga qarama-qarshi bo‘ladi.",
    options: [
      { id: "o1", label: "Harakat (tezlik) yo‘nalishiga qarama-qarshi", isCorrect: true },
      { id: "o2", label: "Harakat yo‘nalishi bilan bir xil", isCorrect: false },
      { id: "o3", label: "Har doim vertikal yuqoriga", isCorrect: false },
      { id: "o4", label: "Ixtiyoriy burchak ostida", isCorrect: false },
    ],
  },
];

export const lesson04Practice: PracticeTask[] = [
  {
    id: "ilk-04-p1",
    position: 1,
    prompt: "Tinch turgan mashina ($v_0 = 0$) $3\\text{ m/s}^2$ doimiy tezlanish bilan $4\\text{ sekund}$ tezlandi. Mashinaning oxirgi tezligini ($\\text{m/s}$) toping.",
    unit: "m/s",
    answer: 12,
    tolerance: 0.1,
    hint: "$v = v_0 + at = 0 + 3 \\times 4$.",
    solution: "$v = 3 \\times 4 = 12\\text{ m/s}$.",
  },
  {
    id: "ilk-04-p2",
    position: 2,
    prompt: "Poyezd $20\\text{ m/s}$ tezlikda ketayotib tormoz berdi va $5\\text{ sekund}$da to‘xtadi. Sekinlanish tezlanishi modulini ($\\text{m/s}^2$) hisoblang.",
    unit: "m/s²",
    answer: 4,
    tolerance: 0.1,
    hint: "$a = (v_0 - v) / t = (20 - 0) / 5$.",
    solution: "$a = \\frac{20}{5} = 4\\text{ m/s}^2$.",
  },
  {
    id: "ilk-04-p3",
    position: 3,
    prompt: "Tinch holatdan qo‘zg‘algan jism ($v_0 = 0$) $2\\text{ m/s}^2$ tezlanish bilan $3\\text{ sekund}$da necha metr ($\\text{m}$) yo‘l bosadi?",
    unit: "m",
    answer: 9,
    tolerance: 0.1,
    hint: "$s = a t^2 / 2 = 2 \\times 3^2 / 2 = 9$.",
    solution: "$s = \\frac{2 \\times 9}{2} = 9\\text{ m}$.",
  },
  {
    id: "ilk-04-p4",
    position: 4,
    prompt: "Mashina $10\\text{ m/s}$ tezlik bilan ketmoqda. $a = 4\\text{ m/s}^2$ sekinlanish bilan tormoz berilsa, uning to‘xtash yo‘li ($s = v^2 / (2a)$) necha metr ($\\text{m}$) bo‘ladi?",
    unit: "m",
    answer: 12.5,
    tolerance: 0.2,
    hint: "$s = 10^2 / (2 \\times 4) = 100 / 8$.",
    solution: "$s = \\frac{100}{8} = 12.5\\text{ m}$.",
  },
  {
    id: "ilk-04-p5",
    position: 5,
    prompt: "Avtomobil $10\\text{ sekund}$ ichida tezligini $15\\text{ m/s}$ dan $35\\text{ m/s}$ gacha oshirdi. Mashinaning tezlanishini ($\\text{m/s}^2$) toping.",
    unit: "m/s²",
    answer: 2,
    tolerance: 0.1,
    hint: "$a = (35 - 15) / 10 = 20 / 10$.",
    solution: "$a = \\frac{35 - 15}{10} = 2\\text{ m/s}^2$.",
  },
];

export const lesson04Static: Lesson = {
  id: "ilk-qadam-04",
  courseSlug: "ilk-qadam",
  number: "04",
  position: 4,
  title: "Tekis o‘zgaruvchan harakat va tezlanish",
  intro: "Tesla avtomobili 0 dan 100 gacha 2 sekundda chiqadi. Tezlanish nima va nega tormoz yo‘li kvadratga bog‘liq?",
  videoUrl: null,
  videoDurationMin: 14,
  quiz: lesson04Quiz,
  practice: lesson04Practice,
  homework: {
    title: "Tezlanish va tormoz masofasini tahlil qilish",
    body: "1. 30 km/soat va 60 km/soat tezlikdagi avtomobil tormoz yo‘llarini formula bo‘yicha solishtiring.\n2. Maktab atrofida tezlik 30 km/soat qilib belgilanishining fizik sababini 2 jumlada tushuntiring.",
    pdfUrl: null,
  },
  isPublished: true,
};
