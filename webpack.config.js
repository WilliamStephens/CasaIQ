const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    './js/index.jsx',
    'webpack-hot-middleware/client',
    'webpack/hot/dev-server',
  ],
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js',
  },
  devtool: 'eval-source-map',
  target: 'web',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        enforce: 'pre', test: /\.jsx?$/, exclude: /node_modules/, loader: 'eslint-loader', options: { emitError: true },
      },
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['react-hot-loader/webpack', 'babel-loader'] },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
