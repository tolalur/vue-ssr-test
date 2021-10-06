const TerserPlugin = require('terser-webpack-plugin');
const merge = require('webpack-merge').merge;
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader');
const webpack = require('webpack');

const isProduction = process.env.NODE_ENV === 'production';

let config = {
  mode: isProduction ? 'production' : 'development',
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader:  require.resolve('vue-loader'),
      },
      {
        test: /\.js$/,
        use: ['thread-loader', 'babel-loader'],
        exclude: file => /node_modules/.test(file) && !/\.vue\.js/.test(file)
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: file => /node_modules/.test(file) && !/\.vue\.js/.test(file),
        options: {
          transpileOnly: true,
          appendTsSuffixTo: [/\.vue$/],
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: 'url-loader?limit=8192',
      },
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.vue']
  },
  plugins: [
    new VueLoaderPlugin(),
    new ForkTsCheckerWebpackPlugin(
      {
        typescript: {
          extensions: {
            vue: {
              enabled: true,
              compiler: '@vue/compiler-sfc'
            }
          },
          diagnosticOptions: {
            semantic: true,
            syntactic: true
          }
        }
      }),
    new webpack.DefinePlugin({
      'process.env.IS_SERVER': JSON.stringify(process.env.IS_SERVER),
      __VUE_OPTIONS_API__: 'true',
      __VUE_PROD_DEVTOOLS__: 'false',
    })
  ]
};

if (isProduction) {
  config = merge(config, {
    optimization: {
      minimize: true,
      minimizer: [new CssMinimizerPlugin(), new TerserPlugin()]
    }
  });
}

module.exports = config;
