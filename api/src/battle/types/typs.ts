import { Battle } from "../entities/battle.entity";

export type BattlesResponse = {
    success: boolean;
    pokemons: Battle[]
};