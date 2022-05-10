import { UserRepository } from "../../infra/database/repositories/user-repository";
import { IUser } from "../contracts/user";

export class GetUserUseCase {
    async run(username: string): Promise<IUser> {
        const repository = new UserRepository();

        const user = await repository.get(username);

        if (!user) {
            throw new Error("User does not exist");
        }

        return user;
    }
}
