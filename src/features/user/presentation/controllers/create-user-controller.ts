import { CreateUserUseCase } from "./../../domain/usecases/create-user-usecase";
import { Request, Response } from "express";

export class CreateUserController {
    async handle(request: Request, response: Response) {
        const { username, name, password } = request.body;

        if (!username) {
            return response.status(400).send({
                ok: false,
                message: "Username was not provided",
            });
        }

        if (!name) {
            return response.status(400).send({
                ok: false,
                message: "Name was not provided",
            });
        }

        if (!password) {
            return response.status(400).send({
                ok: false,
                message: "Password was not provided",
            });
        }

        const useCase = new CreateUserUseCase();
        const result = await useCase.run({
            name,
            username,
            password,
        });

        return response.status(200).send({
            ok: true,
            data: result,
            message: "everything is ok",
        });
    }
}
