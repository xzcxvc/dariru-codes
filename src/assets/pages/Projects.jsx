import React from "react";

const Projects = () => {
  return (
    <>
      {/* Projects Section */}
      <section
        id="projects"
        className="min-h-screen flex items-center justify-center px-4 bg-gray-50 dark:bg-gray-800"
      >
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            My Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Here are some of the projects I've worked on...
          </p>
        </div>
      </section>
    </>
  );
};

export default Projects;
