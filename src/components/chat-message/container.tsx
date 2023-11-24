import React, { KeyboardEvent, useEffect, useRef, useState } from "react";
import useEditMessages from "@/contexts/chat-messages";
import { v4 } from "uuid";
import { Message } from "@/types/message";
import MessageBox from "./message";
import MessageBoxStatus from "./message-box-status";
import { TypeAnimation } from "react-type-animation";
import { conversation } from "@/services/openai";
import { USER_TYPE } from "@/constants/common";

const Container = () => {
  const { setMessages, messages, name } = useEditMessages();
  const [inputValue, setInputValue] = useState("");
  const [lastInputValue, setLastInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const bottomEl = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
  }, []);

  useEffect(() => {
    handleKeyPressLastInputValue();
  }, [lastInputValue]);

  const scrollToBottom = () => {
    bottomEl?.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleKeyPressLastInputValue = async () => {
    if (!lastInputValue) return;

    setError(false);
    setLoading(true);
    let actionMessages: Message[] = [];
    const currentDate = new Date().getTime();
    const userMessage: Message = {
      id: v4(),
      created: currentDate,
      content: lastInputValue,
      role: USER_TYPE.user,
    };
    actionMessages = [...messages, userMessage];
    setMessages([...actionMessages]);
    scrollToBottom();
    await conversation(
      lastInputValue,
      setInputValue,
      setLoading,
      setMessages,
      setError,
      actionMessages
    );
    scrollToBottom();
    inputRef.current.focus();
  };

  const handleKeyPress = async (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== "Enter") return;

    setLastInputValue(inputValue);
  };

  return (
    <div className="flex flex-col flex-grow w-full  bg-white rounded-lg overflow-hidden">
      <div className="flex flex-col flex-grow h-0 pt-14 px-5 overflow-auto">
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
          <MessageBoxStatus>
            <div>Hello {name}, how can I help you?</div>
          </MessageBoxStatus>
        )}
        {loading && (
          <MessageBoxStatus>
            <TypeAnimation
              sequence={["Thinking", 3000, "......", 3000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </MessageBoxStatus>
        )}
        {error && (
          <MessageBoxStatus>
            <div className="text-red-600">H,we have a problem 😬</div>
          </MessageBoxStatus>
        )}
        <div ref={bottomEl}></div>
      </div>

      <div className="p-4">
        <input
          className="flex items-center border-2 border-gray-300 h-10 w-full rounded px-3 text-sm text-gray-800"
          type="text"
          placeholder="Ask me whatever you want ..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyPress}
          disabled={loading}
          ref={inputRef}
        />
      </div>
    </div>
  );
};

export default Container;
