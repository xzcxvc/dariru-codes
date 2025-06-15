"use client";
import React from "react";
import { SectionTextProps } from "../helpers/constants/interfaces";
import { ScrollParallax } from "react-just-parallax";

const SectionText: React.FC<SectionTextProps> = ({ text, className }) => {
  return (
    <ScrollParallax shouldPause={true}>
      <div
        className={`md:text-[300px] leading-64 font-bold text-gray-900 dark:text-white/5 absolute top-40 ${className}`}
      >
        {text}
      </div>
    </ScrollParallax>
  );
};

export default SectionText;
