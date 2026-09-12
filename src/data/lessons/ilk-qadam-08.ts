import type { Locale } from "@/lib/i18n";
import type { Lesson, PracticeTask, QuizQuestion } from "@/types/lesson";
import type { LessonSlide } from "./ilk-qadam-01";

export const lesson08Slides: Record<Locale, LessonSlide[]> = {
  uz: [
    {
      id: 1,
      eyebrow: "01 / Kirish va Tajriba",
      title: "Muz Ustida Do‘stingizni Itarsangiz...",
      content:
        "Tasavvur qiling: siz va do‘stingiz muz maydonida konkida yuzma-yuz turibsiz. Siz qo‘lingiz bilan do‘stingizni itarib yubordingiz.\n\nDo‘stingiz oldinga uchib ketadi, lekin hayron qolasiz — **sizning o‘zingiz ham orqaga qarab sirpanasiz!** Garchi do‘stingiz sizni umuman itarmagan bo‘lsa ham. Nega bunday bo‘ldi?",
      badge: "Muz tajribasi",
      highlight: "Bir tomonlama ta’sir bo‘lmaydi: har qanday ta’sir har doim o‘zaro ta’sirdir.",
    },
    {
      id: 2,
      eyebrow: "02 / Tabiat Sirlari",
      title: "Yakkalangan Kuch Bo‘lmaydi",
      content:
        "Tabiatda faqat bitta jismga ta’sir qiluvchi yakkalangan kuch mavjud emas. Kuchlar har doim **juft holda** dunyoga keladi:\n\n* Devorni musht bilan ursangiz, devor ham xuddi shunday kuch bilan qo‘lingizga uradi (va qo‘lingiz og‘riydi!).\n* Yer sizni o‘ziga tortadi, lekin siz ham butun massangiz bilan Yerni o‘zingizga tortib turasiz!\n* Koptok polga urilganda, pol ham koptokni yuqoriga itaradi.",
      badge: "Juft kuchlar",
      highlight: "Siz nimani itsangiz, u ham sizni xuddi shunday kuch bilan itaradi.",
    },
    {
      id: 3,
      eyebrow: "03 / Qonun Ta’rifi",
      title: "Nyutonning 3-Qonuni",
      content:
        "Nyuton bu hodisani uchinchi qonun sifatida ifodalagan:\n\n*«Ikkita jismning bir-biriga ta’sir kuchlari har doim modul jihatdan teng, yo‘nalish jihatdan esa bir to‘g‘ri chiziq bo‘ylab qarama-qarshi tomonga yo‘nalgan bo‘ladi:»*\n\n$$\\vec{F}_{12} = -\\vec{F}_{21} \\quad \\iff \\quad |F_1| = |F_2|$$",
      badge: "Nyuton 3",
      formula: "\\vec{F}_{12} = -\\vec{F}_{21}",
    },
    {
      id: 4,
      eyebrow: "04 / Ko‘p Uchraydigan Xato",
      title: "Nega Bu Kuchlar Bir-birini Yo‘qotmaydi?",
      content:
        "O‘quvchilar tez-tez so‘rashadi: «Agar ta’sir kuchi aks ta’sir kuchiga teng va qarama-qarshi bo‘lsa, nega ular bir-birini yo‘qotib ($F - F = 0$), jism harakatsiz qolmaydi?»\n\n**Eng muhim sir:** Bu kuchlar **IKKI XIL JISMGA** qo‘yilgan!\n* $F_1$ kuchi — birinchi jismga qo‘yilgan.\n* $F_2$ kuchi — ikkinchi jismga qo‘yilgan.\nUlarni bir-biridan ayirish mumkin emas, chunki ular bitta jismga ta'sir qilmayapti!",
      badge: "Muhim farq",
      highlight: "Ta'sir va aks ta'sir kuchlari turli jismlarga qo‘yiladi, shuning uchun bir-birini yo‘qotmaydi.",
    },
    {
      id: 5,
      eyebrow: "05 / Koinot Texnologiyasi",
      title: "Reaktiv Harakat va Raketalar",
      content:
        "Nyutonning 3-qonuni insoniyatga koinotga chiqish eshigini ochdi. Raketa dvigateli yonilg‘i gazlarini ulkan kuch bilan pastga otib chiqaradi ($F_{\\text{gaz}}$).\n\nAks ta’sir sifatida, otilib chiqqan gazlar raketani xuddi shunday kuch bilan yuqoriga, yulduzlar sari itaradi ($F_{\\text{raketa}}$)!\nVakuumda hech qanday havo yo‘q bo‘lsa ham, raketa o‘zidan gaz chiqarib tezlashaveradi.",
      badge: "Kosmonavtika",
      formula: "\\vec{F}_{\\text{raketa}} = -\\vec{F}_{\\text{gaz}}",
    },
    {
      id: 6,
      eyebrow: "06 / Xulosa",
      title: "Qisqa Xulosa",
      content:
        "1. Ta’sir doim aks ta’sirga teng: $F_1 = F_2$.\n2. Kuchlar turli jismlarga qo‘yiladi va tabiati bir xil bo‘ladi.\n3. Suzish, yurish, qushlarning parvozi va raketalar harakati — hammasi Nyutonning 3-qonuniga tayanadi.",
      badge: "Xulosa",
      highlight: "Yer yuzida bir qadam oldinga yurishingiz — Yerni bir lahzaga orqaga itarishingizdir!",
    },
  ],
  en: [
    {
      id: 1,
      eyebrow: "01 / Experiment",
      title: "Pushing a Friend on Ice...",
      content:
        "Imagine standing face-to-face on frictionless ice. You shove your friend forward.\n\nYour friend accelerates away, but surprisingly — **you slide backward too!** Even though your friend did not push you back. Why did this happen?",
      badge: "Ice experiment",
      highlight: "Forces cannot exist in isolation: every action is fundamentally an interaction.",
    },
    {
      id: 2,
      eyebrow: "02 / Nature's Secret",
      title: "Forces Always Come in Pairs",
      content:
        "There is no such thing as an isolated force in the universe. Forces always arrive in simultaneous pairs:\n\n* Punch a concrete wall, and the wall hits your fist back with equal force (causing pain!).\n* Earth pulls you down gravitationally, but you pull Earth upward with the exact same magnitude!\n* A ball striking the floor exerts downward force; the floor pushes the ball upward.",
      badge: "Action-Reaction",
    },
    {
      id: 3,
      eyebrow: "03 / The Law",
      title: "Newton's Third Law",
      content:
        "Newton formulated this symmetry as his Third Law of Motion:\n\n*For every action, there is an equal and opposite reaction:*\n\n$$\\vec{F}_{12} = -\\vec{F}_{21} \\quad \\iff \\quad |F_1| = |F_2|$$",
      badge: "Newton 3",
      formula: "\\vec{F}_{12} = -\\vec{F}_{21}",
    },
    {
      id: 4,
      eyebrow: "04 / Common Pitfall",
      title: "Why Don't These Forces Cancel Out?",
      content:
        "Students frequently ask: «If action equals reaction and directions are opposite, why don't they cancel to zero ($F - F = 0$)?»\n\n**The Crucial Insight:** The two forces act on **DIFFERENT BODIES**!\n* $F_1$ acts on body 1.\n* $F_2$ acts on body 2.\nForces only cancel out when applied to the *same* object!",
      badge: "Crucial rule",
      highlight: "Action and reaction never cancel because they act on different objects.",
    },
    {
      id: 5,
      eyebrow: "05 / Spaceflight",
      title: "Rocket Propulsion",
      content:
        "Newton's third law powers rocket propulsion into orbit. Rocket combustion violently expels exhaust gas downward ($F_{\\text{gas}}$).\n\nIn reaction, the expelled gas thrusts the rocket upward with equal momentum ($F_{\\text{rocket}}$) — even in the complete vacuum of deep space!",
      badge: "Rockets",
      formula: "\\vec{F}_{\\text{rocket}} = -\\vec{F}_{\\text{gas}}",
    },
    {
      id: 6,
      eyebrow: "06 / Summary",
      title: "Key Takeaways",
      content:
        "1. Action equals reaction in magnitude, opposite in direction: $F_1 = F_2$.\n2. They act on different bodies and cannot cancel each other.\n3. Walking, swimming, flight, and rocketry all rely on Newton's third law.",
      badge: "Summary",
      highlight: "Walking forward requires pushing the Earth backward beneath your feet.",
    },
  ],
  ru: [
    {
      id: 1,
      eyebrow: "01 / Эксперимент",
      title: "Толчок на скользком льду...",
      content:
        "Представьте, что вы стоите на гладком льду на коньках напротив друга. Вы толкаете его вперед руками.\n\nДруг покатится вперед, но удивительно — **вы сами покатитесь назад!** Хотя друг вас не трогал. Почему это произошло?",
      badge: "Опыт на льду",
      highlight: "В природе действие всегда является взаимодействием двух тел.",
    },
    {
      id: 2,
      eyebrow: "02 / Свойства сил",
      title: "Силы всегда рождаются парами",
      content:
        "Одиночных сил в природе не существует. Силы всегда возникают парами:\n\n* Удар кулаком по стене вызывает равный по силе обратный удар стены по кулаку.\n* Земля притягивает вас силой тяжести, но и вы притягиваете Землю к себе точно с такой же силой!\n* Теннисный мяч бьет по ракетке, а ракетка с той же силой бьет по мячу.",
      badge: "Пара сил",
    },
    {
      id: 3,
      eyebrow: "03 / Формулировка",
      title: "Третий закон Ньютона",
      content:
        "Исаак Ньютон обобщил симметрию сил в своем третьем законе:\n\n*Тела действуют друг на друга с силами, равными по модулю и противоположными по направлению:*\n\n$$\\vec{F}_{12} = -\\vec{F}_{21} \\quad \\iff \\quad |F_1| = |F_2|$$",
      badge: "Ньютон 3",
      formula: "\\vec{F}_{12} = -\\vec{F}_{21}",
    },
    {
      id: 4,
      eyebrow: "04 / Частая ошибка",
      title: "Почему силы не компенсируют друг друга?",
      content:
        "Частый вопрос: «Если силы равны и направлены в разные стороны, почему они не дают ноль ($F - F = 0$)?»\n\n**Главный секрет:** Эти силы приложены к **РАЗНЫМ ТЕЛАМ**!\n* Сила действия приложена к одному телу.\n* Сила противодействия приложена ко второму телу.\nСкладывать можно только те силы, которые действуют на *одно и то же* тело!",
      badge: "Важно",
      highlight: "Силы действия и противодействия не уравновешиваются, так как приложены к разным телам.",
    },
    {
      id: 5,
      eyebrow: "05 / Космонавтика",
      title: "Реактивное движение",
      content:
        "Третий закон Ньютона объясняет полет ракет. Сопло выбрасывает сжатый горячий газ назад с огромной силой ($F_{\\text{газ}}$).\n\nВ ответ выброшенный газ с точно такой же силой толкает ракету вперед ($F_{\\text{ракета}}$) даже в абсолютном вакууме космоса!",
      badge: "Ракеты",
      formula: "\\vec{F}_{\\text{ракета}} = -\\vec{F}_{\\text{газ}}",
    },
    {
      id: 6,
      eyebrow: "06 / Итог",
      title: "Краткий итог",
      content:
        "1. Сила действия равна силе противодействия: $F_1 = F_2$.\n2. Они одной природы, но приложены к разным телам.\n3. Ходьба, плавание, полет птиц и космических ракет работают по третьему закону Ньютона.",
      badge: "Итог",
      highlight: "Чтобы сделать шаг вперед, нужно оттолкнуть Землю назад.",
    },
  ],
};

