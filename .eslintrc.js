module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/vue3-essential', '@vue/standard', 'prettier'],
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  rules: {
    'vue/multi-word-component-names': 'off',
    semi: ['error', 'never'],
    'no-undef': 'off',
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
        '**/*.spec.js',
      ],
      env: {
        jest: true,
      },
    },
  ],
}
