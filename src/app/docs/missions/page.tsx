import Link from "next/link";

type Mission = {
  id: number;
  title: string;
  category: string;
  difficulty: string;
  duration: string;
  sourceName: string;
  sourceUrl: string;
  summary: string;
  skills: string[];
};

const missions: Mission[] = [
  {
    id: 1,
    title: "Advanced State Management in React (Local / Global / URL State)",
    category: "Web Development · React",
    difficulty: "Advanced",
    duration: "1–2 days",
    sourceName: "React State Management in 2025: What You Actually Need",
    sourceUrl: "https://www.developerway.com/posts/react-state-management-2025",
    summary:
      "مهمة تخلّيك تفهم متى تستخدم الـ local state، ومتى تحتاج global state (زي Context أو Redux)، وكيف تستغل URL state (query params) في بناء صفحات احترافية وقابلة للمشاركة.",
    skills: [
      "React useState / useReducer",
      "Context API",
      "Global vs Local state",
      "URL state & search params",
    ],
  },
  {
    id: 2,
    title: "Advanced React State via URL & Search Params",
    category: "Web Development · React · Routing",
    difficulty: "Advanced",
    duration: "1 day",
    sourceName: "Advanced React state management using URL parameters",
    sourceUrl:
      "https://blog.logrocket.com/advanced-react-state-management-url-parameters/",
    summary:
      "تركّز هذه المهمة على تخزين حالة التطبيق داخل الـ URL (search params) مثل الفلترة، الفرز، والـ pagination، بحيث ترجع نفس الحالة لو المستخدم رجع للصفحة أو شارك الرابط.",
    skills: [
      "Next.js routing",
      "URLSearchParams",
      "Sync UI with URL",
      "Filtering & sorting in React",
    ],
  },
  {
    id: 3,
    title: "High-Traffic Performance Optimization in Node.js Backend",
    category: "Backend · Node.js",
    difficulty: "Advanced",
    duration: "2–3 days",
    sourceName: "Optimizing Node.js Performance: Best Practices for High-Traffic Apps",
    sourceUrl:
      "https://blog.logrocket.com/optimizing-node-js-performance-best-practices/",
    summary:
      "مهمة تركّز على تحسين أداء الـ Node.js في المشاريع اللي فيها عدد زيارات عالي: التعامل مع event loop، تحسين الـ database queries، واستخدام الـ caching والـ clustering.",
    skills: [
      "Node.js event loop",
      "Performance monitoring",
      "Database optimization",
      "Caching (Redis مثلاً)",
    ],
  },
  {
    id: 4,
    title: "Node.js Performance Tuning & Scaling",
    category: "Backend · Node.js · Scaling",
    difficulty: "Advanced",
    duration: "2 days",
    sourceName: "NodeJS Performance Optimisation Deep Dive",
    sourceUrl:
      "https://www.bairesdev.com/blog/node-js-performance-optimisation/",
    summary:
      "تغوص أكثر في تحسين أداء Node.js: قياس الـ bottlenecks، استخدام clustering، load balancing، وتقنيات scaling علشان السيرفر يتحمّل عدد كبير من الريكويستات.",
    skills: [
      "Profiling Node.js apps",
      "Clustering & worker processes",
      "Horizontal scaling",
      "Load balancing concepts",
    ],
  },
  {
    id: 5,
    title: "Advanced Merge Conflict Resolution in Git / Version Control Workflows",
    category: "Version Control · Git",
    difficulty: "Intermediate–Advanced",
    duration: "1 day",
    sourceName: "Advanced Git merge conflict resolution techniques",
    sourceUrl:
      "https://community.atlassian.com/t5/Git-articles/Advanced-Git-merge-conflict-resolution-techniques/ba-p/2558082",
    summary:
      "مهمة تدرّبك على التعامل مع تعارضات معقّدة في Git، كيف تقرأ diff بشكل صحيح، تستخدم أدوات مثل git mergetool، وتبني workflow مريح مع الـ feature branches و pull requests.",
    skills: [
      "Git rebase / merge",
      "Resolving complex conflicts",
      "Git mergetool",
      "Branching strategies",
    ],
  },
  {
    id: 6,
    title: "Global & Shared State Management Patterns in React",
    category: "Web Development · React",
    difficulty: "Advanced",
    duration: "1–2 days",
    sourceName: "Advanced State Management Techniques in React (choose your article)",
    // ملاحظة: غيّر هذا الرابط بالرابط الموجود عندك في الجدول (من Medium أو غيره)
    sourceUrl: "https://medium.com/",
    summary:
      "هذه المهمة عبارة عن تلخيص وتطبيق لأكثر من نمط لإدارة الحالة المشتركة في React: Context API، Redux أو Zustand، وكيف تختار المكتبة أو الأسلوب المناسب حسب حجم المشروع.",
    skills: [
      "Context API",
      "Redux / Zustand (أو أي مكتبة تفضّلها)",
      "Global state patterns",
      "Performance considerations",
    ],
  },
];

