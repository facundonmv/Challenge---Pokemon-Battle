import PokemonItem from "./PokemonItem/PokemonItem";
import "./PokemonsList.css"
import { Text } from "@/components";import { PokemonsListProps } from "./types";

export default function PokemonsList(props:PokemonsListProps) {

  const { pokemons, handleSelectPokemon } = props;

  return (
    <div className="pokemons-list-wrapper">
        <Text variant="h5" fontWeight={400} value="Select your Pokemon" />
        <div className="pokemons-list">
          {
            pokemons.map((pokemon) => 
              <div key={pokemon.id} className="pokemon-item" onClick={() => handleSelectPokemon(pokemon)}>
                <PokemonItem pokemon={pokemon}/>
              </div>
            )
          }
        </div>
  </div>
  )
}
