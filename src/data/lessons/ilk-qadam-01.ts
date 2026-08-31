import type { Locale } from "@/lib/i18n";

export interface QuizQuestion { id: string; question: string; options: { id: string; label: string }[]; correctId: string; explanation: string; }
export interface FirstLessonContent {
  lessonLabel: string; title: string; intro: string; stages: [string, string, string, string];
  slides: { eyebrow: string; title: string; body: string }[]; quiz: QuizQuestion[];
  example: { eyebrow: string; title: string; prompt: string; steps: string[]; answer: string };
  homework: { eyebrow: string; title: string; body: string; download: string };
}

const slideCopy = {
  uz: [["01 / Savol", "O‘lchashdagi umumiy til", "Agar hamma o‘z qarichi bilan o‘lchasa, koinot kemasining detallari bir-biriga mos kelarmidi?"], ["02 / Fizik kattalik", "O‘lchash mumkin bo‘lgan narsa", "Uzunlik, massa, vaqt va harorat kabi hodisalarni son hamda birlik bilan ifodalaymiz."], ["03 / Aniqlik", "Asbob natijaga ta’sir qiladi", "Lineyka uzunlikni, tarozi massani, sekundomer vaqtni o‘lchaydi. To‘g‘ri asbob ishonchli natijaning boshlanishidir."], ["04 / SI", "Xalqaro birliklar sistemasi", "Metr, kilogramm, sekund, amper, kelvin, mol va kandela turli davlatlar uchun bitta ilmiy tildir."], ["05 / Prefiks", "Katta va kichik miqdorlar", "kilo = 10³, senti = 10⁻² va milli = 10⁻³. Prefikslar sonlarni ixcham yozishga yordam beradi."], ["06 / Aylantirish", "Birlikni o‘zgartirish", "2,4 km = 2400 m. Birlik almashganda kattalikning o‘zi emas, uning yozilishi o‘zgaradi."], ["07 / Xulosa", "Aniqlik - muhandislikning asosi", "SI birliklari hamma bir xil natijaga kelishi uchun yaratilgan kelishuvdir."]],
  en: [["01 / Question", "A shared language for measurement", "If everyone measured with their own handspan, would spacecraft parts fit together?"], ["02 / Physical quantity", "Something we can measure", "We express length, mass, time and temperature with a number and a unit."], ["03 / Accuracy", "The tool affects the result", "A ruler measures length, a scale measures mass and a stopwatch measures time."], ["04 / SI", "International System of Units", "Metre, kilogram, second, ampere, kelvin, mole and candela form one scientific language."], ["05 / Prefixes", "Large and small quantities", "kilo = 10³, centi = 10⁻² and milli = 10⁻³. Prefixes keep values compact."], ["06 / Conversion", "Changing the unit", "2.4 km = 2400 m. The quantity stays the same; only its notation changes."], ["07 / Summary", "Accuracy enables engineering", "SI is an agreement that helps everyone reach the same result."]],
  ru: [["01 / Вопрос", "Общий язык измерений", "Если каждый будет измерять своей пядью, совпадут ли детали космического корабля?"], ["02 / Величина", "То, что можно измерить", "Длину, массу, время и температуру выражают числом и единицей."], ["03 / Точность", "Прибор влияет на результат", "Линейка измеряет длину, весы - массу, секундомер - время."], ["04 / СИ", "Международная система единиц", "Метр, килограмм, секунда, ампер, кельвин, моль и кандела образуют единый язык науки."], ["05 / Приставки", "Большие и малые величины", "кило = 10³, санти = 10⁻², милли = 10⁻³. Приставки делают запись компактной."], ["06 / Перевод", "Изменение единицы", "2,4 км = 2400 м. Величина не меняется, меняется только запись."], ["07 / Итог", "Точность создаёт инженерию", "СИ - это соглашение, которое помогает всем получить одинаковый результат."]],
} as const;

function slides(locale: Locale) { return slideCopy[locale].map(([eyebrow, title, body]) => ({ eyebrow, title, body })); }

