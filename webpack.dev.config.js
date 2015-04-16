//config for webpack build
var path = require('path');
var webpack = require('webpack');

var config = module.exports = {
	//set context for rails asset pipeline
	context: __dirname + '/app/assets/javascripts', //project directory
	devtool: 'source-map',
	entry: [
		'webpack-dev-server/client?http://localhost:8030', //webpack dev server
		'webpack/hot/only-dev-server',
		'./entry.js' //app entry point from context
	]
};

//add transpiler for jsx
config.module = {
	loaders: [
		//load jsx hot
		{ test: /\.jsx?$/, loaders:  ['react-hot', 'jsx-loader?harmony'], exclude: /node_modules/ },
		{ test: require.resolve('jquery'), loaders: ['expose?jQuery', 'expose?$'] },
		{ test: /\.scss$/, loader: "style!css!sass" },
		{ test: /\.css$/, loader: "style!css" },
		{ test: require.resolve('zurb-foundation'), loader: 'expose?foundation' },
		{ test: require.resolve('./node_modules/zurb-foundation/js/foundation/foundation.offcanvas.js'), loader: 'expose?foundationOffcanvas' } 
	]
};

//output our bundle to the path where sprockets pipeline will include it
config.output = {
	path: path.join(__dirname, 'app', 'assets', 'javascripts'),
	filename: 'webpack-bundle.js',
	publicPath: 'http://localhost:8030/assets',
	//make source path nicer
	devtoolModuleFilenameTemplate: '[resourcePath]',
	devtoolFallbackModuleFilenameTemplate: '[resourcePath]?[hash]'
};

//where to get modules to resolve
config.resolve = {
    extensions: ["", ".js", ".jsx"]
};

//make plugins like jquery available to all modules
config.plugins = [
	new webpack.HotModuleReplacementPlugin(),
	new webpack.NoErrorsPlugin()
];