const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackconfig = require('../../webpack.config.js');

const webpackcompiler = webpack(webpackconfig);

module.exports = function configureMiddleware(app) {
  // enable webpack middleware for hot-reloads in development
  app.use(webpackDevMiddleware(webpackcompiler, {
    publicPath: webpackconfig.output.publicPath,
    stats: {
      colors: true,
      chunks: false,
      'errors-only': true,
    },
  }));
  app.use(webpackHotMiddleware(webpackcompiler, {
    log: console.log, // eslint-disable-line no-console
  }));
};
