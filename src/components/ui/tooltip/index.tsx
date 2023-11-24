import { useState } from "react";

const Tooltip = ({ text, children }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div className="relative ">
      <div
        className="cursor-pointer inline-block"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </div>
      {showTooltip && (
        <div className="absolute bg-gray-800 text-white  p-3 rounded shadow-md">
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
