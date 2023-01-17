/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-env node */
const { pathsToModuleNameMapper } = require('ts-jest/utils')
// In the following statement, replace `./tsconfig` with the path to your `tsconfig` file
// which contains the path mapping (ie the `compilerOptions.paths` option):
const { compilerOptions } = require('./tsconfig')
module.exports = {
  globals: {
    'ts-jest': {
      // relative path to the ts-jest-keys-transformer.js file
      astTransformers: { before: ['ts-jest-keys-transformer.js'] },
      tsconfig: 'tsconfig.json',
    },
  },
  roots: ['<rootDir>'],
  modulePaths: [compilerOptions.baseUrl], // <-- This will be set to 'baseUrl' value
  moduleNameMapper: pathsToModuleNameMapper(
    compilerOptions.paths /*, { prefix: '<rootDir>/' } */,
  ),
  moduleFileExtensions: ['ts', 'js'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  testMatch: ['**/*.(test|spec).(ts|js)'],
  testEnvironment: 'node',
  roots: ['<rootDir>/src'],
  preset: 'ts-jest',
}
