module.exports = {
  context: __dirname + '/app',
  entry: './catalog.module.js',
  output: {
    path: __dirname + '/build',
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
