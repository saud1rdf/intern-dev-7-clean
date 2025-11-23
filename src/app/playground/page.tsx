'use client'

import { useState } from 'react'
import { useLanguage } from '@/components/providers/LanguageProvider'
import { Button } from '@/components/ui/Button'
import { Play, Trash2, Copy, Download } from 'lucide-react'
import dynamic from 'next/dynamic'

// Dynamically import Monaco Editor to avoid SSR issues
const MonacoEditor = dynamic(() => import('@monaco-editor/react'), {
  ssr: false,
  loading: () => <div className="h-96 bg-gray-100 dark:bg-gray-800 animate-pulse rounded-lg"></div>
})

const defaultCode = {
  java: `public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
        
        // Example: Calculate factorial
        int number = 5;
        int factorial = calculateFactorial(number);
        System.out.println("Factorial of " + number + " is: " + factorial);
    }
    
    public static int calculateFactorial(int n) {
        if (n <= 1) {
            return 1;
        }
        return n * calculateFactorial(n - 1);
    }
}`,
  python: `def hello_world():
    print("Hello, World!")
    
    # Example: Calculate factorial
    number = 5
    factorial = calculate_factorial(number)
    print(f"Factorial of {number} is: {factorial}")

def calculate_factorial(n):
    if n <= 1:
        return 1
    return n * calculate_factorial(n - 1)

if __name__ == "__main__":
    hello_world()`
}

export default function Playground() {
  const { language, t } = useLanguage()
  const [selectedLanguage, setSelectedLanguage] = useState<'java' | 'python'>('java')
  const [code, setCode] = useState(defaultCode.java)
  const [output, setOutput] = useState('')
  const [isRunning, setIsRunning] = useState(false)

  const handleLanguageChange = (lang: 'java' | 'python') => {
    setSelectedLanguage(lang)
    setCode(defaultCode[lang])
    setOutput('')
  }

  const runCode = async () => {
    setIsRunning(true)
    setOutput('')

    try {
      // Simulate code execution (in a real app, you'd call a backend service)
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      if (selectedLanguage === 'java') {
        setOutput(`Hello, World!
Factorial of 5 is: 120`)
      } else {
        setOutput(`Hello, World!
Factorial of 5 is: 120`)
      }
    } catch (error) {
      setOutput('Error: ' + (error as Error).message)
    } finally {
      setIsRunning(false)
    }
  }

  const clearCode = () => {
    setCode('')
    setOutput('')
  }

  const copyCode = () => {
    navigator.clipboard.writeText(code)
  }

  const downloadCode = () => {
    const extension = selectedLanguage === 'java' ? 'java' : 'py'
    const blob = new Blob([code], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `code.${extension}`
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className={`text-3xl font-bold text-gray-900 dark:text-white mb-4 ${
            language === 'ar' ? 'font-arabic' : 'font-english'
          }`}>
            {t('playground.title')}
          </h1>
          <p className={`text-lg text-gray-600 dark:text-gray-300 ${
            language === 'ar' ? 'font-arabic' : 'font-english'
          }`}>
            {language === 'ar' 
              ? 'جرب الكود مباشرة في المتصفح مع دعم Java و Python'
              : 'Try code directly in the browser with Java and Python support'
            }
          </p>
        </div>

        {/* Language Selector */}
        <div className="mb-6">
          <div className="flex space-x-2">
            <Button
              variant={selectedLanguage === 'java' ? 'default' : 'outline'}
              onClick={() => handleLanguageChange('java')}
            >
              Java
            </Button>
            <Button
              variant={selectedLanguage === 'python' ? 'default' : 'outline'}
              onClick={() => handleLanguageChange('python')}
            >
              Python
            </Button>
          </div>
        </div>

        {/* Code Editor and Output */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Code Editor */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className={`text-lg font-semibold text-gray-900 dark:text-white ${
                language === 'ar' ? 'font-arabic' : 'font-english'
              }`}>
                {language === 'ar' ? 'محرر الكود' : 'Code Editor'}
              </h3>
              <div className="flex space-x-2">
                <Button
                  size="sm"
                  onClick={runCode}
                  disabled={isRunning || !code.trim()}
                  className="bg-green-600 hover:bg-green-700"
                >
                  <Play className="h-4 w-4 mr-1" />
                  {t('playground.run')}
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={copyCode}
                >
                  <Copy className="h-4 w-4" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={downloadCode}
                >
                  <Download className="h-4 w-4" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={clearCode}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden">
              <MonacoEditor
                height="400px"
                language={selectedLanguage}
                value={code}
                onChange={(value) => setCode(value || '')}
                theme="vs-dark"
                options={{
                  fontSize: 14,
                  minimap: { enabled: false },
                  scrollBeyondLastLine: false,
                  automaticLayout: true,
                }}
              />
            </div>
          </div>

          {/* Output */}
          <div className="space-y-4">
            <h3 className={`text-lg font-semibold text-gray-900 dark:text-white ${
              language === 'ar' ? 'font-arabic' : 'font-english'
            }`}>
              {language === 'ar' ? 'النتائج' : 'Output'}
            </h3>
            <div className="bg-gray-900 text-green-400 p-4 rounded-lg h-96 overflow-y-auto font-mono text-sm">
              {isRunning ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-green-400 mr-2"></div>
                  {language === 'ar' ? 'جاري التشغيل...' : 'Running...'}
                </div>
              ) : output ? (
                <pre className="whitespace-pre-wrap">{output}</pre>
              ) : (
                <div className="text-gray-500">
                  {language === 'ar' 
                    ? 'اضغط "تشغيل الكود" لرؤية النتائج هنا'
                    : 'Click "Run Code" to see results here'
                  }
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Tips */}
        <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          <h4 className={`text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3 ${
            language === 'ar' ? 'font-arabic' : 'font-english'
          }`}>
            {language === 'ar' ? 'نصائح مفيدة' : 'Helpful Tips'}
          </h4>
          <ul className={`space-y-2 text-blue-800 dark:text-blue-200 ${
            language === 'ar' ? 'font-arabic' : 'font-english'
          }`}>
            <li>• {language === 'ar' ? 'استخدم Ctrl+Space للحصول على اقتراحات الكود' : 'Use Ctrl+Space for code suggestions'}</li>
            <li>• {language === 'ar' ? 'اضغط Ctrl+/ لإضافة تعليق' : 'Press Ctrl+/ to add comments'}</li>
            <li>• {language === 'ar' ? 'استخدم Tab لإضافة مسافات بذكاء' : 'Use Tab for smart indentation'}</li>
            <li>• {language === 'ar' ? 'يمكنك نسخ الكود أو تحميله كملف' : 'You can copy code or download it as a file'}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
