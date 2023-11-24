"use client";

import BackAction from "@/components/back-action";
import ImagePreview from "@/components/image-preview";
import IaLoading from "@/components/ui/loading/ia-loading";
import UploadImageForm from "@/components/upload-image-form";
import useEditMessages from "@/contexts/chat-messages";
import { s3 } from "@/services/aws";
import { fetchResponseVisionPreview } from "@/services/openai";
import { S3 } from "aws-sdk";
import React, {
  ChangeEventHandler,
  MouseEventHandler,
  useEffect,
  useState,
} from "react";

const File = () => {
  const [file, setFile] = useState<File | null>(null);
  const [upload, setUpload] = useState<S3.ManagedUpload | null>(null);
  const [uploadedImage, setUploadedImage] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const { name } = useEditMessages();

  useEffect(() => {
    return upload?.abort();
  }, []);

  useEffect(() => {
    setUpload(null);
  }, [file]);

  useEffect(() => {
    if (!uploadedImage) return;
    fetchResponseVisionPreview(setLoading, uploadedImage, setContent);
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
      const upload = s3().upload(params);
      setUpload(upload);
      const data = await upload.promise();
      setUploadedImage(data?.Location);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
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
      <div className="flex flex-col flex-grow w-full max-w-xl  shadow-xl rounded-lg overflow-hidden">
        <div className="flex flex-col flex-grow h-0 p-4 overflow-auto space-y-4">
          <BackAction description="What I see?" />
          {loading && <IaLoading />}
          {showForm && (
            <UploadImageForm
              name={name}
              handleFileChange={handleFileChange}
              file={file}
              handleUpload={handleUpload}
            />
          )}
          {showResponse && (
            <ImagePreview
              uploadedImage={uploadedImage}
              content={content}
              handlePonderAgain={handlePonderAgain}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default File;
