const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/main.js', // Relative path to your main JavaScript file
  output: {
    filename: 'bundle.js', // The output bundle file
    path: path.resolve(__dirname, 'dist'), // Output directory
    publicPath: '/', // Ensure webpack handles the root path correctly
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // The directory to serve static files from
    },
    compress: true, // Enable gzip compression
    port: 3000, // The port on which to run the server
    open: true, // Automatically open the browser
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './vendor/index.html', // Path to your index.html file
      filename: 'index.html', // The onutput file name
    }),
  ],
};
