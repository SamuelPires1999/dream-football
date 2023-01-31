import { IsInt, IsString, Max, Min } from "class-validator";

export class IPlayer {
    @IsString()
    name: string;

    @IsInt()
    age: number;

    @IsString()
    country: string;

    @IsString()
    position: string;

    @IsInt()
    @Min(1)
    @Max(99)
    pac: number;

    @IsInt()
    @Min(1)
    @Max(99)
    sho: number;

    @IsInt()
    @Min(1)
    @Max(99)
    pas: number;

    @IsInt()
    @Min(1)
    @Max(99)
    dri: number;

    @IsInt()
    @Min(1)
    @Max(99)
    def: number;

    @IsInt()
    @Min(1)
    @Max(99)
    phy: number;
}
