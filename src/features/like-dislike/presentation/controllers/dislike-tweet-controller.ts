import { Request, Response } from "express";
import {IDislikeTweetParams, DislikeTweetUseCase} from "../../domain/usecases/dislike-tweet-usecase"

export class DislikeTweetController {
    constructor (private dislikeTweetUseCase: DislikeTweetUseCase){}
    async handle(request: Request, response: Response) {
        const useCaseData: IDislikeTweetParams = {
            tweetID: request.body.tweetID
        }
        try {
            this.dislikeTweetUseCase.run(useCaseData);
            return response.status(200);
        }
        catch (error){
            return response.status(400).send(error);
        }
    }
}