const path = require("path");

module.exports = {
  entry: {
    index: "./src/index.ts",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: "babel-loader",
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, "src"),
    compress: true,
    port: 9000,
    host: "0.0.0.0",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
};
