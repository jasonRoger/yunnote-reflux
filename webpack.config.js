var webpack = require("webpack");
var ignoreFiles = new webpack.IgnorePlugin(/^react$/);
module.exports = {
	module: {
		loaders: [{
			test: /\.(es6|jsx)$/,
			loader: "babel",
			query: {
		        optional: ['runtime'],
		        stage: 0
		    }
		}]
	},
	externals: [{
		react: "window.React",
		reflux: "window.Reflux",
		antd: "window.antd"
	}]
}