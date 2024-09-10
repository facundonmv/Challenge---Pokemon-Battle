"use client"
import PokemonsList from './PokemonsList/PokemonsList';
import './BattleContainer.css'
import Battle from './Battle/Battle';
import { Text } from '@/components';
import { useEffect, useMemo, useState } from 'react';
import useGetPokemons from '@/pages/pokemons/hooks/useGetPokemons';
import { selectRandomPokemon } from '../utils/selectOponent';
import { Pokemon } from '@/models/Pokemon.model';

export default function BattleContainer() {
  const [pokemonSelected, setPokemonSelected] = useState<Pokemon | null>(null);
  const [pokemonOponent, setPokemonOponent] = useState<Pokemon | null>(null);
  const [isSelectingOponent, setIsSelectingOponent] = useState<boolean>(false);

  const getPokemons = useGetPokemons();

  const handleSelectPokemon = (pokemon: Pokemon) => {
    if(pokemonSelected?.id === pokemon.id || isSelectingOponent) return;
    setPokemonSelected(pokemon);
    setPokemonOponent(null);
  };

  useEffect(() => {
    getPokemons.get();
  }, []);

  const selectPokemon = useMemo(() => async (pokemons: Pokemon[], selectedPokemonId: number) => {
    setIsSelectingOponent(true);
    let randomPokemon: Pokemon;
    do {
      randomPokemon = await selectRandomPokemon(pokemons, 3000);
    } while (randomPokemon.id === selectedPokemonId);
    setIsSelectingOponent(false);
    setPokemonOponent(randomPokemon);
  }, []);

  useEffect(() => {
    if (!pokemonSelected || !getPokemons.data) return;

    selectPokemon(getPokemons.data, pokemonSelected.id);
  }, [pokemonSelected, getPokemons.data, selectPokemon]);

  return (
    <div className="battle-container-wrapper">
      {
        getPokemons.data && 
        <>
          <Text variant="h2" fontWeight={400} value='Battle of Pokemon' />
          <PokemonsList pokemons={getPokemons.data} handleSelectPokemon={handleSelectPokemon} />
          {
            pokemonSelected && 
            <Battle isSelectingOponent={isSelectingOponent} pokemonSelected={pokemonSelected} pokemonOponent={pokemonOponent} />
          }
        </>
      }
    </div>
  )
}
