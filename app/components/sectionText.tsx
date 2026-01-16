"use client";
import React, { useRef } from "react";
import { SectionTextProps } from "../helpers/constants/interfaces";
// import { ScrollParallax } from "react-just-parallax";
import { motion, useInView } from "motion/react";

const SectionText: React.FC<SectionTextProps> = ({ text, className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    // <ScrollParallax shouldPause={true}>
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 200 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div
        className={`md:text-[300px] leading-64 font-bold text-gray-900 dark:text-white/5 absolute top-40 ${className}`}
      >
        {text}
      </div>
    </motion.div>
    //  </ScrollParallax>
  );
};

export default SectionText;
