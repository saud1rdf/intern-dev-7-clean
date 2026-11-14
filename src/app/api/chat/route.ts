import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { message, language, conversationHistory } = await request.json()

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 })
    }

    const apiKey = process.env.GEMINI_API_KEY
    if (!apiKey) {
      return NextResponse.json({ error: 'GEMINI_API_KEY is missing' }, { status: 500 })
    }

    const systemPrompt = language === 'ar'
      ? `أنت مساعد برمجي عملي. جاوب بشكل مباشر وأعطِ الكود أولاً.`
      : `You are a practical programming assistant. Answer directly and give code first.`

    const contents = [
      { role: 'user', parts: [{ text: systemPrompt }] },
      { role: 'model', parts: [{ text: 'OK' }] },
      ...((conversationHistory || []).slice(-6).map((msg: any) => ({
        role: msg.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: msg.content || '' }]
      }))),
      { role: 'user', parts: [{ text: message }] }
    ]

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents,
        generationConfig: { temperature: 0.4, maxOutputTokens: 800 }
      })
    })

    const rawText = await response.text()

    if (!response.ok) {
      console.error('Gemini error status:', response.status)
      console.error('Gemini error body:', rawText)
      return NextResponse.json({
        error: 'Gemini API failed',
        status: response.status,
        details: rawText.slice(0, 500)
      }, { status: 500 })
    }

    const data = JSON.parse(rawText)
    const aiResponse = data.candidates?.[0]?.content?.parts?.[0]?.text

    if (!aiResponse) {
      return NextResponse.json({
        error: 'Empty response from Gemini',
        raw: rawText.slice(0, 500)
      }, { status: 500 })
    }

    return NextResponse.json({ response: aiResponse })

  } catch (error: any) {
    console.error('Chat route crash:', error)
    return NextResponse.json({
      error: 'Server crash',
      message: error?.message || String(error)
    }, { status: 500 })
  }
}
