import { Text } from "@/components";
import './BattleWinner.css'
import { BattleWinnerProps } from "./types";

export default function BattleWinner(props:BattleWinnerProps) {

   const { winnerName } = props;

   const winnerText = `${winnerName} wins!`;

  return (
    <div className={`battle-winner-wrapper ${!winnerName && 'hidden'}`}>
      <Text value={winnerText} variant='h4' fontWeight={500} textAlign={"left"} />
    </div>
  )
}
