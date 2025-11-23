'use client'

import { useLanguage } from '@/components/providers/LanguageProvider'
import Navigation from '@/components/Navigation'
import { Button } from '@/components/ui/Button'
import { ArrowLeft, BookOpen, Code, ExternalLink } from 'lucide-react'
import Link from 'next/link'

export default function WebDevelopmentPage() {
  const { language, t } = useLanguage()

  const topics = [
    {
      title: language === 'ar' ? 'مقدمة في React' : 'Introduction to React',
      titleAr: 'مقدمة في React',
      description: language === 'ar' 
        ? 'تعلم أساسيات React وكيفية بناء مكونات تفاعلية'
        : 'Learn the fundamentals of React and how to build interactive components',
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

export default Counter;`
    },
    {
      title: language === 'ar' ? 'إدارة الحالة في React' : 'State Management in React',
      titleAr: 'إدارة الحالة في React',
      description: language === 'ar'
        ? 'فهم كيفية إدارة الحالة في تطبيقات React المعقدة'
        : 'Understand how to manage state in complex React applications',
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
}`
    },
    {
      title: language === 'ar' ? 'Next.js و SSR' : 'Next.js and SSR',
      titleAr: 'Next.js و SSR',
      description: language === 'ar'
        ? 'تعلم كيفية استخدام Next.js لبناء تطبيقات ويب سريعة'
        : 'Learn how to use Next.js to build fast web applications',
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
};`
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link href="/docs" className="flex items-center text-blue-600 hover:text-blue-800">
            <ArrowLeft className="h-4 w-4 mr-2" />
            {language === 'ar' ? 'العودة إلى الوثائق' : 'Back to Documentation'}
          </Link>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <h1 className={`text-3xl font-bold text-gray-900 dark:text-white mb-4 ${
            language === 'ar' ? 'font-arabic' : 'font-english'
          }`}>
            {language === 'ar' ? 'تطوير الويب' : 'Web Development'}
          </h1>
          <p className={`text-lg text-gray-600 dark:text-gray-300 ${
            language === 'ar' ? 'font-arabic' : 'font-english'
          }`}>
            {language === 'ar'
              ? 'تعلم تطوير الويب الحديث باستخدام React, Next.js, HTML, CSS, و JavaScript'
              : 'Learn modern web development with React, Next.js, HTML, CSS, and JavaScript'
            }
          </p>
        </div>

        {/* Topics */}
        <div className="space-y-8">
          {topics.map((topic, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h2 className={`text-xl font-semibold text-gray-900 dark:text-white mb-2 ${
                    language === 'ar' ? 'font-arabic' : 'font-english'
                  }`}>
                    {language === 'ar' ? topic.titleAr : topic.title}
                  </h2>
                  <p className={`text-gray-600 dark:text-gray-300 mb-4 ${
                    language === 'ar' ? 'font-arabic' : 'font-english'
                  }`}>
                    {topic.description}
                  </p>
                </div>
                <div className="flex items-center space-x-2 ml-4">
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    topic.difficulty === 'beginner' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                      : topic.difficulty === 'intermediate'
                      ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
                      : 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
                  }`}>
                    {language === 'ar' 
                      ? topic.difficulty === 'beginner' ? 'مبتدئ' 
                        : topic.difficulty === 'intermediate' ? 'متوسط' : 'متقدم'
                      : topic.difficulty.charAt(0).toUpperCase() + topic.difficulty.slice(1)
                    }
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {topic.estimatedTime} {language === 'ar' ? 'دقيقة' : 'min'}
                  </span>
                </div>
              </div>

              {/* Code Example */}
              <div className="mb-4">
                <h3 className={`text-lg font-medium text-gray-900 dark:text-white mb-3 ${
                  language === 'ar' ? 'font-arabic' : 'font-english'
                }`}>
                  {language === 'ar' ? 'مثال على الكود:' : 'Code Example:'}
                </h3>
                <div className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
                  <pre className="text-sm">
                    <code>{topic.codeExample}</code>
                  </pre>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center space-x-4">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <BookOpen className="h-4 w-4 mr-2" />
                  {language === 'ar' ? 'اقرأ المزيد' : 'Read More'}
                </Button>
                <Button variant="outline">
                  <Code className="h-4 w-4 mr-2" />
                  {language === 'ar' ? 'جرب في الملعب' : 'Try in Playground'}
                </Button>
                <Button variant="outline">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  {language === 'ar' ? 'المراجع' : 'References'}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Resources */}
        <div className="mt-12 bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
          <h3 className={`text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4 ${
            language === 'ar' ? 'font-arabic' : 'font-english'
          }`}>
            {language === 'ar' ? 'موارد إضافية' : 'Additional Resources'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className={`font-medium text-blue-800 dark:text-blue-200 mb-2 ${
                language === 'ar' ? 'font-arabic' : 'font-english'
              }`}>
                {language === 'ar' ? 'الوثائق الرسمية' : 'Official Documentation'}
              </h4>
              <ul className={`space-y-1 text-blue-700 dark:text-blue-300 ${
                language === 'ar' ? 'font-arabic' : 'font-english'
              }`}>
                <li>• React Documentation</li>
                <li>• Next.js Documentation</li>
                <li>• MDN Web Docs</li>
              </ul>
            </div>
            <div>
              <h4 className={`font-medium text-blue-800 dark:text-blue-200 mb-2 ${
                language === 'ar' ? 'font-arabic' : 'font-english'
              }`}>
                {language === 'ar' ? 'دورات تعليمية' : 'Learning Courses'}
              </h4>
              <ul className={`space-y-1 text-blue-700 dark:text-blue-300 ${
                language === 'ar' ? 'font-arabic' : 'font-english'
              }`}>
                <li>• freeCodeCamp React Course</li>
                <li>• GeeksforGeeks Web Development</li>
                <li>• Codecademy Front-End Path</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
