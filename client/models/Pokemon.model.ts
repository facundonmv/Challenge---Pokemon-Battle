export type PokemonStat = "hp" | "attack" | "defense" | "speed";
export interface Pokemon {
    id: number
    name: string
    type?: string
    imageUrl?: string
    hp: number
    attack: number
    defense: number
    speed: number
}