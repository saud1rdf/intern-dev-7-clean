import Link from "next/link";
import { notFound } from "next/navigation";

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

// نفس بيانات المهمّات (مكررة هنا عشان نسويها بسرعة)
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
    sourceName:
      "Advanced State Management Techniques in React (choose your article)",
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

export default function MissionDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const missionId = Number(params.id);
  const mission = missions.find((m) => m.id === missionId);

  if (!mission) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto max-w-3xl px-4 py-8 space-y-6">
        <Link
          href="/docs/missions"
          className="text-xs text-slate-400 hover:text-violet-300"
        >
          ← رجوع إلى قائمة المهمات
        </Link>

        <header className="space-y-2">
          <p className="text-xs text-slate-400">{mission.category}</p>
          <h1 className="text-2xl md:text-3xl font-bold">{mission.title}</h1>
          <div className="flex gap-3 text-xs text-slate-400">
            <span className="rounded-full border border-slate-700 px-2 py-0.5">
              المستوى: {mission.difficulty}
            </span>
            <span className="rounded-full border border-slate-700 px-2 py-0.5">
              المدة المتوقعة: {mission.duration}
            </span>
          </div>
        </header>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold">ملخص المهمة</h2>
          <p className="text-sm text-slate-200 leading-relaxed">
            {mission.summary}
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold">المهارات المستهدفة</h2>
          <ul className="list-disc list-inside space-y-1 text-sm text-slate-200">
            {mission.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold">المصدر المرجعي</h2>
          <p className="text-sm text-slate-200">
            اقرأ المقال أو المصدر التالي كوّن فكرة كاملة عن الموضوع، ثم ارجع
            وطبّق المطلوب في Code Playground أو مشروعك:
          </p>
          <Link
            href={mission.sourceUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center text-sm text-violet-300 underline underline-offset-4 hover:text-violet-200"
          >
            {mission.sourceName}
          </Link>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold">خطوات مقترحة للتطبيق</h2>
          <p className="text-sm text-slate-200">
            هنا تقدر لاحقًا تضيف خطوات مفصّلة (Step-by-step) لكل مهمة، وكود
            جاهز كمثال، أو حتى رابط لملف GitHub خاص بالمهمة.
          </p>
        </section>
      </div>
    </main>
  );
}
