export default {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-css-modules',
    'stylelint-config-prettier',
  ],
  plugins: [
    'stylelint-order',
    'stylelint-declaration-block-no-ignored-properties',
    'stylelint-prettier',
    'stylelint-scss',
  ],
  rules: {
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'plugin/declaration-block-no-ignored-properties': true,
  },
  overrides: [
    {
      files: ['**/*.scss'],
      customSyntax: 'postcss-scss',
      rules: {
        'prettier/prettier': true,
      },
    },
  ],
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts'],
};
