import { IUser } from "./../../../domain/contracts/user";
import { getRepository, Repository } from "typeorm";

import { User } from "../../../../../core/infra/database/entities/user";

export class UserRepository {
    private _repository: Repository<User>;

    constructor() {
        this._repository = getRepository(User);
    }

    async create(user: IUser): Promise<User> {
        const createdUser: User = this._repository.create(user);
        await this._repository.save(createdUser);

        return createdUser;
    }

    async get(username: string): Promise<User | undefined> {
        return await this._repository.findOne(username);
    }

    async list(): Promise<User[]> {
        return await this._repository.find();
    }
}
