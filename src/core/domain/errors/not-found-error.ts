export class NotFoundError extends Error {
    constructor() {
        super(`User not found`);
        this.name = "NotFoundError";
    }
}
