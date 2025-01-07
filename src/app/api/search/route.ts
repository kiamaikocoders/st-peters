import { NextResponse } from 'next/server';
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q');

  if (!query) {
    return NextResponse.json({ error: 'Query parameter is required' }, { status: 400 });
  }

  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `Search query about St. Peter's Berry School: ${query}\nRelevant results:`,
      max_tokens: 150,
      n: 3,
      stop: ["\n\n"],
    });

    const results = response.data.choices.map(choice => choice.text.trim());
    return NextResponse.json({ results });
  } catch (error) {
    console.error('OpenAI API error:', error);
    return NextResponse.json({ error: 'An error occurred while processing your request' }, { status: 500 });
  }
}

