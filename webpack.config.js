var path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  entry: `${SRC_DIR}/index.js`,
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
        // query: {
          // presets: ["@babel/preset-env","@babel/preset-react"]
        // }
      }
    ]
  },
  resolve: {
    extensions: ['.jsx', '.js', '.css'],
  },
};
