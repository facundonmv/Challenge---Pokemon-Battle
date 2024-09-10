import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, Put } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { PokemonResponse, PokemonsResponse } from './types/typs';

@Controller('v1/pokemons')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Post()
  async create(@Body() createPokemonDto: CreatePokemonDto) {
    const pokemon = await this.pokemonService.create(createPokemonDto);

    const response: PokemonResponse = {
      success: true,
      pokemon
    };

    return response
  }

  @Get()
  async findAll() {
    const pokemons = await this.pokemonService.findAll();

    const response: PokemonsResponse = {
      success: true,
      pokemons
    };

    return response

  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    const pokemon = await this.pokemonService.findOne(+id);

    if(!pokemon){
      throw new HttpException('Pokemon not found', 404);
    };

    const response: PokemonResponse = {
      success: true,
      pokemon
    };

    return response
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() updatePokemonDto: UpdatePokemonDto) {
    const pokemon = await this.pokemonService.update(+id, updatePokemonDto);

    if(!pokemon){
      throw new HttpException('Pokemon not found', 404);
    };

    const response: PokemonResponse = {
      success: true,
      pokemon
    };

    return response
  }

  @Put(':id')
  async replace(@Param('id') id: number, @Body() updatePokemonDto: CreatePokemonDto) {
    const pokemon = await this.pokemonService.update(+id, updatePokemonDto);

    if(!pokemon){
      throw new HttpException('Pokemon not found', 404);
    };

    const response: PokemonResponse = {
      success: true,
      pokemon
    };

    return response
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
   await this.pokemonService.remove(+id);

    return {
      success: true,
    };
  }
}
