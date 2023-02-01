import { IsString } from "class-validator";
import { IPlayer } from "../player/types";

export class ITeam {
    @IsString()
    name: string;

    @IsString()
    country: string;
}
