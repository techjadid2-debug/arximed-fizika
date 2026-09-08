# "Ilk Qadam" — Maktab O‘quvchilari Uchun Fizika Kursi Dasturi

> **Loyiha maqsadi:** O‘zbekiston maktab o‘quvchilari (6–11 sinflar) uchun fizikani quruq formulalar yodlashdan holi, hayotiy hodisalar, ko‘rgazmali tajribalar, interaktiv simulyatsiyalar va aniq spargalkalar (cheatsheets) orqali o‘rgatish.

---

## 1. Maktab O‘quvchilariga O‘rgatish Metodologiyasi

Maktab o‘quvchilari fizika darslarida eng ko‘p duch keladigan muammo — **"Bu formula menga hayotda nima uchun kerak?"** degan savolga javob topa olmasligidir. Shu sababli, har bir dars quyidagi 5 bosqichli pedagogik tamoyilga tayanadi:

```
[1. Qiziqtirish (Hook)] ──► [2. Sodda Tushuntirish] ──► [3. Doska Formulalari] ──► [4. Jonli Masala] ──► [5. Xatolardan Ogohlik]
```

1. **Qiziqarli Muammo yoki Savol (Hook):**
   * Dars quruq qoidalar bilan emas, kundalik hayotdagi qiziq savol bilan boshlanadi:
     * *Nega koptokni poyezdda sakratsak orqaga uchib ketmaymiz?*
     * *Nega kema cho‘kmaydi-yu, mayda mix suvga cho‘kadi?*
     * *Nega qor ustida chang‘ida yuramiz, lekin botinka bilan botib ketamiz?*
2. **Sodda va Ko‘rgazmali Tushuntirish (No-Jargon):**
   * Murakkab akademik terminlar o‘rniga o‘quvchiga tanish bo‘lgan hayotiy modellar (avtomobil, velosiped, smartfon, muz, choynak) qo‘llaniladi.
3. **Doskadagi Qisqa Spargalka (Board Notes):**
   * O‘qituvchi doskaga nimalarni yozishi kerakligi aniq ko‘rsatiladi: formulalar ramkaga olinadi, har bir harfning tagiga uning nomi va o‘lchov birligi yoziladi.
4. **Doskada Yechib Beriladigan Namunaviy Masalalar:**
   * "Berilgan", "Topish kerak", "Formulasi" va "Hisoblash" ketma-ketligida to‘liq yechib ko‘rsatiladi.
5. **O‘quvchilar Ko‘p Adashadigan Joylar (Common Pitfalls):**
   * O‘quvchilar imtihon va testlarda eng ko‘p xato qiladigan nozik joylar (birliklarni o‘tkazmaslik, o‘rtacha tezlikni arifmetik hisoblab qo‘yish, massani og‘irlik deb atash) alohida eslatiladi.

---

## 2. Kursning Umumiy Tuzilishi (5 Chorak, 78 Dars)

| Chorak | Mavzular Yo‘nalishi | Darslar Soni | Asosiy Mohiyati |
|---|---|:---:|---|
| **1-Chorak** | **Mexanika** | 16 dars | Harakat, tezlik, tezlanish, Nyuton qonunlari, gravitatsiya, ishqalanish, bosim, oddiy mexanizmlar, energiya va tebranishlar |
| **2-Chorak** | **Molekulyar Fizika & Termodinamika** | 14 dars | Moddaning tuzilishi, harorat, gaz bosimi, issiqlik miqdori, erish va bug‘lanish, ichki energiya va dvigatellar |
| **3-Chorak** | **Elektr va Elektromagnetizm** | 22 dars | Zaryadlar, Kulon qonuni, tok kuchi, kuchlanish, Om qonuni, qarshilik, magnit maydon, induksiya va transformatorlar |
| **4-Chorak** | **Atom va Yadro Fizikasi** | 12 dars | Atom tuzilishi, yadro, izotoplar, radioaktivlik, yadro reaksiyalari ($E=mc^2$), AES va Quyosh energiyasi |
| **5-Chorak** | **Geometrik va To‘lqin Optikasi** | 14 dars | Yorug‘lik, ko‘zgular, sinish, linzalar, ko‘z optikasi, mikroskop, kamalak va to‘lqin interferensiyasi |
| **Jami** | **5 ta Chorak** | **78 dars** | **Maktab fizika fanining to‘liq, mukammal poydevori** |

