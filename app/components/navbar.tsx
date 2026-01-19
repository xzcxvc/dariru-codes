"use client";
import React, { useEffect, useState } from "react";
import Logo from "./logo";
// import { Menu, Sun, Moon } from "lucide-react";
import { navItems } from "../constants/nav-items";
import { MobileNavbar } from "./mobileNavbar";
import Button from "./button";
import BoxShadow from "./shadow";
import { Moon, Sun } from "lucide-react";

const Navbar = () => {
  const handleNavClick = (href: string): void => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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
      <aside className="flex fixed bg-[#FFF8E7] dark:bg-[#212435] h-[100vh] transition-all top-0 left-0 border-r-5 z-50 border-[#404A65] dark:border-[#F9682C] w-[110px] items-center justify-center">
        <div className="min-h-[calc(100vh-35px)] w-20 flex flex-col justify-evenly ">
          <div className="flex flex-col items-center justify-between min-h-[100vh] gap-12 p-8 text-[#212435]">
            <Logo />
            <div>
              <ul className="relative flex flex-col justify-center items-center gap-5">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div className="relative group" key={item.name}>
                      <BoxShadow className="bg-black dark:bg-[#01C29F]" />
                      <Button
                        onClick={() => handleNavClick(item.href)}
                        className="h-12 w-12 hover:bg-[#01C29F] dark:hover:bg-[#FA7958] bg-[#FFF8E7] transition-all dark:bg-[#212435]
                      dark:hover:border-1 dark:hover:border-white text-[#212435] dark:text-white dark:hover:text-[#212435]"
                      >
                        <Icon />
                      </Button>
                    </div>
                  );
                })}
              </ul>
              <div className="relative group">
                <div className="fixed top-8 right-8 ">
                  <BoxShadow
                    className={`bg-[#404A65] dark:bg-[#FA7958] translate-1`}
                  />
                  <Button
                    onClick={toggleDarkMode}
                    className="h-14 w-14 bg-[#F1D455] hover:!bg-[#01C29F] dark:bg-[#01C29F] dark:hover:!bg-[#F1D455] border-1 border-black transition-all "
                  >
                    {darkMode ? (
                      <Moon className="text-black fill-black" />
                    ) : (
                      <Sun className="text-black fill-black" />
                    )}
                  </Button>
                </div>
              </div>
            </div>
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
