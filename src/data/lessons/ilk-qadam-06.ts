import type { Locale } from "@/lib/i18n";
import type { Lesson, PracticeTask, QuizQuestion } from "@/types/lesson";
import type { LessonSlide } from "./ilk-qadam-01";

export const lesson06Slides: Record<Locale, LessonSlide[]> = {
  uz: [
    {
      id: 1,
      eyebrow: "01 / Kirish va Muammo",
      title: "Nega Avtobus To‘xtaganda Yiqilamiz?",
      content:
        "Harakatdagi avtobusda ketayotganingizda haydovchi to‘satdan tormoz bersa, gavdangiz o‘z-o‘zidan oldinga ketadi. Avtobus joyidan tez qo‘zg‘alsa esa — orqaga ketasiz.\n\nSizni hech kim itarmadi, lekin nega harakat qildingiz? Bu hodisa tabiatning eng fundamental qonunlaridan biri — **inersiya** deb ataladi.",
      badge: "Hayotiy muammo",
      highlight: "Inersiya — har qanday jismning o‘z tezligini saqlashga intilishidir.",
    },
    {
      id: 2,
      eyebrow: "02 / Tarixiy Tajriba",
      title: "Galiley Tajribasi: Cheksiz Sirpanish",
      content:
        "Qadimda Arastu «Jism harakatlanishi uchun uni doim itarib turish kerak» deb hisoblagan.\n\nLekin **Galileo Galiley** buni inkor qildi: U silliq qiyalikdan sharni tushirdi. Yuzani qanchalik silliqlasa, shar shunchalik uzoqroq dumaladi. Galiley xulosa qildi: Agar mutlaqo ishqalanish va qarshilik bo‘lmasa, jism **abadiy to‘xtamasdan** tekis harakat qiladi!",
      badge: "Kashfiyot",
      highlight: "Jismni to‘xtatadigan narsa — kuch yo‘qligi emas, balki ishqalanish kuchidir.",
    },
    {
      id: 3,
      eyebrow: "03 / Qonun Ta’rifi",
      title: "Nyutonning 1-Qonuni",
      content:
        "Isaak Nyuton Galiley fikrini umumlashtirib, o‘zining birinchi qonunini yaratdi:\n\n*«Agar jismga boshqa jismlar ta’sir qilmasa yoki ularning ta’siri bir-birini kompensatsiya qilsa (tenglashtirsa), jism tinch holatini saqlaydi yoki to‘g‘ri chiziqli tekis harakatini davom ettiradi.»*\n\nMatematik ko‘rinishi:\n$$\\sum \\vec{F} = 0 \\implies \\vec{v} = \\text{const}$$",
      badge: "Nyuton 1",
      formula: "\\sum \\vec{F} = 0 \\implies \\vec{v} = \\text{const}",
    },
    {
      id: 4,
      eyebrow: "04 / Sanoq Sistemasi",
      title: "Inersial Sanoq Sistemalari",
      content:
        "Nyutonning 1-qonuni bajariladigan sanoq sistemalari **inersial sanoq sistemalari** deyiladi:\n\n* **Inersial:** Tinch turgan xona, to‘g‘ri va bir tekis ketayotgan poyezd yoki samolyot (stakan ichidagi suv chayqalmaydi).\n* **Noinersial:** Tezlanish bilan harakatlanayotgan avtomobil, aylanayotgan karusel (u yerda inersiya kuchlari paydo bo‘ladi).\n\nYerga bog‘langan sanoq sistemasi amaliy masalalarda inersial deb qabul qilinadi.",
      badge: "Sanoq sistemasi",
      highlight: "Bir tekis ketayotgan samolyot ichida fizik tajribalar xuddi yerdagidek o‘tadi.",
    },
    {
      id: 5,
      eyebrow: "05 / Inersiya O‘lchovi",
      title: "Massa — Inersiya O‘lchovi",
      content:
        "Nega yengil velosipedni to‘xtatish oson-u, og‘ir poyezdni to‘xtatish uchun yuzlab metrlar kerak bo‘ladi?\n\nChunki jismning massasi qancha katta bo‘lsa, uning o‘z harakat holatini o‘zgartirishi shuncha qiyin bo‘ladi. Demak:\n\n$$\\text{Massa } (m) — \\text{jismning inersiya o‘lchovidir.}$$",
      badge: "Massa",
      formula: "m \\text{ (kg)} \\sim \\text{inersiya}",
      highlight: "Massasi katta jismning inersiyasi ham katta.",
    },
    {
      id: 6,
      eyebrow: "06 / Xulosa",
      title: "Qisqa Xulosa",
      content:
        "1. Kuch — harakat sababchisi emas, balki **tezlikning o‘zgarish (tezlanish)** sababchisidir.\n2. Kuchlar yig‘indisi nol bo‘lsa, tezlik o‘zgarmaydi (jism to‘xtamaydi yoki tinch turadi).\n3. Xavfsizlik kamarlari avtomobilda inersiya tufayli jarohatlanishdan saqlaydi.",
      badge: "Xulosa",
      highlight: "Xavfsizlik kamarini taqing — inersiyani qonun bilan bekor qilib bo‘lmaydi!",
    },
  ],
  en: [
    {
      id: 1,
      eyebrow: "01 / Problem",
      title: "Why Do We Fall When the Bus Brakes?",
      content:
        "When riding a bus and the driver suddenly brakes, your body pitches forward. When it accelerates rapidly, you lurch backward.\n\nNobody pushed you, so why did you move? This phenomenon is governed by one of nature's fundamental laws: **inertia**.",
      badge: "Real problem",
      highlight: "Inertia is the tendency of an object to resist changes in its state of motion.",
    },
    {
      id: 2,
      eyebrow: "02 / Discovery",
      title: "Galileo's Thought Experiment",
      content:
        "Aristotle believed an object needs a continuous push to stay in motion. **Galileo Galilei** disproved this: reducing surface friction allowed a ball to roll further and further.\n\nHe concluded: without friction or air resistance, an object moves forever at constant velocity!",
      badge: "Discovery",
      highlight: "Friction stops motion, not the absence of a driving force.",
    },
    {
      id: 3,
      eyebrow: "03 / The Law",
      title: "Newton's First Law",
      content:
        "Isaac Newton formalized Galileo's insight into his First Law of Motion:\n\n*An object remains at rest or continues to move at a constant velocity in a straight line unless acted upon by a net external force.*\n\n$$\\sum \\vec{F} = 0 \\implies \\vec{v} = \\text{const}$$",
      badge: "Newton 1",
      formula: "\\sum \\vec{F} = 0 \\implies \\vec{v} = \\text{const}",
    },
    {
      id: 4,
      eyebrow: "04 / Reference Frames",
      title: "Inertial Reference Frames",
      content:
        "Frames of reference where Newton's first law holds true are called **inertial frames**:\n\n* **Inertial:** A room at rest, a train traveling steadily along a straight track.\n* **Non-inertial:** Accelerating vehicles, rotating carousels.\n\nFor most school physics problems, Earth is considered an inertial frame.",
      badge: "Reference frames",
      highlight: "Physics experiments behave identically inside a smooth, cruising airplane as on the ground.",
    },
    {
      id: 5,
      eyebrow: "05 / Measure of Inertia",
      title: "Mass as a Measure of Inertia",
      content:
        "Why is it easy to halt a bicycle but extremely difficult to stop a freight train?\n\nThe greater an object's mass, the more it resists acceleration. Therefore:\n\n$$\\text{Mass is the quantitative measure of an object's inertia.}$$",
      badge: "Mass",
      formula: "m \\text{ (kg)} \\sim \\text{inertia}",
    },
    {
      id: 6,
      eyebrow: "06 / Summary",
      title: "Key Takeaways",
      content:
        "1. Net force does not cause motion; it causes change in velocity (acceleration).\n2. When net force is zero, velocity remains constant.\n3. Seatbelts protect passengers from their own inertia during collisions.",
      badge: "Summary",
      highlight: "Buckle up: inertia cannot be negotiated.",
    },
  ],
  ru: [
    {
      id: 1,
      eyebrow: "01 / Введение",
      title: "Почему мы падаем при торможении автобуса?",
      content:
        "Когда автобус резко тормозит, тело пассажира наклоняется вперед. При резком старте — отклоняется назад.\n\nНикто вас не толкал, но движение произошло. Это проявление фундаментального свойства материи — **инерции**.",
      badge: "Проблема",
      highlight: "Инерция — свойство тела сохранять неизменной свою скорость.",
    },
    {
      id: 2,
      eyebrow: "02 / Эксперимент",
      title: "Опыт Галилея: вечное движение",
      content:
        "Аристотель ошибочно полагал, что для движения нужна постоянная сила. **Галилео Галилей** опроверг это: уменьшая трение на наклонной плоскости, шар катился все дальше.\n\nВывод: если убрать сопротивление и трение, тело будет двигаться равномерно и прямолинейно вечно!",
      badge: "Открытие",
      highlight: "Движение прекращается из-за трения, а не из-за отсутствия силы.",
    },
    {
      id: 3,
      eyebrow: "03 / Формулировка",
      title: "Первый закон Ньютона",
      content:
        "Исаак Ньютон сформулировал закон инерции:\n\n*Существуют такие системы отсчета, в которых тело сохраняет состояние покоя или равномерного прямолинейного движения, пока действие других тел не вынудит его изменить это состояние.*\n\n$$\\sum \\vec{F} = 0 \\implies \\vec{v} = \\text{const}$$",
      badge: "Ньютон 1",
      formula: "\\sum \\vec{F} = 0 \\implies \\vec{v} = \\text{const}",
    },
    {
      id: 4,
      eyebrow: "04 / Системы отсчета",
      title: "Инерциальные системы отсчета",
      content:
        "Системы отсчета, в которых выполняется первый закон Ньютона, называют **инерциальными**:\n\n* **ИСО:** Неподвижная комната, поезд, движущийся прямолинейно и с постоянной скоростью.\n* **НеИСО:** Ускоряющийся автомобиль, вращающаяся карусель.\n\nВ земных условиях лаборатория условно считается ИСО.",
      badge: "Системы отсчета",
      highlight: "В равномерно летящем самолете физические процессы протекают так же, как на Земле.",
    },
    {
      id: 5,
      eyebrow: "05 / Мера инерции",
      title: "Масса — мера инертности",
      content:
        "Почему легко остановить велосипед, но трудно остановить груженый поезд?\n\nЧем больше масса тела, тем сложнее изменить его скорость. Таким образом:\n\n$$\\text{Масса } (m) — \\text{количественная мера инертности тела.}$$",
      badge: "Масса",
      formula: "m \\text{ (кг)} \\sim \\text{инертность}",
    },
    {
      id: 6,
      eyebrow: "06 / Итог",
      title: "Краткий итог",
      content:
        "1. Сила — причина изменения скорости, а не самого движения.\n2. При скомпенсированных силах скорость постоянна.\n3. Ремень безопасности спасает жизнь, удерживая тело при инерционном рывке.",
      badge: "Итог",
      highlight: "Пристегивайтесь: законы физики действуют всегда!",
    },
  ],
};

