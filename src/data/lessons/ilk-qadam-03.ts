import type { Locale } from "@/lib/i18n";
import type { Lesson, PracticeTask, QuizQuestion } from "@/types/lesson";
import type { LessonSlide } from "./ilk-qadam-01";

export const lesson03Slides: Record<Locale, LessonSlide[]> = {
  uz: [
    {
      id: 1,
      eyebrow: "01 / Kirish",
      title: "Tekis Harakat Nima?",
      content:
        "Agar avtomobil spidometri doimiy ravishda $60\\text{ km/soat}$ ni ko‘rsatib tursa va to‘g‘ri yo‘lda ketsa, bu **to‘g‘ri chiziqli tekis harakat** deyiladi.\n\nBunda jism ixtiyoriy teng vaqt oraliqlarida bir xil masofalarni bosib o‘tadi. Tezlik kattaligi ham, yo‘nalishi ham o‘zgarmaydi ($v = \\text{const}$).",
      badge: "Tekis harakat",
      highlight: "Tezlik ham, yo‘nalish ham o‘zgarmaydi: v = const.",
    },
    {
      id: 2,
      eyebrow: "02 / Formula",
      title: "Tezlik Formulasi",
      content:
        "Tezlik — jismning vaqt birligi ichida (1 sekundda) bosib o‘tgan masofasini ko‘rsatuvchi kattalikdir:\n$$v = \\frac{s}{t}$$\n\nBu yerdan yo‘lni topish formulasi kelib chiqadi:\n$$s = v \\times t$$\n\nSI sistemasida tezlik birligi: **metr taqsim sekund** ($\\text{m/s}$).",
      badge: "Asosiy formula",
      formula: "v = \\frac{s}{t}, \\quad s = v \\cdot t",
    },
    {
      id: 3,
      eyebrow: "03 / Qulay Qoida",
      title: "km/soat dan m/s ga O‘tish",
      content:
        "Kundalik hayotda tezlik $\\text{km/soat}$ da o‘lchanadi (spidometr), lekin fizikada $\\text{m/s}$ ishlatiladi.\n\nOson va esda qoluvchi qoida:\n* $\\text{km/soat} \\to \\text{m/s}$ o‘tish uchun **3.6 ga bo‘lamiz**.\n* Masalan: $72\\text{ km/soat} / 3.6 = \\mathbf{20\\text{ m/s}}$.\n* $108\\text{ km/soat} / 3.6 = \\mathbf{30\\text{ m/s}}$.",
      badge: "3.6 qoidasi",
      formula: "1\\text{ m/s} = 3.6\\text{ km/h}",
      highlight: "3.6 ga bo‘lsangiz m/s, 3.6 ga ko‘paytirsangiz km/soat bo‘ladi.",
    },
    {
      id: 4,
      eyebrow: "04 / Koordinata",
      title: "Harakat Tenglamasi",
      content:
        "Jismning ixtiyoriy $t$ vaqtdagi o‘rnini (koordinatasini) bilish uchun harakat tenglamasidan foydalanamiz:\n$$x(t) = x_0 + v t$$\n\n* $x_0$ — boshlang‘ich koordinata ($t = 0$ paytda qayerda edi).\n* $v$ — tezlik (o‘ngga harakatlansa $+$, chapga harakatlansa $-$).\n* $x(t)$ — $t$ vaqtdan keyingi yangi joyi.",
      badge: "Koordinata",
      formula: "x(t) = x_0 + v t",
    },
    {
      id: 5,
      eyebrow: "05 / Xatolar Qopqoni",
      title: "O‘rtacha Tezlik Qopqoni",
      content:
        "O‘quvchilar eng ko‘p qiladigan xato — o‘rtacha tezlikni tezliklarning yig‘indisini ikkiga bo‘lib qo‘yishdir:\n\nAgar mashina yo‘lning birinchi yarmini $60\\text{ km/soat}$ da, ikkinchi yarmini $90\\text{ km/soat}$ da o‘tsa:\n$$v_{\\text{o‘rt}} \\ne \\frac{60 + 90}{2} = 75\\text{ km/h}$$\n\nTo‘g‘ri qoida — har doim **jami yo‘lni jami vaqtga bo‘lish**:\n$$v_{\\text{o‘rt}} = \\frac{s_{\\text{jami}}}{t_{\\text{jami}}} = \\mathbf{72\\text{ km/soat}}$$",
      badge: "Diqqat!",
      formula: "v_{\\text{o‘rt}} = \\frac{s_{\\text{jami}}}{t_{\\text{jami}}}",
      highlight: "O‘rtacha tezlik arifmetik o‘rtacha emas, balki jami yo‘lning jami vaqtga nisbatidir.",
    },
    {
      id: 6,
      eyebrow: "06 / Xulosa",
      title: "Qisqa Xulosa",
      content:
        "1. Tekis harakatda tezlik o‘zgarmaydi ($v = \\text{const}$).\n2. Yo‘l vaqtga to‘g‘ri proporsional: vaqt 2 marta oshsa, yo‘l ham 2 marta oshadi ($s = vt$).\n3. O‘rtacha tezlik har doim $v_{\\text{o‘rt}} = s_{\\text{jami}} / t_{\\text{jami}}$ orqali hisoblanadi.",
      badge: "Xulosa",
      highlight: "s = vt formulasi kinematikaning eng sodda poydevori.",
    },
  ],
  en: [
    {
      id: 1,
      eyebrow: "01 / Introduction",
      title: "What is Uniform Motion?",
      content:
        "When a car's speedometer constantly shows $60\\text{ km/h}$ along a straight road, it is called **uniform rectilinear motion**.\n\nThe object travels equal distances in equal intervals of time. Neither speed nor direction changes ($v = \\text{const}$).",
      badge: "Uniform motion",
      highlight: "Both speed and direction remain constant: v = const.",
    },
    {
      id: 2,
      eyebrow: "02 / Formula",
      title: "Velocity Formula",
      content:
        "Speed indicates distance traveled per unit time (per second):\n$$v = \\frac{s}{t}$$\n\nSolving for distance yields:\n$$s = v \\times t$$\n\nSI unit of speed: **meters per second** ($\\text{m/s}$).",
      badge: "Core formula",
      formula: "v = \\frac{s}{t}, \\quad s = v \\cdot t",
    },
    {
      id: 3,
      eyebrow: "03 / Practical Rule",
      title: "Converting km/h to m/s",
      content:
        "Speedometers read in $\\text{km/h}$, but physics calculations require $\\text{m/s}$.\n\nA simple rule:\n* Divide by **3.6** to convert $\\text{km/h} \\to \\text{m/s}$.\n* Example: $72\\text{ km/h} / 3.6 = \\mathbf{20\\text{ m/s}}$.\n* $108\\text{ km/h} / 3.6 = \\mathbf{30\\text{ m/s}}$.",
      badge: "Rule of 3.6",
      formula: "1\\text{ m/s} = 3.6\\text{ km/h}",
      highlight: "Divide by 3.6 for m/s, multiply by 3.6 for km/h.",
    },
    {
      id: 4,
      eyebrow: "04 / Position",
      title: "Equation of Motion",
      content:
        "To find the position of an object at any time $t$:\n$$x(t) = x_0 + v t$$\n\n* $x_0$: initial position at $t = 0$.\n* $v$: velocity (positive to the right, negative to the left).\n* $x(t)$: position at time $t$.",
      badge: "Equation",
      formula: "x(t) = x_0 + v t",
    },
    {
      id: 5,
      eyebrow: "05 / Pitfall",
      title: "The Average Speed Trap",
      content:
        "Do not simply take the arithmetic mean of two speeds!\n\nIf a car covers the first half of a distance at $60\\text{ km/h}$ and the second half at $90\\text{ km/h}$:\n$$v_{\\text{avg}} \\ne \\frac{60 + 90}{2} = 75\\text{ km/h}$$\n\nThe universal definition is always total distance divided by total time:\n$$v_{\\text{avg}} = \\frac{s_{\\text{total}}}{t_{\\text{total}}} = \\mathbf{72\\text{ km/h}}$$",
      badge: "Pitfall",
      formula: "v_{\\text{avg}} = \\frac{s_{\\text{total}}}{t_{\\text{total}}}",
      highlight: "Average speed is total distance over total time.",
    },
    {
      id: 6,
      eyebrow: "06 / Summary",
      title: "Core Takeaways",
      content:
        "1. Velocity is constant in uniform motion ($v = \\text{const}$).\n2. Distance is directly proportional to time: $s = vt$.\n3. Average speed is strictly $s_{\\text{total}} / t_{\\text{total}}$.",
      badge: "Summary",
      highlight: "The relation s = vt is the baseline of mechanics.",
    },
  ],
  ru: [
    {
      id: 1,
      eyebrow: "01 / Введение",
      title: "Прямолинейное равномерное движение",
      content:
        "Если спидометр автомобиля всё время показывает $60\\text{ км/ч}$ на прямой дороге, это называется **равномерным прямолинейным движением**.\n\nТело за любые равные промежутки времени проходит одинаковые расстояния ($v = \\text{const}$).",
      badge: "Равномерное",
      highlight: "Скорость постоянна по величине и направлению: v = const.",
    },
    {
      id: 2,
      eyebrow: "02 / Формула",
      title: "Формула скорости",
      content:
        "Скорость показывает путь, пройденный за единицу времени:\n$$v = \\frac{s}{t}$$\n\nОтсюда путь:\n$$s = v \\times t$$\n\nЕдиница скорости в СИ: **метр в секунду** ($\\text{м/с}$).",
      badge: "Формула",
      formula: "v = \\frac{s}{t}, \\quad s = v \\cdot t",
    },
    {
      id: 3,
      eyebrow: "03 / Перевод единиц",
      title: "Перевод из км/ч в м/с",
      content:
        "Спидометр измеряет в $\\text{км/ч}$, но в физике нужен $\\text{м/с}$.\n\nПростое правило:\n* Чтобы перевести $\\text{км/ч} \\to \\text{м/с}$, **делим на 3.6**.\n* Пример: $72\\text{ км/ч} / 3.6 = \\mathbf{20\\text{ м/с}}$.\n* $108\\text{ км/ч} / 3.6 = \\mathbf{30\\text{ м/с}}$.",
      badge: "Правило 3.6",
      formula: "1\\text{ м/с} = 3.6\\text{ км/ч}",
      highlight: "Делим на 3.6 для м/с, умножаем на 3.6 для км/ч.",
    },
    {
      id: 4,
      eyebrow: "04 / Уравнение",
      title: "Уравнение движения",
      content:
        "Координата тела в любой момент времени $t$:\n$$x(t) = x_0 + v t$$\n\n* $x_0$: начальная координата.\n* $v$: скорость (плюс — вправо, минус — влево).\n* $x(t)$: положение тела в момент времени $t$.",
      badge: "Уравнение",
      formula: "x(t) = x_0 + v t",
    },
    {
      id: 5,
      eyebrow: "05 / Ловушка",
      title: "Ловушка средней скорости",
      content:
        "Средняя скорость — это не среднее арифметическое!\n\nЕсли первую половину пути машина ехала $60\\text{ км/ч}$, а вторую — $90\\text{ км/ч}$:\n$$v_{\\text{ср}} \\ne \\frac{60 + 90}{2} = 75\\text{ км/ч}$$\n\nСредняя скорость — это всегда **весь путь, делённый на всё время**:\n$$v_{\\text{ср}} = \\frac{s_{\\text{весь}}}{t_{\\text{всё}}} = \\mathbf{72\\text{ км/ч}}$$",
      badge: "Внимание",
      formula: "v_{\\text{ср}} = \\frac{s_{\\text{весь}}}{t_{\\text{всё}}}",
      highlight: "Средняя скорость всегда равна отношению всего пути ко всему времени.",
    },
    {
      id: 6,
      eyebrow: "06 / Итог",
      title: "Краткий итог",
      content:
        "1. При равномерном движении скорость не меняется ($v = \\text{const}$).\n2. Путь прямо пропорционален времени: $s = vt$.\n3. Средняя скорость равна $s_{\\text{весь}} / t_{\\text{всё}}$.",
      badge: "Итог",
      highlight: "Формула s = vt — основа всей кинематики.",
    },
  ],
};

