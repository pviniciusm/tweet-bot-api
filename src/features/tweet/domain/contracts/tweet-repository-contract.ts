import { Tweet } from '../models/tweet-model';

export interface ITweetRepository {
  getTweet(id: string): Promise<Tweet>;
}
