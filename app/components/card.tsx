import React from "react";
import { CardProps } from "../helpers/constants/interfaces";

const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div
      className={`${className}shadow-md bg-slate-600 p-4 duration-700 transition-transform
      rounded-4xl flex flex-col items-center justify-center w-full h-150`}
    >
      {children}
    </div>
  );
};

export default Card;
