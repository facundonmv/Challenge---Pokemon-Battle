import { Pokemon } from "@/models/Pokemon.model";

export type GetPokemonsParams = {
    signal: AbortSignal
};

export type GetPokemonsResponse = {
    success: boolean;
    pokemons: Pokemon[]
};