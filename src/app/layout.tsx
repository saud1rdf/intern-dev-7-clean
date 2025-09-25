import type { Metadata } from 'next'
import { Inter, Cairo } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/components/providers/LanguageProvider'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import Chatbot from '@/components/Chatbot'
import Analytics from '@/components/Analytics'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const cairo = Cairo({
  subsets: ['arabic'],
  variable: '--font-cairo',
})

export const metadata: Metadata = {
  title: 'Intern.dev - Technical Training Platform',
  description: 'Bilingual platform for training computer science interns and new employees on technical tasks',
  keywords: ['internship', 'training', 'programming', 'computer science', 'development'],
  authors: [{ name: 'Intern.dev Team' }],
  openGraph: {
    title: 'Intern.dev - Technical Training Platform',
    description: 'Bilingual platform for training computer science interns and new employees',
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'ar_SA',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${cairo.variable} antialiased`}>
        <Analytics />
        <ThemeProvider>
          <LanguageProvider>
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
              {children}
              <Chatbot />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}


