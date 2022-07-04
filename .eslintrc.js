module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'no-undef': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/no-unused-state': 'off',
    'react/jsx-filename-extension': 'off',
    'react/destructuring-assignment': 'off',
    'max-len': 'off',
    'react/prefer-stateless-function': 'off',
    'react/prop-types': 'off',
    'react/function-component-definition': 'off',
    quotes: 'off',
    'jsx-quotes': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'comma-dangle': 'off',
    'object-curly-newline': 'off',
    'react/button-has-type': 'off',
    'no-unused-vars': 'off',
    'no-return-await': 'off',
    'consistent-return': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'react/jsx-props-no-spreading': 'off',
    'default-case': 'off',
    'function-paren-newline': 'off',
    'implicit-arrow-linebreak': 'off',
    'react/jsx-one-expression-per-line': 'off',
  },
};
