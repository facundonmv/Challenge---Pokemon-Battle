import { Pokemon } from "./Pokemon.model";

export interface Battle {
    id: number
    winner: Pokemon;
    looser: Pokemon;
    winnerId: number;
    duration: number;
    rounds: number;
    winnerHp: number;
}