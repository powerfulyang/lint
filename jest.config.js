const { pathsToModuleNameMapper } = require('ts-jest');
const tsconfig = require('./tsconfig.json');

const moduleNameMapper = pathsToModuleNameMapper(tsconfig.compilerOptions.paths, {
  prefix: '<rootDir>/',
});

/**
 * @type {import('@jest/types').Config.InitialOptions}
 */
module.exports = {
  moduleNameMapper,
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  preset: 'ts-jest',
  testMatch: ['**/*.spec.(ts|tsx)'],
  testPathIgnorePatterns: ['./node_modules/', './dist/'],
  testEnvironment: 'jsdom',
};
