"use client";

import IaLoading from "@/components/ui/loading/ia-loading";
import useEditMessages from "@/contexts/chat-messages";
import { S3 } from "aws-sdk";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, {
  ChangeEventHandler,
  MouseEventHandler,
  useEffect,
  useState,
} from "react";
import { IoArrowBack } from "react-icons/io5";

const File = () => {
  const router = useRouter();
  const [file, setFile] = useState<File | null>(null);
  const [upload, setUpload] = useState<S3.ManagedUpload | null>(null);
  const [uploadedImage, setUploadedImage] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const { name } = useEditMessages();

  const s3 = new S3({
    accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
    region: "us-east-1",
  });

  useEffect(() => {
    return upload?.abort();
  }, []);

  useEffect(() => {
    setUpload(null);
  }, [file]);

  useEffect(() => {
    if (!uploadedImage) return;
    fetchResponse();
  }, [uploadedImage]);

  const handleFileChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();
    setFile(e.target.files![0]);
  };

  const handleUpload: MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();
    if (!file) return;
    const params = {
      Bucket: "open-ai-file",
      Key: file.name,
      Body: file,
      ACL: "public-read",
    };

    try {
      setLoading(true);
      const upload = s3.upload(params);
      setUpload(upload);
      const data = await upload.promise();
      setUploadedImage(data?.Location);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const fetchResponse = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `/api/openai/vision-preview?url=${uploadedImage}`
      );
      const data = await response.json();
      setContent(data?.completion?.choices[0].message?.content);
    } catch (error) {
      console.error(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const goToUrl = () => {
    router.push("/");
  };

  const handlePonderAgain = () => {
    setUploadedImage("");
    setLoading(false);
    setContent("");
    setUpload(null);
    setFile(null);
  };

  const showResponse = uploadedImage && !loading;
  const showForm = !uploadedImage && !loading;

  return (
    <div className="flex flex-col items-center  w-screen min-h-screen p-10">
      <div className="text-xl flex space-x-2 w-full">
        <IoArrowBack
          onClick={goToUrl}
          size={20}
          className="mt-1 cursor-pointer"
        />
        <div>What I see?</div>
      </div>
      <div className="flex flex-col flex-grow w-full max-w-xl  shadow-xl rounded-lg overflow-hidden">
        <div className="flex flex-col flex-grow h-0 p-4 overflow-auto">
          {loading && <IaLoading />}
          {showForm && (
            <div>
              <div className="pb-5 text-lg">
                {name} Please upload an image and I will describe what I see (
                ͡👁️ ͜ʖ ͡👁️)
              </div>
              <form className="flex flex-col gap-4 rounded bg-gray-100 p-10 text-grey-900 ">
                <input type="file" onChange={handleFileChange} />
                {file && (
                  <button
                    className="rounded bg-gray-900 p-2 shadow text-gray-50"
                    onClick={handleUpload}
                  >
                    Upload and ponder 🚀
                  </button>
                )}
              </form>
            </div>
          )}
          {showResponse && (
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
          )}
        </div>
      </div>
    </div>
  );
};

export default File;
