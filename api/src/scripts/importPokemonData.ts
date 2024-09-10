import { DataSource } from 'typeorm';
import { Pokemon } from '../pokemon/entities/pokemon.entity';
import {pokemon as pokemonData} from '../../data/pokemon.json';

const dataSource = new DataSource({
  type: 'sqlite',
  database: 'pokemon-battle.db',
  entities: [Pokemon],
  synchronize: false, 
});

async function importPokemonData() {
  try {
    await dataSource.initialize();
    const pokemonRepository = dataSource.getRepository(Pokemon);

    const pokemons = pokemonData.map((data) => {
      const pokemon = new Pokemon();
      pokemon.name = data.name;
      pokemon.attack = data.attack;
      pokemon.defense = data.defense;
      pokemon.speed = data.speed;
      pokemon.hp = data.hp;
      pokemon.imageUrl = data.imageUrl;
      pokemon.type = data.type;
      return pokemon;
    });

    await pokemonRepository.save(pokemons);
    console.log('Datos importados correctamente');
  } catch (error) {
    console.error('Error al importar los datos:', error);
  } finally {
    await dataSource.destroy();
  }
}

importPokemonData();