export const lesson08Quiz: QuizQuestion[] = [
  {
    id: "ilk-08-q1",
    position: 1,
    question: "Nyutonning uchinchi qonunining matematik ifodasini ko‘rsating:",
    explanation: "Nyutonning uchinchi qonuni: F⃗₁₂ = -F⃗₂₁ yoki modul jihatdan |F₁| = |F₂|.",
    options: [
      { id: "o1", label: "F⃗₁₂ = -F⃗₂₁", isCorrect: true },
      { id: "o2", label: "F = m · a", isCorrect: false },
      { id: "o3", label: "F = m · g", isCorrect: false },
      { id: "o4", label: "F = k · x", isCorrect: false },
    ],
  },
  {
    id: "ilk-08-q2",
    position: 2,
    question: "Nega ta'sir va aks ta'sir kuchlari bir-birini kompensatsiya qilmaydi (nolga aylantirmaydi)?",
    explanation: "Chunki bu kuchlar bitta jismga emas, balki ikki xil jismga qo‘yilgan bo‘ladi.",
    options: [
      { id: "o1", label: "Chunki ular ikki xil jismga qo‘yilgan", isCorrect: true },
      { id: "o2", label: "Chunki ularning modullari har xil", isCorrect: false },
      { id: "o3", label: "Chunki ular turli vaqtlarda paydo bo‘ladi", isCorrect: false },
      { id: "o4", label: "Chunki ular bir xil yo‘nalishda bo‘ladi", isCorrect: false },
    ],
  },
  {
    id: "ilk-08-q3",
    position: 3,
    question: "Ot aravani 500 N kuch bilan oldinga tortmoqda. Arava otni qanday kuch bilan orqaga tortadi?",
    explanation: "Nyutonning uchinchi qonuniga ko‘ra, arava ham otni xuddi shunday 500 N kuch bilan orqaga tortadi.",
    options: [
      { id: "o1", label: "500 N", isCorrect: true },
      { id: "o2", label: "0 N", isCorrect: false },
      { id: "o3", label: "1000 N", isCorrect: false },
      { id: "o4", label: "250 N", isCorrect: false },
    ],
  },
  {
    id: "ilk-08-q4",
    position: 4,
    question: "Kosmik raketa havosi yo‘q ochiq koinotda qanday kuch hisobiga tezlanish oladi?",
    explanation:
      "Raketa dvigatelidan otilib chiqayotgan gazlarning raketaga beradigan aks ta'sir kuchi (reaktiv kuch) hisobiga.",
    options: [
      { id: "o1", label: "Yonilg‘i gazlarining raketaga beradigan aks ta'sir kuchi hisobiga", isCorrect: true },
      { id: "o2", label: "Oyning gravitatsiya kuchi hisobiga", isCorrect: false },
      { id: "o3", label: "Quyosh shamoli bosimi hisobiga", isCorrect: false },
      { id: "o4", label: "Atmosfera havosining itarishi hisobiga", isCorrect: false },
    ],
  },
  {
    id: "ilk-08-q5",
    position: 5,
    question: "Muz ustidagi ikki bolakay qo‘llarini bir-biriga tirab itarishdi. Qaysi biri ko‘proq tezlanish oladi?",
    explanation: "Kuchlar teng bo‘lgani uchun a = F/m formula bo‘yicha massasi kichik bo‘lgan bola kattaroq tezlanish oladi.",
    options: [
      { id: "o1", label: "Massasi kichikroq bo‘lgan bolakay", isCorrect: true },
      { id: "o2", label: "Massasi kattaroq bo‘lgan bolakay", isCorrect: false },
      { id: "o3", label: "Ikkalasi ham bir xil tezlanish oladi", isCorrect: false },
      { id: "o4", label: "Birinchi bo‘lib itargan bola", isCorrect: false },
    ],
  },
];

