'use client'

import { useState } from 'react'
import { useLanguage } from '@/components/providers/LanguageProvider'
import Navigation from '@/components/Navigation'
import { Button } from '@/components/ui/Button'
import {
  BookOpen,
  Code,
  GitBranch,
  Bug,
  Brain,
  Database,
  Search,
  Filter,
  ArrowRight
} from 'lucide-react'

import Link from 'next/link'
import { missions } from './missions/data' // 👈 استيراد المهام

interface DocCategory {
  id: string
  title: string
  titleAr: string
  description: string
  descriptionAr: string
  icon: any
  color: string
  bgColor: string
  topics: string[]
  topicsAr: string[]
}

const docCategories: DocCategory[] = [
  {
    id: 'web-development',
    title: 'Web Development',
    titleAr: 'تطوير الويب',
    description:
      'Learn modern web development with React, Next.js, HTML, CSS, and JavaScript',
    descriptionAr:
      'تعلم تطوير الويب الحديث باستخدام React, Next.js, HTML, CSS, و JavaScript',
    icon: BookOpen,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50 dark:bg-blue-900/20',
    topics: [
      'React Basics',
      'Next.js Framework',
      'HTML & CSS',
      'JavaScript ES6+',
      'Responsive Design'
    ],
    topicsAr: [
      'أساسيات React',
      'إطار Next.js',
      'HTML & CSS',
      'JavaScript ES6+',
      'التصميم المتجاوب'
    ]
  },
  {
    id: 'api-integration',
    title: 'API Integration',
    titleAr: 'تكامل واجهات برمجة التطبيقات',
    description: 'Master API integration with REST APIs, GraphQL, and modern tools',
    descriptionAr: 'إتقان تكامل واجهات برمجة التطبيقات مع REST APIs و GraphQL',
    icon: Code,
    color: 'text-green-600',
    bgColor: 'bg-green-50 dark:bg-green-900/20',
    topics: ['REST APIs', 'GraphQL', 'Postman', 'API Testing', 'Authentication'],
    topicsAr: ['REST APIs', 'GraphQL', 'Postman', 'اختبار APIs', 'المصادقة']
  },
  {
    id: 'version-control',
    title: 'Version Control',
    titleAr: 'التحكم في الإصدارات',
    description: 'Learn Git, GitHub, and modern version control practices',
    descriptionAr: 'تعلم Git و GitHub وممارسات التحكم في الإصدارات الحديثة',
    icon: GitBranch,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50 dark:bg-purple-900/20',
    topics: ['Git Basics', 'GitHub Workflow', 'Branching', 'Merging', 'Collaboration'],
    topicsAr: ['أساسيات Git', 'سير عمل GitHub', 'الفروع', 'الدمج', 'التعاون']
  },
  {
    id: 'testing-debugging',
    title: 'Testing & Debugging',
    titleAr: 'الاختبار والتشخيص',
    description: 'Master testing strategies and debugging techniques',
    descriptionAr: 'إتقان استراتيجيات الاختبار وتقنيات التشخيص',
    icon: Bug,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50 dark:bg-orange-900/20',
    topics: [
      'Unit Testing',
      'Integration Testing',
      'Debugging Tools',
      'Error Handling',
      'Performance'
    ],
    topicsAr: [
      'اختبار الوحدة',
      'اختبار التكامل',
      'أدوات التشخيص',
      'معالجة الأخطاء',
      'الأداء'
    ]
  },
  {
    id: 'algorithms',
    title: 'Algorithms',
    titleAr: 'الخوارزميات',
    description: 'Understand fundamental and advanced algorithms',
    descriptionAr: 'فهم الخوارزميات الأساسية والمتقدمة',
    icon: Brain,
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50 dark:bg-indigo-900/20',
    topics: [
      'Sorting',
      'Searching',
      'Dynamic Programming',
      'Graph Algorithms',
      'Complexity Analysis'
    ],
    topicsAr: [
      'الترتيب',
      'البحث',
      'البرمجة الديناميكية',
      'خوارزميات الرسوم',
      'تحليل التعقيد'
    ]
  },
  {
    id: 'data-structures',
    title: 'Data Structures',
    titleAr: 'هياكل البيانات',
    description: 'Master essential data structures and their implementations',
    descriptionAr: 'إتقان هياكل البيانات الأساسية وتطبيقاتها',
    icon: Database,
    color: 'text-red-600',
    bgColor: 'bg-red-50 dark:bg-red-900/20',
    topics: ['Arrays', 'Linked Lists', 'Trees', 'Hash Tables', 'Graphs'],
    topicsAr: ['المصفوفات', 'القوائم المرتبطة', 'الأشجار', 'جداول التجزئة', 'الرسوم']
  }
]

