const path = require('path');
const { ProvidePlugin } = require('webpack');
const NotifierPlugin = require('friendly-errors-webpack-plugin');
const notifier = require('node-notifier');

const PATHS = {
  app: path.join(__dirname, 'src', 'scripts'),
  build: path.join(__dirname, 'build', 'scripts'),
};

module.exports = {
  entry: {
    vendor: ['jquery'],
    app: PATHS.app,
  },
  output: {
    path: PATHS.build,
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
    new NotifierPlugin({
      onErrors: (severity, errors) => {
        if (severity !== 'error') {
          return;
        }
        const error = errors[0];
        notifier.notify({
          title: 'Webpack error',
          message: severity + ': ' + error.name,
          subtitle: error.file || '',
        });
      },
    }),
  ],
};
