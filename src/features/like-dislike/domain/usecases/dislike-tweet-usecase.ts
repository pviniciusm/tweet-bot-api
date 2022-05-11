import { TwitterService } from "../../../../core/infra/services/twitter-service";


export interface DislikeTweetParams {
    tweetID: string;
}

export class DislikeTweetUsecase {
    constructor(){}
    async run(params: DislikeTweetParams){
        const userID: string = await TwitterService.getLoggedUserId();
        TwitterService.likeUnlike(userID, params.tweetID, true);
    }
}