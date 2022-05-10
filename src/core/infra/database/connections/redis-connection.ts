import ioredis, { Redis } from "ioredis";
import "dotenv/config";

export class RedisConnection {
    private static connection: Redis;

    static initialize() {
        if (!this.connection) {
            this.connection = new ioredis();
        }

        console.log("Redis is connected.");
    }

    static getConnection() {
        if (!this.connection) {
            throw new Error("Redis is not connected");
        }

        return this.connection;
    }
}
