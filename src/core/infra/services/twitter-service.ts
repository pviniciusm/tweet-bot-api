import { SendTweetV2Params, TweetV2PostTweetResult, TwitterApi, UserV2Result } from 'twitter-api-v2';
import { Tweet } from '../../domain/models/tweet-model';
import 'dotenv/config';

export class TwitterService {
  private static client: TwitterApi;

  static async initialize() {
    if (!this.client) {
      this.client = new TwitterApi({
        appKey: process.env.APP_KEY ?? '',
        appSecret: process.env.APP_SECRET ?? '',
        accessToken: process.env.ACCESS_TOKEN ?? '',
        accessSecret: process.env.ACCESS_SECRET ?? '',
      });
    }
  }

  static async postTweet(text: string): Promise<boolean | object> {
    const response = await this.client.v2.tweet(text);
    if (!response.data) return false;
    return { ok: true, tweet: response.data };
  }

  static async tweetQuote(id: string, text: string): Promise<Tweet | undefined> {
    const response = await this.client.v2.quote(id, text);

    if (!response.data) return;

    return {
      id: response.data.id,
      content: response.data.text,
    };
  }

  static async getTweetsByQuery(query: string): Promise<Tweet[]> {
    const response = await this.client.v2.search(query + '+lang:pt+-is:retweet');

    if (!response.data.data) return [];

    return response.data.data.map((e) => {
      return {
        id: e.id,
        content: e.text,
      };
    });
  }

  static async getTweet(id: string): Promise<Tweet | undefined> {
    const response = await this.client.v2.singleTweet(id);

    if (!response.data) return;

    return {
      id: response.data.id,
      content: response.data.text,
    };
  }

    static async getLoggedUserId(): Promise<string> {
    const user = await this.client.v2.me();
    return user.data.id;
    }

    static async likeUnlike(userID: string, tweetID: string, like: boolean) {
        if (like){
            console.log(`Dando o like do tweet: ${tweetID}`)
            await this.client.v2.like(userID, tweetID);
        }
        else {
            console.log(`Dando o dislike do tweet: ${tweetID}`)
            await this.client.v2.unlike(userID, tweetID);
        }
    }
}
