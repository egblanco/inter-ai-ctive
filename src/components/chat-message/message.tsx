import { getDateFromTime } from "@/utils/time";
import Image from "next/image";
import React, { FC, useMemo } from "react";
import classNames from "classnames";
import { Message } from "@/types/message";

const MessageBox: FC<Message> = ({ id, content, created, role }) => {
  const messageTime = useMemo(
    () => getDateFromTime(created * (role === "gpt" ? 1000 : 1)),
    [created, role]
  );

  const messageStyle = classNames({ "ml-auto justify-end": role === "user" });
  const contentStyle = classNames({
    "p-3": true,
    "bg-blue-600 text-white  rounded-l-lg rounded-br-lg": role === "user",
    "bg-gray-300 text-gray-800 rounded-r-lg rounded-bl-lg": role === "gpt",
  });

  return (
    <div className={`flex w-full mt-2 space-x-3 max-w-xs ${messageStyle}`}>
      {role === "gpt" && (
        <Image
          src="/images/chat-robot.png"
          alt="message"
          width={150}
          height={150}
          className="object-cover h-8 w-8 rounded-full bg-white"
        />
      )}

      <div>
        <div className={contentStyle}>
          <p className="text-sm">{content}</p>
        </div>
        <span className="text-xs text-gray-100 leading-none">
          {created === 0 ? "" : messageTime}
        </span>
      </div>
    </div>
  );
};

export default MessageBox;
