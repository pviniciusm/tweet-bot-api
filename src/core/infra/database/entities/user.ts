import { Column, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryColumn({
        length: 50,
    })
    username: string;

    @Column({
        length: 50,
    })
    name: string;

    @Column({
        length: 30,
    })
    password: string;

    @Column({
        length: 50,
        nullable: true,
    })
    city: string;

    @UpdateDateColumn()
    updatedAt: Date;
}
