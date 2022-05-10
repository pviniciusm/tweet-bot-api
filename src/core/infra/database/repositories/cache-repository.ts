import { RedisConnection } from "../connections/redis-connection";

export class CacheRepository {
    private connection = RedisConnection.getConnection();

    async set(key: string, value: any) {
        await this.connection.set(key, JSON.stringify(value));
    }

    async setEx(key: string, value: any) {
        await this.connection.set(key, JSON.stringify(value), "EX", 15);
    }

    async get(key: string): Promise<any> {
        const result = await this.connection.get(key);

        if (result === null) return undefined;

        return JSON.parse(result);
    }

    async delete(key: string) {
        await this.connection.del(key);
    }
}
