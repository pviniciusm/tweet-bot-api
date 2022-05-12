import { InvalidParamsError } from '../../../../core/domain/errors/invalid-params-error';
import { Tweet } from '../../../../core/infra/database/entities/tweet';
import { TwitterService } from '../../../../core/infra/services/twitter-service';

type quoteTweetData = {
  id: string;
  text: string;
};

export class SetSingleTweet {
  async run(text: string): Promise<Object> {
    if (!text) {
      throw new InvalidParamsError();
    }
    const NewTweet = TwitterService.postTweet(text);
    return NewTweet;
  }
}
export class SetQuotedTweet {
  async run(data: quoteTweetData): Promise<any> {
    if (!data) {
      throw new InvalidParamsError();
    }
    const NewTweet = TwitterService.tweetQuote(data.id, data.text);
    return NewTweet;
  }
}
