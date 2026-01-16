"use client";
import React, { useState, useEffect } from "react";
import { navItems } from "../constants/nav-items";
import { Moon, Sun } from "lucide-react";

export const MobileNavbar = () => {
  const [isMobile, setIsMobile] = useState(true);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    // Check for saved theme preference or default to 'dark'
    const savedTheme = localStorage.getItem("theme");
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    const initialTheme = savedTheme || systemTheme;

    setTheme(initialTheme);

    // Apply theme immediately
    if (initialTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const handleNavClick = (href: string): void => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    console.log("Switching to:", newTheme);

    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    // Apply theme to document
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <>
      {isMobile && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
          <div className="bg-white/90 dark:bg-black/40 backdrop-blur-sm border border-green-500/20 rounded-full px-6 py-3 shadow-2xl">
            <div className="flex items-center space-x-6">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className="group relative flex flex-col items-center"
                  >
                    <div className="p-2 rounded-full transition-all duration-300 group-hover:bg-green-500/20 group-hover:scale-110">
                      <IconComponent className="w-5 h-5 text-gray-800 dark:text-white group-hover:text-green-400 transition-colors duration-300" />
                    </div>
                    <span className="absolute -top-8 text-xs text-gray-800 dark:text-white bg-white/80 dark:bg-black/80 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      {item.name}
                    </span>
                  </button>
                );
              })}
              {/* Theme toggle for mobile */}
              <button
                onClick={toggleTheme}
                className="group relative flex flex-col items-center"
              >
                <div className="p-2 rounded-full transition-all duration-300 group-hover:bg-green-500/20 group-hover:scale-110">
                  {theme === "dark" ? (
                    <Sun className="w-5 h-5 text-gray-800 dark:text-white group-hover:text-green-400 transition-colors duration-300" />
                  ) : (
                    <Moon className="w-5 h-5 text-gray-800 dark:text-white group-hover:text-green-400 transition-colors duration-300" />
                  )}
                </div>
                <span className="absolute -top-8 text-xs text-gray-800 dark:text-white bg-white/80 dark:bg-black/80 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {theme === "dark" ? "light" : "dark"}
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNavbar;
