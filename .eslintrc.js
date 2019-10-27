// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,

  env: {
    // node: true,
    browser: true,
  },

  extends: [
    'plugin:vue/essential',
    // '@vue/airbnb',
  ],

  parserOptions: {
    parser: 'babel-eslint',
  },

  // add your custom rules here
  rules: {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