export const metadata = {
  title: "Intern Missions – Advanced Track | intern.dev",
  description:
    "مجموعة مهام تقنية متقدمة لطلاب علوم الحاسب والمتدربين، مبنية على مقالات ومراجع احترافية في React, Node.js, و Git.",
};

export default function MissionsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto max-w-5xl px-4 py-10 space-y-8">
        <header className="space-y-3">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Intern Missions · Advanced Track
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed">
            هذه الصفحة تجمع المهام المتقدمة اللي اتفقنا عليها لمشروع{" "}
            <span className="font-semibold">intern.dev</span>، علشان المتدرب
            يختار مهمة، يقرأ المصدر المرجعي، وبعدين يطبق المطلوب خطوة بخطوة.
          </p>
          <p className="text-slate-400 text-xs md:text-sm">
            الفكرة: كل كرت = مهمة واحدة (Mission) مبنية على مقال أو مرجع خارجي،
            مع ملخّص بالعربي ونقاط المهارات اللي المفروض يتدرّب عليها المتدرب.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-2">
          {missions.map((mission) => (
            <article
              key={mission.id}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-sm transition hover:border-violet-500 hover:shadow-violet-500/20"
            >
              <div className="mb-2 flex items-center justify-between text-xs text-slate-400">
                <span>{mission.category}</span>
                <span className="rounded-full border border-slate-700 px-2 py-0.5 text-[11px]">
                  {mission.difficulty}
                </span>
              </div>

              <h2 className="text-lg font-semibold mb-2 leading-snug">
                {mission.title}
              </h2>

              <p className="text-sm text-slate-300 mb-3 leading-relaxed">
                {mission.summary}
              </p>

              <div className="mb-3 flex flex-wrap gap-1.5">
                {mission.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-slate-800 px-2 py-0.5 text-[11px] text-slate-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="mt-3 flex items-center justify-between border-t border-slate-800 pt-3">
                <div className="text-xs text-slate-400 max-w-[70%]">
                  <div className="font-medium text-slate-200 mb-0.5">
                    المصدر المرجعي
                  </div>
                  <Link
                    href={mission.sourceUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-4 hover:text-violet-400"
                  >
                    {mission.sourceName}
                  </Link>
                </div>

                <div className="text-right text-xs text-slate-400">
                  <div>تقدير الوقت</div>
                  <div className="font-medium text-slate-200">
                    {mission.duration}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>

        <footer className="pt-4 border-t border-slate-900 text-xs text-slate-500 space-y-1">
          <p>
            لاحقًا تقدر تضيف قسم &quot;خطوات التطبيق&quot; لكل مهمة، أو رابط
            لصفحة &quot;Code Playground&quot; خاصة بها داخل intern.dev.
          </p>
          <p>
            لإضافة مهمة جديدة، كل اللي عليك تضيف عنصر جديد داخل المصفوفة{" "}
            <code className="rounded bg-slate-900 px-1 py-0.5">
              missions
            </code>{" "}
            بنفس التنسيق.
          </p>
        </footer>
      </div>
    </main>
  );
}
