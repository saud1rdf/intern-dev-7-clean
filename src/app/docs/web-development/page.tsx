'use client'

import { useState } from 'react'
import { useLanguage } from '@/components/providers/LanguageProvider'
import Navigation from '@/components/Navigation'
import { Button } from '@/components/ui/Button'
import {
  ArrowLeft,
  BookOpen,
  Code,
  ExternalLink,
  ChevronDown,
  ChevronUp
} from 'lucide-react'
import Link from 'next/link'
import { webDevelopmentTopics } from './data'

export default function WebDevelopmentPage() {
  const { language } = useLanguage()
  const [expandedTopics, setExpandedTopics] = useState<Set<string>>(new Set())

  const toggleTopic = (topicId: string) => {
    const next = new Set(expandedTopics)
    next.has(topicId) ? next.delete(topicId) : next.add(topicId)
    setExpandedTopics(next)
  }

  return (
    <>
      <section id="content-start" />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Navigation />

        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <Link
              href="/docs"
              className="flex items-center text-blue-600 hover:text-blue-800"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              {language === 'ar' ? 'العودة إلى الوثائق' : 'Back to Documentation'}
            </Link>
          </nav>

          {/* Header */}
          <div className="mb-8">
            <h1
              className={`text-3xl font-bold mb-4 ${
                language === 'ar' ? 'font-arabic' : 'font-english'
              }`}
            >
              {language === 'ar' ? 'تطوير الويب' : 'Web Development'}
            </h1>
            <p
              className={`text-lg text-gray-600 dark:text-gray-300 ${
                language === 'ar' ? 'font-arabic' : 'font-english'
              }`}
            >
              {language === 'ar'
                ? 'تعلم تطوير الويب الحديث باستخدام HTML و CSS و JavaScript و React'
                : 'Learn modern web development using HTML, CSS, JavaScript, and React'}
            </p>
          </div>

          {/* Topics */}
          <div className="space-y-8">
            {webDevelopmentTopics.map((topic) => (
              <div
                key={topic.id}
                className="bg-white dark:bg-gray-800 rounded-lg border p-6"
              >
                {/* Title */}
                <h2
                  className={`text-xl font-semibold mb-2 ${
                    language === 'ar' ? 'font-arabic' : 'font-english'
                  }`}
                >
                  {language === 'ar' ? topic.titleAr : topic.title}
                </h2>

                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {language === 'ar' ? topic.descriptionAr : topic.description}
                </p>

                {/* Code */}
                <div className="bg-gray-900 text-green-400 rounded p-4 overflow-x-auto">
                  <pre className="text-sm">
                    <code>{topic.codeExample}</code>
                  </pre>
                </div>

                {/* Read more */}
                <div className="mt-4">
                  <Button
                    onClick={() => toggleTopic(topic.id)}
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    <BookOpen className="h-4 w-4 mr-2" />
                    {language === 'ar' ? 'اقرأ المزيد' : 'Read More'}
                    {expandedTopics.has(topic.id) ? (
                      <ChevronUp className="h-4 w-4 ml-2" />
                    ) : (
                      <ChevronDown className="h-4 w-4 ml-2" />
                    )}
                  </Button>

                  {expandedTopics.has(topic.id) && (
                    <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 p-6 rounded">
                      <h4 className="font-semibold mb-2">
                        {language === 'ar' ? 'الشرح' : 'Explanation'}
                      </h4>
                      <p className="mb-4">
                        {language === 'ar'
                          ? topic.explanationAr
                          : topic.explanation}
                      </p>

                      {topic.resources && (
                        <>
                          <h5 className="font-semibold mb-2">
                            {language === 'ar'
                              ? topic.resources.titleAr
                              : topic.resources.title}
                          </h5>
                          <ul className="list-disc pl-5 space-y-1">
                            {topic.resources.links.map((link, i) => (
                              <li key={i}>
                                <a
                                  href={link.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-600 underline inline-flex items-center"
                                >
                                  {link.label}
                                  <ExternalLink className="h-3 w-3 ml-1" />
                                </a>
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                    </div>
                  )}
                </div>

                {/* Action */}
                <div className="mt-4">
                  <Button variant="outline">
                    <Code className="h-4 w-4 mr-2" />
                    {language === 'ar' ? 'جرب الكود' : 'Try the code'}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
