export default {
  extends: ['airbnb', 'airbnb-typescript', 'prettier'],
  plugins: ['eslint-comments', 'jest', 'unicorn', 'react-hooks', 'import', 'jsx-a11y', 'react'],
  env: {
    browser: true,
    node: true,
    es2021: true,
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
    'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['draft'] }],
    '@typescript-eslint/consistent-type-imports': [
      1,
      {
        prefer: 'type-imports',
        disallowTypeAnnotations: true,
      },
    ],
    'no-restricted-syntax': 0,
    'no-underscore-dangle': 0,
    'no-await-in-loop': 0,
    '@typescript-eslint/naming-convention': 0,
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
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
  },
  settings: {
    // support import modules from TypeScript files in JavaScript files
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],
      },
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
    },
    'import/extensions': ['.js', '.mjs', '.jsx', '.ts', '.tsx', '.d.ts'],
    'import/external-module-folders': ['node_modules', 'node_modules/@types'],
  },
};
