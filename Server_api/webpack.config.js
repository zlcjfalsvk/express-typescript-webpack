const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  mode: process.env.NODE_ENV == "production" ? "production" : "development",
  // mode: "production",
  entry: "./src/index.ts",
  target: "node",
  output: {
    path: path.resolve(__dirname, "dist/src"),
    filename: "index.js"
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ["ts-loader"],
        exclude: [
          "/node_modules/",
          this.mode == "production"
            ? "/application.dev.json"
            : "/application.prod.json"
        ]
      }
    ]
  },
  node: {
    __dirname: false
  },
  externals: [nodeExternals()],
  devtool: "source-map"
};
