import { Card } from "@/components";
import { PokemonCardProps } from "./types";
import "./PokemonCard.css"
import { Text } from "@/components";
import { BorderLinearProgress } from "@/components";
import { StatsLabels } from "@/constants/Stats";
import { PokemonStat } from "@/models/Pokemon.model";

export default function PokemonCard(props: PokemonCardProps) {

    const { pokemon } = props;

    const stats: PokemonStat[] = ['hp', 'attack', 'defense', 'speed']

  return (
        <Card 
            cardMediaUrl={pokemon.imageUrl}
            classes={{"root": "pokemon-card"}}
        >
            <div className="pokemon-data">
                <Text value={pokemon.name} variant='subtitle1' fontWeight={500}  />
            
                {
                    stats.map((stat) => 
                        <div key={stat} className="pokemon-stat-wrapper">
                            <Text value={StatsLabels[stat]} variant='caption' fontWeight={200} />
                            <div className="linear-progress-wrapper">
                                <BorderLinearProgress value={pokemon[stat]*10}/>
                            </div>
                        </div>
                    )
                }
            </div>
        </Card>
  )
}
