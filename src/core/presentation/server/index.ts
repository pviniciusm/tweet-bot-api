import { makeRoutes } from "./../routes/index";
import express from "express";
import cors from "cors";

export class Server {
    private static app: any;

    static initialize() {
        this.app = this.getServer();

        this.app.listen(8081, () => {
            console.log("Server is running.");
        });
    }

    static getServer() {
        const app = express();
        app.use(express.json());
        app.use(cors());

        makeRoutes(app);

        return app;
    }
}
