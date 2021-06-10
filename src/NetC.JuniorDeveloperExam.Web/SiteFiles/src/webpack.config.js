const path = require('path');

module.exports = {
  entry: './js/index.js',
  mode: 'production',
  output: {
    filename: 'main.js',
    path: path.resolve('../dist'),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [path.resolve(__dirname, 'node_modules')],
        loader: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
