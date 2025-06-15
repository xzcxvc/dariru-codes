import React from "react";
import Card from "../components/card";
// import dariru from "../../public/dariru.png";
// import CardContent from "../components/cardCotent";
import { PokemonList } from "../helpers/constants/interfaces";
import { log } from "node:console";
import SectionText from "../components/sectionText";

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
        className="relative min-h-screen bg-gray-50 dark:bg-gray-800"
      >
        <SectionText text="MY PROJECTS" className="" />
        {/* <p className="text-lg text-gray-600 dark:text-gray-300">
          Here are some of the projects I&apos;ve worked on...
        </p> */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 p-4 lg:p-16">
          {pokemons.map((pokemon) => (
            <Card key={pokemon.name}>
              <p>{pokemon.name}</p>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
