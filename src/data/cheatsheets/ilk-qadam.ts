import { ilkQadamRoadmap } from "@/data/courses/ilk-qadam";

export interface TeachingStep {
  step: number;
  title: string;
  explanation: string;
  boardTip?: string;
}

export interface KeyFormula {
  latex: string;
  name: string;
  unit?: string;
  description?: string;
}

export interface WorkedExample {
  problem: string;
  solution: string;
  answer: string;
}

export interface LessonCheatsheet {
  number: string;
  title: string;
  quarter: number;
  quarterTitle: string;
  hook: string;
  summary: string;
  objectives: string[];
  teachingPlan: TeachingStep[];
  keyFormulas: KeyFormula[];
  workedExamples: WorkedExample[];
  commonPitfalls: string[];
  realWorldApplications: string[];
}

/**
 * 1-Chorak: Mexanika (16 dars) — Maktab o‘quvchilari uchun ixcham, qisqa spargalka
 */
export const detailedCheatsheets: Record<string, LessonCheatsheet> = {
  "01": {
    number: "01",
    title: "Fizik kattaliklar, o‘lchash va SI xalqaro birliklar sistemasi",
    quarter: 1,
    quarterTitle: "Mexanika",
    hook: "Agar hamma o‘z qarichi bilan o‘lchasa, qanday qilib birgalikda samolyot yoki uy quramiz?",
    summary: "Fizik kattalik = Son + Birlik. 7 ta asosiy SI birligi va asbob xatoligi.",
    objectives: [
      "7 ta asosiy SI birligini yod olish",
      "Asbob xatoligini hisoblash",
      "km/h dan m/s ga o‘tish",
    ],
    teachingPlan: [
      {
        step: 1,
        title: "Kattalik nima?",
        explanation: "O‘lchash mumkin bo‘lgan har qanday xossa. U doim son va birlikdan iborat.",
        boardTip: "$A = \\{A\\} \\times [A]$ (Masalan: $m = 5\\text{ kg}$)",
      },
      {
        step: 2,
        title: "7 ta asosiy SI birligi",
        explanation: "Barcha fizik formulalar shu 7 tasidan yasaladi: metr, sekund, kilogramm, amper, kelvin, mol, kandela.",
        boardTip: "$m, s, kg, A, K, mol, cd$",
      },
      {
        step: 3,
        title: "Asbob xatoligi",
        explanation: "Asbob xatoligi — eng kichik bo‘lim qiymatining yarmiga teng.",
        boardTip: "Chizg‘ich bo‘limi $1\\text{ mm} \\implies \\Delta x = \\pm 0.5\\text{ mm}$",
      },
      {
        step: 4,
        title: "Birliklarni o‘tkazish",
        explanation: "km/h dan m/s ga o‘tish uchun 3.6 ga bo‘linadi, teskarisiga 3.6 ga ko‘paytiriladi.",
        boardTip: "$36\\text{ km/h} = 10\\text{ m/s}, \\quad 72\\text{ km/h} = 20\\text{ m/s}$",
      },
    ],
    keyFormulas: [
      {
        latex: "A = \\{A\\} \\times [A]",
        name: "Kattalik formulasi",
        description: "Sonli qiymat va o‘lchov birligi",
      },
      {
        latex: "C = \\frac{a - b}{N}, \\quad \\Delta x = \\frac{C}{2}",
        name: "Shkala bo‘limi va xatolik",
        unit: "asbob birligi",
      },
      {
        latex: "1\\text{ m/s} = 3.6\\text{ km/h}",
        name: "Tezlik birliklari",
      },
    ],
    workedExamples: [
      {
        problem: "$108\\text{ km/h}$ tezlikni $\\text{m/s}$ ga aylantiring.",
        solution: "$108 / 3.6 = 30\\text{ m/s}$.",
        answer: "30 m/s",
      },
    ],
    commonPitfalls: [
      "Faqat sonni yozib, yoniga birligini (m, kg) yozishni unutish.",
      "km/h dan m/s ga o‘tishda 3.6 ga bo‘lish o‘rniga ko‘paytirib yuborish.",
      "$1\\text{ m}^2 = 10\\,000\\text{ sm}^2$ (100 emas!).",
    ],
    realWorldApplications: [
      "NASA Mars zondi o‘lchov birliklari chalkashgani sababli yonib ketgan.",
      "Dorixona tarozilari milligramm aniqlikda ishlaydi.",
    ],
  },

  "02": {
    number: "02",
    title: "Moddiy nuqta, sanoq sistemasi va harakatning nisbiyligi",
    quarter: 1,
    quarterTitle: "Mexanika",
    hook: "Poyezdda o‘tirib balandga sakrasangiz, orqaga tushasizmi yoki o‘z o‘rningizgami?",
    summary: "Moddiy nuqta sharti, sanoq sistemasi, yo‘l va ko‘chish farqi, tezliklar qo‘shilishi.",
    objectives: [
      "Qachon jismni moddiy nuqta deyishni bilish",
      "Yo‘l (skalyar) va Ko‘chish (vektor)ni farqlash",
      "Daryoda oqim bo‘ylab va qarshi tezlikni topish",
    ],
    teachingPlan: [
      {
        step: 1,
        title: "Moddiy nuqta",
        explanation: "O‘lchami bosib o‘tgan yo‘liga nisbatan hisobga olinmaydigan jism (masalan, Toshkent-Samarqand poyezdi).",
        boardTip: "O‘lcham masofadan ancha kichik bo‘lsa — moddiy nuqta.",
      },
      {
        step: 2,
        title: "Yo‘l va Ko‘chish",
        explanation: "Yo‘l — bosilgan chiziq uzunligi. Ko‘chish — boshlang‘ichdan oxiriga to‘g‘ri tortilgan strelka (vektor).",
        boardTip: "Stadionni 1 marta aylanib kelsangiz: Yo‘l $400\\text{ m}$, Ko‘chish $= 0$!",
      },
      {
        step: 3,
        title: "Harakatning nisbiyligi",
        explanation: "Oqim bo‘ylab: tezliklar qo‘shiladi. Oqimga qarshi: ayriladi.",
        boardTip: "$v_{\\text{bo‘ylab}} = v_q + v_o, \\quad v_{\\text{qarshi}} = v_q - v_o$",
      },
    ],
    keyFormulas: [
      {
        latex: "s \\ge |\\vec{s}|",
        name: "Yo‘l va ko‘chish",
        description: "Yo‘l doim ko‘chishdan katta yoki teng",
      },
      {
        latex: "\\vec{v} = \\vec{v}_1 + \\vec{v}_2",
        name: "Tezliklar qo‘shilishi",
        unit: "m/s",
      },
    ],
    workedExamples: [
      {
        problem: "Kater turg‘un suvda $15\\text{ km/h}$, daryo oqimi $3\\text{ km/h}$. Kater oqim bo‘ylab va oqimga qarshi qanday tezlikda suzadi?",
        solution: "Oqim bo‘ylab: $15 + 3 = 18\\text{ km/h}$. Oqimga qarshi: $15 - 3 = 12\\text{ km/h}$.",
        answer: "18 km/h va 12 km/h",
      },
    ],
    commonPitfalls: [
      "Ko‘chish nol bo‘lishi mumkin (agar qaytib kelsa), lekin yo‘l hech qachon nol bo‘lmaydi.",
      "Moddiy nuqta faqat kichkina narsa deb o‘ylash (Yer Quyosh atrofida moddiy nuqta!).",
    ],
    realWorldApplications: [
      "Samolyot yerga nisbatan tezligini hisoblashda shamol yo‘nalishi qo‘shiladi.",
      "GPS yo‘ldoshlari harakat nisbiyligi hisobiga ishlaydi.",
    ],
  },

  "03": {
    number: "03",
    title: "To‘g‘ri chiziqli tekis harakat, tezlik va ko‘chish",
    quarter: 1,
    quarterTitle: "Mexanika",
    hook: "Yo‘lning yarmini 60 km/h, ikkinchi yarmini 90 km/h da o‘tsak, o‘rtacha tezlik 75 km/h bo‘ladimi? Yo‘q! Nega?",
    summary: "Tekis harakat qoidasi, $v = s / t$, harakat tenglamasi va o‘rtacha tezlik formulasi.",
    objectives: [
      "Tekis harakat tenglamasini tuzish",
      "Tezlik grafigi ostidagi yuza yo‘l ekanligini bilish",
      "O‘rtacha tezlikni to‘g‘ri hisoblash",
    ],
    teachingPlan: [
      {
        step: 1,
        title: "Tekis harakat",
        explanation: "Teng vaqtda teng masofalar bosib o‘tiladi. Tezlik o‘zgarmaydi.",
        boardTip: "$v = \\frac{s}{t}, \\quad s = vt$",
      },
      {
        step: 2,
        title: "Koordinata tenglamasi",
        explanation: "Qayerda turganini ($x_0$) bilib, keyingi o‘rnini topamiz.",
        boardTip: "$x(t) = x_0 + vt$",
      },
      {
        step: 3,
        title: "O‘rtacha tezlik siri",
        explanation: "Hech qachon shunchaki qo‘shib ikkiga bo‘lmang! Jami yo‘lni jami vaqtga bo‘ling.",
        boardTip: "$v_{\\text{o‘rt}} = \\frac{s_{\\text{jami}}}{t_{\\text{jami}}} = \\frac{s_1 + s_2}{t_1 + t_2}$",
      },
    ],
    keyFormulas: [
      {
        latex: "x = x_0 + vt",
        name: "Harakat tenglamasi",
        unit: "m",
      },
      {
        latex: "v_{\\text{o‘rt}} = \\frac{s_{\\text{jami}}}{t_{\\text{jami}}}",
        name: "O‘rtacha tezlik",
        unit: "m/s",
      },
      {
        latex: "v_{\\text{o‘rt}} = \\frac{2v_1 v_2}{v_1 + v_2}",
        name: "Teng masofalar uchun",
        description: "Masofalar teng bo‘lganda qisqa usul",
      },
    ],
    workedExamples: [
      {
        problem: "Avto yo‘lning yarmini $60\\text{ km/h}$, yarmini $90\\text{ km/h}$ da o‘tdi. O‘rtacha tezlikni toping.",
        solution: "$v = \\frac{2 \\times 60 \\times 90}{60 + 90} = \\frac{10800}{150} = 72\\text{ km/h}$.",
        answer: "72 km/h",
      },
    ],
    commonPitfalls: [
      "O‘rtacha tezlikni $(v_1 + v_2)/2$ deb yozish (eng ko‘p tarqalgan xato!).",
      "Tezlik grafigi pastidagi to‘g‘ri to‘rtburchak yuzi yo‘l ekanligini unutish.",
    ],
    realWorldApplications: [
      "Poyezdlar harakat jadvali stansiyalar orasidagi tekis tezlikka qarab tuziladi.",
    ],
  },

  "04": {
    number: "04",
    title: "Tekis o‘zgaruvchan harakat va tezlanish",
    quarter: 1,
    quarterTitle: "Mexanika",
    hook: "Nega avtomobil tezligi 2 marta oshganda, uning tormoz yo‘li 4 marta oshib ketadi?",
    summary: "Tezlanish $a = (v - v_0)/t$, tezlik tenglamasi, yo‘l formulasi va tormoz yo‘li.",
    objectives: [
      "Tezlanish formulasini bilish ($m/s^2$)",
      "Kinematikaning 3 ta asosiy formulasini qo‘llash",
      "Tormoz masofasini hisoblash",
    ],
    teachingPlan: [
      {
        step: 1,
        title: "Tezlanish nima?",
        explanation: "Tezlik har sekundda qanchaga o‘zgarishi. $a = 2\\text{ m/s}^2$ bo‘lsa, tezlik har sekundda 2 ga ortadi.",
        boardTip: "$a = \\frac{v - v_0}{t} \\quad [\\text{m/s}^2]$",
      },
      {
        step: 2,
        title: "Tezlik va Yo‘l formulalari",
        explanation: "Tezlanish bo‘lganda bosib o‘tilgan yo‘l kvadratik ortadi.",
        boardTip: "$v = v_0 + at, \\quad s = v_0 t + \\frac{at^2}{2}, \\quad v^2 - v_0^2 = 2as$",
      },
      {
        step: 3,
        title: "Tormoz yo‘li",
        explanation: "To‘xtaganda oxirgi tezlik $v = 0$. Tezlik 2 marta oshsa, tormoz yo‘li 4 marta kattalashadi.",
        boardTip: "$s_{\\text{tormoz}} = \\frac{v_0^2}{2a}$",
      },
    ],
    keyFormulas: [
      {
        latex: "a = \\frac{v - v_0}{t}",
        name: "Tezlanish",
        unit: "m/s²",
      },
      {
        latex: "s = v_0 t + \\frac{at^2}{2}",
        name: "Bosib o‘tilgan yo‘l",
        unit: "m",
      },
      {
        latex: "v^2 - v_0^2 = 2as",
        name: "Vaqtsiz formula",
        description: "Vaqt berilmaganda ishlatiladi",
      },
    ],
    workedExamples: [
      {
        problem: "Tinch turgan mashina $3\\text{ m/s}^2$ tezlanish bilan $4\\text{ s}$ da qancha yo‘l bosadi?",
        solution: "$v_0 = 0$. $s = \\frac{at^2}{2} = \\frac{3 \\times 4^2}{2} = \\frac{48}{2} = 24\\text{ m}$.",
        answer: "24 m",
      },
    ],
    commonPitfalls: [
      "Sekinlanuvchan harakatda formulaga minus qo‘yishni unutish ($s = v_0 t - at^2/2$).",
      "$at^2/2$ da faqat $t$ ni kvadratga ko‘tarish kerak, $a$ ni emas.",
    ],
    realWorldApplications: [
      "Yo‘l harakati xavfsizligida oraliq masofa (distansiya) saqlash qoidasi.",
      "Samolyotlar uchish maydoni (polosa) uzunligini loyihalash.",
    ],
  },

  "05": {
    number: "05",
    title: "Erkin tushish harakati va og‘irlik kuchi tezlanishi",
    quarter: 1,
    quarterTitle: "Mexanika",
    hook: "Vakuumda qush pati bilan og‘ir temir toshni tashlab yuborsak, qaysi biri oldinroq tushadi?",
    summary: "Erkin tushish tezlanishi $g \\approx 10\\text{ m/s}^2$. Balandlikdan tushish va yuqoriga otish qonunlari.",
    objectives: [
      "Vakuumda barcha jismlar bir xil tushishini bilish",
      "$h = gt^2/2$ orqali balandlik va vaqtni topish",
      "Yuqoriga otilgan jismning parvoz vaqtini hisoblash",
    ],
    teachingPlan: [
      {
        step: 1,
        title: "Galiley kashfiyoti",
        explanation: "Havo qarshiligi bo‘lmasa, massasidan qat’i nazar hamma narsa bir xil tezlikda tushadi.",
        boardTip: "$g \\approx 9.8\\text{ m/s}^2 \\approx 10\\text{ m/s}^2$",
      },
      {
        step: 2,
        title: "Tushish formulalari",
        explanation: "Boshlang‘ich tezliksiz tushganda balandlik va urilish tezligi.",
        boardTip: "$h = \\frac{gt^2}{2}, \\quad v = gt = \\sqrt{2gh}, \\quad t = \\sqrt{\\frac{2h}{g}}$",
      },
      {
        step: 3,
        title: "Yuqoriga otilgan jism",
        explanation: "Chiqish vaqti tushish vaqtiga teng. Eng baland cho‘qqida tezlik nol.",
        boardTip: "$h_{\\max} = \\frac{v_0^2}{2g}, \\quad t_{\\text{chiqish}} = \\frac{v_0}{g}, \\quad t_{\\text{jami}} = \\frac{2v_0}{g}$",
      },
    ],
    keyFormulas: [
      {
        latex: "h = \\frac{gt^2}{2}",
        name: "Tushish balandligi",
        unit: "m",
      },
      {
        latex: "v = \\sqrt{2gh}",
        name: "Urilish tezligi",
        unit: "m/s",
      },
      {
        latex: "h_{\\max} = \\frac{v_0^2}{2g}",
        name: "Maksimal balandlik",
        unit: "m",
      },
    ],
    workedExamples: [
      {
        problem: "Tosh $20\\text{ m}$ balandlikdagi tomdan tushib ketdi. Necha sekundda yerga tushadi? ($g = 10\\text{ m/s}^2$).",
        solution: "$t = \\sqrt{\\frac{2h}{g}} = \\sqrt{\\frac{2 \\times 20}{10}} = \\sqrt{4} = 2\\text{ s}$.",
        answer: "2 s",
      },
    ],
    commonPitfalls: [
      "Og‘ir narsa tezroq tushadi deb o‘ylash (faqat havo qarshiligi chalg‘itadi!).",
      "Eng yuqori nuqtada tezlanish nol bo‘ladi deb o‘ylash (tezlik nol, lekin $g$ doim bor).",
    ],
    realWorldApplications: [
      "Chuqur quduqning chuqurligini tosh tashlab, ovozi eshitilguncha sekund sanab topish mumkin.",
    ],
  },

  "06": {
    number: "06",
    title: "Nyutonning birinchi qonuni va inersiya hodisasi",
    quarter: 1,
    quarterTitle: "Mexanika",
    hook: "Avtobus keskin to‘xtaganda nega oldinga qarab uchib ketamiz?",
    summary: "Inersiya hodisasi, Nyutonning 1-qonuni va inersial sanoq sistemalari.",
    objectives: [
      "Inersiya nima ekanligini hayotiy tushuntirish",
      "Kuch harakatni davom ettirish uchun emas, uni o‘zgartirish uchun kerakligini bilish",
      "Massa — inersiya o‘lchovi ekanligini anglash",
    ],
    teachingPlan: [
      {
        step: 1,
        title: "Inersiya nima?",
        explanation: "Jismning o‘z holatini (tinchlik yoki tekis harakatini) saqlash xususiyati.",
        boardTip: "Avtobus to‘xtaydi, lekin tanamiz oldinga harakatini davom ettirmoqchi bo‘ladi.",
      },
      {
        step: 2,
        title: "Nyutonning 1-qonuni",
        explanation: "Agar jismga hech qanday kuch ta’sir qilmasa (yoki kuchlar tenglashsa), u tinch turadi yoki to‘g‘ri chiziqli tekis ketadi.",
        boardTip: "$\\sum \\vec{F} = 0 \\implies \\vec{v} = \\text{const}$",
      },
      {
        step: 3,
        title: "Massa va Inersiya",
        explanation: "Katta massali jismni to‘xtatish ham qiyin, joyidan qo‘zg‘atish ham qiyin.",
        boardTip: "Massa qancha katta bo‘lsa — inersiya shuncha kuchli.",
      },
    ],
    keyFormulas: [
      {
        latex: "\\sum \\vec{F} = 0 \\implies \\vec{v} = \\text{const}",
        name: "Nyuton 1-qonuni sharti",
      },
    ],
    workedExamples: [
      {
        problem: "Samolyot $800\\text{ km/h}$ doimiy tekis tezlikda to‘g‘ri uchmoqda. Barcha kuchlarning teng ta’sir etuvchisi nimaga teng?",
        solution: "Harakat tekis bo‘lgani uchun kuchlar yig‘indisi nolga teng: $F_{\\text{res}} = 0$.",
        answer: "0 N",
      },
    ],
    commonPitfalls: [
      "Jism ketayotgan bo‘lsa, demak unga albatta kuch itarib turibdi deb o‘ylash (kosmosda kuchsiz ham cheksiz ketadi).",
    ],
    realWorldApplications: [
      "Xavfsizlik kamarlari avtomobilda inersiya tufayli jarohat olishdan asraydi.",
    ],
  },

  "07": {
    number: "07",
    title: "Kuch, massa va Nyutonning ikkinchi qonuni",
    quarter: 1,
    quarterTitle: "Mexanika",
    hook: "Bir xil kuch bilan tennis to‘pini va og‘ir toshni ursa nima bo‘ladi? Qaysi biri tezlanadi?",
    summary: "Fizikaning eng mashhur formulasi: $F = ma$. Kuch, massa va tezlanish bog‘liqligi.",
    objectives: [
      "$F = ma$ formulasini yod olish",
      "Tezlanish yo‘nalishi kuch yo‘nalishi bilan bir xil ekanligini bilish",
      "Teng ta’sir etuvchi kuchni topish",
    ],
    teachingPlan: [
      {
        step: 1,
        title: "Kuch nima?",
        explanation: "Jismlarning bir-biriga ta’siri. Nyutonlarda (N) o‘lchanadi.",
        boardTip: "$1\\text{ N} = 1\\text{ kg} \\cdot 1\\text{ m/s}^2$",
      },
      {
        step: 2,
        title: "Nyutonning 2-qonuni",
        explanation: "Kuch qancha katta bo‘lsa tezlanish shuncha katta. Massa qancha katta bo‘lsa tezlanish shuncha kichik.",
        boardTip: "$F = ma \\implies a = \\frac{F}{m}$",
      },
      {
        step: 3,
        title: "Qarama-qarshi kuchlar",
        explanation: "Tortish kuchi oldinga, ishqalanish orqaga bo‘lsa, ular ayriladi.",
        boardTip: "$F_{\\text{tort}} - F_{\\text{ishq}} = ma$",
      },
    ],
    keyFormulas: [
      {
        latex: "F = ma",
        name: "Nyutonning 2-qonuni",
        unit: "N (Nyuton)",
      },
      {
        latex: "a = \\frac{F}{m}",
        name: "Tezlanish",
        unit: "m/s²",
      },
    ],
    workedExamples: [
      {
        problem: "$2\\text{ kg}$ massali jismga $10\\text{ N}$ kuch ta’sir qilsa, u qanday tezlanish oladi?",
        solution: "$a = F / m = 10 / 2 = 5\\text{ m/s}^2$.",
        answer: "5 m/s²",
      },
    ],
    commonPitfalls: [
      "Kuch yo‘nalishini tezlik yo‘nalishi deb o‘ylash (to‘p tepaga uchayotganda tezlik tepaga, lekin tortish kuchi pastga!).",
    ],
    realWorldApplications: [
      "Raketa yengil bo‘lishi uchun yonilg‘i baklari bo‘shagach tashlab yuboriladi (massa kamayib, tezlanish oshadi).",
    ],
  },

  "08": {
    number: "08",
    title: "Nyutonning uchinchi qonuni: Ta’sir va aks ta’sir",
    quarter: 1,
    quarterTitle: "Mexanika",
    hook: "Devorni mushtlasangiz nega qo‘lingiz og‘riydi? Raketa ochiq kosmosda havosi yo‘q joyda qanday harakatlanadi?",
    summary: "Ta’sirga teng va qarama-qarshi aks ta’sir mavjud: $F_1 = -F_2$. Reaktiv harakat.",
    objectives: [
      "Kuchlar juft holda hosil bo‘lishini bilish",
      "Nega bu kuchlar bir-birini yo‘qotmasligini tushunish (turli jismlarga qo‘yiladi)",
      "Raketa harakatini tushuntirish",
    ],
    teachingPlan: [
      {
        step: 1,
        title: "Yakka kuch bo‘lmaydi",
        explanation: "Siz stolni bossangiz, stol ham sizni xuddi shunday kuch bilan yuqoriga itaradi.",
        boardTip: "$\\vec{F}_{12} = -\\vec{F}_{21}$",
      },
      {
        step: 2,
        title: "Nega ular tenglashib nol bo‘lmaydi?",
        explanation: "Chunki ular bitta jismga emas, IKKI XIL jismga qo‘yiladi. Oyoq yerni itaradi, Yer oyoqni itaradi.",
        boardTip: "Kuchlar har xil jismlarda bo‘lgani uchun bir-birini yo‘qotmaydi.",
      },
      {
        step: 3,
        title: "Reaktiv harakat",
        explanation: "Shar ichidagi havo orqaga otilsa, shar oldinga uchadi.",
        boardTip: "Gaz orqaga $\\implies$ Raketa oldinga",
      },
    ],
    keyFormulas: [
      {
        latex: "\\vec{F}_1 = -\\vec{F}_2",
        name: "Nyutonning 3-qonuni",
        unit: "N",
      },
      {
        latex: "m_1 a_1 = m_2 a_2",
        name: "O‘zaro ta’sir tezlanishlari",
      },
    ],
    workedExamples: [
      {
        problem: "$60\\text{ kg}$ li odam muz ustida turib $0.5\\text{ kg}$ li toshni $12\\text{ m/s}$ tezlik bilan otdi. Odam qanday tezlikda orqaga suriladi?",
        solution: "$m_1 v_1 = m_2 v_2 \\implies 60 \\times v = 0.5 \\times 12 = 6 \\implies v = 0.1\\text{ m/s}$.",
        answer: "0.1 m/s",
      },
    ],
    commonPitfalls: [
      "Ot aravani tortsa, arava ham otni tortadi, unda qanday yuradi? (Sabab: ot yerga kuchliroq tayanadi).",
    ],
    realWorldApplications: [
      "Qush qanoti havoni pastga uradi, havo qushni yuqoriga ko‘taradi.",
      "Kema parraklari suvni orqaga itarib harakatlanadi.",
    ],
  },

  "09": {
    number: "09",
    title: "Butun olam tortishish qonuni va jism og‘irligi",
    quarter: 1,
    quarterTitle: "Mexanika",
    hook: "Tarozi ustida turganda u nimaniki o‘lchaydi — massanimi yoki og‘irliknimi? Lift tez tushganda nega ichingiz uzilib ketgandek bo‘ladi?",
    summary: "Gravitatsiya kuchi, og‘irlik kuchi $F = mg$, jism og‘irligi $P$, vaznsizlik holati.",
    objectives: [
      "Massa (kg, skalyar) va Og‘irlik (N, vektor) farqini bilish",
      "Liftda og‘irlikning o‘zgarishini ($P = m(g \\pm a)$) hisoblash",
      "Vaznsizlik qachon bo‘lishini tushunish",
    ],
    teachingPlan: [
      {
        step: 1,
        title: "Butun olam tortishishi",
        explanation: "Koinotdagi hamma jism bir-birini tortadi. Masofa uzoqlashsa kvadratiga teskari kamayadi.",
        boardTip: "$F = G \\frac{m_1 m_2}{r^2}$",
      },
      {
        step: 2,
        title: "Massa vs Og‘irlik",
        explanation: "Massa (kg) — qayerda bo‘lsangiz ham o‘zgarmaydi. Og‘irlik (N) — polga yoki taroziga bosadigan kuchi.",
        boardTip: "Tinch turganda: $P = mg$. Oyda og‘irlik 6 marta kamayadi!",
      },
      {
        step: 3,
        title: "Lift va Vaznsizlik",
        explanation: "Lift tepaga tezlashsa og‘irlik ortadi ($P = m(g+a)$), pastga tushsa kamayadi ($P = m(g-a)$). Erkin tushsa og‘irlik nol!",
        boardTip: "Agar $a = g$ bo‘lsa: $P = 0$ (Vaznsizlik).",
      },
    ],
    keyFormulas: [
      {
        latex: "F = G \\frac{m_1 m_2}{r^2}",
        name: "Tortishish qonuni",
        unit: "N",
      },
      {
        latex: "P = m(g \\pm a)",
        name: "Harakatdagi jism og‘irligi",
        unit: "N",
      },
    ],
    workedExamples: [
      {
        problem: "$50\\text{ kg}$ bola liftda $2\\text{ m/s}^2$ tezlanish bilan yuqoriga ko‘tarilmoqda. Uning taroziga ko‘rsatadigan og‘irligi qancha? ($g = 10\\text{ m/s}^2$).",
        solution: "$P = m(g + a) = 50 \\times (10 + 2) = 50 \\times 12 = 600\\text{ N}$.",
        answer: "600 N",
      },
    ],
    commonPitfalls: [
      "Vaznsizlikda gravitatsiya yo‘q deb o‘ylash (kosmik stansiyada gravitatsiya bor, shunchaki tayanuvchi pol yo‘q).",
      "Vazn bilan massani bitta deb o‘ylash.",
    ],
    realWorldApplications: [
      "Sun'iy yo‘ldoshlar Yer atrofida gravitatsiya kuchi hisobiga aylanadi.",
    ],
  },

  "10": {
    number: "10",
    title: "Tinchlikdagi va sirpanishdagi ishqalanish kuchi",
    quarter: 1,
    quarterTitle: "Mexanika",
    hook: "Agar dunyoda ishqalanish yo‘q bo‘lib qolsa, qadam bosib yura olarmidik?",
    summary: "Ishqalanish turlari, sirpanish ishqalanishi $F = \\mu N$, sirtlarning roli.",
    objectives: [
      "Ishqalanish harakatga emas, sirpanishga qarshiligini bilish",
      "$F_{\\text{ishq}} = \\mu mg$ formulasini qo‘llash",
      "Dumalanish ishqalanishi eng kichik ekanligini tushunish",
    ],
    teachingPlan: [
      {
        step: 1,
        title: "Ishqalanish qayerdan keladi?",
        explanation: "Mikroskop ostida hatto oyna ham g‘adir-budur. Ular bir-biriga ilashib qarshilik qiladi.",
        boardTip: "G‘adir-budurlik $\\implies$ Ishqalanish",
      },
      {
        step: 2,
        title: "Sirpanish ishqalanishi",
        explanation: "Kuch jismning og‘irligi va sirtning silliqligiga bog‘liq. Yuza maydoniga bog‘liq emas!",
        boardTip: "$F_{\\text{ishq}} = \\mu N = \\mu mg$",
      },
      {
        step: 3,
        title: "Dumalanish — eng katta ixtiro",
        explanation: "G‘ildirak sirpanishni dumalanishga aylantiradi. Dumalash 10-100 marta oson.",
        boardTip: "$F_{\\text{dumalash}} \\ll F_{\\text{sirpanish}}$",
      },
    ],
    keyFormulas: [
      {
        latex: "F_{\\text{ishq}} = \\mu N",
        name: "Ishqalanish kuchi",
        unit: "N",
      },
      {
        latex: "F_{\\text{ishq}} = \\mu mg",
        name: "Gorizontal sirtda",
        unit: "N",
      },
    ],
    workedExamples: [
      {
        problem: "Massasi $10\\text{ kg}$ yuk stol ustida turibdi. $\\mu = 0.2$. Uni tekis siljitish uchun qanday kuch kerak? ($g = 10\\text{ m/s}^2$).",
        solution: "$F = \\mu mg = 0.2 \\times 10 \\times 10 = 20\\text{ N}$.",
        answer: "20 N",
      },
    ],
    commonPitfalls: [
      "Keng shina tor shinaga qaraganda ko‘proq ishqalanadi deb o‘ylash (yuza maydoni $S$ formulaga kirmaydi).",
    ],
    realWorldApplications: [
      "Qishda mashina sirpanmasligi uchun qor zanjirlari taqiladi.",
      "Velosiped va mashinalarda podshipniklar orqali ishqalanish kamaytiriladi.",
    ],
  },

  "11": {
    number: "11",
    title: "Qattiq jismlar, suyuqlik va gazlarda bosim",
    quarter: 1,
    quarterTitle: "Mexanika",
    hook: "Nega o‘tkir igna teriga oson botadi, lekin to‘mtoq qalam botmaydi? G‘avvoslar nega chuqurlikda qattiq bosimni sezadi?",
    summary: "Bosim $P = F / S$. Suyuqlik bosimi $P = \\rho gh$. Paskal va Arximed qonunlari.",
    objectives: [
      "Bosim va kuch farqini bilish",
      "$P = \\rho gh$ orqali chuqurlikdagi bosimni topish",
      "Arximed kuchi va suzish shartini tushunish",
    ],
    teachingPlan: [
      {
        step: 1,
        title: "Bosim nima?",
        explanation: "Yuza qancha kichik bo‘lsa, bosim shuncha katta. Igna shuning uchun tez botadi.",
        boardTip: "$P = \\frac{F}{S} \\quad [\\text{Pa} = \\text{N/m}^2]$",
      },
      {
        step: 2,
        title: "Suyuqlik bosimi",
        explanation: "Suv qancha chuqur bo‘lsa, ustidagi suvning og‘irligi shuncha kuchli bosadi.",
        boardTip: "$P = \\rho g h$",
      },
      {
        step: 3,
        title: "Arximed kuchi",
        explanation: "Suvga botgan jismni suv yuqoriga itaradi. Jism zichligi suvnikidan kichik bo‘lsa suzadi.",
        boardTip: "$F_A = \\rho_{\\text{suv}} g V$",
      },
    ],
    keyFormulas: [
      {
        latex: "P = \\frac{F}{S}",
        name: "Bosim ta’rifi",
        unit: "Pa",
      },
      {
        latex: "P = \\rho g h",
        name: "Gidrostatik bosim",
        unit: "Pa",
      },
      {
        latex: "F_A = \\rho g V",
        name: "Arximed kuchi",
        unit: "N",
      },
    ],
    workedExamples: [
      {
        problem: "Suv ostida $10\\text{ m}$ chuqurlikda suvning bosimi qancha? (Suv zichligi $1000\\text{ kg/m}^3$, $g = 10\\text{ m/s}^2$).",
        solution: "$P = \\rho g h = 1000 \\times 10 \\times 10 = 100\\,000\\text{ Pa} = 100\\text{ kPa} = 1\\text{ atm}$.",
        answer: "100 kPa (1 atm)",
      },
    ],
    commonPitfalls: [
      "Suyuqlik bosimi idishning kengligiga bog‘liq deb o‘ylash (faqat chuqurlik $h$ ga bog‘liq!).",
    ],
    realWorldApplications: [
      "Po‘lat kema ichi havo bilan to‘la bo‘lgani uchun o‘rtacha zichligi suvdan kichik bo‘lib suzadi.",
    ],
  },

  "12": {
    number: "12",
    title: "Oddiy mexanizmlar: Richag, blok va qiya tekislik",
    quarter: 1,
    quarterTitle: "Mexanika",
    hook: "Arximed: 'Menga tayanch bering, Yerni joyidan qo‘zg‘ataman!' deganida nimani nazarda tutgan?",
    summary: "Kuch momenti $M = F \\cdot d$, richag qoidasi $F_1 d_1 = F_2 d_2$. Oltin qoida.",
    objectives: [
      "Richag muvozanat qoidasini bilish",
      "Qo‘zg‘aluvchan blok 2 marta kuchdan yutishini tushunish",
      "Mexanika ishdan yutuq bermasligini (Oltin qoida) bilish",
    ],
    teachingPlan: [
      {
        step: 1,
        title: "Richag qoidasi",
        explanation: "Yelka qancha uzun bo‘lsa, shuncha kam kuch kerak bo‘ladi.",
        boardTip: "$F_1 d_1 = F_2 d_2 \\implies \\frac{F_1}{F_2} = \\frac{d_2}{d_1}$",
      },
      {
        step: 2,
        title: "Bloklar",
        explanation: "Qo‘zg‘almas blok faqat yo‘nalishni o‘zgartiradi. Qo‘zg‘aluvchan blok kuchdan 2 marta yutadi.",
        boardTip: "Qo‘zg‘aluvchan blokda: $F = P / 2$",
      },
      {
        step: 3,
        title: "Oltin qoida",
        explanation: "Kuchdan necha marta yutsangiz, masofadan shuncha marta yutqazasiz. Ishdan hech qachon yutib bo‘lmaydi!",
        boardTip: "$A_1 = A_2 \\implies F_1 s_1 = F_2 s_2$",
      },
    ],
    keyFormulas: [
      {
        latex: "M = F \\cdot d",
        name: "Kuch momenti",
        unit: "N·m",
      },
      {
        latex: "F_1 d_1 = F_2 d_2",
        name: "Richag muvozanati",
      },
    ],
    workedExamples: [
      {
        problem: "Richagning qisqa yelkasi $10\\text{ sm}$, uzun yelkasi $50\\text{ sm}$. Qisqa tomonidagi $100\\text{ N}$ yukni ko‘tarish uchun qancha kuch kerak?",
        solution: "$F_1 d_1 = F_2 d_2 \\implies 100 \\times 10 = F_2 \\times 50 \\implies F_2 = 1000 / 50 = 20\\text{ N}$. (Kuchdan 5 marta yutiladi).",
        answer: "20 N",
      },
    ],
    commonPitfalls: [
      "Mexanizm energiya yoki ishni tejaydi deb o‘ylash (ish o‘zgarmaydi, faqat kuch kamayadi).",
    ],
    realWorldApplications: [
      "Qaychi, mixsug‘urgich, velosiped tormozlari richag asosida ishlaydi.",
    ],
  },

  "13": {
    number: "13",
    title: "Mexanik ish, quvvat va foydali ish koeffitsienti",
    quarter: 1,
    quarterTitle: "Mexanika",
    hook: "Og‘ir yukni ko‘tarib joyingizda 1 soat qimirlamay tursangiz, nega fizikada ishingiz 0 ga teng?",
    summary: "Mexanik ish $A = Fs$, quvvat $N = A / t = Fv$, FIK $\\eta = A_{\\text{foydali}} / A_{\\text{to‘liq}}$.",
    objectives: [
      "Ish bajarilishi uchun kuch ham, ko‘chish ham kerakligini bilish",
      "Quvvat nima ekanligini (Vatt) tushunish",
      "FIK hech qachon 100% dan oshmasligini anglash",
    ],
    teachingPlan: [
      {
        step: 1,
        title: "Ish nima?",
        explanation: "Kuch ta’sirida jism siljishi kerak. Siljimasa ($s = 0$) — ish nol.",
        boardTip: "$A = F \\cdot s \\quad [\\text{Joul} = \\text{N}\\cdot\\text{m}]$",
      },
      {
        step: 2,
        title: "Quvvat",
        explanation: "Ishni qanchalik tez bajarish ko‘rsatkichi. 1 sekunddagi ish.",
        boardTip: "$N = \\frac{A}{t} = Fv \\quad [\\text{Vatt} = \\text{J/s}]$",
      },
      {
        step: 3,
        title: "FIK (Foydali ish koeffitsienti)",
        explanation: "Ishqalanish tufayli sarflangan ishning bir qismi yo‘qoladi. Shuning uchun FIK doim 100% dan kam.",
        boardTip: "$\\eta = \\frac{A_{\\text{foydali}}}{A_{\\text{to‘liq}}} \\times 100\\%$",
      },
    ],
    keyFormulas: [
      {
        latex: "A = F s",
        name: "Mexanik ish",
        unit: "J (Joul)",
      },
      {
        latex: "N = \\frac{A}{t} = F v",
        name: "Quvvat",
        unit: "W (Vatt)",
      },
      {
        latex: "\\eta = \\frac{A_{\\text{foydali}}}{A_{\\text{to‘liq}}} \\times 100\\%",
        name: "FIK",
        unit: "%",
      },
    ],
    workedExamples: [
      {
        problem: "$500\\text{ N}$ kuch bilan aravachani $20\\text{ metr}$ ga surishda qancha ish bajariladi?",
        solution: "$A = F s = 500 \\times 20 = 10\\,000\\text{ J} = 10\\text{ kJ}$.",
        answer: "10 kJ",
      },
    ],
    commonPitfalls: [
      "Kuch harakatga tik bo‘lsa (masalan yukni ushlab gorizontal yurganda og‘irlik kuchi) ish nolga tengligini unutish.",
    ],
    realWorldApplications: [
      "Elektr dvigatellari va lampochkalarning quvvati Vatt (W) larda ko‘rsatiladi.",
    ],
  },

  "14": {
    number: "14",
    title: "Kinetik va potensial energiya. Energiyaning saqlanish qonuni",
    quarter: 1,
    quarterTitle: "Mexanika",
    hook: "Amerikacha tepaliklarda (rollercoaster) vagonchada motor yo‘q, lekin u qanday qilib o‘z-o‘zidan tezlashib butun yo‘lni bosib o‘tadi?",
    summary: "Harakat energiyasi ($E_k = mv^2/2$), balandlik energiyasi ($E_p = mgh$), energiyaning saqlanishi.",
    objectives: [
      "Kinetik va potensial energiya formulalarini bilish",
      "Balandlikdan tushganda potensial energiya kinetikka aylanishini anglash",
      "$mgh = mv^2/2$ tengligidan tezlikni topish",
    ],
    teachingPlan: [
      {
        step: 1,
        title: "Kinetik energiya",
        explanation: "Harakat tezligi tufayli hosil bo‘ladigan energiya. Tezlik 2 marta oshsa, energiya 4 marta oshadi!",
        boardTip: "$E_k = \\frac{m v^2}{2}$",
      },
      {
        step: 2,
        title: "Potensial energiya",
        explanation: "Balandlikka ko‘tarilgan jismning energiyasi.",
        boardTip: "$E_p = mgh$",
      },
      {
        step: 3,
        title: "Energiyaning saqlanishi",
        explanation: "Energiya yo‘qdan bor bo‘lmaydi, bordan yo‘qolmaydi. U faqat bir turdan boshqasiga o‘tadi.",
        boardTip: "$E_p \\to E_k \\implies mgh = \\frac{mv^2}{2} \\implies v = \\sqrt{2gh}$",
      },
    ],
    keyFormulas: [
      {
        latex: "E_k = \\frac{m v^2}{2}",
        name: "Kinetik energiya",
        unit: "J",
      },
      {
        latex: "E_p = mgh",
        name: "Potensial energiya",
        unit: "J",
      },
      {
        latex: "E_k + E_p = \\text{const}",
        name: "Energiyaning saqlanish qonuni",
      },
    ],
    workedExamples: [
      {
        problem: "$2\\text{ kg}$ tosh $5\\text{ m}$ balandlikdan erkin tushdi. Yerga urilish paytidagi kinetik energiyasi qancha? ($g = 10\\text{ m/s}^2$).",
        solution: "Saqlanish qonuniga ko‘ra: $E_k = E_p = mgh = 2 \\times 10 \\times 5 = 100\\text{ J}$.",
        answer: "100 J",
      },
    ],
    commonPitfalls: [
      "Tezlik oshganda energiyani to‘g‘ri proporsional deb o‘ylash (u kvadratiga proporsional: $v^2$).",
    ],
    realWorldApplications: [
      "Gidroelektr stansiyalari (GES) suvning balandlikdagi potensial energiyasidan elektr oladi.",
    ],
  },

  "15": {
    number: "15",
    title: "Mexanik tebranishlar, mayatniklar va rezonans hodisasi",
    quarter: 1,
    quarterTitle: "Mexanika",
    hook: "Nega askarlar ko‘prikdan o‘tayotganda baravariga 'marsh' qadam tashlash taqiqlanadi?",
    summary: "Davr $T = 1 / \\nu$, matematik mayatnik $T = 2\\pi \\sqrt{l/g}$, prujinali mayatnik va rezonans.",
    objectives: [
      "Davr va chastota farqini bilish",
      "Mayatnik davri ip uzunligiga bog‘liq, massaga bog‘liq emasligini tushunish",
      "Rezonans nima ekanligini bilish",
    ],
    teachingPlan: [
      {
        step: 1,
        title: "Davr va Chastota",
        explanation: "Davr — 1 ta to‘liq tebranish vaqti. Chastota — 1 sekunddagi tebranishlar soni (Gerts).",
        boardTip: "$T = \\frac{1}{\\nu}, \\quad \\nu = \\frac{1}{T} \\quad [\\text{Hz}]$",
      },
      {
        step: 2,
        title: "Matematik mayatnik",
        explanation: "Ip uzun bo‘lsa sekin tebranadi. Katta yuk osilsa ham tebranish tezligi o‘zgarmaydi!",
        boardTip: "$T = 2\\pi \\sqrt{\\frac{l}{g}}$ (Massa ta'sir qilmaydi)",
      },
      {
        step: 3,
        title: "Rezonans",
        explanation: "Tashqi turtki chastotasi jismning o‘z chastotasiga teng kelib qolsa, tebranish birdan keskin kuchayadi.",
        boardTip: "Rezonans ko‘prikni yoki binoni buzib yuborishi mumkin.",
      },
    ],
    keyFormulas: [
      {
        latex: "T = \\frac{t}{N} = \\frac{1}{\\nu}",
        name: "Davr va chastota",
        unit: "s, Hz",
      },
      {
        latex: "T = 2\\pi \\sqrt{\\frac{l}{g}}",
        name: "Matematik mayatnik",
        unit: "s",
      },
      {
        latex: "T = 2\\pi \\sqrt{\\frac{m}{k}}",
        name: "Prujinali mayatnik",
        unit: "s",
      },
    ],
    workedExamples: [
      {
        problem: "Mayatnik $20\\text{ sekund}$ da 10 marta to‘liq tebrandi. Uning davri va chastotasi qancha?",
        solution: "Davr: $T = t / N = 20 / 10 = 2\\text{ s}$. Chastota: $\\nu = 1 / T = 1 / 2 = 0.5\\text{ Hz}$.",
        answer: "T = 2 s, v = 0.5 Hz",
      },
    ],
    commonPitfalls: [
      "Mayatnikka og‘irroq yuk ossak tezroq tebranadi deb o‘ylash (massaning mutlaqo aloqasi yo‘q!).",
    ],
    realWorldApplications: [
      "Qadimgi mayatnikli devor soatlari aynan shu qonuniyat bilan aniq vaqtni ko‘rsatgan.",
    ],
  },

  "16": {
    number: "16",
    title: "1-Chorak Nazorati: Mexanika sinov testi va virtual laboratoriya topshirig‘i",
    quarter: 1,
    quarterTitle: "Mexanika",
    hook: "1-chorakda o‘rgangan 4 ta asosiy ustunimiz — Harakat, Kuch, Bosim va Energiya — qanday qilib birga ishlaydi?",
    summary: "1-chorak formulalari sintezi, kombinatsiyalangan masalalar va sinov testiga tayyorgarlik.",
    objectives: [
      "Mexanikaning barcha formulalarini bitta tizimda ko‘ra olish",
      "Masalalarni ham kuch ($F=ma$), ham energiya bilan yechish",
    ],
    teachingPlan: [
      {
        step: 1,
        title: "Mexanikaning 4 ustuni",
        explanation: "1) Harakat (Kinematika), 2) Kuch (Nyuton), 3) Bosim (Suyuqliklar), 4) Energiya (Saqlanish).",
        boardTip: "Barcha formulalarning yagona xaritasi.",
      },
      {
        step: 2,
        title: "Kombinatsiyalangan masala",
        explanation: "Balandlikdan tushgan jismning tezligini topib, keyin u polga qanday kuch bilan urilishini hisoblash.",
        boardTip: "$mgh \\to E_k \\to F = ma$",
      },
    ],
    keyFormulas: [
      {
        latex: "v = v_0 + at, \\quad F = ma, \\quad E_k = \\frac{mv^2}{2}",
        name: "Mexanikaning poydevori",
      },
    ],
    workedExamples: [
      {
        problem: "$1\\text{ kg}$ jism $5\\text{ m}$ dan tushdi. U yerga qanday tezlik bilan uriladi?",
        solution: "$v = \\sqrt{2gh} = \\sqrt{2 \\times 10 \\times 5} = \\sqrt{100} = 10\\text{ m/s}$.",
        answer: "10 m/s",
      },
    ],
    commonPitfalls: [
      "Formulalarni shunchaki yodlab, qachon qaysi birini ishlatishni tushunmaslik.",
    ],
    realWorldApplications: [
      "Barcha transport vositalari va mashinalar ushbu mexanika qonunlariga asoslangan.",
    ],
  },
};

