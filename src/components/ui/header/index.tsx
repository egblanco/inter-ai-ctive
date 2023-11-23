"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const Header = () => {
  return (
    <h1 className="text-2xl justify-start" style={{ fontSize: "2em" }}>
      Inter
      <TypeAnimation
        sequence={["AI-ctive", 5000, "active", 5000]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
      />
    </h1>
  );
};

export default Header;
