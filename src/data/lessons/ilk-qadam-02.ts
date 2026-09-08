import type { Locale } from "@/lib/i18n";
import type { Lesson, PracticeTask, QuizQuestion } from "@/types/lesson";
import type { LessonSlide } from "./ilk-qadam-01";

export const lesson02Slides: Record<Locale, LessonSlide[]> = {
  uz: [
    {
      id: 1,
      eyebrow: "01 / Kirish",
      title: "Harakat Nima?",
      content:
        "Do‘stingiz bilan avtobusda o‘tiribsiz. U sizga nisbatan qimirlamayapti, lekin bekatdagi odamga nisbatan ikkalangiz ham $60\\text{ km/soat}$ tezlikda ketmoqdasiz.\n\nDemak, **mutlaq tinch turgan jism yo‘q**. Harakat doim nimagadir nisbatan aniqlanadi.",
      badge: "Nisbiylik",
      highlight: "Harakat har doim boshqa bir jismga nisbatan qaraladi.",
    },
    {
      id: 2,
      eyebrow: "02 / Moddiy Nuqta",
      title: "Qachon O‘lcham Muhim Emas?",
      content:
        "Agar jism bosib o‘tgan masofa uning o‘lchamidan ancha katta bo‘lsa, uning shakli va o‘lchamini hisobga olmasdan **moddiy nuqta** deb qarash mumkin.\n\n* **Moddiy nuqta:** Toshkentdan Samarqandga ketayotgan poyezd ($300\\text{ km}$ yo‘lda $200\\text{ metr}$ juda kichik).\n* **Moddiy nuqta emas:** Vagon ichida yurib ketayotgan odam uchun poyezd nuqta emas!",
      badge: "Moddiy nuqta",
    },
    {
      id: 3,
      eyebrow: "03 / Sanoq Sistemasi",
      title: "Sanoq Sistemasi: 3 Asosiy Ustun",
      content:
        "Jism qayerdaligini va qachon yetib borishini bilish uchun 3 ta narsa kerak:\n\n1. **Sanoq jismi:** Biz taqqoslayotgan jism (bekat, Yer, daraxt).\n2. **Koordinatalar sistemasi:** Masofani o‘lchash chizg‘ichi ($x, y$ o‘qlari).\n3. **Soat:** Vaqtni o‘lchovchi asbob (sekundomer).",
      badge: "3 Ustun",
      formula: "\\text{Sanoq sistemasi} = \\text{Jism} + \\text{Koordinata} + \\text{Soat}",
    },
    {
      id: 4,
      eyebrow: "04 / Yo‘l va Ko‘chish",
      title: "Yo‘l va Ko‘chish: Farqi Nimada?",
      content:
        "Ko‘pchilik bu ikkisini adashtiradi:\n\n* **Yo‘l ($s$):** Bosib o‘tilgan chiziqning haqiqiy uzunligi (skalyar, har doim musbat).\n* **Ko‘chish ($\\vec{s}$):** Boshlang‘ichdan oxirgi nuqtaga tortilgan to‘g‘ri chiziq (vektor).\n\n**Oddiy misol:** Stadionda 1 doira yugurib, startga qaytsangiz: Yo‘lingiz $400\\text{ m}$, lekin ko‘chishingiz **$0\\text{ m}$**!",
      badge: "Muhim farq",
      formula: "s \\ge |\\vec{s}|",
      highlight: "Yo‘l hech qachon kamaymaydi, ko‘chish esa nol bo‘lishi mumkin.",
    },
    {
      id: 5,
      eyebrow: "05 / Tezliklar Nisbiyligi",
      title: "Daryoda Qayiq: Tezliklarni Qo‘shish",
      content:
        "Suvda suzayotgan qayiqning qirg‘oqqa nisbatan tezligi oqimga bog‘liq:\n\n* **Oqim bo‘ylab:** Oqim qayiqqa yordam beradi:\n  $$v = v_{\\text{qayiq}} + v_{\\text{oqim}}$$\n* **Oqimga qarshi:** Oqim qayiqni to‘xtatishga urinadi:\n  $$v = v_{\\text{qayiq}} - v_{\\text{oqim}}$$\n\nAgar qayiq tezligi oqimga teng bo‘lsa, qayiq qirg‘oqdagilarga joyida turgandek ko‘rinadi!",
      badge: "Tezliklar",
      formula: "v_{\\text{bo‘ylab}} = v_1 + v_2, \\quad v_{\\text{qarshi}} = v_1 - v_2",
    },
    {
      id: 6,
      eyebrow: "06 / Xulosa",
      title: "Qisqa Xulosa",
      content:
        "1. Tinchlik ham, harakat ham nisbiydir.\n2. Traektoriya — chizilgan iz, yo‘l — uning uzunligi, ko‘chish — to‘g‘ri yo‘nalgan vektor.\n3. Oqim bo‘ylab tezliklar qo‘shiladi, oqimga qarshi ayriladi.",
      badge: "Xulosa",
      highlight: "Fizikada har doim eng muhim savol: «Kimga nisbatan?»",
    },
  ],
  en: [
    {
      id: 1,
      eyebrow: "01 / Introduction",
      title: "What is Motion?",
      content:
        "You sit next to your friend on a bus. To you, your friend is stationary. But to a person waiting on the street, both of you are traveling at $60\\text{ km/h}$.\n\nThere is **no absolute rest** in the universe. Motion is always relative to an observer.",
      badge: "Relativity",
      highlight: "Motion is always described relative to another reference object.",
    },
    {
      id: 2,
      eyebrow: "02 / Point Particle",
      title: "When Size Doesn't Matter",
      content:
        "When the distance traveled is vastly greater than the object's dimensions, we can treat it as a **point particle**.\n\n* **Point particle:** A train traveling $300\\text{ km}$ between cities.\n* **Not a particle:** A passenger walking inside a carriage.",
      badge: "Model",
    },
    {
      id: 3,
      eyebrow: "03 / Reference Frame",
      title: "The Frame of Reference",
      content:
        "To describe where and when an event occurs, we need 3 components:\n\n1. **Reference body:** The object we measure from (e.g. Earth, bench).\n2. **Coordinate system:** Rulers along $x, y$ axes.\n3. **Clock:** A timepiece to measure intervals.",
      badge: "3 Pillars",
      formula: "\\text{Reference Frame} = \\text{Body} + \\text{Coordinates} + \\text{Clock}",
    },
    {
      id: 4,
      eyebrow: "04 / Distance vs Displacement",
      title: "Distance vs Displacement",
      content:
        "* **Distance ($s$):** Total length of the actual path (scalar, always positive).\n* **Displacement ($\\vec{s}$):** The straight arrow connecting start to finish (vector).\n\n**Example:** Running 1 lap around a 400m track: Distance = $400\\text{ m}$, but displacement = **$0\\text{ m}$**!",
      badge: "Key concept",
      formula: "s \\ge |\\vec{s}|",
      highlight: "Distance never decreases; displacement can be zero.",
    },
    {
      id: 5,
      eyebrow: "05 / Relative Velocity",
      title: "Boats on a River: Adding Velocities",
      content:
        "The boat's speed relative to the riverbank depends on the current:\n\n* **Downstream (with current):** The current boosts the boat: $v = v_{\\text{boat}} + v_{\\text{current}}$\n* **Upstream (against current):** The current slows the boat: $v = v_{\\text{boat}} - v_{\\text{current}}$",
      badge: "Velocities",
      formula: "v_{\\text{down}} = v_1 + v_2, \\quad v_{\\text{up}} = v_1 - v_2",
    },
    {
      id: 6,
      eyebrow: "06 / Summary",
      title: "Core Takeaways",
      content:
        "1. Rest and motion are both relative.\n2. Trajectory is the path; distance is path length; displacement is a straight vector.\n3. Velocities add when moving with the medium and subtract when opposing it.",
      badge: "Summary",
      highlight: "Always ask: «Relative to what?»",
    },
  ],
  ru: [
    {
      id: 1,
      eyebrow: "01 / Введение",
      title: "Что такое движение?",
      content:
        "Вы сидите рядом с другом в автобусе. Для вас друг неподвижен. Но для человека на остановке вы оба мчитесь со скоростью $60\\text{ км/ч}$.\n\n**Абсолютного покоя в природе нет**. Движение всегда относительно.",
      badge: "Относительность",
      highlight: "Движение всегда определяется относительно тела отсчёта.",
    },
    {
      id: 2,
      eyebrow: "02 / Материальная точка",
      title: "Когда размером можно пренебречь?",
      content:
        "Если пройденное расстояние намного больше размеров тела, его форму и размеры можно не учитывать и считать **материальной точкой**.\n\n* **Точка:** Поезд, проезжающий путь в $300\\text{ км}$.\n* **Не точка:** Пассажир, идущий внутри вагона.",
      badge: "Модель",
    },
    {
      id: 3,
      eyebrow: "03 / Система отсчёта",
      title: "Система отсчёта: 3 компонента",
      content:
        "Чтобы описать положение тела, необходимы три вещи:\n\n1. **Тело отсчёта:** Объект, относительно которого смотрим (Земля, дерево).\n2. **Система координат:** Оси для измерения расстояний ($x, y$).\n3. **Часы:** Прибор для отсчёта времени.",
      badge: "3 основы",
      formula: "\\text{Система отсчёта} = \\text{Тело} + \\text{Координаты} + \\text{Часы}",
    },
    {
      id: 4,
      eyebrow: "04 / Путь и Перемещение",
      title: "В чём разница?",
      content:
        "* **Путь ($s$):** Длина траектории (скаляр, всегда положителен).\n* **Перемещение ($\\vec{s}$):** Направленный отрезок из начальной точки в конечную (вектор).\n\n**Пример:** Пробежав 1 круг по стадиону, путь = $400\\text{ м}$, а перемещение = **$0\\text{ м}$**!",
      badge: "Различие",
      formula: "s \\ge |\\vec{s}|",
      highlight: "Путь не может уменьшаться, а перемещение может быть равно нулю.",
    },
    {
      id: 5,
      eyebrow: "05 / Относительность скорости",
      title: "Лодка на реке",
      content:
        "Скорость лодки относительно берега зависит от течения:\n\n* **По течению:** Река помогает лодке: $v = v_{\\text{лодки}} + v_{\\text{течения}}$\n* **Против течения:** Река тормозит лодку: $v = v_{\\text{лодки}} - v_{\\text{течения}}$",
      badge: "Скорости",
      formula: "v_{\\text{по}} = v_1 + v_2, \\quad v_{\\text{против}} = v_1 - v_2",
    },
    {
      id: 6,
      eyebrow: "06 / Итоги",
      title: "Краткий итог",
      content:
        "1. Покой и движение относительны.\n2. Траектория — линия движения; путь — её длина; перемещение — вектор.\n3. По течению скорости складываются, против — вычитаются.",
      badge: "Итог",
      highlight: "Главный вопрос механики: «Относительно чего?»",
    },
  ],
};

