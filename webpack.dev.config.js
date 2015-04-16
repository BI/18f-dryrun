//config for webpack build
var path = require('path');
var webpack = require('webpack');

var config = module.exports = {
	//set context for rails asset pipeline
	context: __dirname + '/app/assets/javascripts', //project directory
	devtool: 'source-map',
	entry: {demo: [
				'webpack-dev-server/client?http://localhost:8030', //webpack dev server
				'webpack/hot/only-dev-server',
				'./entry.js' //app entry point from context
			],
			bubble_map: [
				'webpack-dev-server/client?http://localhost:8030', //webpack dev server
				'webpack/hot/only-dev-server',
				'./bubble_map.js' //app entry point from context
			],
			history_dashboard: [
				'webpack-dev-server/client?http://localhost:8030', //webpack dev server
				'webpack/hot/only-dev-server',
				'./history_dashboard.js' //app entry point from context
			],
			current_proposal_pipeline: [
				'webpack-dev-server/client?http://localhost:8030', //webpack dev server
				'webpack/hot/only-dev-server',
				'./current_proposal_pipeline.js' //app entry point from context
			],
			organization_type_sankey: [
				'webpack-dev-server/client?http://localhost:8030', //webpack dev server
				'webpack/hot/only-dev-server',
				'./organization_type_sankey.js' //app entry point from context
			],
			program_treemap: [
				'webpack-dev-server/client?http://localhost:8030', //webpack dev server
				'webpack/hot/only-dev-server',
				'./program_treemap.js' //app entry point from context
			],
			recipient_treemap: [
				'webpack-dev-server/client?http://localhost:8030', //webpack dev server
				'webpack/hot/only-dev-server',
				'./recipient_treemap.js' //app entry point from context
			],
			home: [
				'webpack-dev-server/client?http://localhost:8030', //webpack dev server
				'webpack/hot/only-dev-server',
				'./home.js' //app entry point from context
			]
	}
};

//output our bundle to the path where sprockets pipeline will include it
config.output = {
	path: path.join(__dirname, 'app', 'assets', 'javascripts'),
	filename: '[name]-bundle.js',
	publicPath: 'http://localhost:8030/assets',
	//make source path nicer
	devtoolModuleFilenameTemplate: '[resourcePath]',
	devtoolFallbackModuleFilenameTemplate: '[resourcePath]?[hash]'
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

//where to get modules to resolve
config.resolve = {
    extensions: ["", ".js", ".jsx"]
};

//make plugins like jquery available to all modules
config.plugins = [
	new webpack.HotModuleReplacementPlugin(),
	new webpack.NoErrorsPlugin()
];