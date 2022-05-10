import { CacheRepository } from "../../../../core/infra/database/repositories/cache-repository";
import { UserRepository } from "../../infra/database/repositories/user-repository";
import { IUser } from "./../contracts/user";

export interface CreateUserParams extends IUser {}

export class CreateUserUseCase {
    async run(params: CreateUserParams): Promise<IUser> {
        const repository = new UserRepository();
        const cacheRepository = new CacheRepository();

        if (params.name.length > 50) {
            throw new Error("Name length is bigger than 50 characters");
        }

        const user = await repository.create(params);

        await cacheRepository.delete("users");

        return user;
    }
}
