module.exports = {
  globals: {
    'ts-jest': {
      // relative path to the ts-jest-keys-transformer.js file
      astTransformers: { before: ['ts-jest-keys-transformer.js'] },
      tsconfig: "tsconfig.json"
    },
  },
  moduleNameMapper: {
    "@src/(.*)": "<rootDir>/src/$1",
  },
  moduleFileExtensions: ["ts", "js"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  testMatch: [
    "**/*.(test|spec).(ts|js)"
  ],
  testEnvironment: "node",
  "roots": [
    "<rootDir>/src"
  ],
  "preset": "ts-jest",
}