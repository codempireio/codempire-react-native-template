module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ['spellcheck'],
  rules: {
    'prettier/prettier': 0,
    'comma-dangle': 0,
    'spellcheck/spell-checker': [
      1,
      {
        comments: true,
        strings: false,
        identifiers: true,
        templates: true,
        ignoreRequire: true,
        lang: 'en_US',
        skipWords: [
          'dict',
          'aff',
          'hunspellchecker',
          'hunspell',
          'utils',
          'lang',
          'codempire',
          'redux',
          'axios',
          'typeof',
        ],
        skipIfMatch: ['http://[^s]*'],
        minLength: 3,
      },
    ],
  },
};
