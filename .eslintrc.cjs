module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    // 开启setup语法糖语法
    'vue/setup-compiler-macros': true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    "plugin:prettier/recommended"
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: '@typescript-eslint/parser'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'vue/comment-directive': 'error',
    'vue/jsx-uses-vars': 'error',
    'vue/script-setup-uses-vars': 'error'
  }
}
