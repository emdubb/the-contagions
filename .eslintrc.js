/* eslint-env node */
module.exports = {
  root: true,
  env: {
    node: true,
    jest: true,
    browser: true,
    es6: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: '2019',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },

  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
  ],

  plugins: ['react', 'react-hooks', 'sonarjs', 'filenames'],

  settings: {
    react: {
      pragma: 'React',
      version: 'latest',
    },
  },

  globals: { __BROWSER__: true, __NODE__: true, __DEV__: true },

  rules: {
    eqeqeq: 'error',
    'no-var': 'error',
    'arrow-body-style': 'error',
    curly: 'error',
    'prefer-template': 'error',
    'no-irregular-whitespace': ['error', { skipStrings: false }],
    'no-console': ['error', { allow: ['warn', 'error'] }],
    complexity: ['error', { max: 6 }],
    'sonarjs/cognitive-complexity': ['error', 6],
    'no-unused-vars': [
      'error',
      { ignoreRestSiblings: true, argsIgnorePattern: '^_' },
    ],
    'max-lines-per-function': [
      'error',
      { max: 100, skipBlankLines: true, skipComments: true },
    ],
    'max-lines': [
      'error',
      { max: 250, skipBlankLines: true, skipComments: true },
    ],
    'react/jsx-curly-brace-presence': [
      'error',
      { props: 'never', children: 'never' },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'filenames/match-regex': [
      'error',
      '^[a-zA-Z]+(.rpc|.config|.json|.jsonapi|.stories)?(.test|.mock)?(.node|.browser)?$',
    ],
    'filenames/match-exported': 'error',
  },

  overrides: [
    {
      files: ['src/icons/*.js'],
      rules: {
        'max-lines-per-function': [
          'error',
          { max: 200, skipBlankLines: true, skipComments: true },
        ],
      },
    },
    {
      files: [
        'src/rpc/**/*.js',
        'stories/*.js',
        'src/components/DistributionGroups/**/*.js',
        'src/components/AddReceiptDistributionLine/**/*.js',
        'src/components/AddReceiptLine/**/*.js',
      ],
      rules: {
        'jest/no-mocks-import': 'off',
      },
    },
    {
      files: ['jest.config.js'],
      rules: {
        'filenames/match-exported': 'off',
      },
    },
    {
      files: ['src/config/*.js', 'src/**/__tests__/*.js', 'src/propTypes.js'],
      rules: {
        'max-lines': [
          'error',
          { max: 500, skipBlankLines: true, skipComments: true },
        ],
      },
    },
    {
      files: ['src/**/__mocks__/*.js'],
      rules: {
        'max-lines': ['off'],
      },
    },
  ],
};
