import { CreateUserController } from "./../controllers/create-user-controller";
import { Request, response, Response, Router } from "express";
import { GetUserController } from "../controllers/get-user-controller";
import { ListUserController } from "../controllers/list-users-controller";

export class UserRoutes {
    static getRoutes() {
        const router = Router();

        router.post("/", (req: Request, res: Response) => {
            return new CreateUserController().handle(req, res);
        });

        router.get("/:username", (req: Request, res: Response) => {
            return new GetUserController().handle(req, res);
        });

        router.get("/", (req: Request, res: Response) => {
            return new ListUserController().handle(req, res);
        });

        return router;
    }
}
