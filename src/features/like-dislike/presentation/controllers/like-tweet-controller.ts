import { Request, Response } from "express";
import { MissingFieldError } from "../../../../core/domain/errors/missing-field-error";
import {ILikeTweetParams, LikeTweetUseCase} from "../../domain/usecases/like-tweet-usecase"

export class LikeTweetController {
    constructor (private likeTweetUseCase: LikeTweetUseCase){}
    async handle(request: Request, response: Response) {
        const useCaseData: ILikeTweetParams = {
            tweetID: request.body.tweetID
        }

        try {
            if (!useCaseData.tweetID){
                throw new MissingFieldError("TwitterID");
            }
            this.likeTweetUseCase.run(useCaseData);
            return response.status(200);
        }
        catch (error){
            return response.status(400).send(error);
        }
    }
}