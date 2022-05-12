import { NotFoundError } from "./../../../../core/domain/errors/not-found-error";
import { TwitterService } from "./../../../../core/infra/services/twitter-service";
export class ListFollowersUseCase {
    constructor() {}

    async run(username: string) {
        const user = await TwitterService.getUser(username);
        if (!user) {
            throw new NotFoundError();
        }

        // const followers = await TwitterService.listFollowers(user.data.id);

        const tweet = await TwitterService.listTweets();

        return {
            username: username,
            tweet: tweet.data.data,
            name: user.data.name,
            counter: user.data.public_metrics?.followers_count,
            tweetCounter: user.data.public_metrics?.tweet_count,
            //followers,
        };
    }
}