export const lesson06Quiz: QuizQuestion[] = [
  {
    id: "ilk-06-q1",
    position: 1,
    question: "Inersiya hodisasi nima?",
    explanation:
      "Inersiya — jismga tashqi kuch ta'sir qilmaganda uning tinchlik yoki to‘g‘ri chiziqli tekis harakat holatini saqlab qolish xossasidir.",
    options: [
      { id: "o1", label: "Jismning o‘z harakat tezligini saqlashga intilish xossasi", isCorrect: true },
      { id: "o2", label: "Faqat og‘ir jismlarning yerga tushish xossasi", isCorrect: false },
      { id: "o3", label: "Jismning doim to‘xtashga intilishi", isCorrect: false },
      { id: "o4", label: "Faqat suyuqliklarda paydo bo‘ladigan kuch", isCorrect: false },
    ],
  },
];

export const lesson06Practice: PracticeTask[] = [
  {
    id: "ilk-06-p1",
    position: 1,
    prompt:
      "Gorizontal stolda turgan $4\\text{ kg}$ massali jismga o‘ng tomonga $12\\text{ N}$ va chap tomonga $12\\text{ N}$ qarama-qarshi kuchlar ta'sir qilmoqda. Jismga ta'sir qiluvchi natijaviy kuchni ($\\text{N}$) hisoblang.",
    unit: "N",
    answer: 0,
    tolerance: 0.01,
    hint: "Kuchlar bir to‘g‘ri chiziqda qarama-qarshi yo‘nalganda natijaviy kuch ularning ayirmasiga teng: $F_{\\text{nat}} = F_1 - F_2$.",
    solution:
      "**Namunaviy yechim:**\n- **Berilgan:** $F_1 = 12\\text{ N}$, $F_2 = 12\\text{ N}$\n- **Topish kerak:** $F_{\\text{nat}} - ?$\n- **Formula:** $F_{\\text{nat}} = F_1 - F_2$\n- **Yechilishi:** $F_{\\text{nat}} = 12 - 12 = 0\\text{ N}$\n- **Javob:** $0\\text{ N}$ (kuchlar kompensatsiyalashgan, jism tinch turadi).",
  },
];

export const lesson06Static: Lesson = {
  id: "ilk-qadam-06",
  courseSlug: "ilk-qadam",
  number: "06",
  position: 6,
  title: "Nyutonning birinchi qonuni va inersiya hodisasi",
  intro: "Avtobus to‘satdan tormoz bersa nega oldinga uchib ketamiz? Galiley qanday qilib Arastuning 2000 yillik xatosini fosh qildi?",
  videoUrl: null,
  videoDurationMin: 14,
  quiz: lesson06Quiz,
  practice: lesson06Practice,
  homework: {
    title: "Uy sharoitida inersiya tajribalari",
    body: "1. Stakan ustiga qattiq qog‘oz varag‘i va ustiga tanga qo‘ying. Qog‘ozni barmog‘ingiz bilan keskin chertib yuboring. Tangaga nima bo‘ldi? Tushuntirib bering.\n2. Nega xom tuxum bilan qaynatilgan tuxumni stol ustida aylantirganda xom tuxum tez to‘xtaydi va qo‘lni tekkizib olgach yana o‘z-o‘zidan aylana boshlaydi?",
    pdfUrl: null,
  },
  isPublished: true,
};
