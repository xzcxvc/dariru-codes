"use client";
import React, { useEffect, useState } from "react";
import Logo from "./logo";
// import { Menu, Sun, Moon } from "lucide-react";
import { navItems } from "../constants/nav-items";
import { MobileNavbar } from "./mobileNavbar";

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

  const handleNavClick = (href: string): void => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
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
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.name}
                      onClick={() => handleNavClick(item.href)}
                      className="group relative flex flex-col items-center"
                    >
                      <div className="relative z-1 bg-black w-5 top-0 left-0">
                        <div className="border z-10 transition-all duration-300 group-hover:bg-[#072257] hover:-translate-1">
                          <Icon className="w-5 h-5 text-gray-800 dark:text-white group-hover:text-green-400 transition-colors duration-300" />
                        </div>
                        a
                      </div>
                      {/* <span className="absolute -top-8 text-xs text-gray-800 dark:text-white bg-white/80 dark:bg-black/80 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                        {item.name}
                      </span> */}
                    </button>
                  );
                })}
              </ul>
            </div>
            {/* 🌙 Dark Mode Toggle */}

            <button
              onClick={toggleDarkMode}
              className="text-sm font-semibold hover:scale-110 transition fixed top-6 right-6"
            >
              {darkMode ? "☀️" : "🌙"}
            </button>

            <div className="text-center mb-12 -rotate-90 whitespace-nowrap select-none">
              &copy; 2024 Dariru Codes
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
