const { pathsToModuleNameMapper } = require('ts-jest');
const tsconfig = require('./tsconfig.json');

const moduleNameMapper = pathsToModuleNameMapper(tsconfig.compilerOptions.paths, {
  prefix: '<rootDir>/',
});

/**
 * @type {import('@jest/types').InitialOptionsTsJest}
 */
module.exports = {
  moduleNameMapper,
  preset: 'ts-jest',
  testMatch: ['**/*.spec.(ts|tsx)'],
  testPathIgnorePatterns: ['./node_modules/', './dist/'],
  testEnvironment: 'jsdom',
};
