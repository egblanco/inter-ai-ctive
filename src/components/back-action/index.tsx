import { useRouter } from "next/navigation";
import React from "react";
import { IoArrowBack } from "react-icons/io5";

const BackAction = ({ description }: { description: string }) => {
  const router = useRouter();

  return (
    <div className="flex text-gray-800 space-x-2">
      <IoArrowBack
        onClick={() => router.push("/")}
        size={20}
        className="mt-1 cursor-pointer"
      />
      <div>{description}</div>
    </div>
  );
};

export default BackAction;
