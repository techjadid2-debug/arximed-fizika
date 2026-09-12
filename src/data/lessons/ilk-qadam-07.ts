import type { Locale } from "@/lib/i18n";
import type { Lesson, PracticeTask, QuizQuestion } from "@/types/lesson";
import type { LessonSlide } from "./ilk-qadam-01";

export const lesson07Slides: Record<Locale, LessonSlide[]> = {
  uz: [
    {
      id: 1,
      eyebrow: "01 / Kirish va Savol",
      title: "Bo‘sh Aravami Yoki Yukli Arava?",
      content:
        "Supermarketda bo‘sh aravachani itarish juda oson: yengilgina turtki bersangiz ham u tezlashadi. Ammo aravani to‘la yuklaganingizdan keyin uni joyidan qo‘zg‘atish yoki to‘xtatish uchun katta kuch sarflashingizga to‘g‘ri keladi.\n\nBir xil kuch bilan itarsangiz, nima uchun bo‘sh arava tezroq, yukli arava esa sekinroq tezlanish oladi?",
      badge: "Savol",
      highlight: "Bir xil kuch berilganda, jismning tezlanishi uning massasiga bog‘liq.",
    },
    {
      id: 2,
      eyebrow: "02 / Kuch va Tezlanish",
      title: "Kuch Qancha Katta Bo‘lsa...",
      content:
        "Avtomobil dvigatelining gaz pedalini qattiqroq bossangiz, g‘ildiraklarga ko‘proq tortish kuchi uzatiladi va avtomobil tezroq tezlanish oladi ($0$ dan $100\\text{ km/soat}$ ga qisqa vaqtda chiqadi).\n\nDemak, jism oladigan tezlanish unga ta’sir qiluvchi kuchga to‘g‘ri proporsional:\n$$a \\sim F$$\nKuch 2 marta oshsa — tezlanish ham 2 marta oshadi.",
      badge: "To‘g‘ri proporsional",
      formula: "a \\sim F",
    },
    {
      id: 3,
      eyebrow: "03 / Massa va Tezlanish",
      title: "Massa Qancha Katta Bo‘lsa...",
      content:
        "Endi kuchni o‘zgartirmay, jism massasini oshiraylik. Yengil tennis koptogini beysbol bittasi bilan ursangiz, u katta tezlanish olib uchib ketadi. Ammo o‘sha kuch bilan og‘ir metall zambarak o‘qini ursangiz, uning tezligi zo‘rg‘a o‘zgaradi.\n\nDemak, tezlanish jism massasiga teskari proporsional:\n$$a \\sim \\frac{1}{m}$$\nMassa 2 marta oshsa — tezlanish 2 marta kamayadi!",
      badge: "Teskari proporsional",
      formula: "a \\sim \\frac{1}{m}",
    },
    {
      id: 4,
      eyebrow: "04 / Asosiy Formula",
      title: "Nyutonning 2-Qonuni",
      content:
        "Ushbu ikkita xulosani birlashtirsak, butun klassik mexanikaning yuragi bo‘lgan formula kelib chiqadi:\n\n*«Jism oladigan tezlanish unga ta’sir qiluvchi natijaviy kuchga to‘g‘ri proporsional va uning massasiga teskari proporsionaldir:»*\n\n$$\\vec{a} = \\frac{\\sum \\vec{F}}{m} \\quad \\iff \\quad \\vec{F} = m \\vec{a}$$",
      badge: "Nyuton 2",
      formula: "F = ma \\quad \\iff \\quad a = \\frac{F}{m}",
      highlight: "Kuch va tezlanish yo‘nalishlari har doim bir xil bo‘ladi!",
    },
    {
      id: 5,
      eyebrow: "05 / O‘lchov Birligi",
      title: "1 Nyuton Kuchi Qancha?",
      content:
        "Fizikada kuch birligi buyuk olim Isaak Nyuton sharafiga **Nyuton ($\\text{N}$)** deb ataladi.\n\n$$1\\text{ N} = 1\\text{ kg} \\times 1\\text{ m/s}^2$$\n\n**1 Nyutonni qo‘lda qanday his qilish mumkin?**\nMassasi taxminan $100\\text{ gramm}$ bo‘lgan o‘rtacha bitta olma qo‘lingiz kaftiga beradigan bosim kuchi taxminan **$1\\text{ N}$** ga teng!",
      badge: "Birlik",
      formula: "1\\text{ N} = 1\\text{ kg}\\cdot\\text{m/s}^2",
      highlight: "100 g olma kaftingizni 1 N kuch bilan bosadi.",
    },
    {
      id: 6,
      eyebrow: "06 / Xulosa",
      title: "Qisqa Xulosa",
      content:
        "1. Kuch formulasi: $F = ma$.\n2. Tezlanish formulasi: $a = F / m$.\n3. Massa formulasi: $m = F / a$.\n4. Kuch tezlik yo‘nalishida emas, **tezlanish yo‘nalishida** bo‘ladi (masalan, tormoz berganda kuch harakatga qarshi yo‘nalgan bo‘ladi).",
      badge: "Xulosa",
      highlight: "F = ma — fizika olamining eng mashhur formulasidir.",
    },
  ],
  en: [
    {
      id: 1,
      eyebrow: "01 / Everyday Question",
      title: "Empty Cart vs. Loaded Cart",
      content:
        "In a grocery store, pushing an empty cart is effortless: a gentle nudge accelerates it forward. But once filled with groceries, starting or stopping the cart demands significantly more effort.\n\nWhy does the same push yield high acceleration for an empty cart and very little for a loaded one?",
      badge: "Question",
      highlight: "For a given force, acceleration depends inversely on mass.",
    },
    {
      id: 2,
      eyebrow: "02 / Force and Acceleration",
      title: "The Greater the Force...",
      content:
        "When a car driver steps firmly on the gas pedal, the engine transmits greater traction force to the wheels, producing higher acceleration.\n\nAcceleration is directly proportional to net force:\n$$a \\sim F$$\nDouble the force — double the acceleration.",
      badge: "Directly proportional",
      formula: "a \\sim F",
    },
    {
      id: 3,
      eyebrow: "03 / Mass and Acceleration",
      title: "The Greater the Mass...",
      content:
        "If we keep force constant while increasing mass, acceleration plummets. Hitting a tennis ball sends it flying; hitting a bowling ball with the same bat barely budges it.\n\nAcceleration is inversely proportional to mass:\n$$a \\sim \\frac{1}{m}$$\nDouble the mass — halve the acceleration.",
      badge: "Inversely proportional",
      formula: "a \\sim \\frac{1}{m}",
    },
    {
      id: 4,
      eyebrow: "04 / The Law",
      title: "Newton's Second Law",
      content:
        "Combining both observations yields the foundation of classical dynamics:\n\n*The acceleration of an object is directly proportional to the net force acting on it and inversely proportional to its mass:*\n\n$$\\vec{a} = \\frac{\\sum \\vec{F}}{m} \\quad \\iff \\quad \\vec{F} = m\\vec{a}$$",
      badge: "Newton 2",
      formula: "F = ma \\quad \\iff \\quad a = \\frac{F}{m}",
    },
    {
      id: 5,
      eyebrow: "05 / SI Unit",
      title: "What is 1 Newton?",
      content:
        "The SI unit of force is named in honor of Sir Isaac Newton: the **Newton ($\\text{N}$)**.\n\n$$1\\text{ N} = 1\\text{ kg} \\cdot \\text{m/s}^2$$\n\nAn average apple weighing approximately $100\\text{ grams}$ exerts about **$1\\text{ N}$** of downward gravitational force on your palm.",
      badge: "SI Unit",
      formula: "1\\text{ N} = 1\\text{ kg}\\cdot\\text{m/s}^2",
    },
    {
      id: 6,
      eyebrow: "06 / Summary",
      title: "Key Formulae",
      content:
        "1. Force: $F = ma$.\n2. Acceleration: $a = F / m$.\n3. Mass: $m = F / a$.\n4. Direction of force always matches direction of acceleration.",
      badge: "Summary",
      highlight: "F = ma governs everything from rolling carts to rocket launches.",
    },
  ],
  ru: [
    {
      id: 1,
      eyebrow: "01 / Жизненный пример",
      title: "Пустая тележка против нагруженной",
      content:
        "В супермаркете пустую тележку легко разогнать легким толчком. Но когда она загружена доверху, чтобы сдвинуть ее или остановить, требуется приложить солидное усилие.\n\nПочему одна и та же сила сообщает разное ускорение пустому и нагруженному телу?",
      badge: "Вопрос",
      highlight: "При одинаковой силе ускорение зависит от массы тела.",
    },
    {
      id: 2,
      eyebrow: "02 / Сила и ускорение",
      title: "Чем больше сила...",
      content:
        "Если нажать на педаль газа сильнее, двигатель сообщает автомобилю большую силу тяги, и ускорение возрастает.\n\nУскорение прямо пропорционально приложенной силе:\n$$a \\sim F$$\nУвеличиваем силу в 2 раза — ускорение растет в 2 раза.",
      badge: "Прямая связь",
      formula: "a \\sim F",
    },
    {
      id: 3,
      eyebrow: "03 / Масса и ускорение",
      title: "Чем больше масса...",
      content:
        "Если сила неизменна, но масса растет, ускорение падает. Удар битой разгоняет теннисный мяч, но почти не сдвинет тяжелое пушечное ядро.\n\nУскорение обратно пропорционально массе тела:\n$$a \\sim \\frac{1}{m}$$\nУвеличиваем массу в 2 раза — ускорение падает в 2 раза.",
      badge: "Обратная связь",
      formula: "a \\sim \\frac{1}{m}",
    },
    {
      id: 4,
      eyebrow: "04 / Главный закон",
      title: "Второй закон Ньютона",
      content:
        "Объединяя оба вывода, получаем фундаментальный закон классической механики:\n\n*Ускорение тела прямо пропорционально равнодействующей всех сил и обратно пропорционально его массе:*\n\n$$\\vec{a} = \\frac{\\sum \\vec{F}}{m} \\quad \\iff \\quad \\vec{F} = m\\vec{a}$$",
      badge: "Ньютон 2",
      formula: "F = ma \\quad \\iff \\quad a = \\frac{F}{m}",
      highlight: "Вектор силы всегда сонаправлен с вектором ускорения!",
    },
    {
      id: 5,
      eyebrow: "05 / Единица измерения",
      title: "Что такое 1 Ньютон?",
      content:
        "Единица силы в СИ — **Ньютон ($\\text{Н}$)**:\n\n$$1\\text{ Н} = 1\\text{ кг} \\cdot \\text{м/с}^2$$\n\nОбычное яблоко массой около $100\\text{ грамм}$ давит на ладонь с силой примерно **$1\\text{ Н}$**.",
      badge: "Единица СИ",
      formula: "1\\text{ Н} = 1\\text{ кг}\\cdot\\text{м/с}^2",
    },
    {
      id: 6,
      eyebrow: "06 / Итог",
      title: "Краткий итог",
      content:
        "1. Формула силы: $F = ma$.\n2. Формула ускорения: $a = F / m$.\n3. Формула массы: $m = F / a$.\n4. Направление равнодействующей силы всегда совпадает с направлением ускорения.",
      badge: "Итог",
      highlight: "F = ma — основа расчетов движения в космосе и на Земле.",
    },
  ],
};

