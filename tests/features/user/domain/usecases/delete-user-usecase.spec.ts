import { IUser } from "../../../../../src/features/user/domain/contracts/user";
import { IUserRepository } from "../../../../../src/features/user/domain/contracts/user-repository";
import { DatabaseConnection } from "./../../../../../src/core/infra/database/connections/database-connection";
import { UserRepository } from "./../../../../../src/features/user/infra/database/repositories/user-repository";
import { DeleteUserUseCase } from "./../../../../../src/features/user/domain/usecases/delete-user-usecase";
import { NotFoundError } from "../../../../../src/core/domain/errors/not-found-error";

class ErrorUserRepository implements IUserRepository {
    async get(_: string): Promise<IUser | undefined> {
        throw new Error("Teste");
    }

    async delete(username: string): Promise<void> {
        throw new Error("Teste");
    }
}

class DeleteErrorUserRepository implements IUserRepository {
    async get(username: string): Promise<IUser | undefined> {
        return {
            username,
            name: "any_name",
            password: "any_pass",
        };
    }

    async delete(username: string): Promise<void> {
        if (username === "delete_ok") {
            return;
        }

        throw new Error("Teste");
    }
}

describe("Delete user usecase tests", () => {
    beforeAll(async () => {
        await DatabaseConnection.initialize();
    });

    const makeSut = () => {
        const userRepository = new UserRepository();
        const sut = new DeleteUserUseCase(userRepository);

        const errorUserRepository = new ErrorUserRepository();
        const databaseErrorSut = new DeleteUserUseCase(errorUserRepository);

        const deleteErrorUserRepository = new DeleteErrorUserRepository();
        const deleteErrorSut = new DeleteUserUseCase(deleteErrorUserRepository);

        return { sut, databaseErrorSut, deleteErrorSut };
    };

    test("should throw NotFoundError if user does not exist", async () => {
        const { sut } = makeSut();
        expect.assertions(2);

        try {
            await sut.run("any_user");
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
            expect(error).toBeInstanceOf(NotFoundError);
        }
    });

    test("should throw Error if DB get action fails", async () => {
        const { databaseErrorSut } = makeSut();
        expect.assertions(2);

        try {
            await databaseErrorSut.run("any_user");
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
            expect(error).not.toBeInstanceOf(NotFoundError);
        }
    });

    test("should throw Error if DB delete action fails", async () => {
        const { deleteErrorSut } = makeSut();
        expect.assertions(2);

        try {
            await deleteErrorSut.run("any_user");
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
            expect(error).not.toBeInstanceOf(NotFoundError);
        }
    });

    test("should return if DB delete action is ok", async () => {
        const { deleteErrorSut } = makeSut();

        expect(deleteErrorSut.run("delete_ok")).resolves;
    });
});
