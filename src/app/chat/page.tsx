"use client";

import React from "react";
import ChatContainer from "@/components/chat-message/container";
import MessageList from "@/components/chat-message/message-list";
import BackAction from "@/components/back-action";

const Chat = () => {
  return (
    <div className="flex h-screen">
      <header className="fixed top-0 left-0 w-full bg-white border-b-2 border-gray-300 text-white p-4">
        <BackAction description="Chat with me" />
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
    </div>
  );
};

export default Chat;