---

## 3. 1-Chorak "Mexanika" — Darsma-Dars O‘qituvchi Rejasi

### 01-dars: Fizik kattaliklar, o‘lchash va SI xalqaro birliklar sistemasi
* **Maktab o‘quvchisiga kirish:** 1999-yilda NASA kosmik apparati Marsga yetganda nega yonib ketdi? Chunki bir guruh funtda, ikkinchisi metrda hisoblagan! Dunyoda hamma bir tilda gaplashishi uchun standart birliklar nega kerak?
* **Asosiy tushunchalar:** Kattalik = Son $\times$ Birlik ($5\text{ kg}$). 7 ta asosiy SI birligi ($m, s, kg, A, K, mol, cd$). Asbob xatoligi (shkala bo‘limining yarmi).
* **Doska eslatmasi:** $1\text{ km} = 1000\text{ m}$, $1\text{ m} = 100\text{ sm} = 1000\text{ mm}$. $\text{km/h} \to \text{m/s}$ o‘tish uchun $3.6$ ga bo‘lamiz.

### 02-dars: Moddiy nuqta, sanoq sistemasi va harakatning nisbiyligi
* **Maktab o‘quvchisiga kirish:** Avtobusda ketayotganingizda do‘stingizga qarasangiz u qimirlamayapti, lekin ko‘chadagi odamga qarasangiz u orqaga uchib ketmoqda. Kim haq?
* **Asosiy tushunchalar:** Moddiy nuqta (o‘lchami masofaga nisbatan juda kichik bo‘lgan jism). Sanoq sistemasi. Yo‘l (bosib o‘tilgan chiziq uzunligi, skalyar) va Ko‘chish (boshlang‘ichdan oxirgi nuqtaga tortilgan to‘g‘ri vektor).
* **Namunaviy masala:** Daryo oqimi bo‘ylab va oqimga qarshi kater tezliklarini hisoblash.

### 03-dars: To‘g‘ri chiziqli tekis harakat, tezlik va ko‘chish
* **Maktab o‘quvchisiga kirish:** Avtomobil spidometri doim 60 km/soatni ko‘rsatsa, 2 soatda qancha yuradi? O‘rtacha tezlik nima va nega u shunchaki tezliklar yig‘indisining yarmi emas?
* **Asosiy formulalar:** $v = s / t$, $x(t) = x_0 + vt$. O‘rtacha tezlik: $v_{\text{o‘rt}} = s_{\text{jami}} / t_{\text{jami}}$.
* **Xatolar:** Yo‘lning birinchi yarmini 60 da, ikkinchi yarmini 90 da o‘tsa, o‘rtacha tezlik $(60+90)/2 = 75$ emas, balki $72\text{ km/h}$ bo‘ladi!

### 04-dars: Tekis o‘zgaruvchan harakat va tezlanish
* **Maktab o‘quvchisiga kirish:** Tesla avtomobili 0 dan 100 gacha 2 sekundda chiqadi, yuk mashinasi 30 sekundda. Tezlik bir xil oshdi, lekin nima farq qildi? Tezlanish nima?
* **Asosiy formulalar:** $a = (v - v_0)/t$, $v = v_0 + at$, $s = v_0 t + \frac{at^2}{2}$, $v^2 - v_0^2 = 2as$.
* **Hayotiy qoida:** Tezlik 2 marta oshsa, tormoz yo‘li 4 marta oshadi ($s \sim v_0^2$).

### 05-dars: Erkin tushish harakati va og‘irlik kuchi tezlanishi
* **Maktab o‘quvchisiga kirish:** Bir qo‘lingizda og‘ir kitob, ikkinchisida bitta qog‘oz varag‘i. Bir vaqtda tashlab yuborsangiz nima bo‘ladi? Qog‘ozni g‘ijimlab shar qilib tashlasangiz-chi? Vakuumda qush pati bilan temir sharcha qanday tushadi?
* **Asosiy formulalar:** $g \approx 9.8\text{ m/s}^2$ (masalalarda $10\text{ m/s}^2$). $h = \frac{gt^2}{2}$, $v = \sqrt{2gh}$, $t = \sqrt{2h/g}$.
* **Simmetriya:** Yuqoriga otilgan jismning chiqish vaqti tushish vaqtiga teng.

