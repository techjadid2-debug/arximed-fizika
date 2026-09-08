# Arximed.uz / Physica

**Maktab o‘quvchilari (6–11 sinflar)** uchun mo‘ljallangan interaktiv fizika ta’limi platformasi va o‘qituvchi dars spargalkalari (Cheatsheet) tizimi.

---

## Asosiy Imkoniyatlar

* **78 darslik to‘liq dastur (5 ta chorak):**
  * 1-Chorak: **Mexanika** (16 dars)
  * 2-Chorak: **Molekulyar Fizika va Termodinamika** (14 dars)
  * 3-Chorak: **Elektr va Elektromagnetizm** (22 dars)
  * 4-Chorak: **Atom va Yadro Fizikasi** (12 dars)
  * 5-Chorak: **Geometrik va To‘lqin Optikasi** (14 dars)

* **O‘qituvchi Cheatsheet (Spargalka) Tizimi:**
  * Har bir dars uchun qiziqarli muammo yoki savol (**Hook**)
  * Bosqichma-bosqich o‘rgatish rejasi va doskaga nima yozish/chizish bo‘yicha aniq ko‘rsatmalar (**Board Tips**)
  * Asosiy formulalar doskasi (**KaTeX / LaTeX**)
  * Doskada yechib beriladigan namunaviy masalalar va to‘liq yechimlar (**Worked Examples**)
  * O‘quvchilar eng ko‘p adashadigan nozik joylar (**Common Pitfalls**)
  * Hayotiy va texnikadagi amaliy tatbiqlar

* **Interaktiv O‘quvchi Ko‘rinishi:**
  * 12 ta rang-barang va tushunarli slaydlar
  * Virtual laboratoriyalar (masalan, chizg‘ich, shtangensirkul va xatoliklar tajribasi)
  * 2D Canvas fizika simulyatsiyasi (60fps Velocity Verlet)
  * Avtomatik tekshiriladigan amaliy masalalar va testlar (Quiz)
  * Spaced repetition (xato qilingan savollarni qayta takrorlash)

---

## Loyiha Hujjatlari

Batafsil ma’lumotlar `docs/` papkasidagi quyidagi hujjatlarda jamlangan:
* **[docs/ILK_QADAM_KURSI.md](file:///Users/abdulvosit/Desktop/Arximed.uz/docs/ILK_QADAM_KURSI.md)** — Maktab o‘quvchilariga fizika o‘rgatish metodikasi va 1-chorakning to‘liq darslik qo‘llanmasi.
* **[docs/PROJECT_ARCHITECTURE.md](file:///Users/abdulvosit/Desktop/Arximed.uz/docs/PROJECT_ARCHITECTURE.md)** — Loyihaning texnik arxitekturasi, ma’lumotlar oqimi va komponentlar tuzilishi.
* **[docs/ADMIN.md](file:///Users/abdulvosit/Desktop/Arximed.uz/docs/ADMIN.md)** — Supabase ma’lumotlar bazasi, RLS qoidalari va admin panel orqali boshqarish.

---

## Ishga Tushirish

```bash
# Kutubxonalarni o‘rnatish
npm install

# Dev-serverni ishga tushirish
npm run dev
```

Brauzerda oching:
* **Yo‘l xaritasi (Roadmap):** [http://localhost:3000/uz/courses/ilk-qadam](http://localhost:3000/uz/courses/ilk-qadam)
* **01-dars (O‘lchash va SI):** [http://localhost:3000/uz/learn/ilk-qadam/01](http://localhost:3000/uz/learn/ilk-qadam/01)
* **02-dars (Moddiy nuqta & Nisbiylik):** [http://localhost:3000/uz/learn/ilk-qadam/02](http://localhost:3000/uz/learn/ilk-qadam/02)

---

## Sifat Nazorati va Testlash

```bash
npm test        # Vitest orqali 35+ ta birlik testlari
npm run build   # Next.js Turbopack ishlab chiqarish yig‘ilishi
```
