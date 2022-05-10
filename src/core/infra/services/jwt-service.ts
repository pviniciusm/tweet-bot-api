import jwt from "jsonwebtoken";
import "dotenv/config";

export class JwtService {
    static createToken(payload: any): string {
        return jwt.sign(payload, process.env.JWT_SECRET ?? "any_secret");
    }

    static verify(token: string) {
        return jwt.verify(token, process.env.JWT_SECRET ?? "any_secret");
    }
}
