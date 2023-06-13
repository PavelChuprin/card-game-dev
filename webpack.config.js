const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
	entry: './src/script.js', // Входной файл, в котором мы пишем свой код
	mode: 'production',
	output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js', // Выходной файл, который подключаем к HTML
				// Обратите внимание, сохранится он по пути "./dist/bundle.js"
    clean: true,
  },
	module: {
		rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
			{
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ]
  },
	optimization: {
    minimizer: ['...', new CssMinimizerPlugin()],
  },
	plugins: [
		new CopyPlugin({
      patterns: [
        { from: "./src/img", to: "static" },
      ],
    }),
		new MiniCssExtractPlugin(),
		new HtmlWebpackPlugin({
			template: "./src/index.html",
	})],
};