module.exports = {
  root: true,
  env: {
  node: true,
  'vue/setup-compiler-macros': true
  },
  extends: [
  'plugin:vue/vue3-recommended',
  'eslint:recommended'
  ],
  parserOptions: {
  ecmaVersion: 2022
  },
  rules: {
  'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  'vue/multi-word-component-names': 'off'

  }
};
