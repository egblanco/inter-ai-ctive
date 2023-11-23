"use client";
import Card from "@/components/ui/card";
import ChatWithMe from "@/components/action-card-description/chat-with-me";
import WhatISee from "@/components/action-card-description/what-i-see";
import Header from "@/components/ui/header";
import useEditMessages from "@/contexts/chat-messages";
import { useMemo } from "react";

export default function Home() {
  const { messages } = useEditMessages();

  const chatQty = useMemo(() => {
    return messages.length > 0 ? `(${messages.length / 2})✍` : "";
  }, [messages.length]);

  return (
    <div className="p-5 flex h-screen flex-row justify-center items-center">
      <div className="flex flex-col space-y-10">
        <Header />
        <Card
          description={<ChatWithMe />}
          src="/images/chat-robot.png"
          title={`Chat with me ${chatQty}`}
          url="/conversation"
        />
        <Card
          description={<WhatISee />}
          src="/images/robot-image.png"
          title="What I see?"
          url="/image-description"
        />
      </div>
    </div>
  );
}
