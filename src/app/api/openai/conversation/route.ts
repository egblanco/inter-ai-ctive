import { MODEL_TYPE, USER_TYPE } from "@/constants/common";
import { openai } from "@/services/openai";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const content = searchParams.get("content");

  const completion = await openai().chat.completions.create({
    messages: [{ role: USER_TYPE.user, content }],
    model: MODEL_TYPE.gpt4,
  });

  return Response.json({ completion });
}
