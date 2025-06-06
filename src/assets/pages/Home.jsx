import React from "react";

const Home = () => {
  return (
    <>
      {/* Home Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-4"
      >
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            Welcome to <span className="text-green-500">Dariru Codes</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Full-stack developer creating amazing web experiences with modern
            technologies.
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;
