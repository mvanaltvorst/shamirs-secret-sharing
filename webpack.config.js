const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./app/js/app.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: "./app/index.html", to: "index.html" }
    ])
  ],
  devtool: "source-map",
  module: {
    rules: [
      { test: /\.s?css$/, use: ["style-loader", "css-loader", "sass-loader"]},
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        query: {
          presets: ["env"],
          plugins: ["transform-react-jsx", "transform-runtime"]
        }
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          "file-loader"
        ]
      }
    ]
  }
}
