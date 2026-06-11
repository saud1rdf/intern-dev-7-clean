'use client';

import CopyButton from './CopyButton';
import type { ParsedArticle } from '@/lib/articleParser';

interface ArticleCardProps {
  article: ParsedArticle;
  language?: 'en' | 'ar';
}

const difficultyStyles = {
  Beginner: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
  Intermediate: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400',
  Advanced: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400',
};

const difficultyLabels = {
  Beginner: { en: 'Beginner', ar: 'مبتدئ' },
  Intermediate: { en: 'Intermediate', ar: 'متوسط' },
  Advanced: { en: 'Advanced', ar: 'متقدم' },
};

export default function ArticleCard({ article, language = 'en' }: ArticleCardProps) {
  const isAr = language === 'ar';

  return (
    <article className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 md:p-8 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
        <h2
          className={`text-2xl font-bold text-gray-900 dark:text-white ${
            isAr ? 'font-arabic' : ''
          }`}
        >
          {article.title}
        </h2>
        <div className="flex items-center gap-3 shrink-0">
          <span
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              difficultyStyles[article.difficulty]
            }`}
          >
            {difficultyLabels[article.difficulty][language]}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {article.readingTime} {isAr ? 'دقيقة' : 'min'}
          </span>
        </div>
      </div>

      <p
        className={`text-gray-600 dark:text-gray-300 mb-6 leading-relaxed ${
          isAr ? 'font-arabic' : ''
        }`}
      >
        {article.overview}
      </p>

      {article.steps.length > 0 && (
        <div className="mb-6">
          <h3
            className={`text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 ${
              isAr ? 'font-arabic' : ''
            }`}
          >
            {isAr ? 'الخطوات:' : 'Step-by-step:'}
          </h3>
          <ol className={`list-decimal list-inside space-y-1 text-gray-600 dark:text-gray-400 text-sm ${isAr ? 'font-arabic' : ''}`}>
            {article.steps.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
        </div>
      )}

      {article.code && (
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
            {isAr ? 'مثال الكود:' : 'Code Example:'}
          </h3>
          <div className="group relative">
            <CopyButton text={article.code} />
            <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm leading-relaxed text-gray-100 border border-gray-800">
              <code>{article.code}</code>
            </pre>
          </div>
        </div>
      )}

      {(article.explanation || article.explanationAr) && (
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-5 border border-blue-100 dark:border-blue-800/30">
          <h3
            className={`text-sm font-bold text-blue-800 dark:text-blue-300 mb-2 ${
              isAr ? 'font-arabic' : ''
            }`}
          >
            {isAr ? 'الشرح:' : 'Explanation:'}
          </h3>
          {article.explanation && (
            <p
              className={`text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-2 ${
                isAr ? 'font-arabic' : ''
              }`}
            >
              {article.explanation}
            </p>
          )}
          {article.explanationAr && (
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed font-arabic border-t border-blue-100 dark:border-blue-800/30 pt-2 mt-2">
              {article.explanationAr}
            </p>
          )}
        </div>
      )}
    </article>
  );
}
