import { Pokemon } from "../entities/pokemon.entity";

export type PokemonsResponse = {
    success: boolean;
    pokemons: Pokemon[]
};

export type PokemonResponse = {
    success: boolean;
    pokemon: Pokemon
};