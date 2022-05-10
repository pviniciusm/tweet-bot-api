import { User } from "./user";
import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryColumn,
} from "typeorm";

@Entity()
export class Tweet {
    @PrimaryColumn({
        length: 100,
    })
    uid: string;

    @Column({
        length: 50,
    })
    content: string;

    @ManyToOne(() => User, {})
    @JoinColumn({
        name: "tweet_user",
    })
    user: User;

    @CreateDateColumn()
    createdAt: Date;
}
