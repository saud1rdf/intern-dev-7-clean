// src/app/docs/web-development/data.ts

import { Topic } from '../types';

export const webDevelopmentTopics: Topic[] = [
  {
    id: 'react-intro',
    title: 'Introduction to React',
    titleAr: 'مقدمة في React',
    description: 'Learn the fundamentals of React and how to build interactive components',
    descriptionAr: 'تعلم أساسيات React وكيفية بناء مكونات تفاعلية',
    difficulty: 'beginner',
    estimatedTime: 30,
    codeExample: `import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </div>
  );
}

export default Counter;`,
    explanation: "This example demonstrates the basic usage of the `useState` hook in React. We initialize a state variable `count` with 0. The `setCount` function is used to update this value. When the buttons are clicked, the state updates, and React re-renders the component to show the new count.",
    explanationAr: "يوضح هذا المثال الاستخدام الأساسي لـ `useState` hook في React. نبدأ بمتغير حالة `count` بقيمة 0. تُستخدم دالة `setCount` لتحديث هذه القيمة. عند النقر على الأزرار، يتم تحديث الحالة، ويقوم React بإعادة رسم المكون لإظهار العدد الجديد.",
    resources: {
      title: 'Additional Resources',
      titleAr: 'موارد إضافية',
      links: [
        { label: 'React Documentation', url: 'https://react.dev' },
        { label: 'freeCodeCamp React Course', url: 'https://www.freecodecamp.org' },
      ],
    },
  },
  {
    id: 'react-state',
    title: 'State Management in React',
    titleAr: 'إدارة الحالة في React',
    description: 'Understand how to manage state in complex React applications',
    descriptionAr: 'فهم كيفية إدارة الحالة في تطبيقات React المعقدة',
    difficulty: 'intermediate',
    estimatedTime: 45,
    codeExample: `import React, { createContext, useContext, useReducer } from 'react';

// Context
const AppContext = createContext();

// Reducer
function appReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}

// Provider
export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, { count: 0 });
  
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

// Hook
export function useApp() {
  return useContext(AppContext);
}`,
    explanation: "This example shows how to manage complex state using `useReducer` and `useContext`. `useReducer` handles state logic (increment/decrement), while `useContext` allows sharing this state across the component tree without passing props manually at every level.",
    explanationAr: "يوضح هذا المثال كيفية إدارة الحالة المعقدة باستخدام `useReducer` و `useContext`. يتولى `useReducer` منطق الحالة (زيادة/نقصان)، بينما يسمح `useContext` بمشاركة هذه الحالة عبر شجرة المكونات دون الحاجة لتمرير الخصائص (props) يدوياً في كل مستوى.",
    resources: {
      title: 'Additional Resources',
      titleAr: 'موارد إضافية',
      links: [
        { label: 'React Context API', url: 'https://react.dev/reference/react/useContext' },
        { label: 'State Management Guide', url: 'https://react.dev/learn/managing-state' },
      ],
    },
  },
  {
    id: 'nextjs-ssr',
    title: 'Next.js and SSR',
    titleAr: 'Next.js و SSR',
    description: 'Learn how to use Next.js to build fast web applications',
    descriptionAr: 'تعلم كيفية استخدام Next.js لبناء تطبيقات ويب سريعة',
    difficulty: 'intermediate',
    estimatedTime: 60,
    codeExample: `import { GetServerSideProps } from 'next';

interface Props {
  data: {
    title: string;
    content: string;
  };
}

export default function BlogPost({ data }: Props) {
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.content}</p>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;
  
  // Fetch data from API
  const res = await fetch(\`https://api.example.com/posts/\${id}\`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};`,
    explanation: "This example demonstrates Server-Side Rendering (SSR) in Next.js using `getServerSideProps`. This function runs on the server for every request, fetching data before the page is sent to the browser. This is useful for SEO and ensuring users see the most up-to-date content immediately.",
    explanationAr: "يوضح هذا المثال العرض من جانب الخادم (SSR) في Next.js باستخدام `getServerSideProps`. تعمل هذه الدالة على الخادم مع كل طلب، حيث تجلب البيانات قبل إرسال الصفحة إلى المتصفح. هذا مفيد لتحسين محركات البحث (SEO) وضمان رؤية المستخدمين لأحدث المحتويات فوراً.",
    resources: {
      title: 'Additional Resources',
      titleAr: 'موارد إضافية',
      links: [
        { label: 'Next.js Documentation', url: 'https://nextjs.org/docs' },
        { label: 'SSR Guide', url: 'https://nextjs.org/docs/pages/building-your-application/rendering/server-side-rendering' },
      ],
    },
  },
];

