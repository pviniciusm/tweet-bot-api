module.exports = {
    type: "sqlite",
    database: "db.sqlite3",
    entities: ["src/core/infra/database/entities/*.ts"],
    migrations: ["src/core/infra/database/migrations/*.ts"],
    logging: false,
    synchronize: false,
    cli: {
        entitiesDir: "src/core/infra/database/entities",
        migrationsDir: "src/core/infra/database/migrations",
    },
};
