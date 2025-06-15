import React from "react";
import SectionText from "../components/sectionText";

const Contact = () => {
  return (
    <>
      {/* Contact Section */}
      <section
        id="contact"
        className="relative min-h-screen bg-gray-50 dark:bg-gray-800"
      >
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          <SectionText text="GET IN TOUCH" />
        </h2>
        {/* <p className="text-lg text-gray-600 dark:text-gray-300">
          Let&apos;s work together on your next project...
        </p> */}
      </section>
    </>
  );
};

export default Contact;
