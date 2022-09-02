const tailwindcss = require.resolve('prettier-plugin-tailwindcss');

export default {
  plugins: [tailwindcss],
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