export const lesson08Practice: PracticeTask[] = [
  {
    id: "ilk-08-p1",
    position: 1,
    prompt:
      "Muz ustida massasi $40\\text{ kg}$ bo‘lgan bola massasi $60\\text{ kg}$ bo‘lgan ikkinchi bolani $120\\text{ N}$ kuch bilan itardi. Ikkinchi bola birinchi bolani qanday kuch ($\\text{N}$) bilan itargan?",
    unit: "N",
    answer: 120,
    tolerance: 0.1,
    hint: "Nyutonning uchinchi qonuniga ko‘ra, ta'sir kuchi aks ta'sir kuchiga teng: $|F_1| = |F_2|$.",
    solution: "$|F_2| = |F_1| = 120\\text{ N}$.",
  },
  {
    id: "ilk-08-p2",
    position: 2,
    prompt:
      "Yuqoridagi masalada ($F = 120\\text{ N}$), massasi $40\\text{ kg}$ bo‘lgan birinchi bolaning olgan tezlanishini ($\\text{m/s}^2$) hisoblang.",
    unit: "m/s²",
    answer: 3,
    tolerance: 0.1,
    hint: "$a_1 = F / m_1 = 120 / 40$.",
    solution: "$a_1 = \\frac{120}{40} = 3\\text{ m/s}^2$.",
  },
  {
    id: "ilk-08-p3",
    position: 3,
    prompt:
      "Xuddi shu to‘qnashuvda ($F = 120\\text{ N}$), massasi $60\\text{ kg}$ bo‘lgan ikkinchi bolaning olgan tezlanishini ($\\text{m/s}^2$) hisoblang.",
    unit: "m/s²",
    answer: 2,
    tolerance: 0.1,
    hint: "$a_2 = F / m_2 = 120 / 60$.",
    solution: "$a_2 = \\frac{120}{60} = 2\\text{ m/s}^2$.",
  },
  {
    id: "ilk-08-p4",
    position: 4,
    prompt:
      "Muz ustida turgan ikki konkichi bir-birini itarib yubordi. Birinchisi $4\\text{ m/s}^2$, ikkinchisi $2\\text{ m/s}^2$ tezlanish oldi. Birinchi konkichining massasi $50\\text{ kg}$ bo‘lsa, ikkinchi konkichining massasini ($\\text{kg}$) toping.",
    unit: "kg",
    answer: 100,
    tolerance: 0.5,
    hint: "$m_1 a_1 = m_2 a_2 \\implies m_2 = (50 \\times 4) / 2$.",
    solution: "$m_2 = \\frac{m_1 a_1}{a_2} = \\frac{50 \\times 4}{2} = 100\\text{ kg}$.",
  },
  {
    id: "ilk-08-p5",
    position: 5,
    prompt:
      "Raketa dvigateli bir sekundda $10\\text{ kg}$ gazni $2000\\text{ m/s}$ tezlikda otib chiqaradi. Dvigatel hosil qilgan reaktiv tortish kuchini ($\\text{kN}$) toping.",
    unit: "kN",
    answer: 20,
    tolerance: 0.1,
    hint: "$F = (m / t) \\times v = 10 \\times 2000 = 20000\\text{ N} = 20\\text{ kN}$.",
    solution: "$F = 10 \\times 2000 = 20\\,000\\text{ N} = 20\\text{ kN}$.",
  },
];

export const lesson08Static: Lesson = {
  id: "ilk-qadam-08",
  courseSlug: "ilk-qadam",
  number: "08",
  position: 8,
  title: "Nyutonning uchinchi qonuni: Ta’sir va aks ta’sir",
  intro: "Devorni musht bilan ursangiz nega qo‘lingiz og‘riydi? Koinot raketasi havosiz bo‘shliqda qanday itariladi?",
  videoUrl: null,
  videoDurationMin: 15,
  quiz: lesson08Quiz,
  practice: lesson08Practice,
  homework: {
    title: "Ta’sir va aks ta’sir kuchi kuzatuvlari",
    body: "1. Sharni puflang va uchini boylamay qo‘yib yuboring. Shar qaysi tomonga uchadi, havo qaysi tomonga chiqadi? Nyutonning 3-qonuni asosida tushuntiring.\n2. Ikkita bir xil prujinali dinamometrni uchlaridan bir-biriga ilashtirib torting. Ikkala asbobning ko‘rsatkichlarini taqqoslang.",
    pdfUrl: null,
  },
  isPublished: true,
};
