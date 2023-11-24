import { getDateFromTime } from "@/utils/time";
import Image from "next/image";
import React, { FC, useMemo } from "react";
import classNames from "classnames";
import { Message } from "@/types/message";
import useEditMessages from "@/contexts/chat-messages";
import { USER_TYPE } from "@/app/constants/common";

const MessageBox: FC<Message> = ({ id, content, created, role }) => {
  const { name } = useEditMessages();
  const messageTime = useMemo(
    () => getDateFromTime(created * (role === USER_TYPE.gpt ? 1000 : 1)),
    [created, role]
  );

  const messageStyle = classNames({
    "flex w-full justify-end": role === USER_TYPE.user,
  });
  const contentStyle = classNames({
    "p-3 border-[1px] border-gray-900": true,
    "bg-blue-600 text-white  rounded-l-lg rounded-br-lg":
      role === USER_TYPE.user,
    " text-gray-800 rounded-r-lg rounded-bl-lg": role === USER_TYPE.gpt,
  });

  return (
    <div className={`flex w-full mt-2 space-x-1 ${messageStyle}`}>
      {role === USER_TYPE.gpt && (
        <Image
          src="/images/chat-robot.png"
          alt="message"
          width={150}
          height={150}
          className="object-cover h-8 w-8 rounded-full bg-gray-200"
        />
      )}

      <div>
        <div className={contentStyle}>
          {role === USER_TYPE.user && (
            <div className="text-xs pb-1 text-gray-300 font-semibold">
              {name || "😎"}
            </div>
          )}
          <div className="text-sm">{content}</div>
        </div>
        <span className="text-xs text-gray-800 leading-none">
          {created === 0 ? "" : messageTime}
        </span>
      </div>
    </div>
  );
};

export default MessageBox;
