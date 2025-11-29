'use client'

import { useLanguage } from '@/components/providers/LanguageProvider'
import Navigation from '@/components/Navigation'
import { Button } from '@/components/ui/Button'
import { ArrowLeft, BookOpen, Code, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { testingDebuggingTopics } from './data'

export default function TestingDebuggingPage() {
  const { language, t } = useLanguage()
  const topics = testingDebuggingTopics

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="mb-8">
          <Link href="/docs" className="flex items-center text-blue-600 hover:text-blue-800">
            <ArrowLeft className="h-4 w-4 mr-2" />
            {language === 'ar' ? 'العودة إلى الوثائق' : 'Back to Documentation'}
          </Link>
        </nav>

        <div className="mb-8">
          <h1 className={`text-3xl font-bold text-gray-900 dark:text-white mb-4 ${
            language === 'ar' ? 'font-arabic' : 'font-english'
          }`}>
            {language === 'ar' ? 'الاختبار والتشخيص' : 'Testing & Debugging'}
          </h1>
          <p className={`text-lg text-gray-600 dark:text-gray-300 ${
            language === 'ar' ? 'font-arabic' : 'font-english'
          }`}>
            {language === 'ar'
              ? 'إتقان استراتيجيات الاختبار وتقنيات التشخيص'
              : 'Master testing strategies and debugging techniques'
            }
          </p>
        </div>

        <div className="space-y-8">
          {topics.map((topic) => (
            <div key={topic.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
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
                    {language === 'ar' ? topic.descriptionAr : topic.description}
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

              <div className="flex items-center space-x-4">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <BookOpen className="h-4 w-4 mr-2" />
                  {language === 'ar' ? 'اقرأ المزيد' : 'Read More'}
                </Button>
                <Button variant="outline">
                  <Code className="h-4 w-4 mr-2" />
                  {language === 'ar' ? 'جرب في الملعب' : 'Try in Playground'}
                </Button>
                {topic.resources && (
                  <a 
                    href={topic.resources.links[0]?.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    {language === 'ar' ? 'المراجع' : 'References'}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-orange-50 dark:bg-orange-900/20 rounded-lg p-6">
          <h3 className={`text-lg font-semibold text-orange-900 dark:text-orange-100 mb-4 ${
            language === 'ar' ? 'font-arabic' : 'font-english'
          }`}>
            {language === 'ar' ? 'موارد إضافية' : 'Additional Resources'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className={`font-medium text-orange-800 dark:text-orange-200 mb-2 ${
                language === 'ar' ? 'font-arabic' : 'font-english'
              }`}>
                {language === 'ar' ? 'الوثائق الرسمية' : 'Official Documentation'}
              </h4>
              <ul className={`space-y-1 text-orange-700 dark:text-orange-300 ${
                language === 'ar' ? 'font-arabic' : 'font-english'
              }`}>
                <li>• Jest Documentation</li>
                <li>• Testing Library</li>
                <li>• Storybook Testing Guide</li>
              </ul>
            </div>
            <div>
              <h4 className={`font-medium text-orange-800 dark:text-orange-200 mb-2 ${
                language === 'ar' ? 'font-arabic' : 'font-english'
              }`}>
                {language === 'ar' ? 'دورات تعليمية' : 'Learning Courses'}
              </h4>
              <ul className={`space-y-1 text-orange-700 dark:text-orange-300 ${
                language === 'ar' ? 'font-arabic' : 'font-english'
              }`}>
                <li>• Common Testing Mistakes</li>
                <li>• Testing Best Practices</li>
                <li>• Debugging Techniques</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

