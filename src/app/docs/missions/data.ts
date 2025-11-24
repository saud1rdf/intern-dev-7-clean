// src/app/docs/missions/data.ts

export type Mission = {
  id: number;
  title: string;
  category: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  summary: string;      // نص قصير يظهر في الكارد
  description: string;  // شرح أطول يظهر في صفحة التفاصيل
  steps: string[];      // خطوات تنفيذ المهمة
  skills: string[];     // المهارات اللي يتعلمها المتدرّب
  sourceUrl?: string;
  sourceName?: string;
};

export const missions: Mission[] = [
  {
    id: 1,
    title: "Build a React Counter Component",
    category: "Web Development",
    level: "Beginner",
    summary: "Create a simple counter with + and - buttons using React.",
    description:
      "في هذه المهمة، المتدرّب يبني مكوّن React بسيط فيه عدّاد وزرين لزيادة وإنقاص القيمة. الهدف إنه يتعوّد على useState و JSX.",
    steps: [
      "Create a new React component called Counter.tsx.",
      "Use the useState hook to store the counter value.",
      "Add two buttons: one to increment and one to decrement the value.",
      "Render the current value in a large, clear text.",
    ],
    skills: ["React", "useState", "Components", "State"],
    sourceUrl: "https://github.com/4GeeksAcademy/react-tutorial-exercises",
    sourceName: "4Geeks React Tutorial Exercises",
  },
  {
    id: 2,
    title: "Fetch and Render a List of Posts",
    category: "API Integration",
    level: "Intermediate",
    summary: "Call a REST API and render the list of posts in a React component.",
    description:
      "في هذه المهمة، المتدرّب يتعلّم كيف يتعامل مع REST API ويعرض البيانات في واجهة React باستخدام fetch أو axios.",
    steps: [
      "Create a new page or component called PostsPage.tsx.",
      "Use useEffect to call a public REST API (e.g. jsonplaceholder).",
      "Store the result in state using useState.",
      "Render the list in a styled <ul> with <li> for each post title.",
    ],
    skills: ["REST APIs", "React", "useEffect", "Async JavaScript"],
    sourceUrl: "https://github.com/4GeeksAcademy/react-tutorial-exercises",
    sourceName: "4Geeks React Tutorial Exercises",
  },
];
