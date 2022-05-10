import { CreateUserUseCase } from "../../domain/usecases/create-user-usecase";
import { Request, Response } from "express";
import { GetUserUseCase } from "../../domain/usecases/get-user-usecase";

export class GetUserController {
    async handle(request: Request, response: Response) {
        try {
            const { username } = request.params;

            const useCase = new GetUserUseCase();
            const result = await useCase.run(username);

            return response.status(200).send({
                ok: true,
                data: result,
                message: "everything is ok",
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
