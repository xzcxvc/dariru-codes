import React from "react";
import { CardProps } from "../helpers/constants/interfaces";

const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div
      className={`${className} relative top-10 p-4 hover:shadow-2xl hover:shadow-green-200 border-1 hover:rotate-2 duration-700 transition-transform
       border-green-300 rounded-4xl flex flex-col items-center w-full`}
    >
      {children}
    </div>
  );
};

export default Card;
