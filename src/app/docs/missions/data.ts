// src/app/docs/missions/data.ts

export type Mission = {
  id: number;
  title: string;
  category: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  summary: string;       // نص قصير يظهر في الكارد
  description: string;   // شرح أطول يظهر في صفحة التفاصيل
  steps: string[];       // خطوات تنفيذ المهمة
  skills: string[];      // المهارات اللي يتدرّب عليها المتدرّب
  codeExample?: string;  // مثال كود يظهر في صفحة التفاصيل
  sourceUrl?: string;    // رابط المصدر
  sourceName?: string;   // اسم المصدر (اختياري)
};

export const missions: Mission[] = [
  {
    id: 1,
    title: "Advanced State Management in React (Local / Global / URL State)",
    category: "React • State Management",
    level: "Advanced",
    summary:
      "حلّل تطبيق React كبير، وقسّم الحالة إلى local / global / URL، واختر الأدوات المناسبة لكل نوع.",
    description:
      "في هذه المهمة، المتدرّب يتعامل مع تطبيق React بحجم حقيقي، ويُطلب منه تمييز أنواع الحالة المختلفة (local, global, server, URL) ثم اختيار أدوات الإدارة المناسبة مثل Context API، Redux، Zustand، أو حتى URL/search params. الهدف إن المتدرّب يخرج من المهمة وهو فاهم إن 'state management' مو اختيار مكتبة وبس، بل تصميم معماري.",
    steps: [
      "راجع شجرة المكوّنات الحالية وحدّد أماكن تخزين الحالة (state) الحالية.",
      "قسّم الحالة إلى أنواع: local state، global/shared state، و URL/state المرتبطة بالمتصفح.",
      "اقترح تصميم معماري: ما الذي يبقى local داخل المكوّن؟ ما الذي يُنقل إلى Context أو Redux أو Zustand؟ وما الذي يخرج إلى URL params؟",
      "نفّذ التغييرات على جزء محدّد من التطبيق (مثلاً: صفحة فلترة / Dashboard) وجرّب قبل وبعد.",
    ],
    skills: [
      "React State",
      "Context API",
      "Redux / Zustand",
      "State Modeling",
      "Architecture Thinking",
    ],
    codeExample: `// مثال مبسّط لتقسيم الحالة بين local و global و URL

// 1) حالة محلية داخل المكوّن (local UI state)
function FilterPanel() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section>
      <button onClick={() => setIsOpen((prev) => !prev)}>
        Toggle filters
      </button>
      {isOpen && <Filters />}
    </section>
  );
}

// 2) حالة مشتركة (global) باستخدام Context
const AppStateContext = createContext(null);

function AppStateProvider({ children }) {
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  return (
    <AppStateContext.Provider value={{ user, setUser, theme, setTheme }}>
      {children}
    </AppStateContext.Provider>
  );
}

// 3) حالة مربوطة بالـ URL (search params)
import { useSearchParams } from "next/navigation";

function ProductsList() {
  const searchParams = useSearchParams();
  const sort = searchParams.get("sort") ?? "newest";

  // استخدم قيمة sort القادمة من URL لعرض النتائج
  // ...
}`,
    sourceUrl: "https://developerway.com/posts/react-state-management-2022",
    sourceName: "DeveloperWay – React State Management in 2025",
  },
  {
    id: 2,
    title: "Advanced React State via URL & Search Params",
    category: "React • URL State",
    level: "Advanced",
    summary:
      "اربط حالة React بالـ URL/search params عشان تصير قابلة للمشاركة والنسخ (shareable state).",
    description:
      "هذه المهمة تركّز على نوع واحد من الحالة: URL state. المطلوب من المتدرّب إنه يأخذ جزء من الواجهة (filters, pagination, active tab ...) ويحوّل حالتها من useState عادية إلى حالة مربوطة بالـ URL بحيث لو نسخ الرابط أو عمل refresh تظل الحالة محفوظة.",
    steps: [
      "اختر صفحة فيها فلاتر / pagination / تبويبات (tabs) في تطبيق React أو Next.js.",
      "بدّل إدارة الحالة من useState فقط إلى استخدام search params (مثلاً: ?page=2&sort=price).",
      "تأكد أن إعادة تحميل الصفحة (refresh) لا تُفقد الحالة.",
      "اختبر مشاركة الرابط مع شخص آخر وتأكد أن نفس الحالة تُفتح عنده.",
    ],
    skills: [
      "Next.js / React Router",
      "URLSearchParams",
      "Deep Linking",
      "Sharable UI State",
    ],
    codeExample: `// مثال لاستخدام search params في Next.js App Router
"use client";

import { useRouter, useSearchParams } from "next/navigation";

export function ProductsFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentSort = searchParams.get("sort") ?? "newest";

  function updateSort(next: string) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", next);
    router.push(\`/?\${params.toString()}\`, { scroll: false });
  }

  return (
    <div>
      <button
        onClick={() => updateSort("newest")}
        aria-pressed={currentSort === "newest"}
      >
        Newest
      </button>
      <button
        onClick={() => updateSort("price-asc")}
        aria-pressed={currentSort === "price-asc"}
      >
        Price ↑
      </button>
    </div>
  );
}`,
    sourceUrl:
      "https://blog.logrocket.com/advanced-react-state-management-url-parameters/",
    sourceName: "LogRocket Blog – Advanced React state via URL",
  },
  {
    id: 3,
    title: "High-Traffic Performance Optimization in Node.js Backend",
    category: "Node.js • Performance",
    level: "Advanced",
    summary:
      "قيّم أداء سيرفر Node.js تحت ضغط عالي، وحدد نقاط الاختناق (bottlenecks) باستخدام أدوات profiling.",
    description:
      "في هذه المهمة، المتدرّب يتعامل مع Backend Node.js يُتوقع له حمل عالي. الهدف هو اكتشاف نقاط الاختناق في أداء التطبيق باستخدام أدوات مثل clinic.js أو Chrome DevTools، ثم تطبيق أفضل ممارسات الأداء (connection pooling, caching, proper async, avoiding blocking calls).",
    steps: [
      "شغّل أداة قياس (profiling) على سيرفر Node.js أثناء حمل عالي (باستخدام k6 أو autocannon).",
      "حدّد أكثر الدوال / الـ endpoints استهلاكاً للوقت أو CPU.",
      "طبّق تحسينات مثل: caching، refactoring للعمليات blocking، تحسين استخدام قواعد البيانات.",
      "أعد الاختبار وقارن النتائج قبل وبعد (latency, throughput, error rate).",
    ],
    skills: [
      "Node.js Profiling",
      "Event Loop",
      "Performance Tuning",
      "Load Testing",
      "Caching Strategies",
    ],
    codeExample: `// مثال مبسّط لاستخدام autocannon لاختبار أداء endpoint
// شغل هذا الأمر من CLI (خارج الكود):
// npx autocannon -c 50 -d 30 http://localhost:3000/api/products

// مثال كود: تجنّب العمليات blocking في Node.js
import fs from "node:fs";
import fsPromises from "node:fs/promises";

// ❌ خطأ: blocking I/O
export function badHandler(req, res) {
  const data = fs.readFileSync("./big-file.json", "utf8");
  res.end(data);
}

// ✅ صحيح: non-blocking I/O
export async function goodHandler(req, res) {
  const data = await fsPromises.readFile("./big-file.json", "utf8");
  res.end(data);
}`,
    sourceUrl:
      "https://dev.to/nexxeln/optimizing-node-js-performance-best-practices-for-high-traffic-apps-1abc",
    sourceName: "DEV Community – Optimizing Node.js Performance",
  },
  {
    id: 4,
    title: "Node.js Performance Tuning & Scaling (Worker Threads / Cluster)",
    category: "Node.js • Scaling",
    level: "Advanced",
    summary:
      "استخدم Worker Threads أو Cluster في Node.js لتوزيع الحمل على عدة نوى CPU.",
    description:
      "هذه المهمة تكمّل مهمة الأداء السابقة، ولكن تركيزها على CPU-bound tasks. المطلوب من المتدرّب هو عزل المهام الثقيلة عن event loop الرئيسي باستخدام Worker Threads أو Cluster module، ثم قياس الفرق في الأداء.",
    steps: [
      "حدد جزء من الكود يحتوي على CPU-bound task (مثل عمليات hashing ثقيلة أو loops ضخمة).",
      "انقل هذه المهمة إلى Worker Thread أو استخدم cluster لتشغيل أكثر من عملية Node على نفس السيرفر.",
      "أضف قياس زمني (timers) قبل وبعد التنفيذ لمراقبة الأداء.",
      "اختبر التطبيق تحت حمل عالي وقارن وقت الاستجابة واستهلاك CPU قبل وبعد.",
    ],
    skills: [
      "Node.js Worker Threads",
      "Cluster Module",
      "CPU-bound Optimization",
      "Scalability",
    ],
    codeExample: `// مثال مبسّط لاستخدام Worker Threads في Node.js
import { Worker, isMainThread, parentPort, workerData } from "node:worker_threads";

if (isMainThread) {
  // الكود الرئيسي
  export function handleHeavyRequest(req, res) {
    const worker = new Worker(new URL("./heavy-worker.js", import.meta.url), {
      workerData: { iterations: 1_000_000_000 },
    });

    worker.on("message", (result) => {
      res.end(\`Result: \${result}\`);
    });

    worker.on("error", (err) => {
      console.error(err);
      res.statusCode = 500;
      res.end("Worker error");
    });
  }
} else {
  // ملف heavy-worker.js
  let total = 0;
  for (let i = 0; i < workerData.iterations; i++) {
    total += i;
  }
  parentPort.postMessage(total);
}`,
    sourceUrl:
      "https://www.bairesdev.com/blog/nodejs-performance-optimization-deep-dive/",
    sourceName: "BairesDev – NodeJS Performance Optimisation Deep Dive",
  },
  {
    id: 5,
    title: "Advanced Merge Conflict Resolution in Git Workflows",
    category: "Git / Version Control",
    level: "Advanced",
    summary:
      "حلّ merge conflicts معقّدة باستخدام أدوات متقدّمة مثل mergetool و diff3 و interactive rebase.",
    description:
      "في هذه المهمة، المتدرّب يواجه سيناريو حقيقي لعدة فروع (branches) مع تغييرات متداخلة تسبب merge conflicts صعبة. الهدف هو تدريبه على قراءة diff بشكل صحيح، واستخدام mergetool، وإعادة كتابة التاريخ باستخدام rebase للحفاظ على تاريخ نظيف.",
    steps: [
      "أنشئ سيناريو فيه ثلاثة فروع على الأقل مع تعديلات متعارضة على نفس الملف.",
      "حاول دمج الفروع ولاحظ ظهور merge conflicts.",
      "استخدم أداة mergetool (مثل أداة VS Code أو meld أو kdiff3) لحل التعارضات مع تفعيل diff3.",
      "طبّق interactive rebase لترتيب الكوميتات وتنظيف التاريخ النهائي (git rebase -i).",
    ],
    skills: [
      "Git Merge",
      "Git Rebase",
      "Git Mergetool",
      "Conflict Resolution",
      "Version Control Workflows",
    ],
    codeExample: `# تفعيل diff3 لعرض النسخة الأساسية أثناء حل التعارضات
git config --global merge.conflictstyle diff3

# تشغيل mergetool لحل التعارضات باستخدام أداة خارجية
git mergetool

# استخدام rebase تفاعلي لترتيب الكوميتات
git rebase -i main

# داخل شاشة rebase تقدر تغير:
# pick -> squash / fixup / edit
`,
    sourceUrl:
      "https://community.atlassian.com/t5/Bitbucket-articles/Advanced-Git-merge-conflict-resolution-techniques/ba-p/123456",
    sourceName: "Atlassian Community – Advanced Git merge conflict resolution",
  },
  {
    id: 6,
    title: "Global & Shared State Management Patterns in React",
    category: "React • Shared State",
    level: "Advanced",
    summary:
      "صمّم نظام مشاركة حالة (shared state) بين مكوّنات متعددة في تطبيق React كبير باستخدام patterns أو مكتبات مثل Redux / MobX.",
    description:
      "هذه المهمة تركّز على تصميم shared state في تطبيقات React الكبيرة. المطلوب من المتدرّب هو تصميم store مركزي للحالة المشتركة، تحديد شكل الـ state (shape)، وكتابة slice أو store مع Selectors واستخدامه من عدّة مكونات.",
    steps: [
      "اختر نطاق معيّن للحالة المشتركة (مثلاً: سلة مشتريات، user session، feature flags...).",
      "صمّم شكل state (objects, arrays, maps) وحدّد الـ actions / events التي تعدّلها.",
      "نفّذ store باستخدام Redux Toolkit أو Zustand أو MobX.",
      "اربط مكوّنات متعددة بالـ store وتأكد أن التحديث ينعكس في كل مكان.",
    ],
    skills: [
      "State Management Design",
      "Redux / MobX / Zustand",
      "Selectors",
      "React Architecture",
    ],
    codeExample: `// مثال بسيط باستخدام Redux Toolkit لإدارة shared state
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider, useDispatch, useSelector } from "react-redux";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [] as { id: string; qty: number }[] },
  reducers: {
    addItem(state, action) {
      const existing = state.items.find((i) => i.id === action.payload.id);
      if (existing) {
        existing.qty += 1;
      } else {
        state.items.push({ id: action.payload.id, qty: 1 });
      }
    },
  },
});

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

export function CartProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}

export function AddToCartButton({ id }: { id: string }) {
  const dispatch = useDispatch();
  return (
    <button onClick={() => dispatch(cartSlice.actions.addItem({ id }))}>
      Add to cart
    </button>
  );
}

export function CartBadge() {
  const total = useSelector((state: any) =>
    state.cart.items.reduce((sum: number, item: any) => sum + item.qty, 0)
  );
  return <span>Cart: {total}</span>;
}`,
    sourceUrl:
      "https://medium.com/@bloggerwomen/advanced-state-management-techniques-in-reactjs-xxxx",
    sourceName: "Medium – Advanced State Management Techniques in ReactJs",
  },
];
