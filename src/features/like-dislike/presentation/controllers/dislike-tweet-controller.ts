import { Request, Response } from "express";
import { MissingFieldError } from "../../../../core/domain/errors/missing-field-error";
import {IDislikeTweetParams, DislikeTweetUseCase} from "../../domain/usecases/dislike-tweet-usecase"

export class DislikeTweetController {
    constructor (private dislikeTweetUseCase: DislikeTweetUseCase){}
    async handle(request: Request, response: Response) {
        const useCaseData: IDislikeTweetParams = {
            tweetID: request.body.tweetID
        }
        try {
            if (!useCaseData.tweetID){
                throw new MissingFieldError("TwitterID");
            }
            this.dislikeTweetUseCase.run(useCaseData);
            return response.status(200).send("Dis-Foi!");
        }
        catch (error){
            return response.status(400).send(error);
        }
    }
}