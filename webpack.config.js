const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: {
    index: "./src/index.js",
    products: "./src/products.js",
  },
  
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: "svg-inline-loader",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(js)$/,
        use: "babel-loader",
      },
      {
        test: /\.(gif|png|jpe?g)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "assets/images/",
            },
          },
        ],
      },
    ],
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    
  },
  plugins: [
    new HtmlWebpackPlugin({
    template: "./src/index.html",
    filename: "index.html",
    
  }),
  new HtmlWebpackPlugin({
    template: "./src/products.html",
    filename: "products.html",
    chunks: ["products"],
  })

  ],
  mode: "development",
  devServer: {
    port: 3900,
    hot: true,

  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
},

};
