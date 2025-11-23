'use client'

import { createContext, useContext, useState, useEffect } from 'react'

type Language = 'en' | 'ar'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  en: {
    'nav.home': 'Home',
    'nav.docs': 'Documentation',
    'nav.playground': 'Code Playground',
    'nav.search': 'Search',
    'hero.title': 'Master Technical Skills',
    'hero.subtitle': 'Comprehensive training platform for computer science interns and new employees',
    'hero.cta': 'Start Learning',
    'features.title': 'Everything You Need to Succeed',
    'features.docs': 'Rich Documentation',
    'features.playground': 'Code Playground',
    'features.chatbot': 'AI Tutor',
    'features.search': 'Advanced Search',
    'categories.title': 'Learning Categories',
    'categories.web': 'Web Development',
    'categories.api': 'API Integration',
    'categories.git': 'Version Control',
    'categories.testing': 'Testing & Debugging',
    'categories.algorithms': 'Algorithms',
    'categories.data': 'Data Structures',
    'chatbot.title': 'AI Tutor',
    'chatbot.placeholder': 'Ask me anything about programming...',
    'playground.title': 'Code Playground',
    'playground.run': 'Run Code',
    'playground.clear': 'Clear',
    'search.placeholder': 'Search documentation...',
  },
  ar: {
    'nav.home': 'الرئيسية',
    'nav.docs': 'الوثائق',
    'nav.playground': 'ملعب الكود',
    'nav.search': 'البحث',
    'hero.title': 'إتقان المهارات التقنية',
    'hero.subtitle': 'منصة تدريب شاملة لمتدربي علوم الحاسوب والموظفين الجدد',
    'hero.cta': 'ابدأ التعلم',
    'features.title': 'كل ما تحتاجه للنجاح',
    'features.docs': 'وثائق غنية',
    'features.playground': 'ملعب الكود',
    'features.chatbot': 'معلم ذكي',
    'features.search': 'بحث متقدم',
    'categories.title': 'فئات التعلم',
    'categories.web': 'تطوير الويب',
    'categories.api': 'تكامل واجهات برمجة التطبيقات',
    'categories.git': 'التحكم في الإصدارات',
    'categories.testing': 'الاختبار والتشخيص',
    'categories.algorithms': 'الخوارزميات',
    'categories.data': 'هياكل البيانات',
    'chatbot.title': 'المعلم الذكي',
    'chatbot.placeholder': 'اسألني أي شيء عن البرمجة...',
    'playground.title': 'ملعب الكود',
    'playground.run': 'تشغيل الكود',
    'playground.clear': 'مسح',
    'search.placeholder': 'البحث في الوثائق...',
  }
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'ar')) {
      setLanguage(savedLanguage)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('language', language)
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = language
  }, [language])

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
