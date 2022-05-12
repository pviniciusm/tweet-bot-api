import { ListFollowersUseCase } from "./../../domain/usecases/list-followers-usecase";
import { ListFollowersController } from "./../controllers/list-followers-controller";
import { Request, Response, Router } from "express";

const useCase = new ListFollowersUseCase();
const controller = new ListFollowersController(useCase);

export class FollowerRoutes {
    static getRoutes() {
        const router = Router();
        router.get("/:userId", (req: Request, res: Response) =>
            controller.handle(req, res)
        );

        return router;
    }
}
