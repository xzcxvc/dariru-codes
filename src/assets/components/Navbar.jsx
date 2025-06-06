"use client";

import { useState, useEffect } from "react";
import { Home, FolderOpen, Mail, User, Menu, Sun, Moon } from "lucide-react";

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [theme, setTheme] = useState("dark");

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

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const navItems = [
    { name: "Home", href: "#home", icon: Home },
    { name: "Projects", href: "#projects", icon: FolderOpen },
    { name: "About", href: "#about", icon: User },
    { name: "Contact", href: "#contact", icon: Mail },
  ];

  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (isMobile) {
    return (
      <div className="fixed top-6 right-6 transform">
        <div className="bg-white/90 dark:bg-black/40 backdrop-blur-sm border border-green-500/20 rounded-full px-3 py-7 shadow-2xl">
          <div className="flex items-center flex-col space-y-7">
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
            {/* <button
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
                {theme === "dark" ? "Light" : "Dark"}
              </span>
            </button> */}
          </div>
        </div>
      </div>
    );
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-black/95 backdrop-blur-md border-b border-gray-200 dark:border-green-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("#home")}
            className="flex items-center cursor-pointer"
          >
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              Dariru <span className="text-green-500">Codes</span>
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="text-gray-700 dark:text-white hover:text-green-500 dark:hover:text-green-400 px-3 py-2 text-sm font-medium transition-colors duration-300 relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 dark:bg-green-400 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>

            {/* Theme toggle for desktop */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-gray-700 dark:text-white hover:text-green-500 dark:hover:text-green-400 hover:bg-gray-100 dark:hover:bg-green-500/10 transition-all duration-300"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-gray-700 dark:text-white hover:text-green-500 dark:hover:text-green-400 hover:bg-gray-100 dark:hover:bg-green-500/10 transition-all duration-300"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
            <button className="p-2 rounded-lg text-gray-700 dark:text-white hover:text-green-500 dark:hover:text-green-400 hover:bg-gray-100 dark:hover:bg-green-500/10 transition-all duration-300">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
