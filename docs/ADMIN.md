# Physica — admin panel va baza

Dars tuzilmasi: **Video → Quiz → Uyga vazifa**.
Kontent Supabase bazasida, admin panel `/admin` da.

---

## 1. Holat — allaqachon sozlangan

| Narsa | Qiymat |
|---|---|
| Supabase loyihasi | `arximed-fizika` (eu-central-1) |
| Baza | Sxema qo'llangan, 78 dars + 1-dars kontenti yozilgan |
| Admin | `techjadid2@gmail.com` |
| Env o'zgaruvchilar | `.env.local` da va Vercel'ning uchala muhitida |

Qayta sozlash kerak bo'lsa quyidagi bo'limlarga qarang.

### 1.1 Skriptlar uchun service_role kaliti

`scripts/seed-supabase.mjs` va `scripts/make-admin.mjs` ishlashi uchun
`.env.local` ga qo'shimcha kalit kerak:

```
SUPABASE_SERVICE_ROLE_KEY=...
```

Supabase → **Project Settings → API keys → `service_role`** dan oling.

> Bu kalit RLS ni butunlay chetlab o'tadi. Hech qachon `NEXT_PUBLIC_` prefiksi
> bilan yozmang, git'ga qo'shmang va brauzerga yubormang.

### 1.2 Sxemani qayta qo'llash

Supabase → **SQL Editor** → `supabase/migrations/0001_init.sql` ichidagini nusxalab ishga tushiring.

Jadvallar:

| Jadval | Nima |
|---|---|
| `courses` | Kurslar (`ilk-qadam`) |
| `modules` | Choraklar (5 ta) |
| `lessons` | Darslar (78 ta) — video havolasi, uyga vazifa, chop etilgan holati |
| `quiz_questions` / `quiz_options` | Quiz savollari va variantlari |
| `practice_tasks` | Tekshiriladigan mashqlar |
| `admins` | Admin huquqiga ega foydalanuvchilar |

**RLS yoqilgan:** o'quvchilar faqat `is_published = true` darslarni ko'radi; yozish faqat adminlarga.

### 1.3 Kontentni yuklash

```bash
node scripts/seed-supabase.mjs
```

78 dars sarlavhasi, 5 chorak va 1-darsning 10 quiz savoli + 5 mashqi bazaga yoziladi.
Qayta ishga tushirish xavfsiz — mavjud yozuvlar yangilanadi.

### 1.4 Yangi admin qo'shish

```bash
node scripts/make-admin.mjs hamkasb@email.com
```

Foydalanuvchi yo'q bo'lsa yaratadi (parol so'raladi) va `admins` jadvaliga qo'shadi.
`SUPABASE_SERVICE_ROLE_KEY` kerak.

**Parolni almashtirish:** Supabase → Authentication → Users → foydalanuvchi → *Reset password*.

> Agar `auth.users` ga to'g'ridan-to'g'ri SQL bilan foydalanuvchi qo'shsangiz,
> `confirmation_token`, `recovery_token`, `email_change` kabi ustunlarni **bo'sh
> satr** qilib qo'ying — `NULL` bo'lsa login `Database error querying schema`
> xatosini beradi.

---

## 2. Kundalik ish

### Video qo'shish

1. Videoni **YouTube'ga «Unlisted» (yashirin)** qilib yuklang — havolani bilgan ko'radi, qidiruvda chiqmaydi.
2. `/admin` → darsni tanlang.
3. **YouTube havolasi** maydoniga qo'ying — pastda darhol ko'rinish chiqadi.
4. Davomiylikni (daqiqada) yozing.
5. **Chop etilgan** belgisini qo'ying → **Saqlash**.

Qabul qilinadigan havola shakllari:

```
https://www.youtube.com/watch?v=XXXXXXXXXXX
https://youtu.be/XXXXXXXXXXX
https://www.youtube.com/embed/XXXXXXXXXXX
XXXXXXXXXXX                                  ← faqat id
```

### Quiz

**Savol qo'shish** tugmasi uchta bo'sh variantli savol yaratadi.
To'g'ri variant radio tugma bilan belgilanadi — bazada har savolda **aynan bitta**
to'g'ri variant bo'lishi trigger bilan majburlanadi.

Izoh maydoni javobdan keyin o'quvchiga ko'rsatiladi.

### Uyga vazifa

- **Sarlavha va matn** — sahifada ko'rinadi
- **PDF havolasi** — `public/materials/...` ostidagi fayl yoki tashqi havola
- **Tekshiriladigan mashqlar** — o'quvchi javobni kiritadi, sayt darhol tekshiradi
  - *Javob* — son (vergul ham, nuqta ham bo'ladi)
  - *Xatolik chegarasi* — masalan `0,01` bo'lsa `2,5` va `2,49` ikkalasi ham to'g'ri
  - *Yordam* — noto'g'ri javobda chiqadi
  - *Yechim* — to'g'ri javobda chiqadi

### Chop etish

`is_published = false` bo'lgan dars **faqat adminga** ko'rinadi (RLS darajasida).
Yo'l xaritasida u «Tez orada» deb turadi.

---

## 3. O'quvchi tomoni

Dars ochilganda bosqichlar ketma-ket:

1. **Video** — ko'rgach «Videoni ko'rdim» → +20 XP
2. **Quiz** — har to'g'ri javob (birinchi urinishda) +10 XP; xato javoblar
   «Takrorlash» ro'yxatiga tushadi va 1 → 3 → 7 kun oralig'ida qayta chiqadi
3. **Uyga vazifa** — har to'g'ri mashq +15 XP

Dars to'liq tugagach +50 XP va yo'l xaritasida keyingi dars ochiladi.
Streak (ketma-ket kunlar) header'da ko'rinadi.

Progress hozircha **localStorage** da (`physica-progress-v1`). Foydalanuvchi
hisoblari qo'shilganda uni bazaga ko'chirish mumkin.

---

## 4. Muammolarni bartaraf etish

| Belgi | Sabab | Yechim |
|---|---|---|
| `/admin` → `/admin/setup` ga otadi | env o'zgaruvchilar yo'q | `vercel env pull .env.local --yes` |
| `/admin` → `/admin/forbidden` | `admins` jadvalida yo'qsiz | `node scripts/make-admin.mjs <email>` |
| Yo'l xaritasi bo'sh | seed ishga tushmagan | `node scripts/seed-supabase.mjs` |
| Video ko'rinmaydi | havola tanilmadi | Havolani `youtu.be/...` shaklida qo'ying |
| «Savolda faqat bitta to'g'ri variant» xatosi | ikkita to'g'ri belgilangan | Radio tugma bilan bittasini tanlang |
