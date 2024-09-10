import { Battle } from "@/models/Battle.model";
import { PostBattleBody } from "@/pages/battle/hooks/types";

export type PostBattleParams = {
    signal: AbortSignal;
    information: PostBattleBody;
};

export type PostBattleResponse = {
    success: boolean;
    battle: Battle
};