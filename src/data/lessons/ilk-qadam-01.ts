import type { Locale } from "@/lib/i18n";
import type { Lesson, PracticeTask, QuizQuestion } from "@/types/lesson";

export interface LessonSlide {
  id: number;
  eyebrow: string;
  title: string;
  content: string;
  highlight?: string;
  formula?: string;
  badge?: string;
}

export const lesson01Slides: Record<Locale, LessonSlide[]> = {
  uz: [
    {
      id: 1,
      eyebrow: "01 / Kirish va Muammo",
      title: "Standart O‘lchov Nega Kerak?",
      content:
        "1999-yilda NASA ning $125 million dollarlik **Mars Climate Orbiter** zondi Marsga yetib borgach aloqani yo‘qotdi va atmosferada yonib ketdi. Sababi: Lockheed Martin muhandislari kuchni ingliz birligi (funt-kuch)da, NASA boshqaruv markazi esa SI birligi (nyuton)da hisoblagan edi.\n\nAgar har bir davlat, shahar yoki muhandis o‘zicha o‘lchasa (qarich, qadam, dyuym), murakkab samolyotlar va kosmik kemalarni birgalikda qurib bo‘lmaydi. Dunyoga **yagona o‘lchov tili** kerak!",
      badge: "Tarixiy saboq",
      highlight: "Yagona o‘lchov standarti — zamonaviy texnologiyalarning poydevori.",
    },
    {
      id: 2,
      eyebrow: "02 / Asosiy Tushuncha",
      title: "Fizik Kattalik Nima?",
      content:
        "Fizik kattalik — jism yoki tabiat hodisasining sifat jihatdan xarakterlovchi va **miqdoriy jihatdan o‘lchash mumkin bo‘lgan** xossasidir.\n\nHar qanday fizik kattalik quyidagi ko‘rinishda ifodalanadi:\n$$A = \\{A\\} \\times [A]$$\nBu yerda $\{A\}$ — sonli qiymat, $[A]$ — o‘lchov birligi.\n\nMasalan: Massasi $m = 5\\text{ kg}$ deganda, $5$ — sonli qiymat, $\\text{kg}$ — o‘lchov birligi.",
      formula: "A = \\{A\\} \\times [A]",
      badge: "Ta’rif",
    },
    {
      id: 3,
      eyebrow: "03 / Laboratoriya",
      title: "O‘lchash Jarayoni va Asboblar",
      content:
        "O‘lchash — noma’lum kattalikni o‘lchov birligi sifatida qabul qilingan namunaviy (etalon) kattalik bilan **taqqoslash** jarayonidir.\n\n* **To‘g‘ridan-to‘g‘ri o‘lchash:** Kattalik asbob yordamida to‘g‘ridan-to‘g‘ri olinadi (chizg‘ich bilan uzunlik, tarozi bilan massa, sekundomer bilan vaqt).\n* **Bilvosita o‘lchash:** Kattalik boshqa to‘g‘ridan-to‘g‘ri o‘lchangan kattaliklar orqali formula bo‘yicha hisoblanadi (masalan, tezlik $v = s / t$, zichlik $\\rho = m / V$).",
      badge: "Amaliyot",
    },
    {
      id: 4,
      eyebrow: "04 / Aniqlik",
      title: "Shkala Bo‘limi va Asbob Xatoligi",
      content:
        "Har qanday o‘lchov asbobining shkalasi bo‘linmalarga ega. **Shkala bo‘limi qiymati ($C$)** — ikkita eng yaqin shtrix orasidagi masofaga to‘g‘ri keluvchi kattalik qiymatidir.\n\nO‘lchash asbobining mutlaq xatoligi (instrumental error) odatda eng kichik bo‘lim qiymatining yarmiga teng olinadi:\n$$\\Delta x = \\frac{C}{2}$$\n\nAgar oddiy chizg‘ichning 1 ta kichik bo‘lagi $1\\text{ mm}$ bo‘lsa, uning o‘lchash xatoligi $\\pm 0.5\\text{ mm}$ bo‘ladi.",
      formula: "\\Delta x = \\frac{C}{2}",
      badge: "Aniqlik",
    },
    {
      id: 5,
      eyebrow: "05 / Xalqaro Standart",
      title: "SI Xalqaro Birliklar Sistemasi",
      content:
        "1960-yilda o‘tkazilgan XI Bosh o‘lchovlar va tarozilar konferensiyasida butun dunyo uchun yagona **Système International d'Unités (SI)** xalqaro birliklar sistemasi qabul qilindi.\n\nSI sistemasi fanda, savdoda va muhandislikda barcha xalqlarning o‘zaro tushunishini ta’minlaydi. Bugungi kunda barcha SI birliklari tabiatning fundamental o‘zgarmas konstantalari (masalan, yorug‘lik tezligi $c$, Plank doimiysi $h$, elementar zaryad $e$) orqali aniqlanadi.",
      badge: "Standart",
    },
    {
      id: 6,
      eyebrow: "06 / 7 Asosiy Birlik",
      title: "7 Asosiy SI Birligi",
      content:
        "Fizikadagi barcha xilma-xil kattaliklar atigi **7 ta asosiy kattalik** va ularning birliklari orqali quriladi:\n\n1. **Uzunlik:** metr ($\\text{m}$)\n2. **Vaqt:** sekund ($\\text{s}$)\n3. **Massa:** kilogramm ($\\text{kg}$)\n4. **Elektr toki:** amper ($\\text{A}$)\n5. **Termodinamik harorat:** kelvin ($\\text{K}$)\n6. **Modda miqdori:** mol ($\\text{mol}$)\n7. **Yorug‘lik kuchi:** kandela ($\\text{cd}$)",
      badge: "7 Asos",
      highlight: "Bu 7 birlik fizika alifbosi hisoblanadi.",
    },
    {
      id: 7,
      eyebrow: "07 / Hosilaviy Birliklar",
      title: "Hosilaviy Kattaliklar va Birliklar",
      content:
        "Asosiy birliklardan ko‘paytirish va bo‘lish amallari orqali tuzilgan birliklar **hosilaviy birliklar** deyiladi:\n\n* **Tezlik:** $[v] = \\frac{\\text{m}}{\\text{s}} = \\text{m/s}$\n* **Kuch (Nyuton):** $1\\text{ N} = 1\\text{ kg} \\cdot \\text{m/s}^2$\n* **Bosim (Paskal):** $1\\text{ Pa} = \\frac{1\\text{ N}}{1\\text{ m}^2} = 1\\text{ kg}/(\\text{m}\\cdot\\text{s}^2)$\n* **Energiya va Ish (Joul):** $1\\text{ J} = 1\\text{ N} \\cdot 1\\text{ m} = 1\\text{ kg}\\cdot\\text{m}^2/\\text{s}^2$",
      formula: "1\\text{ N} = 1\\text{ kg}\\cdot\\text{m/s}^2, \\quad 1\\text{ J} = 1\\text{ N}\\cdot\\text{m}",
      badge: "Hosilalar",
    },
    {
      id: 8,
      eyebrow: "08 / Katta Miqdorlar",
      title: "SI Prefikslari: Karrali Kattaliklar",
      content:
        "Juda katta qiymatlarni ifodalash uchun asosiy birlik oldiga 10 ning musbat darajalarini bildiruvchi prefikslar qo‘shiladi:\n\n* **kilo ($k$):** $10^3 = 1\\,000$ (masalan: $1\\text{ km} = 1000\\text{ m}$)\n* **mega ($M$):** $10^6 = 1\\,000\\,000$ (masalan: $1\\text{ MW} = 10^6\\text{ W}$)\n* **giga ($G$):** $10^9 = 1\\,000\\,000\\,000$ (masalan: $3.2\\text{ GHz} = 3.2 \\times 10^9\\text{ Hz}$)\n* **tera ($T$):** $10^{12} = 1\\,000\\,000\\,000\\,000$ (masalan: $2\\text{ TB} = 2 \\times 10^{12}\\text{ B}$)",
      badge: "Karrali",
    },
    {
      id: 9,
      eyebrow: "09 / Kichik Miqdorlar",
      title: "SI Prefikslari: Ulushli Kattaliklar",
      content:
        "Juda kichik qiymatlarni ifodalash uchun 10 ning manfiy darajalari qo‘llaniladi:\n\n* **detsi ($d$):** $10^{-1} = 0.1$ (masalan: $1\\text{ dm} = 0.1\\text{ m}$)\n* **santi ($c$):** $10^{-2} = 0.01$ (masalan: $1\\text{ cm} = 0.01\\text{ m}$)\n* **milli ($m$):** $10^{-3} = 0.001$ (masalan: $1\\text{ mg} = 10^{-3}\\text{ g}$)\n* **mikro ($\\mu$):** $10^{-6} = 0.000001$ (masalan: $5\\,\\mu\\text{m} = 5 \\times 10^{-6}\\text{ m}$)\n* **nano ($n$):** $10^{-9}$ (masalan: $3\\text{ nm} = 3 \\times 10^{-9}\\text{ m}$)\n* **piko ($p$):** $10^{-12}$ (masalan: $1\\text{ pF} = 10^{-12}\\text{ F}$)",
      badge: "Ulushli",
    },
    {
      id: 10,
      eyebrow: "10 / Matematik Yozuv",
      title: "Standart Shaklda Yozish (Scientific Notation)",
      content:
        "Astronomiya va mikrodunyodagi sonlar juda ko‘p nollarga ega. Ularni chalkashmaslik uchun **standart shakl**da yoziladi:\n$$N = a \\times 10^n$$\nBu yerda $1 \\le a < 10$, $n$ esa butun son.\n\n* Yorug‘lik tezligi: $c \\approx 300\\,000\\,000\\text{ m/s} = 3.0 \\times 10^8\\text{ m/s}$\n* Elektron massasi: $m_e \\approx 0.\\underbrace{000\\dots000}_{30\\text{ ta nol}}911\\text{ kg} = 9.11 \\times 10^{-31}\\text{ kg}$",
      formula: "N = a \\times 10^n \\quad (1 \\le a < 10)",
      badge: "Scientific Notation",
    },
    {
      id: 11,
      eyebrow: "11 / Tekshiruv Usuli",
      title: "Birliklar O‘lchamliligi Tahlili (Dimensional Analysis)",
      content:
        "Fizikadagi har qanday to‘g‘ri formulada tenglikning chap va o‘ng tomoni o‘lchamlari bir xil bo‘lishi shart!\n\nMasalan, yo‘l formulasi: $s = v_0 t + \\frac{1}{2} a t^2$\n* Chap tomon: $[s] = \\text{m}$\n* 1-qo‘shiluvchi: $[v_0 t] = (\\text{m/s}) \\times \\text{s} = \\text{m}$\n* 2-qo‘shiluvchi: $[a t^2] = (\\text{m/s}^2) \\times \\text{s}^2 = \\text{m}$\n\nHammasi metr ($\\text{m}$) chiqdi — demak formula o‘lchamlilik jihatdan to‘g‘ri!",
      formula: "[s] = [v_0][t] = [a][t]^2 = \\text{m}",
      badge: "Tahlil",
    },
    {
      id: 12,
      eyebrow: "12 / Kasbiy Bog‘liqlik & Xulosa",
      title: "Kasbiy Bog‘liqlik: Metrologiya va Kosmik Muhandislik",
      content:
        "**Metrolog** — o‘lchashlar aniqligi va etalonlarni tekshiruvchi mutaxassis. Zamonaviy chip ishlab chiqarishda $2\\text{ nm}$ aniqlik, kosmik apparatlarni yig‘ishda esa mikrometr aniqlik talab qilinadi.\n\n**Xulosa:**\n1. O‘lchash — standart bilan taqqoslash.\n2. SI sistemasida 7 ta asosiy birlik bor.\n3. Har bir fizik qonun birliklar uyg‘unligiga asoslanadi.",
      badge: "Karyera",
      highlight: "O‘lchashdagi har bir mikron yangi kashfiyotlarga yo‘l ochadi.",
    },
  ],
  en: [
    {
      id: 1,
      eyebrow: "01 / Introduction & Problem",
      title: "Why Do We Need Standard Measurements?",
      content:
        "In 1999, NASA's $125 million **Mars Climate Orbiter** was lost in the Martian atmosphere because one engineering team used imperial units (pound-force) while the navigation team used metric SI units (newtons).\n\nIf every country, lab, or engineer used their own arbitrary units (handspans, feet, inches), we could never build airplanes or spaceships together. Science needs a **universal language of measurement**!",
      badge: "Historical lesson",
      highlight: "A universal standard of units is the foundation of modern technology.",
    },
    {
      id: 2,
      eyebrow: "02 / Core Concept",
      title: "What is a Physical Quantity?",
      content:
        "A physical quantity is a measurable property of an object or natural phenomenon.\n\nEvery physical quantity is expressed as:\n$$A = \\{A\\} \\times [A]$$\nwhere $\{A\}$ is the numerical value, and $[A]$ is the unit of measurement.\n\nFor example, $m = 5\\text{ kg}$ consists of number $5$ and unit $\\text{kg}$.",
      formula: "A = \\{A\\} \\times [A]",
      badge: "Definition",
    },
    {
      id: 3,
      eyebrow: "03 / Laboratory",
      title: "Measurement and Instruments",
      content:
        "Measurement is comparing an unknown quantity with an agreed standard unit.\n\n* **Direct measurement:** Obtaining values directly using an instrument (ruler for length, scale for mass, stopwatch for time).\n* **Indirect measurement:** Calculating a quantity from other measured values via formulae (e.g. speed $v = s / t$, density $\\rho = m / V$).",
      badge: "Practice",
    },
    {
      id: 4,
      eyebrow: "04 / Precision",
      title: "Scale Resolution & Uncertainty",
      content:
        "Every instrument has a scale resolution ($C$). The absolute instrumental uncertainty is typically half of the smallest scale division:\n$$\\Delta x = \\frac{C}{2}$$\n\nIf a ruler has $1\\text{ mm}$ divisions, its uncertainty is $\\pm 0.5\\text{ mm}$.",
      formula: "\\Delta x = \\frac{C}{2}",
      badge: "Accuracy",
    },
    {
      id: 5,
      eyebrow: "05 / Global Standard",
      title: "The International System of Units (SI)",
      content:
        "Adopted in 1960 at the 11th General Conference on Weights and Measures, the **International System of Units (SI)** provides a unified worldwide standard.\n\nToday, all SI units are anchored to universal fundamental constants such as the speed of light $c$, Planck constant $h$, and elementary charge $e$.",
      badge: "Standard",
    },
    {
      id: 6,
      eyebrow: "06 / 7 Base Units",
      title: "The 7 SI Base Units",
      content:
        "All physics quantities are built upon just **7 base units**:\n\n1. **Length:** metre ($\\text{m}$)\n2. **Time:** second ($\\text{s}$)\n3. **Mass:** kilogram ($\\text{kg}$)\n4. **Electric current:** ampere ($\\text{A}$)\n5. **Thermodynamic temperature:** kelvin ($\\text{K}$)\n6. **Amount of substance:** mole ($\\text{mol}$)\n7. **Luminous intensity:** candela ($\\text{cd}$)",
      badge: "7 Base Units",
      highlight: "These 7 units are the alphabet of physical science.",
    },
    {
      id: 7,
      eyebrow: "07 / Derived Units",
      title: "Derived Quantities & Units",
      content:
        "Units formed by multiplying and dividing base units are called **derived units**:\n\n* **Speed:** $[v] = \\text{m/s}$\n* **Force (Newton):** $1\\text{ N} = 1\\text{ kg}\\cdot\\text{m/s}^2$\n* **Pressure (Pascal):** $1\\text{ Pa} = 1\\text{ N/m}^2$\n* **Energy (Joule):** $1\\text{ J} = 1\\text{ N}\\cdot\\text{m} = 1\\text{ kg}\\cdot\\text{m}^2/\\text{s}^2$",
      formula: "1\\text{ N} = 1\\text{ kg}\\cdot\\text{m/s}^2, \\quad 1\\text{ J} = 1\\text{ N}\\cdot\\text{m}",
      badge: "Derived",
    },
    {
      id: 8,
      eyebrow: "08 / Multiples",
      title: "SI Prefixes: Multiples",
      content:
        "For large numbers, powers of 10 prefixes are attached:\n\n* **kilo ($k$):** $10^3$ ($1\\text{ km} = 1000\\text{ m}$)\n* **mega ($M$):** $10^6$ ($1\\text{ MW} = 10^6\\text{ W}$)\n* **giga ($G$):** $10^9$ ($3\\text{ GHz} = 3 \\times 10^9\\text{ Hz}$)\n* **tera ($T$):** $10^{12}$ ($2\\text{ TB} = 2 \\times 10^{12}\\text{ B}$)",
      badge: "Multiples",
    },
    {
      id: 9,
      eyebrow: "09 / Submultiples",
      title: "SI Prefixes: Submultiples",
      content:
        "For small values, negative powers of 10 prefixes are used:\n\n* **centi ($c$):** $10^{-2}$ ($1\\text{ cm} = 0.01\\text{ m}$)\n* **milli ($m$):** $10^{-3}$ ($1\\text{ mg} = 10^{-3}\\text{ g}$)\n* **micro ($\\mu$):** $10^{-6}$ ($5\\,\\mu\\text{m} = 5 \\times 10^{-6}\\text{ m}$)\n* **nano ($n$):** $10^{-9}$ ($3\\text{ nm} = 3 \\times 10^{-9}\\text{ m}$)",
      badge: "Submultiples",
    },
    {
      id: 10,
      eyebrow: "10 / Scientific Notation",
      title: "Scientific Notation",
      content:
        "Expressing large and small numbers compactly:\n$$N = a \\times 10^n \\quad (1 \\le a < 10)$$\n\n* Speed of light: $c \\approx 3.0 \\times 10^8\\text{ m/s}$\n* Electron mass: $m_e \\approx 9.11 \\times 10^{-31}\\text{ kg}$",
      formula: "N = a \\times 10^n",
      badge: "Notation",
    },
    {
      id: 11,
      eyebrow: "11 / Verification",
      title: "Dimensional Analysis",
      content:
        "In every valid physical formula, both sides must have identical dimensions.\n\nFor $s = v_0 t + \\frac{1}{2} a t^2$:\n* $[s] = \\text{m}$\n* $[v_0 t] = (\\text{m/s}) \\times \\text{s} = \\text{m}$\n* $[a t^2] = (\\text{m/s}^2) \\times \\text{s}^2 = \\text{m}$\n\nAll terms evaluate to metres ($\\text{m}$), verifying dimensional consistency!",
      formula: "[s] = [v_0][t] = [a][t]^2 = \\text{m}",
      badge: "Analysis",
    },
    {
      id: 12,
      eyebrow: "12 / Career Spotlight",
      title: "Careers: Metrology & Space Engineering",
      content:
        "**Metrologist** — a specialist who maintains calibration standards. Semiconductor fabrication requires sub-nanometre accuracy, and satellite systems demand precision measurement to orbit safely.",
      badge: "Careers",
      highlight: "Precision in measurement enables precision in innovation.",
    },
  ],
  ru: [
    {
      id: 1,
      eyebrow: "01 / Введение",
      title: "Зачем нужен единый стандарт измерений?",
      content:
        "В 1999 году космический зонд NASA **Mars Climate Orbiter** стоимостью $125 млн сгорел в атмосфере Марса из-за несогласованности единиц: одна команда использовала фунты, а другая — метрические ньютоны.\n\nНауке и инженерии необходим **единый универсальный язык измерений**!",
      badge: "Урок истории",
      highlight: "Единый стандарт измерений — основа современных технологий.",
    },
    {
      id: 2,
      eyebrow: "02 / Понятие",
      title: "Что такое физическая величина?",
      content:
        "Физическая величина — измеримое свойство тела или явления.\n\nВыражается формулой:\n$$A = \\{A\\} \\times [A]$$\nгде $\{A\}$ — числовое значение, $[A]$ — единица измерения.",
      formula: "A = \\{A\\} \\times [A]",
      badge: "Определение",
    },
    {
      id: 3,
      eyebrow: "03 / Лаборатория",
      title: "Процесс измерения и приборы",
      content:
        "Измерение — сравнение величины с эталоном.\n\n* **Прямые измерения:** линейка (длина), весы (масса), секундомер (время).\n* **Косвенные измерения:** вычисление по формулам (скорость $v=s/t$, плотность $\\rho=m/V$).",
      badge: "Практика",
    },
    {
      id: 4,
      eyebrow: "04 / Точность",
      title: "Цена деления и погрешность прибора",
      content:
        "Цена деления ($C$) — значение между соседними штрихами. Абсолютная инструментальная погрешность:\n$$\\Delta x = \\frac{C}{2}$$",
      formula: "\\Delta x = \\frac{C}{2}",
      badge: "Точность",
    },
    {
      id: 5,
      eyebrow: "05 / Международная система",
      title: "Международная система единиц (СИ)",
      content:
        "Принята в 1960 году. Сегодня все единицы СИ привязаны к фундаментальным физическим постоянным ($c, h, e$).",
      badge: "Стандарт",
    },
    {
      id: 6,
      eyebrow: "06 / 7 Основных единиц",
      title: "7 основных единиц СИ",
      content:
        "1. **Длина:** метр ($\\text{м}$)\n2. **Время:** секунда ($\\text{с}$)\n3. **Масса:** килограмм ($\\text{кг}$)\n4. **Сила тока:** ампер ($\\text{А}$)\n5. **Температура:** кельвин ($\\text{К}$)\n6. **Количество вещества:** моль ($\\text{моль}$)\n7. **Сила света:** кандела ($\\text{кд}$)",
      badge: "7 Основ",
      highlight: "Эти 7 единиц — алфавит физики.",
    },
    {
      id: 7,
      eyebrow: "07 / Производные",
      title: "Производные величины и единицы",
      content:
        "* **Скорость:** $\\text{м/с}$\n* **Сила (Ньютон):** $1\\text{ Н} = 1\\text{ кг}\\cdot\\text{м/с}^2$\n* **Давление (Паскаль):** $1\\text{ Па} = 1\\text{ Н/м}^2$\n* **Энергия (Джоуль):** $1\\text{ Дж} = 1\\text{ Н}\\cdot\\text{м}$",
      formula: "1\\text{ Н} = 1\\text{ кг}\\cdot\\text{м/с}^2, \\quad 1\\text{ Дж} = 1\\text{ Н}\\cdot\\text{м}",
      badge: "Производные",
    },
    {
      id: 8,
      eyebrow: "08 / Кратные",
      title: "Приставки СИ: Кратные",
      content:
        "* **кило ($к$):** $10^3$\n* **мега ($М$):** $10^6$\n* **гига ($Г$):** $10^9$\n* **тера ($Т$):** $10^{12}$",
      badge: "Кратные",
    },
    {
      id: 9,
      eyebrow: "09 / Дольные",
      title: "Приставки СИ: Дольные",
      content:
        "* **санти ($с$):** $10^{-2}$\n* **милли ($м$):** $10^{-3}$\n* **микро ($\\mu$):** $10^{-6}$\n* **нано ($н$):** $10^{-9}$",
      badge: "Дольные",
    },
    {
      id: 10,
      eyebrow: "10 / Стандартный вид",
      title: "Стандартный вид числа",
      content:
        "$$N = a \\times 10^n \\quad (1 \\le a < 10)$$\nСкорость света: $c \\approx 3.0 \\times 10^8\\text{ м/с}$.",
      formula: "N = a \\times 10^n",
      badge: "Нотация",
    },
    {
      id: 11,
      eyebrow: "11 / Анализ размерностей",
      title: "Анализ размерностей",
      content:
        "Проверка формул по размерности: обе стороны уравнения должны совпадать по единицам измерения.",
      formula: "[s] = [v_0][t] = [a][t]^2 = \\text{м}",
      badge: "Анализ",
    },
    {
      id: 12,
      eyebrow: "12 / Профессии и итог",
      title: "Профессии: Метрология и инженерия",
      content:
        "Метрологи обеспечивают точность измерений для спутников, медицины и производства микрочипов.",
      badge: "Карьера",
      highlight: "Точность измерений открывает путь к инновациям.",
    },
  ],
};

