export interface CardProps {
  children: React.ReactNode;
  className: string;
  key: string;
}

export interface CardContentProps {
  children: React.ReactNode;
}

export interface Pokemon {
  id: string;
  name: string;
}

export interface PokemonList {
  results: Pokemon[];
}
