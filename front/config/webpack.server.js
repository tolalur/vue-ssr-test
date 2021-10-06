const merge = require('webpack-merge').merge;
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const baseConfig = require('./webpack.base');
const nodeExternals = require('webpack-node-externals');

let config = merge(baseConfig, {
  entry: './src/entry-server.ts',
  target: 'node',
  devtool: 'source-map',
  output: {
    libraryTarget: 'commonjs2',
  },
  externals: nodeExternals({
    allowlist: /\.css$/,
  }),
  plugins: [new VueSSRServerPlugin(), new WebpackManifestPlugin({ fileName: "ssr-manifest.json" })],
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  }
});

module.exports = config;
