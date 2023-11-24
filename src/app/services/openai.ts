import { Message } from "@/types/message";

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
      role: "gpt",
    };
    setMessages([...actionMessages, gptMessage]);
  } catch (error) {
    setError(true);
  } finally {
    setLoading(false);
    setInputValue("");
  }
};
