"use client";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaBriefcase,
  FaGraduationCap,
  FaAward,
} from "react-icons/fa";
import Image from "next/image";
import {
  TimelineEventProps,
  TimelineEventData,
} from "../helpers/constants/interfaces";
// import dariru from "../../public/dariru.png";

const timelineData: TimelineEventData[] = [
  {
    id: 1,
    title: "Software Engineer at Tech Corp",
    date: "2023 - Present",
    description:
      "Leading development of enterprise applications and mentoring junior developers.",
    icon: <FaBriefcase className="text-white-500" />,
    category: "work",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },
  {
    id: 2,
    title: "Master's Degree in Computer Science",
    date: "2021 - 2023",
    description: "Specialized in Artificial Intelligence and Machine Learning.",
    icon: <FaGraduationCap className="text-white-500" />,
    category: "education",
    imageUrl: "https://images.unsplash.com/photo-1523580494863-6f3031224c94",
  },
  {
    id: 3,
    title: "Innovation Award",
    date: "2022",
    description:
      "Received prestigious award for developing breakthrough technology.",
    icon: <FaAward className="text-white-500" />,
    category: "achievement",
    imageUrl: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad",
  },
  {
    id: 4,
    title: "Startup Foundation",
    date: "2020",
    description:
      "Co-founded a successful tech startup focusing on AI solutions.",
    icon: <FaMapMarkerAlt className="text-white-500" />,
    category: "milestone",
    imageUrl: "https://images.unsplash.com/photo-1559136555-9303baea8ebd",
  },
];

const TimelineEvent: React.FC<TimelineEventProps> = ({ event, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const variants = {
    hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.2,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={controls}
      className={`flex ${
        index % 2 === 0 ? "flex-row" : "flex-row-reverse"
      } md:gap-8 items-center w-full`}
    >
      <div
        className={`w-1/2 ${
          index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"
        } hidden md:block`}
      >
        <div className="p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
          <h3 className="text-xl font-bold text-gray-800">{event.title}</h3>
          <p className="text-sm text-gray-600 mt-1">{event.date}</p>
          <p className="text-gray-700 mt-2">{event.description}</p>
          <Image
            width={24}
            height={24}
            src={"/"}
            alt={event.title}
            className="w-full h-40 object-cover rounded-md mt-3"
            // onError={(e) => {
            //   e.target.src = "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2";
            // }}
          />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center z-10">
          {event.icon}
        </div>
        <div className="w-1 h-full bg-blue-200"></div>
      </div>
      <div className="w-1/2 md:hidden">
        <div className="p-4 bg-white rounded-lg shadow-lg mx-4">
          <h3 className="text-lg font-bold text-gray-800">{event.title}</h3>
          <p className="text-sm text-gray-600 mt-1">{event.date}</p>
          <p className="text-gray-700 mt-2">{event.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Timeline = () => {
  return (
    <div className="min-h-screen text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">My Journey</h2>
        <div className="relative">
          {timelineData.map((event, index) => (
            <TimelineEvent key={event.id} event={event} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
