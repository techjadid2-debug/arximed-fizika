import type { Lesson } from "@/types/physics";

export const projectileMotionLesson: Lesson = {
  id: "projectile-motion",
  trackId: "kinematics",
  title: "Gorizontal burchak ostida harakat",
  subtitle: "Projectile motion · 2D kinematika",
  description:
    "Harakatni avval tajriba orqali his qiling, keyin uni mustaqil x va y yo‘nalishlarga ajrating.",
  level: "AP_PHYSICS_1",
  estimatedMinutes: 18,
  steps: [
    {
      id: "explore-launch-angle",
      type: "INTUITIVE_EXPLORATION",
      title: "Qaysi burchak uzoqroqqa olib boradi?",
      eyebrow: "01 · Intuitiv tajriba",
      estimatedMinutes: 4,
      prompt:
        "Tezlikni o‘zgartirmasdan uchirish burchagini almashtiring. 30°, 45° va 60° burchaklardagi masofalarni solishtiring.",
      goal: "Jismni kamida 50 metr masofaga tushiring.",
      hint: "45° atrofini tekshirib ko‘ring. 30° va 60° natijalarida qanday simmetriya bor?",
      simulation: {
        renderer: "CANVAS_2D",
        model: "PROJECTILE",
      },
      parameters: [
        {
          id: "initialSpeed",
          label: "Boshlang‘ich tezlik",
          symbol: "v₀",
          unit: "m/s",
          min: 10,
          max: 36,
          step: 1,
          defaultValue: 24,
        },
        {
          id: "launchAngle",
          label: "Uchirish burchagi",
          symbol: "θ",
          unit: "°",
          min: 10,
          max: 80,
          step: 1,
          defaultValue: 45,
        },
        {
          id: "gravity",
          label: "Gravitatsiya",
          symbol: "g",
          unit: "m/s²",
          min: 1.6,
          max: 15,
          step: 0.1,
          defaultValue: 9.81,
        },
      ],
    },
    {
      id: "separate-components",
      type: "THEORY_EQUATION",
      title: "Bitta harakat, ikkita mustaqil o‘q",
      eyebrow: "02 · Nazariya",
      estimatedMinutes: 5,
      content:
        "Havo qarshiligini e’tiborsiz qoldirsak, gorizontal tezlik o‘zgarmaydi. Vertikal yo‘nalishda esa jism doimiy $g$ tezlanish bilan pastga tortiladi. Shu sababli harakatni ikki sodda masalaga ajratamiz.",
      equations: [
        {
          label: "Gorizontal holat",
          latex: "x(t) = v_0\\cos(\\theta)t",
          note: "Gorizontal tezlanish nol: aₓ = 0.",
        },
        {
          label: "Vertikal holat",
          latex: "y(t) = v_0\\sin(\\theta)t - \\frac{1}{2}gt^2",
          note: "Vertikal tezlanish doim pastga yo‘nalgan.",
        },
        {
          label: "Uchish masofasi",
          latex: "R = \\frac{v_0^2\\sin(2\\theta)}{g}",
          note: "Boshlanish va tushish balandligi bir xil bo‘lganda.",
        },
      ],
      takeaways: [
        "x va y harakatlari bir xil vaqtni bo‘lishadi.",
        "Trayektoriyaning eng yuqori nuqtasida vᵧ = 0, lekin vₓ nol emas.",
        "Bir-birini 90° ga to‘ldiruvchi burchaklar bir xil masofa beradi.",
      ],
    },
    {
      id: "quiz-complementary-angles",
      type: "CONCEPT_QUIZ",
      title: "30° va 60° taqqoslanishi",
      eyebrow: "03 · Konseptual savol",
      estimatedMinutes: 3,
      question:
        "Bir xil tezlik bilan, bir xil balandlikdan 30° va 60° burchaklarda uchirilgan jismlarning gorizontal masofalari qanday bo‘ladi?",
      options: [
        {
          id: "thirty-farther",
          label: "30° uzoqroqqa tushadi",
          feedback: "Pastroq burchak vaqtni kamaytiradi; faqat vₓ ga qarash yetarli emas.",
        },
        {
          id: "equal-range",
          label: "Ikkalasi bir xil masofaga tushadi",
          feedback: "To‘g‘ri: sin(60°) = sin(120°), demak R qiymatlari teng.",
        },
        {
          id: "sixty-farther",
          label: "60° uzoqroqqa tushadi",
          feedback: "Ko‘proq uchish vaqti bor, ammo gorizontal tezlik kichikroq.",
        },
        {
          id: "mass-dependent",
          label: "Natija massaga bog‘liq",
          feedback: "Havo qarshiligisiz projectile motion massaga bog‘liq emas.",
        },
      ],
      correctOptionId: "equal-range",
      explanation:
        "Masofa $R = v_0^2\\sin(2\\theta)/g$ bilan aniqlanadi. 30° uchun $\\sin(60°)$, 60° uchun esa $\\sin(120°)$ hosil bo‘ladi va ular teng.",
    },
    {
      id: "problem-calculate-range",
      type: "PROBLEM_SOLVING",
      title: "Simulyatsiya natijasini oldindan toping",
      eyebrow: "04 · Hisoblash",
      estimatedMinutes: 6,
      prompt:
        "Jism 20 m/s tezlik bilan 45° burchak ostida uchirildi. g = 10 m/s² deb olib, gorizontal uchish masofasini toping.",
      givens: [
        { symbol: "v₀", value: 20, unit: "m/s" },
        { symbol: "θ", value: 45, unit: "°" },
        { symbol: "g", value: 10, unit: "m/s²" },
      ],
      answer: {
        value: 40,
        tolerance: 0.2,
        unit: "m",
      },
      solution:
        "$R = v_0^2\\sin(2\\theta)/g = 20^2\\sin(90°)/10 = 40\\,m$.",
    },
  ],
};
