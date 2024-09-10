import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Battle } from 'src/battle/entities/battle.entity';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';

@Injectable()
export class DatabaseConfigService {
  constructor(private configService: ConfigService) {}

  public getDatabaseConfig(): TypeOrmModuleOptions {
    return {
      type: 'sqlite',
      database: this.configService.get<string>('DATABASE'),
      entities: [Pokemon, Battle],
      synchronize: true, // Set to false in production and using migrations
    };
  }
}
