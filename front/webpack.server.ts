import merge from 'webpack-merge';
import VueSSRServerPlugin from 'vue-server-renderer/server-plugin';
import baseConfig from './webpack.base';
import nodeExternals from 'webpack-node-externals';

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
  plugins: [new VueSSRServerPlugin()],
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

export default config;
