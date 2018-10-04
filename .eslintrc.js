module.exports = {
  'env': {
    'browser': true,
    'node': true,
    'jest': true
  },
  'extends': 'airbnb',
  'parser': 'babel-eslint',
  'parserOptions': {
    'sourceType': 'module',
    'allowImportExportEverywhere': true
  },
  'installedESLint': true,
  'rules': {
    // override default options for rules from base configuration
    'jsx-a11y/no-static-element-interactions': [
      'error',
      {
        handlers: [
          'onMouseDown',
          'onMouseUp',
          'onKeyPress',
          'onKeyDown',
          'onKeyUp',
        ],
      },
    ],
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
    'react/jsx-closing-bracket-location': [2, { 'selfClosing': 'after-props', 'nonEmpty': 'after-props' }],
    'max-len': [2, { 'code': 120, 'tabWidth': 2, 'ignoreUrls': true }],
    'object-curly-spacing': ['error', 'always', { 'objectsInObjects': false, 'arraysInObjects': false }],
    'eqeqeq': ['error', 'smart'],
    'newline-per-chained-call': [2, { 'ignoreChainWithDepth': 4 }],
    'arrow-body-style': 0,
    'no-multi-spaces': [2, {
      exceptions: {
        'ImportDeclaration': true,
        'Property': true,
        'VariableDeclarator': true,
      }
    }],
    'import/no-extraneous-dependencies': ['error', {'devDependencies': ['**/test.js']}]
  },
  'plugins': [
    'react',
    'promise',
    'async-await'
  ],
};
