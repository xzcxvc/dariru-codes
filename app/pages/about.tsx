import React from "react";

const About = () => {
  return (
    <>
      {/* About Section */}
      <section
        id="about"
        className="min-h-screen flex items-center justify-center px-4"
      >
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I&apos;m a passionate developer with experience in React, Node.js,
            and modern web technologies...
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
