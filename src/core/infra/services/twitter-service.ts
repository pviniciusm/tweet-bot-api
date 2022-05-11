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
}
