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

    // Groq API key (free tier)
    const apiKey = process.env.GROQ_API_KEY
    if (!apiKey) {
      return NextResponse.json(
        { error: 'Groq API key not configured' },
        { status: 500 }
      )
    }

    // Prepare the conversation context
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

    const messages = [
      { role: 'system', content: systemPrompt },
      ...conversationHistory.slice(-10).map((msg: any) => ({
        role: msg.role,
        content: msg.content
      })),
      { role: 'user', content: message }
    ]

    // Call Groq API (OpenAI-compatible)
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: messages,
        max_tokens: 1000,
        temperature: 0.7,
      }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Groq API error:', response.status, errorText)
      throw new Error(`Groq API error: ${response.status}`)
    }

    const data = await response.json()
    const aiResponse = data.choices[0]?.message?.content

    if (!aiResponse) {
      throw new Error('No response from Groq')
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