/**
 * 78 dars uchun qisqa va lo'nda cheatsheet generatori
 */
export function getLessonCheatsheet(lessonNumber: string): LessonCheatsheet {
  const padded = lessonNumber.padStart(2, "0");
  if (detailedCheatsheets[padded]) {
    return detailedCheatsheets[padded];
  }

  const allLessons = ilkQadamRoadmap.flatMap((q) =>
    q.lessons.map((l) => ({
      ...l,
      quarterNumber: q.number,
      quarterTitle: q.title,
    })),
  );

  const num = parseInt(padded, 10);
  const found = allLessons.find((l) => l.id === num);

  const title = found?.title ?? `${padded}-dars`;
  const quarter = found?.quarterNumber ?? 1;
  const quarterTitle = found?.quarterTitle ?? "Fizika";

  return {
    number: padded,
    title,
    quarter,
    quarterTitle,
    hook: `${title} nega tabiatda va texnikada muhim o‘rin tutadi?`,
    summary: `${title} mavzusi bo‘yicha asosiy tushunchalar va formulalar.`,
    objectives: [
      `${title} mohiyatini bilish`,
      "Asosiy formulalar va birliklarni qo‘llash",
    ],
    teachingPlan: [
      {
        step: 1,
        title: "Mavzu mohiyati",
        explanation: `${title} haqida qisqa va lo‘nda tushuncha bering.`,
        boardTip: "Mavzu sarlavhasi va asosiy tushuncha.",
      },
      {
        step: 2,
        title: "Asosiy formula",
        explanation: "Formulaning kelib chiqishi va o‘lchov birligini ko‘rsating.",
        boardTip: "Formula ramkaga olinadi.",
      },
      {
        step: 3,
        title: "Masala yechimi",
        explanation: "Doskada 1 ta namunaviy hisoblash masalasini ko‘rsating.",
      },
    ],
    keyFormulas: [
      {
        latex: "\\text{Formula tayyorlanmoqda}",
        name: "Asosiy formula",
      },
    ],
    workedExamples: [
      {
        problem: `${title} bo‘yicha namunaviy masala.`,
        solution: "Formulaga qo‘yib hisoblash.",
        answer: "Javob",
      },
    ],
    commonPitfalls: [
      "Birliklar sistemasini (SI) o‘tkazishda adashish.",
    ],
    realWorldApplications: [
      "Zamonaviy texnika va hayotdagi qo‘llanilishi.",
    ],
  };
}
