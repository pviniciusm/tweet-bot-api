import { TwitterService } from "../../../../core/infra/services/twitter-service";


export interface LikeTweetParams {
    tweetID: string;
}

export class LikeTweetUsecase {
    constructor(){}
    async run(params: LikeTweetParams){
        const userID: string = await TwitterService.getLoggedUserId();
        TwitterService.likeUnlike(userID, params.tweetID, true);
    }
}