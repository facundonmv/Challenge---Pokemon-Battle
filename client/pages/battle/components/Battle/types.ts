import { Pokemon } from "@/models/Pokemon.model";

export type BattleProps = {
    pokemonSelected: Pokemon;
    pokemonOponent: Pokemon | null;
    isSelectingOponent: boolean;
}