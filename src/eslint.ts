export default {
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
    'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['draft'] }],
    '@typescript-eslint/consistent-type-imports': [
      1,
      {
        prefer: 'type-imports',
        disallowTypeAnnotations: true,
      },
    ],
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    requireConfigFile: false,
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
  globals: {
    JSX: true,
    NodeJS: true,
  },
};
