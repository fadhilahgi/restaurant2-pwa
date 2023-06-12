const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const path = require('path');
 
module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/scripts/index.js'),
    //sw: path.resolve(__dirname, 'src/scripts/sw.js'),
},
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new WorkboxWebpackPlugin.GenerateSW({
      swDest: "./sw.bundle.js",
      skipWaiting: true,
      clientsClaim : true,
      runtimeCaching: [
        {
          urlPattern: new RegExp("^https://restaurant-api.dicoding.dev/"),
          handler: "StaleWhileRevalidate",
          options: {
            cacheName: "RestaurantCatalogue-V1",
            cacheableResponse: {
              statuses: [0, 200],
            },
          },
        },
      ],
  
        swDest: './sw.bundle.js',
      }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/templates/index.html'),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public/'),
          to: path.resolve(__dirname, 'dist/'),
        },
      ],
    }),
  ],
};