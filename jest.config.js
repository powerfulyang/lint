const { pathsToModuleNameMapper } = require('ts-jest');
const tsconfig = require('./tsconfig.json');

const moduleNameMapper = pathsToModuleNameMapper(tsconfig.compilerOptions.paths, {
  prefix: '<rootDir>/',
});
module.exports = {
  moduleNameMapper,
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  testMatch: ['**/*.spec.(ts|tsx)'],
  testPathIgnorePatterns: ['./node_modules/', './dist/'],
  testEnvironment: 'jsdom',
};
