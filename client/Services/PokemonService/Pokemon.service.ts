import Repository from "@/http/http";
import { GetPokemonsParams, GetPokemonsResponse } from "./types";


export class PokemonsService {
  private endpoint: string;
  private repository: Repository;

  constructor() {
    this.endpoint = 'http://localhost:3006/api/v1/pokemons/';
    this.repository = new Repository();
  }

  async getPokemons(getBotsParams: GetPokemonsParams): Promise<GetPokemonsResponse> {
    try {
      const { signal } = getBotsParams;

      const endpoint = this.endpoint;

      const data: GetPokemonsResponse = await this.repository.get({
        endpoint,
        signal,
      });

      return Promise.resolve(data);
    } catch (error) {
      return Promise.reject(error);
    }
  }

}