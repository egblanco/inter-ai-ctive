"use client";

import Card from "@/components/ui/card";
import Header from "@/components/ui/header";
import useEditMessages from "@/contexts/chat-messages";
import { useMemo, useRef } from "react";
import ActionCardDescription from "@/components/action-card-description";
import { MODEL_TYPE } from "@/constants/common";

export default function Home() {
  const { messages, setName, name } = useEditMessages();
  const inputRef = useRef(null);

  const chatQty = useMemo(() => {
    return messages.length > 0 ? `(${messages.length / 2})✍` : "";
  }, [messages.length]);

  return (
    <div className="p-5 flex h-screen flex-row justify-center items-center">
      <div className="flex flex-col space-y-10">
        <Header />
        <div className="flex">
          <div className="flex items-center h-10  rounded px-3 text-2xl text-gray-800">
            {name.trim() && "Hola"}
          </div>
          <input
            className=" flex items-center h-10 w-full rounded px-3 text-2xl text-gray-800"
            type="text"
            placeholder="Please type your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            ref={inputRef}
          />
        </div>
        <Card
          description={
            <ActionCardDescription
              descriptionMethod="Text generation model"
              model={MODEL_TYPE.gpt4}
            />
          }
          src="/images/chat-robot.png"
          title={`Chat with me ${chatQty}`}
          url="/chat"
          name={name}
          inputRef={inputRef}
        />
        <Card
          description={
            <ActionCardDescription
              descriptionMethod="Preview images model"
              model={MODEL_TYPE.gpt4VisionPreview}
            />
          }
          src="/images/robot-image.png"
          title="What I see?"
          url="/image-description"
          name={name}
          inputRef={inputRef}
        />
        <div className="flex w-full justify-center text-xs">
          Created by: Edgar{" "}
          <span className="font-semibold">(OpenAi API - GPT) </span>
        </div>
      </div>
    </div>
  );
}
