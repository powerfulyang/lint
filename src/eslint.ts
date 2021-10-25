/** @format */

module.exports = {
  extends: ["airbnb", "airbnb-typescript", "prettier"],
  plugins: ["eslint-comments", "jest", "unicorn", "react-hooks"],
  env: {
    browser: true,
    node: true,
    es2020: true,
    jest: true,
  },
  rules: {},
  parserOptions: {
    project: "./tsconfig.json",
  },
  globals: {
    JSX: true,
    NodeJS: true,
  },
};
