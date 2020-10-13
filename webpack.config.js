const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
   template: "./public/index.html",
   filename: "./index.html",
});

module.exports = {
   entry: ["./src/App.js"],
   module: {
      rules: [
         {
            test: /\.js$|jsx/,
            exclude: /node_modules/,
            use: [
               {
                  loader: "babel-loader",
                  options: {
                     presets: ["@babel/preset-env", "@babel/preset-react"].map(require.resolve),
                  },
               },
            ],
         },
         {
            test: /\.css$/,
            use: ["style-loader", "css-loader"],
         },
      ],
   },
   output: {
      path: path.join(__dirname, "/build"),
      filename: "bundle.js",
   },
   plugins: [htmlPlugin],
};
