import { IUser } from "./user";

export interface IUserRepository {
    get(username: string): Promise<IUser | undefined>;
    delete(username: string): Promise<void>;
}
