export class MissingFieldError extends Error {
    public readonly code: number;

    constructor (field: string) {
        super(`${field} not provided.`);
        this.name = "MissingFieldError";
    }
}
