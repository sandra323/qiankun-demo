const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',

  entry: './src/main.jsx',

  output: {
    path: path.resolve(__dirname, 'dist'),

    filename: 'js/[name].js',

    publicPath: 'http://localhost:5174/',

    library: {
      name: 'user-app',
      type: 'umd',
    },

    globalObject: 'window',
  },

  devServer: {
    port: 5174,

    headers: {
      'Access-Control-Allow-Origin': '*',
    },

    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],

  resolve: {
    extensions: ['.js', '.jsx'],
  },
}