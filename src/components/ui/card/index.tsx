"use client";
import React, {
  MutableRefObject,
  forwardRef,
  useImperativeHandle,
} from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

type ActionCardProps = {
  title: string;
  description: React.ReactNode;
  src: string;
  url: string;
  name?: string;
  inputRef?: MutableRefObject<any>;
};

const ActionCard = forwardRef(
  (
    {
      title,
      description,
      src,
      url,
      name = "",
      inputRef = null,
    }: ActionCardProps,
    ref
  ) => {
    const router = useRouter();

    const goToUrl = () => {
      if (!name.trim() && inputRef) {
        inputRef.current.focus();
        inputRef.current.classList.add("border-4");
        inputRef.current.classList.add("border-red-600");
        return;
      }

      if (name.trim() && inputRef) {
        inputRef.current.classList.remove("border-2");
        inputRef.current.classList.remove("border-red-600");
      }

      router.push(url);
    };

    return (
      <div
        onClick={goToUrl}
        className="group p-2 bg-white rounded-lg flex flex-col items-center justify-center relative after:absolute after:h-full after:bg-gray-300 z-20 shadow-lg after:-z-20 after:w-full after:inset-0 after:rounded-lg transition-all duration-300 hover:transition-all hover:duration-300 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden cursor-pointer after:-translate-y-full after:hover:translate-y-0 [&amp;_p]:delay-300 [&amp;_p]:transition-all w-96"
      >
        <p className="text-gray-900 tracking-wider group-hover:text-gray-700 text-2xl">
          {title}
        </p>
        {description}
        <div className="flex justify-center items-center w-full">
          <Image
            src={src}
            alt={title}
            width={150}
            height={150}
            className="p-3 cursor-pointer"
          />
        </div>
      </div>
    );
  }
);

ActionCard.displayName = "ActionCard";
export default ActionCard;
