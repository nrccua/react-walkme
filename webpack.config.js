// const webpack = require('webpack');
const path = require('path');
const webpackDash = require('webpack-dashboard/plugin');

const BUILD_DIR = path.resolve(__dirname, 'dist');
const APP_DIR = path.resolve(__dirname, 'lib');

const config = {
  entry: {
    'react-ga': `${APP_DIR}/index.js`,
  },
  output: {
    filename: 'index.js',
    path: BUILD_DIR,
    libraryTarget: 'umd'
  },
  plugins: [
    new webpackDash(),
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
    }],
  },
};

module.exports = config;