const quiz = (locale: Locale): QuizQuestion[] => {
  const values: [string, string[], string][] = locale === "uz" ? [
    ["SI sistemasida uzunlikning asosiy birligi qaysi?", ["metr", "kilometr", "santimetr"], "Uzunlikning SI asosiy birligi metr (m)."],
    ["2,5 km necha metr?", ["250 m", "2500 m", "25 000 m"], "1 km = 1000 m, demak 2,5 km = 2500 m."],
    ["Vaqtni o‘lchash uchun qaysi asbob mos?", ["Sekundomer", "Tarozi", "Termometr"], "Sekundomer vaqt oralig‘ini o‘lchaydi."],
    ["750 sm necha metr?", ["0,75 m", "7,5 m", "75 m"], "1 m = 100 sm, shuning uchun 750 ÷ 100 = 7,5 m."],
    ["Qaysi yozuv fizik kattalikni to‘liq ifodalaydi?", ["12", "12 metr", "metr"], "Fizik kattalik son va birlik bilan yoziladi."],
  ] : locale === "en" ? [
    ["What is the SI base unit of length?", ["metre", "kilometre", "centimetre"], "The SI base unit of length is the metre (m)."],
    ["How many metres are 2.5 km?", ["250 m", "2500 m", "25,000 m"], "1 km = 1000 m, so 2.5 km = 2500 m."],
    ["Which tool measures time?", ["Stopwatch", "Scale", "Thermometer"], "A stopwatch measures a time interval."],
    ["How many metres are 750 cm?", ["0.75 m", "7.5 m", "75 m"], "1 m = 100 cm, therefore 750 ÷ 100 = 7.5 m."],
    ["Which notation fully states a physical quantity?", ["12", "12 metres", "metres"], "A physical quantity includes a number and a unit."],
  ] : [
    ["Какая основная единица длины в СИ?", ["метр", "километр", "сантиметр"], "Основная единица длины СИ - метр (м)."],
    ["Сколько метров в 2,5 км?", ["250 м", "2500 м", "25 000 м"], "1 км = 1000 м, значит 2,5 км = 2500 м."],
    ["Какой прибор измеряет время?", ["Секундомер", "Весы", "Термометр"], "Секундомер измеряет интервал времени."],
    ["Сколько метров в 750 см?", ["0,75 м", "7,5 м", "75 м"], "1 м = 100 см, поэтому 750 ÷ 100 = 7,5 м."],
    ["Какая запись полностью выражает физическую величину?", ["12", "12 метров", "метр"], "Физическая величина записывается числом и единицей."],
  ];
  return values.map(([question, options, explanation], index) => ({ id: `ilk-01-q${index + 1}`, question, options: options.map((label, optionIndex) => ({ id: String.fromCharCode(97 + optionIndex), label })), correctId: index === 1 || index === 3 || index === 4 ? "b" : "a", explanation }));
};

export const firstLessonContent: Record<Locale, FirstLessonContent> = {
  uz: { lessonLabel: "Ilk qadam · 01", title: "Fizik kattaliklar va SI", intro: "Agar hamma o‘z qarichi bilan o‘lchasa, koinot kemasini qanday quramiz?", stages: ["Slaydlar", "Quiz", "Namunaviy masala", "Uyga vazifa"], slides: slides("uz"), quiz: quiz("uz"), example: { eyebrow: "Namunaviy masala", title: "Rover tezligini SI birliklarida toping", prompt: "Mars roveri 2,4 km yo‘lni 3 minutda bosib o‘tdi. Uning o‘rtacha tezligini m/s da toping.", steps: ["Masofani aylantiramiz: 2,4 km = 2400 m.", "Vaqtni aylantiramiz: 3 min = 180 s.", "Formula: v = s / t.", "Hisoblaymiz: v = 2400 / 180."], answer: "Javob: v ≈ 13,3 m/s." }, homework: { eyebrow: "Uyga vazifa", title: "10 ta mashqni mustaqil bajaring", body: "Javoblar hozircha tekshirilmaydi. PDF ichida mavzu nomi va ustoz ma’lumoti berilgan.", download: "PDF-ni yuklab olish" } },
  en: { lessonLabel: "First Steps · 01", title: "Physical quantities and SI", intro: "If everyone measured with their own handspan, how could we build a spacecraft?", stages: ["Slides", "Quiz", "Worked example", "Homework"], slides: slides("en"), quiz: quiz("en"), example: { eyebrow: "Worked example", title: "Find the rover speed in SI units", prompt: "A Mars rover travelled 2.4 km in 3 minutes. Find its average speed in m/s.", steps: ["Convert distance: 2.4 km = 2400 m.", "Convert time: 3 min = 180 s.", "Use v = s / t.", "Calculate: v = 2400 / 180."], answer: "Answer: v ≈ 13.3 m/s." }, homework: { eyebrow: "Homework", title: "Complete 10 exercises independently", body: "Answers are not checked yet. The PDF contains the lesson title and instructor information.", download: "Download PDF" } },
  ru: { lessonLabel: "Первые шаги · 01", title: "Физические величины и СИ", intro: "Как построить космический корабль, если каждый измеряет своей пядью?", stages: ["Слайды", "Квиз", "Пример", "Домашнее задание"], slides: slides("ru"), quiz: quiz("ru"), example: { eyebrow: "Пример", title: "Найдите скорость ровера в СИ", prompt: "Марсоход прошёл 2,4 км за 3 минуты. Найдите среднюю скорость в м/с.", steps: ["Переведём путь: 2,4 км = 2400 м.", "Переведём время: 3 мин = 180 с.", "Формула: v = s / t.", "Вычисляем: v = 2400 / 180."], answer: "Ответ: v ≈ 13,3 м/с." }, homework: { eyebrow: "Домашнее задание", title: "Выполните 10 упражнений самостоятельно", body: "Ответы пока не проверяются. В PDF указаны тема урока и преподаватель.", download: "Скачать PDF" } },
};
