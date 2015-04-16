var React = require('react');
var App = require('./App.jsx');
var jQuery = require('jquery');
var foundation = require('zurb-foundation');
var foundationOffcanvas = require('../../../node_modules/zurb-foundation/js/foundation/foundation.offcanvas.js');

require('../stylesheets/18f.scss');

document.addEventListener('DOMContentLoaded', function() {
	React.render(
		<App who={"World"} />,
		document.getElementById("app-entry-point")
	);
});
