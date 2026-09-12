import type { Locale } from "@/lib/i18n";
import type { Lesson, PracticeTask, QuizQuestion } from "@/types/lesson";
import type { LessonSlide } from "./ilk-qadam-01";

export const lesson10Slides: Record<Locale, LessonSlide[]> = {
  uz: [
    {
      id: 1,
      eyebrow: "01 / Kirish va Tasavvur",
      title: "Ishqalanish Yo‘qolsa Nima Bo‘ladi?",
      content:
        "Tasavvur qiling: bir soniyada dunyodagi barcha ishqalanish g‘oyib bo‘ldi!\n\n* Siz darhol yiqilasiz va qaytib o‘rningizdan tura olmaysiz — oyoq silliq muzdek sirpanadi.\n* Harakatdagi barcha mashina va poyezdlar hech qachon tormoz bera olmaydi.\n* Bog‘langan tugunlar, kiyimlar, hatto stol ustidagi stakanlar ham o‘z-o‘zidan polga sirg‘alib tushib ketadi.\n\nDemak, ishqalanish — bizni qotirib ushlab turuvchi tabiat tayanchidir!",
      badge: "Tasavvur",
      highlight: "Ishqalanish bo‘lmasa, yer yuzida biror qadam ham yura olmasdik.",
    },
    {
      id: 2,
      eyebrow: "02 / Mikroskop Ostida",
      title: "Ishqalanish Qayerdan Paydo Bo‘ladi?",
      content:
        "Qanchalik silliq ko‘rinmasin, har qanday sirt mikroskop ostida qaralganda baland tog‘lar va chuqur daralarga o‘xshash **g‘adir-budur** bo‘ladi.\n\nIkkita jism bir-biriga tekkanda:\n1. Ushbu mikroskopik tishchalar bir-biriga ilashib qoladi.\n2. Tegib turgan eng yaqin atomlar orasida molekulyar tortishish vujudga keladi.\nJismni siljitish uchun ana shu tishchalarni sindirish yoki molekulyar bog‘larni yorib o‘tish kerak.",
      badge: "Mikroolam",
      highlight: "Ishqalanish — sirtlarning mikroskopik tishlashuvi va molekulyar yopishuvidir.",
    },
    {
      id: 3,
      eyebrow: "03 / Ishqalanish Turlari",
      title: "3 Xil Ishqalanish",
      content:
        "Fizikada ishqalanish 3 xil ko‘rinishda bo‘ladi:\n\n1. **Tinchlikdagi ishqalanish:** Og‘ir shkafni itarganingizda u birdaniga qimirlamaydi. Qancha kuch bilan itsangiz, u ham shuncha qarshi turadi (maksimal chegaragacha).\n2. **Sirpanishdagi ishqalanish:** Jism joyidan qo‘zg‘algach, doimiy qarshilik ko‘rsatadi.\n3. **Dumalanishdagi ishqalanish:** G‘ildirak yoki sharlar dumalagandagi qarshilik (sirpanishga qaraganda o‘nlab marta kichik!). G‘ildirakning kashf etilishi insoniyat tarixini o‘zgartirgan.",
      badge: "3 Tur",
      highlight: "Dumalanishdagi ishqalanish sirpanishdagidan ancha kichikdir.",
    },
    {
      id: 4,
      eyebrow: "04 / Asosiy Formula",
      title: "Sirpanish Ishqalanish Formulasi",
      content:
        "Fransuz olimlari Amonton va Kulon tajribalari asosida formula yaratilgan:\n\n*«Sirpanish ishqalanish kuchi sirtning tayanch reaksiyasi kuchi ($N$) va sirtlarning jismiga bog‘liq bo‘lgan ishqalanish koeffitsiyenti ($\\mu$) ko‘paytmasiga teng:»*\n\n$$F_{\\text{ishq}} = \\mu N$$\n\nGorizontal tekislikda jism uchun $N = mg$ bo‘ladi, demak:\n$$F_{\\text{ishq}} = \\mu m g$$\nIshqalanish kuchi sirt yuzasi maydoniga bog‘liq emas!",
      badge: "Formula",
      formula: "F_{\\text{ishq}} = \\mu N = \\mu mg",
    },
    {
      id: 5,
      eyebrow: "05 / Muhandislik",
      title: "Ishqalanish: Do‘stmi Yoki Dushman?",
      content:
        "Muhandislikda ishqalanish doim boshqariladi:\n\n* **Ishqalanishni oshirish kerak bo‘lganda:** Qishda yo‘llarga qum sepiladi, avtomobil shinalariga chuqur protektorli tikanakli rezina qo‘yiladi, sportchilar botinkasi ostiga tishlar (butsilar) o‘rnatiladi.\n* **Ishqalanishni kamaytirish kerak bo‘lganda:** Dvigatel va podshipniklarga suyuq moy quyiladi, teflon qoplamalar ishlatiladi yoki poyezdlar magnit yostiqchada (Maglev) yurgiziladi.",
      badge: "Amaliyot",
      highlight: "Moylash — sirtlar orasiga suyuqlik kiritib, mikrotishchalarni to‘g‘ridan-to‘g‘ri to‘qnashuvdan asraydi.",
    },
    {
      id: 6,
      eyebrow: "06 / Xulosa",
      title: "Qisqa Xulosa",
      content:
        "1. Ishqalanish formulasi: $F_{\\text{ishq}} = \\mu mg$.\n2. $\\mu$ (myu) — o‘lchov birliksiz koeffitsiyent (odatda $0.01$ dan $0.8$ gacha).\n3. Ishqalanish harakatga teskari yo‘nalgan bo‘ladi va mexanik energiyani issiqlikka aylantiradi.",
      badge: "Xulosa",
      highlight: "Muzda $\\mu \\approx 0.05$, quruq asfaltdagi rezina shinalarda $\\mu \\approx 0.7$.",
    },
  ],
  en: [
    {
      id: 1,
      eyebrow: "01 / Thought Experiment",
      title: "What If Friction Vanished?",
      content:
        "Imagine friction disappearing instantly worldwide:\n\n* You slip and collapse immediately, unable to walk, stand, or grasp anything.\n* Cars and high-speed trains become incapable of braking.\n* Knots untie, nails slip out of wooden walls, and objects slide off tables.\n\nFriction is nature's adhesive that makes terrestrial mechanics and life possible!",
      badge: "Scenario",
      highlight: "Without friction, walking forward would be physically impossible.",
    },
    {
      id: 2,
      eyebrow: "02 / The Microscopic View",
      title: "Where Does Friction Originate?",
      content:
        "Even mirror-polished surfaces reveal jagged microscopic peaks and valleys under magnification.\n\nWhen two surfaces touch:\n1. Microscopic asperities interlock mechanically.\n2. Adhesion bonds form between adjacent contact atoms.\nSliding requires shearing these tiny junctions.",
      badge: "Micro-scale",
    },
    {
      id: 3,
      eyebrow: "03 / Three Types",
      title: "Three Types of Friction",
      content:
        "Physics categorizes mechanical friction into three realms:\n\n1. **Static friction:** Resists initial movement (matches applied force up to a maximum threshold).\n2. **Kinetic (sliding) friction:** Resists ongoing sliding motion.\n3. **Rolling friction:** Resistance encountered by wheels and ball bearings (far smaller than sliding friction!).",
      badge: "3 Types",
    },
    {
      id: 4,
      eyebrow: "04 / The Law",
      title: "Sliding Friction Formula",
      content:
        "Amontons-Coulomb law states:\n\n*The magnitude of kinetic friction is directly proportional to normal force ($N$) and coefficient of friction ($\\mu$):*\n\n$$F_{\\text{fric}} = \\mu N$$\n\nOn a flat horizontal surface where $N = mg$:\n$$F_{\\text{fric}} = \\mu mg$$\nRemarkably, friction does not depend on contact surface area!",
      badge: "Formula",
      formula: "F_{\\text{fric}} = \\mu N = \\mu mg",
    },
    {
      id: 5,
      eyebrow: "05 / Engineering",
      title: "Friction: Friend or Foe?",
      content:
        "Engineers engineer friction continuously:\n\n* **Increasing friction:** Winter tire treads, sandpaper, rock-climbing chalk, athletic spikes.\n* **Decreasing friction:** Motor lubricants, ball bearings, teflon cookware, maglev trains floating on magnetic cushions.",
      badge: "Engineering",
    },
    {
      id: 6,
      eyebrow: "06 / Summary",
      title: "Key Takeaways",
      content:
        "1. Kinetic friction: $F = \\mu mg$ on horizontal plane.\n2. $\\mu$ is a dimensionless parameter typically ranging from 0.02 (ice) to 0.8 (rubber on dry asphalt).\n3. Friction opposes relative motion and dissipates mechanical energy into heat.",
      badge: "Summary",
      highlight: "Brakes convert vehicle kinetic energy into thermal friction energy.",
    },
  ],
  ru: [
    {
      id: 1,
      eyebrow: "01 / Эксперимент",
      title: "Что произойдет, если исчезнет трение?",
      content:
        "Представьте мир, где трение внезапно пропало:\n\n* Нельзя сделать ни шага — ноги проскальзывают, как на чистом льду.\n* Поезда и автомобили не могут затормозить.\n* Развязываются все узлы, гвозди выскакивают из стен, а вещи соскальзывают со столов на пол.\n\nТрение — естественный клей механического мира!",
      badge: "Сценарий",
      highlight: "Без силы трения невозможно ходить по земле.",
    },
    {
      id: 2,
      eyebrow: "02 / Микромир",
      title: "Откуда берется трение?",
      content:
        "Даже идеально гладкие на глаз поверхности под микроскопом напоминают горный рельеф с выступами и впадинами.\n\nПри соприкосновении тел:\n1. Микронеровности механически зацепляются друг за друга.\n2. В точках соприкосновения возникает молекулярное притяжение.\nЧтобы сдвинуть тело, нужно преодолеть эти микрозацепления.",
      badge: "Микромир",
    },
    {
      id: 3,
      eyebrow: "03 / Виды трения",
      title: "3 вида трения",
      content:
        "Различают три вида сухого трения:\n\n1. **Трение покоя:** Удерживает шкаф на месте, когда мы начинаем его толкать.\n2. **Трение скольжения:** Возникает при относительном перемещении соприкасающихся тел.\n3. **Трение качения:** Возникает при качении колеса или шарика (в десятки раз меньше трения скольжения!).",
      badge: "3 вида",
    },
    {
      id: 4,
      eyebrow: "04 / Формула",
      title: "Формула силы трения скольжения",
      content:
        "Закон Амонтона-Кулона:\n\n*Сила трения скольжения прямо пропорциональна силе нормального давления опоры ($N$):*\n\n$$F_{\\text{тр}} = \\mu N$$\n\nНа горизонтальной поверхности $N = mg$, следовательно:\n$$F_{\\text{тр}} = \\mu mg$$\nСила трения не зависит от видимой площади соприкосновения!",
      badge: "Формула",
      formula: "F_{\\text{тр}} = \\mu N = \\mu mg",
    },
    {
      id: 5,
      eyebrow: "05 / Техника",
      title: "Трение: друг или враг?",
      content:
        "В технике трением активно управляют:\n\n* **Увеличение трения:** Зимние шипованные шины, посыпание песком обледенелых дорог, насечки на подошвах обуви.\n* **Уменьшение трения:** Машинные смазки, шарикоподшипники, тефлоновые покрытия, поезда на магнитной подушке (Маглев).",
      badge: "Техника",
    },
    {
      id: 6,
      eyebrow: "06 / Итог",
      title: "Краткий итог",
      content:
        "1. Формула силы трения: $F_{\\text{тр}} = \\mu mg$.\n2. $\\mu$ (мю) — безразмерный коэффициент трения ($0.05$ на льду, $0.7$ у резины на асфальте).\n3. Трение всегда направлено против относительного движения и выделяет тепло.",
      badge: "Итог",
      highlight: "Торможение превращает кинетическую энергию машины в тепло нагрева тормозных колодок.",
    },
  ],
};

