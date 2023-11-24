import React from "react";
import "./ia-loading.css";
import { TypeAnimation } from "react-type-animation";

const IaLoading = () => {
  return (
    <div className="flex flex-col p-14">
      <TypeAnimation
        sequence={["IA pondering", 3000, ">_", 3000]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
      />
    </div>
  );
};

export default IaLoading;
