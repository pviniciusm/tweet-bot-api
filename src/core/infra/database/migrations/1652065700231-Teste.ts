import {MigrationInterface, QueryRunner} from "typeorm";

export class Teste1652065700231 implements MigrationInterface {
    name = 'Teste1652065700231'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("username" varchar(50) PRIMARY KEY NOT NULL, "name" varchar(50) NOT NULL, "password" varchar(30) NOT NULL, "city" varchar(50), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
