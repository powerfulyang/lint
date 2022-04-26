export default {
  extends: ['airbnb', 'airbnb-typescript', 'prettier'],
  plugins: ['eslint-comments', 'jest', 'unicorn', 'react-hooks', 'import', 'jsx-a11y', 'react'],
  env: {
    browser: true,
    node: true,
    es2022: true,
    jest: true,
  },
  rules: {
    'import/prefer-default-export': 0,
    'import/no-default-export': [0, 'camel-case'],
    'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['draft'] }],
    'no-restricted-syntax': 0,
    'no-underscore-dangle': 0,
    'arrow-body-style': 0,
    'class-methods-use-this': 'off',
    'react/jsx-props-no-spreading': 0,
    'react/react-in-jsx-scope': 0,
    'react/prop-types': 0,
    'react/require-default-props': 0,
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/prefer-stateless-function': 'error',
    'react/display-name': 'error',
    'react/jsx-key': 'error',
    'react-hooks/rules-of-hooks': 'error', // Checks rule of Hooks
    'react-hooks/exhaustive-deps': 'error', // Checks effect dependencies
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  overrides: [
    {
      files: ['*.tsx', '*.ts', '*.mts', '*.cts'],
      extends: ['airbnb-typescript'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      rules: {
        '@typescript-eslint/no-unused-expressions': 0,
        '@typescript-eslint/naming-convention': 0,
        '@typescript-eslint/restrict-plus-operands': 'error',
        '@typescript-eslint/consistent-type-imports': [
          1,
          {
            prefer: 'type-imports',
            disallowTypeAnnotations: true,
          },
        ],
      },
      settings: {
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.tsx', '.cts', '.mts'],
        },
        'import/extensions': ['.js', '.mjs', '.cjs', '.jsx', '.ts', '.cts', '.mts', '.tsx'],
      },
    },
  ],
};
