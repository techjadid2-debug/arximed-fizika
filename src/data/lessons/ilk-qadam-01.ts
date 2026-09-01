import type { Locale } from "@/lib/i18n";
import type { PracticeTask, QuizQuestion } from "@/types/lesson";

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
      { id: "ilk-01-q1-a", label: "Faqat sonli qiymatdan", isCorrect: false },
      { id: "ilk-01-q1-b", label: "Faqat o‘lchov birligidan", isCorrect: false },
      { id: "ilk-01-q1-c", label: "Sonli qiymat va o‘lchov birligidan", isCorrect: true },
    ],
  },
  {
    id: "ilk-01-q2",
    position: 2,
    question: "SI xalqaro birliklar sistemasida uzunlikning asosiy birligi qaysi?",
    explanation: "SI sistemasida uzunlikning asosiy etalon birligi metr ($m$) dir.",
    options: [
      { id: "ilk-01-q2-a", label: "Kilometr (km)", isCorrect: false },
      { id: "ilk-01-q2-b", label: "Metr (m)", isCorrect: true },
      { id: "ilk-01-q2-c", label: "Santimetr (sm)", isCorrect: false },
    ],
  },
  {
    id: "ilk-01-q3",
    position: 3,
    question: "Quyidagi asboblardan qaysi biri vaqt oralig‘ini o‘lchash uchun mo‘ljallangan?",
    explanation: "Sekundomer vaqt oralig‘ini o‘lchaydi. Dinamometr kuchni, menzurka esa suyuqlik hajmini o‘lchaydi.",
    options: [
      { id: "ilk-01-q3-a", label: "Sekundomer", isCorrect: true },
      { id: "ilk-01-q3-b", label: "Dinamometr", isCorrect: false },
      { id: "ilk-01-q3-c", label: "Menzurka", isCorrect: false },
    ],
  },
  {
    id: "ilk-01-q4",
    position: 4,
    question: "Quyidagi kattaliklardan qaysi biri hosilaviy (asosiy bo‘lmagan) kattalik hisoblanadi?",
    explanation: "Tezlik ($v = s/t$) masofa va vaqt orqali hosil qilingan hosilaviy kattalikdir. Massa va vaqt esa asosiy kattaliklardir.",
    options: [
      { id: "ilk-01-q4-a", label: "Massa", isCorrect: false },
      { id: "ilk-01-q4-b", label: "Vaqt", isCorrect: false },
      { id: "ilk-01-q4-c", label: "Tezlik", isCorrect: true },
    ],
  },
  {
    id: "ilk-01-q5",
    position: 5,
    question: "$1\\text{ Nyuton}$ ($1\\text{ N}$) kuchi asosiy SI birliklarida qanday yoziladi?",
    explanation: "Nyutonning 2-qonuniga binoan $F = m \\cdot a$, shuning uchun $[F] = \\text{kg} \\cdot \\text{m/s}^2 = \\text{kg}\\cdot\\text{m/s}^2$.",
    options: [
      { id: "ilk-01-q5-a", label: "$\\text{kg}\\cdot\\text{m/s}^2$", isCorrect: true },
      { id: "ilk-01-q5-b", label: "$\\text{kg}\\cdot\\text{m/s}$", isCorrect: false },
      { id: "ilk-01-q5-c", label: "$\\text{g}\\cdot\\text{sm/s}^2$", isCorrect: false },
    ],
  },
  {
    id: "ilk-01-q6",
    position: 6,
    question: "1999-yilda NASA ning Mars Climate Orbiter kosmik zondi nima sababdan halokatga uchragan?",
    explanation: "Bir guruh muhandislar ingliz (funt-kuch), boshqa guruh esa metrik SI (nyuton) birliklarida hisoblagani sababli apparat Mars atmosferasida yo‘q bo‘lgan.",
    options: [
      { id: "ilk-01-q6-a", label: "Yoqilg‘isi tugab qolgani sababli", isCorrect: false },
      { id: "ilk-01-q6-b", label: "O‘lchov birliklari (funt va metr) chalkashtirilgani sababli", isCorrect: true },
      { id: "ilk-01-q6-c", label: "Quyosh panellari sinib ketgani sababli", isCorrect: false },
    ],
  },
  {
    id: "ilk-01-q7",
    position: 7,
    question: "$450\\text{ milligramm}$ ($450\\text{ mg}$) necha gramm ($g$) ga teng?",
    explanation: "$1\\text{ mg} = 10^{-3}\\text{ g} = 0.001\\text{ g}$. Demak, $450 \\times 0.001 = 0.45\\text{ g}$.",
    options: [
      { id: "ilk-01-q7-a", label: "$0.45\\text{ g}$", isCorrect: true },
      { id: "ilk-01-q7-b", label: "$4.5\\text{ g}$", isCorrect: false },
      { id: "ilk-01-q7-c", label: "$0.045\\text{ g}$", isCorrect: false },
    ],
  },
  {
    id: "ilk-01-q8",
    position: 8,
    question: "Chizg‘ichning ikkita eng yaqin bo‘linmasi orasidagi masofa $1\\text{ mm}$. Ushbu chizg‘ichning o‘lchash xatoligi qancha?",
    explanation: "To‘g‘ridan-to‘g‘ri o‘lchash asbobining mutlaq xatoligi eng kichik bo‘lim qiymatining yarmiga teng: $\\Delta x = 1\\text{ mm} / 2 = 0.5\\text{ mm}$.",
    options: [
      { id: "ilk-01-q8-a", label: "$1\\text{ mm}$", isCorrect: false },
      { id: "ilk-01-q8-b", label: "$0.5\\text{ mm}$", isCorrect: true },
      { id: "ilk-01-q8-c", label: "$0.1\\text{ mm}$", isCorrect: false },
    ],
  },
  {
    id: "ilk-01-q9",
    position: 9,
    question: "Qaysi son standart ko‘rinishda (scientific notation) to‘g‘ri yozilgan?",
    explanation: "Standart shaklda $a \\times 10^n$ da ko‘paytuvchi $1 \\le a < 10$ oralig‘ida bo‘lishi lozim. Shuning uchun $4.5 \\times 10^4$ to‘g‘ri.",
    options: [
      { id: "ilk-01-q9-a", label: "$45 \\times 10^3$", isCorrect: false },
      { id: "ilk-01-q9-b", label: "$4.5 \\times 10^4$", isCorrect: true },
      { id: "ilk-01-q9-c", label: "$0.45 \\times 10^5$", isCorrect: false },
    ],
  },
  {
    id: "ilk-01-q10",
    position: 10,
    question: "O‘lchamlilik tahliliga ko‘ra $E = m c^2$ formulasida energiya $E$ ning asosiy SI birliklaridagi o‘lchami qaysi?",
    explanation: "$[E] = [m] \\times [c]^2 = \\text{kg} \\times (\\text{m/s})^2 = \\text{kg}\\cdot\\text{m}^2/\\text{s}^2$, bu $1\\text{ Joul}$ ga teng.",
    options: [
      { id: "ilk-01-q10-a", label: "$\\text{kg}\\cdot\\text{m}^2/\\text{s}^2$ (Joul)", isCorrect: true },
      { id: "ilk-01-q10-b", label: "$\\text{kg}\\cdot\\text{m/s}$", isCorrect: false },
      { id: "ilk-01-q10-c", label: "$\\text{kg}^2\\cdot\\text{m/s}^2$", isCorrect: false },
    ],
  },
];

