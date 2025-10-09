import React from "react";
import Card from "../components/card";
// import dariru from "../../public/dariru.png";
// import CardContent from "../components/cardCotent";
import { PokemonList } from "../helpers/constants/interfaces";
import { log } from "node:console";
import SectionText from "../components/sectionText";
import { myProjects } from "../constants/constants";

const Projects = async () => {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1");
  const data: PokemonList = await res.json();
  const pokemons = data.results;
  log({ pokemons });
  return (
    <>
      {/* Projects Section */}
      <section
        id="projects"
        className="relative min-h-screen bg-gray-50 dark:bg-gray-800 "
      >
        <SectionText text="MY PROJECTS" className="" />
        {/* <p className="text-lg text-gray-600 dark:text-gray-300">
          Here are some of the projects I&apos;ve worked on...
        </p> */}
        <div className="flex items-center min-h-screen justify-around gap-12 p-16 overflow-x-auto min-w-screen">
          {myProjects.map((project) => (
            <Card key={project.id}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
