var path = require('path');
var SRC_DIR = path.join(__dirname, 'client/src');
var DIST_DIR = path.join(__dirname, 'client/dist');

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
      }
    ]
  },
  resolve: {
    extensions: ['.jsx', '.js', '.css'],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      appMountId: 'react-app-root',
      title: 'Son of a Peach',
      filename: resolve(__dirname, 'dist', 'index.html'),
    }),
  ]
};
