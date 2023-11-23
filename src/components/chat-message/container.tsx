import React, { KeyboardEvent, useEffect, useRef, useState } from "react";
import useEditMessages from "@/contexts/chat-messages";
import { v4 } from "uuid";
import { Message } from "@/types/message";
import MessageBox from "./message";
import MessageBoxLoading from "./message-loading";

const Container = () => {
  const { setMessages, messages } = useEditMessages();
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomEl = useRef(null);

  useEffect(() => {
    scrollToBottom();
  }, []);

  const scrollToBottom = () => {
    bottomEl?.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleKeyPress = async (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setLoading(true);
      setInputValue("");
      let actionMessages: Message[] = [];
      const currentDate = new Date().getTime();
      const userMessage: Message = {
        id: v4(),
        created: currentDate,
        content: inputValue,
        role: "user",
      };
      actionMessages = [...messages, userMessage];
      setMessages([...actionMessages]);
      scrollToBottom();
      try {
        const response = await fetch(
          `/api/openai/conversation?content=${inputValue}`
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
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
        scrollToBottom();
      }
    }
  };

  return (
    <div className="flex flex-col flex-grow w-full max-w-xl bg-gray-700 shadow-xl rounded-lg overflow-hidden">
      <div className="flex flex-col flex-grow h-0 p-4 overflow-auto">
        {messages.map((message) => (
          <MessageBox
            id={message.id}
            created={message.created}
            content={message.content}
            key={message.id}
            role={message.role}
          />
        ))}
        {messages.length === 0 && (
          <MessageBox
            id={"none"}
            created={0}
            content="Hello, how can I help you?"
            role="gpt"
          />
        )}
        {loading && <MessageBoxLoading />}
        <div ref={bottomEl}></div>
      </div>

      <div className="bg-gray-300 p-4">
        <input
          className="flex items-center h-10 w-full rounded px-3 text-sm text-gray-800"
          type="text"
          placeholder="Ask me whatever you want ..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyPress}
          disabled={loading}
        />
      </div>
    </div>
  );
};

export default Container;
