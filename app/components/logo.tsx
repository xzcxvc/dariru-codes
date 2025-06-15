"use client";
import React from "react";

interface LogoProps {
  href: string;
}

const Logo: React.FC<LogoProps> = ({ href }) => {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={() => handleNavClick(href)}
      className="flex items-center cursor-pointer"
    >
      <span className="text-2xl font-bold text-gray-900 dark:text-white">
        Dariru <span className="text-green-500">Codes</span>
      </span>
    </button>
  );
};

export default Logo;
