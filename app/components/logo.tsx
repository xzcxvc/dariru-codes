"use client";
import React from "react";
import Image from "next/image";
import logo from "../../public/logo.png";

const Logo = () => {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button className="flex items-center cursor-pointer">
      <div
        className="text-2xl font-bold text-gray-900 dark:text-white w-20"
        onClick={() => handleNavClick("#home")}
      >
        {/* Dariru <span className="text-green-500">Codes</span> */}
        <Image src={logo} alt="Dariru Codes Logo" className="object-contain" />
      </div>
    </button>
  );
};

export default Logo;
