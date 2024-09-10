import { Pokemon } from "@/models/Pokemon.model"
export type PokemonsListProps = {
    pokemons: Pokemon[];
    handleSelectPokemon: (pokemon:Pokemon) => void
}