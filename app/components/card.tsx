import React from "react";
import { CardProps } from "../helpers/constants/interfaces";

const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div
      className={`${className}shadow-md bg-slate-600 p-4 duration-700 transition-transform
      rounded-lg flex flex-col items-center justify-center w-full h-auto`}
    >
      {children}
    </div>
  );
};

export default Card;
