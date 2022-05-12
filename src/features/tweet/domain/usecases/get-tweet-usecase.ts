import { Tweet } from '../../../../core/domain/models/tweet-model';
import { InvalidParamsError } from '../../../../core/domain/errors/invalid-params-error';
import { ITweetRepository } from '../contracts/tweet-repository-contract';

export class GetTweetUseCase {
  constructor(private repository: ITweetRepository) {}
  async run(id: string): Promise<Tweet> {
    if (!id) {
      throw new InvalidParamsError();
    }
    const tweet = await this.repository.getTweet(id);
    return tweet;
  }
}
