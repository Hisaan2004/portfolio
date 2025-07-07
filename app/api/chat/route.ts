import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { generateText } from 'ai';
import { NextResponse } from 'next/server';

const google = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_API_KEY || '',
});

export async function POST(req: Request) {
  try {
    const { messages  } = await req.json();

    const result = await generateText({
      model: google('models/gemini-1.5-flash-latest'),
      messages: messages,
    });

    const reply = result.text || '[No reply]';

    return NextResponse.json({ response: reply });

  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : String(err);
    console.error('Error:', errorMessage);
    return NextResponse.json({ response: 'Internal server error' }, { status: 500 });
  }
}

