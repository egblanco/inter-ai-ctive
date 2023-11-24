import Image from "next/image";
import React from "react";

const RobotAvatar = () => {
  return (
    <Image
      src="/images/chat-robot.png"
      alt="message"
      width={150}
      height={150}
      className="object-cover h-8 w-8 rounded-full bg-white"
    />
  );
};

export default RobotAvatar;