export const lesson01Practice: PracticeTask[] = [
  {
    id: "ilk-01-p1",
    position: 1,
    prompt: "Toshkent va Samarqand shaharlari orasidagi masofa taxminan $310\\text{ km}$. Ushbu masofani metr ($m$) larda ifodalang.",
    unit: "m",
    answer: 310000,
    tolerance: 1,
    hint: "$1\\text{ km} = 1000\\text{ m}$. $310$ ni $1000$ ga ko‘paytiring.",
    solution: "$s = 310 \\times 1000\\text{ m} = 310\\,000\\text{ m}$.",
  },
  {
    id: "ilk-01-p2",
    position: 2,
    prompt: "Dars davomiyligi $45\\text{ minut}$. Ushbu vaqtni sekund ($s$) larda toping.",
    unit: "s",
    answer: 2700,
    tolerance: 1,
    hint: "$1\\text{ minut} = 60\\text{ sekund}$. $45$ ni $60$ ga ko‘paytiring.",
    solution: "$t = 45 \\times 60\\text{ s} = 2700\\text{ s}$.",
  },
  {
    id: "ilk-01-p3",
    position: 3,
    prompt: "Laboratoriya tarozisida detal massasi $350\\text{ g}$ chiqdi. Detal massasini SI asosiy birligi — kilogramm ($kg$) da ifodalang.",
    unit: "kg",
    answer: 0.35,
    tolerance: 0.01,
    hint: "$1\\text{ kg} = 1000\\text{ g}$. Grammdan kilogrammga o‘tish uchun $1000$ ga bo‘ling.",
    solution: "$m = 350 / 1000\\text{ kg} = 0.35\\text{ kg}$.",
  },
  {
    id: "ilk-01-p4",
    position: 4,
    prompt: "Daftar sahifasining yuzi $300\\text{ sm}^2$. Ushbu yuzani kvadrat metr ($\\text{m}^2$) larda ifodalang.",
    unit: "m²",
    answer: 0.03,
    tolerance: 0.001,
    hint: "$1\\text{ m} = 100\\text{ sm} \\implies 1\\text{ m}^2 = 10\\,000\\text{ sm}^2$. $300$ ni $10\\,000$ ga bo‘ling.",
    solution: "$S = 300 / 10\\,000 = 0.03\\text{ m}^2$.",
  },
  {
    id: "ilk-01-p5",
    position: 5,
    prompt: "Idishdagi sharbat hajmi $2.5\\text{ litr}$. $1\\text{ litr} = 1000\\text{ sm}^3$ ekanligini bilgan holda, sharbat hajmini kub santimetr ($\\text{sm}^3$) da toping.",
    unit: "sm³",
    answer: 2500,
    tolerance: 1,
    hint: "$1\\text{ litr} = 1000\\text{ sm}^3$. $2.5$ ni $1000$ ga ko‘paytiring.",
    solution: "$V = 2.5 \\times 1000\\text{ sm}^3 = 2500\\text{ sm}^3$.",
  },
  {
    id: "ilk-01-p6",
    position: 6,
    prompt: "Tezyurar poyezd $108\\text{ km/soat}$ tezlik bilan harakatlanmoqda. Poyezd tezligini SI birligi — $\\text{m/s}$ larda ifodalang.",
    unit: "m/s",
    answer: 30,
    tolerance: 0.1,
    hint: "$\\text{km/soat}$ dan $\\text{m/s}$ ga o‘tish uchun $3.6$ ga bo‘ling ($108 / 3.6$).",
    solution: "$v = 108 \\times \\frac{1000\\text{ m}}{3600\\text{ s}} = 30\\text{ m/s}$.",
  },
  {
    id: "ilk-01-p7",
    position: 7,
    prompt: "Alyuminiy bo‘lagining zichligi $2.7\\text{ g/sm}^3$. Alyuminiy zichligini SI birligi — $\\text{kg/m}^3$ da ifodalang.",
    unit: "kg/m³",
    answer: 2700,
    tolerance: 1,
    hint: "$1\\text{ g/sm}^3 = 1000\\text{ kg/m}^3$. $2.7$ ni $1000$ ga ko‘paytiring.",
    solution: "$\\rho = 2.7 \\times 1000 = 2700\\text{ kg/m}^3$.",
  },
  {
    id: "ilk-01-p8",
    position: 8,
    prompt: "Zamonaviy protsessordagi tranzistor o‘lchami $3\\text{ nanometr}$ ($3\\text{ nm} = 3 \\times 10^{-9}\\text{ m}$). $1.5\\text{ millimetr}$ ($1.5\\text{ mm} = 1.5 \\times 10^{-3}\\text{ m}$) uzunlikka qatorasiga nechta tranzistor joylashadi?",
    unit: "ta",
    answer: 500000,
    tolerance: 10,
    hint: "Uzunlikni tranzistor o‘lchamiga bo‘ling: $(1.5 \\times 10^{-3}) / (3 \\times 10^{-9})$.",
    solution: "$N = \\frac{1.5 \\times 10^{-3}}{3 \\times 10^{-9}} = 0.5 \\times 10^6 = 500\\,000\\text{ ta}$.",
  },
  {
    id: "ilk-01-p9",
    position: 9,
    prompt: "Mars roveri $1.8\\text{ km}$ masofani $2.5\\text{ soat}$ da bosib o‘tdi. Uning o‘rtacha tezligini santimetr sekundiga ($\\text{sm/s}$) larda hisoblang.",
    unit: "sm/s",
    answer: 20,
    tolerance: 0.5,
    hint: "$s = 1.8\\text{ km} = 180\\,000\\text{ sm}$, $t = 2.5 \\times 3600\\text{ s} = 9000\\text{ s}$. $v = s / t$.",
    solution: "$v = \\frac{180\\,000\\text{ sm}}{9000\\text{ s}} = 20\\text{ sm/s}$.",
  },
  {
    id: "ilk-01-p10",
    position: 10,
    prompt: "Massasi $80\\text{ kg}$ bo‘lgan odamning oyoq kiyimlari tagining umumiy yuzi $400\\text{ sm}^2 = 0.04\\text{ m}^2$. Odamning yerga ko‘rsatadigan bosimini Kilopaskal ($\\text{kPa}$) larda toping. ($g = 10\\text{ m/s}^2$ deb oling).",
    unit: "kPa",
    answer: 20,
    tolerance: 0.2,
    hint: "Kuch $F = m g = 800\\text{ N}$. Bosim $P = F / S = 800 / 0.04 = 20\\,000\\text{ Pa}$. $1000$ ga bo‘lib $\\text{kPa}$ ga o‘ting.",
    solution: "$P = \\frac{80 \\times 10}{0.04} = 20\\,000\\text{ Pa} = 20\\text{ kPa}$.",
  },
];