### 06-dars: Nyutonning birinchi qonuni va inersiya hodisasi
* **Maktab o‘quvchisiga kirish:** Avtobus to‘satdan tormoz bersa nega hamma oldinga ketadi? Chang bosgan kiyimni qoqqanda nega chang uchib ketadi?
* **Asosiy tushunchalar:** Inersiya — tezlikni saqlash xossasi. Jismga kuch ta'sir qilmasa u tinch turadi yoki to‘g‘ri chiziqli tekis harakat qiladi ($\sum \vec{F} = 0 \implies \vec{v} = \text{const}$). Massa — inersiya o‘lchovi.

### 07-dars: Kuch, massa va Nyutonning ikkinchi qonuni
* **Maktab o‘quvchisiga kirish:** Bo‘sh aravani itarish osonmi yoki yukli aravanimi? Bir xil kuch bilan yengil tennis koptogi va og‘ir toshni ursa nima bo‘ladi?
* **Asosiy formula:** $F = ma$ yoki $a = F / m$. $1\text{ N} = 1\text{ kg}\cdot\text{m/s}^2$.
* **Xatolar:** Kuch yo‘nalishi har doim tezlanish yo‘nalishi bilan bir xil bo‘ladi (har doim ham tezlik yo‘nalishida emas).

### 08-dars: Nyutonning uchinchi qonuni: Ta’sir va aks ta’sir
* **Maktab o‘quvchisiga kirish:** Devorni musht bilan ursangiz nega qo‘lingiz og‘riydi? Muz ustida turib do‘stingizni itarsangiz nega o‘zingiz ham orqaga ketasiz?
* **Asosiy formula:** $\vec{F}_{12} = -\vec{F}_{21}$. Ta'sir kuchi aks ta'sir kuchiga teng va qarama-qarshi.
* **Muhim qoida:** Bu kuchlar bir-birini yo‘qotmaydi, chunki ular IKKI XIL JISMGA qo‘yilgan!

### 09-dars: Butun olam tortishish qonuni va jism og‘irligi
* **Maktab o‘quvchisiga kirish:** Olma yerga tushadi, nega Oy yerga tushib ketmaydi? Odam tarozi ustida turganda nima o‘lchanadi — massa ($kg$)mi yoki og‘irlik ($N$)? Lift pastga tez tushganda nega vaznsizlik seziladi?
* **Asosiy formulalar:** $F = G \frac{m_1 m_2}{r^2}$, $F_{\text{og‘}} = mg$. Harakatda: $P = m(g \pm a)$. Erkin tushganda ($a = g$): $P = 0$ (vaznsizlik).

### 10-dars: Tinchlikdagi va sirpanishdagi ishqalanish kuchi
* **Maktab o‘quvchisiga kirish:** Agar dunyoda ishqalanish yo‘qolib qolsa nima bo‘ladi? Bir qadam ham yura olarmidik? Mashinalar to‘xtarmidi?
* **Asosiy formula:** $F_{\text{ishq}} = \mu N$. Gorizontal yuzada: $F_{\text{ishq}} = \mu mg$.
* **Turlar:** Tinchlikdagi ishqalanish (moslashuvchan), Sirpanishdagi ishqalanish, Dumalanishdagi ishqalanish (eng kichigi).

### 11-dars: Qattiq jismlar, suyuqlik va gazlarda bosim
* **Maktab o‘quvchisiga kirish:** Igna nega oson botadi, chang‘i esa qorga botmaydi? G‘avvoslar nega chuqurlikda maxsus kiyim kiyishadi? Kichkina kuch bilan katta mashinani qanday ko‘tarish mumkin?
* **Asosiy formulalar:** $P = F / S$. Suyuqlik bosimi: $P = \rho g h$. Gidravlik press: $F_2 / F_1 = S_2 / S_1$. Arximed kuchi: $F_A = \rho_{\text{suy}} g V_{\text{bot}}$.

