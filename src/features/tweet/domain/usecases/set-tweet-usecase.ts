import { InvalidParamsError } from '../../../../core/domain/errors/invalid-params-error';
import { TwitterService } from '../../../../core/infra/services/twitter-service';

export class SetSingleTweet {
  public repository: TwitterService;

  async run(text: string): Promise<Object> {
    if (!text) {
      throw new InvalidParamsError();
    }
    const NewTweet = this.repository.postTweet(text);
    return NewTweet;
  }
}
