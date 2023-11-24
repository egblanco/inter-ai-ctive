import React from "react";

const ActionCardDescription = ({
  descriptionMethod,
  model,
}: {
  descriptionMethod: string;
  model: string;
}) => {
  return (
    <div className="text-xs group-hover:text-gray-700 text-center ">
      Open AI integration. {descriptionMethod},{" "}
      <div className="text-gray-700 font-semibold group-hover:text-gray-900">
        {model}
      </div>
    </div>
  );
};

export default ActionCardDescription;