export const lesson02Quiz: QuizQuestion[] = [
  {
    id: "ilk-02-q1",
    position: 1,
    question: "Avtobusda ketayotgan yo‘lovchi qaysi jismga nisbatan tinch holatda turadi?",
    explanation: "Yo‘lovchi o‘zi o‘tirgan avtobus va uning o‘rindiqlariga nisbatan harakatlanmaydi.",
    options: [
      { id: "o1", label: "Avtobus o‘rindig‘iga nisbatan", isCorrect: true },
      { id: "o2", label: "Ko‘chadagi bekatga nisbatan", isCorrect: false },
      { id: "o3", label: "Yo‘l chetidagi daraxtlarga nisbatan", isCorrect: false },
      { id: "o4", label: "Qarama-qarshi kelayotgan mashinaga nisbatan", isCorrect: false },
    ],
  },
  {
    id: "ilk-02-q2",
    position: 2,
    question: "Quyidagi holatlarning qaysi birida jismni moddiy nuqta deb hisoblash mumkin?",
    explanation: "Samolyotning o‘lchami Toshkent-Moskva oralig‘idagi $3000\\text{ km}$ masofaga nisbatan nihoyatda kichikdir.",
    options: [
      { id: "o1", label: "Toshkentdan Moskvaga uchayotgan samolyot", isCorrect: true },
      { id: "o2", label: "Samolyot saloni ichida yurgan styuardessa uchun samolyot", isCorrect: false },
      { id: "o3", label: "Garajga joylashtirilayotgan avtomobil", isCorrect: false },
      { id: "o4", label: "Turnikda aylanayotgan gimnastikachi", isCorrect: false },
    ],
  },
  {
    id: "ilk-02-q3",
    position: 3,
    question: "O‘quvchi ertalab uydan maktabga $500\\text{ m}$ piyoda bordi va darsdan so‘ng yana uyiga qaytib keldi. Uning ko‘chishi nimaga teng?",
    explanation: "Ko‘chish — boshlang‘ich va oxirgi nuqta orasidagi masofa. Boshlagan joyiga qaytgani sababli ko‘chish $0\\text{ m}$ bo‘ladi (bosib o‘tgan yo‘li esa $1000\\text{ m}$).",
    options: [
      { id: "o1", label: "0 m", isCorrect: true },
      { id: "o2", label: "500 m", isCorrect: false },
      { id: "o3", label: "1000 m", isCorrect: false },
      { id: "o4", label: "250 m", isCorrect: false },
    ],
  },
  {
    id: "ilk-02-q4",
    position: 4,
    question: "Katerning o‘z tezligi $8\\text{ m/s}$, daryo oqimi tezligi $2\\text{ m/s}$. Kater oqim bo‘ylab harakatlansa, qirg‘oqqa nisbatan tezligi qanday bo‘ladi?",
    explanation: "Oqim bo‘ylab harakatda tezliklar qo‘shiladi: $v = 8 + 2 = 10\\text{ m/s}$.",
    options: [
      { id: "o1", label: "10 m/s", isCorrect: true },
      { id: "o2", label: "6 m/s", isCorrect: false },
      { id: "o3", label: "8 m/s", isCorrect: false },
      { id: "o4", label: "16 m/s", isCorrect: false },
    ],
  },
  {
    id: "ilk-02-q5",
    position: 5,
    question: "Xuddi shu kater oqimga qarshi harakatlansa, qirg‘oqqa nisbatan uning tezligi qanday bo‘ladi?",
    explanation: "Oqimga qarshi harakatda oqim tezligi ayriladi: $v = 8 - 2 = 6\\text{ m/s}$.",
    options: [
      { id: "o1", label: "6 m/s", isCorrect: true },
      { id: "o2", label: "10 m/s", isCorrect: false },
      { id: "o3", label: "4 m/s", isCorrect: false },
      { id: "o4", label: "8 m/s", isCorrect: false },
    ],
  },
];

