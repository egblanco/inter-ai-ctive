import useEditMessages from "@/contexts/chat-messages";
import React from "react";
import Tooltip from "../ui/tooltip";

const MessageList = () => {
  const { messages } = useEditMessages();

  const userQuestions = messages.filter((message) => message.role === "user");

  return (
    <div>
      {userQuestions.map((message) => (
        <div className="border-b-2 p-3" key={message.id}>
          <p className="truncate">{message.content}</p>

          <Tooltip text={message.content}>
            <div className="text-xs text-gray-400 z-0">See more</div>
          </Tooltip>
        </div>
      ))}
    </div>
  );
};

export default MessageList;
