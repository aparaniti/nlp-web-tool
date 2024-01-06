const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { GenerateSW } = require('workbox-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = (env, argv) => {
  const isDevelopment = argv.mode === 'development';

  return {
    entry: './src/client/index.js',
    mode: isDevelopment ? 'development' : 'production',
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        }
      ]
    },
    plugins: [
      new GenerateSW(),
      new HtmlWebPackPlugin({
        template: './src/client/views/index.html',
        filename: './index.html'
      })
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src/')
      }
    },
    target: 'web',
    externals: isDevelopment ? [] : [nodeExternals()]
  };
};
