import React from "react";
import { CardContentProps } from "../helpers/constants/interfaces";

const CardContent: React.FC<CardContentProps> = ({ children }) => {
  return <div className="border-2">{children}</div>;
};

export default CardContent;
