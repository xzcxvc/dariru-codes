"use client";
import React, { useEffect, useState } from "react";
import NavLink from "./navlink";
import Logo from "./logo";
// import { Menu, Sun, Moon } from "lucide-react";
import { navItems } from "../helpers/constants/lists";
import MobileNavbar from "./mobileNavbar";
// import Link from "next/link";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Load saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    setDarkMode(isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  return (
    <>
      <MobileNavbar />
      <aside className="flex fixed h-[100vh] top-0 left-0 border-r-5 z-50 border-[#F25242] dark:border-[#F9682C] w-[110px] items-center justify-center">
        <div className="min-h-[calc(100vh-35px)] w-20 flex flex-col justify-evenly ">
          <div className="flex flex-col items-center justify-between min-h-[100vh] gap-12 p-8 text-[#212435]">
            <Logo />
            <div>
              <ul className="flex flex-col justify-center items-center gap-12">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <NavLink href={item.href} icon={item.icon} />
                   
                  </li>
                ))}
              </ul>
            </div>
            {/* 🌙 Dark Mode Toggle */}

            <button
              onClick={toggleDarkMode}
              className="text-sm font-semibold hover:scale-110 transition fixed top-6 right-6"
            >
              {darkMode ? "☀️" : "🌙"}
            </button>

            <div className="text-center [writing-mode:vertical-rl] rotate-180 mb-8">
              &copy; 2024 Dariru Codes
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
