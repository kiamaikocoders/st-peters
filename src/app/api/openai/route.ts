import { NextResponse } from 'next/server';
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export async function POST(request: Request) {
  try {
    const { prompt } = await request.json();

    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: prompt,
      max_tokens: 150,
    });

    if (response.data && response.data.choices && response.data.choices[0]) {
      return NextResponse.json({ result: response.data.choices[0].text.trim() });
    } else {
      throw new Error('Unexpected API response');
    }
  } catch (error) {
    console.error('OpenAI API error:', error);
    return NextResponse.json({ error: 'An error occurred while processing your request' }, { status: 500 });
  }
}

