import { PlayersProps } from "./types";
import { Button } from "@/components";
import './Players.css'
import PokemonCard from "./PokemonCard/PokemonCard";
import { CircularProgress } from "@mui/material";
import { Text } from "@/components";

export default function Players(props:PlayersProps) {

  const { pokemonSelected, pokemonOponent, isSelectingOponent, fighting, handleBattle } = props;

  return (
    <div className="players-wrapper-container">
      <div className="players-item">
        <PokemonCard pokemon={pokemonSelected} />
      </div>

      <div className="button-item">
        {
          (!isSelectingOponent && !fighting) && <Button sx={{padding: '14px', width: "12rem", height: "3rem"}} text={'Start Battle'} color="success" variant="contained" onClick={handleBattle}/>
        }
        {
          (isSelectingOponent && !fighting) && 
            <Text 
                value="Selecting oponent..."
                fontSize={24}
                fontWeight={300}
                color="#d4dad9"
                variant="body1"
            />
        }
        {
          (!isSelectingOponent && fighting) && 
            <CircularProgress />
        }
      </div>
        
      <div className="players-item">
        {
            !isSelectingOponent && pokemonOponent &&
            <PokemonCard pokemon={pokemonOponent} />
        } 
      </div>
    </div>
  )
}
