import { makeRoutes } from "./../routes/index";
import express from "express";
import cors from "cors";

export class Server {
    static initialize() {
        const app = express();
        app.use(express.json());
        app.use(cors());

        makeRoutes(app);

        app.listen(8081, () => {
            console.log("Server is running.");
        });
    }
}
