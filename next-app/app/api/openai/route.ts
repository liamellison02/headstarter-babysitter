import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";

const openai = new OpenAI({apiKey: process.env.OPENAI_API_KEY || ''});

export const runtime = 'edge';

export async function POST(req: Request, res: Response) {
  const { messages } = await req.json();
  console.log('messages: ', messages);

  const response = await openai.chat.completions.create({
    model: 'gpt-4.0-turbo',
    messages: [{
        role: 'system',
        content: 'You are a helpful assistant.',
        }, ...messages
    ],
    stream: true,
    temperature: 1,
  });
}