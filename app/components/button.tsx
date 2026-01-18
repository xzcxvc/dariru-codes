import React from "react";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const Button = ({ onClick, children }: ButtonProps) => {
  return (
    <div className="relative group">
      <div className=" absolute -z-10 inset-0 bg-black transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1" />
      <button
        onClick={() => onClick()}
        className="flex items-center justify-center h-12 w-12 bg-[#005F73] border-2 hover:cursor-pointer duration-300 transition-all hover:-translate-1"
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
