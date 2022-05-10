/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
    // Automatically clear mock calls, instances and results before every test
    clearMocks: true,

    // Indicates whether the coverage information should be collected while executing the test
    collectCoverage: false,

    // arquivos que vão entrar no coverage
    collectCoverageFrom: [
        "<rootDir>/src/**/*.ts",
        "!**/node_modules/**",
        "!**/migrations/**",
    ],

    // pasta aonde vai ser colocado os arquivos do coverage
    coverageDirectory: "coverage",

    // pastas que vão ser ignoradas no coverage
    // coveragePathIgnorePatterns: [
    //     "\\\\node_modules\\\\",
    //     "<rootDir>/src/core/infra/database/migrations",
    // ], // é ignorado as migrations no coverage

    // Indicates which provider should be used to instrument code for coverage
    // coverageProvider: "v8",

    // A list of paths to directories that Jest should use to search for files in
    roots: ["<rootDir>/tests"],

    // The test environment that will be used for testing
    testEnvironment: "node",

    // A map from regular expressions to paths to transformers
    transform: {
        ".+\\.ts$": "ts-jest",
    },
};
