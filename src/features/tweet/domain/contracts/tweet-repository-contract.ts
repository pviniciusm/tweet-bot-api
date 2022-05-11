import { Tweet } from '../../../../core/domain/models/tweet-model';

export interface ITweetRepository {
  getTweet(id: string): Promise<Tweet>;
}
