import request from "supertest";
import { Server } from "../../../../../src/core/presentation/server/index";
import { DatabaseConnection } from "../../../../../src/core/infra/database/connections/database-connection";
import { RedisConnection } from "../../../../../src/core/infra/database/connections/redis-connection";
import { TwitterService } from "../../../../../src/core/infra/services/twitter-service";
describe("set-tweet-controller test", () => {
    let app: Express.Application | undefined;
    // const app = Server.getServer();

    beforeAll(async () => {
        await DatabaseConnection.initialize();
        RedisConnection.initialize();
        await TwitterService.initialize();
        app = Server.getServer();
    });

    test("should return error (400) if text is not provided", async () => {
        await request(app)
            .post("/tweet")
            .send({})
            .expect(400)
            .expect((response) => {
                expect(response.body).not.toBeFalsy();
                expect(response.body.ok).toEqual(false);
                expect(response.body.message).toEqual("Text not provided.");
            });
    });
});
