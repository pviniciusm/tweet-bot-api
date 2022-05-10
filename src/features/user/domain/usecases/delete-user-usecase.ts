import { NotFoundError } from "../../../../core/domain/errors/not-found-error";
import { IUserRepository } from "../contracts/user-repository";

export class DeleteUserUseCase {
    constructor(private repository: IUserRepository) {}

    async run(username: string) {
        const user = await this.repository.get(username);
        if (!user) {
            throw new NotFoundError();
        }

        await this.repository.delete(username);
    }
}
