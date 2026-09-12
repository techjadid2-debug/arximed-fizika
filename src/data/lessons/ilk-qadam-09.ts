import type { Locale } from "@/lib/i18n";
import type { Lesson, PracticeTask, QuizQuestion } from "@/types/lesson";
import type { LessonSlide } from "./ilk-qadam-01";

export const lesson09Slides: Record<Locale, LessonSlide[]> = {
  uz: [
    {
      id: 1,
      eyebrow: "01 / Kirish va Jumboq",
      title: "Olma Tushadi, Nega Oy Tushmaydi?",
      content:
        "Rivoyatga ko‘ra, Nyuton bog‘da o‘tirganida daraxtdan olma tushganini ko‘rib chuqur o‘yga tolgan:\n\n*«Olmani yerga tortayotgan kuch yuqori tog‘ cho‘qqilarida ham bor. U yanada yuqoriga — Oygacha yetib bormaydimi?»*\n\nAslida **Oy ham doimo Yer sari qulaydi!** Lekin uning yon tomonga (orbital) tezligi shu qadar kattaki, u qulagan sari Yerning yumaloq sirti ham uning ostidan egilib ketaveradi va u hech qachon yerga urilmaydi.",
      badge: "Koinot siri",
      highlight: "Oy — Yer atrofida to‘xtovsiz erkin tushayotgan yo‘ldoshdir.",
    },
    {
      id: 2,
      eyebrow: "02 / Qonun Formulalari",
      title: "Butun Olam Tortishish Qonuni",
      content:
        "Koinotdagi barcha jismlar massaga ega bo‘lgani uchun bir-birini o‘zaro tortadi:\n\n*«Ikki moddiy nuqta orasidagi tortishish kuchi ularning massalari ko‘paytmasiga to‘g‘ri proporsional va ular orasidagi masofa kvadratiga teskari proporsionaldir:»*\n\n$$F = G \\frac{m_1 m_2}{r^2}$$\nBu yerda $G = 6.67 \\times 10^{-11}\\text{ N}\\cdot\\text{m}^2\\text{/kg}^2$ — gravitatsiya doimiysi.",
      badge: "Gravitatsiya",
      formula: "F = G \\frac{m_1 m_2}{r^2}",
    },
    {
      id: 3,
      eyebrow: "03 / Og‘irlik Kuchi",
      title: "Og‘irlik Kuchi (F_og‘)",
      content:
        "Yer o‘z sirtidagi barcha jismlarni markaziga qarab tortadi. Ushbu tortishish kuchi **og‘irlik kuchi** deb ataladi:\n\n$$F_{\\text{og‘}} = m g$$\n\nBu yerda $g = G \\frac{M_{\\text{Yer}}}{R_{\\text{Yer}}^2} \\approx 9.8\\text{ m/s}^2 \\approx 10\\text{ m/s}^2$.\nOg‘irlik kuchi doim Yer markaziga qarab tik pastga yo‘nalgan bo‘ladi.",
      badge: "Og‘irlik kuchi",
      formula: "F_{\\text{og‘}} = mg",
    },
    {
      id: 4,
      eyebrow: "04 / Nozik Farq",
      title: "Massa va Og‘irlik: Farqi Nimada?",
      content:
        "Kundalik hayotda odamlar «og‘irligim 60 kg» deb xato gapirishadi. Fizikada bu ikkisi mutlaqo boshqa narsalar:\n\n* **Massa ($m$):** Jismdagi modda miqdori va inersiya o‘lchovi (skalyar, birligi $\\text{kg}$). Oydami, Marsdami o‘zgarmaydi!\n* **Og‘irlik ($P$):** Jismning tayanch yoki osmaga ko‘rsatadigan bosim kuchi (vektor, birligi Nyuton $\\text{N}$). Liftda yoki vaznsizlikda o‘zgarib turadi!",
      badge: "Massa vs Og‘irlik",
      highlight: "Massa kilogrammda, og‘irlik esa Nyutonda o‘lchanadi.",
    },
    {
      id: 5,
      eyebrow: "05 / Lift va Vaznsizlik",
      title: "Liftda Og‘irlik va Vaznsizlik",
      content:
        "Tarozi ustida turib tezlanish bilan harakatlanayotgan liftga chiqsangiz:\n\n* **Lift yuqoriga $a$ tezlanish bilan ketsa:** Sizni pastga kuchliroq bosadi (ortiqcha yuklanish):\n  $$P = m(g + a)$$\n* **Lift pastga $a$ tezlanish bilan tushsa:** Jism yengillashadi:\n  $$P = m(g - a)$$\n* **Agar lift arqoni uzilib erkin tushsa ($a = g$):**\n  $$P = m(g - g) = 0 \\quad (\\text{Vaznsizlik!})$$",
      badge: "Vaznsizlik",
      formula: "P = m(g \\pm a), \\quad P = 0 \\text{ (erkin tushganda)}",
    },
    {
      id: 6,
      eyebrow: "06 / Xulosa",
      title: "Qisqa Xulosa",
      content:
        "1. Koinotdagi barcha jismlar massasi orqali tortishadi: $F = G m_1 m_2 / r^2$.\n2. Masofa 2 marta oshsa, tortishish kuchi $2^2 = 4$ marta kamayadi.\n3. Xalqaro Kosmik Stantsiyada gravitatsiya yo‘qolgani uchun emas, Yer atrofida doimiy erkin tushish holatida bo‘lgani uchun vaznsizlik yuz beradi.",
      badge: "Xulosa",
      highlight: "Kosmonavtlar gravitatsiya yo‘qligidan emas, to‘xtovsiz erkin tushayotganidan muallaq suzadi.",
    },
  ],
  en: [
    {
      id: 1,
      eyebrow: "01 / The Moon Puzzle",
      title: "Apples Fall, Why Doesn't the Moon?",
      content:
        "Observing an apple fall from a tree, Newton pondered: does the very same force that pulls the apple reach all the way to the Moon?\n\nIndeed, **the Moon is perpetually in free fall toward Earth!** However, its tangential orbital velocity carries it sideways so fast that as it falls, the curved surface of Earth curves away beneath it at the exact same rate.",
      badge: "Cosmic secret",
      highlight: "The Moon is simply an object in continuous free fall around Earth.",
    },
    {
      id: 2,
      eyebrow: "02 / Universal Law",
      title: "Universal Law of Gravitation",
      content:
        "Every particle in the universe attracts every other particle:\n\n*The gravitational force between two point masses is directly proportional to the product of their masses and inversely proportional to the square of the distance between them:*\n\n$$F = G \\frac{m_1 m_2}{r^2}$$\nwhere $G = 6.67 \\times 10^{-11}\\text{ N}\\cdot\\text{m}^2\\text{/kg}^2$.",
      badge: "Gravitation",
      formula: "F = G \\frac{m_1 m_2}{r^2}",
    },
    {
      id: 3,
      eyebrow: "03 / Gravity on Earth",
      title: "Force of Gravity",
      content:
        "Earth pulls any mass near its surface toward its center with a force known as weight or gravity:\n\n$$F_{\\text{grav}} = mg$$\n\nwhere $g = G \\frac{M_{\\text{Earth}}}{R_{\\text{Earth}}^2} \\approx 9.8\\text{ m/s}^2 \\approx 10\\text{ m/s}^2$.",
      badge: "Gravity",
      formula: "F_{\\text{grav}} = mg",
    },
    {
      id: 4,
      eyebrow: "04 / Key Distinction",
      title: "Mass vs. Weight",
      content:
        "Everyday speech confuses these two distinct physical quantities:\n\n* **Mass ($m$):** The measure of inertia and matter contained within an object (scalar, measured in $\\text{kg}$). Identical on Earth, the Moon, or deep space!\n* **Weight ($P$):** The force exerted by a body on its support or suspension (vector, measured in Newtons $\\text{N}$). Varies with acceleration and environment!",
      badge: "Mass vs Weight",
    },
    {
      id: 5,
      eyebrow: "05 / Elevators and Weightlessness",
      title: "Elevators & Weightlessness",
      content:
        "Standing on a bathroom scale inside an accelerating elevator:\n\n* **Accelerating upward ($a$):** Scale reads heavier:\n  $$P = m(g + a)$$\n* **Accelerating downward ($a$):** Scale reads lighter:\n  $$P = m(g - a)$$\n* **Cable snaps ($a = g$):**\n  $$P = m(g - g) = 0 \\quad (\\text{Apparent Weightlessness!})$$",
      badge: "Weightlessness",
      formula: "P = m(g \\pm a)",
    },
    {
      id: 6,
      eyebrow: "06 / Summary",
      title: "Key Takeaways",
      content:
        "1. Universal gravitation: $F = G m_1 m_2 / r^2$.\n2. Doubling separation distance reduces gravitational pull fourfold ($1/r^2$).\n3. Astronauts float in the ISS not because gravity is zero, but because the station and crew fall together in permanent orbital free fall.",
      badge: "Summary",
      highlight: "Weightlessness is not the absence of gravity; it is the absence of a supporting normal force.",
    },
  ],
  ru: [
    {
      id: 1,
      eyebrow: "01 / Загадка Ньютона",
      title: "Яблоко падает, почему не падает Луна?",
      content:
        "Легенда гласит, что Ньютон задумался: сила, заставившая упасть яблоко в саду, простирается на вершины гор. Не действует ли она вплоть до Луны?\n\nОказывается, **Луна постоянно падает на Землю!** Но ее колоссальная орбитальная скорость такова, что пока она смещается к центру, сферическая поверхность Земли 'уходит' из-под нее с той же скоростью.",
      badge: "Тайны космоса",
    },
    {
      id: 2,
      eyebrow: "02 / Закон тяготения",
      title: "Закон всемирного тяготения",
      content:
        "Все тела во Вселенной притягиваются друг к другу:\n\n*Сила гравитационного притяжения прямо пропорциональна произведению масс и обратно пропорциональна квадрату расстояния между ними:*\n\n$$F = G \\frac{m_1 m_2}{r^2}$$\nгде $G = 6.67 \\times 10^{-11}\\text{ Н}\\cdot\\text{м}^2\\text{/кг}^2$.",
      badge: "Гравитация",
      formula: "F = G \\frac{m_1 m_2}{r^2}",
    },
    {
      id: 3,
      eyebrow: "03 / Сила тяжести",
      title: "Сила тяжести на Земле",
      content:
        "Земля притягивает тела к своему центру с силой тяжести:\n\n$$F_{\\text{тяж}} = mg$$\n\nгде $g = G \\frac{M_{\\text{Земли}}}{R_{\\text{Земли}}^2} \\approx 9.8\\text{ м/с}^2 \\approx 10\\text{ м/с}^2$.",
      badge: "Сила тяжести",
      formula: "F_{\\text{тяж}} = mg",
    },
    {
      id: 4,
      eyebrow: "04 / Разница",
      title: "Масса и вес: в чем разница?",
      content:
        "В быту часто путают эти понятия:\n\n* **Масса ($m$):** Мера инертности и количество вещества (скаляр, в $\\text{кг}$). Неизменна на Земле, на Луне или в открытом космосе!\n* **Вес ($P$):** Сила, с которой тело давит на опору или растягивает подвес (векторная сила, измеряется в Ньютонах $\\text{Н}$). Зависит от ускорения лифта и гравитации!",
      badge: "Масса и вес",
    },
    {
      id: 5,
      eyebrow: "05 / Лифт и невесомость",
      title: "Вес в лифте и невесомость",
      content:
        "На напольных весах внутри движущегося лифта:\n\n* **Лифт разгоняется вверх ($a$):** Перегрузка:\n  $$P = m(g + a)$$\n* **Лифт разгоняется вниз ($a$):** Уменьшение веса:\n  $$P = m(g - a)$$\n* **Свободное падение лифта ($a = g$):**\n  $$P = m(g - g) = 0 \\quad (\\text{Невесомость!})$$",
      badge: "Невесомость",
      formula: "P = m(g \\pm a)",
    },
    {
      id: 6,
      eyebrow: "06 / Итог",
      title: "Краткий итог",
      content:
        "1. Закон всемирного тяготения: $F = G m_1 m_2 / r^2$.\n2. Увеличение расстояния в 2 раза ослабляет гравитацию в 4 раза.\n3. Невесомость на МКС возникает не из-за отсутствия гравитации, а из-за бесконечного свободного падения станции по орбите вокруг Земли.",
      badge: "Итог",
      highlight: "Невесомость — состояние отсутствия давления на опору при свободном падении.",
    },
  ],
};

