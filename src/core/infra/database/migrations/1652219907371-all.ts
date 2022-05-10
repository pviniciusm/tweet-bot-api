import {MigrationInterface, QueryRunner} from "typeorm";

export class all1652219907371 implements MigrationInterface {
    name = 'all1652219907371'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("username" character varying(50) NOT NULL, "name" character varying(50) NOT NULL, "password" character varying(30) NOT NULL, "city" character varying(50), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_78a916df40e02a9deb1c4b75edb" PRIMARY KEY ("username"))`);
        await queryRunner.query(`CREATE TABLE "tweet" ("uid" character varying(100) NOT NULL, "content" character varying(50) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "tweet_user" character varying(50), CONSTRAINT "PK_bedd48ebc96db496a93b1a4a2c3" PRIMARY KEY ("uid"))`);
        await queryRunner.query(`CREATE TABLE "tweet_like" ("uid" character varying(100) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "tweet" character varying(100), "user" character varying(50), CONSTRAINT "PK_58409762267830963463e821e7b" PRIMARY KEY ("uid"))`);
        await queryRunner.query(`ALTER TABLE "tweet" ADD CONSTRAINT "FK_902b0dc4eff35fc04180b07106d" FOREIGN KEY ("tweet_user") REFERENCES "user"("username") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tweet_like" ADD CONSTRAINT "FK_e56f63ee9b5ca48ae37592da912" FOREIGN KEY ("tweet") REFERENCES "tweet"("uid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tweet_like" ADD CONSTRAINT "FK_bee91431195cf0592efc31bf6ba" FOREIGN KEY ("user") REFERENCES "user"("username") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tweet_like" DROP CONSTRAINT "FK_bee91431195cf0592efc31bf6ba"`);
        await queryRunner.query(`ALTER TABLE "tweet_like" DROP CONSTRAINT "FK_e56f63ee9b5ca48ae37592da912"`);
        await queryRunner.query(`ALTER TABLE "tweet" DROP CONSTRAINT "FK_902b0dc4eff35fc04180b07106d"`);
        await queryRunner.query(`DROP TABLE "tweet_like"`);
        await queryRunner.query(`DROP TABLE "tweet"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
