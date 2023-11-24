import { MODEL_TYPE, USER_TYPE } from "@/app/constants/common";
import { openai } from "@/app/services/openai";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get("url");

  const completion = await openai().chat.completions.create({
    model: MODEL_TYPE.gpt4VisionPreview,
    messages: [
      {
        role: USER_TYPE.user,
        content: [
          { type: "text", text: "What’s in this image?" },
          {
            type: "image_url",
            image_url: {
              url,
            },
          },
        ],
      },
    ],
    max_tokens: 300,
  });

  return Response.json({ completion });
}
