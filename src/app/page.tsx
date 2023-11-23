import Image from "next/image";
import Card from "@/components/ui/card";
import ChatWithMe from "@/components/action-card-description/chat-with-me";
import WhatISee from "@/components/action-card-description/what-i-see";
import Header from "@/components/ui/header";

export default function Home() {
  return (
    <div className="p-5 flex h-screen flex-row justify-center items-center">
      <div className="flex flex-col space-y-10">
        <Header />
        <Card
          description={<ChatWithMe />}
          src="/images/chat-robot.png"
          title="Chat with me"
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
