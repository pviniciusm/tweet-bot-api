import { CacheRepository } from "../../../../core/infra/database/repositories/cache-repository";
import { IUser } from "../contracts/user";
import { UserRepository } from "./../../infra/database/repositories/user-repository";

export class ListUserUseCase {
    async run(): Promise<IUser[]> {
        const cacheRepository = new CacheRepository();

        // se tiver no cache, pega do cache
        const cachedUsers = await cacheRepository.get("users");
        if (cachedUsers) {
            return {
                ...cachedUsers,
                cache: true,
            };
        }

        const repository = new UserRepository();
        const result = await repository.list();

        // set no cache
        await cacheRepository.setEx("users", result);

        return result;
    }
}
