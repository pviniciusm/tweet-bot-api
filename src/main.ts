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

DatabaseConnection.initialize().then(Server.initialize);