### 12-dars: Oddiy mexanizmlar: Richag, blok va qiya tekislik
* **Maktab o‘quvchisiga kirish:** Arximed aytgan: "Menga tayanch bering, Yerni joyidan qo‘zg‘ataman!" U buni qanday qilmoqchi bo‘lgan? Mexanikaning "Oltin qoidasi" nima?
* **Asosiy qoidalar:** Richag muvozanati: $F_1 d_1 = F_2 d_2$. Oltin qoida: Kuchdan necha marta yutsak, masofadan shuncha marta yutqazamiz! Ishdan yutuq yo‘q.

### 13-dars: Mexanik ish, quvvat va foydali ish koeffitsienti
* **Maktab o‘quvchisiga kirish:** Og‘ir yukni ko‘tarib 1 soat qimirlamay tursangiz nega fizika bo‘yicha ishingiz 0 ga teng? Quvvat nima va elektr dvigatellarida nega Vatt yoziladi?
* **Asosiy formulalar:** $A = F s \cos \alpha$ (Joul). Quvvat: $N = A / t = F v$ (Vatt). FIK: $\eta = (A_{\text{foydali}} / A_{\text{to‘liq}}) \times 100\%$.

### 14-dars: Kinetik va potensial energiya. Energiyaning saqlanish qonuni
* **Maktab o‘quvchisiga kirish:** Rollercoaster attraksionida vagonchada motor yo‘q! Qanday qilib u eng balanddan tushib, butun yo‘l bo‘ylab aylanib chiqadi?
* **Asosiy formulalar:** Kinetik: $E_k = \frac{mv^2}{2}$. Potensial: $E_p = mgh$. Prujina: $E_p = \frac{kx^2}{2}$. Saqlanish qonuni: $E_k + E_p = \text{const}$.

### 15-dars: Mexanik tebranishlar, mayatniklar va rezonans hodisasi
* **Maktab o‘quvchisiga kirish:** 1940-yilda Takoma ko‘prigi kuchsiz shamoldan nega silkinib qulab tushgan? Askarlar ko‘prikdan o‘tganda nega "bir safda qadam bosma" deyiladi?
* **Asosiy formulalar:** Davr va chastota: $T = 1 / \nu$. Matematik mayatnik: $T = 2\pi\sqrt{l/g}$ (massa ta'sir qilmaydi!). Prujinali mayatnik: $T = 2\pi\sqrt{m/k}$.

### 16-dars: 1-Chorak Nazorati: Mexanika sinov testi va virtual laboratoriya
* **Maktab o‘quvchisiga kirish:** 1-chorakda o‘rgangan 4 ta ustunimiz (Kinematika, Dinamika, Statika, Energiya) qanday qilib koinot raketasini uchirishda birgalikda ishlaydi?
* **Asosiy maqsad:** 15 ta dars formulalarini yagona daraxt qilib umumlashtirish, kombinatsiyalangan masalalarni yechish va sinov testiga tayyorgarlik.

---

## 4. O‘qituvchi Uchun Maslahatlar (Best Practices)

1. **Formulani tushuntirishda harflarni o‘zbekcha ma’nosi bilan bog‘lang:**
   * $s$ — spatium (masofa, yo‘l)
   * $v$ — velocitas (tezlik)
   * $t$ — tempus (vaqt)
   * $m$ — massa
   * $F$ — fortis (kuch)
   * $a$ — acceleratio (tezlanish)
   * $g$ — gravitatsiya (og‘irlik tezlanishi)
   * $P$ — pondus (og‘irlik) / pressure (bosim)
   * $E$ — energiya
2. **Kalkulyatorsiz hisoblashni o‘rgating:**
   * Maktab o‘quvchilariga $10$ ning darajalari ($10^3, 10^{-3}$) bilan ishlashni va qisqartirishlarni ko‘rsatish matematik qo‘rquvni yengishga yordam beradi.
3. **Qadam-baqadam yechim shabloni:**
   ```
   Berilgan:      | Formula:         | Hisoblash:
   m = 2 kg       | F = m * a        | F = 2 * 3 = 6 N
   a = 3 m/s²     |                  |
   ---------------|                  | Javob: 6 N
   T/k: F = ?     |                  |
   ```
