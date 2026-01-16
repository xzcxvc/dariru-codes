"use client";
import React from "react";
import Image from "next/image";

interface NavLinkProps {
  href: string;
  icon: any;
  label?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label, icon }) => {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <button
        onClick={() => handleNavClick(href)}
        className={`text-gray-700 hover:text-green-500 dark:hover:text-green-400 px-3
         py-2 text-sm font-medium transition-colors duration-300 relative group`}
      >
        <Image src={icon} alt="Profile Picture" />
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 dark:bg-green-400 transition-all duration-300 group-hover:w-full">
          {label}
        </span>
      </button>
    </div>
  );
};

export default NavLink;
