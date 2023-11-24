import React from "react";

const UploadImageForm = ({
  name,
  handleFileChange,
  file,
  handleUpload,
}: {
  name: string;
  handleFileChange: React.ChangeEventHandler<HTMLInputElement>;
  file: File;
  handleUpload: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <div>
      <div className="pb-5 text-lg">
        {name}, please upload an image and I will describe what I see ( ͡👁️ ͜ʖ ͡👁️)
      </div>
      <form className="flex flex-col gap-4 rounded bg-gray-100 p-10 text-grey-900 ">
        <input
          type="file"
          onChange={handleFileChange}
          accept="image/png, image/gif, image/jpeg"
        />
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
  );
};

export default UploadImageForm;
