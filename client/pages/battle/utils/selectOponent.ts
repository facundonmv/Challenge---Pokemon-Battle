import { Pokemon } from "@/models/Pokemon.model";

export async function selectRandomPokemon(pokemons: Pokemon[], delay: number): Promise<Pokemon> {
    return new Promise((resolve) => {
        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * pokemons.length);
            resolve(pokemons[randomIndex]);
        }, delay);
    });
}
