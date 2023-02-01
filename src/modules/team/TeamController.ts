import { Body, Get, JsonController, Post } from "routing-controllers";
import { createTeam, listTeams } from "./TeamService";
import { ITeam } from "./types";

@JsonController("/team")
export class TeamController {
    @Get()
    async list() {
        const data = await listTeams();

        return {
            data,
        };
    }

    @Post("/create")
    async create(@Body({ validate: true }) input: ITeam) {
        const data = await createTeam(input);

        return {
            data,
        };
    }
}
