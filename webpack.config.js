// var path = require("path");

// module.exports = {
//   entry: "./src/index.ts",
//   target: "node",
//   output: {
//     filename: "index.js",
//     path: path.resolve(__dirname, "dist")
//   },
//   devtool: "source-map",
//   resolve: {
//     // Add `.ts` and `.tsx` as a resolvable extension.
//     extensions: [".ts", ".tsx", ".js"]
//   },
//   module: {
//     rules: [
//       // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
//       { test: /\.tsx?$/, loader: "ts-loader" }
//     ]
//   }
// };

const path = require("path");
const { NODE_ENV = "production" } = process.env;

module.exports = {
  entry: "./src/index.ts",
  mode: NODE_ENV,
  target: "node",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js"
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  //   externals: [nodeExternals()],
  devtool: "source-map"
};
