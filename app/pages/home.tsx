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
        className="relative min-h-[100vh] min-w-full flex lg:flex-col flex-col items-center justify-center gap-12"
      >
        <div className="w-full lg:max-w-[12rem] max-w-sm aspect-square overflow-hidden rounded-full">
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
            <Image
              src={dariru}
              alt="Profile Picture"
              className="w-full object-cover"
            />
          </motion.div>
        </div>
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            <span className="text-green-500">
              {"<"}Dariru Codes{" />"}
            </span>
          </h1>
          {/* <p className="text-xl  text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Front-end developer creating amazing web experiences with modern
            technologies.
          </p> */}
        </div>
      </section>
    </>
  );
};

export default Home;
