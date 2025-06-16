"use client";
import React from "react";
import dariru from "../../public/dariru.png";
import Image from "next/image";
import { motion } from "motion/react";

const Home = () => {
  return (
    <>
      {/* Home Section */}
      <section
        id="home"
        className="min-h-screen flex lg:flex-row flex-col items-center justify-center px-4 gap-12"
      >
        <div className="text-center order-2 lg;order-1">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            Welcome to <br />
            <span className="text-green-500">
              {"<"}Dariru Codes{" />"}
            </span>
          </h1>
          <p className="text-xl  text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Full-stack developer creating amazing web experiences with modern
            technologies.
          </p>
        </div>
        <div className="w-full lg:order-2 order-1 lg:max-w-lg max-w-sm aspect-square overflow-hidden rounded-full">
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
            <Image
              src={dariru}
              alt="Profile Picture"
              className="w-full object-cover"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
