const { pathsToModuleNameMapper } = require('./dist');
const tsconfig = require('./tsconfig.json');

const moduleNameMapper = pathsToModuleNameMapper(tsconfig.compilerOptions.paths, {
  prefix: '<rootDir>/',
});

/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  moduleNameMapper,
  transform: {
    '^.+\\.(ts|tsx)$': '@swc/jest',
  },
};
