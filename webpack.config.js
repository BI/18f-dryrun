//config for webpack build
var path = require('path');
var webpack = require('webpack');

var config = module.exports = {
  //set context for rails asset pipeline
  context: __dirname + '/app/assets/javascripts', //project directory
  entry: {demo: [
        './entry.js' //app entry point from context
      ],
      bubble_map: [
        './bubble_map.js' //app entry point from context
      ],
      history_dashboard: [
        './history_dashboard.js' //app entry point from context
      ],
      current_proposal_pipeline: [
        './current_proposal_pipeline.js' //app entry point from context
      ],
      organization_type_sankey: [
        './organization_type_sankey.js' //app entry point from context
      ],
      program_treemap: [
        './program_treemap.js' //app entry point from context
      ],
      recipient_treemap: [
        './recipient_treemap.js' //app entry point from context
      ],
      home: [
        './home.js' //app entry point from context
      ]
  }
};

//output our bundle to the path where sprockets pipeline will include it
config.output = {
  path: path.join(__dirname, 'app', 'assets', 'javascripts'),
  filename: '[name]-bundle.js'
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
