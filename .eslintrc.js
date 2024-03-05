export default {
  extends: ['airbnb-base', 'prettier', 'plugin:node/recommended'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error', // Prettier rules
    'no-unused-vars': 'warn',
    'no-console': 'off',
    'func-names': 'off',
  },
}
