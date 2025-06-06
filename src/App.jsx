"use client";

import { useEffect } from "react";
import Navbar from "./assets/components/Navbar";
import Home from "./assets/pages/Home";
import Projects from "./assets/pages/Projects";
import About from "./assets/pages/About";
import Contact from "./assets/pages/Contact";
import "./App.css";

function App() {
  useEffect(() => {
    // Initialize theme on app load
    const savedTheme = localStorage.getItem("theme") || "dark";
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      {/* Main content sections */}
      <main>
        <Home />
        <Projects />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;
