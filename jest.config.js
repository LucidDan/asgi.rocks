const { pathsToModuleNameMapper } = require("ts-jest/utils")
const { compilerOptions } = require("./tsconfig")

module.exports = {
  testEnvironment: "jsdom",
  roots: ["<rootDir>"],
  setupFiles: ["<rootDir>/test/jest-setup-files.ts"],
  setupFilesAfterEnv: ["<rootDir>/test/jest-setup-files-after-env.ts"],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json"],
  coverageReporters: ["html", "text", "text-summary", "cobertura"],
  collectCoverageFrom: ["src/**/*.ts", "src/**/*.tsx", "!**/node_modules/**"],
  reporters: ["default", "jest-junit"],
  testPathIgnorePatterns: [
    "<rootDir>/.next/",
    "<rootDir>/cypress/",
    "<rootDir>/node_modules/",
  ],
  transform: {
    "^.+\\.(ts|tsx)$": "babel-jest",
  },
  watchPlugins: [
    //        'jest-watch-typeahead/filename',
    //        'jest-watch-typeahead/testname',
  ],
  moduleNameMapper: {
    // Need this to make 'import @/<shortcut>' that we use via tsconfig to work in babel
    ...pathsToModuleNameMapper(compilerOptions.paths, { prefix: "<rootDir>/" }),
    "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/test/__mocks__/fileMock.js",
  },
}