export const lesson03Quiz: QuizQuestion[] = [
  {
    id: "ilk-03-q1",
    position: 1,
    question: "Qaysi harakat to‘g‘ri chiziqli tekis harakat deb ataladi?",
    explanation: "Tekis harakatda jism ixtiyoriy teng vaqt oraliqlarida bir xil masofa bosib o‘tadi va tezlik doimiy bo‘ladi.",
    options: [
      { id: "o1", label: "Teng vaqt oraliqlarida bir xil masofa bosib o‘tiladigan harakat", isCorrect: true },
      { id: "o2", label: "Tezligi doimiy ortib boradigan harakat", isCorrect: false },
      { id: "o3", label: "Aylana bo‘ylab tezlanuvchan aylanish", isCorrect: false },
    ],
  },
];

export const lesson03Practice: PracticeTask[] = [
  {
    id: "ilk-03-p1",
    position: 1,
    prompt:
      "Velosipedchi $6\\text{ m/s}$ doimiy tezlik bilan $15\\text{ sekund}$ to‘g‘ri chiziq bo‘ylab harakatlandi. Velosipedchi bosib o‘tgan masofani ($\\text{m}$) hisoblang.",
    unit: "m",
    answer: 90,
    tolerance: 0.1,
    hint: "To‘g‘ri chiziqli tekis harakatda masofa formulasi: $s = v \\cdot t$.",
    solution:
      "**Namunaviy yechim:**\n- **Berilgan:** $v = 6\\text{ m/s}$, $t = 15\\text{ s}$\n- **Topish kerak:** $s - ?$\n- **Formula:** $s = v \\cdot t$\n- **Yechilishi:** $s = 6\\text{ m/s} \\times 15\\text{ s} = 90\\text{ m}$\n- **Javob:** $90\\text{ m}$.",
  },
];

export const lesson03Static: Lesson = {
  id: "ilk-qadam-03",
  courseSlug: "ilk-qadam",
  number: "03",
  position: 3,
  title: "To‘g‘ri chiziqli tekis harakat, tezlik va ko‘chish",
  intro: "Avtomobil spidometri doim 60 km/soatni ko‘rsatsa, 2 soatda qancha yuradi? O‘rtacha tezlik nima?",
  videoUrl: null,
  videoDurationMin: 12,
  quiz: lesson03Quiz,
  practice: lesson03Practice,
  homework: {
    title: "Tekis harakat va tezlikni o‘lchash",
    body: "1. 100 metr masofani qadamingiz bilan o‘lchab, sekundomerda necha sekundda yurib o‘tishingizni hisoblang.\n2. Tezligingizni m/s va km/soat da aniqlang.",
    pdfUrl: null,
  },
  isPublished: true,
};
