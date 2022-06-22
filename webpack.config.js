const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

var config = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.[contenthash].js",
    clean: true,
  },
  devServer: {
    port: 3000,
    compress: true,
    hot: true,
    open: true,
  },
  
  //devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(css|scss)$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
  ],
};


module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    config.devtool = 'source-map';
  }
  
  if (argv.mode === 'production') {
   
  }

  return config;
};