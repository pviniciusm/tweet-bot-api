import { TwitterService } from "../../../../core/infra/services/twitter-service";


export interface ILikeTweetParams {
    tweetID: string;
}

export class LikeTweetUseCase {
    constructor(){}
    async run(params: ILikeTweetParams){
        const userID: string = await TwitterService.getLoggedUserId();
        console.log(`UserID: ${userID}`)
        console.log(`TweetID: ${params.tweetID}`)
        await TwitterService.likeUnlike(userID, params.tweetID, true);
    }
}