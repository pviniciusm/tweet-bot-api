import { TwitterService } from "../../../../core/infra/services/twitter-service";


export interface IDislikeTweetParams {
    tweetID: string;
}

export class DislikeTweetUseCase {
    constructor(){}
    async run(params: IDislikeTweetParams){
        const userID: string = await TwitterService.getLoggedUserId();
        TwitterService.likeUnlike(userID, params.tweetID, true);
    }
}