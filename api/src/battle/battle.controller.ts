import { Controller, Post, Body, Get } from '@nestjs/common';
import { BattleService } from './battle.service';
import { Battle } from './entities/battle.entity';
import { StartBattleDto } from './dto/start-battle.dto';

@Controller('v1/battles')
export class BattleController {
  constructor(private readonly battleService: BattleService) {}

  @Post()
  async startBattle(@Body() startBattle:StartBattleDto) {
    const battle = await this.battleService.fight(startBattle);
    return {
      success: true,
      battle
    }
  }

  @Get()
  async getBattles() {
    const battles = await this.battleService.getAll();

    return {
      success: true,
      battles
    }
  }
}
