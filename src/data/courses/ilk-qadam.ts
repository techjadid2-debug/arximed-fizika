export interface RoadmapLesson {
  id: number;
  title: string;
}

export interface CourseQuarter {
  number: number;
  title: string;
  lessons: RoadmapLesson[];
}

const titles = [
  ["Fizik kattaliklar, o‘lchash va SI xalqaro birliklar sistemasi", "Moddiy nuqta, sanoq sistemasi va harakatning nisbiyligi", "To‘g‘ri chiziqli tekis harakat, tezlik va ko‘chish", "Tekis o‘zgaruvchan harakat va tezlanish", "Erkin tushish harakati va og‘irlik kuchi tezlanishi", "Nyutonning birinchi qonuni va inersiya hodisasi", "Kuch, massa va Nyutonning ikkinchi qonuni", "Nyutonning uchinchi qonuni: Ta’sir va aks ta’sir", "Butun olam tortishish qonuni va jism og‘irligi", "Tinchlikdagi va sirpanishdagi ishqalanish kuchi", "Qattiq jismlar, suyuqlik va gazlarda bosim", "Oddiy mexanizmlar: Richag, blok va qiya tekislik", "Mexanik ish, quvvat va foydali ish koeffitsienti", "Kinetik va potensial energiya. Energiyaning saqlanish qonuni", "Mexanik tebranishlar, mayatniklar va rezonans hodisasi", "1-Chorak Nazorati: Mexanika sinov testi va virtual laboratoriya topshirig‘i"],
  ["Moddaning atom-molekulyar tuzilishi va Broun harakati", "Moddaning agregat holatlari: Qattiq, suyuq, gaz va plazma", "Harorat, issiqlik muvozanati va harorat shkalalari", "Gazlarning molekulyar-kinetik nazariyasi va gaz bosimi", "Issiqlik uzatish turlari: Issiqlik o‘tkazuvchanlik, konveksiya va nurlanish", "Jismlarning issiqlikdan kengayishi", "Solishtirma issiqlik sig‘imi va issiqlik miqdori hisobi", "Erish va qotish jarayonlari. Solishtirma erish issiqligi", "Bug‘lanish, kondensatsiya va qaynash hodisasi", "Havoning namligi va uni o‘lchash asboblari", "Termodinamikaning birinchi qonuni va ichki energiya", "Issiqlik dvigatellari va ularning foydali ish koeffitsienti", "Sovutgich va konditsionerlarning ishlash prinsipi", "2-Chorak Nazorati: Molekulyar fizika va issiqlik jarayonlari imtihoni"],
  ["Elektr zaryadi, zaryadning saqlanish qonuni va elektrlanish", "Kulon qonuni: Nuqtaviy zaryadlarning o‘zaro ta’siri", "O‘tkazgichlar, yarimo‘tkazgichlar va dielektriklar", "Elektr maydon kuchlanganligi va potensiali", "Elektr toki, tok kuchi va kuchlanish tushunchasi", "O‘tkazgichning elektr qarshiligi va solishtirma qarshilik", "Zanjir qismi uchun Om qonuni", "O‘tkazgichlarni ketma-ket ulash qonuniyatlari", "O‘tkazgichlarni parallel ulash qonuniyatlari", "Elektr toki bajargan ish va quvvat. Joul-Lens qonuni", "Kimyoviy tok manbalari: Batareyalar va litiy-ion akkumulyatorlar", "Doimiy magnitlar, magnit qutblari va magnit maydon chiziqlari", "Yerning magnit maydoni va kompas", "Tokli o‘tkazgich hosil qilgan magnit maydon. Ersted tajribasi", "Elektromagnitlar va ularning texnikada qo‘llanilishi", "Magnit maydonida harakatlanayotgan zaryadga ta’sir etuvchi Lorens kuchi", "Tokli o‘tkazgichga magnit maydonining ta’siri (Amper kuchi) va elektr motorlar", "Elektromagnit induksiya hodisasi va Faradey qonuni", "Doimiy (DC) va o‘zgaruvchan (AC) tok asoslari", "Transformatorlar va elektr energiyasini uzoq masofaga uzatish", "Inson organizmi orqali o‘tuvchi elektr toki va xavfsizlik texnikasi", "3-Chorak Nazorati: Murakkab zanjirlarni hisoblash va virtual podstansiya laboratoriyasi"],
  ["Atom tuzilishi: Tomson modeli va Rezerford tajribasi", "Atom yadrosining tarkibi: Protonlar, neytronlar va kuchli yadro kuchlari", "Kimyoviy elementlarning izotoplari va yadro massasi", "Tabiiy radioaktivlik: Bekkerel va Kyuri kashfiyoti", "Nurlanish turlari: Alfa, beta va gamma nurlar hamda ularning o‘tuvchanlik qobiliyati", "Radioaktiv yemirilish qonuni va yarim yemirilish davri", "Atom yadrosining bog‘lanish energiyasi va massa defekti (E=mc²)", "Og‘ir yadrolarning bo‘linishi va zanjirli yadro reaksiyasi", "Atom elektr stansiyalari (AES): Issiqlik reaktorining ishlash mexanizmi", "Boshqariladigan termoyadro sintezi: Quyosh energiyasining siri", "Radiatsiyaning tibbiyot va qishloq xo‘jaligidagi amaliy qo‘llanilishi", "4-Chorak Nazorati: Atom fizikasi imtihoni va reaktor simulyatsiyasi"],
  ["Yorug‘lik tabiati: Yorug‘lik manbalari va yorug‘lik tezligi", "Yorug‘likning to‘g‘ri chiziq bo‘ylab tarqalishi: Soya va nimsoya", "Quyosh va Oy tutilishi hodisalari", "Yorug‘likning qaytish qonuni va yassi ko‘zguda tasvir yasash", "Sferik ko‘zgular: Qavariq va botiq ko‘zgular", "Yorug‘likning ikki muhit chegarasida sinishi va sinish qonuni", "To‘liq ichki qaytish hodisasi va optik tolali aloqa", "Yupqa linzalar: Yig‘uvchi va sochuvchi linzalar xossalari", "Yupqa linza formulasi va optik kuch (dioptriya)", "Ko‘z optik sistema sifatida: Yaqindan va uzoqdan ko‘rish nuqsonlari", "Murakkab optik asboblar: Mikroskop va teleskoplar", "Yorug‘lik dispersiyasi: Nyuton tajribasi va kamalakning hosil bo‘lishi", "Yorug‘lik to‘lqinlarining interferensiyasi va difraksiyasi haqida tushuncha", "Katta Yakuniy Sertifikat Imtihoni: Barcha 5 chorak bo‘yicha nazorat va integratsiyalashgan loyiha"],
] as const;

const quarterTitles = [
  "Mexanika",
  "Molekulyar Fizika va Termodinamika",
  "Elektr va Elektromagnetizm",
  "Atom va Yadro Fizikasi",
  "Geometrik va To‘lqin Optikasi",
];

export const ilkQadamRoadmap: CourseQuarter[] = titles.map((items, quarterIndex) => ({
  number: quarterIndex + 1,
  title: quarterTitles[quarterIndex],
  lessons: items.map((title, itemIndex) => ({
    id: titles.slice(0, quarterIndex).flat().length + itemIndex + 1,
    title,
  })),
}));

export const firstLesson = {
  id: "ilk-qadam-01",
  title: "Fizik kattaliklar, o‘lchash va SI xalqaro birliklar sistemasi",
  intro: "Agar hamma o‘z qarichi bilan o‘lchasa, koinot kemasini qanday quramiz?",
  career: "Metrolog / Kosmik muhandis",
};
