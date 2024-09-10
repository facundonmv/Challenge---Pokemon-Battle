import { IsNotEmpty, IsNumber } from "class-validator";
import { AreDifferent } from "../helpers/decorators";

export class StartBattleDto {

    @IsNotEmpty({ message: 'The pokemon1Id field is required.' })
    @IsNumber()
    pokemon1Id: number;

    @IsNotEmpty({ message: 'The pokemon2Id field is required.' })
    @IsNumber()
    @AreDifferent('pokemon1Id', { message: 'Pokemon1Id and Pokemon2Id must be different.' })
    pokemon2Id: number;
}