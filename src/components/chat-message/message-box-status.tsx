import React, { ReactNode } from "react";
import classNames from "classnames";
import RobotAvatar from "@/components/chat-message/robot-avatar";

const MessageBoxStatus = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex w-full mt-2 space-x-3 max-w-xs">
      <RobotAvatar />
      <div>
        <div className="text-gray-800 rounded-r-lg rounded-bl-lg p-3 border-[1px] border-gray-900">
          {children}
        </div>
      </div>
    </div>
  );
};

export default MessageBoxStatus;
