const path = require("path");

module.exports = (env, argv) => {
  const config = {
    entry: [
      "babel-polyfill",
      path.resolve(__dirname, "client", "src", "index.js")
    ],
    output: {
      filename: "[name].bundle.js",
      chunkFilename: "[name].bundle.js",
      path: path.resolve(__dirname, "public", "js")
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
    }
  };

  if (argv.mode === "production") {
    config.optimization = {
      minimize: true
    };
  }

  return config;
};
