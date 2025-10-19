const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: '',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // ambil template dari src
      title: 'Hi Sab'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        type: 'asset/resource',
      },
    ],
  },
  mode: 'development',
  devServer: {
    static: ['./dist','./public'],
    open: true,
    hot: true,
    port: 3000,
  },
};