export const lesson10Quiz: QuizQuestion[] = [
  {
    id: "ilk-10-q1",
    position: 1,
    question: "Gorizontal sirtda turgan jism uchun sirpanish ishqalanish kuchi formulasi qaysi?",
    explanation: "Gorizontal sirtda tayanch reaksiyasi N = mg bo‘lgani uchun F_ishq = μ · mg.",
    options: [
      { id: "o1", label: "F = μ · m · g", isCorrect: true },
      { id: "o2", label: "F = m · a", isCorrect: false },
      { id: "o3", label: "F = k · x", isCorrect: false },
      { id: "o4", label: "F = m · g · h", isCorrect: false },
    ],
  },
  {
    id: "ilk-10-q2",
    position: 2,
    question: "Qaysi ishqalanish kuchi eng kichik qarshilikka ega?",
    explanation:
      "Dumalanishdagi ishqalanish kuchi sirpanish va tinchlikdagi ishqalanishga qaraganda ancha kichikdir.",
    options: [
      { id: "o1", label: "Dumalanishdagi ishqalanish", isCorrect: true },
      { id: "o2", label: "Sirpanishdagi ishqalanish", isCorrect: false },
      { id: "o3", label: "Tinchlikdagi maksimal ishqalanish", isCorrect: false },
      { id: "o4", label: "Barchasining qarshiligi bir xil", isCorrect: false },
    ],
  },
  {
    id: "ilk-10-q3",
    position: 3,
    question: "Ishqalanish koeffitsiyenti (μ) ning birligi qanday?",
    explanation:
      "μ = F_ishq / N (ikkalasi ham Nyuton). Nyuton Nyutonga bo‘linganda qisqaradi, shuning uchun μ o‘lchov birliksizdir.",
    options: [
      { id: "o1", label: "O‘lchov birligi yo‘q (birliksiz)", isCorrect: true },
      { id: "o2", label: "Nyuton (N)", isCorrect: false },
      { id: "o3", label: "m/s²", isCorrect: false },
      { id: "o4", label: "Joul (J)", isCorrect: false },
    ],
  },
  {
    id: "ilk-10-q4",
    position: 4,
    question: "Mashina dvigatelidagi podshipniklar orasiga moy quyishdan asosiy maqsad nima?",
    explanation:
      "Moylash sirtlar orasiga yupqa qatlam hosil qilib, mikrotishchalar to‘qnashuvini va ishqalanishni keskin kamaytiradi.",
    options: [
      { id: "o1", label: "Ishqalanishni kamaytirish va detallarni yeyilishdan asrash", isCorrect: true },
      { id: "o2", label: "Dvigatelning massasini oshirish", isCorrect: false },
      { id: "o3", label: "Dvigatel tezlanishini nolga tushirish", isCorrect: false },
      { id: "o4", label: "Tortish kuchini yo‘qotish", isCorrect: false },
    ],
  },
  {
    id: "ilk-10-q5",
    position: 5,
    question: "G‘ishtni stolda yotqizib yoki yon tomoni bilan sirpantirsak, ishqalanish kuchi qanday o‘zgaradi?",
    explanation:
      "Kulon qonuniga ko‘ra, sirpanish ishqalanish kuchi tegib turgan yuzaning geometrik maydoniga bog‘liq emas (chunki bosim va maydon o‘zaro kompensatsiyalanadi).",
    options: [
      { id: "o1", label: "O‘zgarmaydi (maydonga bog‘liq emas)", isCorrect: true },
      { id: "o2", label: "Yotqizilganda 2 marta oshadi", isCorrect: false },
      { id: "o3", label: "Tik qo‘yilganda nolga teng bo‘ladi", isCorrect: false },
      { id: "o4", label: "Maydon kichrayganda 4 marta kamayadi", isCorrect: false },
    ],
  },
];

