import "./PokemonItem.css"
import Card from '@/components/Card/Card';
import Text from '@/components/Text/Text';
import { PokemonItemProps } from './types';

export default function PokemonItem(props:PokemonItemProps) {

  const { pokemon } = props;

  return (
    <Card 
          cardMediaUrl={pokemon.imageUrl}
          classes={{"root": "pokemon-item-card"}}
        >
      <Text value={pokemon.name} variant='subtitle1' fontWeight={500}  />
    </Card>
  )
}
