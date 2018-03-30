var webpack = require('webpack');
var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');

var BUILD_DIR = path.join(__dirname, 'dist');
var APP_DIR = path.join(__dirname, 'src');

const VENDOR_LIBS = [
	'react', 'react-dom', 'react-router-dom'
]
var config = {
	entry: {
		path: APP_DIR + '/index.js',
		vendor: VENDOR_LIBS
	},
	output: {
		path: BUILD_DIR,
		filename: '[name].[hash].js' 
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				use: 'file-loader'
			}
		]
	},
	devServer: {
		contentBase: BUILD_DIR, 
		compress: true,
		port: 9000,
		disableHostCheck: false,
		// useful for applications that req certain headers
		headers: {
			"X-Custom-header": "custom"
		},
		open: true,
		hot: true
	},
	plugins: [
		new htmlWebpackPlugin({
			template: 'src/index.html'
		}),
		new webpack.optimize.CommonsChunkPlugin({
			names: ['vendor', 'manifest']
		}),
		new webpack.HotModuleReplacementPlugin()
	]
}

module.exports = config;