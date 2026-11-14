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
      ? `أنت معلم ذكي متخصص في البرمجة وعلوم الحاسوب. مهمتك هي مساعدة المتدربين والموظفين الجدد في تعلم المهارات التقنية. 
      
      قواعد مهمة:
      - اشرح المفاهيم بطريقة واضحة ومبسطة
      - قدم أمثلة عملية على الكود
      - شجع المتعلم على التفكير والاستكشاف
      - اطرح أسئلة تفاعلية لاختبار الفهم
      - استخدم المصطلحات التقنية باللغتين العربية والإنجليزية
      - كن صبوراً ومشجعاً
      
      إذا كان السؤال غير واضح، اطلب توضيحاً إضافياً.`
      : `You are an intelligent tutor specialized in programming and computer science. Your task is to help interns and new employees learn technical skills.
      
      Important rules:
      - Explain concepts clearly and simply
      - Provide practical code examples
      - Encourage learners to think and explore
      - Ask interactive questions to test understanding
      - Use technical terms in both English and Arabic when relevant
      - Be patient and encouraging
      
      If the question is unclear, ask for additional clarification.`

    // Build conversation for Gemini
    const contents = [
      {
        role: 'user',
        parts: [{ text: systemPrompt }]
      },
      {
        role: 'model',
        parts: [{ text: 'Understood. I will act as a helpful programming tutor.' }]
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
            temperature: 0.7,
            maxOutputTokens: 1000,
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
