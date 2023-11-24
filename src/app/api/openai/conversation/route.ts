import OpenAI from "openai";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const content = searchParams.get("content");

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    organization: process.env.ORGANIZATION_ID,
  });

  const completion = await openai.chat.completions.create({
    messages: [{ role: "user", content }],
    model: "gpt-4",
  });

  return Response.json({ completion });
}
