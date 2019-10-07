// https://eslint.org/docs/user-guide/configuring

module.exports = {
  parser: 'babel-eslint',
  root: true,
  globals: {
    Bxs: true
  },
  env: {
    browser: true,
    jest: true,
  },
  extends: ['airbnb-base'],
  settings: {
    'import/resolver': {
      alias: {
        extensions: ['.ts', '.js']
      }
    }
  },
  "rules": {
    semi: ["error", "never"],
  }
}
