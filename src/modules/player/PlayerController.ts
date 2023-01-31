import { Body, Get, JsonController, Post } from "routing-controllers";
import { IPlayer } from "./types";
import { createPlayer, listPlayers } from "./PlayerService";

@JsonController("/player")
export class PlayerController {
    @Get()
    async list() {
        const data = await listPlayers();
        return {
            data,
        };
    }

    @Post("/create")
    async create(@Body({ validate: true }) input: IPlayer) {
        try {
            const data = await createPlayer(input);

            return {
                player: data,
            };
        } catch (error) {
            console.log(error);
        }
    }
}
