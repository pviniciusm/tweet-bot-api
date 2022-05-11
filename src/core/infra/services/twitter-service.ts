import { SendTweetV2Params, TweetV2PostTweetResult, TwitterApi } from 'twitter-api-v2';
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

  static async tweet(text: string): Promise<boolean> {
    const response = await this.client.v2.tweet(text);
    if (!response.data) return false;
    return true;
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

  static async likeUnlike(like: boolean) {}
}