export default function DocsPage() {
  const { language, t } = useLanguage()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const filteredCategories = docCategories.filter((category) => {
    const matchesSearch =
      searchQuery === '' ||
      category.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      category.titleAr.includes(searchQuery) ||
      category.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      category.descriptionAr.includes(searchQuery)

    const matchesCategory = selectedCategory === null || category.id === selectedCategory

    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
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
              ? 'دليل شامل لتعلم المهارات التقنية مع أمثلة عملية'
              : 'Comprehensive guide to learning technical skills with practical examples'}
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder={t('search.placeholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white ${
                  language === 'ar' ? 'font-arabic text-right' : 'font-english text-left'
                }`}
              />
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-gray-400" />
              <select
                value={selectedCategory || ''}
                onChange={(e) => setSelectedCategory(e.target.value || null)}
                className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              >
                <option value="">{language === 'ar' ? 'جميع الفئات' : 'All Categories'}</option>
                {docCategories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {language === 'ar' ? category.titleAr : category.title}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <Link key={category.id} href={`/docs/${category.id}`} className="block group">
              <div
                className={`p-6 rounded-xl ${category.bgColor} hover:shadow-lg transition-all duration-300 cursor-pointer`}
              >
                <div className={`inline-flex p-3 rounded-lg ${category.bgColor} mb-4`}>
                  <category.icon className={`h-6 w-6 ${category.color}`} />
                </div>

                <h3
                  className={`text-xl font-semibold text-gray-900 dark:text-white mb-3 ${
                    language === 'ar' ? 'font-arabic' : 'font-english'
                  }`}
                >
                  {language === 'ar' ? category.titleAr : category.title}
                </h3>

                <p
                  className={`text-gray-600 dark:text-gray-300 mb-4 ${
                    language === 'ar' ? 'font-arabic' : 'font-english'
                  }`}
                >
                  {language === 'ar' ? category.descriptionAr : category.description}
                </p>

                <div className="mb-4">
                  <h4
                    className={`text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 ${
                      language === 'ar' ? 'font-arabic' : 'font-english'
                    }`}
                  >
                    {language === 'ar' ? 'المواضيع المشمولة:' : 'Topics Covered:'}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {(language === 'ar' ? category.topicsAr : category.topics)
                      .slice(0, 3)
                      .map((topic, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-white dark:bg-gray-800 text-xs rounded-full text-gray-600 dark:text-gray-300"
                        >
                          {topic}
                        </span>
                      ))}
                    {(language === 'ar' ? category.topicsAr : category.topics).length > 3 && (
                      <span className="px-2 py-1 bg-white dark:bg-gray-800 text-xs rounded-full text-gray-600 dark:text-gray-300">
                        +
                        {(language === 'ar' ? category.topicsAr : category.topics).length - 3}{' '}
                        {language === 'ar' ? 'أكثر' : 'more'}
                      </span>
                    )}
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-full group-hover:bg-white group-hover:text-gray-900 transition-colors"
                >
                  {language === 'ar' ? 'ابدأ التعلم' : 'Start Learning'}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Link>
          ))}
        </div>

        {/* لا توجد نتائج بحث */}
        {filteredCategories.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p
              className={`text-gray-500 dark:text-gray-400 ${
                language === 'ar' ? 'font-arabic' : 'font-english'
              }`}
            >
              {language === 'ar'
                ? 'لم يتم العثور على نتائج مطابقة للبحث'
                : 'No results found matching your search'}
            </p>
          </div>
        )}

        {/* Missions section for interns */}
        <section className="mt-12 space-y-4" id="missions">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
            مهام تقنية متقدمة للمتدرّبين
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            اختر واحدة من المهام التالية وجرّب تنفيذها خطوة بخطوة، مع كود جاهز ومصدر تعليمي لكل
            مهمة.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {missions.slice(0, 6).map((mission) => (
              <Link
                key={mission.id}
                href={`/docs/missions/${mission.id}`}
                className="block rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900/60 p-5 hover:shadow-lg transition-all duration-200"
              >
                <p className="text-xs uppercase tracking-wide text-slate-400 mb-1">
                  {mission.category} • {mission.level}
                </p>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  {mission.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-3 line-clamp-3">
                  {mission.summary}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  يشمل كود جاهز + مصدر تعليمي
                </p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

