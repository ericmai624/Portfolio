module.exports = {
  env: {
    browser: true,
    node: true
  },
  parser: 'babel-eslint',
  extends: 'airbnb',
  plugins: [ 'import' ],
  rules: {
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'import/first': 0,
    'jsx-quotes': [ 'error', 'prefer-single' ],
    'comma-dangle': [ 'error', 'never' ],
    'no-console': ['error', { allow: ['warn', 'error', 'log'] }],
    'react/jsx-filename-extension': [ 1, { 'extensions': ['.js', '.jsx'] } ],
    'react/react-in-jsx-scope': 'off'
  }
};