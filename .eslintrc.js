module.exports = {
  'env': {
    'browser': true,
    'commonjs': true,
    'es2021': true
  },
  'extends': [
    'airbnb-base',
    'plugin:jest/recommended'
  ],
  'overrides': [
    {
      'files': [
        'scripts/**/*.js'
      ],
      'rules': {
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
  'parserOptions': {
    'ecmaVersion': 'latest'
  },
  'rules': {}
};
