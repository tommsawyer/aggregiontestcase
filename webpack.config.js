module.exports = {
  context: __dirname + '/app',
  entry: './index.js',
  output: {
    path: __dirname + '/app/build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {test: /\.js$/,   loader: 'babel-loader?presets[]=es2015'},
      {test: /\.html$/, loader: 'raw'},
      {test: /\.css$/,  loader: 'style!css'},
    ]
  }
};
