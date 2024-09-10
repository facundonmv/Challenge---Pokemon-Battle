import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Battle } from './entities/battle.entity';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { StartBattleDto } from './dto/start-battle.dto';

@Injectable()
export class BattleService {
  constructor(
    @InjectRepository(Battle)
    private battleRepository: Repository<Battle>,
    @InjectRepository(Pokemon)
    private pokemonRepository: Repository<Pokemon>,
  ) {}

  private determineOrder(pokemon1: Pokemon, pokemon2: Pokemon): [Pokemon, Pokemon] {
    if (pokemon1.speed > pokemon2.speed) return [pokemon1, pokemon2];
    if (pokemon2.speed > pokemon1.speed) return [pokemon2, pokemon1];
    if (pokemon1.attack > pokemon2.attack) return [pokemon1, pokemon2];
    return [pokemon2, pokemon1];
  }

  private pokemonHit(attacker: Pokemon, defender: Pokemon){
    const damage = Math.max(1, attacker.attack - defender.defense);
    defender.hp -= damage;
  }

  private pokemonAttack(attacker: Pokemon, defender: Pokemon) {
    this.pokemonHit(attacker, defender)
    if(defender.hp <= 0){
        return attacker
    }
    return null
  } 

  private processFight(rounds: number, attackerIndex: number, Pokemons: Pokemon[]){
    const defenderIndex = (attackerIndex + 1) % 2;
    const winner = this.pokemonAttack(Pokemons[attackerIndex], Pokemons[defenderIndex])

    if(attackerIndex === 0){
        rounds++    
    }

    if(winner){
        return {winner, rounds }
    }

    
    return this.processFight(rounds, defenderIndex, Pokemons)
}

  async fight(battleBody: StartBattleDto): Promise<Battle> {

    const { pokemon1Id, pokemon2Id } = battleBody;

    const pokemon1 = await this.pokemonRepository.findOneBy({ id: pokemon1Id });
    const pokemon2 = await this.pokemonRepository.findOneBy({ id: pokemon2Id });

    if(!pokemon1) {
        throw new HttpException(`Pokemon with id ${pokemon1Id} not found`, 404);
    }

    if(!pokemon2) {
        throw new HttpException(`Pokemon with id ${pokemon2Id} not found`, 404);
    }

    const pokemonFight1 = { ...pokemon1}
    const pokemonFight2 = { ...pokemon2}

    const startTime = new Date();

    const [first, second] = this.determineOrder(pokemonFight1, pokemonFight2);

    const { winner, rounds } = this.processFight(0, 0, [first, second])

    const endTime = new Date();
    const duration = endTime.getTime() - startTime.getTime();

    const battle = this.battleRepository.create({
      winner,
      looser: pokemon1.id === winner.id ? pokemon2 : pokemon1,
      startTime,
      endTime,
      duration,
      rounds,
      winnerHp: winner.hp,
    });

    this.battleRepository.save(battle);

    return battle;
  }

  async getAll(): Promise<Battle[]> {
    return await this.battleRepository.find();
  }

}
