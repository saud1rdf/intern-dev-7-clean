'use client'

import { useLanguage } from '@/components/providers/LanguageProvider'
import Navigation from '@/components/Navigation'
import { Button } from '@/components/ui/Button'
import { ArrowLeft, BookOpen, Code, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { apiIntegrationTopics } from './data'

export default function ApiIntegrationPage() {
  const { language, t } = useLanguage()
  const topics = apiIntegrationTopics

  return (
    <>
      <section id="content-start"></section>
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
            {language === 'ar' ? 'تكامل واجهات برمجة التطبيقات' : 'API Integration'}
          </h1>
          <p className={`text-lg text-gray-600 dark:text-gray-300 ${
            language === 'ar' ? 'font-arabic' : 'font-english'
          }`}>
            {language === 'ar'
              ? 'إتقان تكامل واجهات برمجة التطبيقات مع REST APIs و GraphQL'
              : 'Master API integration with REST APIs, GraphQL, and modern tools'
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
                <button 
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background h-10 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <BookOpen className="h-4 w-4 mr-2" />
                  {language === 'ar' ? 'اقرأ المزيد' : 'Read More'}
                </button>
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
      </div>
      </div>
    </>
  )
}


