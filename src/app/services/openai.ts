import { Message } from "@/types/message";
import OpenAI from "openai";
import { USER_TYPE } from "../constants/common";

export const conversation = async (
  lastInputValue: string,
  setInputValue,
  setLoading,
  setMessages,
  setError,
  actionMessages
) => {
  try {
    const response = await fetch(
      `/api/openai/conversation?content=${lastInputValue}`
    );
    const data = await response.json();
    const { completion } = data;
    const gptMessage: Message = {
      id: completion?.id,
      created: completion?.created,
      content: completion?.choices[0]?.message?.content,
      role: USER_TYPE.gpt,
    };
    setMessages([...actionMessages, gptMessage]);
  } catch (error) {
    setError(true);
  } finally {
    setLoading(false);
    setInputValue("");
  }
};

export const openai = () => {
  const newOpenai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    organization: process.env.ORGANIZATION_ID,
  });
  return newOpenai;
};