export const lesson09Quiz: QuizQuestion[] = [
  {
    id: "ilk-09-q1",
    position: 1,
    question: "Jism massasi va og‘irligi haqidagi qaysi fikr to‘g‘ri?",
    explanation: "Massa — jismdagi modda miqdori va inersiya o‘lchovi (kg), og‘irlik esa tayanchga ko‘rsatiladigan bosim kuchidir (N).",
    options: [
      { id: "o1", label: "Massa kilogrammda, og‘irlik esa Nyutonda o‘lchanadi", isCorrect: true },
      { id: "o2", label: "Massa va og‘irlik mutlaqo bir xil tushunchadir", isCorrect: false },
      { id: "o3", label: "Oyga borganda massa kamayadi, og‘irlik esa o‘zgarmaydi", isCorrect: false },
      { id: "o4", label: "Og‘irlik skalyar, massa esa vektor kattalikdir", isCorrect: false },
    ],
  },
];

export const lesson09Practice: PracticeTask[] = [
  {
    id: "ilk-09-p1",
    position: 1,
    prompt:
      "Massasi $60\\text{ kg}$ bo‘lgan o‘quvchining Yer sirtidagi og‘irlik kuchini ($\\text{N}$) hisoblang. ($g = 10\\text{ m/s}^2$).",
    unit: "N",
    answer: 600,
    tolerance: 1,
    hint: "Og‘irlik kuchi formulasi: $F_{\\text{og‘}} = m \\cdot g$.",
    solution:
      "**Namunaviy yechim:**\n- **Berilgan:** $m = 60\\text{ kg}$, $g = 10\\text{ m/s}^2$\n- **Topish kerak:** $F_{\\text{og‘}} - ?$\n- **Formula:** $F_{\\text{og‘}} = m \\cdot g$\n- **Yechilishi:** $F_{\\text{og‘}} = 60\\text{ kg} \\times 10\\text{ m/s}^2 = 600\\text{ N}$\n- **Javob:** $600\\text{ N}$.",
  },
];

export const lesson09Static: Lesson = {
  id: "ilk-qadam-09",
  courseSlug: "ilk-qadam",
  number: "09",
  position: 9,
  title: "Butun olam tortishish qonuni va jism og‘irligi",
  intro: "Olma yerga tushadi, lekin nega Oy yerga tushib ketmaydi? Liftda vaznimiz nega o‘zgaradi va vaznsizlik qanday sirlarga ega?",
  videoUrl: null,
  videoDurationMin: 18,
  quiz: lesson09Quiz,
  practice: lesson09Practice,
  homework: {
    title: "Vaznsizlik va gravitatsiya tadqiqoti",
    body: "1. Plastik idishning tagiga ikkita mayda teshik qilib suv to‘ldiring. Idishni qo‘lingizdan yerga tashlab yuboring. Tushish paytida suv teshikdan oqadimi yoki oqmaydimi? Nega?\n2. O‘z vazningizni Yerda va Oydagi ($g = 1.62\\text{ m/s}^2$) qiymatini taqqoslab hisoblang.",
    pdfUrl: null,
  },
  isPublished: true,
};
