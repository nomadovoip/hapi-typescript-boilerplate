import path from 'path';
import webpack from 'webpack';
import nodeExternals from 'webpack-node-externals'

const config: webpack.Configuration = {
  mode: "production",
  entry: './main.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        // exclude: /node_modules/,
      },
    ],
  },
  externals: [ nodeExternals() ],
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist'),
  },
};

export default config;
