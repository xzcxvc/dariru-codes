import React from "react";
import SectionText from "../components/sectionText";
// import Timeline from "../components/timeline";

const About = () => {
  return (
    <>
      {/* About Section */}
      <section id="about" className="relative min-h-screen">
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 ">
          <SectionText text="ABOUT ME" className="bg-[#FA7958]" />
        </h2>

        {/* <Timeline /> */}
        {/* <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          I&apos;m a passionate developer with experience in React, Node.js, and
          modern web technologies...
        </p> */}
      </section>
    </>
  );
};

export default About;