export const lesson07Quiz: QuizQuestion[] = [
  {
    id: "ilk-07-q1",
    position: 1,
    question: "Nyutonning ikkinchi qonuni formulasini ko‘rsating:",
    explanation: "Nyutonning ikkinchi qonuni: F = m * a yoki a = F / m.",
    options: [
      { id: "o1", label: "F = m · a", isCorrect: true },
      { id: "o2", label: "v = s / t", isCorrect: false },
      { id: "o3", label: "F = G · m₁ · m₂ / r²", isCorrect: false },
      { id: "o4", label: "E = m · c²", isCorrect: false },
    ],
  },
  {
    id: "ilk-07-q2",
    position: 2,
    question: "Agar jismga ta'sir qiluvchi kuch 3 marta oshirilsa, uning tezlanishi qanday o‘zgaradi?",
    explanation: "Tezlanish kuchga to‘g‘ri proporsional (a ~ F). Shuning uchun tezlanish ham 3 marta oshadi.",
    options: [
      { id: "o1", label: "3 marta oshadi", isCorrect: true },
      { id: "o2", label: "3 marta kamayadi", isCorrect: false },
      { id: "o3", label: "9 marta oshadi", isCorrect: false },
      { id: "o4", label: "O‘zgarmaydi", isCorrect: false },
    ],
  },
  {
    id: "ilk-07-q3",
    position: 3,
    question: "Agar bir xil kuch bilan massasi 2 marta katta bo‘lgan jism itarilsa, tezlanishi qanday bo‘ladi?",
    explanation: "Tezlanish massaga teskari proporsional (a ~ 1/m). Massa 2 marta oshsa, tezlanish 2 marta kamayadi.",
    options: [
      { id: "o1", label: "2 marta kamayadi", isCorrect: true },
      { id: "o2", label: "2 marta oshadi", isCorrect: false },
      { id: "o3", label: "4 marta kamayadi", isCorrect: false },
      { id: "o4", label: "O‘zgarmaydi", isCorrect: false },
    ],
  },
  {
    id: "ilk-07-q4",
    position: 4,
    question: "1 Nyuton (N) birligi asosiy SI birliklari orqali qanday ifodalanadi?",
    explanation: "1 N = 1 kg · 1 m/s² = 1 kg·m/s².",
    options: [
      { id: "o1", label: "1 kg·m/s²", isCorrect: true },
      { id: "o2", label: "1 kg·m/s", isCorrect: false },
      { id: "o3", label: "1 g·sm/s²", isCorrect: false },
      { id: "o4", label: "1 kg/m²", isCorrect: false },
    ],
  },
  {
    id: "ilk-07-q5",
    position: 5,
    question: "Kuch yo‘nalishi doimo qaysi kattalik yo‘nalishi bilan bir xil bo‘ladi?",
    explanation: "Nyutonning ikkinchi qonuni vektor ko‘rinishida: F⃗ = m · a⃗. Demak, kuch va tezlanish yo‘nalishi doimo bir xil.",
    options: [
      { id: "o1", label: "Tezlanish yo‘nalishi bilan", isCorrect: true },
      { id: "o2", label: "Tezlik yo‘nalishi bilan", isCorrect: false },
      { id: "o3", label: "Bosib o‘tilgan yo‘l yo‘nalishi bilan", isCorrect: false },
      { id: "o4", label: "Og‘irlik markazi yo‘nalishi bilan", isCorrect: false },
    ],
  },
];

