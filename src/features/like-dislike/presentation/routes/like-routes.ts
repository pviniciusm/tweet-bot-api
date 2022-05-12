import { Request, response, Response, Router } from "express";
import { DislikeTweetUseCase } from "../../domain/usecases/dislike-tweet-usecase";
import { LikeTweetUseCase } from "../../domain/usecases/like-tweet-usecase";

import { DislikeTweetController } from "../controllers/dislike-tweet-controller";
import { LikeTweetController } from "../controllers/like-tweet-controller";

export class LikeDislikeRoutes {
    static getRoutes(){
        const router = Router();

        const likeTweetUseCase = new LikeTweetUseCase();
        const dislikeTweetUseCase = new DislikeTweetUseCase();

        router.post("/", (req: Request, res: Response) => {
            return new LikeTweetController(likeTweetUseCase).handle(req, res);
        });

        router.delete("/",(req: Request, res: Response) => {
            return new DislikeTweetController(dislikeTweetUseCase).handle(req, res);
        })

        return router;
    }
}