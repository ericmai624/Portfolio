const path = require("path");
const webpack = require("webpack");

module.exports = (env, argv) => {
  const ASSET_PATH = process.env.ASSET_PATH || "/dist/js/";

  const config = {
    entry: [
      "babel-polyfill",
      path.resolve(__dirname, "client", "src", "index.js")
    ],
    output: {
      filename: "[name].bundle.js",
      chunkFilename: "[name].bundle.js",
      path: path.resolve(__dirname, "dist", "js"),
      publicPath: ASSET_PATH
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)?$/,
          include: [path.resolve(__dirname, "client", "src")],
          exclude: [path.resolve(__dirname, "node_modules")],
          loader: "babel-loader"
        },
        {
          test: /\.(sass|css)?$/,
          use: [
            { loader: "style-loader" },
            {
              loader: "css-loader",
              options: { minimize: argv.mode === "production" }
            },
            { loader: "sass-loader" }
          ]
        }
      ]
    },
    resolve: {
      alias: {
        src: path.resolve(__dirname, "client", "src"),
        util: path.resolve(__dirname, "client", "util"),
        public: path.resolve(__dirname, "public")
      }
    },
    plugins: [
      new webpack.DefinePlugin({
        "process.env.ASSET_PATH": JSON.stringify(ASSET_PATH)
      })
    ]
  };

  if (argv.mode === "production") {
    config.optimization = {
      minimize: true
    };
  }

  return config;
};
