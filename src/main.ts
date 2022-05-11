import { TwitterService } from "./core/infra/services/twitter-service";
import { RedisConnection } from "./core/infra/database/connections/redis-connection";
import { DatabaseConnection } from "./core/infra/database/connections/database-connection";
import { Server } from "./core/presentation/server/index";
import express from "express";
import cors from "cors";
import "dotenv/config";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) =>
    res.send({
        ok: "asausas",
    })
);

DatabaseConnection.initialize().then(() => {
    RedisConnection.initialize();
    Server.initialize();

    TwitterService.initialize();

    TwitterService.getTweet("1524129781733892097");

    TwitterService.tweet();
});
