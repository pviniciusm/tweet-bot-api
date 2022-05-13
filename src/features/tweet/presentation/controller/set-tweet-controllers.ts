import { Request, Response } from "express";
import { SetQuotedTweet, SetSingleTweet } from "../../domain/usecases/set-tweet-usecase";

export class SetSingleTweetController {
    constructor(private useCase: SetSingleTweet) {}
    async handle(request: Request, response: Response) {
        const { text } = request.body;

        if (!text) {
            return response.status(400).send({
                ok: false,
                message: "Text not provided.",
            });
        }

        try {
            await this.useCase.run(text);
            return response.status(200).json(text);
        } catch (error) {
            if (error instanceof Error) response.status(418).json(error.message);
        }
    }
}
export class SetQuotedTweetController {
    constructor(private useCase: SetQuotedTweet) {}
    async handle(request: Request, response: Response) {
        const data = request.body;

        try {
            await this.useCase.run(data);
            return response.status(200).json(data);
        } catch (error) {
            if (error instanceof Error) response.status(418).json(error.message);
        }
    }
}
