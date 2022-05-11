import { Request, Response } from "express";
import {ILikeTweetParams, LikeTweetUseCase} from "../../domain/usecases/like-tweet-usecase"

export class LikeTweetController {
    constructor (private likeTweetUseCase: LikeTweetUseCase){}
    async handle(request: Request, response: Response) {
        const useCaseData: ILikeTweetParams = {
            tweetID: request.body.tweetID
        }
        try {
            this.likeTweetUseCase.run(useCaseData);
            return response.status(200);
        }
        catch (error){

        }
    }
}