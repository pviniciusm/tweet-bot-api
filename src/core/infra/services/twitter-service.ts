import { TwitterApi } from "twitter-api-v2";
import "dotenv/config";

export class TwitterService {
    private static client: TwitterApi;

    static async initialize() {
        if (!this.client) {
            this.client = new TwitterApi({
                appKey: process.env.APP_KEY ?? "",
                appSecret: process.env.APP_SECRET ?? "",
                accessToken: process.env.ACCESS_TOKEN ?? "",
                accessSecret: process.env.ACCESS_SECRET ?? "",
            });
        }
    }

    static async tweet() {}

    static async getTweet(id: string) {}

    static async likeUnlike(like: boolean) {}

    static async listFollowers(userId: string) {
        return await this.client.v2.followers(userId, {
            max_results: 200,
        });
    }

    static async getUser(username: string) {
        return await this.client.v2.userByUsername(username, {
            "user.fields": "public_metrics",
        });
    }

    static async listTweets() {
        return await this.client.v2.search("samuel");
    }
}
