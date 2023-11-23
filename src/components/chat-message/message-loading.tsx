import Image from "next/image";
import React from "react";
import classNames from "classnames";
import { TypeAnimation } from "react-type-animation";

const MessageBoxLoading = () => {
  const contentStyle = classNames({
    "": true,
    "bg-gray-300 p-3 text-gray-800 rounded-r-lg rounded-bl-lg": true,
  });

  return (
    <div className="flex w-full mt-2 space-x-3 max-w-xs">
      <Image
        src="/images/chat-robot.png"
        alt="message"
        width={150}
        height={150}
        className="object-cover h-8 w-8 rounded-full bg-white"
      />

      <div>
        <div className="bg-gray-300 p-3 text-gray-800 rounded-r-lg rounded-bl-lg">
          <TypeAnimation
            sequence={["Thinking", 3000, "......", 3000]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>
      </div>
    </div>
  );
};

export default MessageBoxLoading;
