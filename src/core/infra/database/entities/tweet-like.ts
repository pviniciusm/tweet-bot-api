import { User } from "./user";
import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryColumn,
} from "typeorm";
import { Tweet } from "./tweet";

@Entity()
export class TweetLike {
    @PrimaryColumn({
        length: 100,
    })
    uid: string;

    @ManyToOne(() => Tweet)
    @JoinColumn({
        name: "tweet",
    })
    tweet: Tweet;

    @ManyToOne(() => User)
    @JoinColumn({
        name: "user",
    })
    user: User;

    @CreateDateColumn()
    createdAt: Date;
}
