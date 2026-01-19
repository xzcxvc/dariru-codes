import React from "react";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}

const Button = ({ onClick, className, children }: ButtonProps) => {
  return (
    <button
      onClick={() => onClick()}
      className={`${className} flex items-center justify-center  
        hover:border-1 
        hover:border-black 
        hover:text-white 
        hover:cursor-pointer hover:-translate-1`}
    >
      {children}
    </button>
  );
};

export default Button;
