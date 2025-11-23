'use client'

import { useLanguage } from '@/components/providers/LanguageProvider'
import { Button } from '@/components/ui/Button'
import { ArrowRight, Code, BookOpen, Zap } from 'lucide-react'

export default function Hero() {
  const { language, t } = useLanguage()

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-700 text-white">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${
            language === 'ar' ? 'font-arabic' : 'font-english'
          }`}>
            {t('hero.title')}
          </h1>
          <p className={`text-xl md:text-2xl mb-8 max-w-3xl mx-auto ${
            language === 'ar' ? 'font-arabic' : 'font-english'
          }`}>
            {t('hero.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg"
            >
              {t('hero.cta')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center p-6 bg-white/10 rounded-lg backdrop-blur-sm">
              <BookOpen className="h-12 w-12 mb-4" />
              <h3 className={`text-lg font-semibold mb-2 ${
                language === 'ar' ? 'font-arabic' : 'font-english'
              }`}>
                {t('features.docs')}
              </h3>
              <p className={`text-sm opacity-90 text-center ${
                language === 'ar' ? 'font-arabic' : 'font-english'
              }`}>
                Comprehensive guides with code examples
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-white/10 rounded-lg backdrop-blur-sm">
              <Code className="h-12 w-12 mb-4" />
              <h3 className={`text-lg font-semibold mb-2 ${
                language === 'ar' ? 'font-arabic' : 'font-english'
              }`}>
                {t('features.playground')}
              </h3>
              <p className={`text-sm opacity-90 text-center ${
                language === 'ar' ? 'font-arabic' : 'font-english'
              }`}>
                Practice Java and Python code online
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-white/10 rounded-lg backdrop-blur-sm">
              <Zap className="h-12 w-12 mb-4" />
              <h3 className={`text-lg font-semibold mb-2 ${
                language === 'ar' ? 'font-arabic' : 'font-english'
              }`}>
                {t('features.chatbot')}
              </h3>
              <p className={`text-sm opacity-90 text-center ${
                language === 'ar' ? 'font-arabic' : 'font-english'
              }`}>
                AI-powered learning assistant
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
