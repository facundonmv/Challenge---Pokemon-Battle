
import './Battle.css'
import BattleWinner from './BattleWinner/BatleWinner';
import { useEffect, useState } from 'react';
import { BattleProps } from './types';
import Players from './Players/Players';
import { Pokemon } from '@/models/Pokemon.model';
import usePostBattle from '../../hooks/usePostBattle';

export default function Battle(props:BattleProps) {

  const { pokemonSelected, pokemonOponent, isSelectingOponent } = props;

  const [winner, setWinner] = useState<Pokemon | null>(null);

  const battle = usePostBattle();

  const handleBattle = () => {
    if (!pokemonSelected || !pokemonOponent) return;
    battle.post({
      pokemon1Id: pokemonSelected.id,
      pokemon2Id: pokemonOponent.id
    })
  }

  useEffect(() => {
    if(!battle.success || !battle.data) return;
  
    setWinner(battle.data?.winner)
  }, [battle.success])

  useEffect(() => {
    setWinner(null)
  }, [pokemonSelected])
  
  return (
    <div className="battle-wrapper">
      <BattleWinner winnerName={winner?.name ?? null} />
      <Players 
        isSelectingOponent={isSelectingOponent} 
        pokemonSelected={pokemonSelected} 
        pokemonOponent={pokemonOponent}
        fighting={battle.isLoading} 
        handleBattle={handleBattle} 
      />
    </div>
  )
}
