import { NextRequest, NextResponse } from 'next/server'

const MODELS = [
  'gemini-3.5-flash-lite',
  'gemini-3.1-flash-lite',
  'gemini-3.6-flash',
  'gemini-3.8-flash',
]

export async function POST(request: NextRequest) {
  try {
    const { message, language, conversationHistory } = await request.json()

    if (!message || typeof message !== 'string') {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 })
    }

    const apiKey = process.env.GEMINI_API_KEY
    if (!apiKey) {
      return NextResponse.json({ error: 'GEMINI_API_KEY is missing in Vercel' }, { status: 500 })
    }

    const systemPrompt = language === 'ar'
      ? 'You are a practical programming tutor. Answer in Arabic. Be direct. Put ready-to-copy code first, then a short explanation of what to change. Do not ask questions unless the request is impossible to understand.'
      : 'You are a practical programming tutor. Answer directly. Put ready-to-copy code first, then a short explanation of what to change. Do not ask questions unless the request is impossible to understand.'

    const history = Array.isArray(conversationHistory) ? conversationHistory : []
    const contents: Array<{ role: 'user' | 'model'; parts: Array<{ text: string }> }> = []

    for (const msg of history.slice(-8)) {
      const text = typeof msg?.content === 'string' ? msg.content.trim() : ''
      if (!text) continue
      const role: 'user' | 'model' = msg.role === 'assistant' ? 'model' : 'user'
      const last = contents[contents.length - 1]
      if (last && last.role === role) {
        last.parts[0].text += '\n' + text
      } else {
        contents.push({ role, parts: [{ text }] })
      }
    }

    while (contents[0]?.role === 'model') contents.shift()

    const last = contents[contents.length - 1]
    if (last?.role === 'user') {
      last.parts[0].text += '\n' + message
    } else {
      contents.push({ role: 'user', parts: [{ text: message }] })
    }

    const body = JSON.stringify({
      system_instruction: { parts: [{ text: systemPrompt }] },
      contents,
    })

    const failures: string[] = []

    for (const model of MODELS) {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-goog-api-key': apiKey,
          },
          body,
        }
      )

      const rawText = await response.text()

      if (!response.ok) {
        failures.push(`${model}: ${response.status} ${rawText.slice(0, 180)}`)
        if (response.status === 401 || response.status === 403) {
          return NextResponse.json({
            error: 'Gemini rejected the API key. Create a new key in Google AI Studio and replace GEMINI_API_KEY in Vercel.',
            details: failures.join(' | '),
          }, { status: 500 })
        }
        continue
      }

      let data: any
      try {
        data = JSON.parse(rawText)
      } catch {
        failures.push(`${model}: invalid JSON`)
        continue
      }

      const aiResponse = data.candidates?.[0]?.content?.parts
        ?.map((part: { text?: string }) => part.text || '')
        .join('')
        .trim()

      if (aiResponse) {
        return NextResponse.json({ response: aiResponse, model })
      }

      failures.push(`${model}: empty candidates`)
    }

    return NextResponse.json({
      error: 'All Gemini models failed. Try again in a minute.',
      details: failures.join(' | '),
    }, { status: 500 })
  } catch (error: any) {
    return NextResponse.json({ error: error?.message || 'Server error' }, { status: 500 })
  }
}
