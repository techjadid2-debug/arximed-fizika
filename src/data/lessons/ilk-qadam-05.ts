import type { Locale } from "@/lib/i18n";
import type { Lesson, PracticeTask, QuizQuestion } from "@/types/lesson";
import type { LessonSlide } from "./ilk-qadam-01";

export const lesson05Slides: Record<Locale, LessonSlide[]> = {
  uz: [
    {
      id: 1,
      eyebrow: "01 / Kirish",
      title: "Og‘ir Jism Tezroq Tushadimi?",
      content:
        "Qo‘lingizdagi kitob va yengil qog‘oz varag‘ini bir vaqtda tashlasangiz, kitob darhol yerga tushadi, qog‘oz esa havoda chayqalib sekin tushadi.\n\nLekin qog‘ozni g‘ijimlab mahkam shar qilib tashlasangiz-chi? U kitob bilan bir vaqtda tushadi! Demak, gap massada emas, balki **havoning qarshiligida**.",
      badge: "Muammo",
      highlight: "Havo bo‘lmasa, hamma jism bir xil tushadi.",
    },
    {
      id: 2,
      eyebrow: "02 / Tarixiy Kashfiyot",
      title: "Galiley Tajribasi va Vakuum",
      content:
        "1589-yilda **Galileo Galiley** Piza minorasidan turli og‘irlikdagi sharlarni bir vaqtda tashlab, Arastu aytgan «og‘ir jism tezroq tushadi» degan 2000 yillik xatoni inkor qildi.\n\n**Vakuumda (havosiz joyda)** qush pati bilan og‘ir metall shar bir xil tezlanish bilan tushadi va yerga roppa-rosa bir vaqtda yetib keladi!",
      badge: "Kashfiyot",
      highlight: "Erkin tushishda jism massasi rol o‘ynamaydi.",
    },
    {
      id: 3,
      eyebrow: "03 / Tabiat Doimiysi",
      title: "Erkin Tushish Tezlanishi (g)",
      content:
        "Yer o‘ziga tortayotgan barcha jismlarga bir xil tezlanish beradi. Bu **erkin tushish tezlanishi ($g$)** deb ataladi:\n$$g \\approx 9.8\\text{ m/s}^2 \\quad (\\text{masalalarda } g = 10\\text{ m/s}^2)$$\n\nBu nima degani? Har bir sekundda erkin tushayotgan jismning tezligi $10\\text{ m/s}$ ga oshib boradi:\n* 0-sekundda: $0\\text{ m/s}$\n* 1-sekundda: $10\\text{ m/s}$\n* 2-sekundda: $20\\text{ m/s}$\n* 3-sekundda: $30\\text{ m/s}$",
      badge: "Doimiy g",
      formula: "g \\approx 9.8\\text{ m/s}^2 \\approx 10\\text{ m/s}^2",
    },
    {
      id: 4,
      eyebrow: "04 / Formulalar",
      title: "Erkin Tushish Formulalari",
      content:
        "Erkin tushish — boshlang‘ich tezliksiz ($v_0 = 0$) va $a = g$ bo‘lgan tekis tezlanuvchan harakatdir:\n\n* **Tezlik:** $v = g t$\n* **Tushish balandligi:** $h = \\frac{g t^2}{2}$\n* **Tushish vaqti:** $t = \\sqrt{\\frac{2h}{g}}$\n* **Tezlik va balandlik bog‘liqligi:** $v = \\sqrt{2gh}$",
      badge: "Formulalar",
      formula: "h = \\frac{g t^2}{2}, \\quad v = \\sqrt{2gh}",
    },
    {
      id: 5,
      eyebrow: "05 / Simmetriya",
      title: "Yuqoriga Otilgan Jism Simmetriyasi",
      content:
        "Agar koptokni tik yuqoriga $v_0$ tezlik bilan otsangiz:\n1. **Tezlik simmetriyasi:** Qanday tezlik bilan otilsa, qaytib tushganda ham xuddi shu tezlikka ega bo‘ladi ($v_{\\text{tush}} = v_0$).\n2. **Vaqt simmetriyasi:** Yuqoriga ko‘tarilish vaqti pastga tushish vaqtiga teng bo‘ladi ($t_{\\text{chiq}} = t_{\\text{tush}}$).\nEng yuqori nuqtada jismning bir zumga tezligi nolga teng bo‘ladi ($v = 0$).",
      badge: "Simmetriya",
      formula: "t_{\\text{chiq}} = t_{\\text{tush}} = \\frac{v_0}{g}",
      highlight: "Chiqish vaqti tushish vaqtiga teng.",
    },
    {
      id: 6,
      eyebrow: "06 / Xulosa",
      title: "Qisqa Xulosa",
      content:
        "1. Erkin tushish — faqat og‘irlik kuchi ta'siridagi harakatdir.\n2. Barcha jismlar massasidan qat'i nazar bir xil $g = 10\\text{ m/s}^2$ tezlanish bilan tushadi.\n3. Balandlik $h = gt^2 / 2$ ga teng.",
      badge: "Xulosa",
      highlight: "Galiley fizikasi zamonaviy kosmonavtika asosidir.",
    },
  ],
  en: [
    {
      id: 1,
      eyebrow: "01 / Introduction",
      title: "Do Heavy Objects Fall Faster?",
      content:
        "Drop a book and a sheet of flat paper at the same time: the book hits the ground instantly, while paper flutters down slowly.\n\nCrumple the paper tightly into a dense ball and drop them again: they land at the exact same moment! The difference is entirely due to **air resistance**, not mass.",
      badge: "Puzzle",
      highlight: "Without air resistance, all bodies fall at the identical rate.",
    },
    {
      id: 2,
      eyebrow: "02 / Discovery",
      title: "Galileo and the Vacuum",
      content:
        "In 1589, **Galileo Galilei** disproved Aristotle's 2,000-year-old dogma that heavier objects fall faster.\n\nIn a **vacuum (no air)**, a feather and a heavy metal bowling ball experience identical acceleration and hit the ground together!",
      badge: "Discovery",
      highlight: "Mass has zero effect on free fall acceleration.",
    },
    {
      id: 3,
      eyebrow: "03 / Constant",
      title: "Acceleration of Gravity (g)",
      content:
        "Earth imparts the same acceleration to every falling body near its surface:\n$$g \\approx 9.8\\text{ m/s}^2 \\approx 10\\text{ m/s}^2$$\n\nEvery second, a falling object speeds up by $10\\text{ m/s}$:\n* $t = 0\\text{ s} \\to 0\\text{ m/s}$\n* $t = 1\\text{ s} \\to 10\\text{ m/s}$\n* $t = 2\\text{ s} \\to 20\\text{ m/s}$",
      badge: "Constant g",
      formula: "g \\approx 9.8\\text{ m/s}^2 \\approx 10\\text{ m/s}^2",
    },
    {
      id: 4,
      eyebrow: "04 / Formulas",
      title: "Free Fall Equations",
      content:
        "Free fall from rest ($v_0 = 0$):\n\n* **Velocity:** $v = g t$\n* **Height:** $h = \\frac{g t^2}{2}$\n* **Time:** $t = \\sqrt{\\frac{2h}{g}}$\n* **Velocity at impact:** $v = \\sqrt{2gh}$",
      badge: "Formulas",
      formula: "h = \\frac{g t^2}{2}, \\quad v = \\sqrt{2gh}",
    },
    {
      id: 5,
      eyebrow: "05 / Symmetry",
      title: "Projectile Symmetry",
      content:
        "When thrown vertically upward at speed $v_0$:\n1. **Speed symmetry:** It returns with the exact same launch speed ($v = v_0$).\n2. **Time symmetry:** Time going up equals time coming down ($t_{\\text{up}} = t_{\\text{down}} = v_0 / g$).\nAt the peak, velocity momentarily drops to zero.",
      badge: "Symmetry",
      formula: "t_{\\text{up}} = t_{\\text{down}} = \\frac{v_0}{g}",
      highlight: "Time up equals time down.",
    },
    {
      id: 6,
      eyebrow: "06 / Summary",
      title: "Core Takeaways",
      content:
        "1. Free fall occurs under gravity alone.\n2. All objects accelerate at $g \\approx 10\\text{ m/s}^2$ regardless of mass.\n3. Impact velocity is $v = \\sqrt{2gh}$.",
      badge: "Summary",
      highlight: "Galilean kinematics underpins space flight.",
    },
  ],
  ru: [
    {
      id: 1,
      eyebrow: "01 / Введение",
      title: "Падают ли тяжёлые тела быстрее?",
      content:
        "Если бросить книгу и лист бумаги одновременно, книга упадет быстрее. Но если скомкать бумагу в плотный шарик, они упадут абсолютно одновременно!\n\nДело не в массе, а в **сопротивлении воздуха**.",
      badge: "Парадокс",
      highlight: "Без воздуха все тела падают с одинаковым ускорением.",
    },
    {
      id: 2,
      eyebrow: "02 / Открытие",
      title: "Опыт Галилея и вакуум",
      content:
        "В 1589 году **Галилео Галилей** опроверг заблуждение Аристотеля о том, что тяжелые тела падают быстрее.\n\nВ **вакууме (без воздуха)** птичье перо и свинцовый шар падают с одинаковым ускорением и касаются дна одновременно!",
      badge: "Открытие",
      highlight: "Масса тела не влияет на ускорение свободного падения.",
    },
    {
      id: 3,
      eyebrow: "03 / Постоянная",
      title: "Ускорение свободного падения (g)",
      content:
        "Земля сообщает всем телам одинаковое ускорение:\n$$g \\approx 9.8\\text{ м/с}^2 \\approx 10\\text{ м/с}^2$$\n\nКаждую секунду скорость падающего тела увеличивается на $10\\text{ м/с}$:\n* $0\\text{ с} \\to 0\\text{ м/с}$\n* $1\\text{ с} \\to 10\\text{ м/с}$\n* $2\\text{ с} \\to 20\\text{ м/с}$",
      badge: "Константа g",
      formula: "g \\approx 9.8\\text{ м/с}^2 \\approx 10\\text{ м/с}^2",
    },
    {
      id: 4,
      eyebrow: "04 / Формулы",
      title: "Формулы свободного падения",
      content:
        "Падение без начальной скорости ($v_0 = 0$):\n\n* **Скорость:** $v = g t$\n* **Высота:** $h = \\frac{g t^2}{2}$\n* **Время:** $t = \\sqrt{\\frac{2h}{g}}$\n* **Связь скорости и высоты:** $v = \\sqrt{2gh}$",
      badge: "Формулы",
      formula: "h = \\frac{g t^2}{2}, \\quad v = \\sqrt{2gh}",
    },
    {
      id: 5,
      eyebrow: "05 / Симметрия",
      title: "Симметрия броска вверх",
      content:
        "При броске вертикально вверх с начальной скоростью $v_0$:\n1. Скорость возвращения равна начальной скорости ($v = v_0$).\n2. Время подъема равно времени падения ($t_{\\text{подъема}} = t_{\\text{падения}}$).\nВ верхней точке скорость на мгновение равна нулю.",
      badge: "Симметрия",
      formula: "t_{\\text{под}} = t_{\\text{пад}} = \\frac{v_0}{g}",
      highlight: "Время подъема равно времени падения.",
    },
    {
      id: 6,
      eyebrow: "06 / Итог",
      title: "Краткий итог",
      content:
        "1. Свободное падение происходит только под действием силы тяжести.\n2. Все тела падают с ускорением $g \\approx 10\\text{ м/с}^2$.\n3. Высота рассчитывается по формуле $h = gt^2 / 2$.",
      badge: "Итог",
      highlight: "Опыт Галилея — фундамент классической механики.",
    },
  ],
};

