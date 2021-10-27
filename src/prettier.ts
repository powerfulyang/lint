export default {
  singleQuote: true,
  trailingComma: 'all',
  printWidth: 100,
  proseWrap: 'never',
  endOfLine: 'lf',
  overrides: [
    {
      files: 'document.ejs',
      options: {
        parser: 'html',
      },
    },
  ],
};
