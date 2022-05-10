import { DatabaseConnection } from "./core/infra/database/connections/database-connection";
import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

DatabaseConnection.initialize().then(() => {
    app.listen(8081, () => console.log("Server is running..."));
});