export const lesson05Quiz: QuizQuestion[] = [
  {
    id: "ilk-05-q1",
    position: 1,
    question: "Vakuumda (havosiz muhitda) qush pati bilan og‘ir metall shar bir vaqtda tashlansa nima bo‘ladi?",
    explanation: "Vakuumda havo qarshiligi yo‘q, shuning uchun ikkala jism ham bir xil g tezlanish bilan tushib, bir vaqtda yerga yetib keladi.",
    options: [
      { id: "o1", label: "Ikkala jism bir xil vaqtda yerga yetib keladi", isCorrect: true },
      { id: "o2", label: "Metall shar ancha tezroq tushadi", isCorrect: false },
      { id: "o3", label: "Qush pati havoda muallaq qolib ketadi", isCorrect: false },
      { id: "o4", label: "Ikkalasi ham yuqoriga uchib ketadi", isCorrect: false },
    ],
  },
  {
    id: "ilk-05-q2",
    position: 2,
    question: "Yer yuzasida erkin tushish tezlanishi (g) taxminan nechaga teng?",
    explanation: "Standart qiymat 9.8 m/s², maktab hisoblashlarida oson bo‘lishi uchun 10 m/s² deb olinadi.",
    options: [
      { id: "o1", label: "10 m/s² (yoki 9.8 m/s²)", isCorrect: true },
      { id: "o2", label: "1 m/s²", isCorrect: false },
      { id: "o3", label: "100 m/s²", isCorrect: false },
      { id: "o4", label: "0 m/s²", isCorrect: false },
    ],
  },
  {
    id: "ilk-05-q3",
    position: 3,
    question: "Tinch holatdan erkin tushayotgan tosh 2 sekunddan keyin qanday tezlikka erishadi? (g = 10 m/s²)",
    explanation: "v = gt = 10 × 2 = 20 m/s.",
    options: [
      { id: "o1", label: "20 m/s", isCorrect: true },
      { id: "o2", label: "10 m/s", isCorrect: false },
      { id: "o3", label: "5 m/s", isCorrect: false },
      { id: "o4", label: "40 m/s", isCorrect: false },
    ],
  },
  {
    id: "ilk-05-q4",
    position: 4,
    question: "Jism 20 metr balandlikdan erkin tushishi uchun necha sekund vaqt ketadi? (g = 10 m/s²)",
    explanation: "t = √(2h / g) = √(2 × 20 / 10) = √4 = 2 sekund.",
    options: [
      { id: "o1", label: "2 sekund", isCorrect: true },
      { id: "o2", label: "1 sekund", isCorrect: false },
      { id: "o3", label: "4 sekund", isCorrect: false },
      { id: "o4", label: "10 sekund", isCorrect: false },
    ],
  },
  {
    id: "ilk-05-q5",
    position: 5,
    question: "Tik yuqoriga 15 m/s tezlik bilan otilgan koptok qaytib qo‘lga tushganda tezligi qanday bo‘ladi (havo qarshiligi hisobga olinmasin)?",
    explanation: "Simmetriya qoidasiga ko‘ra, qanday tezlikda otilsa, yerga ham xuddi shu 15 m/s tezlikda qaytib tushadi.",
    options: [
      { id: "o1", label: "15 m/s", isCorrect: true },
      { id: "o2", label: "0 m/s", isCorrect: false },
      { id: "o3", label: "30 m/s", isCorrect: false },
      { id: "o4", label: "7.5 m/s", isCorrect: false },
    ],
  },
];

