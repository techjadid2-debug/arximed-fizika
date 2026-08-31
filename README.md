# Physica

AP Physics 1/2 va milliy fizika sertifikatiga tayyorlanayotgan o‘quvchilar uchun interaktiv, simulyatsiyaga asoslangan o‘quv platformasi.

## MVP imkoniyatlari

- 60 Hz fixed-step Velocity Verlet projectile simulation
- yuqori DPI HTML5 Canvas va jonli vektor overlay’lari
- to‘rt bosqichli lesson runner: tajriba, nazariya, quiz va masala
- KaTeX formulalar
- Zustand orqali local-first lesson progress
- desktop 38/62 split va mobil sticky simulation layout
- o‘zbekcha kontent, xalqaro AP terminlari bilan

## Ishga tushirish

```bash
npm install
npm run dev
```

Brauzerda [http://localhost:3000](http://localhost:3000) manzilini oching.

Demo dars: `/learn/kinematics/projectile-motion`

## Tekshiruv

```bash
npm run typecheck
npm run lint
npm test
npm run build
```

## Stack

Next.js App Router, React 19, TypeScript, Tailwind CSS 4, shadcn/ui, Zustand, KaTeX va HTML5 Canvas.

Auth hamda Supabase progress sync keyingi bosqichga rejalashtirilgan.
