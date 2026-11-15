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
  {
    step: 'Learning Path 3',
    stepAr: 'المسار الثالث',
    href: '/docs/learning-paths/authentication-authorization',
    meta: 'Security • JWT • Backend • Intermediate',
    title: 'Authentication & Authorization: A Guided Learning Path',
    titleEn: 'Authentication & Authorization: A Guided Learning Path',
    titleAr: 'المصادقة والتفويض: مسار تعلّم موجّه',
    descriptionEn:
      'Add users, registration, login, hashed passwords, JWT access tokens, ownership checks, and roles to the Task Management API you already built — guarded by authentication and authorization tests.',
    descriptionAr:
      'أضف المستخدمين والتسجيل وتسجيل الدخول وكلمات المرور المشفرة ورموز JWT وفحوصات الملكية والأدوار إلى مشروع إدارة المهام، مع اختبارات للمصادقة والتفويض.',
  },
  {
    step: 'Learning Path 4',
    stepAr: 'المسار الرابع',
    href: '/docs/learning-paths/api-testing',
    meta: 'Testing • pytest • Backend • Intermediate',
    title: 'API Testing with FastAPI & Pytest: A Guided Learning Path',
    titleEn: 'API Testing with FastAPI & Pytest: A Guided Learning Path',
    titleAr: 'اختبار واجهات برمجة التطبيقات مع FastAPI و pytest: مسار تعلّم موجّه',
    descriptionEn:
      'Professionalize the Task Management API you already built with a complete, trustworthy test suite: pytest, TestClient, fixtures, an isolated test database, and full coverage of the rejected cases — including a practice project built entirely on your own.',
    descriptionAr:
      'اجعل لمشروع إدارة المهام الذي بنيته مجموعة اختبارات احترافية يعتمد عليها: pytest و TestClient و Fixtures وقاعدة بيانات معزولة وتغطية كاملة للحالات المرفوضة، مع مشروع تجربة عملي تبني اختباراته بنفسك.',
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
            className="block rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/60 p-5 hover:shadow-md transition-all duration-200 group"
          >
            <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-1">
              {isAr ? path.stepAr : path.step} • {path.meta}
            </p>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
              <Map className={`h-5 w-5 mr-2 text-gray-600 dark:text-gray-400 ${isAr ? 'ml-2 mr-0' : ''}`} />
              {isAr ? path.titleAr : path.titleEn}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-3">
              {isAr ? path.descriptionAr : path.descriptionEn}
            </p>
            <p className="inline-flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:underline">
              {isAr ? 'ابدأ المسار' : 'Start the path'}
              <ArrowRight className={`h-4 w-4 ${isAr ? 'mr-1' : 'ml-1'}`} />
            </p>
          </Link>
        </div>
      ))}
    </section>
  );
}
