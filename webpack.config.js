// Imports

// Webpack Configuration
const config = {

  // Entry
  entry: './src/index.jsx',

  // Output
  output: {
    filename: 'pw.js',
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  // Loaders
  module: {
    rules: [
      // JavaScript/JSX Files
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      // CSS Files
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  // Reload On File Change
  watch: true,
  // Development Tools (Map Errors To Source File)
  devtool: 'source-map',
  devServer: {
    contentBase: './dist',
  },
};

// Exports
module.exports = config;
