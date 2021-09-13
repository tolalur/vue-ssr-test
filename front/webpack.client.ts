import merge from 'webpack-merge';
import VueSSRClientPlugin from 'vue-server-renderer/client-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';
import baseConfig from './webpack.base';
import webpack, {Configuration} from 'webpack';

const isProduction = process.env.NODE_ENV === 'production';
let config = merge(baseConfig, {
  entry: ['./src/entry-client.ts'],
  plugins: [new VueSSRClientPlugin()],
  output: {
    path: path.resolve('./dist/'),
    filename: '[name].[hash:8].js',
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
    plugins: [new webpack.HotModuleReplacementPlugin()],
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
  } as Configuration);
} else {
  config = merge(config, {
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].[hash:8].css'
      })
    ]
  });
}

export default config;
