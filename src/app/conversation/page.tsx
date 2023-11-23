"use client";
import Image from "next/image";
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
      <div className="flex flex-col flex-grow w-full max-w-xl bg-gray-700 shadow-xl rounded-lg overflow-hidden">
        <div className="flex flex-col flex-grow h-0 p-4 overflow-auto">
          <div className="flex w-full mt-2 space-x-3 max-w-xs">
            <Image
              src={"/images/chat-robot.png"}
              alt={"robot"}
              width={150}
              height={150}
              className="object-cover h-8 w-8 rounded-full bg-white"
            />
            <div>
              <div className="bg-gray-300 text-gray-800 p-3 rounded-r-lg rounded-bl-lg">
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              <span className="text-xs text-gray-100 leading-none">
                2 min ago
              </span>
            </div>
          </div>
          <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
            <div>
              <div className="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod.
                </p>
              </div>
              <span className="text-xs text-gray-100 leading-none">
                2 min ago
              </span>
            </div>
          </div>
        </div>

        <div className="bg-gray-300 p-4">
          <input
            className="flex items-center h-10 w-full rounded px-3 text-sm"
            type="text"
            placeholder="Ask anything ..."
          />
        </div>
      </div>
    </div>
  );
};

export default Conversation;
