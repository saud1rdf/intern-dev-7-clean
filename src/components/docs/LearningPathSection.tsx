'use client';

import Link from 'next/link';
import { Map, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/components/providers/LanguageProvider';

export default function LearningPathSection() {
  const { language } = useLanguage();
  const isAr = language === 'ar';

  return (
    <section className="mt-12 space-y-4">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
        {isAr ? 'مسارات تعلّمية موجّهة' : 'Guided Learning Paths'}
      </h2>
      <p className="text-gray-600 dark:text-gray-300">
        {isAr
          ? 'مسار متكامل يأخذك من المفهوم إلى مشروع عملي، ثم إلى مشروع تجربة عملي بدون حل جاهز.'
          : 'A structured path that takes you from a concept to a working project, then to a practice project you build on your own.'}
      </p>

      <Link
        href="/docs/learning-paths/fastapi"
        className="block rounded-xl border border-indigo-200 dark:border-indigo-800/60 bg-white dark:bg-slate-900/60 p-5 hover:shadow-lg transition-all duration-200 group"
      >
        <p className="text-xs uppercase tracking-wide text-indigo-400 dark:text-indigo-300 mb-1">
          Python • Backend • Beginner
        </p>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2 flex items-center">
          <Map className={`h-5 w-5 mr-2 text-indigo-500 ${isAr ? 'ml-2 mr-0' : ''}`} />
          FastAPI: A Guided Learning Path
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-300 mb-3 line-clamp-3">
          {isAr
            ? 'تعلّم FastAPI من الصفر عبر مشروع متدرّج لإدارة المهام، ثم ابنِ مشروع إدارة الموظفين بنفسك.'
            : 'Learn FastAPI from zero through a guided Task Management API, then build an Employee Management API yourself.'}
        </p>
        <p className="inline-flex items-center text-sm font-medium text-indigo-600 dark:text-indigo-300 group-hover:underline">
          {isAr ? 'ابدأ المسار' : 'Start the path'}
          <ArrowRight className={`h-4 w-4 ${isAr ? 'mr-1' : 'ml-1'}`} />
        </p>
      </Link>
    </section>
  );
}