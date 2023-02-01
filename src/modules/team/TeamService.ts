import { db } from "../../database";
import { ITeam } from "./types";

export const createTeam = async (input: ITeam) => {
    const team = await db.team.create({
        data: input,
    });

    return team;
};

export const listTeams = async () => {
    const list = await db.team.findMany();

    return list;
};