export const lesson02Practice: PracticeTask[] = [
  {
    id: "ilk-02-p1",
    position: 1,
    prompt: "Motorli qayiqning tinch suvdagi tezligi $12\\text{ m/s}$, daryo oqimi tezligi esa $3\\text{ m/s}$. Qayiq oqim bo‘ylab suzganda uning qirg‘oqqa nisbatan tezligini ($\\text{m/s}$) hisoblang.",
    unit: "m/s",
    answer: 15,
    tolerance: 0.1,
    hint: "Oqim bo‘ylab tezliklar qo‘shiladi: $v = v_{\\text{qayiq}} + v_{\\text{oqim}}$.",
    solution: "$v = 12 + 3 = 15\\text{ m/s}$.",
  },
  {
    id: "ilk-02-p2",
    position: 2,
    prompt: "Xuddi shu qayiq oqimga qarshi suzganda uning qirg‘oqqa nisbatan tezligini ($\\text{m/s}$) toping.",
    unit: "m/s",
    answer: 9,
    tolerance: 0.1,
    hint: "Oqimga qarshi tezliklar ayriladi: $v = v_{\\text{qayiq}} - v_{\\text{oqim}}$.",
    solution: "$v = 12 - 3 = 9\\text{ m/s}$.",
  },
  {
    id: "ilk-02-p3",
    position: 3,
    prompt: "Sayyoh to‘g‘ri yo‘l bo‘ylab shimolga qarab $40\\text{ metr}$ yurdi, so‘ngra ortiga qaytib janubga qarab $15\\text{ metr}$ yurdi. Sayyoh bosib o‘tgan umumiy yo‘lni ($\\text{m}$) toping.",
    unit: "m",
    answer: 55,
    tolerance: 0.1,
    hint: "Yo‘l — bosib o‘tilgan barcha masofalar yig‘indisi ($40 + 15$).",
    solution: "$s = 40 + 15 = 55\\text{ m}$.",
  },
  {
    id: "ilk-02-p4",
    position: 4,
    prompt: "Shu sayyohning boshlang‘ich nuqtaga nisbatan ko‘chish modulini ($\\text{m}$) toping.",
    unit: "m",
    answer: 25,
    tolerance: 0.1,
    hint: "Ko‘chish — boshlang‘ichdan oxirgi nuqtagacha bo‘lgan to‘g‘ri masofa ($40 - 15$).",
    solution: "$|\\vec{s}| = 40 - 15 = 25\\text{ m}$.",
  },
  {
    id: "ilk-02-p5",
    position: 5,
    prompt: "Poyezd $25\\text{ m/s}$ tezlik bilan ketmoqda. Yo‘lovchi poyezd harakati yo‘nalishida vagon ichida $2\\text{ m/s}$ tezlik bilan bormoqda. Yo‘lovchining Yerga nisbatan tezligini ($\\text{m/s}$) toping.",
    unit: "m/s",
    answer: 27,
    tolerance: 0.1,
    hint: "Ikkala harakat bir tomonga yo‘nalgan bo‘lsa, tezliklar qo‘shiladi: $25 + 2$.",
    solution: "$v = 25 + 2 = 27\\text{ m/s}$.",
  },
];

export const lesson02Static: Lesson = {
  id: "ilk-qadam-02",
  courseSlug: "ilk-qadam",
  number: "02",
  position: 2,
  title: "Moddiy nuqta, sanoq sistemasi va harakatning nisbiyligi",
  intro: "Avtobusda do‘stingiz bilan ketayotganingizda kim harakatlanyapti — sizmi yoki ko‘chadagi odamlar?",
  videoUrl: null,
  videoDurationMin: 10,
  quiz: lesson02Quiz,
  practice: lesson02Practice,
  homework: {
    title: "Harakatning nisbiyligi va ko‘chishni kuzatish",
    body: "1. Maktabga borishdagi yo‘lingiz va to‘g‘ri chiziqli ko‘chishingizni xaritadan qarab chamalang.\n2. Suv havzasida yoki ariqda suzayotgan jism harakatini suvga va qirg‘oqqa nisbatan taqqoslang.",
    pdfUrl: null,
  },
  isPublished: true,
};