export const lesson01Quiz: QuizQuestion[] = [
  {
    id: "ilk-01-q1",
    position: 1,
    question: "Fizik kattalik qanday qismlardan tashkil topadi?",
    explanation: "Har qanday fizik kattalik sonli qiymat va o‘lchov birligi ko‘paytmasidan iborat ($A = \\{A\\} \\times [A]$).",
    options: [
      { id: "ilk-01-q1-a", label: "Sonli qiymat va o‘lchov birligidan", isCorrect: true },
      { id: "ilk-01-q1-b", label: "Faqat sonli qiymatdan", isCorrect: false },
      { id: "ilk-01-q1-c", label: "Faqat o‘lchov birligidan", isCorrect: false },
    ],
  },
];

export const lesson01Practice: PracticeTask[] = [
  {
    id: "ilk-01-p1",
    position: 1,
    prompt:
      "Avtomobil spidometri $72\\text{ km/soat}$ tezlikni ko‘rsatmoqda. Ushbu tezlikni SI asosiy birligi — metr taqsim sekundda ($\\text{m/s}$) ifodalang.",
    unit: "m/s",
    answer: 20,
    tolerance: 0.1,
    hint: "Tezlikni $\\text{km/soat}$ dan $\\text{m/s}$ ga o‘tkazish uchun 3.6 ga bo‘ling: $72 / 3.6$.",
    solution:
      "**Namunaviy yechim:**\n- **Berilgan:** $v = 72\\text{ km/soat}$\n- **Topish kerak:** $v (\\text{m/s}) - ?$\n- **Formula:** $v = \\frac{v_{\\text{km/soat}}}{3.6}$\n- **Yechilishi:** $v = \\frac{72}{3.6} = 20\\text{ m/s}$\n- **Javob:** $20\\text{ m/s}$.",
  },
];

export const lesson01Static: Lesson = {
  id: "ilk-qadam-01",
  courseSlug: "ilk-qadam",
  number: "01",
  position: 1,
  title: "Fizik kattaliklar, o‘lchash va SI xalqaro birliklar sistemasi",
  intro: "Agar hamma o‘z qarichi bilan o‘lchasa, koinot kemasini qanday quramiz?",
  videoUrl: null,
  videoDurationMin: 12,
  quiz: lesson01Quiz,
  practice: lesson01Practice,
  homework: {
    title: "SI birliklariga o‘tkazish va xatolikni aniqlash",
    body: "1. Xonangizning bo‘yi va enini o‘lchang.\n2. Shkala bo‘limi qiymati va asbob xatoligini yozing.\n3. Natijani SI (metr)da ifodalang.",
    pdfUrl: null,
  },
  isPublished: true,
};

