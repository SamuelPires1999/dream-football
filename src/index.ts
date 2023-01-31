import "reflect-metadata";
import Express from "express";
import cors from "cors";
import morgan from "morgan";
import { useExpressServer } from "routing-controllers";
import { PlayerController } from "./modules/player/PlayerController";

const main = async () => {
    const app = Express();
    app.use(cors());
    app.use(morgan("dev"));
    app.use(Express.json());

    useExpressServer(app, {
        controllers: [PlayerController],
        classTransformer: true,
    });

    app.listen(3000, () => {
        console.log("======= LIVE =======");
    });
};

main().catch(error => console.log(error));
