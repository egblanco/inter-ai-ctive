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

  //  return Response.json({ apiKey: process.env.OPENAI_API_KEY });

  //  const completion = await openai.chat.completions.create({
  //    model: "gpt-4-vision-preview",
  //    messages: [
  //      {
  //        role: "user",
  //        content: [
  //          { type: "text", text: "What’s in this image?" },
  //          {
  //            type: "image_url",
  //            image_url: {
  //              url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Gfp-wisconsin-madison-the-nature-boardwalk.jpg/2560px-Gfp-wisconsin-madison-the-nature-boardwalk.jpg",
  //            },
  //          },
  //        ],
  //      },
  //    ],
  //    max_tokens: 300,
  //  });

  return Response.json({ completion });
}
