/** @format */

module.exports = {
  extends: ['airbnb', 'airbnb-typescript', 'prettier'],
  plugins: ['eslint-comments', 'jest', 'unicorn', 'react-hooks'],
  env: {
    browser: true,
    node: true,
    es2020: true,
    jest: true,
  },
  rules: {
    'import/extensions': 0,
    'import/prefer-default-export': 0,
    'no-plusplus': 0,
    'import/no-default-export': [0, 'camel-case'],
    'react/jsx-props-no-spreading': 0,
    'react/react-in-jsx-scope': 0,
    'react/prop-types': 0,
    '@typescript-eslint/no-unused-expressions': 0,
    'react/require-default-props': 0,
    'no-param-reassign': ['error', {props: true, ignorePropertyModificationsFor: ['draft']}],
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  globals: {
    JSX: true,
    NodeJS: true,
  },
};
