import Image from "next/image";
import React from "react";

const ImagePreview = ({
  uploadedImage,
  content,
  handlePonderAgain,
}: {
  uploadedImage: string;
  content: string;
  handlePonderAgain: () => void;
}) => {
  return (
    <div className="flex flex-col p-10 text-white space-y-5">
      <Image
        src={uploadedImage}
        alt="message"
        width={150}
        height={150}
        className="object-cover h-full w-full rounded-t-xl p-1 bg-gray-50 "
      />
      <div className="w-full text-justify text-gray-900">{content}</div>
      <div
        className="rounded text-center cursor-pointer text-xl bg-gray-900 p-2 shadow"
        onClick={handlePonderAgain}
      >
        Once again 😉
      </div>
    </div>
  );
};

export default ImagePreview;