export const lesson07Practice: PracticeTask[] = [
  {
    id: "ilk-07-p1",
    position: 1,
    prompt:
      "Massasi $3\\text{ kg}$ bo‘lgan aravachaga $15\\text{ N}$ gorizontal kuch ta'sir qilmoqda. Aravacha olgan tezlanishni ($\\text{m/s}^2$) hisoblang.",
    unit: "m/s²",
    answer: 5,
    tolerance: 0.1,
    hint: "$a = F / m = 15 / 3$.",
    solution: "$a = \\frac{F}{m} = \\frac{15}{3} = 5\\text{ m/s}^2$.",
  },
  {
    id: "ilk-07-p2",
    position: 2,
    prompt:
      "Avtomobil $2.5\\text{ m/s}^2$ tezlanish bilan tezlashmoqda. Agar avtomobil massasi $1200\\text{ kg}$ bo‘lsa, unga ta'sir qilayotgan tortish kuchini ($\\text{N}$) toping.",
    unit: "N",
    answer: 3000,
    tolerance: 10,
    hint: "$F = m \\times a = 1200 \\times 2.5$.",
    solution: "$F = 1200 \\times 2.5 = 3000\\text{ N} = 3\\text{ kN}$.",
  },
  {
    id: "ilk-07-p3",
    position: 3,
    prompt:
      "$50\\text{ N}$ kuch ta'sirida jism $2\\text{ m/s}^2$ tezlanish oldi. Ushbu jismning massasini ($\\text{kg}$) aniqlang.",
    unit: "kg",
    answer: 25,
    tolerance: 0.1,
    hint: "$m = F / a = 50 / 2$.",
    solution: "$m = \\frac{F}{a} = \\frac{50}{2} = 25\\text{ kg}$.",
  },
  {
    id: "ilk-07-p4",
    position: 4,
    prompt:
      "Massasi $500\\text{ gramm}$ bo‘lgan koptokka zarba berilganda u $40\\text{ m/s}^2$ tezlanish oldi. Zarba kuchini ($\\text{N}$) toping.",
    unit: "N",
    answer: 20,
    tolerance: 0.1,
    hint: "Birliklarni SI ga o‘tkazing: $500\\text{ g} = 0.5\\text{ kg}$. So‘ng $F = 0.5 \\times 40$.",
    solution: "$m = 0.5\\text{ kg}$, $F = m \\times a = 0.5 \\times 40 = 20\\text{ N}$.",
  },
  {
    id: "ilk-07-p5",
    position: 5,
    prompt:
      "Massasi $4\\text{ kg}$ bo‘lgan jismga bir tomonga yo‘nalgan $18\\text{ N}$ va qarama-qarshi tomonga $6\\text{ N}$ kuch ta'sir qilmoqda. Jism oladigan tezlanishni ($\\text{m/s}^2$) hisoblang.",
    unit: "m/s²",
    answer: 3,
    tolerance: 0.1,
    hint: "Natijaviy kuchni toping: $F_{\\text{nat}} = 18 - 6 = 12\\text{ N}$. Keyin $a = 12 / 4$.",
    solution: "$F_{\\text{nat}} = 18 - 6 = 12\\text{ N}$, $a = \\frac{12}{4} = 3\\text{ m/s}^2$.",
  },
];

export const lesson07Static: Lesson = {
  id: "ilk-qadam-07",
  courseSlug: "ilk-qadam",
  number: "07",
  position: 7,
  title: "Kuch, massa va Nyutonning ikkinchi qonuni",
  intro: "Bo‘sh aravani itarish osonmi yoki yukli aravanimi? Klassik mexanikaning eng mashhur formulasi F = ma qanday ishlaydi?",
  videoUrl: null,
  videoDurationMin: 16,
  quiz: lesson07Quiz,
  practice: lesson07Practice,
  homework: {
    title: "Kuch va tezlanish hisob-kitoblari",
    body: "1. O‘zingiz ko‘radigan avtomobil pasportidan massasini toping. Agar u 0 dan 100 km/soat (27.8 m/s) ga 8 sekundda chiqsa, uning o‘rtacha tezlanishini va dvigatel hosil qiladigan tortish kuchini hisoblang.\n2. Bir xil kuch bilan massasi har xil bo‘lgan 3 ta jism itarilsa, ularning tezlanishlari qanday nisbatda bo‘lishini grafikda chizing.",
    pdfUrl: null,
  },
  isPublished: true,
};
