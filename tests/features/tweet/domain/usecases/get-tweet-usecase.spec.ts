import { InvalidParamsError } from '../../../../../src/core/domain/errors/invalid-params-error';
import { Tweet } from '../../../../../src/core/domain/models/tweet-model';
import { ITweetRepository } from '../../../../../src/features/tweet/domain/contracts/tweet-repository-contract';
import { GetTweetUseCase } from '../../../../../src/features/tweet/domain/usecases/get-tweet-usecase';

const makeRepository = () => {
  class MockTweetRepository implements ITweetRepository {
    async getTweet(id: string): Promise<Tweet> {
      return {
        id: 'any_id',
        content: 'any_content',
      };
    }
  }

  return new MockTweetRepository();
};

const makeSut = () => {
  const repository = makeRepository();
  const sut = new GetTweetUseCase(repository);

  return { sut, repository };
};

describe('GetTweet UseCase', () => {
  test('should return InvalidParamsError if params is invalid', async () => {
    const { sut, repository } = makeSut();
    jest.spyOn(repository, 'getTweet').mockRejectedValue(new InvalidParamsError());

    const promise = sut.run('');

    await expect(promise).rejects.toThrowError(new InvalidParamsError());
  });

  test('should call TweetRepository with correct value', async () => {
    const { sut, repository } = makeSut();
    const repo = jest.spyOn(repository, 'getTweet');

    await sut.run('any_id_tweet');

    expect(repo).toBeCalledWith('any_id_tweet');
  });

  test('should return Tweet', async () => {
    const { sut } = makeSut();
    const result = await sut.run('any_id_tweet');

    expect(result).toEqual({
      id: 'any_id',
      content: 'any_content',
    });
  });
});
