import { ReactNode } from "react";

export interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export interface CardContentProps {
  children: React.ReactNode;
}

interface Pokemon {
  id: string;
  name: string;
}

export interface PokemonList {
  results: Pokemon[];
}

export interface SectionTextProps {
  text?: string;
  className?: string;
}

export interface TimelineEventData {
  id: number;
  title: string;
  date: string;
  description: string;
  icon: ReactNode;
  category: string;
  imageUrl: string;
}

export interface TimelineEventProps {
  event: TimelineEventData;
  index: number;
}
