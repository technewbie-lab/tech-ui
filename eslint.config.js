module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['react-app', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
};
