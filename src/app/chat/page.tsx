"use client";

import React from "react";
import ChatContainer from "@/components/chat-message/container";
import { IoArrowBack } from "react-icons/io5";
import { useRouter } from "next/navigation";
import MessageList from "@/components/chat-message/message-list";

const Chat = () => {
  const router = useRouter();
  return (
    <body className="flex h-screen">
      <header className="fixed top-0 left-0 w-full bg-white border-b-2 border-gray-300 text-white p-4">
        <div className="flex  text-gray-800 space-x-2">
          <IoArrowBack
            onClick={() => router.push("/")}
            size={20}
            className="mt-1 cursor-pointer"
          />
          <div>Chat with me</div>
        </div>
      </header>

      <div className="hidden w-1/4 border-r lg:flex flex-col items-center min-h-screen border-gray-300   left-0 bg-gray-100">
        <div className="flex flex-col flex-grow w-full mt-14  bg-white rounded-lg overflow-hidden">
          <MessageList />
        </div>
      </div>

      <main className="w-full lg:w-3/4 ml-auto">
        <div className="flex flex-col items-center min-h-screen ">
          <ChatContainer />
        </div>
      </main>
    </body>
  );
};

export default Chat;
