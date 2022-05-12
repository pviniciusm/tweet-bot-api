import { Request, Response } from "express";
import { ListFollowersUseCase } from "../../domain/usecases/list-followers-usecase";

export class ListFollowersController {
    constructor(private useCase: ListFollowersUseCase) {}

    async handle(req: Request, res: Response) {
        try {
            const { userId } = req.params;

            if (!userId) {
                return res.status(400).send({
                    ok: false,
                    error: "userId not provided",
                });
            }

            const result = await this.useCase.run(userId);
            return res.status(200).send({
                ok: true,
                data: result,
            });
        } catch (error) {
            return res.status(500).send({
                ok: false,
                error: (error as Error).message,
            });
        }
    }
}
