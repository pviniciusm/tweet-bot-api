import { Connection, createConnection } from "typeorm";

export class DatabaseConnection {
    private static _connection: Connection;

    static async initialize() {
        if (!this._connection) {
            this._connection = await createConnection();
        }

        console.info("Database is connected.");
    }

    static getConnection() {
        if (!this._connection) {
            throw new Error("Database is not connected.");
        }

        return this._connection;
    }
}
