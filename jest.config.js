export default {
  verbose: true,
  clearMocks: true,
  collectCoverageFrom: [
    "src/**/*.{ts}",
    "src/**/*.{js}",
    "!**/node_modules/**",
  ],
  coverageProvider: "v8",
  moduleDirectories: ["node_modules"],
  moduleFileExtensions: ["ts", "js"],
  preset: "ts-jest",
  roots: ["src"],
  setupFiles: ["dotenv/config"],
  testMatch: ["**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"],
  transform: {
    "^.+\\.ts?$": [
      "ts-jest",
      {
        diagnostics: true,
      },
    ],
  },
};
