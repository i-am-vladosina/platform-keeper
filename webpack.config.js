const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const definePlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || "true")),
});

module.exports = {
  entry: {
    main: path.join(__dirname, "src/index.ts"),
  },
  output: {
    path: path.join(__dirname, "build"),
    filename: "bundle.js",
    clean: true,
  },
  resolve: {
    modules: ["node_modules"],
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    alias: {
      src: path.resolve("./src"),
      game: path.resolve("./src/game"),
      engine: path.resolve("./src/match3-engine"),
      assets: path.resolve("./src/game/assets"),
    },
  },
  plugins: [
    definePlugin,
    new HtmlWebpackPlugin({
      template: "src/index.html",
      filename: "index.html",
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.join(__dirname, "src/styles/fonts"),
          to: path.join(__dirname, "build/fonts"),
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: "/node-modules/",
      },
      {
        test: /\.scss?$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              url: false,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|svg)$/i,
        use: [
          {
            loader: "url-loader",
          },
        ],
      },
      {
        test: /\.glsl$/i,
        use: [
          {
            loader: "glsl-shader-loader",
          },
        ],
      },
    ],
  },
  devtool: "source-map",
  mode: "development",
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, "./build"),
    },
    port: 3000,
    open: true,
  },
};
