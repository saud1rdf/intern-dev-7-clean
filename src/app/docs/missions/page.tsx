// src/app/docs/missions/data.ts

export type Mission = {
  id: number;
  title: string;
  category: string;
  level: string;
  summary: string;
  description: string;
  skills: string[];
  steps: string[];
  codeExample?: string;   // 👈 الجديد
  sourceUrl?: string;
  sourceName?: string;
};



export const missions: Mission[] = [
  {
    id: 1,
    title:
      "Advanced State Management in React (Local / Global / URL State)",
    category: "Web Development - React",
    level: "Advanced",
    summary:
      "Design and categorize different types of state (local, global, URL) in a large React app and choose the right tools.",
    description:
      "هذه المهمة تركّز على فهم أنواع الحالة المختلفة في تطبيق React كبير، وكيف تختار بين useState, Context, Redux, Zustand وغيرها. الهدف إن المتدرّب يقدر يحدّد نوع الحالة المناسب (local, global, URL) ويبرّر اختياره.",
    skills: [
      "React",
      "State Management",
      "Context API",
      "Redux / Zustand",
      "System Design Thinking"
    ],
    steps: [
      "اقرأ المقال المرجعي وحدّد الأنواع الثلاثة الرئيسية للحالة في تطبيقات React: local, global, URL.",
      "اختر مشروع React (حقيقي أو تجريبي) فيه عدّة صفحات ومكوّنات متداخلة.",
      "دوّن أمثلة حقيقية من المشروع لكل نوع حالة: ما الذي يجب أن يكون local؟ وما الذي يجب أن يكون global؟ وما الذي يناسب أن يكون في URL؟",
      "اقترح بنية state architecture للتطبيق: هل ستستخدم Context فقط؟ أم Redux؟ أم Zustand؟ أم مزيج؟ ولماذا؟",
      "نفّذ جزءاً من هذه البنية عملياً في المشروع (مثلاً: نقل بعض state من useState محلي إلى Context أو Redux).",
      "اكتب ملاحظاتك: ما الذي أصبح أسهل بعد إعادة تصميم الحالة؟ وما الأشياء التي يجب تجنّبها؟"
    ],
    sourceUrl:
      "https://dev.to/developerway/react-state-management-in-2025-what-you-actually-need",
    sourceName: "React State Management in 2025 – DeveloperWay"
  },
  {
    id: 2,
    title: "Advanced React State via URL & Search Params",
    category: "Web Development - React",
    level: "Intermediate-Advanced",
    summary:
      "Use URL parameters and search params to sync React state with the browser URL.",
    description:
      "في هذه المهمة، المتدرّب يتعلّم كيف يربط حالة الواجهة مع الـ URL باستخدام search params أو path params بحيث يمكن مشاركة الحالة عبر الرابط أو حفظها في الـ history.",
    skills: [
      "React",
      "React Router / Next.js Routing",
      "URLSearchParams",
      "State Synchronization"
    ],
    steps: [
      "اقرأ المقال المرجعي عن استخدام URL parameters في إدارة الحالة.",
      "اختر صفحة في تطبيق React أو Next.js فيها فِلترة، بحث، أو pagination.",
      "حوّل جزءاً من الحالة الحالية (مثلاً: filter, page, searchQuery) ليتم تخزينها في الـ URL بدلاً من أن تكون فقط في useState.",
      "تأكد أن تحديث الـ URL يحدّث الواجهة، وأن تغيّر الواجهة يحدّث الـ URL (two-way sync).",
      "جرّب نسخ الرابط ومشاركته في متصفح آخر للتأكد من أن الحالة يتم استرجاعها بشكل صحيح.",
      "اكتب ملاحظات عن متى يكون تخزين الحالة في الـ URL مفيداً ومتى يسبب تعقيداً غير ضروري."
    ],
    sourceUrl:
      "https://blog.logrocket.com/advanced-react-state-management-url-parameters/",
    sourceName: "Advanced React state management using URL parameters – LogRocket"
  },
  {
    id: 3,
    title: "High-Traffic Performance Optimization in Node.js Backend",
    category: "Backend - Node.js",
    level: "Advanced",
    summary:
      "Profile and optimize a Node.js server to handle high traffic and critical bottlenecks.",
    description:
      "مهمة تركّز على تحسين أداء Backend مبني بـ Node.js لتعامل مع عدد كبير من الطلبات، مع فهم event loop, I/O, caching, وprofiling.",
    skills: [
      "Node.js",
      "Performance Profiling",
      "Event Loop",
      "Caching",
      "Database Optimization"
    ],
    steps: [
      "اقرأ المقال المرجعي بعناية ودوّن أهم تقنيات تحسين الأداء المذكورة.",
      "اختر API أو خدمة Node.js موجودة (حقيقية أو Demo) فيها استعلامات قاعدة بيانات أو عمليات ثقيلة.",
      "استخدم أدوات بسيطة للـ profiling (مثل console.time أو أدوات متصفح / Node profiling) لاكتشاف نقاط البطء.",
      "طبّق تحسيناً واحداً على الأقل: مثل إضافة caching، تحسين استعلام قاعدة البيانات، أو تقليل العمل داخل الـ request handler.",
      "اختبر الأداء قبل وبعد التعديل (عدد الطلبات في الثانية، أو الزمن المتوسط للاستجابة).",
      "اكتب تقريراً قصيراً يشرح: ما كانت المشكلة؟ ماذا غيّرت؟ وما النتيجة بالأرقام؟"
    ],
    sourceUrl:
      "https://dev.to/hugo__df/optimizing-nodejs-performance-best-practices-for-high-traffic-apps-1234",
    sourceName:
      "Optimizing Node.js Performance: Best Practices for High-Traffic Apps – DEV.to"
  },
  {
    id: 4,
    title: "Node.js Performance Tuning & Scaling with Workers / Cluster",
    category: "Backend - Node.js",
    level: "Advanced",
    summary:
      "Use Worker Threads or Cluster to handle CPU-bound tasks and scale a Node.js backend.",
    description:
      "هذه المهمة تركز على التعامل مع المهام الثقيلة على المعالج (CPU-bound) في Node.js باستخدام Worker Threads أو Cluster لتوزيع الحمل وتحسين الاستجابة.",
    skills: [
      "Node.js",
      "Worker Threads",
      "Cluster",
      "Multi-process Architecture",
      "Performance Measurement"
    ],
    steps: [
      "اقرأ مقال BairesDev حول تحسين أداء Node.js بعمق، وركّز على أجزاء Worker Threads و Cluster.",
      "صمّم مثالاً لعملية CPU-bound (مثل حساب كبير، أو معالجة بيانات) داخل سيرفر Node.js بسيط.",
      "نفّذ هذه العملية في Thread واحد أولاً ولاحظ تأثيرها على استجابة السيرفر.",
      "بعد ذلك، انقل العملية إلى Worker Thread أو استخدم Cluster لتوزيع الحمل.",
      "قارن زمن التنفيذ وعدد الطلبات التي يمكن للسيرفر التعامل معها قبل وبعد التعديل.",
      "وثّق النتيجة مع رسومات أو أرقام بسيطة تبين أثر استخدام Workers / Cluster."
    ],
    sourceUrl:
      "https://www.bairesdev.com/blog/nodejs-performance-optimization-deep-dive/",
    sourceName:
      "NodeJS Performance Optimisation Deep Dive – BairesDev Blog"
  },
  {
    id: 5,
    title:
      "Advanced Merge Conflict Resolution in Git / Version Control Workflows",
    category: "Version Control - Git",
    level: "Intermediate-Advanced",
    summary:
      "Practice resolving complex multi-branch merge conflicts using advanced Git tools.",
    description:
      "المهمة تضع المتدرّب في سيناريو حقيقي فيه تعارضات (merge conflicts) معقدة بين فروع متعددة، ويُطلب منه استخدام أدوات Git متقدمة لحلّها.",
    skills: [
      "Git",
      "Branching Strategies",
      "Merge & Rebase",
      "Conflict Resolution",
      "Git Mergetool / Diff3"
    ],
    steps: [
      "اقرأ المقال المرجعي من Atlassian عن تقنيات حلّ التعارضات المتقدّمة.",
      "أنشئ مستودع Git تجريبي مع ثلاثة فروع على الأقل تحتوي تغييرات متعارضة في نفس الملفات.",
      "حاول دمج الفروع باستخدام git merge أو git rebase حتى تحصل على تعارضات حقيقية.",
      "استخدم أدوات متقدمة مثل git mergetool أو خَيار diff3 في Git لرؤية السياق الكامل للتغييرات.",
      "حلّ التعارضات مع الحرص على عدم فقدان أي جزء مهم من الكود.",
      "اكتب ملاحظات: متى تستخدم merge؟ متى تفضّل rebase؟ وكيف تشرح ذلك لزميل جديد في الفريق؟"
    ],
    sourceUrl:
      "https://community.atlassian.com/t5/Articles/Advanced-Git-merge-conflict-resolution-techniques/ba-p/12345",
    sourceName:
      "Advanced Git merge conflict resolution techniques – Atlassian Community"
  },
  {
    id: 6,
    title: "Global & Shared State Management Patterns in React",
    category: "Web Development - React",
    level: "Advanced",
    summary:
      "Design a shared state system for a large React app using patterns or libraries like Redux / MobX.",
    description:
      "هنا المتدرّب يصمم نظاماً لمشاركة الحالة بين مكوّنات متعددة في تطبيق React كبير، باستخدام أنماط (patterns) أو مكتبات مثل Redux أو MobX أو Zustand.",
    skills: [
      "React",
      "Global State Management",
      "Redux / MobX / Zustand",
      "Application Architecture",
      "Code Organization"
    ],
    steps: [
      "اقرأ مقال Medium المرجعي عن تقنيات إدارة الحالة المتقدمة في React.",
      "اختر تطبيق React متوسط أو كبير فيه عدّة صفحات ومكوّنات تحتاج مشاركة البيانات بينها.",
      "حدّد مجموعة من الحالات التي تحتاج أن تكون مشتركة (shared state) مثلاً: authenticated user, cart, filters, settings.",
      "صمم structure لـ global store (مثل Redux slice أو Zustand store) يغطّي هذه الحالات.",
      "طبّق النظام في جزء من التطبيق، وانقل بعض الحالات من props drilling أو lifting state إلى الـ store الجديد.",
      "قيّم النتيجة: هل أصبح الكود أوضح؟ هل قلّ تمرير الـ props؟ وما التنازلات التي حصلت؟"
    ],
    sourceUrl:
      "https://medium.com/@bloggerwoman/advanced-state-management-techniques-in-reactjs-xxxx",
    sourceName:
      "Advanced State Management Techniques in ReactJs – Medium"
  }
];


