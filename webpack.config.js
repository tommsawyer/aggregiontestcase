module.exports = {
  context: __dirname + '/app',
  entry: './catalog.js',
  output: {
    path: __dirname + '/build',
    filename: './bundle.js'
  },
  module: {
    loaders: [
      {test: /\.js$/,   loader: 'babel'},
      {test: /\.html$/, loader: 'raw'},
      {test: /\.css$/,  loader: 'style!css'},
    ]
  }
};
