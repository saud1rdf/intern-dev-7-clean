'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/components/providers/LanguageProvider';
import Navigation from '@/components/Navigation';
import ArticleCard from './ArticleCard';
import type { ParsedArticle } from '@/lib/articleParser';
import type { CategoryMeta } from '@/lib/categories';

interface CategoryArticlesProps {
  category: CategoryMeta;
  articles: ParsedArticle[];
}

export default function CategoryArticles({ category, articles }: CategoryArticlesProps) {
  const { language } = useLanguage();
  const isAr = language === 'ar';

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          href="/docs"
          className="inline-flex items-center text-sm text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 mb-6 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          {isAr ? 'العودة للوثائق' : 'Back to Docs'}
        </Link>

        <header className="mb-10">
          <h1
            className={`text-4xl font-bold text-gray-900 dark:text-white mb-3 ${
              isAr ? 'font-arabic' : ''
            }`}
          >
            {isAr ? category.titleAr : category.title}
          </h1>
          <p
            className={`text-lg text-gray-600 dark:text-gray-300 ${
              isAr ? 'font-arabic' : ''
            }`}
          >
            {isAr ? category.descriptionAr : category.description}
          </p>
        </header>

        <div className="space-y-8">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} language={language} />
          ))}
        </div>
      </div>
    </div>
  );
}
