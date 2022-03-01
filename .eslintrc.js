const { eslint } = require('./dist');

module.exports = {
  ...eslint,
  rules: {
    ...eslint.rules,
    'import/no-extraneous-dependencies': 'off',
    'import/no-dynamic-require': 'off',
  },
};
