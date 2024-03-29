const baseRule = {
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
  'import/no-extraneous-dependencies': [
    'error',
    {
      devDependencies: [
        '**/*rc.{js,cjs,mjs,ts,cts,mts}',
        '**/*.config.{js,cjs,mjs,ts,cts,mts}',
        '**/*.spec.{ts,tsx}',
        '**/*.d.ts',
      ],
    },
  ],
  'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
  'import/extensions': [
    'error',
    'ignorePackages',
    {
      mjs: 'always',
      mts: 'never',
      ts: 'never',
      tsx: 'never',
      js: 'never',
      jsx: 'never',
      cjs: 'always',
      cts: 'never',
      json: 'always',
    },
  ],
};

export default {
  plugins: ['eslint-comments', 'jest', 'unicorn'],
  extends: ['airbnb', 'airbnb/hooks', 'prettier'],
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  rules: baseRule,
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
      plugins: ['eslint-comments', 'jest', 'unicorn'],
      extends: ['airbnb', 'airbnb/hooks', 'airbnb-typescript', 'prettier'],
      env: {
        browser: true,
        node: true,
        jest: true,
      },
      parserOptions: {
        project: './tsconfig.json',
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      rules: {
        ...baseRule,
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
        '@typescript-eslint/restrict-template-expressions': 'error',
        'require-await': 'off',
        '@typescript-eslint/require-await': 'error',
        '@typescript-eslint/await-thenable': 'error',
        'no-loss-of-precision': 'off',
        '@typescript-eslint/no-loss-of-precision': 'error',
        '@typescript-eslint/no-misused-new': 'error',
        '@typescript-eslint/unbound-method': [
          'error',
          {
            ignoreStatic: true,
          },
        ],
        // '@typescript-eslint/strict-boolean-expressions': 'error', 这玩意不是很好用, 要是只检查 tsx 就好了
        '@typescript-eslint/no-use-before-define': ['error', { functions: false }],
      },
      settings: {
        'import/resolver': {
          typescript: {
            extensions: ['.ts', '.tsx', '.mts', '.cts'],
          },
          node: {
            extensions: ['.js', '.jsx', '.cjs', '.mjs', '.json'],
          },
        },
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.tsx', '.mts', '.cts'],
        },
      },
    },
  ],
};
