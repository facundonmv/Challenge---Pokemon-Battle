import { Module } from '@nestjs/common';
import { BattleService } from './battle.service';
import { BattleController } from './battle.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { Battle } from './entities/battle.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pokemon, Battle])],
  controllers: [BattleController],
  providers: [BattleService],
})
export class BattleModule {}
