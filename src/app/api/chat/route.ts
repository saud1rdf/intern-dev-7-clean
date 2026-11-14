import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { message, language, conversationHistory } = await request.json()

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      )
    }

    const apiKey = process.env.GEMINI_API_KEY
    if (!apiKey) {
      return NextResponse.json(
        { error: 'Gemini API key not configured' },
        { status: 500 }
      )
    }

    const systemPrompt = language === 'ar' 
      ? `أنت مساعد برمجي عملي. مهمتك مساعدة المتدربين في حل المشاكل التقنية بسرعة.

قواعد:
- جاوب بشكل مباشر وواضح
- قدم الكود الجاهز للنسخ أولاً
- اشرح التعديلات المطلوبة باختصار
- لا تطرح أسئلة إلا إذا كان السؤال غير واضح تماماً
- ركز على الحل العملي
- استخدم العربية مع المصطلحات الإنجليزية عند الحاجة`
      : `You are a practical programming assistant. Your job is to help interns solve technical problems quickly.

Rules:
- Answer directly and clearly
- Give ready-to-copy code first
- Briefly explain what to modify
- Do not ask questions unless the request is completely unclear
- Focus on practical solutions
- Keep responses concise and useful`

    const contents = [
      {
        role: 'user',
        parts: [{ text: systemPrompt }]
      },
      {
        role: 'model',
        parts: [{ text: 'Understood. I will give direct, practical answers with code.' }]
      },
      ...conversationHistory.slice(-8).map((msg: any) => ({
        role: msg.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: msg.content }]
      })),
      {
        role: 'user',
        parts: [{ text: message }]
      }
    ]

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents,
          generationConfig: {
            temperature: 0.4,
            maxOutputTokens: 1200,
          },
        }),
      }
    )

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Gemini API error:', response.status, errorText)
      throw new Error(`Gemini API error: ${response.status}`)
    }

    const data = await response.json()
    const aiResponse = data.candidates?.[0]?.content?.parts?.[0]?.text

    if (!aiResponse) {
      throw new Error('No response from Gemini')
    }

    return NextResponse.json({ response: aiResponse })

  } catch (error) {
    console.error('Chat API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
