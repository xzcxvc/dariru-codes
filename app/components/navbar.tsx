import React from "react";
import NavLink from "./navlink";
import Logo from "./logo";
// import { Menu, Sun, Moon } from "lucide-react";
import { navItems } from "../helpers/constants/lists";
import MobileNavbar from "./mobileNavbar";
// import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <MobileNavbar />
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-black/95 backdrop-blur-md border-b border-gray-200 dark:border-green-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Logo href={"#home"} />

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <div className="flex items-baseline space-x-8">
                {navItems.map((item) => (
                  <div key={item.name}>
                    <NavLink href={item.href} label={item.name} />
                  </div>
                ))}
              </div>
            </div>

           
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
