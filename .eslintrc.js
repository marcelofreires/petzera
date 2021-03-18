module.exports = {
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: [ '.js', '.jsx', '.ts', '.tsx', '.json' ],
      },
      typescript: {},
      'babel-plugin-root-import': {
        rootPathPrefix: '~',
        rootPathSuffix: 'src',
      },
    },
  },
  rules: {
    'no-console': [ 1, { allow: [ 'warn', 'error' ] }],
    'react/prefer-stateless-function': 0,
    'react/prop-types': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-props-no-spreading': 0,
    'comma-dangle': [ 'error', 'always-multiline' ],
    'import/prefer-default-export': 0,
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': [ 'error' ],
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    indent: [ 'error', 2, { SwitchCase: 1 }],
    'no-empty-function': 'error',
    'prefer-const': 'error',
    'no-plusplus': [ 'error', { allowForLoopAfterthoughts: true }],
    'newline-before-return': 'error',
    'max-len': [ 'error', { code: 80, ignorePattern: '^import\\W.*' }],
    'no-multiple-empty-lines': [ 'error', { max: 1, maxBOF: 0, maxEOF: 0 }],
    'eol-last': [ 'error', 'always' ],
    'import/named': 0,
    'import/no-named-as-default': 0,
    'import/no-named-as-default-member': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': 0,
    'import/no-duplicates': 0,
    'import/no-self-import': 0,
    'import/order': 0,
    'import/no-cycle': 0,
    semi: [ 'error', 'never' ],
    'object-curly-spacing': [ 'error', 'always' ],
    'object-curly-newline': [ 'error', {
      multiline: true,
      consistent: true,
      minProperties: 4,
    }],
    'array-bracket-spacing': [ 'error', 'always', {
      objectsInArrays: false,
      arraysInArrays: false,
    }],
    'no-param-reassign': [ 'error', {
      props: true,
      ignorePropertyModificationsFor: [
        'state',
        'acc',
        'e',
      ],
    }],
    'import/extensions': 0,
  },
}
