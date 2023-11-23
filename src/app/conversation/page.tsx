"use client";
import ChatContainer from "@/components/chat-message/container";
import { useRouter } from "next/navigation";
import React from "react";
import { IoArrowBack } from "react-icons/io5";

const Conversation = () => {
  const router = useRouter();

  const goToUrl = () => {
    router.push("/");
  };

  return (
    <div className="flex flex-col items-center  w-screen min-h-screen p-10">
      <div className="text-xl flex space-x-2 w-full">
        <IoArrowBack
          onClick={goToUrl}
          size={20}
          className="mt-1 cursor-pointer"
        />
        <div>Chat with me</div>
      </div>
      <ChatContainer />
    </div>
  );
};

export default Conversation;
