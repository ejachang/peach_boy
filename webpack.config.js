var path = require('path');
var SRC_DIR = path.join(__dirname, '/src');
var DIST_DIR = path.join(__dirname, '/src/dist');

module.exports = {
  // context: SRC_DIR,
  entry: `${SRC_DIR}/client.js`,
  output: {
    path: DIST_DIR,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: SRC_DIR,
        loader: 'babel-loader',
      }
    ]
  },
  resolve: {
    extensions: ['.jsx', '.js', '.css'],
  },
};
