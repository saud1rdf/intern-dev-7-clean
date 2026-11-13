'use client';

import { useLanguage } from '@/components/providers/LanguageProvider';
import Navigation from '@/components/Navigation';
import LearningPathSection from '@/components/docs/LearningPathSection';

export default function DocsPage() {
  const { language, t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1
            className={`text-3xl font-bold text-gray-900 dark:text-white mb-4 ${
              language === 'ar' ? 'font-arabic' : 'font-english'
            }`}
          >
            {t('nav.docs')}
          </h1>
          <p
            className={`text-lg text-gray-600 dark:text-gray-300 ${
              language === 'ar' ? 'font-arabic' : 'font-english'
            }`}
          >
            {language === 'ar'
              ? 'مسارات تعلم موجّهة تأخذك من المفهوم إلى مشروع عملي'
              : 'Guided learning paths that take you from concept to a working project'}
          </p>
        </div>

        {/* المسارات الموجهة فقط */}
        <LearningPathSection />
      </div>
    </div>
  );
}