export const lesson10Practice: PracticeTask[] = [
  {
    id: "ilk-10-p1",
    position: 1,
    prompt:
      "Gorizontal stolda massasi $5\\text{ kg}$ bo‘lgan yog‘och brusok turibdi. Stol va brusok orasidagi ishqalanish koeffitsiyenti $\\mu = 0.3$. Brusokni bir tekis sirpantirish uchun kerak bo‘lgan ishqalanish kuchini ($\\text{N}$) toping. ($g = 10\\text{ m/s}^2$).",
    unit: "N",
    answer: 15,
    tolerance: 0.1,
    hint: "$F_{\\text{ishq}} = \\mu \\times m \\times g = 0.3 \\times 5 \\times 10$.",
    solution: "$F_{\\text{ishq}} = 0.3 \\times 5 \\times 10 = 15\\text{ N}$.",
  },
  {
    id: "ilk-10-p2",
    position: 2,
    prompt:
      "Massasi $20\\text{ kg}$ bo‘lgan aravachani gorizontal sirt bo‘ylab bir tekis surish uchun $40\\text{ N}$ kuch kerak bo‘ldi. Ishqalanish koeffitsiyenti ($\\mu$) ni hisoblang. ($g = 10\\text{ m/s}^2$).",
    unit: "",
    answer: 0.2,
    tolerance: 0.01,
    hint: "Bir tekis harakatda $F = F_{\\text{ishq}} = \\mu m g \\implies \\mu = 40 / (20 \\times 10) = 40 / 200$.",
    solution: "$\\mu = \\frac{F}{mg} = \\frac{40}{20 \\times 10} = 0.2$.",
  },
  {
    id: "ilk-10-p3",
    position: 3,
    prompt:
      "Massasi $10\\text{ kg}$ bo‘lgan chang‘ichi gorizontal qor ustida $100\\text{ N}$ kuch bilan itarilmoqda. Qor bilan chang‘i orasidagi ishqalanish koeffitsiyenti $\\mu = 0.1$. Chang‘ichiga ta'sir qilayotgan natijaviy kuchni ($\\text{N}$) toping. ($g = 10\\text{ m/s}^2$).",
    unit: "N",
    answer: 90,
    tolerance: 0.5,
    hint: "$F_{\\text{ishq}} = 0.1 \\times 10 \\times 10 = 10\\text{ N}$. Natijaviy kuch: $F_{\\text{nat}} = 100 - 10$.",
    solution: "$F_{\\text{ishq}} = 10\\text{ N}$, $F_{\\text{nat}} = 100 - 10 = 90\\text{ N}$.",
  },
  {
    id: "ilk-10-p4",
    position: 4,
    prompt:
      "Yuqoridagi masalada ($m = 10\\text{ kg}, F_{\\text{nat}} = 90\\text{ N}$), chang‘ichining oladigan tezlanishini ($\\text{m/s}^2$) hisoblang.",
    unit: "m/s²",
    answer: 9,
    tolerance: 0.1,
    hint: "$a = F_{\\text{nat}} / m = 90 / 10$.",
    solution: "$a = \\frac{90}{10} = 9\\text{ m/s}^2$.",
  },
  {
    id: "ilk-10-p5",
    position: 5,
    prompt:
      "$1000\\text{ kg}$ massali avtomobil quruq asfaltdan silliq muzli ko‘lga o‘tdi. Asfaltdagi ishqalanish koeffitsiyenti $\\mu_1 = 0.6$, muzda esa $\\mu_2 = 0.05$. Muz ustidagi ishqalanish kuchi asfaltdagidan necha marta kichik?",
    unit: "marta",
    answer: 12,
    tolerance: 0.1,
    hint: "Kuchlar nisbati koeffitsiyentlar nisbatiga teng: $0.6 / 0.05 = 60 / 5$.",
    solution: "Nisbat: $\\frac{\\mu_1}{\\mu_2} = \\frac{0.6}{0.05} = 12$ marta.",
  },
];

export const lesson10Static: Lesson = {
  id: "ilk-qadam-10",
  courseSlug: "ilk-qadam",
  number: "10",
  position: 10,
  title: "Tinchlikdagi va sirpanishdagi ishqalanish kuchi",
  intro: "Agar dunyoda ishqalanish yo‘qolib qolsa nima bo‘lardi? G‘ildirak nega insoniyat tarixini o‘zgartirgan?",
  videoUrl: null,
  videoDurationMin: 17,
  quiz: lesson10Quiz,
  practice: lesson10Practice,
  homework: {
    title: "Ishqalanish koeffitsiyentini o‘lchash",
    body: "1. Qalin kitob ustiga telefon yoki yog‘och qutini qo‘ying. Kitobning bir tomonini sekin yuqoriga ko‘taring. Jism sirpana boshlagan burchakni aniqlang. Ushbu burchak tangensi ishqalanish koeffitsiyentiga teng (μ = tg α).\n2. Oyoq kiyimingiz tag charmini muz, gilam va linoleum ustida sinab ko‘ring.",
    pdfUrl: null,
  },
  isPublished: true,
};
