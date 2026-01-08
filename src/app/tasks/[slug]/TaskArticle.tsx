'use client'

import { useState } from 'react'
import { useLanguage } from '@/components/providers/LanguageProvider'
import { Button } from '@/components/ui/Button'
import { ArrowLeft, BookOpen, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface TaskArticleProps {
  content: string
  slug: string
}

export default function TaskArticle({ content, slug }: TaskArticleProps) {
  const { language } = useLanguage()
  const [showReadMore, setShowReadMore] = useState(false)

  // Extract "Further Reading" section from markdown
  const extractFurtherReading = (markdown: string): string | null => {
    const furtherReadingMatch = markdown.match(/## Further Reading([\s\S]*?)(?=##|$)/i)
    if (furtherReadingMatch) {
      return furtherReadingMatch[1].trim()
    }
    return null
  }

  // Extract main content (everything except Further Reading)
  const extractMainContent = (markdown: string): string => {
    return markdown.replace(/## Further Reading[\s\S]*$/i, '').trim()
  }

  const furtherReading = extractFurtherReading(content)
  const mainContent = extractMainContent(content)

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <nav className="mb-8">
        <Link 
          href="/docs" 
          className="flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          {language === 'ar' ? 'العودة إلى الوثائق' : 'Back to Documentation'}
        </Link>
      </nav>

      {/* Article Content */}
      <article className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 md:p-8">
        <div 
          className={`prose prose-lg dark:prose-invert max-w-none ${
            language === 'ar' ? 'font-arabic' : 'font-english'
          }`}
        >
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              code({ node, inline, className, children, ...props }: any) {
                const match = /language-(\w+)/.exec(className || '')
                if (!inline && match) {
                  // Use a simple code block for client-side rendering
                  return (
                    <div className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto my-4">
                      <pre className="text-sm">
                        <code>{String(children).replace(/\n$/, '')}</code>
                      </pre>
                    </div>
                  )
                }
                return (
                  <code className={`${className} bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm`} {...props}>
                    {children}
                  </code>
                )
              },
              h1: ({ node, ...props }) => (
                <h1 
                  className="text-3xl font-bold text-gray-900 dark:text-white mt-8 mb-4 first:mt-0" 
                  {...props} 
                />
              ),
              h2: ({ node, ...props }) => (
                <h2 
                  className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4" 
                  {...props} 
                />
              ),
              h3: ({ node, ...props }) => (
                <h3 
                  className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3" 
                  {...props} 
                />
              ),
              p: ({ node, ...props }) => (
                <p 
                  className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed" 
                  {...props} 
                />
              ),
              ul: ({ node, ...props }) => (
                <ul 
                  className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-2 ml-4" 
                  {...props} 
                />
              ),
              ol: ({ node, ...props }) => (
                <ol 
                  className="list-decimal list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-2 ml-4" 
                  {...props} 
                />
              ),
              li: ({ node, ...props }) => (
                <li 
                  className="text-gray-700 dark:text-gray-300" 
                  {...props} 
                />
              ),
              strong: ({ node, ...props }) => (
                <strong 
                  className="font-semibold text-gray-900 dark:text-white" 
                  {...props} 
                />
              ),
              a: ({ node, ...props }: any) => (
                <a 
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline" 
                  target="_blank"
                  rel="noopener noreferrer"
                  {...props} 
                />
              ),
              blockquote: ({ node, ...props }) => (
                <blockquote 
                  className="border-l-4 border-blue-500 pl-4 italic text-gray-600 dark:text-gray-400 my-4" 
                  {...props} 
                />
              ),
            }}
          >
            {mainContent}
          </ReactMarkdown>
        </div>

        {/* Read More Section */}
        {furtherReading && (
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Button
              onClick={() => setShowReadMore(!showReadMore)}
              className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white"
            >
              <BookOpen className="h-4 w-4 mr-2" />
              {language === 'ar' ? 'اقرأ المزيد' : 'Read More'}
              {showReadMore ? (
                <ChevronUp className="h-4 w-4 ml-2" />
              ) : (
                <ChevronDown className="h-4 w-4 ml-2" />
              )}
            </Button>

            {showReadMore && (
              <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
                <h3 className={`text-xl font-semibold text-blue-900 dark:text-blue-100 mb-4 ${
                  language === 'ar' ? 'font-arabic' : 'font-english'
                }`}>
                  {language === 'ar' ? 'المصادر والمراجع الإضافية' : 'Further Reading & Sources'}
                </h3>
                <div 
                  className={`prose prose-lg dark:prose-invert max-w-none ${
                    language === 'ar' ? 'font-arabic' : 'font-english'
                  }`}
                >
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                      ul: ({ node, ...props }) => (
                        <ul 
                          className="list-disc list-inside text-blue-800 dark:text-blue-200 space-y-2" 
                          {...props} 
                        />
                      ),
                      li: ({ node, ...props }) => (
                        <li className="text-blue-800 dark:text-blue-200" {...props} />
                      ),
                      a: ({ node, ...props }: any) => (
                        <a 
                          className="text-blue-700 hover:text-blue-900 dark:text-blue-300 dark:hover:text-blue-100 underline inline-flex items-center" 
                          target="_blank"
                          rel="noopener noreferrer"
                          {...props}
                        >
                          {props.children}
                          <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                      ),
                    }}
                  >
                    {furtherReading}
                  </ReactMarkdown>
                </div>
              </div>
            )}
          </div>
        )}
      </article>
    </div>
  )
}

