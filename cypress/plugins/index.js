module.exports = (on, config) => {
  const { startDevServer } = require('@cypress/webpack-dev-server');
  on('dev-server:start', (options) => startDevServer({
    options,
    webpackConfig: {},
  }));
  return config;
};
