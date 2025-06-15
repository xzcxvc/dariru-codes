import React from "react";
import Card from "../components/card";
// import dariru from "../../public/dariru.png";
// import CardContent from "../components/cardCotent";
import { PokemonList } from "../helpers/constants/interfaces";
import { log } from "node:console";

const Projects = async () => {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=150");
  const data: PokemonList = await res.json();
  const pokemons = data.results;
  log({ pokemons });
  return (
    <>
      {/* Projects Section */}
      <section
        id="projects"
        className=" relative min-h-screen p-12 bg-gray-50 dark:bg-gray-800"
      >
        <div className="absolute bottom-0">
          <div className=" md:text-[300px] font-bold text-gray-900 dark:text-white/5 mb-6">
            MY PROJECTS
          </div>
          {/* <p className="text-lg text-gray-600 dark:text-gray-300">
            Here are some of the projects I&apos;ve worked on...
          </p> */}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 p-4 lg:p-16">
          {pokemons.map((pokemon) => (
            <Card className="" key={pokemon.id}>
              <p>{pokemon.name}</p>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
