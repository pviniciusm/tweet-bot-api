import ioredis, { Redis } from "ioredis";
import "dotenv/config";

export class RedisConnection {
    private static connection: Redis;

    static initialize() {
        if (!this.connection) {
            this.connection = new ioredis(
                "redis://:uFHsJ9KEguXho2fOVeRVBX4BPXcoyjZm@redis-15119.c13.us-east-1-3.ec2.cloud.redislabs.com:15119"
            );
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
