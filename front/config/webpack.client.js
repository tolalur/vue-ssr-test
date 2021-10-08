const merge = require('webpack-merge').merge;
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const baseConfig = require('./webpack.base');
const webpack = require('webpack');

const isProduction = process.env.NODE_ENV === 'production';

let config = merge(baseConfig, {
  entry: './src/entry-client.ts',
  plugins: [new VueSSRClientPlugin()],
  output: {
    path: path.resolve('./dist/'),
    filename: '[name].[fullhash:8].js',
    publicPath: '/dist/'
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : 'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  }
});

if (!isProduction) {
  config = merge(config, {
    mode: 'development',
    output: {
      filename: '[id].js',
      publicPath: 'http://localhost:9999/dist/'
    },
    devtool: 'source-map',
    devServer: {
      historyApiFallback: true,
      hot: true,
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      port: 9999,
      open: false,
      devMiddleware: {
        publicPath: 'http://localhost:9999/dist/',
        writeToDisk: true
      }
    }
  });
} else {
  config = merge(config, {
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].[fullhash:8].css'
      })
    ]
  });
}

module.exports = config;
