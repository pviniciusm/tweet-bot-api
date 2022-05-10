import { Request, Response } from "express";
import { ListUserUseCase } from "../../domain/usecases/list-users-usecase";

export class ListUserController {
    async handle(request: Request, response: Response) {
        try {
            const useCase = new ListUserUseCase();
            const result = await useCase.run();

            return response.status(200).send({
                ok: true,
                message: "ok",
                data: result,
            });
        } catch (error) {
            return response.status(500).send({
                ok: false,
                message: error instanceof Error ? error.message : "unknown",
                exception: true,
            });
        }
    }
}
