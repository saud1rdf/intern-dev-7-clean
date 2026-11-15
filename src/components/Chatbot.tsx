'use client'

import { useState, useRef, useEffect } from 'react'
import { useLanguage } from '@/components/providers/LanguageProvider'
import { Button } from '@/components/ui/Button'
import { MessageCircle, X, Send, Bot } from 'lucide-react'

interface Message {
  id: string
  content: string
  role: 'user' | 'assistant'
}

export default function Chatbot() {
  const { language, t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: language === 'ar'
        ? 'مرحباً! اكتب المهمة وبعطيك الكود.'
        : 'Hello. Describe the task and I will give you the code.',
      role: 'assistant'
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const listRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = listRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [messages, isLoading, isOpen])

  const sendMessage = async () => {
    const text = inputValue.trim()
    if (!text || isLoading) return

    const history = messages
    setMessages(prev => [...prev, { id: Date.now().toString(), content: text, role: 'user' }])
    setInputValue('')
    setIsLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text, language, conversationHistory: history }),
      })

      const raw = await response.text()
      let data: { response?: string; error?: string } = {}
      try {
        data = JSON.parse(raw)
      } catch {
        data = { error: raw.slice(0, 180) }
      }

      const fallback = language === 'ar'
        ? 'عذراً، ما قدرت أجيب رد. حاول مرة ثانية.'
        : 'Sorry, I could not get a reply. Try again.'

      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        content: (data.response || data.error || fallback).trim() || fallback,
        role: 'assistant'
      }])
    } catch {
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        content: language === 'ar'
          ? 'عذراً، الاتصال انقطع. حاول مرة ثانية.'
          : 'Connection failed. Try again.',
        role: 'assistant'
      }])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="chatbot-container">
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="rounded-full p-4 bg-gray-800 hover:bg-gray-700 text-white shadow-lg dark:bg-gray-200 dark:text-gray-900 dark:hover:bg-gray-300"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}

      {isOpen && (
        <div className="chatbot-window">
          <div className="bg-gray-800 text-white p-4 flex items-center justify-between shrink-0 dark:bg-gray-200 dark:text-gray-900">
            <div className="flex items-center">
              <Bot className="h-5 w-5 mr-2" />
              <h3 className="font-semibold">{t('chatbot.title')}</h3>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-gray-700 p-1 dark:text-gray-900 dark:hover:bg-gray-300"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          <div className="chat-messages" ref={listRef}>
            {messages.map((message) => (
              <div key={message.id} className={`chat-bubble ${message.role}`}>
                {message.content}
              </div>
            ))}
            {isLoading && (
              <div className="chat-bubble assistant">...</div>
            )}
          </div>

          <div className="p-3 border-t shrink-0 bg-white dark:bg-gray-800">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault()
                    sendMessage()
                  }
                }}
                placeholder={t('chatbot.placeholder')}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-gray-900 bg-white dark:bg-gray-700 dark:text-white dark:border-gray-600"
                disabled={isLoading}
              />
              <Button
                onClick={sendMessage}
                disabled={!inputValue.trim() || isLoading}
                className="bg-gray-800 hover:bg-gray-700 text-white dark:bg-gray-200 dark:text-gray-900 dark:hover:bg-gray-300"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
