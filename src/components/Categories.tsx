'use client'

import { useLanguage } from '@/components/providers/LanguageProvider'
import { Button } from '@/components/ui/Button'
import { 
  Globe, 
  Zap, 
  GitBranch, 
  Bug, 
  Brain, 
  Database,
  ArrowRight 
} from 'lucide-react'

export default function Categories() {
  const { language, t } = useLanguage()

  const categories = [
    {
      icon: Globe,
      title: t('categories.web'),
      description: language === 'ar' 
        ? 'تعلم تطوير الويب باستخدام React, Next.js, HTML, CSS, JavaScript'
        : 'Learn web development with React, Next.js, HTML, CSS, JavaScript',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      href: '/docs/web-development'
    },
    {
      icon: Zap,
      title: t('categories.api'),
      description: language === 'ar'
        ? 'تكامل واجهات برمجة التطبيقات مع REST APIs و GraphQL'
        : 'API integration with REST APIs and GraphQL',
      color: 'text-green-600',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      href: '/docs/api-integration'
    },
    {
      icon: GitBranch,
      title: t('categories.git'),
      description: language === 'ar'
        ? 'إدارة الكود باستخدام Git و GitHub و GitLab'
        : 'Code management with Git, GitHub, and GitLab',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      href: '/docs/version-control'
    },
    {
      icon: Bug,
      title: t('categories.testing'),
      description: language === 'ar'
        ? 'الاختبار والتشخيص باستخدام Jest, Cypress, و أدوات أخرى'
        : 'Testing and debugging with Jest, Cypress, and other tools',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
      href: '/docs/testing-debugging'
    },
    {
      icon: Brain,
      title: t('categories.algorithms'),
      description: language === 'ar'
        ? 'فهم الخوارزميات الأساسية والمتقدمة'
        : 'Understanding basic and advanced algorithms',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50 dark:bg-indigo-900/20',
      href: '/docs/algorithms'
    },
    {
      icon: Database,
      title: t('categories.data'),
      description: language === 'ar'
        ? 'هياكل البيانات الأساسية والمتقدمة'
        : 'Basic and advanced data structures',
      color: 'text-red-600',
      bgColor: 'bg-red-50 dark:bg-red-900/20',
      href: '/docs/data-structures'
    }
  ]

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 ${
            language === 'ar' ? 'font-arabic' : 'font-english'
          }`}>
            {t('categories.title')}
          </h2>
          <p className={`text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto ${
            language === 'ar' ? 'font-arabic' : 'font-english'
          }`}>
            {language === 'ar'
              ? 'اختر المجال الذي تريد التعلم فيه'
              : 'Choose the field you want to learn about'
            }
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl ${category.bgColor} hover:shadow-lg transition-all duration-300 group cursor-pointer`}
            >
              <div className={`inline-flex p-3 rounded-lg ${category.bgColor} mb-4`}>
                <category.icon className={`h-6 w-6 ${category.color}`} />
              </div>
              <h3 className={`text-xl font-semibold text-gray-900 dark:text-white mb-3 ${
                language === 'ar' ? 'font-arabic' : 'font-english'
              }`}>
                {category.title}
              </h3>
              <p className={`text-gray-600 dark:text-gray-300 mb-4 ${
                language === 'ar' ? 'font-arabic' : 'font-english'
              }`}>
                {category.description}
              </p>
              <Button 
                variant="outline" 
                className="group-hover:bg-white group-hover:text-gray-900 transition-colors"
              >
                {language === 'ar' ? 'ابدأ التعلم' : 'Start Learning'}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
