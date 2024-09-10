import Repository from "@/http/http";
import { PostBattleParams, PostBattleResponse } from "./types";


export class BattlesService {
  private endpoint: string;
  private repository: Repository;

  constructor() {
    this.endpoint = 'http://localhost:3006/api/v1/battles/';
    this.repository = new Repository();
  }

  async postBattle(getBotsParams: PostBattleParams): Promise<PostBattleResponse> {
    try {
      const { signal, information} = getBotsParams;

      const endpoint = this.endpoint;

      const data: PostBattleResponse = await this.repository.post({
        endpoint,
        signal,
        information
      });

      return Promise.resolve(data);
    } catch (error) {
      return Promise.reject(error);
    }
  }

}