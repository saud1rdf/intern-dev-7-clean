'use client'

import { useLanguage } from '@/components/providers/LanguageProvider'
import { BookOpen, Code, MessageCircle, Search, Globe, Shield } from 'lucide-react'

export default function Features() {
  const { language, t } = useLanguage()

  const features = [
    {
      icon: BookOpen,
      title: t('features.docs'),
      description: language === 'ar' 
        ? 'وثائق شاملة مع أمثلة عملية من أفضل المصادر التقنية'
        : 'Comprehensive documentation with practical examples from top technical sources',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20'
    },
    {
      icon: Code,
      title: t('features.playground'),
      description: language === 'ar'
        ? 'ملعب برمجي متقدم يدعم Java و Python مع تشغيل مباشر'
        : 'Advanced code playground supporting Java and Python with live execution',
      color: 'text-green-600',
      bgColor: 'bg-green-50 dark:bg-green-900/20'
    },
    {
      icon: MessageCircle,
      title: t('features.chatbot'),
      description: language === 'ar'
        ? 'معلم ذكي مدعوم بالذكاء الاصطناعي لتوجيهك خطوة بخطوة'
        : 'AI-powered intelligent tutor to guide you step by step',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20'
    },
    {
      icon: Search,
      title: t('features.search'),
      description: language === 'ar'
        ? 'بحث ذكي ومتقدم للعثور على المحتوى المناسب بسرعة'
        : 'Smart and advanced search to quickly find relevant content',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20'
    },
    {
      icon: Globe,
      title: language === 'ar' ? 'دعم ثنائي اللغة' : 'Bilingual Support',
      description: language === 'ar'
        ? 'واجهة كاملة باللغتين العربية والإنجليزية'
        : 'Complete interface in both Arabic and English',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50 dark:bg-indigo-900/20'
    },
    {
      icon: Shield,
      title: language === 'ar' ? 'آمن ومحمي' : 'Secure & Protected',
      description: language === 'ar'
        ? 'حماية كاملة للبيانات مع تشفير متقدم'
        : 'Complete data protection with advanced encryption',
      color: 'text-red-600',
      bgColor: 'bg-red-50 dark:bg-red-900/20'
    }
  ]

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 ${
            language === 'ar' ? 'font-arabic' : 'font-english'
          }`}>
            {t('features.title')}
          </h2>
          <p className={`text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto ${
            language === 'ar' ? 'font-arabic' : 'font-english'
          }`}>
            {language === 'ar' 
              ? 'منصة شاملة تجمع بين أفضل أدوات التعلم التقني'
              : 'A comprehensive platform combining the best technical learning tools'
            }
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl ${feature.bgColor} hover:shadow-lg transition-all duration-300 group`}
            >
              <div className={`inline-flex p-3 rounded-lg ${feature.bgColor} mb-4`}>
                <feature.icon className={`h-6 w-6 ${feature.color}`} />
              </div>
              <h3 className={`text-xl font-semibold text-gray-900 dark:text-white mb-3 ${
                language === 'ar' ? 'font-arabic' : 'font-english'
              }`}>
                {feature.title}
              </h3>
              <p className={`text-gray-600 dark:text-gray-300 ${
                language === 'ar' ? 'font-arabic' : 'font-english'
              }`}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
