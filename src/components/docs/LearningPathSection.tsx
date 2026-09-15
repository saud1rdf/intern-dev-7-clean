'use client';

import Link from 'next/link';
import { Map, ArrowRight, ArrowDown } from 'lucide-react';
import { useLanguage } from '@/components/providers/LanguageProvider';

const learningPaths = [
  {
    step: 'Learning Path 1',
    stepAr: 'المسار الأول',
    href: '/docs/learning-paths/fastapi',
    meta: 'Python • Backend • Beginner',
    title: 'FastAPI: A Guided Learning Path',
    titleEn: 'FastAPI: A Guided Learning Path',
    titleAr: 'فاست-أي-بي-آي: مسار تعلّم موجّه',
    descriptionEn:
      'Learn FastAPI from zero through a guided Task Management API, then build an Employee Management API yourself.',
    descriptionAr:
      'تعلّم FastAPI من الصفر عبر مشروع متدرّج لإدارة المهام، ثم ابنِ مشروع إدارة الموظفين بنفسك.',
  },
  {
    step: 'Learning Path 2',
    stepAr: 'المسار الثاني',
    href: '/docs/learning-paths/docker-cicd',
    meta: 'Docker • CI/CD • Backend • Intermediate',
    title: 'Docker & CI/CD: A Guided Learning Path',
    titleEn: 'Docker & CI/CD: A Guided Learning Path',
    titleAr: 'دوكر و CI/CD: مسار تعلّم موجّه',
    descriptionEn:
      'Containerize, test, and automate the FastAPI Task Management API you already built — with Docker, PostgreSQL, and GitHub Actions.',
    descriptionAr:
      'ضع مشروع FastAPI الذي بنيته سابقاً في حاوية، وأضف PostgreSQL، وأتمتة الاختبارات بـ GitHub Actions.',
  },
];

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

      {learningPaths.map((path, index) => (
        <div key={path.href}>
          {index > 0 && (
            <div className="flex justify-center py-1">
              <ArrowDown className="h-5 w-5 text-gray-400 dark:text-gray-500" />
            </div>
          )}
          <Link
            href={path.href}
            className="block rounded-xl border border-indigo-200 dark:border-indigo-800/60 bg-white dark:bg-slate-900/60 p-5 hover:shadow-lg transition-all duration-200 group"
          >
            <p className="text-xs uppercase tracking-wide text-indigo-500 dark:text-indigo-300 mb-1">
              {isAr ? path.stepAr : path.step} • {path.meta}
            </p>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2 flex items-center">
              <Map className={`h-5 w-5 mr-2 text-indigo-500 ${isAr ? 'ml-2 mr-0' : ''}`} />
              {isAr ? path.titleAr : path.titleEn}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-3 line-clamp-3">
              {isAr ? path.descriptionAr : path.descriptionEn}
            </p>
            <p className="inline-flex items-center text-sm font-medium text-indigo-600 dark:text-indigo-300 group-hover:underline">
              {isAr ? 'ابدأ المسار' : 'Start the path'}
              <ArrowRight className={`h-4 w-4 ${isAr ? 'mr-1' : 'ml-1'}`} />
            </p>
          </Link>
        </div>
      ))}
    </section>
  );
}