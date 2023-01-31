import { db } from "../../database";
import { IPlayer } from "./types";

export const createPlayer = async (input: IPlayer) => {
    const player = await db.player.create({
        data: input,
    });

    console.log(player);
    return player;
};

export const listPlayers = async () => {
    const list = await db.player.findMany();

    return list;
};
