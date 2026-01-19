import React from "react";
// import Card from "../components/card";
// import dariru from "../../public/dariru.png";
// import CardContent from "../components/cardCotent";
import { PokemonList } from "../helpers/constants/interfaces";
import { log } from "node:console";
import SectionText from "../components/sectionText";
// import { myProjects } from "../constants/projects";

const Projects = async () => {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1");
  const data: PokemonList = await res.json();
  const pokemons = data.results;
  log({ pokemons });
  return (
    <>
      {/* Projects Section */}
      <section id="projects" className="min-h-screen">
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900">
          <SectionText text="PROJECTS" />
        </h2>
        {/* <div className="flex items-center min-h-screen justify-around gap-12 p-16">
          {myProjects.map((project) => (
            <Card key={project.id}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </Card>
          ))}
        </div> */}
      </section>
    </>
  );
};

export default Projects;