export const lesson05Practice: PracticeTask[] = [
  {
    id: "ilk-05-p1",
    position: 1,
    prompt: "Boshlang‘ich tezliksiz tushayotgan jism $3\\text{ sekund}$da qanday balandlikdan ($\\text{m}$) tushadi? ($g = 10\\text{ m/s}^2$ deb hisoblang).",
    unit: "m",
    answer: 45,
    tolerance: 0.1,
    hint: "$h = g t^2 / 2 = 10 \\times 3^2 / 2 = 10 \\times 9 / 2$.",
    solution: "$h = \\frac{10 \\times 9}{2} = 45\\text{ m}$.",
  },
  {
    id: "ilk-05-p2",
    position: 2,
    prompt: "Balkondan ($h = 5\\text{ metr}$) erkin tushgan toshning yerga urilish tezligini ($\\text{m/s}$) hisoblang. ($g = 10\\text{ m/s}^2$).",
    unit: "m/s",
    answer: 10,
    tolerance: 0.1,
    hint: "$v = \\sqrt{2gh} = \\sqrt{2 \\times 10 \\times 5} = \\sqrt{100}$.",
    solution: "$v = \\sqrt{2 \\times 10 \\times 5} = 10\\text{ m/s}$.",
  },
  {
    id: "ilk-05-p3",
    position: 3,
    prompt: "Jism $80\\text{ metr}$ balandlikdagi minoradan erkin tushishi uchun necha sekund ($\\text{s}$) vaqt ketadi? ($g = 10\\text{ m/s}^2$).",
    unit: "s",
    answer: 4,
    tolerance: 0.1,
    hint: "$t = \\sqrt{2h / g} = \\sqrt{160 / 10} = \\sqrt{16}$.",
    solution: "$t = \\sqrt{\\frac{2 \\times 80}{10}} = 4\\text{ s}$.",
  },
  {
    id: "ilk-05-p4",
    position: 4,
    prompt: "$4\\text{ sekund}$ davomida erkin tushgan jismning erishgan oxirgi tezligini ($\\text{m/s}$) toping. ($g = 10\\text{ m/s}^2$).",
    unit: "m/s",
    answer: 40,
    tolerance: 0.1,
    hint: "$v = g t = 10 \\times 4$.",
    solution: "$v = 10 \\times 4 = 40\\text{ m/s}$.",
  },
  {
    id: "ilk-05-p5",
    position: 5,
    prompt: "Tik yuqoriga otilgan jism $2\\text{ sekund}$da eng yuqori nuqtasiga ko‘tarildi. Jismning maksimal ko‘tarilish balandligini ($\\text{m}$) hisoblang. ($g = 10\\text{ m/s}^2$).",
    unit: "m",
    answer: 20,
    tolerance: 0.1,
    hint: "$h = g t^2 / 2 = 10 \\times 2^2 / 2 = 10 \\times 4 / 2$.",
    solution: "$h = \\frac{10 \\times 4}{2} = 20\\text{ m}$.",
  },
];

export const lesson05Static: Lesson = {
  id: "ilk-qadam-05",
  courseSlug: "ilk-qadam",
  number: "05",
  position: 5,
  title: "Erkin tushish harakati va og‘irlik kuchi tezlanishi",
  intro: "Vakuumda qush pati bilan og‘ir metall shar qanday tushadi? Galiley Piza minorasida nimani isbotlagan?",
  videoUrl: null,
  videoDurationMin: 12,
  quiz: lesson05Quiz,
  practice: lesson05Practice,
  homework: {
    title: "Erkin tushish va reaksiya vaqtini tekshirish",
    body: "1. Do‘stingiz qo‘lingiz orasida 30 sm lik chizg‘ichni kutilmaganda qo‘yib yuborsin. Chizg‘ichni tutib olgan joyingizdagi santimetr bo‘yicha tushish vaqtingizni t = √(2h/g) formula orqali hisoblang.\n2. Reaksiyangiz necha millisekund ekanini aniqlang.",
    pdfUrl: null,
  },
  isPublished: true,
};
