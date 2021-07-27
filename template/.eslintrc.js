module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ['spellcheck'],
  rules: {
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
        ],
        skipIfMatch: ['http://[^s]*'],
        minLength: 3,
      },
    ],
  },
};
