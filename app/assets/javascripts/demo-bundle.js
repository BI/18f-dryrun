/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/jackcompton/projects/18f-dryrun/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/jackcompton/projects/18f-dryrun/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {

	var jQuery = __webpack_require__(37);
	var foundation = __webpack_require__(33);
	var foundationOffcanvas = __webpack_require__(35);

	__webpack_require__(18);

	$(document).ready(function() {
		$(document).foundation();	
	});

	/*
	//dont need
	document.addEventListener('DOMContentLoaded', function() {
		React.render(
			<App who={"World"} />,
			document.getElementById("app-entry-point")
		);
	});
	*/

	/* REACT HOT LOADER */ })(); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/jackcompton/projects/18f-dryrun/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "entry.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(19);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(32)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/Users/jackcompton/projects/18f-dryrun/node_modules/css-loader/index.js!/Users/jackcompton/projects/18f-dryrun/node_modules/sass-loader/index.js!/Users/jackcompton/projects/18f-dryrun/app/assets/stylesheets/18f.scss", function() {
			var newContent = require("!!/Users/jackcompton/projects/18f-dryrun/node_modules/css-loader/index.js!/Users/jackcompton/projects/18f-dryrun/node_modules/sass-loader/index.js!/Users/jackcompton/projects/18f-dryrun/app/assets/stylesheets/18f.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(47)();
	exports.push([module.id, "meta.foundation-version {\n  font-family: \"/{{VERSION}}/\"; }\n\nmeta.foundation-mq-small {\n  font-family: \"/only screen/\";\n  width: 0; }\n\nmeta.foundation-mq-small-only {\n  font-family: \"/only screen and (max-width: 40em)/\";\n  width: 0; }\n\nmeta.foundation-mq-medium {\n  font-family: \"/only screen and (min-width:40.0625em)/\";\n  width: 40.0625em; }\n\nmeta.foundation-mq-medium-only {\n  font-family: \"/only screen and (min-width:40.0625em) and (max-width:64em)/\";\n  width: 40.0625em; }\n\nmeta.foundation-mq-large {\n  font-family: \"/only screen and (min-width:64.0625em)/\";\n  width: 64.0625em; }\n\nmeta.foundation-mq-large-only {\n  font-family: \"/only screen and (min-width:64.0625em) and (max-width:90em)/\";\n  width: 64.0625em; }\n\nmeta.foundation-mq-xlarge {\n  font-family: \"/only screen and (min-width:90.0625em)/\";\n  width: 90.0625em; }\n\nmeta.foundation-mq-xlarge-only {\n  font-family: \"/only screen and (min-width:90.0625em) and (max-width:120em)/\";\n  width: 90.0625em; }\n\nmeta.foundation-mq-xxlarge {\n  font-family: \"/only screen and (min-width:120.0625em)/\";\n  width: 120.0625em; }\n\nmeta.foundation-data-attribute-namespace {\n  font-family: false; }\n\nhtml, body {\n  height: 100%; }\n\nhtml {\n  box-sizing: border-box; }\n\n*, *:before, *:after {\n  -webkit-box-sizing: inherit;\n  -moz-box-sizing: inherit;\n  box-sizing: inherit; }\n\nhtml, body {\n  font-size: 100%; }\n\nbody {\n  background: #fff;\n  color: #222;\n  cursor: auto;\n  font-family: \"Helvetica Neue\", Helvetica, Roboto, Arial, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  line-height: 1.5;\n  margin: 0;\n  padding: 0;\n  position: relative; }\n\na:hover {\n  cursor: pointer; }\n\nimg {\n  max-width: 100%;\n  height: auto; }\n\nimg {\n  -ms-interpolation-mode: bicubic; }\n\n#map_canvas img, #map_canvas embed, #map_canvas object, .map_canvas img, .map_canvas embed, .map_canvas object, .mqa-display img, .mqa-display embed, .mqa-display object {\n  max-width: none !important; }\n\n.left {\n  float: left !important; }\n\n.right {\n  float: right !important; }\n\n.clearfix:before, .clearfix:after {\n  content: \" \";\n  display: table; }\n.clearfix:after {\n  clear: both; }\n\n.hide {\n  display: none; }\n\n.invisible {\n  visibility: hidden; }\n\n.antialiased {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\nimg {\n  display: inline-block;\n  vertical-align: middle; }\n\ntextarea {\n  height: auto;\n  min-height: 50px; }\n\nselect {\n  width: 100%; }\n\n.row {\n  margin: 0 auto;\n  max-width: 150rem;\n  width: 100%; }\n  .row:before, .row:after {\n    content: \" \";\n    display: table; }\n  .row:after {\n    clear: both; }\n  .row.collapse > .column, .row.collapse > .columns {\n    padding-left: 0;\n    padding-right: 0; }\n  .row.collapse .row {\n    margin-left: 0;\n    margin-right: 0; }\n  .row .row {\n    margin: 0 -0.9375rem;\n    max-width: none;\n    width: auto; }\n    .row .row:before, .row .row:after {\n      content: \" \";\n      display: table; }\n    .row .row:after {\n      clear: both; }\n    .row .row.collapse {\n      margin: 0;\n      max-width: none;\n      width: auto; }\n      .row .row.collapse:before, .row .row.collapse:after {\n        content: \" \";\n        display: table; }\n      .row .row.collapse:after {\n        clear: both; }\n\n.column, .columns {\n  padding-left: 0.9375rem;\n  padding-right: 0.9375rem;\n  width: 100%;\n  float: left; }\n\n[class*=\"column\"] + [class*=\"column\"]:last-child {\n  float: right; }\n\n[class*=\"column\"] + [class*=\"column\"].end {\n  float: left; }\n\n@media only screen {\n  .small-push-0 {\n    position: relative;\n    left: 0;\n    right: auto; }\n  .small-pull-0 {\n    position: relative;\n    right: 0;\n    left: auto; }\n  .small-push-1 {\n    position: relative;\n    left: 8.33333%;\n    right: auto; }\n  .small-pull-1 {\n    position: relative;\n    right: 8.33333%;\n    left: auto; }\n  .small-push-2 {\n    position: relative;\n    left: 16.66667%;\n    right: auto; }\n  .small-pull-2 {\n    position: relative;\n    right: 16.66667%;\n    left: auto; }\n  .small-push-3 {\n    position: relative;\n    left: 25%;\n    right: auto; }\n  .small-pull-3 {\n    position: relative;\n    right: 25%;\n    left: auto; }\n  .small-push-4 {\n    position: relative;\n    left: 33.33333%;\n    right: auto; }\n  .small-pull-4 {\n    position: relative;\n    right: 33.33333%;\n    left: auto; }\n  .small-push-5 {\n    position: relative;\n    left: 41.66667%;\n    right: auto; }\n  .small-pull-5 {\n    position: relative;\n    right: 41.66667%;\n    left: auto; }\n  .small-push-6 {\n    position: relative;\n    left: 50%;\n    right: auto; }\n  .small-pull-6 {\n    position: relative;\n    right: 50%;\n    left: auto; }\n  .small-push-7 {\n    position: relative;\n    left: 58.33333%;\n    right: auto; }\n  .small-pull-7 {\n    position: relative;\n    right: 58.33333%;\n    left: auto; }\n  .small-push-8 {\n    position: relative;\n    left: 66.66667%;\n    right: auto; }\n  .small-pull-8 {\n    position: relative;\n    right: 66.66667%;\n    left: auto; }\n  .small-push-9 {\n    position: relative;\n    left: 75%;\n    right: auto; }\n  .small-pull-9 {\n    position: relative;\n    right: 75%;\n    left: auto; }\n  .small-push-10 {\n    position: relative;\n    left: 83.33333%;\n    right: auto; }\n  .small-pull-10 {\n    position: relative;\n    right: 83.33333%;\n    left: auto; }\n  .small-push-11 {\n    position: relative;\n    left: 91.66667%;\n    right: auto; }\n  .small-pull-11 {\n    position: relative;\n    right: 91.66667%;\n    left: auto; }\n  .column, .columns {\n    position: relative;\n    padding-left: 0.9375rem;\n    padding-right: 0.9375rem;\n    float: left; }\n  .small-1 {\n    width: 8.33333%; }\n  .small-2 {\n    width: 16.66667%; }\n  .small-3 {\n    width: 25%; }\n  .small-4 {\n    width: 33.33333%; }\n  .small-5 {\n    width: 41.66667%; }\n  .small-6 {\n    width: 50%; }\n  .small-7 {\n    width: 58.33333%; }\n  .small-8 {\n    width: 66.66667%; }\n  .small-9 {\n    width: 75%; }\n  .small-10 {\n    width: 83.33333%; }\n  .small-11 {\n    width: 91.66667%; }\n  .small-12 {\n    width: 100%; }\n  .small-offset-0 {\n    margin-left: 0 !important; }\n  .small-offset-1 {\n    margin-left: 8.33333% !important; }\n  .small-offset-2 {\n    margin-left: 16.66667% !important; }\n  .small-offset-3 {\n    margin-left: 25% !important; }\n  .small-offset-4 {\n    margin-left: 33.33333% !important; }\n  .small-offset-5 {\n    margin-left: 41.66667% !important; }\n  .small-offset-6 {\n    margin-left: 50% !important; }\n  .small-offset-7 {\n    margin-left: 58.33333% !important; }\n  .small-offset-8 {\n    margin-left: 66.66667% !important; }\n  .small-offset-9 {\n    margin-left: 75% !important; }\n  .small-offset-10 {\n    margin-left: 83.33333% !important; }\n  .small-offset-11 {\n    margin-left: 91.66667% !important; }\n  .small-reset-order {\n    float: left;\n    left: auto;\n    margin-left: 0;\n    margin-right: 0;\n    right: auto; }\n  .column.small-centered, .columns.small-centered {\n    margin-left: auto;\n    margin-right: auto;\n    float: none; }\n  .column.small-uncentered, .columns.small-uncentered {\n    float: left;\n    margin-left: 0;\n    margin-right: 0; }\n  .column.small-centered:last-child, .columns.small-centered:last-child {\n    float: none; }\n  .column.small-uncentered:last-child, .columns.small-uncentered:last-child {\n    float: left; }\n  .column.small-uncentered.opposite, .columns.small-uncentered.opposite {\n    float: right; }\n  .row.small-collapse > .column, .row.small-collapse > .columns {\n    padding-left: 0;\n    padding-right: 0; }\n  .row.small-collapse .row {\n    margin-left: 0;\n    margin-right: 0; }\n  .row.small-uncollapse > .column, .row.small-uncollapse > .columns {\n    padding-left: 0.9375rem;\n    padding-right: 0.9375rem;\n    float: left; } }\n\n@media only screen and (min-width:40.0625em) {\n  .medium-push-0 {\n    position: relative;\n    left: 0;\n    right: auto; }\n  .medium-pull-0 {\n    position: relative;\n    right: 0;\n    left: auto; }\n  .medium-push-1 {\n    position: relative;\n    left: 8.33333%;\n    right: auto; }\n  .medium-pull-1 {\n    position: relative;\n    right: 8.33333%;\n    left: auto; }\n  .medium-push-2 {\n    position: relative;\n    left: 16.66667%;\n    right: auto; }\n  .medium-pull-2 {\n    position: relative;\n    right: 16.66667%;\n    left: auto; }\n  .medium-push-3 {\n    position: relative;\n    left: 25%;\n    right: auto; }\n  .medium-pull-3 {\n    position: relative;\n    right: 25%;\n    left: auto; }\n  .medium-push-4 {\n    position: relative;\n    left: 33.33333%;\n    right: auto; }\n  .medium-pull-4 {\n    position: relative;\n    right: 33.33333%;\n    left: auto; }\n  .medium-push-5 {\n    position: relative;\n    left: 41.66667%;\n    right: auto; }\n  .medium-pull-5 {\n    position: relative;\n    right: 41.66667%;\n    left: auto; }\n  .medium-push-6 {\n    position: relative;\n    left: 50%;\n    right: auto; }\n  .medium-pull-6 {\n    position: relative;\n    right: 50%;\n    left: auto; }\n  .medium-push-7 {\n    position: relative;\n    left: 58.33333%;\n    right: auto; }\n  .medium-pull-7 {\n    position: relative;\n    right: 58.33333%;\n    left: auto; }\n  .medium-push-8 {\n    position: relative;\n    left: 66.66667%;\n    right: auto; }\n  .medium-pull-8 {\n    position: relative;\n    right: 66.66667%;\n    left: auto; }\n  .medium-push-9 {\n    position: relative;\n    left: 75%;\n    right: auto; }\n  .medium-pull-9 {\n    position: relative;\n    right: 75%;\n    left: auto; }\n  .medium-push-10 {\n    position: relative;\n    left: 83.33333%;\n    right: auto; }\n  .medium-pull-10 {\n    position: relative;\n    right: 83.33333%;\n    left: auto; }\n  .medium-push-11 {\n    position: relative;\n    left: 91.66667%;\n    right: auto; }\n  .medium-pull-11 {\n    position: relative;\n    right: 91.66667%;\n    left: auto; }\n  .column, .columns {\n    position: relative;\n    padding-left: 0.9375rem;\n    padding-right: 0.9375rem;\n    float: left; }\n  .medium-1 {\n    width: 8.33333%; }\n  .medium-2 {\n    width: 16.66667%; }\n  .medium-3 {\n    width: 25%; }\n  .medium-4 {\n    width: 33.33333%; }\n  .medium-5 {\n    width: 41.66667%; }\n  .medium-6 {\n    width: 50%; }\n  .medium-7 {\n    width: 58.33333%; }\n  .medium-8 {\n    width: 66.66667%; }\n  .medium-9 {\n    width: 75%; }\n  .medium-10 {\n    width: 83.33333%; }\n  .medium-11 {\n    width: 91.66667%; }\n  .medium-12 {\n    width: 100%; }\n  .medium-offset-0 {\n    margin-left: 0 !important; }\n  .medium-offset-1 {\n    margin-left: 8.33333% !important; }\n  .medium-offset-2 {\n    margin-left: 16.66667% !important; }\n  .medium-offset-3 {\n    margin-left: 25% !important; }\n  .medium-offset-4 {\n    margin-left: 33.33333% !important; }\n  .medium-offset-5 {\n    margin-left: 41.66667% !important; }\n  .medium-offset-6 {\n    margin-left: 50% !important; }\n  .medium-offset-7 {\n    margin-left: 58.33333% !important; }\n  .medium-offset-8 {\n    margin-left: 66.66667% !important; }\n  .medium-offset-9 {\n    margin-left: 75% !important; }\n  .medium-offset-10 {\n    margin-left: 83.33333% !important; }\n  .medium-offset-11 {\n    margin-left: 91.66667% !important; }\n  .medium-reset-order {\n    float: left;\n    left: auto;\n    margin-left: 0;\n    margin-right: 0;\n    right: auto; }\n  .column.medium-centered, .columns.medium-centered {\n    margin-left: auto;\n    margin-right: auto;\n    float: none; }\n  .column.medium-uncentered, .columns.medium-uncentered {\n    float: left;\n    margin-left: 0;\n    margin-right: 0; }\n  .column.medium-centered:last-child, .columns.medium-centered:last-child {\n    float: none; }\n  .column.medium-uncentered:last-child, .columns.medium-uncentered:last-child {\n    float: left; }\n  .column.medium-uncentered.opposite, .columns.medium-uncentered.opposite {\n    float: right; }\n  .row.medium-collapse > .column, .row.medium-collapse > .columns {\n    padding-left: 0;\n    padding-right: 0; }\n  .row.medium-collapse .row {\n    margin-left: 0;\n    margin-right: 0; }\n  .row.medium-uncollapse > .column, .row.medium-uncollapse > .columns {\n    padding-left: 0.9375rem;\n    padding-right: 0.9375rem;\n    float: left; }\n  .push-0 {\n    position: relative;\n    left: 0;\n    right: auto; }\n  .pull-0 {\n    position: relative;\n    right: 0;\n    left: auto; }\n  .push-1 {\n    position: relative;\n    left: 8.33333%;\n    right: auto; }\n  .pull-1 {\n    position: relative;\n    right: 8.33333%;\n    left: auto; }\n  .push-2 {\n    position: relative;\n    left: 16.66667%;\n    right: auto; }\n  .pull-2 {\n    position: relative;\n    right: 16.66667%;\n    left: auto; }\n  .push-3 {\n    position: relative;\n    left: 25%;\n    right: auto; }\n  .pull-3 {\n    position: relative;\n    right: 25%;\n    left: auto; }\n  .push-4 {\n    position: relative;\n    left: 33.33333%;\n    right: auto; }\n  .pull-4 {\n    position: relative;\n    right: 33.33333%;\n    left: auto; }\n  .push-5 {\n    position: relative;\n    left: 41.66667%;\n    right: auto; }\n  .pull-5 {\n    position: relative;\n    right: 41.66667%;\n    left: auto; }\n  .push-6 {\n    position: relative;\n    left: 50%;\n    right: auto; }\n  .pull-6 {\n    position: relative;\n    right: 50%;\n    left: auto; }\n  .push-7 {\n    position: relative;\n    left: 58.33333%;\n    right: auto; }\n  .pull-7 {\n    position: relative;\n    right: 58.33333%;\n    left: auto; }\n  .push-8 {\n    position: relative;\n    left: 66.66667%;\n    right: auto; }\n  .pull-8 {\n    position: relative;\n    right: 66.66667%;\n    left: auto; }\n  .push-9 {\n    position: relative;\n    left: 75%;\n    right: auto; }\n  .pull-9 {\n    position: relative;\n    right: 75%;\n    left: auto; }\n  .push-10 {\n    position: relative;\n    left: 83.33333%;\n    right: auto; }\n  .pull-10 {\n    position: relative;\n    right: 83.33333%;\n    left: auto; }\n  .push-11 {\n    position: relative;\n    left: 91.66667%;\n    right: auto; }\n  .pull-11 {\n    position: relative;\n    right: 91.66667%;\n    left: auto; } }\n\n@media only screen and (min-width:64.0625em) {\n  .large-push-0 {\n    position: relative;\n    left: 0;\n    right: auto; }\n  .large-pull-0 {\n    position: relative;\n    right: 0;\n    left: auto; }\n  .large-push-1 {\n    position: relative;\n    left: 8.33333%;\n    right: auto; }\n  .large-pull-1 {\n    position: relative;\n    right: 8.33333%;\n    left: auto; }\n  .large-push-2 {\n    position: relative;\n    left: 16.66667%;\n    right: auto; }\n  .large-pull-2 {\n    position: relative;\n    right: 16.66667%;\n    left: auto; }\n  .large-push-3 {\n    position: relative;\n    left: 25%;\n    right: auto; }\n  .large-pull-3 {\n    position: relative;\n    right: 25%;\n    left: auto; }\n  .large-push-4 {\n    position: relative;\n    left: 33.33333%;\n    right: auto; }\n  .large-pull-4 {\n    position: relative;\n    right: 33.33333%;\n    left: auto; }\n  .large-push-5 {\n    position: relative;\n    left: 41.66667%;\n    right: auto; }\n  .large-pull-5 {\n    position: relative;\n    right: 41.66667%;\n    left: auto; }\n  .large-push-6 {\n    position: relative;\n    left: 50%;\n    right: auto; }\n  .large-pull-6 {\n    position: relative;\n    right: 50%;\n    left: auto; }\n  .large-push-7 {\n    position: relative;\n    left: 58.33333%;\n    right: auto; }\n  .large-pull-7 {\n    position: relative;\n    right: 58.33333%;\n    left: auto; }\n  .large-push-8 {\n    position: relative;\n    left: 66.66667%;\n    right: auto; }\n  .large-pull-8 {\n    position: relative;\n    right: 66.66667%;\n    left: auto; }\n  .large-push-9 {\n    position: relative;\n    left: 75%;\n    right: auto; }\n  .large-pull-9 {\n    position: relative;\n    right: 75%;\n    left: auto; }\n  .large-push-10 {\n    position: relative;\n    left: 83.33333%;\n    right: auto; }\n  .large-pull-10 {\n    position: relative;\n    right: 83.33333%;\n    left: auto; }\n  .large-push-11 {\n    position: relative;\n    left: 91.66667%;\n    right: auto; }\n  .large-pull-11 {\n    position: relative;\n    right: 91.66667%;\n    left: auto; }\n  .column, .columns {\n    position: relative;\n    padding-left: 0.9375rem;\n    padding-right: 0.9375rem;\n    float: left; }\n  .large-1 {\n    width: 8.33333%; }\n  .large-2 {\n    width: 16.66667%; }\n  .large-3 {\n    width: 25%; }\n  .large-4 {\n    width: 33.33333%; }\n  .large-5 {\n    width: 41.66667%; }\n  .large-6 {\n    width: 50%; }\n  .large-7 {\n    width: 58.33333%; }\n  .large-8 {\n    width: 66.66667%; }\n  .large-9 {\n    width: 75%; }\n  .large-10 {\n    width: 83.33333%; }\n  .large-11 {\n    width: 91.66667%; }\n  .large-12 {\n    width: 100%; }\n  .large-offset-0 {\n    margin-left: 0 !important; }\n  .large-offset-1 {\n    margin-left: 8.33333% !important; }\n  .large-offset-2 {\n    margin-left: 16.66667% !important; }\n  .large-offset-3 {\n    margin-left: 25% !important; }\n  .large-offset-4 {\n    margin-left: 33.33333% !important; }\n  .large-offset-5 {\n    margin-left: 41.66667% !important; }\n  .large-offset-6 {\n    margin-left: 50% !important; }\n  .large-offset-7 {\n    margin-left: 58.33333% !important; }\n  .large-offset-8 {\n    margin-left: 66.66667% !important; }\n  .large-offset-9 {\n    margin-left: 75% !important; }\n  .large-offset-10 {\n    margin-left: 83.33333% !important; }\n  .large-offset-11 {\n    margin-left: 91.66667% !important; }\n  .large-reset-order {\n    float: left;\n    left: auto;\n    margin-left: 0;\n    margin-right: 0;\n    right: auto; }\n  .column.large-centered, .columns.large-centered {\n    margin-left: auto;\n    margin-right: auto;\n    float: none; }\n  .column.large-uncentered, .columns.large-uncentered {\n    float: left;\n    margin-left: 0;\n    margin-right: 0; }\n  .column.large-centered:last-child, .columns.large-centered:last-child {\n    float: none; }\n  .column.large-uncentered:last-child, .columns.large-uncentered:last-child {\n    float: left; }\n  .column.large-uncentered.opposite, .columns.large-uncentered.opposite {\n    float: right; }\n  .row.large-collapse > .column, .row.large-collapse > .columns {\n    padding-left: 0;\n    padding-right: 0; }\n  .row.large-collapse .row {\n    margin-left: 0;\n    margin-right: 0; }\n  .row.large-uncollapse > .column, .row.large-uncollapse > .columns {\n    padding-left: 0.9375rem;\n    padding-right: 0.9375rem;\n    float: left; }\n  .push-0 {\n    position: relative;\n    left: 0;\n    right: auto; }\n  .pull-0 {\n    position: relative;\n    right: 0;\n    left: auto; }\n  .push-1 {\n    position: relative;\n    left: 8.33333%;\n    right: auto; }\n  .pull-1 {\n    position: relative;\n    right: 8.33333%;\n    left: auto; }\n  .push-2 {\n    position: relative;\n    left: 16.66667%;\n    right: auto; }\n  .pull-2 {\n    position: relative;\n    right: 16.66667%;\n    left: auto; }\n  .push-3 {\n    position: relative;\n    left: 25%;\n    right: auto; }\n  .pull-3 {\n    position: relative;\n    right: 25%;\n    left: auto; }\n  .push-4 {\n    position: relative;\n    left: 33.33333%;\n    right: auto; }\n  .pull-4 {\n    position: relative;\n    right: 33.33333%;\n    left: auto; }\n  .push-5 {\n    position: relative;\n    left: 41.66667%;\n    right: auto; }\n  .pull-5 {\n    position: relative;\n    right: 41.66667%;\n    left: auto; }\n  .push-6 {\n    position: relative;\n    left: 50%;\n    right: auto; }\n  .pull-6 {\n    position: relative;\n    right: 50%;\n    left: auto; }\n  .push-7 {\n    position: relative;\n    left: 58.33333%;\n    right: auto; }\n  .pull-7 {\n    position: relative;\n    right: 58.33333%;\n    left: auto; }\n  .push-8 {\n    position: relative;\n    left: 66.66667%;\n    right: auto; }\n  .pull-8 {\n    position: relative;\n    right: 66.66667%;\n    left: auto; }\n  .push-9 {\n    position: relative;\n    left: 75%;\n    right: auto; }\n  .pull-9 {\n    position: relative;\n    right: 75%;\n    left: auto; }\n  .push-10 {\n    position: relative;\n    left: 83.33333%;\n    right: auto; }\n  .pull-10 {\n    position: relative;\n    right: 83.33333%;\n    left: auto; }\n  .push-11 {\n    position: relative;\n    left: 91.66667%;\n    right: auto; }\n  .pull-11 {\n    position: relative;\n    right: 91.66667%;\n    left: auto; } }\n\n@media only screen and (min-width:90.0625em) {\n  .xlarge-push-0 {\n    position: relative;\n    left: 0;\n    right: auto; }\n  .xlarge-pull-0 {\n    position: relative;\n    right: 0;\n    left: auto; }\n  .xlarge-push-1 {\n    position: relative;\n    left: 8.33333%;\n    right: auto; }\n  .xlarge-pull-1 {\n    position: relative;\n    right: 8.33333%;\n    left: auto; }\n  .xlarge-push-2 {\n    position: relative;\n    left: 16.66667%;\n    right: auto; }\n  .xlarge-pull-2 {\n    position: relative;\n    right: 16.66667%;\n    left: auto; }\n  .xlarge-push-3 {\n    position: relative;\n    left: 25%;\n    right: auto; }\n  .xlarge-pull-3 {\n    position: relative;\n    right: 25%;\n    left: auto; }\n  .xlarge-push-4 {\n    position: relative;\n    left: 33.33333%;\n    right: auto; }\n  .xlarge-pull-4 {\n    position: relative;\n    right: 33.33333%;\n    left: auto; }\n  .xlarge-push-5 {\n    position: relative;\n    left: 41.66667%;\n    right: auto; }\n  .xlarge-pull-5 {\n    position: relative;\n    right: 41.66667%;\n    left: auto; }\n  .xlarge-push-6 {\n    position: relative;\n    left: 50%;\n    right: auto; }\n  .xlarge-pull-6 {\n    position: relative;\n    right: 50%;\n    left: auto; }\n  .xlarge-push-7 {\n    position: relative;\n    left: 58.33333%;\n    right: auto; }\n  .xlarge-pull-7 {\n    position: relative;\n    right: 58.33333%;\n    left: auto; }\n  .xlarge-push-8 {\n    position: relative;\n    left: 66.66667%;\n    right: auto; }\n  .xlarge-pull-8 {\n    position: relative;\n    right: 66.66667%;\n    left: auto; }\n  .xlarge-push-9 {\n    position: relative;\n    left: 75%;\n    right: auto; }\n  .xlarge-pull-9 {\n    position: relative;\n    right: 75%;\n    left: auto; }\n  .xlarge-push-10 {\n    position: relative;\n    left: 83.33333%;\n    right: auto; }\n  .xlarge-pull-10 {\n    position: relative;\n    right: 83.33333%;\n    left: auto; }\n  .xlarge-push-11 {\n    position: relative;\n    left: 91.66667%;\n    right: auto; }\n  .xlarge-pull-11 {\n    position: relative;\n    right: 91.66667%;\n    left: auto; }\n  .column, .columns {\n    position: relative;\n    padding-left: 0.9375rem;\n    padding-right: 0.9375rem;\n    float: left; }\n  .xlarge-1 {\n    width: 8.33333%; }\n  .xlarge-2 {\n    width: 16.66667%; }\n  .xlarge-3 {\n    width: 25%; }\n  .xlarge-4 {\n    width: 33.33333%; }\n  .xlarge-5 {\n    width: 41.66667%; }\n  .xlarge-6 {\n    width: 50%; }\n  .xlarge-7 {\n    width: 58.33333%; }\n  .xlarge-8 {\n    width: 66.66667%; }\n  .xlarge-9 {\n    width: 75%; }\n  .xlarge-10 {\n    width: 83.33333%; }\n  .xlarge-11 {\n    width: 91.66667%; }\n  .xlarge-12 {\n    width: 100%; }\n  .xlarge-offset-0 {\n    margin-left: 0 !important; }\n  .xlarge-offset-1 {\n    margin-left: 8.33333% !important; }\n  .xlarge-offset-2 {\n    margin-left: 16.66667% !important; }\n  .xlarge-offset-3 {\n    margin-left: 25% !important; }\n  .xlarge-offset-4 {\n    margin-left: 33.33333% !important; }\n  .xlarge-offset-5 {\n    margin-left: 41.66667% !important; }\n  .xlarge-offset-6 {\n    margin-left: 50% !important; }\n  .xlarge-offset-7 {\n    margin-left: 58.33333% !important; }\n  .xlarge-offset-8 {\n    margin-left: 66.66667% !important; }\n  .xlarge-offset-9 {\n    margin-left: 75% !important; }\n  .xlarge-offset-10 {\n    margin-left: 83.33333% !important; }\n  .xlarge-offset-11 {\n    margin-left: 91.66667% !important; }\n  .xlarge-reset-order {\n    float: left;\n    left: auto;\n    margin-left: 0;\n    margin-right: 0;\n    right: auto; }\n  .column.xlarge-centered, .columns.xlarge-centered {\n    margin-left: auto;\n    margin-right: auto;\n    float: none; }\n  .column.xlarge-uncentered, .columns.xlarge-uncentered {\n    float: left;\n    margin-left: 0;\n    margin-right: 0; }\n  .column.xlarge-centered:last-child, .columns.xlarge-centered:last-child {\n    float: none; }\n  .column.xlarge-uncentered:last-child, .columns.xlarge-uncentered:last-child {\n    float: left; }\n  .column.xlarge-uncentered.opposite, .columns.xlarge-uncentered.opposite {\n    float: right; }\n  .row.xlarge-collapse > .column, .row.xlarge-collapse > .columns {\n    padding-left: 0;\n    padding-right: 0; }\n  .row.xlarge-collapse .row {\n    margin-left: 0;\n    margin-right: 0; }\n  .row.xlarge-uncollapse > .column, .row.xlarge-uncollapse > .columns {\n    padding-left: 0.9375rem;\n    padding-right: 0.9375rem;\n    float: left; } }\n\n@media only screen and (min-width:120.0625em) {\n  .xxlarge-push-0 {\n    position: relative;\n    left: 0;\n    right: auto; }\n  .xxlarge-pull-0 {\n    position: relative;\n    right: 0;\n    left: auto; }\n  .xxlarge-push-1 {\n    position: relative;\n    left: 8.33333%;\n    right: auto; }\n  .xxlarge-pull-1 {\n    position: relative;\n    right: 8.33333%;\n    left: auto; }\n  .xxlarge-push-2 {\n    position: relative;\n    left: 16.66667%;\n    right: auto; }\n  .xxlarge-pull-2 {\n    position: relative;\n    right: 16.66667%;\n    left: auto; }\n  .xxlarge-push-3 {\n    position: relative;\n    left: 25%;\n    right: auto; }\n  .xxlarge-pull-3 {\n    position: relative;\n    right: 25%;\n    left: auto; }\n  .xxlarge-push-4 {\n    position: relative;\n    left: 33.33333%;\n    right: auto; }\n  .xxlarge-pull-4 {\n    position: relative;\n    right: 33.33333%;\n    left: auto; }\n  .xxlarge-push-5 {\n    position: relative;\n    left: 41.66667%;\n    right: auto; }\n  .xxlarge-pull-5 {\n    position: relative;\n    right: 41.66667%;\n    left: auto; }\n  .xxlarge-push-6 {\n    position: relative;\n    left: 50%;\n    right: auto; }\n  .xxlarge-pull-6 {\n    position: relative;\n    right: 50%;\n    left: auto; }\n  .xxlarge-push-7 {\n    position: relative;\n    left: 58.33333%;\n    right: auto; }\n  .xxlarge-pull-7 {\n    position: relative;\n    right: 58.33333%;\n    left: auto; }\n  .xxlarge-push-8 {\n    position: relative;\n    left: 66.66667%;\n    right: auto; }\n  .xxlarge-pull-8 {\n    position: relative;\n    right: 66.66667%;\n    left: auto; }\n  .xxlarge-push-9 {\n    position: relative;\n    left: 75%;\n    right: auto; }\n  .xxlarge-pull-9 {\n    position: relative;\n    right: 75%;\n    left: auto; }\n  .xxlarge-push-10 {\n    position: relative;\n    left: 83.33333%;\n    right: auto; }\n  .xxlarge-pull-10 {\n    position: relative;\n    right: 83.33333%;\n    left: auto; }\n  .xxlarge-push-11 {\n    position: relative;\n    left: 91.66667%;\n    right: auto; }\n  .xxlarge-pull-11 {\n    position: relative;\n    right: 91.66667%;\n    left: auto; }\n  .column, .columns {\n    position: relative;\n    padding-left: 0.9375rem;\n    padding-right: 0.9375rem;\n    float: left; }\n  .xxlarge-1 {\n    width: 8.33333%; }\n  .xxlarge-2 {\n    width: 16.66667%; }\n  .xxlarge-3 {\n    width: 25%; }\n  .xxlarge-4 {\n    width: 33.33333%; }\n  .xxlarge-5 {\n    width: 41.66667%; }\n  .xxlarge-6 {\n    width: 50%; }\n  .xxlarge-7 {\n    width: 58.33333%; }\n  .xxlarge-8 {\n    width: 66.66667%; }\n  .xxlarge-9 {\n    width: 75%; }\n  .xxlarge-10 {\n    width: 83.33333%; }\n  .xxlarge-11 {\n    width: 91.66667%; }\n  .xxlarge-12 {\n    width: 100%; }\n  .xxlarge-offset-0 {\n    margin-left: 0 !important; }\n  .xxlarge-offset-1 {\n    margin-left: 8.33333% !important; }\n  .xxlarge-offset-2 {\n    margin-left: 16.66667% !important; }\n  .xxlarge-offset-3 {\n    margin-left: 25% !important; }\n  .xxlarge-offset-4 {\n    margin-left: 33.33333% !important; }\n  .xxlarge-offset-5 {\n    margin-left: 41.66667% !important; }\n  .xxlarge-offset-6 {\n    margin-left: 50% !important; }\n  .xxlarge-offset-7 {\n    margin-left: 58.33333% !important; }\n  .xxlarge-offset-8 {\n    margin-left: 66.66667% !important; }\n  .xxlarge-offset-9 {\n    margin-left: 75% !important; }\n  .xxlarge-offset-10 {\n    margin-left: 83.33333% !important; }\n  .xxlarge-offset-11 {\n    margin-left: 91.66667% !important; }\n  .xxlarge-reset-order {\n    float: left;\n    left: auto;\n    margin-left: 0;\n    margin-right: 0;\n    right: auto; }\n  .column.xxlarge-centered, .columns.xxlarge-centered {\n    margin-left: auto;\n    margin-right: auto;\n    float: none; }\n  .column.xxlarge-uncentered, .columns.xxlarge-uncentered {\n    float: left;\n    margin-left: 0;\n    margin-right: 0; }\n  .column.xxlarge-centered:last-child, .columns.xxlarge-centered:last-child {\n    float: none; }\n  .column.xxlarge-uncentered:last-child, .columns.xxlarge-uncentered:last-child {\n    float: left; }\n  .column.xxlarge-uncentered.opposite, .columns.xxlarge-uncentered.opposite {\n    float: right; }\n  .row.xxlarge-collapse > .column, .row.xxlarge-collapse > .columns {\n    padding-left: 0;\n    padding-right: 0; }\n  .row.xxlarge-collapse .row {\n    margin-left: 0;\n    margin-right: 0; }\n  .row.xxlarge-uncollapse > .column, .row.xxlarge-uncollapse > .columns {\n    padding-left: 0.9375rem;\n    padding-right: 0.9375rem;\n    float: left; } }\n\n/* small displays */\n@media only screen {\n  .show-for-small-only, .show-for-small-up, .show-for-small, .show-for-small-down, .hide-for-medium-only, .hide-for-medium-up, .hide-for-medium, .show-for-medium-down, .hide-for-large-only, .hide-for-large-up, .hide-for-large, .show-for-large-down, .hide-for-xlarge-only, .hide-for-xlarge-up, .hide-for-xlarge, .show-for-xlarge-down, .hide-for-xxlarge-only, .hide-for-xxlarge-up, .hide-for-xxlarge, .show-for-xxlarge-down {\n    display: inherit !important; }\n  .hide-for-small-only, .hide-for-small-up, .hide-for-small, .hide-for-small-down, .show-for-medium-only, .show-for-medium-up, .show-for-medium, .hide-for-medium-down, .show-for-large-only, .show-for-large-up, .show-for-large, .hide-for-large-down, .show-for-xlarge-only, .show-for-xlarge-up, .show-for-xlarge, .hide-for-xlarge-down, .show-for-xxlarge-only, .show-for-xxlarge-up, .show-for-xxlarge, .hide-for-xxlarge-down {\n    display: none !important; }\n  .visible-for-small-only, .visible-for-small-up, .visible-for-small, .visible-for-small-down, .hidden-for-medium-only, .hidden-for-medium-up, .hidden-for-medium, .visible-for-medium-down, .hidden-for-large-only, .hidden-for-large-up, .hidden-for-large, .visible-for-large-down, .hidden-for-xlarge-only, .hidden-for-xlarge-up, .hidden-for-xlarge, .visible-for-xlarge-down, .hidden-for-xxlarge-only, .hidden-for-xxlarge-up, .hidden-for-xxlarge, .visible-for-xxlarge-down {\n    position: static !important;\n    height: auto;\n    width: auto;\n    overflow: visible;\n    clip: auto; }\n  .hidden-for-small-only, .hidden-for-small-up, .hidden-for-small, .hidden-for-small-down, .visible-for-medium-only, .visible-for-medium-up, .visible-for-medium, .hidden-for-medium-down, .visible-for-large-only, .visible-for-large-up, .visible-for-large, .hidden-for-large-down, .visible-for-xlarge-only, .visible-for-xlarge-up, .visible-for-xlarge, .hidden-for-xlarge-down, .visible-for-xxlarge-only, .visible-for-xxlarge-up, .visible-for-xxlarge, .hidden-for-xxlarge-down {\n    clip: rect(1px, 1px, 1px, 1px);\n    height: 1px;\n    overflow: hidden;\n    position: absolute !important;\n    width: 1px; }\n  table.show-for-small-only, table.show-for-small-up, table.show-for-small, table.show-for-small-down, table.hide-for-medium-only, table.hide-for-medium-up, table.hide-for-medium, table.show-for-medium-down, table.hide-for-large-only, table.hide-for-large-up, table.hide-for-large, table.show-for-large-down, table.hide-for-xlarge-only, table.hide-for-xlarge-up, table.hide-for-xlarge, table.show-for-xlarge-down, table.hide-for-xxlarge-only, table.hide-for-xxlarge-up, table.hide-for-xxlarge, table.show-for-xxlarge-down {\n    display: table !important; }\n  thead.show-for-small-only, thead.show-for-small-up, thead.show-for-small, thead.show-for-small-down, thead.hide-for-medium-only, thead.hide-for-medium-up, thead.hide-for-medium, thead.show-for-medium-down, thead.hide-for-large-only, thead.hide-for-large-up, thead.hide-for-large, thead.show-for-large-down, thead.hide-for-xlarge-only, thead.hide-for-xlarge-up, thead.hide-for-xlarge, thead.show-for-xlarge-down, thead.hide-for-xxlarge-only, thead.hide-for-xxlarge-up, thead.hide-for-xxlarge, thead.show-for-xxlarge-down {\n    display: table-header-group !important; }\n  tbody.show-for-small-only, tbody.show-for-small-up, tbody.show-for-small, tbody.show-for-small-down, tbody.hide-for-medium-only, tbody.hide-for-medium-up, tbody.hide-for-medium, tbody.show-for-medium-down, tbody.hide-for-large-only, tbody.hide-for-large-up, tbody.hide-for-large, tbody.show-for-large-down, tbody.hide-for-xlarge-only, tbody.hide-for-xlarge-up, tbody.hide-for-xlarge, tbody.show-for-xlarge-down, tbody.hide-for-xxlarge-only, tbody.hide-for-xxlarge-up, tbody.hide-for-xxlarge, tbody.show-for-xxlarge-down {\n    display: table-row-group !important; }\n  tr.show-for-small-only, tr.show-for-small-up, tr.show-for-small, tr.show-for-small-down, tr.hide-for-medium-only, tr.hide-for-medium-up, tr.hide-for-medium, tr.show-for-medium-down, tr.hide-for-large-only, tr.hide-for-large-up, tr.hide-for-large, tr.show-for-large-down, tr.hide-for-xlarge-only, tr.hide-for-xlarge-up, tr.hide-for-xlarge, tr.show-for-xlarge-down, tr.hide-for-xxlarge-only, tr.hide-for-xxlarge-up, tr.hide-for-xxlarge, tr.show-for-xxlarge-down {\n    display: table-row; }\n  th.show-for-small-only, td.show-for-small-only, th.show-for-small-up, td.show-for-small-up, th.show-for-small, td.show-for-small, th.show-for-small-down, td.show-for-small-down, th.hide-for-medium-only, td.hide-for-medium-only, th.hide-for-medium-up, td.hide-for-medium-up, th.hide-for-medium, td.hide-for-medium, th.show-for-medium-down, td.show-for-medium-down, th.hide-for-large-only, td.hide-for-large-only, th.hide-for-large-up, td.hide-for-large-up, th.hide-for-large, td.hide-for-large, th.show-for-large-down, td.show-for-large-down, th.hide-for-xlarge-only, td.hide-for-xlarge-only, th.hide-for-xlarge-up, td.hide-for-xlarge-up, th.hide-for-xlarge, td.hide-for-xlarge, th.show-for-xlarge-down, td.show-for-xlarge-down, th.hide-for-xxlarge-only, td.hide-for-xxlarge-only, th.hide-for-xxlarge-up, td.hide-for-xxlarge-up, th.hide-for-xxlarge, td.hide-for-xxlarge, th.show-for-xxlarge-down, td.show-for-xxlarge-down {\n    display: table-cell !important; } }\n\n/* medium displays */\n@media only screen and (min-width:40.0625em) {\n  .hide-for-small-only, .show-for-small-up, .hide-for-small, .hide-for-small-down, .show-for-medium-only, .show-for-medium-up, .show-for-medium, .show-for-medium-down, .hide-for-large-only, .hide-for-large-up, .hide-for-large, .show-for-large-down, .hide-for-xlarge-only, .hide-for-xlarge-up, .hide-for-xlarge, .show-for-xlarge-down, .hide-for-xxlarge-only, .hide-for-xxlarge-up, .hide-for-xxlarge, .show-for-xxlarge-down {\n    display: inherit !important; }\n  .show-for-small-only, .hide-for-small-up, .show-for-small, .show-for-small-down, .hide-for-medium-only, .hide-for-medium-up, .hide-for-medium, .hide-for-medium-down, .show-for-large-only, .show-for-large-up, .show-for-large, .hide-for-large-down, .show-for-xlarge-only, .show-for-xlarge-up, .show-for-xlarge, .hide-for-xlarge-down, .show-for-xxlarge-only, .show-for-xxlarge-up, .show-for-xxlarge, .hide-for-xxlarge-down {\n    display: none !important; }\n  .hidden-for-small-only, .visible-for-small-up, .hidden-for-small, .hidden-for-small-down, .visible-for-medium-only, .visible-for-medium-up, .visible-for-medium, .visible-for-medium-down, .hidden-for-large-only, .hidden-for-large-up, .hidden-for-large, .visible-for-large-down, .hidden-for-xlarge-only, .hidden-for-xlarge-up, .hidden-for-xlarge, .visible-for-xlarge-down, .hidden-for-xxlarge-only, .hidden-for-xxlarge-up, .hidden-for-xxlarge, .visible-for-xxlarge-down {\n    position: static !important;\n    height: auto;\n    width: auto;\n    overflow: visible;\n    clip: auto; }\n  .visible-for-small-only, .hidden-for-small-up, .visible-for-small, .visible-for-small-down, .hidden-for-medium-only, .hidden-for-medium-up, .hidden-for-medium, .hidden-for-medium-down, .visible-for-large-only, .visible-for-large-up, .visible-for-large, .hidden-for-large-down, .visible-for-xlarge-only, .visible-for-xlarge-up, .visible-for-xlarge, .hidden-for-xlarge-down, .visible-for-xxlarge-only, .visible-for-xxlarge-up, .visible-for-xxlarge, .hidden-for-xxlarge-down {\n    clip: rect(1px, 1px, 1px, 1px);\n    height: 1px;\n    overflow: hidden;\n    position: absolute !important;\n    width: 1px; }\n  table.hide-for-small-only, table.show-for-small-up, table.hide-for-small, table.hide-for-small-down, table.show-for-medium-only, table.show-for-medium-up, table.show-for-medium, table.show-for-medium-down, table.hide-for-large-only, table.hide-for-large-up, table.hide-for-large, table.show-for-large-down, table.hide-for-xlarge-only, table.hide-for-xlarge-up, table.hide-for-xlarge, table.show-for-xlarge-down, table.hide-for-xxlarge-only, table.hide-for-xxlarge-up, table.hide-for-xxlarge, table.show-for-xxlarge-down {\n    display: table !important; }\n  thead.hide-for-small-only, thead.show-for-small-up, thead.hide-for-small, thead.hide-for-small-down, thead.show-for-medium-only, thead.show-for-medium-up, thead.show-for-medium, thead.show-for-medium-down, thead.hide-for-large-only, thead.hide-for-large-up, thead.hide-for-large, thead.show-for-large-down, thead.hide-for-xlarge-only, thead.hide-for-xlarge-up, thead.hide-for-xlarge, thead.show-for-xlarge-down, thead.hide-for-xxlarge-only, thead.hide-for-xxlarge-up, thead.hide-for-xxlarge, thead.show-for-xxlarge-down {\n    display: table-header-group !important; }\n  tbody.hide-for-small-only, tbody.show-for-small-up, tbody.hide-for-small, tbody.hide-for-small-down, tbody.show-for-medium-only, tbody.show-for-medium-up, tbody.show-for-medium, tbody.show-for-medium-down, tbody.hide-for-large-only, tbody.hide-for-large-up, tbody.hide-for-large, tbody.show-for-large-down, tbody.hide-for-xlarge-only, tbody.hide-for-xlarge-up, tbody.hide-for-xlarge, tbody.show-for-xlarge-down, tbody.hide-for-xxlarge-only, tbody.hide-for-xxlarge-up, tbody.hide-for-xxlarge, tbody.show-for-xxlarge-down {\n    display: table-row-group !important; }\n  tr.hide-for-small-only, tr.show-for-small-up, tr.hide-for-small, tr.hide-for-small-down, tr.show-for-medium-only, tr.show-for-medium-up, tr.show-for-medium, tr.show-for-medium-down, tr.hide-for-large-only, tr.hide-for-large-up, tr.hide-for-large, tr.show-for-large-down, tr.hide-for-xlarge-only, tr.hide-for-xlarge-up, tr.hide-for-xlarge, tr.show-for-xlarge-down, tr.hide-for-xxlarge-only, tr.hide-for-xxlarge-up, tr.hide-for-xxlarge, tr.show-for-xxlarge-down {\n    display: table-row; }\n  th.hide-for-small-only, td.hide-for-small-only, th.show-for-small-up, td.show-for-small-up, th.hide-for-small, td.hide-for-small, th.hide-for-small-down, td.hide-for-small-down, th.show-for-medium-only, td.show-for-medium-only, th.show-for-medium-up, td.show-for-medium-up, th.show-for-medium, td.show-for-medium, th.show-for-medium-down, td.show-for-medium-down, th.hide-for-large-only, td.hide-for-large-only, th.hide-for-large-up, td.hide-for-large-up, th.hide-for-large, td.hide-for-large, th.show-for-large-down, td.show-for-large-down, th.hide-for-xlarge-only, td.hide-for-xlarge-only, th.hide-for-xlarge-up, td.hide-for-xlarge-up, th.hide-for-xlarge, td.hide-for-xlarge, th.show-for-xlarge-down, td.show-for-xlarge-down, th.hide-for-xxlarge-only, td.hide-for-xxlarge-only, th.hide-for-xxlarge-up, td.hide-for-xxlarge-up, th.hide-for-xxlarge, td.hide-for-xxlarge, th.show-for-xxlarge-down, td.show-for-xxlarge-down {\n    display: table-cell !important; } }\n\n/* large displays */\n@media only screen and (min-width:64.0625em) {\n  .hide-for-small-only, .show-for-small-up, .hide-for-small, .hide-for-small-down, .hide-for-medium-only, .show-for-medium-up, .hide-for-medium, .hide-for-medium-down, .show-for-large-only, .show-for-large-up, .show-for-large, .show-for-large-down, .hide-for-xlarge-only, .hide-for-xlarge-up, .hide-for-xlarge, .show-for-xlarge-down, .hide-for-xxlarge-only, .hide-for-xxlarge-up, .hide-for-xxlarge, .show-for-xxlarge-down {\n    display: inherit !important; }\n  .show-for-small-only, .hide-for-small-up, .show-for-small, .show-for-small-down, .show-for-medium-only, .hide-for-medium-up, .show-for-medium, .show-for-medium-down, .hide-for-large-only, .hide-for-large-up, .hide-for-large, .hide-for-large-down, .show-for-xlarge-only, .show-for-xlarge-up, .show-for-xlarge, .hide-for-xlarge-down, .show-for-xxlarge-only, .show-for-xxlarge-up, .show-for-xxlarge, .hide-for-xxlarge-down {\n    display: none !important; }\n  .hidden-for-small-only, .visible-for-small-up, .hidden-for-small, .hidden-for-small-down, .hidden-for-medium-only, .visible-for-medium-up, .hidden-for-medium, .hidden-for-medium-down, .visible-for-large-only, .visible-for-large-up, .visible-for-large, .visible-for-large-down, .hidden-for-xlarge-only, .hidden-for-xlarge-up, .hidden-for-xlarge, .visible-for-xlarge-down, .hidden-for-xxlarge-only, .hidden-for-xxlarge-up, .hidden-for-xxlarge, .visible-for-xxlarge-down {\n    position: static !important;\n    height: auto;\n    width: auto;\n    overflow: visible;\n    clip: auto; }\n  .visible-for-small-only, .hidden-for-small-up, .visible-for-small, .visible-for-small-down, .visible-for-medium-only, .hidden-for-medium-up, .visible-for-medium, .visible-for-medium-down, .hidden-for-large-only, .hidden-for-large-up, .hidden-for-large, .hidden-for-large-down, .visible-for-xlarge-only, .visible-for-xlarge-up, .visible-for-xlarge, .hidden-for-xlarge-down, .visible-for-xxlarge-only, .visible-for-xxlarge-up, .visible-for-xxlarge, .hidden-for-xxlarge-down {\n    clip: rect(1px, 1px, 1px, 1px);\n    height: 1px;\n    overflow: hidden;\n    position: absolute !important;\n    width: 1px; }\n  table.hide-for-small-only, table.show-for-small-up, table.hide-for-small, table.hide-for-small-down, table.hide-for-medium-only, table.show-for-medium-up, table.hide-for-medium, table.hide-for-medium-down, table.show-for-large-only, table.show-for-large-up, table.show-for-large, table.show-for-large-down, table.hide-for-xlarge-only, table.hide-for-xlarge-up, table.hide-for-xlarge, table.show-for-xlarge-down, table.hide-for-xxlarge-only, table.hide-for-xxlarge-up, table.hide-for-xxlarge, table.show-for-xxlarge-down {\n    display: table !important; }\n  thead.hide-for-small-only, thead.show-for-small-up, thead.hide-for-small, thead.hide-for-small-down, thead.hide-for-medium-only, thead.show-for-medium-up, thead.hide-for-medium, thead.hide-for-medium-down, thead.show-for-large-only, thead.show-for-large-up, thead.show-for-large, thead.show-for-large-down, thead.hide-for-xlarge-only, thead.hide-for-xlarge-up, thead.hide-for-xlarge, thead.show-for-xlarge-down, thead.hide-for-xxlarge-only, thead.hide-for-xxlarge-up, thead.hide-for-xxlarge, thead.show-for-xxlarge-down {\n    display: table-header-group !important; }\n  tbody.hide-for-small-only, tbody.show-for-small-up, tbody.hide-for-small, tbody.hide-for-small-down, tbody.hide-for-medium-only, tbody.show-for-medium-up, tbody.hide-for-medium, tbody.hide-for-medium-down, tbody.show-for-large-only, tbody.show-for-large-up, tbody.show-for-large, tbody.show-for-large-down, tbody.hide-for-xlarge-only, tbody.hide-for-xlarge-up, tbody.hide-for-xlarge, tbody.show-for-xlarge-down, tbody.hide-for-xxlarge-only, tbody.hide-for-xxlarge-up, tbody.hide-for-xxlarge, tbody.show-for-xxlarge-down {\n    display: table-row-group !important; }\n  tr.hide-for-small-only, tr.show-for-small-up, tr.hide-for-small, tr.hide-for-small-down, tr.hide-for-medium-only, tr.show-for-medium-up, tr.hide-for-medium, tr.hide-for-medium-down, tr.show-for-large-only, tr.show-for-large-up, tr.show-for-large, tr.show-for-large-down, tr.hide-for-xlarge-only, tr.hide-for-xlarge-up, tr.hide-for-xlarge, tr.show-for-xlarge-down, tr.hide-for-xxlarge-only, tr.hide-for-xxlarge-up, tr.hide-for-xxlarge, tr.show-for-xxlarge-down {\n    display: table-row; }\n  th.hide-for-small-only, td.hide-for-small-only, th.show-for-small-up, td.show-for-small-up, th.hide-for-small, td.hide-for-small, th.hide-for-small-down, td.hide-for-small-down, th.hide-for-medium-only, td.hide-for-medium-only, th.show-for-medium-up, td.show-for-medium-up, th.hide-for-medium, td.hide-for-medium, th.hide-for-medium-down, td.hide-for-medium-down, th.show-for-large-only, td.show-for-large-only, th.show-for-large-up, td.show-for-large-up, th.show-for-large, td.show-for-large, th.show-for-large-down, td.show-for-large-down, th.hide-for-xlarge-only, td.hide-for-xlarge-only, th.hide-for-xlarge-up, td.hide-for-xlarge-up, th.hide-for-xlarge, td.hide-for-xlarge, th.show-for-xlarge-down, td.show-for-xlarge-down, th.hide-for-xxlarge-only, td.hide-for-xxlarge-only, th.hide-for-xxlarge-up, td.hide-for-xxlarge-up, th.hide-for-xxlarge, td.hide-for-xxlarge, th.show-for-xxlarge-down, td.show-for-xxlarge-down {\n    display: table-cell !important; } }\n\n/* xlarge displays */\n@media only screen and (min-width:90.0625em) {\n  .hide-for-small-only, .show-for-small-up, .hide-for-small, .hide-for-small-down, .hide-for-medium-only, .show-for-medium-up, .hide-for-medium, .hide-for-medium-down, .hide-for-large-only, .show-for-large-up, .hide-for-large, .hide-for-large-down, .show-for-xlarge-only, .show-for-xlarge-up, .show-for-xlarge, .show-for-xlarge-down, .hide-for-xxlarge-only, .hide-for-xxlarge-up, .hide-for-xxlarge, .show-for-xxlarge-down {\n    display: inherit !important; }\n  .show-for-small-only, .hide-for-small-up, .show-for-small, .show-for-small-down, .show-for-medium-only, .hide-for-medium-up, .show-for-medium, .show-for-medium-down, .show-for-large-only, .hide-for-large-up, .show-for-large, .show-for-large-down, .hide-for-xlarge-only, .hide-for-xlarge-up, .hide-for-xlarge, .hide-for-xlarge-down, .show-for-xxlarge-only, .show-for-xxlarge-up, .show-for-xxlarge, .hide-for-xxlarge-down {\n    display: none !important; }\n  .hidden-for-small-only, .visible-for-small-up, .hidden-for-small, .hidden-for-small-down, .hidden-for-medium-only, .visible-for-medium-up, .hidden-for-medium, .hidden-for-medium-down, .hidden-for-large-only, .visible-for-large-up, .hidden-for-large, .hidden-for-large-down, .visible-for-xlarge-only, .visible-for-xlarge-up, .visible-for-xlarge, .visible-for-xlarge-down, .hidden-for-xxlarge-only, .hidden-for-xxlarge-up, .hidden-for-xxlarge, .visible-for-xxlarge-down {\n    position: static !important;\n    height: auto;\n    width: auto;\n    overflow: visible;\n    clip: auto; }\n  .visible-for-small-only, .hidden-for-small-up, .visible-for-small, .visible-for-small-down, .visible-for-medium-only, .hidden-for-medium-up, .visible-for-medium, .visible-for-medium-down, .visible-for-large-only, .hidden-for-large-up, .visible-for-large, .visible-for-large-down, .hidden-for-xlarge-only, .hidden-for-xlarge-up, .hidden-for-xlarge, .hidden-for-xlarge-down, .visible-for-xxlarge-only, .visible-for-xxlarge-up, .visible-for-xxlarge, .hidden-for-xxlarge-down {\n    clip: rect(1px, 1px, 1px, 1px);\n    height: 1px;\n    overflow: hidden;\n    position: absolute !important;\n    width: 1px; }\n  table.hide-for-small-only, table.show-for-small-up, table.hide-for-small, table.hide-for-small-down, table.hide-for-medium-only, table.show-for-medium-up, table.hide-for-medium, table.hide-for-medium-down, table.hide-for-large-only, table.show-for-large-up, table.hide-for-large, table.hide-for-large-down, table.show-for-xlarge-only, table.show-for-xlarge-up, table.show-for-xlarge, table.show-for-xlarge-down, table.hide-for-xxlarge-only, table.hide-for-xxlarge-up, table.hide-for-xxlarge, table.show-for-xxlarge-down {\n    display: table !important; }\n  thead.hide-for-small-only, thead.show-for-small-up, thead.hide-for-small, thead.hide-for-small-down, thead.hide-for-medium-only, thead.show-for-medium-up, thead.hide-for-medium, thead.hide-for-medium-down, thead.hide-for-large-only, thead.show-for-large-up, thead.hide-for-large, thead.hide-for-large-down, thead.show-for-xlarge-only, thead.show-for-xlarge-up, thead.show-for-xlarge, thead.show-for-xlarge-down, thead.hide-for-xxlarge-only, thead.hide-for-xxlarge-up, thead.hide-for-xxlarge, thead.show-for-xxlarge-down {\n    display: table-header-group !important; }\n  tbody.hide-for-small-only, tbody.show-for-small-up, tbody.hide-for-small, tbody.hide-for-small-down, tbody.hide-for-medium-only, tbody.show-for-medium-up, tbody.hide-for-medium, tbody.hide-for-medium-down, tbody.hide-for-large-only, tbody.show-for-large-up, tbody.hide-for-large, tbody.hide-for-large-down, tbody.show-for-xlarge-only, tbody.show-for-xlarge-up, tbody.show-for-xlarge, tbody.show-for-xlarge-down, tbody.hide-for-xxlarge-only, tbody.hide-for-xxlarge-up, tbody.hide-for-xxlarge, tbody.show-for-xxlarge-down {\n    display: table-row-group !important; }\n  tr.hide-for-small-only, tr.show-for-small-up, tr.hide-for-small, tr.hide-for-small-down, tr.hide-for-medium-only, tr.show-for-medium-up, tr.hide-for-medium, tr.hide-for-medium-down, tr.hide-for-large-only, tr.show-for-large-up, tr.hide-for-large, tr.hide-for-large-down, tr.show-for-xlarge-only, tr.show-for-xlarge-up, tr.show-for-xlarge, tr.show-for-xlarge-down, tr.hide-for-xxlarge-only, tr.hide-for-xxlarge-up, tr.hide-for-xxlarge, tr.show-for-xxlarge-down {\n    display: table-row; }\n  th.hide-for-small-only, td.hide-for-small-only, th.show-for-small-up, td.show-for-small-up, th.hide-for-small, td.hide-for-small, th.hide-for-small-down, td.hide-for-small-down, th.hide-for-medium-only, td.hide-for-medium-only, th.show-for-medium-up, td.show-for-medium-up, th.hide-for-medium, td.hide-for-medium, th.hide-for-medium-down, td.hide-for-medium-down, th.hide-for-large-only, td.hide-for-large-only, th.show-for-large-up, td.show-for-large-up, th.hide-for-large, td.hide-for-large, th.hide-for-large-down, td.hide-for-large-down, th.show-for-xlarge-only, td.show-for-xlarge-only, th.show-for-xlarge-up, td.show-for-xlarge-up, th.show-for-xlarge, td.show-for-xlarge, th.show-for-xlarge-down, td.show-for-xlarge-down, th.hide-for-xxlarge-only, td.hide-for-xxlarge-only, th.hide-for-xxlarge-up, td.hide-for-xxlarge-up, th.hide-for-xxlarge, td.hide-for-xxlarge, th.show-for-xxlarge-down, td.show-for-xxlarge-down {\n    display: table-cell !important; } }\n\n/* xxlarge displays */\n@media only screen and (min-width:120.0625em) {\n  .hide-for-small-only, .show-for-small-up, .hide-for-small, .hide-for-small-down, .hide-for-medium-only, .show-for-medium-up, .hide-for-medium, .hide-for-medium-down, .hide-for-large-only, .show-for-large-up, .hide-for-large, .hide-for-large-down, .hide-for-xlarge-only, .show-for-xlarge-up, .hide-for-xlarge, .hide-for-xlarge-down, .show-for-xxlarge-only, .show-for-xxlarge-up, .show-for-xxlarge, .show-for-xxlarge-down {\n    display: inherit !important; }\n  .show-for-small-only, .hide-for-small-up, .show-for-small, .show-for-small-down, .show-for-medium-only, .hide-for-medium-up, .show-for-medium, .show-for-medium-down, .show-for-large-only, .hide-for-large-up, .show-for-large, .show-for-large-down, .show-for-xlarge-only, .hide-for-xlarge-up, .show-for-xlarge, .show-for-xlarge-down, .hide-for-xxlarge-only, .hide-for-xxlarge-up, .hide-for-xxlarge, .hide-for-xxlarge-down {\n    display: none !important; }\n  .hidden-for-small-only, .visible-for-small-up, .hidden-for-small, .hidden-for-small-down, .hidden-for-medium-only, .visible-for-medium-up, .hidden-for-medium, .hidden-for-medium-down, .hidden-for-large-only, .visible-for-large-up, .hidden-for-large, .hidden-for-large-down, .hidden-for-xlarge-only, .visible-for-xlarge-up, .hidden-for-xlarge, .hidden-for-xlarge-down, .visible-for-xxlarge-only, .visible-for-xxlarge-up, .visible-for-xxlarge, .visible-for-xxlarge-down {\n    position: static !important;\n    height: auto;\n    width: auto;\n    overflow: visible;\n    clip: auto; }\n  .visible-for-small-only, .hidden-for-small-up, .visible-for-small, .visible-for-small-down, .visible-for-medium-only, .hidden-for-medium-up, .visible-for-medium, .visible-for-medium-down, .visible-for-large-only, .hidden-for-large-up, .visible-for-large, .visible-for-large-down, .visible-for-xlarge-only, .hidden-for-xlarge-up, .visible-for-xlarge, .visible-for-xlarge-down, .hidden-for-xxlarge-only, .hidden-for-xxlarge-up, .hidden-for-xxlarge, .hidden-for-xxlarge-down {\n    clip: rect(1px, 1px, 1px, 1px);\n    height: 1px;\n    overflow: hidden;\n    position: absolute !important;\n    width: 1px; }\n  table.hide-for-small-only, table.show-for-small-up, table.hide-for-small, table.hide-for-small-down, table.hide-for-medium-only, table.show-for-medium-up, table.hide-for-medium, table.hide-for-medium-down, table.hide-for-large-only, table.show-for-large-up, table.hide-for-large, table.hide-for-large-down, table.hide-for-xlarge-only, table.show-for-xlarge-up, table.hide-for-xlarge, table.hide-for-xlarge-down, table.show-for-xxlarge-only, table.show-for-xxlarge-up, table.show-for-xxlarge, table.show-for-xxlarge-down {\n    display: table !important; }\n  thead.hide-for-small-only, thead.show-for-small-up, thead.hide-for-small, thead.hide-for-small-down, thead.hide-for-medium-only, thead.show-for-medium-up, thead.hide-for-medium, thead.hide-for-medium-down, thead.hide-for-large-only, thead.show-for-large-up, thead.hide-for-large, thead.hide-for-large-down, thead.hide-for-xlarge-only, thead.show-for-xlarge-up, thead.hide-for-xlarge, thead.hide-for-xlarge-down, thead.show-for-xxlarge-only, thead.show-for-xxlarge-up, thead.show-for-xxlarge, thead.show-for-xxlarge-down {\n    display: table-header-group !important; }\n  tbody.hide-for-small-only, tbody.show-for-small-up, tbody.hide-for-small, tbody.hide-for-small-down, tbody.hide-for-medium-only, tbody.show-for-medium-up, tbody.hide-for-medium, tbody.hide-for-medium-down, tbody.hide-for-large-only, tbody.show-for-large-up, tbody.hide-for-large, tbody.hide-for-large-down, tbody.hide-for-xlarge-only, tbody.show-for-xlarge-up, tbody.hide-for-xlarge, tbody.hide-for-xlarge-down, tbody.show-for-xxlarge-only, tbody.show-for-xxlarge-up, tbody.show-for-xxlarge, tbody.show-for-xxlarge-down {\n    display: table-row-group !important; }\n  tr.hide-for-small-only, tr.show-for-small-up, tr.hide-for-small, tr.hide-for-small-down, tr.hide-for-medium-only, tr.show-for-medium-up, tr.hide-for-medium, tr.hide-for-medium-down, tr.hide-for-large-only, tr.show-for-large-up, tr.hide-for-large, tr.hide-for-large-down, tr.hide-for-xlarge-only, tr.show-for-xlarge-up, tr.hide-for-xlarge, tr.hide-for-xlarge-down, tr.show-for-xxlarge-only, tr.show-for-xxlarge-up, tr.show-for-xxlarge, tr.show-for-xxlarge-down {\n    display: table-row; }\n  th.hide-for-small-only, td.hide-for-small-only, th.show-for-small-up, td.show-for-small-up, th.hide-for-small, td.hide-for-small, th.hide-for-small-down, td.hide-for-small-down, th.hide-for-medium-only, td.hide-for-medium-only, th.show-for-medium-up, td.show-for-medium-up, th.hide-for-medium, td.hide-for-medium, th.hide-for-medium-down, td.hide-for-medium-down, th.hide-for-large-only, td.hide-for-large-only, th.show-for-large-up, td.show-for-large-up, th.hide-for-large, td.hide-for-large, th.hide-for-large-down, td.hide-for-large-down, th.hide-for-xlarge-only, td.hide-for-xlarge-only, th.show-for-xlarge-up, td.show-for-xlarge-up, th.hide-for-xlarge, td.hide-for-xlarge, th.hide-for-xlarge-down, td.hide-for-xlarge-down, th.show-for-xxlarge-only, td.show-for-xxlarge-only, th.show-for-xxlarge-up, td.show-for-xxlarge-up, th.show-for-xxlarge, td.show-for-xxlarge, th.show-for-xxlarge-down, td.show-for-xxlarge-down {\n    display: table-cell !important; } }\n\n/* Orientation targeting */\n.show-for-landscape, .hide-for-portrait {\n  display: inherit !important; }\n\n.hide-for-landscape, .show-for-portrait {\n  display: none !important; }\n\n/* Specific visibility for tables */\ntable.hide-for-landscape, table.show-for-portrait {\n  display: table !important; }\n\nthead.hide-for-landscape, thead.show-for-portrait {\n  display: table-header-group !important; }\n\ntbody.hide-for-landscape, tbody.show-for-portrait {\n  display: table-row-group !important; }\n\ntr.hide-for-landscape, tr.show-for-portrait {\n  display: table-row !important; }\n\ntd.hide-for-landscape, td.show-for-portrait, th.hide-for-landscape, th.show-for-portrait {\n  display: table-cell !important; }\n\n@media only screen and (orientation: landscape) {\n  .show-for-landscape, .hide-for-portrait {\n    display: inherit !important; }\n  .hide-for-landscape, .show-for-portrait {\n    display: none !important; }\n  /* Specific visibility for tables */\n  table.show-for-landscape, table.hide-for-portrait {\n    display: table !important; }\n  thead.show-for-landscape, thead.hide-for-portrait {\n    display: table-header-group !important; }\n  tbody.show-for-landscape, tbody.hide-for-portrait {\n    display: table-row-group !important; }\n  tr.show-for-landscape, tr.hide-for-portrait {\n    display: table-row !important; }\n  td.show-for-landscape, td.hide-for-portrait, th.show-for-landscape, th.hide-for-portrait {\n    display: table-cell !important; } }\n\n@media only screen and (orientation: portrait) {\n  .show-for-portrait, .hide-for-landscape {\n    display: inherit !important; }\n  .hide-for-portrait, .show-for-landscape {\n    display: none !important; }\n  /* Specific visibility for tables */\n  table.show-for-portrait, table.hide-for-landscape {\n    display: table !important; }\n  thead.show-for-portrait, thead.hide-for-landscape {\n    display: table-header-group !important; }\n  tbody.show-for-portrait, tbody.hide-for-landscape {\n    display: table-row-group !important; }\n  tr.show-for-portrait, tr.hide-for-landscape {\n    display: table-row !important; }\n  td.show-for-portrait, td.hide-for-landscape, th.show-for-portrait, th.hide-for-landscape {\n    display: table-cell !important; } }\n\n/* Touch-enabled device targeting */\n.show-for-touch {\n  display: none !important; }\n\n.hide-for-touch {\n  display: inherit !important; }\n\n.touch .show-for-touch {\n  display: inherit !important; }\n\n.touch .hide-for-touch {\n  display: none !important; }\n\n/* Specific visibility for tables */\ntable.hide-for-touch {\n  display: table !important; }\n\n.touch table.show-for-touch {\n  display: table !important; }\n\nthead.hide-for-touch {\n  display: table-header-group !important; }\n\n.touch thead.show-for-touch {\n  display: table-header-group !important; }\n\ntbody.hide-for-touch {\n  display: table-row-group !important; }\n\n.touch tbody.show-for-touch {\n  display: table-row-group !important; }\n\ntr.hide-for-touch {\n  display: table-row !important; }\n\n.touch tr.show-for-touch {\n  display: table-row !important; }\n\ntd.hide-for-touch {\n  display: table-cell !important; }\n\n.touch td.show-for-touch {\n  display: table-cell !important; }\n\nth.hide-for-touch {\n  display: table-cell !important; }\n\n.touch th.show-for-touch {\n  display: table-cell !important; }\n\n/* Screen reader-specific classes */\n.show-for-sr {\n  clip: rect(1px, 1px, 1px, 1px);\n  height: 1px;\n  overflow: hidden;\n  position: absolute !important;\n  width: 1px; }\n\n.show-on-focus {\n  clip: rect(1px, 1px, 1px, 1px);\n  height: 1px;\n  overflow: hidden;\n  position: absolute !important;\n  width: 1px; }\n  .show-on-focus:focus, .show-on-focus:active {\n    position: static !important;\n    height: auto;\n    width: auto;\n    overflow: visible;\n    clip: auto; }\n\n/*\n       * Print styles.\n       *\n       * Inlined to avoid required HTTP connection: www.phpied.com/delay-loading-your-print-css/\n       * Credit to Paul Irish and HTML5 Boilerplate (html5boilerplate.com)\n      */\n.print-only {\n  display: none !important; }\n\n@media print {\n  * {\n    background: transparent !important;\n    box-shadow: none !important;\n    color: #000000 !important;\n    /* Black prints faster: h5bp.com/s */\n    text-shadow: none !important; }\n  .show-for-print {\n    display: block; }\n  .hide-for-print {\n    display: none; }\n  table.show-for-print {\n    display: table !important; }\n  thead.show-for-print {\n    display: table-header-group !important; }\n  tbody.show-for-print {\n    display: table-row-group !important; }\n  tr.show-for-print {\n    display: table-row !important; }\n  td.show-for-print {\n    display: table-cell !important; }\n  th.show-for-print {\n    display: table-cell !important; }\n  a, a:visited {\n    text-decoration: underline; }\n  a[href]:after {\n    content: \" (\" attr(href) \")\"; }\n  abbr[title]:after {\n    content: \" (\" attr(title) \")\"; }\n  .ir a:after, a[href^=\"javascript:\"]:after, a[href^=\"#\"]:after {\n    content: \"\"; }\n  pre, blockquote {\n    border: 1px solid #999999;\n    page-break-inside: avoid; }\n  thead {\n    display: table-header-group;\n    /* h5bp.com/t */ }\n  tr, img {\n    page-break-inside: avoid; }\n  img {\n    max-width: 100% !important; }\n  @page {\n    margin: .5cm; }\n\n  p, h2, h3 {\n    orphans: 3;\n    widows: 3; }\n  h2, h3 {\n    page-break-after: avoid; }\n  .hide-on-print {\n    display: none !important; }\n  .print-only {\n    display: block !important; }\n  .hide-for-print {\n    display: none !important; }\n  .show-for-print {\n    display: inherit !important; } }\n\n/* Print visibility */\n@media print {\n  .show-for-print {\n    display: block; }\n  .hide-for-print {\n    display: none; }\n  table.show-for-print {\n    display: table !important; }\n  thead.show-for-print {\n    display: table-header-group !important; }\n  tbody.show-for-print {\n    display: table-row-group !important; }\n  tr.show-for-print {\n    display: table-row !important; }\n  td.show-for-print {\n    display: table-cell !important; }\n  th.show-for-print {\n    display: table-cell !important; } }\n\n.text-left {\n  text-align: left !important; }\n\n.text-right {\n  text-align: right !important; }\n\n.text-center {\n  text-align: center !important; }\n\n.text-justify {\n  text-align: justify !important; }\n\n@media only screen and (max-width: 40em) {\n  .small-only-text-left {\n    text-align: left !important; }\n  .small-only-text-right {\n    text-align: right !important; }\n  .small-only-text-center {\n    text-align: center !important; }\n  .small-only-text-justify {\n    text-align: justify !important; } }\n\n@media only screen {\n  .small-text-left {\n    text-align: left !important; }\n  .small-text-right {\n    text-align: right !important; }\n  .small-text-center {\n    text-align: center !important; }\n  .small-text-justify {\n    text-align: justify !important; } }\n\n@media only screen and (min-width:40.0625em) and (max-width:64em) {\n  .medium-only-text-left {\n    text-align: left !important; }\n  .medium-only-text-right {\n    text-align: right !important; }\n  .medium-only-text-center {\n    text-align: center !important; }\n  .medium-only-text-justify {\n    text-align: justify !important; } }\n\n@media only screen and (min-width:40.0625em) {\n  .medium-text-left {\n    text-align: left !important; }\n  .medium-text-right {\n    text-align: right !important; }\n  .medium-text-center {\n    text-align: center !important; }\n  .medium-text-justify {\n    text-align: justify !important; } }\n\n@media only screen and (min-width:64.0625em) and (max-width:90em) {\n  .large-only-text-left {\n    text-align: left !important; }\n  .large-only-text-right {\n    text-align: right !important; }\n  .large-only-text-center {\n    text-align: center !important; }\n  .large-only-text-justify {\n    text-align: justify !important; } }\n\n@media only screen and (min-width:64.0625em) {\n  .large-text-left {\n    text-align: left !important; }\n  .large-text-right {\n    text-align: right !important; }\n  .large-text-center {\n    text-align: center !important; }\n  .large-text-justify {\n    text-align: justify !important; } }\n\n@media only screen and (min-width:90.0625em) and (max-width:120em) {\n  .xlarge-only-text-left {\n    text-align: left !important; }\n  .xlarge-only-text-right {\n    text-align: right !important; }\n  .xlarge-only-text-center {\n    text-align: center !important; }\n  .xlarge-only-text-justify {\n    text-align: justify !important; } }\n\n@media only screen and (min-width:90.0625em) {\n  .xlarge-text-left {\n    text-align: left !important; }\n  .xlarge-text-right {\n    text-align: right !important; }\n  .xlarge-text-center {\n    text-align: center !important; }\n  .xlarge-text-justify {\n    text-align: justify !important; } }\n\n@media only screen and (min-width:120.0625em) and (max-width:99999999em) {\n  .xxlarge-only-text-left {\n    text-align: left !important; }\n  .xxlarge-only-text-right {\n    text-align: right !important; }\n  .xxlarge-only-text-center {\n    text-align: center !important; }\n  .xxlarge-only-text-justify {\n    text-align: justify !important; } }\n\n@media only screen and (min-width:120.0625em) {\n  .xxlarge-text-left {\n    text-align: left !important; }\n  .xxlarge-text-right {\n    text-align: right !important; }\n  .xxlarge-text-center {\n    text-align: center !important; }\n  .xxlarge-text-justify {\n    text-align: justify !important; } }\n\n/* Typography resets */\ndiv, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, form, p, blockquote, th, td {\n  margin: 0;\n  padding: 0; }\n\n/* Default Link Styles */\na {\n  color: #008CBA;\n  line-height: inherit;\n  text-decoration: none; }\n  a:hover, a:focus {\n    color: #0078a0; }\n  a img {\n    border: none; }\n\n/* Default paragraph styles */\np {\n  font-family: inherit;\n  font-size: 1rem;\n  font-weight: normal;\n  line-height: 1.6;\n  margin-bottom: 1.25rem;\n  text-rendering: optimizeLegibility; }\n  p.lead {\n    font-size: 1.21875rem;\n    line-height: 1.6; }\n  p aside {\n    font-size: 0.875rem;\n    font-style: italic;\n    line-height: 1.35; }\n\n/* Default header styles */\nh1, h2, h3, h4, h5, h6 {\n  color: #222222;\n  font-family: \"Helvetica Neue\", Helvetica, Roboto, Arial, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  line-height: 1.4;\n  margin-bottom: 0.5rem;\n  margin-top: 0.2rem;\n  text-rendering: optimizeLegibility; }\n  h1 small, h2 small, h3 small, h4 small, h5 small, h6 small {\n    color: #6f6f6f;\n    font-size: 60%;\n    line-height: 0; }\n\nh1 {\n  font-size: 2.125rem; }\n\nh2 {\n  font-size: 1.6875rem; }\n\nh3 {\n  font-size: 1.375rem; }\n\nh4 {\n  font-size: 1.125rem; }\n\nh5 {\n  font-size: 1.125rem; }\n\nh6 {\n  font-size: 1rem; }\n\n.subheader {\n  line-height: 1.4;\n  color: #6f6f6f;\n  font-weight: normal;\n  margin-top: 0.2rem;\n  margin-bottom: 0.5rem; }\n\nhr {\n  border: solid #DDDDDD;\n  border-width: 1px 0 0;\n  clear: both;\n  height: 0;\n  margin: 1.25rem 0 1.1875rem; }\n\n/* Helpful Typography Defaults */\nem, i {\n  font-style: italic;\n  line-height: inherit; }\n\nstrong, b {\n  font-weight: bold;\n  line-height: inherit; }\n\nsmall {\n  font-size: 60%;\n  line-height: inherit; }\n\ncode {\n  background-color: #f8f8f8;\n  border-color: #dfdfdf;\n  border-style: solid;\n  border-width: 1px;\n  color: #333333;\n  font-family: Consolas, \"Liberation Mono\", Courier, monospace;\n  font-weight: normal;\n  padding: 0.125rem 0.3125rem 0.0625rem; }\n\n/* Lists */\nul, ol, dl {\n  font-family: inherit;\n  font-size: 1rem;\n  line-height: 1.6;\n  list-style-position: outside;\n  margin-bottom: 1.25rem; }\n\nul {\n  margin-left: 1.1rem; }\n  ul.no-bullet {\n    margin-left: 0; }\n    ul.no-bullet li ul, ul.no-bullet li ol {\n      margin-left: 1.25rem;\n      margin-bottom: 0;\n      list-style: none; }\n\n/* Unordered Lists */\nul li ul, ul li ol {\n  margin-left: 1.25rem;\n  margin-bottom: 0; }\nul.square li ul, ul.circle li ul, ul.disc li ul {\n  list-style: inherit; }\nul.square {\n  list-style-type: square;\n  margin-left: 1.1rem; }\nul.circle {\n  list-style-type: circle;\n  margin-left: 1.1rem; }\nul.disc {\n  list-style-type: disc;\n  margin-left: 1.1rem; }\nul.no-bullet {\n  list-style: none; }\n\n/* Ordered Lists */\nol {\n  margin-left: 1.4rem; }\n  ol li ul, ol li ol {\n    margin-left: 1.25rem;\n    margin-bottom: 0; }\n\n/* Definition Lists */\ndl dt {\n  margin-bottom: 0.3rem;\n  font-weight: bold; }\ndl dd {\n  margin-bottom: 0.75rem; }\n\n/* Abbreviations */\nabbr, acronym {\n  text-transform: uppercase;\n  font-size: 90%;\n  color: #222;\n  cursor: help; }\n\nabbr {\n  text-transform: none; }\n  abbr[title] {\n    border-bottom: 1px dotted #DDDDDD; }\n\n/* Blockquotes */\nblockquote {\n  margin: 0 0 1.25rem;\n  padding: 0.5625rem 1.25rem 0 1.1875rem;\n  border-left: 1px solid #DDDDDD; }\n  blockquote cite {\n    display: block;\n    font-size: 0.8125rem;\n    color: #555555; }\n    blockquote cite:before {\n      content: \"\\2014 \\0020\"; }\n    blockquote cite a, blockquote cite a:visited {\n      color: #555555; }\n\nblockquote, blockquote p {\n  line-height: 1.6;\n  color: #6f6f6f; }\n\n/* Microformats */\n.vcard {\n  display: inline-block;\n  margin: 0 0 1.25rem 0;\n  border: 1px solid #DDDDDD;\n  padding: 0.625rem 0.75rem; }\n  .vcard li {\n    margin: 0;\n    display: block; }\n  .vcard .fn {\n    font-weight: bold;\n    font-size: 0.9375rem; }\n\n.vevent .summary {\n  font-weight: bold; }\n.vevent abbr {\n  cursor: default;\n  text-decoration: none;\n  font-weight: bold;\n  border: none;\n  padding: 0 0.0625rem; }\n\n@media only screen and (min-width:40.0625em) {\n  h1, h2, h3, h4, h5, h6 {\n    line-height: 1.4; }\n  h1 {\n    font-size: 2.75rem; }\n  h2 {\n    font-size: 2.3125rem; }\n  h3 {\n    font-size: 1.6875rem; }\n  h4 {\n    font-size: 1.4375rem; }\n  h5 {\n    font-size: 1.125rem; }\n  h6 {\n    font-size: 1rem; } }\n\n.off-canvas-wrap {\n  -webkit-backface-visibility: hidden;\n  position: relative;\n  width: 100%;\n  overflow: hidden; }\n  .off-canvas-wrap.move-right, .off-canvas-wrap.move-left {\n    min-height: 100%;\n    -webkit-overflow-scrolling: touch; }\n\n.inner-wrap {\n  position: relative;\n  width: 100%;\n  -webkit-transition: -webkit-transform 500ms ease;\n  -moz-transition: -moz-transform 500ms ease;\n  -ms-transition: -ms-transform 500ms ease;\n  -o-transition: -o-transform 500ms ease;\n  transition: transform 500ms ease; }\n  .inner-wrap:before, .inner-wrap:after {\n    content: \" \";\n    display: table; }\n  .inner-wrap:after {\n    clear: both; }\n\n.tab-bar {\n  -webkit-backface-visibility: hidden;\n  background: #333333;\n  color: #FFFFFF;\n  height: 2.8125rem;\n  line-height: 2.8125rem;\n  position: relative; }\n  .tab-bar h1, .tab-bar h2, .tab-bar h3, .tab-bar h4, .tab-bar h5, .tab-bar h6 {\n    color: #FFFFFF;\n    font-weight: bold;\n    line-height: 2.8125rem;\n    margin: 0; }\n  .tab-bar h1, .tab-bar h2, .tab-bar h3, .tab-bar h4 {\n    font-size: 1.125rem; }\n\n.left-small {\n  height: 2.8125rem;\n  position: absolute;\n  top: 0;\n  width: 2.8125rem;\n  border-right: solid 1px #1a1a1a;\n  left: 0; }\n\n.right-small {\n  height: 2.8125rem;\n  position: absolute;\n  top: 0;\n  width: 2.8125rem;\n  border-left: solid 1px #1a1a1a;\n  right: 0; }\n\n.tab-bar-section {\n  height: 2.8125rem;\n  padding: 0 0.625rem;\n  position: absolute;\n  text-align: center;\n  top: 0; }\n  .tab-bar-section.left {\n    text-align: left; }\n  .tab-bar-section.right {\n    text-align: right; }\n  .tab-bar-section.left {\n    left: 0;\n    right: 2.8125rem; }\n  .tab-bar-section.right {\n    left: 2.8125rem;\n    right: 0; }\n  .tab-bar-section.middle {\n    left: 2.8125rem;\n    right: 2.8125rem; }\n\n.tab-bar .menu-icon {\n  color: #FFFFFF;\n  display: block;\n  height: 2.8125rem;\n  padding: 0;\n  position: relative;\n  text-indent: 2.1875rem;\n  transform: translate3d(0, 0, 0);\n  width: 2.8125rem; }\n  .tab-bar .menu-icon span::after {\n    content: \"\";\n    display: block;\n    height: 0;\n    position: absolute;\n    top: 50%;\n    margin-top: -0.5rem;\n    left: 0.90625rem;\n    box-shadow: 0 0 0 1px #FFFFFF, 0 7px 0 1px #FFFFFF, 0 14px 0 1px #FFFFFF;\n    width: 1rem; }\n  .tab-bar .menu-icon span:hover:after {\n    box-shadow: 0 0 0 1px #b3b3b3, 0 7px 0 1px #b3b3b3, 0 14px 0 1px #b3b3b3; }\n\n.left-off-canvas-menu {\n  -webkit-backface-visibility: hidden;\n  background: #333333;\n  bottom: 0;\n  box-sizing: content-box;\n  -webkit-overflow-scrolling: touch;\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n  overflow-x: hidden;\n  overflow-y: auto;\n  position: absolute;\n  top: 0;\n  transition: transform 500ms ease 0s;\n  width: 15.625rem;\n  z-index: 1001;\n  -webkit-transform: translate3d(-100%, 0, 0);\n  -moz-transform: translate3d(-100%, 0, 0);\n  -ms-transform: translate(-100%, 0);\n  -ms-transform: translate3d(-100%, 0, 0);\n  -o-transform: translate3d(-100%, 0, 0);\n  transform: translate3d(-100%, 0, 0);\n  left: 0; }\n  .left-off-canvas-menu * {\n    -webkit-backface-visibility: hidden; }\n\n.right-off-canvas-menu {\n  -webkit-backface-visibility: hidden;\n  background: #333333;\n  bottom: 0;\n  box-sizing: content-box;\n  -webkit-overflow-scrolling: touch;\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n  overflow-x: hidden;\n  overflow-y: auto;\n  position: absolute;\n  top: 0;\n  transition: transform 500ms ease 0s;\n  width: 15.625rem;\n  z-index: 1001;\n  -webkit-transform: translate3d(100%, 0, 0);\n  -moz-transform: translate3d(100%, 0, 0);\n  -ms-transform: translate(100%, 0);\n  -ms-transform: translate3d(100%, 0, 0);\n  -o-transform: translate3d(100%, 0, 0);\n  transform: translate3d(100%, 0, 0);\n  right: 0; }\n  .right-off-canvas-menu * {\n    -webkit-backface-visibility: hidden; }\n\nul.off-canvas-list {\n  list-style-type: none;\n  margin: 0;\n  padding: 0; }\n  ul.off-canvas-list li label {\n    background: #444444;\n    border-bottom: none;\n    border-top: 1px solid #5e5e5e;\n    color: #999999;\n    display: block;\n    font-size: 0.75rem;\n    font-weight: bold;\n    margin: 0;\n    padding: .3rem 0.9375rem;\n    text-transform: uppercase; }\n  ul.off-canvas-list li a {\n    border-bottom: 1px solid #262626;\n    color: rgba(255, 255, 255, 0.7);\n    display: block;\n    padding: 0.66667rem;\n    transition: background 300ms ease; }\n    ul.off-canvas-list li a:hover {\n      background: #242424; }\n    ul.off-canvas-list li a:active {\n      background: #242424; }\n\n.move-right > .inner-wrap {\n  -webkit-transform: translate3d(15.625rem, 0, 0);\n  -moz-transform: translate3d(15.625rem, 0, 0);\n  -ms-transform: translate(15.625rem, 0);\n  -ms-transform: translate3d(15.625rem, 0, 0);\n  -o-transform: translate3d(15.625rem, 0, 0);\n  transform: translate3d(15.625rem, 0, 0); }\n.move-right .exit-off-canvas {\n  -webkit-backface-visibility: hidden;\n  box-shadow: -4px 0 4px rgba(0, 0, 0, 0.5), 4px 0 4px rgba(0, 0, 0, 0.5);\n  cursor: pointer;\n  transition: background 300ms ease;\n  -webkit-tap-highlight-color: transparent;\n  background: rgba(255, 255, 255, 0.2);\n  bottom: 0;\n  display: block;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: 1002; }\n  @media only screen and (min-width:40.0625em) {\n    .move-right .exit-off-canvas:hover {\n      background: rgba(255, 255, 255, 0.05); } }\n\n.move-left > .inner-wrap {\n  -webkit-transform: translate3d(-15.625rem, 0, 0);\n  -moz-transform: translate3d(-15.625rem, 0, 0);\n  -ms-transform: translate(-15.625rem, 0);\n  -ms-transform: translate3d(-15.625rem, 0, 0);\n  -o-transform: translate3d(-15.625rem, 0, 0);\n  transform: translate3d(-15.625rem, 0, 0); }\n.move-left .exit-off-canvas {\n  -webkit-backface-visibility: hidden;\n  box-shadow: -4px 0 4px rgba(0, 0, 0, 0.5), 4px 0 4px rgba(0, 0, 0, 0.5);\n  cursor: pointer;\n  transition: background 300ms ease;\n  -webkit-tap-highlight-color: transparent;\n  background: rgba(255, 255, 255, 0.2);\n  bottom: 0;\n  display: block;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: 1002; }\n  @media only screen and (min-width:40.0625em) {\n    .move-left .exit-off-canvas:hover {\n      background: rgba(255, 255, 255, 0.05); } }\n\n.offcanvas-overlap .left-off-canvas-menu, .offcanvas-overlap .right-off-canvas-menu {\n  -ms-transform: none;\n  -webkit-transform: none;\n  -moz-transform: none;\n  -o-transform: none;\n  transform: none;\n  z-index: 1003; }\n.offcanvas-overlap .exit-off-canvas {\n  -webkit-backface-visibility: hidden;\n  box-shadow: -4px 0 4px rgba(0, 0, 0, 0.5), 4px 0 4px rgba(0, 0, 0, 0.5);\n  cursor: pointer;\n  transition: background 300ms ease;\n  -webkit-tap-highlight-color: transparent;\n  background: rgba(255, 255, 255, 0.2);\n  bottom: 0;\n  display: block;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: 1002; }\n  @media only screen and (min-width:40.0625em) {\n    .offcanvas-overlap .exit-off-canvas:hover {\n      background: rgba(255, 255, 255, 0.05); } }\n\n.offcanvas-overlap-left .right-off-canvas-menu {\n  -ms-transform: none;\n  -webkit-transform: none;\n  -moz-transform: none;\n  -o-transform: none;\n  transform: none;\n  z-index: 1003; }\n.offcanvas-overlap-left .exit-off-canvas {\n  -webkit-backface-visibility: hidden;\n  box-shadow: -4px 0 4px rgba(0, 0, 0, 0.5), 4px 0 4px rgba(0, 0, 0, 0.5);\n  cursor: pointer;\n  transition: background 300ms ease;\n  -webkit-tap-highlight-color: transparent;\n  background: rgba(255, 255, 255, 0.2);\n  bottom: 0;\n  display: block;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: 1002; }\n  @media only screen and (min-width:40.0625em) {\n    .offcanvas-overlap-left .exit-off-canvas:hover {\n      background: rgba(255, 255, 255, 0.05); } }\n\n.offcanvas-overlap-right .left-off-canvas-menu {\n  -ms-transform: none;\n  -webkit-transform: none;\n  -moz-transform: none;\n  -o-transform: none;\n  transform: none;\n  z-index: 1003; }\n.offcanvas-overlap-right .exit-off-canvas {\n  -webkit-backface-visibility: hidden;\n  box-shadow: -4px 0 4px rgba(0, 0, 0, 0.5), 4px 0 4px rgba(0, 0, 0, 0.5);\n  cursor: pointer;\n  transition: background 300ms ease;\n  -webkit-tap-highlight-color: transparent;\n  background: rgba(255, 255, 255, 0.2);\n  bottom: 0;\n  display: block;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: 1002; }\n  @media only screen and (min-width:40.0625em) {\n    .offcanvas-overlap-right .exit-off-canvas:hover {\n      background: rgba(255, 255, 255, 0.05); } }\n\n.no-csstransforms .left-off-canvas-menu {\n  left: -15.625rem; }\n.no-csstransforms .right-off-canvas-menu {\n  right: -15.625rem; }\n.no-csstransforms .move-left > .inner-wrap {\n  right: 15.625rem; }\n.no-csstransforms .move-right > .inner-wrap {\n  left: 15.625rem; }\n\n.left-submenu {\n  -webkit-backface-visibility: hidden;\n  -webkit-overflow-scrolling: touch;\n  background: #333333;\n  bottom: 0;\n  box-sizing: content-box;\n  margin: 0;\n  overflow-x: hidden;\n  overflow-y: auto;\n  position: absolute;\n  top: 0;\n  width: 15.625rem;\n  z-index: 1002;\n  -webkit-transform: translate3d(-100%, 0, 0);\n  -moz-transform: translate3d(-100%, 0, 0);\n  -ms-transform: translate(-100%, 0);\n  -ms-transform: translate3d(-100%, 0, 0);\n  -o-transform: translate3d(-100%, 0, 0);\n  transform: translate3d(-100%, 0, 0);\n  left: 0;\n  -webkit-transition: -webkit-transform 500ms ease;\n  -moz-transition: -moz-transform 500ms ease;\n  -ms-transition: -ms-transform 500ms ease;\n  -o-transition: -o-transform 500ms ease;\n  transition: transform 500ms ease; }\n  .left-submenu * {\n    -webkit-backface-visibility: hidden; }\n  .left-submenu .back > a {\n    background: #444;\n    border-bottom: none;\n    border-top: 1px solid #5e5e5e;\n    color: #999999;\n    font-weight: bold;\n    padding: .3rem 0.9375rem;\n    text-transform: uppercase;\n    margin: 0; }\n    .left-submenu .back > a:hover {\n      background: #303030;\n      border-bottom: none;\n      border-top: 1px solid #5e5e5e; }\n    .left-submenu .back > a:before {\n      content: \"\\AB\";\n      margin-right: .5rem;\n      display: inline; }\n  .left-submenu.move-right, .left-submenu.offcanvas-overlap-right, .left-submenu.offcanvas-overlap {\n    -webkit-transform: translate3d(0%, 0, 0);\n    -moz-transform: translate3d(0%, 0, 0);\n    -ms-transform: translate(0%, 0);\n    -ms-transform: translate3d(0%, 0, 0);\n    -o-transform: translate3d(0%, 0, 0);\n    transform: translate3d(0%, 0, 0); }\n\n.right-submenu {\n  -webkit-backface-visibility: hidden;\n  -webkit-overflow-scrolling: touch;\n  background: #333333;\n  bottom: 0;\n  box-sizing: content-box;\n  margin: 0;\n  overflow-x: hidden;\n  overflow-y: auto;\n  position: absolute;\n  top: 0;\n  width: 15.625rem;\n  z-index: 1002;\n  -webkit-transform: translate3d(100%, 0, 0);\n  -moz-transform: translate3d(100%, 0, 0);\n  -ms-transform: translate(100%, 0);\n  -ms-transform: translate3d(100%, 0, 0);\n  -o-transform: translate3d(100%, 0, 0);\n  transform: translate3d(100%, 0, 0);\n  right: 0;\n  -webkit-transition: -webkit-transform 500ms ease;\n  -moz-transition: -moz-transform 500ms ease;\n  -ms-transition: -ms-transform 500ms ease;\n  -o-transition: -o-transform 500ms ease;\n  transition: transform 500ms ease; }\n  .right-submenu * {\n    -webkit-backface-visibility: hidden; }\n  .right-submenu .back > a {\n    background: #444;\n    border-bottom: none;\n    border-top: 1px solid #5e5e5e;\n    color: #999999;\n    font-weight: bold;\n    padding: .3rem 0.9375rem;\n    text-transform: uppercase;\n    margin: 0; }\n    .right-submenu .back > a:hover {\n      background: #303030;\n      border-bottom: none;\n      border-top: 1px solid #5e5e5e; }\n    .right-submenu .back > a:after {\n      content: \"\\BB\";\n      margin-left: .5rem;\n      display: inline; }\n  .right-submenu.move-left, .right-submenu.offcanvas-overlap-left, .right-submenu.offcanvas-overlap {\n    -webkit-transform: translate3d(0%, 0, 0);\n    -moz-transform: translate3d(0%, 0, 0);\n    -ms-transform: translate(0%, 0);\n    -ms-transform: translate3d(0%, 0, 0);\n    -o-transform: translate3d(0%, 0, 0);\n    transform: translate3d(0%, 0, 0); }\n\n.left-off-canvas-menu ul.off-canvas-list li.has-submenu > a:after {\n  content: \"\\BB\";\n  margin-left: .5rem;\n  display: inline; }\n\n.right-off-canvas-menu ul.off-canvas-list li.has-submenu > a:before {\n  content: \"\\AB\";\n  margin-right: .5rem;\n  display: inline; }\n\n/*!\n *  Font Awesome 4.3.0 by @davegandy - http://fontawesome.io - @fontawesome\n *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)\n */\n/* FONT PATH\n * -------------------------- */\n@font-face {\n  font-family: 'FontAwesome';\n  src: url('//netdna.bootstrapcdn.com/font-awesome/4.1.0/fonts/fontawesome-webfont.eot?v=4.3.0');\n  src: url('//netdna.bootstrapcdn.com/font-awesome/4.1.0/fonts/fontawesome-webfont.eot?#iefix&v=4.3.0') format('embedded-opentype'), url('//netdna.bootstrapcdn.com/font-awesome/4.1.0/fonts/fontawesome-webfont.woff2?v=4.3.0') format('woff2'), url('//netdna.bootstrapcdn.com/font-awesome/4.1.0/fonts/fontawesome-webfont.woff?v=4.3.0') format('woff'), url('//netdna.bootstrapcdn.com/font-awesome/4.1.0/fonts/fontawesome-webfont.ttf?v=4.3.0') format('truetype'), url('//netdna.bootstrapcdn.com/font-awesome/4.1.0/fonts/fontawesome-webfont.svg?v=4.3.0#fontawesomeregular') format('svg');\n  font-weight: normal;\n  font-style: normal; }\n\n.fa {\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  transform: translate(0, 0); }\n\n/* makes the font 33% larger relative to the icon container */\n.fa-lg {\n  font-size: 1.33333em;\n  line-height: 0.75em;\n  vertical-align: -15%; }\n\n.fa-2x {\n  font-size: 2em; }\n\n.fa-3x {\n  font-size: 3em; }\n\n.fa-4x {\n  font-size: 4em; }\n\n.fa-5x {\n  font-size: 5em; }\n\n.fa-fw {\n  width: 1.28571em;\n  text-align: center; }\n\n.fa-ul {\n  padding-left: 0;\n  margin-left: 2.14286em;\n  list-style-type: none; }\n  .fa-ul > li {\n    position: relative; }\n\n.fa-li {\n  position: absolute;\n  left: -2.14286em;\n  width: 2.14286em;\n  top: 0.14286em;\n  text-align: center; }\n  .fa-li.fa-lg {\n    left: -1.85714em; }\n\n.fa-border {\n  padding: .2em .25em .15em;\n  border: solid .08em #eee;\n  border-radius: .1em; }\n\n.pull-right {\n  float: right; }\n\n.pull-left {\n  float: left; }\n\n.fa.pull-left {\n  margin-right: .3em; }\n.fa.pull-right {\n  margin-left: .3em; }\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n  animation: fa-spin 2s infinite linear; }\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n  animation: fa-spin 1s infinite steps(8); }\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg); }\n\n  100% {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg); } }\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg); }\n\n  100% {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg); } }\n\n.fa-rotate-90 {\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=1);\n  -webkit-transform: rotate(90deg);\n  -ms-transform: rotate(90deg);\n  transform: rotate(90deg); }\n\n.fa-rotate-180 {\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2);\n  -webkit-transform: rotate(180deg);\n  -ms-transform: rotate(180deg);\n  transform: rotate(180deg); }\n\n.fa-rotate-270 {\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);\n  -webkit-transform: rotate(270deg);\n  -ms-transform: rotate(270deg);\n  transform: rotate(270deg); }\n\n.fa-flip-horizontal {\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=0);\n  -webkit-transform: scale(-1, 1);\n  -ms-transform: scale(-1, 1);\n  transform: scale(-1, 1); }\n\n.fa-flip-vertical {\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2);\n  -webkit-transform: scale(1, -1);\n  -ms-transform: scale(1, -1);\n  transform: scale(1, -1); }\n\n:root .fa-rotate-90, :root .fa-rotate-180, :root .fa-rotate-270, :root .fa-flip-horizontal, :root .fa-flip-vertical {\n  filter: none; }\n\n.fa-stack {\n  position: relative;\n  display: inline-block;\n  width: 2em;\n  height: 2em;\n  line-height: 2em;\n  vertical-align: middle; }\n\n.fa-stack-1x, .fa-stack-2x {\n  position: absolute;\n  left: 0;\n  width: 100%;\n  text-align: center; }\n\n.fa-stack-1x {\n  line-height: inherit; }\n\n.fa-stack-2x {\n  font-size: 2em; }\n\n.fa-inverse {\n  color: #fff; }\n\n/* Font Awesome uses the Unicode Private Use Area (PUA) to ensure screen\n   readers do not read off random characters that represent icons */\n.fa-glass:before {\n  content: \"\\f000\"; }\n\n.fa-music:before {\n  content: \"\\f001\"; }\n\n.fa-search:before {\n  content: \"\\f002\"; }\n\n.fa-envelope-o:before {\n  content: \"\\f003\"; }\n\n.fa-heart:before {\n  content: \"\\f004\"; }\n\n.fa-star:before {\n  content: \"\\f005\"; }\n\n.fa-star-o:before {\n  content: \"\\f006\"; }\n\n.fa-user:before {\n  content: \"\\f007\"; }\n\n.fa-film:before {\n  content: \"\\f008\"; }\n\n.fa-th-large:before {\n  content: \"\\f009\"; }\n\n.fa-th:before {\n  content: \"\\f00a\"; }\n\n.fa-th-list:before {\n  content: \"\\f00b\"; }\n\n.fa-check:before {\n  content: \"\\f00c\"; }\n\n.fa-remove:before, .fa-close:before, .fa-times:before {\n  content: \"\\f00d\"; }\n\n.fa-search-plus:before {\n  content: \"\\f00e\"; }\n\n.fa-search-minus:before {\n  content: \"\\f010\"; }\n\n.fa-power-off:before {\n  content: \"\\f011\"; }\n\n.fa-signal:before {\n  content: \"\\f012\"; }\n\n.fa-gear:before, .fa-cog:before {\n  content: \"\\f013\"; }\n\n.fa-trash-o:before {\n  content: \"\\f014\"; }\n\n.fa-home:before {\n  content: \"\\f015\"; }\n\n.fa-file-o:before {\n  content: \"\\f016\"; }\n\n.fa-clock-o:before {\n  content: \"\\f017\"; }\n\n.fa-road:before {\n  content: \"\\f018\"; }\n\n.fa-download:before {\n  content: \"\\f019\"; }\n\n.fa-arrow-circle-o-down:before {\n  content: \"\\f01a\"; }\n\n.fa-arrow-circle-o-up:before {\n  content: \"\\f01b\"; }\n\n.fa-inbox:before {\n  content: \"\\f01c\"; }\n\n.fa-play-circle-o:before {\n  content: \"\\f01d\"; }\n\n.fa-rotate-right:before, .fa-repeat:before {\n  content: \"\\f01e\"; }\n\n.fa-refresh:before {\n  content: \"\\f021\"; }\n\n.fa-list-alt:before {\n  content: \"\\f022\"; }\n\n.fa-lock:before {\n  content: \"\\f023\"; }\n\n.fa-flag:before {\n  content: \"\\f024\"; }\n\n.fa-headphones:before {\n  content: \"\\f025\"; }\n\n.fa-volume-off:before {\n  content: \"\\f026\"; }\n\n.fa-volume-down:before {\n  content: \"\\f027\"; }\n\n.fa-volume-up:before {\n  content: \"\\f028\"; }\n\n.fa-qrcode:before {\n  content: \"\\f029\"; }\n\n.fa-barcode:before {\n  content: \"\\f02a\"; }\n\n.fa-tag:before {\n  content: \"\\f02b\"; }\n\n.fa-tags:before {\n  content: \"\\f02c\"; }\n\n.fa-book:before {\n  content: \"\\f02d\"; }\n\n.fa-bookmark:before {\n  content: \"\\f02e\"; }\n\n.fa-print:before {\n  content: \"\\f02f\"; }\n\n.fa-camera:before {\n  content: \"\\f030\"; }\n\n.fa-font:before {\n  content: \"\\f031\"; }\n\n.fa-bold:before {\n  content: \"\\f032\"; }\n\n.fa-italic:before {\n  content: \"\\f033\"; }\n\n.fa-text-height:before {\n  content: \"\\f034\"; }\n\n.fa-text-width:before {\n  content: \"\\f035\"; }\n\n.fa-align-left:before {\n  content: \"\\f036\"; }\n\n.fa-align-center:before {\n  content: \"\\f037\"; }\n\n.fa-align-right:before {\n  content: \"\\f038\"; }\n\n.fa-align-justify:before {\n  content: \"\\f039\"; }\n\n.fa-list:before {\n  content: \"\\f03a\"; }\n\n.fa-dedent:before, .fa-outdent:before {\n  content: \"\\f03b\"; }\n\n.fa-indent:before {\n  content: \"\\f03c\"; }\n\n.fa-video-camera:before {\n  content: \"\\f03d\"; }\n\n.fa-photo:before, .fa-image:before, .fa-picture-o:before {\n  content: \"\\f03e\"; }\n\n.fa-pencil:before {\n  content: \"\\f040\"; }\n\n.fa-map-marker:before {\n  content: \"\\f041\"; }\n\n.fa-adjust:before {\n  content: \"\\f042\"; }\n\n.fa-tint:before {\n  content: \"\\f043\"; }\n\n.fa-edit:before, .fa-pencil-square-o:before {\n  content: \"\\f044\"; }\n\n.fa-share-square-o:before {\n  content: \"\\f045\"; }\n\n.fa-check-square-o:before {\n  content: \"\\f046\"; }\n\n.fa-arrows:before {\n  content: \"\\f047\"; }\n\n.fa-step-backward:before {\n  content: \"\\f048\"; }\n\n.fa-fast-backward:before {\n  content: \"\\f049\"; }\n\n.fa-backward:before {\n  content: \"\\f04a\"; }\n\n.fa-play:before {\n  content: \"\\f04b\"; }\n\n.fa-pause:before {\n  content: \"\\f04c\"; }\n\n.fa-stop:before {\n  content: \"\\f04d\"; }\n\n.fa-forward:before {\n  content: \"\\f04e\"; }\n\n.fa-fast-forward:before {\n  content: \"\\f050\"; }\n\n.fa-step-forward:before {\n  content: \"\\f051\"; }\n\n.fa-eject:before {\n  content: \"\\f052\"; }\n\n.fa-chevron-left:before {\n  content: \"\\f053\"; }\n\n.fa-chevron-right:before {\n  content: \"\\f054\"; }\n\n.fa-plus-circle:before {\n  content: \"\\f055\"; }\n\n.fa-minus-circle:before {\n  content: \"\\f056\"; }\n\n.fa-times-circle:before {\n  content: \"\\f057\"; }\n\n.fa-check-circle:before {\n  content: \"\\f058\"; }\n\n.fa-question-circle:before {\n  content: \"\\f059\"; }\n\n.fa-info-circle:before {\n  content: \"\\f05a\"; }\n\n.fa-crosshairs:before {\n  content: \"\\f05b\"; }\n\n.fa-times-circle-o:before {\n  content: \"\\f05c\"; }\n\n.fa-check-circle-o:before {\n  content: \"\\f05d\"; }\n\n.fa-ban:before {\n  content: \"\\f05e\"; }\n\n.fa-arrow-left:before {\n  content: \"\\f060\"; }\n\n.fa-arrow-right:before {\n  content: \"\\f061\"; }\n\n.fa-arrow-up:before {\n  content: \"\\f062\"; }\n\n.fa-arrow-down:before {\n  content: \"\\f063\"; }\n\n.fa-mail-forward:before, .fa-share:before {\n  content: \"\\f064\"; }\n\n.fa-expand:before {\n  content: \"\\f065\"; }\n\n.fa-compress:before {\n  content: \"\\f066\"; }\n\n.fa-plus:before {\n  content: \"\\f067\"; }\n\n.fa-minus:before {\n  content: \"\\f068\"; }\n\n.fa-asterisk:before {\n  content: \"\\f069\"; }\n\n.fa-exclamation-circle:before {\n  content: \"\\f06a\"; }\n\n.fa-gift:before {\n  content: \"\\f06b\"; }\n\n.fa-leaf:before {\n  content: \"\\f06c\"; }\n\n.fa-fire:before {\n  content: \"\\f06d\"; }\n\n.fa-eye:before {\n  content: \"\\f06e\"; }\n\n.fa-eye-slash:before {\n  content: \"\\f070\"; }\n\n.fa-warning:before, .fa-exclamation-triangle:before {\n  content: \"\\f071\"; }\n\n.fa-plane:before {\n  content: \"\\f072\"; }\n\n.fa-calendar:before {\n  content: \"\\f073\"; }\n\n.fa-random:before {\n  content: \"\\f074\"; }\n\n.fa-comment:before {\n  content: \"\\f075\"; }\n\n.fa-magnet:before {\n  content: \"\\f076\"; }\n\n.fa-chevron-up:before {\n  content: \"\\f077\"; }\n\n.fa-chevron-down:before {\n  content: \"\\f078\"; }\n\n.fa-retweet:before {\n  content: \"\\f079\"; }\n\n.fa-shopping-cart:before {\n  content: \"\\f07a\"; }\n\n.fa-folder:before {\n  content: \"\\f07b\"; }\n\n.fa-folder-open:before {\n  content: \"\\f07c\"; }\n\n.fa-arrows-v:before {\n  content: \"\\f07d\"; }\n\n.fa-arrows-h:before {\n  content: \"\\f07e\"; }\n\n.fa-bar-chart-o:before, .fa-bar-chart:before {\n  content: \"\\f080\"; }\n\n.fa-twitter-square:before {\n  content: \"\\f081\"; }\n\n.fa-facebook-square:before {\n  content: \"\\f082\"; }\n\n.fa-camera-retro:before {\n  content: \"\\f083\"; }\n\n.fa-key:before {\n  content: \"\\f084\"; }\n\n.fa-gears:before, .fa-cogs:before {\n  content: \"\\f085\"; }\n\n.fa-comments:before {\n  content: \"\\f086\"; }\n\n.fa-thumbs-o-up:before {\n  content: \"\\f087\"; }\n\n.fa-thumbs-o-down:before {\n  content: \"\\f088\"; }\n\n.fa-star-half:before {\n  content: \"\\f089\"; }\n\n.fa-heart-o:before {\n  content: \"\\f08a\"; }\n\n.fa-sign-out:before {\n  content: \"\\f08b\"; }\n\n.fa-linkedin-square:before {\n  content: \"\\f08c\"; }\n\n.fa-thumb-tack:before {\n  content: \"\\f08d\"; }\n\n.fa-external-link:before {\n  content: \"\\f08e\"; }\n\n.fa-sign-in:before {\n  content: \"\\f090\"; }\n\n.fa-trophy:before {\n  content: \"\\f091\"; }\n\n.fa-github-square:before {\n  content: \"\\f092\"; }\n\n.fa-upload:before {\n  content: \"\\f093\"; }\n\n.fa-lemon-o:before {\n  content: \"\\f094\"; }\n\n.fa-phone:before {\n  content: \"\\f095\"; }\n\n.fa-square-o:before {\n  content: \"\\f096\"; }\n\n.fa-bookmark-o:before {\n  content: \"\\f097\"; }\n\n.fa-phone-square:before {\n  content: \"\\f098\"; }\n\n.fa-twitter:before {\n  content: \"\\f099\"; }\n\n.fa-facebook-f:before, .fa-facebook:before {\n  content: \"\\f09a\"; }\n\n.fa-github:before {\n  content: \"\\f09b\"; }\n\n.fa-unlock:before {\n  content: \"\\f09c\"; }\n\n.fa-credit-card:before {\n  content: \"\\f09d\"; }\n\n.fa-rss:before {\n  content: \"\\f09e\"; }\n\n.fa-hdd-o:before {\n  content: \"\\f0a0\"; }\n\n.fa-bullhorn:before {\n  content: \"\\f0a1\"; }\n\n.fa-bell:before {\n  content: \"\\f0f3\"; }\n\n.fa-certificate:before {\n  content: \"\\f0a3\"; }\n\n.fa-hand-o-right:before {\n  content: \"\\f0a4\"; }\n\n.fa-hand-o-left:before {\n  content: \"\\f0a5\"; }\n\n.fa-hand-o-up:before {\n  content: \"\\f0a6\"; }\n\n.fa-hand-o-down:before {\n  content: \"\\f0a7\"; }\n\n.fa-arrow-circle-left:before {\n  content: \"\\f0a8\"; }\n\n.fa-arrow-circle-right:before {\n  content: \"\\f0a9\"; }\n\n.fa-arrow-circle-up:before {\n  content: \"\\f0aa\"; }\n\n.fa-arrow-circle-down:before {\n  content: \"\\f0ab\"; }\n\n.fa-globe:before {\n  content: \"\\f0ac\"; }\n\n.fa-wrench:before {\n  content: \"\\f0ad\"; }\n\n.fa-tasks:before {\n  content: \"\\f0ae\"; }\n\n.fa-filter:before {\n  content: \"\\f0b0\"; }\n\n.fa-briefcase:before {\n  content: \"\\f0b1\"; }\n\n.fa-arrows-alt:before {\n  content: \"\\f0b2\"; }\n\n.fa-group:before, .fa-users:before {\n  content: \"\\f0c0\"; }\n\n.fa-chain:before, .fa-link:before {\n  content: \"\\f0c1\"; }\n\n.fa-cloud:before {\n  content: \"\\f0c2\"; }\n\n.fa-flask:before {\n  content: \"\\f0c3\"; }\n\n.fa-cut:before, .fa-scissors:before {\n  content: \"\\f0c4\"; }\n\n.fa-copy:before, .fa-files-o:before {\n  content: \"\\f0c5\"; }\n\n.fa-paperclip:before {\n  content: \"\\f0c6\"; }\n\n.fa-save:before, .fa-floppy-o:before {\n  content: \"\\f0c7\"; }\n\n.fa-square:before {\n  content: \"\\f0c8\"; }\n\n.fa-navicon:before, .fa-reorder:before, .fa-bars:before {\n  content: \"\\f0c9\"; }\n\n.fa-list-ul:before {\n  content: \"\\f0ca\"; }\n\n.fa-list-ol:before {\n  content: \"\\f0cb\"; }\n\n.fa-strikethrough:before {\n  content: \"\\f0cc\"; }\n\n.fa-underline:before {\n  content: \"\\f0cd\"; }\n\n.fa-table:before {\n  content: \"\\f0ce\"; }\n\n.fa-magic:before {\n  content: \"\\f0d0\"; }\n\n.fa-truck:before {\n  content: \"\\f0d1\"; }\n\n.fa-pinterest:before {\n  content: \"\\f0d2\"; }\n\n.fa-pinterest-square:before {\n  content: \"\\f0d3\"; }\n\n.fa-google-plus-square:before {\n  content: \"\\f0d4\"; }\n\n.fa-google-plus:before {\n  content: \"\\f0d5\"; }\n\n.fa-money:before {\n  content: \"\\f0d6\"; }\n\n.fa-caret-down:before {\n  content: \"\\f0d7\"; }\n\n.fa-caret-up:before {\n  content: \"\\f0d8\"; }\n\n.fa-caret-left:before {\n  content: \"\\f0d9\"; }\n\n.fa-caret-right:before {\n  content: \"\\f0da\"; }\n\n.fa-columns:before {\n  content: \"\\f0db\"; }\n\n.fa-unsorted:before, .fa-sort:before {\n  content: \"\\f0dc\"; }\n\n.fa-sort-down:before, .fa-sort-desc:before {\n  content: \"\\f0dd\"; }\n\n.fa-sort-up:before, .fa-sort-asc:before {\n  content: \"\\f0de\"; }\n\n.fa-envelope:before {\n  content: \"\\f0e0\"; }\n\n.fa-linkedin:before {\n  content: \"\\f0e1\"; }\n\n.fa-rotate-left:before, .fa-undo:before {\n  content: \"\\f0e2\"; }\n\n.fa-legal:before, .fa-gavel:before {\n  content: \"\\f0e3\"; }\n\n.fa-dashboard:before, .fa-tachometer:before {\n  content: \"\\f0e4\"; }\n\n.fa-comment-o:before {\n  content: \"\\f0e5\"; }\n\n.fa-comments-o:before {\n  content: \"\\f0e6\"; }\n\n.fa-flash:before, .fa-bolt:before {\n  content: \"\\f0e7\"; }\n\n.fa-sitemap:before {\n  content: \"\\f0e8\"; }\n\n.fa-umbrella:before {\n  content: \"\\f0e9\"; }\n\n.fa-paste:before, .fa-clipboard:before {\n  content: \"\\f0ea\"; }\n\n.fa-lightbulb-o:before {\n  content: \"\\f0eb\"; }\n\n.fa-exchange:before {\n  content: \"\\f0ec\"; }\n\n.fa-cloud-download:before {\n  content: \"\\f0ed\"; }\n\n.fa-cloud-upload:before {\n  content: \"\\f0ee\"; }\n\n.fa-user-md:before {\n  content: \"\\f0f0\"; }\n\n.fa-stethoscope:before {\n  content: \"\\f0f1\"; }\n\n.fa-suitcase:before {\n  content: \"\\f0f2\"; }\n\n.fa-bell-o:before {\n  content: \"\\f0a2\"; }\n\n.fa-coffee:before {\n  content: \"\\f0f4\"; }\n\n.fa-cutlery:before {\n  content: \"\\f0f5\"; }\n\n.fa-file-text-o:before {\n  content: \"\\f0f6\"; }\n\n.fa-building-o:before {\n  content: \"\\f0f7\"; }\n\n.fa-hospital-o:before {\n  content: \"\\f0f8\"; }\n\n.fa-ambulance:before {\n  content: \"\\f0f9\"; }\n\n.fa-medkit:before {\n  content: \"\\f0fa\"; }\n\n.fa-fighter-jet:before {\n  content: \"\\f0fb\"; }\n\n.fa-beer:before {\n  content: \"\\f0fc\"; }\n\n.fa-h-square:before {\n  content: \"\\f0fd\"; }\n\n.fa-plus-square:before {\n  content: \"\\f0fe\"; }\n\n.fa-angle-double-left:before {\n  content: \"\\f100\"; }\n\n.fa-angle-double-right:before {\n  content: \"\\f101\"; }\n\n.fa-angle-double-up:before {\n  content: \"\\f102\"; }\n\n.fa-angle-double-down:before {\n  content: \"\\f103\"; }\n\n.fa-angle-left:before {\n  content: \"\\f104\"; }\n\n.fa-angle-right:before {\n  content: \"\\f105\"; }\n\n.fa-angle-up:before {\n  content: \"\\f106\"; }\n\n.fa-angle-down:before {\n  content: \"\\f107\"; }\n\n.fa-desktop:before {\n  content: \"\\f108\"; }\n\n.fa-laptop:before {\n  content: \"\\f109\"; }\n\n.fa-tablet:before {\n  content: \"\\f10a\"; }\n\n.fa-mobile-phone:before, .fa-mobile:before {\n  content: \"\\f10b\"; }\n\n.fa-circle-o:before {\n  content: \"\\f10c\"; }\n\n.fa-quote-left:before {\n  content: \"\\f10d\"; }\n\n.fa-quote-right:before {\n  content: \"\\f10e\"; }\n\n.fa-spinner:before {\n  content: \"\\f110\"; }\n\n.fa-circle:before {\n  content: \"\\f111\"; }\n\n.fa-mail-reply:before, .fa-reply:before {\n  content: \"\\f112\"; }\n\n.fa-github-alt:before {\n  content: \"\\f113\"; }\n\n.fa-folder-o:before {\n  content: \"\\f114\"; }\n\n.fa-folder-open-o:before {\n  content: \"\\f115\"; }\n\n.fa-smile-o:before {\n  content: \"\\f118\"; }\n\n.fa-frown-o:before {\n  content: \"\\f119\"; }\n\n.fa-meh-o:before {\n  content: \"\\f11a\"; }\n\n.fa-gamepad:before {\n  content: \"\\f11b\"; }\n\n.fa-keyboard-o:before {\n  content: \"\\f11c\"; }\n\n.fa-flag-o:before {\n  content: \"\\f11d\"; }\n\n.fa-flag-checkered:before {\n  content: \"\\f11e\"; }\n\n.fa-terminal:before {\n  content: \"\\f120\"; }\n\n.fa-code:before {\n  content: \"\\f121\"; }\n\n.fa-mail-reply-all:before, .fa-reply-all:before {\n  content: \"\\f122\"; }\n\n.fa-star-half-empty:before, .fa-star-half-full:before, .fa-star-half-o:before {\n  content: \"\\f123\"; }\n\n.fa-location-arrow:before {\n  content: \"\\f124\"; }\n\n.fa-crop:before {\n  content: \"\\f125\"; }\n\n.fa-code-fork:before {\n  content: \"\\f126\"; }\n\n.fa-unlink:before, .fa-chain-broken:before {\n  content: \"\\f127\"; }\n\n.fa-question:before {\n  content: \"\\f128\"; }\n\n.fa-info:before {\n  content: \"\\f129\"; }\n\n.fa-exclamation:before {\n  content: \"\\f12a\"; }\n\n.fa-superscript:before {\n  content: \"\\f12b\"; }\n\n.fa-subscript:before {\n  content: \"\\f12c\"; }\n\n.fa-eraser:before {\n  content: \"\\f12d\"; }\n\n.fa-puzzle-piece:before {\n  content: \"\\f12e\"; }\n\n.fa-microphone:before {\n  content: \"\\f130\"; }\n\n.fa-microphone-slash:before {\n  content: \"\\f131\"; }\n\n.fa-shield:before {\n  content: \"\\f132\"; }\n\n.fa-calendar-o:before {\n  content: \"\\f133\"; }\n\n.fa-fire-extinguisher:before {\n  content: \"\\f134\"; }\n\n.fa-rocket:before {\n  content: \"\\f135\"; }\n\n.fa-maxcdn:before {\n  content: \"\\f136\"; }\n\n.fa-chevron-circle-left:before {\n  content: \"\\f137\"; }\n\n.fa-chevron-circle-right:before {\n  content: \"\\f138\"; }\n\n.fa-chevron-circle-up:before {\n  content: \"\\f139\"; }\n\n.fa-chevron-circle-down:before {\n  content: \"\\f13a\"; }\n\n.fa-html5:before {\n  content: \"\\f13b\"; }\n\n.fa-css3:before {\n  content: \"\\f13c\"; }\n\n.fa-anchor:before {\n  content: \"\\f13d\"; }\n\n.fa-unlock-alt:before {\n  content: \"\\f13e\"; }\n\n.fa-bullseye:before {\n  content: \"\\f140\"; }\n\n.fa-ellipsis-h:before {\n  content: \"\\f141\"; }\n\n.fa-ellipsis-v:before {\n  content: \"\\f142\"; }\n\n.fa-rss-square:before {\n  content: \"\\f143\"; }\n\n.fa-play-circle:before {\n  content: \"\\f144\"; }\n\n.fa-ticket:before {\n  content: \"\\f145\"; }\n\n.fa-minus-square:before {\n  content: \"\\f146\"; }\n\n.fa-minus-square-o:before {\n  content: \"\\f147\"; }\n\n.fa-level-up:before {\n  content: \"\\f148\"; }\n\n.fa-level-down:before {\n  content: \"\\f149\"; }\n\n.fa-check-square:before {\n  content: \"\\f14a\"; }\n\n.fa-pencil-square:before {\n  content: \"\\f14b\"; }\n\n.fa-external-link-square:before {\n  content: \"\\f14c\"; }\n\n.fa-share-square:before {\n  content: \"\\f14d\"; }\n\n.fa-compass:before {\n  content: \"\\f14e\"; }\n\n.fa-toggle-down:before, .fa-caret-square-o-down:before {\n  content: \"\\f150\"; }\n\n.fa-toggle-up:before, .fa-caret-square-o-up:before {\n  content: \"\\f151\"; }\n\n.fa-toggle-right:before, .fa-caret-square-o-right:before {\n  content: \"\\f152\"; }\n\n.fa-euro:before, .fa-eur:before {\n  content: \"\\f153\"; }\n\n.fa-gbp:before {\n  content: \"\\f154\"; }\n\n.fa-dollar:before, .fa-usd:before {\n  content: \"\\f155\"; }\n\n.fa-rupee:before, .fa-inr:before {\n  content: \"\\f156\"; }\n\n.fa-cny:before, .fa-rmb:before, .fa-yen:before, .fa-jpy:before {\n  content: \"\\f157\"; }\n\n.fa-ruble:before, .fa-rouble:before, .fa-rub:before {\n  content: \"\\f158\"; }\n\n.fa-won:before, .fa-krw:before {\n  content: \"\\f159\"; }\n\n.fa-bitcoin:before, .fa-btc:before {\n  content: \"\\f15a\"; }\n\n.fa-file:before {\n  content: \"\\f15b\"; }\n\n.fa-file-text:before {\n  content: \"\\f15c\"; }\n\n.fa-sort-alpha-asc:before {\n  content: \"\\f15d\"; }\n\n.fa-sort-alpha-desc:before {\n  content: \"\\f15e\"; }\n\n.fa-sort-amount-asc:before {\n  content: \"\\f160\"; }\n\n.fa-sort-amount-desc:before {\n  content: \"\\f161\"; }\n\n.fa-sort-numeric-asc:before {\n  content: \"\\f162\"; }\n\n.fa-sort-numeric-desc:before {\n  content: \"\\f163\"; }\n\n.fa-thumbs-up:before {\n  content: \"\\f164\"; }\n\n.fa-thumbs-down:before {\n  content: \"\\f165\"; }\n\n.fa-youtube-square:before {\n  content: \"\\f166\"; }\n\n.fa-youtube:before {\n  content: \"\\f167\"; }\n\n.fa-xing:before {\n  content: \"\\f168\"; }\n\n.fa-xing-square:before {\n  content: \"\\f169\"; }\n\n.fa-youtube-play:before {\n  content: \"\\f16a\"; }\n\n.fa-dropbox:before {\n  content: \"\\f16b\"; }\n\n.fa-stack-overflow:before {\n  content: \"\\f16c\"; }\n\n.fa-instagram:before {\n  content: \"\\f16d\"; }\n\n.fa-flickr:before {\n  content: \"\\f16e\"; }\n\n.fa-adn:before {\n  content: \"\\f170\"; }\n\n.fa-bitbucket:before {\n  content: \"\\f171\"; }\n\n.fa-bitbucket-square:before {\n  content: \"\\f172\"; }\n\n.fa-tumblr:before {\n  content: \"\\f173\"; }\n\n.fa-tumblr-square:before {\n  content: \"\\f174\"; }\n\n.fa-long-arrow-down:before {\n  content: \"\\f175\"; }\n\n.fa-long-arrow-up:before {\n  content: \"\\f176\"; }\n\n.fa-long-arrow-left:before {\n  content: \"\\f177\"; }\n\n.fa-long-arrow-right:before {\n  content: \"\\f178\"; }\n\n.fa-apple:before {\n  content: \"\\f179\"; }\n\n.fa-windows:before {\n  content: \"\\f17a\"; }\n\n.fa-android:before {\n  content: \"\\f17b\"; }\n\n.fa-linux:before {\n  content: \"\\f17c\"; }\n\n.fa-dribbble:before {\n  content: \"\\f17d\"; }\n\n.fa-skype:before {\n  content: \"\\f17e\"; }\n\n.fa-foursquare:before {\n  content: \"\\f180\"; }\n\n.fa-trello:before {\n  content: \"\\f181\"; }\n\n.fa-female:before {\n  content: \"\\f182\"; }\n\n.fa-male:before {\n  content: \"\\f183\"; }\n\n.fa-gittip:before, .fa-gratipay:before {\n  content: \"\\f184\"; }\n\n.fa-sun-o:before {\n  content: \"\\f185\"; }\n\n.fa-moon-o:before {\n  content: \"\\f186\"; }\n\n.fa-archive:before {\n  content: \"\\f187\"; }\n\n.fa-bug:before {\n  content: \"\\f188\"; }\n\n.fa-vk:before {\n  content: \"\\f189\"; }\n\n.fa-weibo:before {\n  content: \"\\f18a\"; }\n\n.fa-renren:before {\n  content: \"\\f18b\"; }\n\n.fa-pagelines:before {\n  content: \"\\f18c\"; }\n\n.fa-stack-exchange:before {\n  content: \"\\f18d\"; }\n\n.fa-arrow-circle-o-right:before {\n  content: \"\\f18e\"; }\n\n.fa-arrow-circle-o-left:before {\n  content: \"\\f190\"; }\n\n.fa-toggle-left:before, .fa-caret-square-o-left:before {\n  content: \"\\f191\"; }\n\n.fa-dot-circle-o:before {\n  content: \"\\f192\"; }\n\n.fa-wheelchair:before {\n  content: \"\\f193\"; }\n\n.fa-vimeo-square:before {\n  content: \"\\f194\"; }\n\n.fa-turkish-lira:before, .fa-try:before {\n  content: \"\\f195\"; }\n\n.fa-plus-square-o:before {\n  content: \"\\f196\"; }\n\n.fa-space-shuttle:before {\n  content: \"\\f197\"; }\n\n.fa-slack:before {\n  content: \"\\f198\"; }\n\n.fa-envelope-square:before {\n  content: \"\\f199\"; }\n\n.fa-wordpress:before {\n  content: \"\\f19a\"; }\n\n.fa-openid:before {\n  content: \"\\f19b\"; }\n\n.fa-institution:before, .fa-bank:before, .fa-university:before {\n  content: \"\\f19c\"; }\n\n.fa-mortar-board:before, .fa-graduation-cap:before {\n  content: \"\\f19d\"; }\n\n.fa-yahoo:before {\n  content: \"\\f19e\"; }\n\n.fa-google:before {\n  content: \"\\f1a0\"; }\n\n.fa-reddit:before {\n  content: \"\\f1a1\"; }\n\n.fa-reddit-square:before {\n  content: \"\\f1a2\"; }\n\n.fa-stumbleupon-circle:before {\n  content: \"\\f1a3\"; }\n\n.fa-stumbleupon:before {\n  content: \"\\f1a4\"; }\n\n.fa-delicious:before {\n  content: \"\\f1a5\"; }\n\n.fa-digg:before {\n  content: \"\\f1a6\"; }\n\n.fa-pied-piper:before {\n  content: \"\\f1a7\"; }\n\n.fa-pied-piper-alt:before {\n  content: \"\\f1a8\"; }\n\n.fa-drupal:before {\n  content: \"\\f1a9\"; }\n\n.fa-joomla:before {\n  content: \"\\f1aa\"; }\n\n.fa-language:before {\n  content: \"\\f1ab\"; }\n\n.fa-fax:before {\n  content: \"\\f1ac\"; }\n\n.fa-building:before {\n  content: \"\\f1ad\"; }\n\n.fa-child:before {\n  content: \"\\f1ae\"; }\n\n.fa-paw:before {\n  content: \"\\f1b0\"; }\n\n.fa-spoon:before {\n  content: \"\\f1b1\"; }\n\n.fa-cube:before {\n  content: \"\\f1b2\"; }\n\n.fa-cubes:before {\n  content: \"\\f1b3\"; }\n\n.fa-behance:before {\n  content: \"\\f1b4\"; }\n\n.fa-behance-square:before {\n  content: \"\\f1b5\"; }\n\n.fa-steam:before {\n  content: \"\\f1b6\"; }\n\n.fa-steam-square:before {\n  content: \"\\f1b7\"; }\n\n.fa-recycle:before {\n  content: \"\\f1b8\"; }\n\n.fa-automobile:before, .fa-car:before {\n  content: \"\\f1b9\"; }\n\n.fa-cab:before, .fa-taxi:before {\n  content: \"\\f1ba\"; }\n\n.fa-tree:before {\n  content: \"\\f1bb\"; }\n\n.fa-spotify:before {\n  content: \"\\f1bc\"; }\n\n.fa-deviantart:before {\n  content: \"\\f1bd\"; }\n\n.fa-soundcloud:before {\n  content: \"\\f1be\"; }\n\n.fa-database:before {\n  content: \"\\f1c0\"; }\n\n.fa-file-pdf-o:before {\n  content: \"\\f1c1\"; }\n\n.fa-file-word-o:before {\n  content: \"\\f1c2\"; }\n\n.fa-file-excel-o:before {\n  content: \"\\f1c3\"; }\n\n.fa-file-powerpoint-o:before {\n  content: \"\\f1c4\"; }\n\n.fa-file-photo-o:before, .fa-file-picture-o:before, .fa-file-image-o:before {\n  content: \"\\f1c5\"; }\n\n.fa-file-zip-o:before, .fa-file-archive-o:before {\n  content: \"\\f1c6\"; }\n\n.fa-file-sound-o:before, .fa-file-audio-o:before {\n  content: \"\\f1c7\"; }\n\n.fa-file-movie-o:before, .fa-file-video-o:before {\n  content: \"\\f1c8\"; }\n\n.fa-file-code-o:before {\n  content: \"\\f1c9\"; }\n\n.fa-vine:before {\n  content: \"\\f1ca\"; }\n\n.fa-codepen:before {\n  content: \"\\f1cb\"; }\n\n.fa-jsfiddle:before {\n  content: \"\\f1cc\"; }\n\n.fa-life-bouy:before, .fa-life-buoy:before, .fa-life-saver:before, .fa-support:before, .fa-life-ring:before {\n  content: \"\\f1cd\"; }\n\n.fa-circle-o-notch:before {\n  content: \"\\f1ce\"; }\n\n.fa-ra:before, .fa-rebel:before {\n  content: \"\\f1d0\"; }\n\n.fa-ge:before, .fa-empire:before {\n  content: \"\\f1d1\"; }\n\n.fa-git-square:before {\n  content: \"\\f1d2\"; }\n\n.fa-git:before {\n  content: \"\\f1d3\"; }\n\n.fa-hacker-news:before {\n  content: \"\\f1d4\"; }\n\n.fa-tencent-weibo:before {\n  content: \"\\f1d5\"; }\n\n.fa-qq:before {\n  content: \"\\f1d6\"; }\n\n.fa-wechat:before, .fa-weixin:before {\n  content: \"\\f1d7\"; }\n\n.fa-send:before, .fa-paper-plane:before {\n  content: \"\\f1d8\"; }\n\n.fa-send-o:before, .fa-paper-plane-o:before {\n  content: \"\\f1d9\"; }\n\n.fa-history:before {\n  content: \"\\f1da\"; }\n\n.fa-genderless:before, .fa-circle-thin:before {\n  content: \"\\f1db\"; }\n\n.fa-header:before {\n  content: \"\\f1dc\"; }\n\n.fa-paragraph:before {\n  content: \"\\f1dd\"; }\n\n.fa-sliders:before {\n  content: \"\\f1de\"; }\n\n.fa-share-alt:before {\n  content: \"\\f1e0\"; }\n\n.fa-share-alt-square:before {\n  content: \"\\f1e1\"; }\n\n.fa-bomb:before {\n  content: \"\\f1e2\"; }\n\n.fa-soccer-ball-o:before, .fa-futbol-o:before {\n  content: \"\\f1e3\"; }\n\n.fa-tty:before {\n  content: \"\\f1e4\"; }\n\n.fa-binoculars:before {\n  content: \"\\f1e5\"; }\n\n.fa-plug:before {\n  content: \"\\f1e6\"; }\n\n.fa-slideshare:before {\n  content: \"\\f1e7\"; }\n\n.fa-twitch:before {\n  content: \"\\f1e8\"; }\n\n.fa-yelp:before {\n  content: \"\\f1e9\"; }\n\n.fa-newspaper-o:before {\n  content: \"\\f1ea\"; }\n\n.fa-wifi:before {\n  content: \"\\f1eb\"; }\n\n.fa-calculator:before {\n  content: \"\\f1ec\"; }\n\n.fa-paypal:before {\n  content: \"\\f1ed\"; }\n\n.fa-google-wallet:before {\n  content: \"\\f1ee\"; }\n\n.fa-cc-visa:before {\n  content: \"\\f1f0\"; }\n\n.fa-cc-mastercard:before {\n  content: \"\\f1f1\"; }\n\n.fa-cc-discover:before {\n  content: \"\\f1f2\"; }\n\n.fa-cc-amex:before {\n  content: \"\\f1f3\"; }\n\n.fa-cc-paypal:before {\n  content: \"\\f1f4\"; }\n\n.fa-cc-stripe:before {\n  content: \"\\f1f5\"; }\n\n.fa-bell-slash:before {\n  content: \"\\f1f6\"; }\n\n.fa-bell-slash-o:before {\n  content: \"\\f1f7\"; }\n\n.fa-trash:before {\n  content: \"\\f1f8\"; }\n\n.fa-copyright:before {\n  content: \"\\f1f9\"; }\n\n.fa-at:before {\n  content: \"\\f1fa\"; }\n\n.fa-eyedropper:before {\n  content: \"\\f1fb\"; }\n\n.fa-paint-brush:before {\n  content: \"\\f1fc\"; }\n\n.fa-birthday-cake:before {\n  content: \"\\f1fd\"; }\n\n.fa-area-chart:before {\n  content: \"\\f1fe\"; }\n\n.fa-pie-chart:before {\n  content: \"\\f200\"; }\n\n.fa-line-chart:before {\n  content: \"\\f201\"; }\n\n.fa-lastfm:before {\n  content: \"\\f202\"; }\n\n.fa-lastfm-square:before {\n  content: \"\\f203\"; }\n\n.fa-toggle-off:before {\n  content: \"\\f204\"; }\n\n.fa-toggle-on:before {\n  content: \"\\f205\"; }\n\n.fa-bicycle:before {\n  content: \"\\f206\"; }\n\n.fa-bus:before {\n  content: \"\\f207\"; }\n\n.fa-ioxhost:before {\n  content: \"\\f208\"; }\n\n.fa-angellist:before {\n  content: \"\\f209\"; }\n\n.fa-cc:before {\n  content: \"\\f20a\"; }\n\n.fa-shekel:before, .fa-sheqel:before, .fa-ils:before {\n  content: \"\\f20b\"; }\n\n.fa-meanpath:before {\n  content: \"\\f20c\"; }\n\n.fa-buysellads:before {\n  content: \"\\f20d\"; }\n\n.fa-connectdevelop:before {\n  content: \"\\f20e\"; }\n\n.fa-dashcube:before {\n  content: \"\\f210\"; }\n\n.fa-forumbee:before {\n  content: \"\\f211\"; }\n\n.fa-leanpub:before {\n  content: \"\\f212\"; }\n\n.fa-sellsy:before {\n  content: \"\\f213\"; }\n\n.fa-shirtsinbulk:before {\n  content: \"\\f214\"; }\n\n.fa-simplybuilt:before {\n  content: \"\\f215\"; }\n\n.fa-skyatlas:before {\n  content: \"\\f216\"; }\n\n.fa-cart-plus:before {\n  content: \"\\f217\"; }\n\n.fa-cart-arrow-down:before {\n  content: \"\\f218\"; }\n\n.fa-diamond:before {\n  content: \"\\f219\"; }\n\n.fa-ship:before {\n  content: \"\\f21a\"; }\n\n.fa-user-secret:before {\n  content: \"\\f21b\"; }\n\n.fa-motorcycle:before {\n  content: \"\\f21c\"; }\n\n.fa-street-view:before {\n  content: \"\\f21d\"; }\n\n.fa-heartbeat:before {\n  content: \"\\f21e\"; }\n\n.fa-venus:before {\n  content: \"\\f221\"; }\n\n.fa-mars:before {\n  content: \"\\f222\"; }\n\n.fa-mercury:before {\n  content: \"\\f223\"; }\n\n.fa-transgender:before {\n  content: \"\\f224\"; }\n\n.fa-transgender-alt:before {\n  content: \"\\f225\"; }\n\n.fa-venus-double:before {\n  content: \"\\f226\"; }\n\n.fa-mars-double:before {\n  content: \"\\f227\"; }\n\n.fa-venus-mars:before {\n  content: \"\\f228\"; }\n\n.fa-mars-stroke:before {\n  content: \"\\f229\"; }\n\n.fa-mars-stroke-v:before {\n  content: \"\\f22a\"; }\n\n.fa-mars-stroke-h:before {\n  content: \"\\f22b\"; }\n\n.fa-neuter:before {\n  content: \"\\f22c\"; }\n\n.fa-facebook-official:before {\n  content: \"\\f230\"; }\n\n.fa-pinterest-p:before {\n  content: \"\\f231\"; }\n\n.fa-whatsapp:before {\n  content: \"\\f232\"; }\n\n.fa-server:before {\n  content: \"\\f233\"; }\n\n.fa-user-plus:before {\n  content: \"\\f234\"; }\n\n.fa-user-times:before {\n  content: \"\\f235\"; }\n\n.fa-hotel:before, .fa-bed:before {\n  content: \"\\f236\"; }\n\n.fa-viacoin:before {\n  content: \"\\f237\"; }\n\n.fa-train:before {\n  content: \"\\f238\"; }\n\n.fa-subway:before {\n  content: \"\\f239\"; }\n\n.fa-medium:before {\n  content: \"\\f23a\"; }\n\n/* LOADING BAR */\n#loading.loaded img {\n  display: none; }\n\n#loading.loaded div {\n  display: block; }\n\n#loading img {\n  display: block; }\n\n#loading div {\n  display: none; }\n\n#loading.load-in-content {\n  position: absolute;\n  z-index: 1;\n  background-color: #fff;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  vertical-align: middle;\n  display: table-cell; }\n  #loading.load-in-content.loaded {\n    top: -150%; }\n  #loading.load-in-content img {\n    width: auto;\n    display: inline-block;\n    margin-top: 280px; }\n\n/* LOADING BAR */\n.page-select {\n  margin: 7px 0 1px;\n  border-bottom: 1px solid #ddd;\n  padding-bottom: 10px; }\n  .page-select label {\n    float: left;\n    margin-right: 8px; }\n  .page-select span {\n    overflow: hidden;\n    display: block;\n    padding: 0 1px; }\n  .page-select select {\n    font-size: 16px; }\n\n/* Organization Type Table */\np.note {\n  padding: .4em;\n  background-color: #ffc;\n  margin-top: .5em;\n  margin-bottom: 1em; }\n\n#organization-type-table {\n  position: relative;\n  width: 100%;\n  margin-top: 30px;\n  margin-bottom: 44px; }\n  #organization-type-table table.dc-datatable {\n    margin: 15px 0;\n    width: 100%; }\n    #organization-type-table table.dc-datatable th, #organization-type-table table.dc-datatable td {\n      font-size: 14px;\n      line-height: 16px;\n      vertical-align: top;\n      text-align: left;\n      padding: 5px 5px; }\n    #organization-type-table table.dc-datatable th {\n      background-color: #eee;\n      text-shadow: 0 -1px 0 rgba(255, 255, 255, 0.5); }\n      #organization-type-table table.dc-datatable th a {\n        color: #222; }\n        #organization-type-table table.dc-datatable th a .dynatable-arrow {\n          color: #666;\n          display: inline-block;\n          font-size: 11px;\n          margin-left: 3px; }\n  #organization-type-table .dynatable-search {\n    position: absolute;\n    top: -28px;\n    right: 5px;\n    font-size: 11px;\n    line-height: 2.4em;\n    width: 50%;\n    padding-left: 45px;\n    text-indent: -45px;\n    text-shadow: 0 -1px 0 rgba(255, 255, 255, 0.6); }\n    #organization-type-table .dynatable-search input {\n      width: 100%;\n      float: right;\n      border-radius: 3px;\n      padding: 4px 4px 4px 2px;\n      border: 1px solid #aaa;\n      margin-top: 1px;\n      outline: 0; }\n      #organization-type-table .dynatable-search input:focus {\n        border-color: #336799;\n        outline: 0;\n        box-shadow: 0 0 3px rgba(53, 104, 147, 0.6); }\n  #organization-type-table .dynatable-per-page {\n    position: absolute;\n    top: -30px;\n    left: 5px; }\n    #organization-type-table .dynatable-per-page span {\n      float: right;\n      margin-left: 3px;\n      margin-top: 2px;\n      font-size: 11px;\n      line-height: 2.2em;\n      text-shadow: 0 -1px 0 rgba(255, 255, 255, 0.6); }\n    #organization-type-table .dynatable-per-page select {\n      width: 64px; }\n  #organization-type-table .dynatable-record-count {\n    font-size: 11px;\n    text-transform: lowercase;\n    position: absolute;\n    bottom: -32px;\n    left: 6px;\n    color: #666;\n    text-shadow: 0 -1px 0 rgba(255, 255, 255, 0.6); }\n  #organization-type-table ul.dynatable-pagination-links {\n    margin: 0 5px 0 0;\n    list-style-type: none;\n    position: absolute;\n    bottom: -37px;\n    padding: 0;\n    right: 5px; }\n    #organization-type-table ul.dynatable-pagination-links li {\n      float: left; }\n      #organization-type-table ul.dynatable-pagination-links li:first-child span {\n        font-size: 11px;\n        text-shadow: 0 -1px 0 rgba(255, 255, 255, 0.6);\n        position: relative;\n        top: 2px; }\n    #organization-type-table ul.dynatable-pagination-links a.dynatable-page-link {\n      padding: 3px 3px;\n      display: block;\n      margin: 0 2px;\n      color: #336799;\n      text-decoration: underline;\n      font-size: 14px; }\n      #organization-type-table ul.dynatable-pagination-links a.dynatable-page-link.dynatable-active-page {\n        text-decoration: none;\n        font-weight: bold;\n        color: #222; }\n    #organization-type-table ul.dynatable-pagination-links a.dynatable-page-prev, #organization-type-table ul.dynatable-pagination-links a.dynatable-page-next {\n      background-color: #f6f6f6;\n      border: 2px solid rgba(53, 104, 147, 0.6);\n      border-radius: 3px;\n      padding: 2px 6px;\n      display: block;\n      text-decoration: none;\n      margin-left: 5px; }\n      #organization-type-table ul.dynatable-pagination-links a.dynatable-page-prev .fa, #organization-type-table ul.dynatable-pagination-links a.dynatable-page-next .fa {\n        color: #bbb; }\n      #organization-type-table ul.dynatable-pagination-links a.dynatable-page-prev:hover, #organization-type-table ul.dynatable-pagination-links a.dynatable-page-next:hover {\n        background-color: #fff; }\n        #organization-type-table ul.dynatable-pagination-links a.dynatable-page-prev:hover .fa, #organization-type-table ul.dynatable-pagination-links a.dynatable-page-next:hover .fa {\n          color: #336799; }\n      #organization-type-table ul.dynatable-pagination-links a.dynatable-page-prev.dynatable-disabled-page, #organization-type-table ul.dynatable-pagination-links a.dynatable-page-next.dynatable-disabled-page {\n        color: #bbb;\n        background-color: #f7f7f7;\n        border-color: #e0e0e0;\n        box-shadow: none;\n        text-decoration: none;\n        cursor: default; }\n        #organization-type-table ul.dynatable-pagination-links a.dynatable-page-prev.dynatable-disabled-page .fa, #organization-type-table ul.dynatable-pagination-links a.dynatable-page-prev.dynatable-disabled-page:hover .fa, #organization-type-table ul.dynatable-pagination-links a.dynatable-page-next.dynatable-disabled-page .fa, #organization-type-table ul.dynatable-pagination-links a.dynatable-page-next.dynatable-disabled-page:hover .fa {\n          color: #e0e0e0; }\n    #organization-type-table ul.dynatable-pagination-links a.dynatable-page-prev {\n      margin-right: 5px; }\n\n/* Organization Type Table */\n/**/\n.page-title {\n  font-size: 2em; }\n\n.large-tiles {\n  margin-bottom: 1.5em !important; }\n  .large-tiles a {\n    color: #0a5691;\n    border: 1px solid rgba(0, 0, 0, 0.1);\n    box-shadow: 1px 1px 1px 0 rgba(0, 0, 0, 0.2);\n    background-color: #eee;\n    width: 100%;\n    height: 11em;\n    display: block;\n    text-align: center;\n    margin: 1em 0 .5em 0;\n    position: relative;\n    top: 0;\n    left: 0;\n    -ms-transition: all 89ms ease-in;\n    /* IE10 is actually unprefixed */\n    transition: all 89ms ease-in 0; }\n    .large-tiles a i {\n      font-size: 6em;\n      margin-top: .25em;\n      text-shadow: 0px 0px 1px #297cbd; }\n    .large-tiles a span {\n      display: block;\n      font-style: italic;\n      color: #555;\n      text-shadow: 0 -1px 1px white;\n      margin-top: .5em; }\n    .large-tiles a:focus {\n      border-color: #0a5691; }\n    .large-tiles a:active {\n      border-color: #0a5691; }\n    .large-tiles a:hover, .large-tiles a:focus, .large-tiles a:active {\n      background-color: #ebebeb;\n      box-shadow: 1px 1px 1px 0 rgba(120, 120, 120, 0.1);\n      top: 1px;\n      left: 1px;\n      color: #000; }\n      .large-tiles a:hover i, .large-tiles a:focus i, .large-tiles a:active i {\n        color: #297cbd; }\n      .large-tiles a:hover span, .large-tiles a:focus span, .large-tiles a:active span {\n        display: block; }\n\n.hide-visually {\n  position: absolute !important;\n  left: -999999px !important;\n  top: auto !important;\n  overflow: hidden !important;\n  height: 1px !important;\n  width: 1px !important; }\n\n.skip-link {\n  top: -35px;\n  left: 50%;\n  position: absolute;\n  margin-left: -60px;\n  background: rgba(0, 0, 0, 0.9);\n  color: #fff !important;\n  display: block;\n  padding: 1px 10px 2px 10px;\n  text-decoration: none;\n  border-radius: 0 0 5px 5px;\n  z-index: 1;\n  font-size: 12px; }\n\n.allow-focus.skip-link:focus {\n  top: 0; }\n\n.row {\n  max-width: 100%; }\n\n.row-title {\n  background-color: #eee;\n  border-bottom: 1px solid #ccc; }\n  .row-title h1 {\n    font-size: 1em;\n    text-transform: uppercase;\n    line-height: 2.2em;\n    margin: 0; }\n\n.row-content {\n  background-color: #fff; }\n  .row-content a {\n    color: #0a5691; }\n    .row-content a:hover, .row-content a:focus, .row-content a:active {\n      color: #297cbd; }\n\n/*off-canvas fullscreen layout*/\n.off-canvas-wrap {\n  background-color: #fff;\n  overflow-y: auto; }\n\n.off-canvas-wrap.move-left {\n  background-color: #666; }\n\n.off-canvas-wrap .right-off-canvas-menu {\n  display: none; }\n\na.right-off-canvas-toggle {\n  background: none repeat scroll 0 0 transparent;\n  box-shadow: none;\n  height: 32px;\n  position: absolute;\n  width: 44px;\n  transition: margin 380ms ease 0s;\n  top: 0;\n  right: 0;\n  text-indent: -1000px;\n  overflow: hidden;\n  pointer-events: auto;\n  padding-left: 5px;\n  z-index: 10000000;\n  padding-right: 0.9375rem; }\n  a.right-off-canvas-toggle span {\n    background: none repeat scroll 0 0 #666;\n    border: 2px solid #515151;\n    border-radius: 5px;\n    display: block;\n    height: 1px;\n    position: relative;\n    text-indent: -1000px;\n    width: 25px;\n    top: -10px; }\n    a.right-off-canvas-toggle span:before, a.right-off-canvas-toggle span:after {\n      position: absolute;\n      top: -9px;\n      left: -2px;\n      content: \" \";\n      background-color: #666;\n      border: 2px solid #515151;\n      border-radius: 5px;\n      display: block;\n      height: 1px;\n      width: 25px; }\n    a.right-off-canvas-toggle span:after {\n      top: 5px; }\n\n.move-left a.right-off-canvas-toggle {\n  right: -.3425rem; }\n\n.off-canvas-fullscreen .off-canvas-wrap, .off-canvas-fullscreen .inner-wrap {\n  height: auto; }\n\n.canvas-content {\n  background-color: #fff;\n  box-shadow: 2px 0 1px rgba(0, 0, 0, 0.3);\n  padding-bottom: 2px;\n  height: 100%;\n  min-height: 100vh;\n  z-index: 1002; }\n\n.exit-off-canvas {\n  display: none; }\n\n.move-left .exit-off-canvas {\n  background: none;\n  box-shadow: none;\n  height: 100%;\n  left: auto;\n  right: 0;\n  width: 100%; }\n\n.off-canvas-wrap .right-off-canvas-menu {\n  display: block; }\n\n.move-left > .inner-wrap {\n  -ms-transform: translate(-90%, 0);\n  -webkit-transform: translate3d(-90%, 0, 0);\n  -moz-transform: translate3d(-90%, 0, 0);\n  -ms-transform: translate3d(-90%, 0, 0);\n  -o-transform: translate3d(-90%, 0, 0);\n  transform: translate3d(-90%, 0, 0); }\n\n.right-off-canvas-menu {\n  background-color: #666;\n  padding: 12px 0 10px 0;\n  right: -10%;\n  transform: translate3d(90%, 0px, 0px);\n  width: 87%; }\n  .right-off-canvas-menu .off-canvas-menu-container {\n    background-color: #fff;\n    padding: 10px 8px 20px;\n    margin: 0px 14px; }\n    .right-off-canvas-menu .off-canvas-menu-container h2 {\n      text-indent: -10000px;\n      height: auto;\n      margin: 0; }\n      .right-off-canvas-menu .off-canvas-menu-container h2 span {\n        display: none; }\n      .right-off-canvas-menu .off-canvas-menu-container h2 img {\n        float: left;\n        width: 96%; }\n    .right-off-canvas-menu .off-canvas-menu-container > ul {\n      list-style-type: none;\n      margin: 6px 0 0 0;\n      padding: 15px 0 0 0;\n      max-width: 540px;\n      border-top: 1px solid #eee; }\n    .right-off-canvas-menu .off-canvas-menu-container a {\n      color: #0a5691; }\n      .right-off-canvas-menu .off-canvas-menu-container a:hover, .right-off-canvas-menu .off-canvas-menu-container a:focus, .right-off-canvas-menu .off-canvas-menu-container a:active {\n        color: #297cbd; }\n\n@media only screen and (min-width: 46.13em) {\n  /* home page */\n  .large-tiles a {\n    height: 18em; }\n    .large-tiles a i {\n      font-size: 11em; }\n  /* offcanvas styles */\n  .move-left a.right-off-canvas-toggle {\n    right: 0; }\n  .right-off-canvas-menu {\n    -ms-transform: translate(76.2%, 0);\n    -webkit-transform: translate3d(76.2%, 0, 0);\n    -moz-transform: translate3d(76.2%, 0, 0);\n    -ms-transform: translate3d(76.2%, 0, 0);\n    -o-transform: translate3d(76.2%, 0, 0);\n    transform: translate3d(76.2%, 0px, 0px);\n    width: 38%; }\n    .right-off-canvas-menu .off-canvas-menu-container > ul {\n      max-width: none; }\n  .move-left .right-off-canvas-menu {\n    right: -9.6%; }\n  .move-left > .inner-wrap {\n    -ms-transform: translate(-39%, 0);\n    -webkit-transform: translate3d(-39%, 0, 0);\n    -moz-transform: translate3d(-39%, 0, 0);\n    -ms-transform: translate3d(-39%, 0, 0);\n    -o-transform: translate3d(-39%, 0, 0);\n    transform: translate3d(-39%, 0, 0); } }\n\n.dc-chart g.row text {\n  fill: black; }\n", ""]);

/***/ },
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function () {
				styleElement.parentNode.removeChild(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	function replaceText(source, id, replacement) {
		var boundaries = ["/** >>" + id + " **/", "/** " + id + "<< **/"];
		var start = source.lastIndexOf(boundaries[0]);
		var wrappedReplacement = replacement
			? (boundaries[0] + replacement + boundaries[1])
			: "";
		if (source.lastIndexOf(boundaries[0]) >= 0) {
			var end = source.lastIndexOf(boundaries[1]) + boundaries[1].length;
			return source.slice(0, start) + wrappedReplacement + source.slice(end);
		} else {
			return source + wrappedReplacement;
		}
	}

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(styleElement.styleSheet.cssText, index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap && typeof btoa === "function") {
			try {
				css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(JSON.stringify(sourceMap)) + " */";
				css = "@import url(\"data:text/css;base64," + btoa(css) + "\")";
			} catch(e) {}
		}

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["foundation"] = __webpack_require__(34);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * Foundation Responsive Library
	 * http://foundation.zurb.com
	 * Copyright 2014, ZURB
	 * Free to use under the MIT license.
	 * http://www.opensource.org/licenses/mit-license.php
	*/

	(function ($, window, document, undefined) {
	  'use strict';

	  var header_helpers = function (class_array) {
	    var i = class_array.length;
	    var head = $('head');

	    while (i--) {
	      if (head.has('.' + class_array[i]).length === 0) {
	        head.append('<meta class="' + class_array[i] + '" />');
	      }
	    }
	  };

	  header_helpers([
	    'foundation-mq-small',
	    'foundation-mq-small-only',
	    'foundation-mq-medium',
	    'foundation-mq-medium-only',
	    'foundation-mq-large',
	    'foundation-mq-large-only',
	    'foundation-mq-xlarge',
	    'foundation-mq-xlarge-only',
	    'foundation-mq-xxlarge',
	    'foundation-data-attribute-namespace']);

	  // Enable FastClick if present

	  $(function () {
	    if (typeof FastClick !== 'undefined') {
	      // Don't attach to body if undefined
	      if (typeof document.body !== 'undefined') {
	        FastClick.attach(document.body);
	      }
	    }
	  });

	  // private Fast Selector wrapper,
	  // returns jQuery object. Only use where
	  // getElementById is not available.
	  var S = function (selector, context) {
	    if (typeof selector === 'string') {
	      if (context) {
	        var cont;
	        if (context.jquery) {
	          cont = context[0];
	          if (!cont) {
	            return context;
	          }
	        } else {
	          cont = context;
	        }
	        return $(cont.querySelectorAll(selector));
	      }

	      return $(document.querySelectorAll(selector));
	    }

	    return $(selector, context);
	  };

	  // Namespace functions.

	  var attr_name = function (init) {
	    var arr = [];
	    if (!init) {
	      arr.push('data');
	    }
	    if (this.namespace.length > 0) {
	      arr.push(this.namespace);
	    }
	    arr.push(this.name);

	    return arr.join('-');
	  };

	  var add_namespace = function (str) {
	    var parts = str.split('-'),
	        i = parts.length,
	        arr = [];

	    while (i--) {
	      if (i !== 0) {
	        arr.push(parts[i]);
	      } else {
	        if (this.namespace.length > 0) {
	          arr.push(this.namespace, parts[i]);
	        } else {
	          arr.push(parts[i]);
	        }
	      }
	    }

	    return arr.reverse().join('-');
	  };

	  // Event binding and data-options updating.

	  var bindings = function (method, options) {
	    var self = this,
	        bind = function(){
	          var $this = S(this),
	              should_bind_events = !$this.data(self.attr_name(true) + '-init');
	          $this.data(self.attr_name(true) + '-init', $.extend({}, self.settings, (options || method), self.data_options($this)));

	          if (should_bind_events) {
	            self.events(this);
	          }
	        };

	    if (S(this.scope).is('[' + this.attr_name() +']')) {
	      bind.call(this.scope);
	    } else {
	      S('[' + this.attr_name() +']', this.scope).each(bind);
	    }
	    // # Patch to fix #5043 to move this *after* the if/else clause in order for Backbone and similar frameworks to have improved control over event binding and data-options updating.
	    if (typeof method === 'string') {
	      return this[method].call(this, options);
	    }

	  };

	  var single_image_loaded = function (image, callback) {
	    function loaded () {
	      callback(image[0]);
	    }

	    function bindLoad () {
	      this.one('load', loaded);

	      if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
	        var src = this.attr( 'src' ),
	            param = src.match( /\?/ ) ? '&' : '?';

	        param += 'random=' + (new Date()).getTime();
	        this.attr('src', src + param);
	      }
	    }

	    if (!image.attr('src')) {
	      loaded();
	      return;
	    }

	    if (image[0].complete || image[0].readyState === 4) {
	      loaded();
	    } else {
	      bindLoad.call(image);
	    }
	  };

	  /*
	    https://github.com/paulirish/matchMedia.js
	  */

	  window.matchMedia = window.matchMedia || (function ( doc ) {

	    'use strict';

	    var bool,
	        docElem = doc.documentElement,
	        refNode = docElem.firstElementChild || docElem.firstChild,
	        // fakeBody required for <FF4 when executed in <head>
	        fakeBody = doc.createElement( 'body' ),
	        div = doc.createElement( 'div' );

	    div.id = 'mq-test-1';
	    div.style.cssText = 'position:absolute;top:-100em';
	    fakeBody.style.background = 'none';
	    fakeBody.appendChild(div);

	    return function (q) {

	      div.innerHTML = '&shy;<style media="' + q + '"> #mq-test-1 { width: 42px; }</style>';

	      docElem.insertBefore( fakeBody, refNode );
	      bool = div.offsetWidth === 42;
	      docElem.removeChild( fakeBody );

	      return {
	        matches : bool,
	        media : q
	      };

	    };

	  }( document ));

	  /*
	   * jquery.requestAnimationFrame
	   * https://github.com/gnarf37/jquery-requestAnimationFrame
	   * Requires jQuery 1.8+
	   *
	   * Copyright (c) 2012 Corey Frang
	   * Licensed under the MIT license.
	   */

	  (function(jQuery) {


	  // requestAnimationFrame polyfill adapted from Erik Möller
	  // fixes from Paul Irish and Tino Zijdel
	  // http://paulirish.com/2011/requestanimationframe-for-smart-animating/
	  // http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating

	  var animating,
	      lastTime = 0,
	      vendors = ['webkit', 'moz'],
	      requestAnimationFrame = window.requestAnimationFrame,
	      cancelAnimationFrame = window.cancelAnimationFrame,
	      jqueryFxAvailable = 'undefined' !== typeof jQuery.fx;

	  for (; lastTime < vendors.length && !requestAnimationFrame; lastTime++) {
	    requestAnimationFrame = window[ vendors[lastTime] + 'RequestAnimationFrame' ];
	    cancelAnimationFrame = cancelAnimationFrame ||
	      window[ vendors[lastTime] + 'CancelAnimationFrame' ] ||
	      window[ vendors[lastTime] + 'CancelRequestAnimationFrame' ];
	  }

	  function raf() {
	    if (animating) {
	      requestAnimationFrame(raf);

	      if (jqueryFxAvailable) {
	        jQuery.fx.tick();
	      }
	    }
	  }

	  if (requestAnimationFrame) {
	    // use rAF
	    window.requestAnimationFrame = requestAnimationFrame;
	    window.cancelAnimationFrame = cancelAnimationFrame;

	    if (jqueryFxAvailable) {
	      jQuery.fx.timer = function (timer) {
	        if (timer() && jQuery.timers.push(timer) && !animating) {
	          animating = true;
	          raf();
	        }
	      };

	      jQuery.fx.stop = function () {
	        animating = false;
	      };
	    }
	  } else {
	    // polyfill
	    window.requestAnimationFrame = function (callback) {
	      var currTime = new Date().getTime(),
	        timeToCall = Math.max(0, 16 - (currTime - lastTime)),
	        id = window.setTimeout(function () {
	          callback(currTime + timeToCall);
	        }, timeToCall);
	      lastTime = currTime + timeToCall;
	      return id;
	    };

	    window.cancelAnimationFrame = function (id) {
	      clearTimeout(id);
	    };

	  }

	  }( $ ));

	  function removeQuotes (string) {
	    if (typeof string === 'string' || string instanceof String) {
	      string = string.replace(/^['\\/"]+|(;\s?})+|['\\/"]+$/g, '');
	    }

	    return string;
	  }

	  window.Foundation = {
	    name : 'Foundation',

	    version : '{{VERSION}}',

	    media_queries : {
	      'small'       : S('.foundation-mq-small').css('font-family').replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ''),
	      'small-only'  : S('.foundation-mq-small-only').css('font-family').replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ''),
	      'medium'      : S('.foundation-mq-medium').css('font-family').replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ''),
	      'medium-only' : S('.foundation-mq-medium-only').css('font-family').replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ''),
	      'large'       : S('.foundation-mq-large').css('font-family').replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ''),
	      'large-only'  : S('.foundation-mq-large-only').css('font-family').replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ''),
	      'xlarge'      : S('.foundation-mq-xlarge').css('font-family').replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ''),
	      'xlarge-only' : S('.foundation-mq-xlarge-only').css('font-family').replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ''),
	      'xxlarge'     : S('.foundation-mq-xxlarge').css('font-family').replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, '')
	    },

	    stylesheet : $('<style></style>').appendTo('head')[0].sheet,

	    global : {
	      namespace : undefined
	    },

	    init : function (scope, libraries, method, options, response) {
	      var args = [scope, method, options, response],
	          responses = [];

	      // check RTL
	      this.rtl = /rtl/i.test(S('html').attr('dir'));

	      // set foundation global scope
	      this.scope = scope || this.scope;

	      this.set_namespace();

	      if (libraries && typeof libraries === 'string' && !/reflow/i.test(libraries)) {
	        if (this.libs.hasOwnProperty(libraries)) {
	          responses.push(this.init_lib(libraries, args));
	        }
	      } else {
	        for (var lib in this.libs) {
	          responses.push(this.init_lib(lib, libraries));
	        }
	      }

	      S(window).load(function () {
	        S(window)
	          .trigger('resize.fndtn.clearing')
	          .trigger('resize.fndtn.dropdown')
	          .trigger('resize.fndtn.equalizer')
	          .trigger('resize.fndtn.interchange')
	          .trigger('resize.fndtn.joyride')
	          .trigger('resize.fndtn.magellan')
	          .trigger('resize.fndtn.topbar')
	          .trigger('resize.fndtn.slider');
	      });

	      return scope;
	    },

	    init_lib : function (lib, args) {
	      if (this.libs.hasOwnProperty(lib)) {
	        this.patch(this.libs[lib]);

	        if (args && args.hasOwnProperty(lib)) {
	            if (typeof this.libs[lib].settings !== 'undefined') {
	              $.extend(true, this.libs[lib].settings, args[lib]);
	            } else if (typeof this.libs[lib].defaults !== 'undefined') {
	              $.extend(true, this.libs[lib].defaults, args[lib]);
	            }
	          return this.libs[lib].init.apply(this.libs[lib], [this.scope, args[lib]]);
	        }

	        args = args instanceof Array ? args : new Array(args);
	        return this.libs[lib].init.apply(this.libs[lib], args);
	      }

	      return function () {};
	    },

	    patch : function (lib) {
	      lib.scope = this.scope;
	      lib.namespace = this.global.namespace;
	      lib.rtl = this.rtl;
	      lib['data_options'] = this.utils.data_options;
	      lib['attr_name'] = attr_name;
	      lib['add_namespace'] = add_namespace;
	      lib['bindings'] = bindings;
	      lib['S'] = this.utils.S;
	    },

	    inherit : function (scope, methods) {
	      var methods_arr = methods.split(' '),
	          i = methods_arr.length;

	      while (i--) {
	        if (this.utils.hasOwnProperty(methods_arr[i])) {
	          scope[methods_arr[i]] = this.utils[methods_arr[i]];
	        }
	      }
	    },

	    set_namespace : function () {

	      // Description:
	      //    Don't bother reading the namespace out of the meta tag
	      //    if the namespace has been set globally in javascript
	      //
	      // Example:
	      //    Foundation.global.namespace = 'my-namespace';
	      // or make it an empty string:
	      //    Foundation.global.namespace = '';
	      //
	      //

	      // If the namespace has not been set (is undefined), try to read it out of the meta element.
	      // Otherwise use the globally defined namespace, even if it's empty ('')
	      var namespace = ( this.global.namespace === undefined ) ? $('.foundation-data-attribute-namespace').css('font-family') : this.global.namespace;

	      // Finally, if the namsepace is either undefined or false, set it to an empty string.
	      // Otherwise use the namespace value.
	      this.global.namespace = ( namespace === undefined || /false/i.test(namespace) ) ? '' : namespace;
	    },

	    libs : {},

	    // methods that can be inherited in libraries
	    utils : {

	      // Description:
	      //    Fast Selector wrapper returns jQuery object. Only use where getElementById
	      //    is not available.
	      //
	      // Arguments:
	      //    Selector (String): CSS selector describing the element(s) to be
	      //    returned as a jQuery object.
	      //
	      //    Scope (String): CSS selector describing the area to be searched. Default
	      //    is document.
	      //
	      // Returns:
	      //    Element (jQuery Object): jQuery object containing elements matching the
	      //    selector within the scope.
	      S : S,

	      // Description:
	      //    Executes a function a max of once every n milliseconds
	      //
	      // Arguments:
	      //    Func (Function): Function to be throttled.
	      //
	      //    Delay (Integer): Function execution threshold in milliseconds.
	      //
	      // Returns:
	      //    Lazy_function (Function): Function with throttling applied.
	      throttle : function (func, delay) {
	        var timer = null;

	        return function () {
	          var context = this, args = arguments;

	          if (timer == null) {
	            timer = setTimeout(function () {
	              func.apply(context, args);
	              timer = null;
	            }, delay);
	          }
	        };
	      },

	      // Description:
	      //    Executes a function when it stops being invoked for n seconds
	      //    Modified version of _.debounce() http://underscorejs.org
	      //
	      // Arguments:
	      //    Func (Function): Function to be debounced.
	      //
	      //    Delay (Integer): Function execution threshold in milliseconds.
	      //
	      //    Immediate (Bool): Whether the function should be called at the beginning
	      //    of the delay instead of the end. Default is false.
	      //
	      // Returns:
	      //    Lazy_function (Function): Function with debouncing applied.
	      debounce : function (func, delay, immediate) {
	        var timeout, result;
	        return function () {
	          var context = this, args = arguments;
	          var later = function () {
	            timeout = null;
	            if (!immediate) {
	              result = func.apply(context, args);
	            }
	          };
	          var callNow = immediate && !timeout;
	          clearTimeout(timeout);
	          timeout = setTimeout(later, delay);
	          if (callNow) {
	            result = func.apply(context, args);
	          }
	          return result;
	        };
	      },

	      // Description:
	      //    Parses data-options attribute
	      //
	      // Arguments:
	      //    El (jQuery Object): Element to be parsed.
	      //
	      // Returns:
	      //    Options (Javascript Object): Contents of the element's data-options
	      //    attribute.
	      data_options : function (el, data_attr_name) {
	        data_attr_name = data_attr_name || 'options';
	        var opts = {}, ii, p, opts_arr,
	            data_options = function (el) {
	              var namespace = Foundation.global.namespace;

	              if (namespace.length > 0) {
	                return el.data(namespace + '-' + data_attr_name);
	              }

	              return el.data(data_attr_name);
	            };

	        var cached_options = data_options(el);

	        if (typeof cached_options === 'object') {
	          return cached_options;
	        }

	        opts_arr = (cached_options || ':').split(';');
	        ii = opts_arr.length;

	        function isNumber (o) {
	          return !isNaN (o - 0) && o !== null && o !== '' && o !== false && o !== true;
	        }

	        function trim (str) {
	          if (typeof str === 'string') {
	            return $.trim(str);
	          }
	          return str;
	        }

	        while (ii--) {
	          p = opts_arr[ii].split(':');
	          p = [p[0], p.slice(1).join(':')];

	          if (/true/i.test(p[1])) {
	            p[1] = true;
	          }
	          if (/false/i.test(p[1])) {
	            p[1] = false;
	          }
	          if (isNumber(p[1])) {
	            if (p[1].indexOf('.') === -1) {
	              p[1] = parseInt(p[1], 10);
	            } else {
	              p[1] = parseFloat(p[1]);
	            }
	          }

	          if (p.length === 2 && p[0].length > 0) {
	            opts[trim(p[0])] = trim(p[1]);
	          }
	        }

	        return opts;
	      },

	      // Description:
	      //    Adds JS-recognizable media queries
	      //
	      // Arguments:
	      //    Media (String): Key string for the media query to be stored as in
	      //    Foundation.media_queries
	      //
	      //    Class (String): Class name for the generated <meta> tag
	      register_media : function (media, media_class) {
	        if (Foundation.media_queries[media] === undefined) {
	          $('head').append('<meta class="' + media_class + '"/>');
	          Foundation.media_queries[media] = removeQuotes($('.' + media_class).css('font-family'));
	        }
	      },

	      // Description:
	      //    Add custom CSS within a JS-defined media query
	      //
	      // Arguments:
	      //    Rule (String): CSS rule to be appended to the document.
	      //
	      //    Media (String): Optional media query string for the CSS rule to be
	      //    nested under.
	      add_custom_rule : function (rule, media) {
	        if (media === undefined && Foundation.stylesheet) {
	          Foundation.stylesheet.insertRule(rule, Foundation.stylesheet.cssRules.length);
	        } else {
	          var query = Foundation.media_queries[media];

	          if (query !== undefined) {
	            Foundation.stylesheet.insertRule('@media ' +
	              Foundation.media_queries[media] + '{ ' + rule + ' }', Foundation.stylesheet.cssRules.length);
	          }
	        }
	      },

	      // Description:
	      //    Performs a callback function when an image is fully loaded
	      //
	      // Arguments:
	      //    Image (jQuery Object): Image(s) to check if loaded.
	      //
	      //    Callback (Function): Function to execute when image is fully loaded.
	      image_loaded : function (images, callback) {
	        var self = this,
	            unloaded = images.length;

	        function pictures_has_height(images) {
	          var pictures_number = images.length;

	          for (var i = pictures_number - 1; i >= 0; i--) {
	            if(images.attr('height') === undefined) {
	              return false;
	            };
	          };

	          return true;
	        }

	        if (unloaded === 0 || pictures_has_height(images)) {
	          callback(images);
	        }

	        images.each(function () {
	          single_image_loaded(self.S(this), function () {
	            unloaded -= 1;
	            if (unloaded === 0) {
	              callback(images);
	            }
	          });
	        });
	      },

	      // Description:
	      //    Returns a random, alphanumeric string
	      //
	      // Arguments:
	      //    Length (Integer): Length of string to be generated. Defaults to random
	      //    integer.
	      //
	      // Returns:
	      //    Rand (String): Pseudo-random, alphanumeric string.
	      random_str : function () {
	        if (!this.fidx) {
	          this.fidx = 0;
	        }
	        this.prefix = this.prefix || [(this.name || 'F'), (+new Date).toString(36)].join('-');

	        return this.prefix + (this.fidx++).toString(36);
	      },

	      // Description:
	      //    Helper for window.matchMedia
	      //
	      // Arguments:
	      //    mq (String): Media query
	      //
	      // Returns:
	      //    (Boolean): Whether the media query passes or not
	      match : function (mq) {
	        return window.matchMedia(mq).matches;
	      },

	      // Description:
	      //    Helpers for checking Foundation default media queries with JS
	      //
	      // Returns:
	      //    (Boolean): Whether the media query passes or not

	      is_small_up : function () {
	        return this.match(Foundation.media_queries.small);
	      },

	      is_medium_up : function () {
	        return this.match(Foundation.media_queries.medium);
	      },

	      is_large_up : function () {
	        return this.match(Foundation.media_queries.large);
	      },

	      is_xlarge_up : function () {
	        return this.match(Foundation.media_queries.xlarge);
	      },

	      is_xxlarge_up : function () {
	        return this.match(Foundation.media_queries.xxlarge);
	      },

	      is_small_only : function () {
	        return !this.is_medium_up() && !this.is_large_up() && !this.is_xlarge_up() && !this.is_xxlarge_up();
	      },

	      is_medium_only : function () {
	        return this.is_medium_up() && !this.is_large_up() && !this.is_xlarge_up() && !this.is_xxlarge_up();
	      },

	      is_large_only : function () {
	        return this.is_medium_up() && this.is_large_up() && !this.is_xlarge_up() && !this.is_xxlarge_up();
	      },

	      is_xlarge_only : function () {
	        return this.is_medium_up() && this.is_large_up() && this.is_xlarge_up() && !this.is_xxlarge_up();
	      },

	      is_xxlarge_only : function () {
	        return this.is_medium_up() && this.is_large_up() && this.is_xlarge_up() && this.is_xxlarge_up();
	      }
	    }
	  };

	  $.fn.foundation = function () {
	    var args = Array.prototype.slice.call(arguments, 0);

	    return this.each(function () {
	      Foundation.init.apply(Foundation, [this].concat(args));
	      return this;
	    });
	  };

	}(jQuery, window, window.document));


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["foundationOffcanvas"] = __webpack_require__(36);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	;(function ($, window, document, undefined) {
	  'use strict';

	  Foundation.libs.offcanvas = {
	    name : 'offcanvas',

	    version : '{{VERSION}}',

	    settings : {
	      open_method : 'move',
	      close_on_click : false
	    },

	    init : function (scope, method, options) {
	      this.bindings(method, options);
	    },

	    events : function () {
	      var self = this,
	          S = self.S,
	          move_class = '',
	          right_postfix = '',
	          left_postfix = '';

	      if (this.settings.open_method === 'move') {
	        move_class = 'move-';
	        right_postfix = 'right';
	        left_postfix = 'left';
	      } else if (this.settings.open_method === 'overlap_single') {
	        move_class = 'offcanvas-overlap-';
	        right_postfix = 'right';
	        left_postfix = 'left';
	      } else if (this.settings.open_method === 'overlap') {
	        move_class = 'offcanvas-overlap';
	      }

	      S(this.scope).off('.offcanvas')
	        .on('click.fndtn.offcanvas', '.left-off-canvas-toggle', function (e) {
	          self.click_toggle_class(e, move_class + right_postfix);
	          if (self.settings.open_method !== 'overlap') {
	            S('.left-submenu').removeClass(move_class + right_postfix);
	          }
	          $('.left-off-canvas-toggle').attr('aria-expanded', 'true');
	        })
	        .on('click.fndtn.offcanvas', '.left-off-canvas-menu a', function (e) {
	          var settings = self.get_settings(e);
	          var parent = S(this).parent();

	          if (settings.close_on_click && !parent.hasClass('has-submenu') && !parent.hasClass('back')) {
	            self.hide.call(self, move_class + right_postfix, self.get_wrapper(e));
	            parent.parent().removeClass(move_class + right_postfix);
	          } else if (S(this).parent().hasClass('has-submenu')) {
	            e.preventDefault();
	            S(this).siblings('.left-submenu').toggleClass(move_class + right_postfix);
	          } else if (parent.hasClass('back')) {
	            e.preventDefault();
	            parent.parent().removeClass(move_class + right_postfix);
	          }
	          $('.left-off-canvas-toggle').attr('aria-expanded', 'true');
	        })
	        .on('click.fndtn.offcanvas', '.right-off-canvas-toggle', function (e) {
	          self.click_toggle_class(e, move_class + left_postfix);
	          if (self.settings.open_method !== 'overlap') {
	            S('.right-submenu').removeClass(move_class + left_postfix);
	          }
	          $('.right-off-canvas-toggle').attr('aria-expanded', 'true');
	        })
	        .on('click.fndtn.offcanvas', '.right-off-canvas-menu a', function (e) {
	          var settings = self.get_settings(e);
	          var parent = S(this).parent();

	          if (settings.close_on_click && !parent.hasClass('has-submenu') && !parent.hasClass('back')) {
	            self.hide.call(self, move_class + left_postfix, self.get_wrapper(e));
	            parent.parent().removeClass(move_class + left_postfix);
	          } else if (S(this).parent().hasClass('has-submenu')) {
	            e.preventDefault();
	            S(this).siblings('.right-submenu').toggleClass(move_class + left_postfix);
	          } else if (parent.hasClass('back')) {
	            e.preventDefault();
	            parent.parent().removeClass(move_class + left_postfix);
	          }
	          $('.right-off-canvas-toggle').attr('aria-expanded', 'true');
	        })
	        .on('click.fndtn.offcanvas', '.exit-off-canvas', function (e) {
	          self.click_remove_class(e, move_class + left_postfix);
	          S('.right-submenu').removeClass(move_class + left_postfix);
	          if (right_postfix) {
	            self.click_remove_class(e, move_class + right_postfix);
	            S('.left-submenu').removeClass(move_class + left_postfix);
	          }
	          $('.right-off-canvas-toggle').attr('aria-expanded', 'true');
	        })
	        .on('click.fndtn.offcanvas', '.exit-off-canvas', function (e) {
	          self.click_remove_class(e, move_class + left_postfix);
	          $('.left-off-canvas-toggle').attr('aria-expanded', 'false');
	          if (right_postfix) {
	            self.click_remove_class(e, move_class + right_postfix);
	            $('.right-off-canvas-toggle').attr('aria-expanded', 'false');
	          }
	        });
	    },

	    toggle : function (class_name, $off_canvas) {
	      $off_canvas = $off_canvas || this.get_wrapper();
	      if ($off_canvas.is('.' + class_name)) {
	        this.hide(class_name, $off_canvas);
	      } else {
	        this.show(class_name, $off_canvas);
	      }
	    },

	    show : function (class_name, $off_canvas) {
	      $off_canvas = $off_canvas || this.get_wrapper();
	      $off_canvas.trigger('open.fndtn.offcanvas');
	      $off_canvas.addClass(class_name);
	    },

	    hide : function (class_name, $off_canvas) {
	      $off_canvas = $off_canvas || this.get_wrapper();
	      $off_canvas.trigger('close.fndtn.offcanvas');
	      $off_canvas.removeClass(class_name);
	    },

	    click_toggle_class : function (e, class_name) {
	      e.preventDefault();
	      var $off_canvas = this.get_wrapper(e);
	      this.toggle(class_name, $off_canvas);
	    },

	    click_remove_class : function (e, class_name) {
	      e.preventDefault();
	      var $off_canvas = this.get_wrapper(e);
	      this.hide(class_name, $off_canvas);
	    },

	    get_settings : function (e) {
	      var offcanvas  = this.S(e.target).closest('[' + this.attr_name() + ']');
	      return offcanvas.data(this.attr_name(true) + '-init') || this.settings;
	    },

	    get_wrapper : function (e) {
	      var $off_canvas = this.S(e ? e.target : this.scope).closest('.off-canvas-wrap');

	      if ($off_canvas.length === 0) {
	        $off_canvas = this.S('.off-canvas-wrap');
	      }
	      return $off_canvas;
	    },

	    reflow : function () {}
	  };
	}(jQuery, window, window.document));


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["jQuery"] = __webpack_require__(38);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["$"] = __webpack_require__(39);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jQuery JavaScript Library v2.1.3
	 * http://jquery.com/
	 *
	 * Includes Sizzle.js
	 * http://sizzlejs.com/
	 *
	 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2014-12-18T15:11Z
	 */

	(function( global, factory ) {

		if ( typeof module === "object" && typeof module.exports === "object" ) {
			// For CommonJS and CommonJS-like environments where a proper `window`
			// is present, execute the factory and get jQuery.
			// For environments that do not have a `window` with a `document`
			// (such as Node.js), expose a factory as module.exports.
			// This accentuates the need for the creation of a real `window`.
			// e.g. var jQuery = require("jquery")(window);
			// See ticket #14549 for more info.
			module.exports = global.document ?
				factory( global, true ) :
				function( w ) {
					if ( !w.document ) {
						throw new Error( "jQuery requires a window with a document" );
					}
					return factory( w );
				};
		} else {
			factory( global );
		}

	// Pass this if window is not defined yet
	}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

	// Support: Firefox 18+
	// Can't be in strict mode, several libs including ASP.NET trace
	// the stack via arguments.caller.callee and Firefox dies if
	// you try to trace through "use strict" call chains. (#13335)
	//

	var arr = [];

	var slice = arr.slice;

	var concat = arr.concat;

	var push = arr.push;

	var indexOf = arr.indexOf;

	var class2type = {};

	var toString = class2type.toString;

	var hasOwn = class2type.hasOwnProperty;

	var support = {};



	var
		// Use the correct document accordingly with window argument (sandbox)
		document = window.document,

		version = "2.1.3",

		// Define a local copy of jQuery
		jQuery = function( selector, context ) {
			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init( selector, context );
		},

		// Support: Android<4.1
		// Make sure we trim BOM and NBSP
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

		// Matches dashed string for camelizing
		rmsPrefix = /^-ms-/,
		rdashAlpha = /-([\da-z])/gi,

		// Used by jQuery.camelCase as callback to replace()
		fcamelCase = function( all, letter ) {
			return letter.toUpperCase();
		};

	jQuery.fn = jQuery.prototype = {
		// The current version of jQuery being used
		jquery: version,

		constructor: jQuery,

		// Start with an empty selector
		selector: "",

		// The default length of a jQuery object is 0
		length: 0,

		toArray: function() {
			return slice.call( this );
		},

		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function( num ) {
			return num != null ?

				// Return just the one element from the set
				( num < 0 ? this[ num + this.length ] : this[ num ] ) :

				// Return all the elements in a clean array
				slice.call( this );
		},

		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function( elems ) {

			// Build a new jQuery matched element set
			var ret = jQuery.merge( this.constructor(), elems );

			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;
			ret.context = this.context;

			// Return the newly-formed element set
			return ret;
		},

		// Execute a callback for every element in the matched set.
		// (You can seed the arguments with an array of args, but this is
		// only used internally.)
		each: function( callback, args ) {
			return jQuery.each( this, callback, args );
		},

		map: function( callback ) {
			return this.pushStack( jQuery.map(this, function( elem, i ) {
				return callback.call( elem, i, elem );
			}));
		},

		slice: function() {
			return this.pushStack( slice.apply( this, arguments ) );
		},

		first: function() {
			return this.eq( 0 );
		},

		last: function() {
			return this.eq( -1 );
		},

		eq: function( i ) {
			var len = this.length,
				j = +i + ( i < 0 ? len : 0 );
			return this.pushStack( j >= 0 && j < len ? [ this[j] ] : [] );
		},

		end: function() {
			return this.prevObject || this.constructor(null);
		},

		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: arr.sort,
		splice: arr.splice
	};

	jQuery.extend = jQuery.fn.extend = function() {
		var options, name, src, copy, copyIsArray, clone,
			target = arguments[0] || {},
			i = 1,
			length = arguments.length,
			deep = false;

		// Handle a deep copy situation
		if ( typeof target === "boolean" ) {
			deep = target;

			// Skip the boolean and the target
			target = arguments[ i ] || {};
			i++;
		}

		// Handle case when target is a string or something (possible in deep copy)
		if ( typeof target !== "object" && !jQuery.isFunction(target) ) {
			target = {};
		}

		// Extend jQuery itself if only one argument is passed
		if ( i === length ) {
			target = this;
			i--;
		}

		for ( ; i < length; i++ ) {
			// Only deal with non-null/undefined values
			if ( (options = arguments[ i ]) != null ) {
				// Extend the base object
				for ( name in options ) {
					src = target[ name ];
					copy = options[ name ];

					// Prevent never-ending loop
					if ( target === copy ) {
						continue;
					}

					// Recurse if we're merging plain objects or arrays
					if ( deep && copy && ( jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)) ) ) {
						if ( copyIsArray ) {
							copyIsArray = false;
							clone = src && jQuery.isArray(src) ? src : [];

						} else {
							clone = src && jQuery.isPlainObject(src) ? src : {};
						}

						// Never move original objects, clone them
						target[ name ] = jQuery.extend( deep, clone, copy );

					// Don't bring in undefined values
					} else if ( copy !== undefined ) {
						target[ name ] = copy;
					}
				}
			}
		}

		// Return the modified object
		return target;
	};

	jQuery.extend({
		// Unique for each copy of jQuery on the page
		expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

		// Assume jQuery is ready without the ready module
		isReady: true,

		error: function( msg ) {
			throw new Error( msg );
		},

		noop: function() {},

		isFunction: function( obj ) {
			return jQuery.type(obj) === "function";
		},

		isArray: Array.isArray,

		isWindow: function( obj ) {
			return obj != null && obj === obj.window;
		},

		isNumeric: function( obj ) {
			// parseFloat NaNs numeric-cast false positives (null|true|false|"")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			// adding 1 corrects loss of precision from parseFloat (#15100)
			return !jQuery.isArray( obj ) && (obj - parseFloat( obj ) + 1) >= 0;
		},

		isPlainObject: function( obj ) {
			// Not plain objects:
			// - Any object or value whose internal [[Class]] property is not "[object Object]"
			// - DOM nodes
			// - window
			if ( jQuery.type( obj ) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
				return false;
			}

			if ( obj.constructor &&
					!hasOwn.call( obj.constructor.prototype, "isPrototypeOf" ) ) {
				return false;
			}

			// If the function hasn't returned already, we're confident that
			// |obj| is a plain object, created by {} or constructed with new Object
			return true;
		},

		isEmptyObject: function( obj ) {
			var name;
			for ( name in obj ) {
				return false;
			}
			return true;
		},

		type: function( obj ) {
			if ( obj == null ) {
				return obj + "";
			}
			// Support: Android<4.0, iOS<6 (functionish RegExp)
			return typeof obj === "object" || typeof obj === "function" ?
				class2type[ toString.call(obj) ] || "object" :
				typeof obj;
		},

		// Evaluates a script in a global context
		globalEval: function( code ) {
			var script,
				indirect = eval;

			code = jQuery.trim( code );

			if ( code ) {
				// If the code includes a valid, prologue position
				// strict mode pragma, execute code by injecting a
				// script tag into the document.
				if ( code.indexOf("use strict") === 1 ) {
					script = document.createElement("script");
					script.text = code;
					document.head.appendChild( script ).parentNode.removeChild( script );
				} else {
				// Otherwise, avoid the DOM node creation, insertion
				// and removal by using an indirect global eval
					indirect( code );
				}
			}
		},

		// Convert dashed to camelCase; used by the css and data modules
		// Support: IE9-11+
		// Microsoft forgot to hump their vendor prefix (#9572)
		camelCase: function( string ) {
			return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
		},

		nodeName: function( elem, name ) {
			return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
		},

		// args is for internal usage only
		each: function( obj, callback, args ) {
			var value,
				i = 0,
				length = obj.length,
				isArray = isArraylike( obj );

			if ( args ) {
				if ( isArray ) {
					for ( ; i < length; i++ ) {
						value = callback.apply( obj[ i ], args );

						if ( value === false ) {
							break;
						}
					}
				} else {
					for ( i in obj ) {
						value = callback.apply( obj[ i ], args );

						if ( value === false ) {
							break;
						}
					}
				}

			// A special, fast, case for the most common use of each
			} else {
				if ( isArray ) {
					for ( ; i < length; i++ ) {
						value = callback.call( obj[ i ], i, obj[ i ] );

						if ( value === false ) {
							break;
						}
					}
				} else {
					for ( i in obj ) {
						value = callback.call( obj[ i ], i, obj[ i ] );

						if ( value === false ) {
							break;
						}
					}
				}
			}

			return obj;
		},

		// Support: Android<4.1
		trim: function( text ) {
			return text == null ?
				"" :
				( text + "" ).replace( rtrim, "" );
		},

		// results is for internal usage only
		makeArray: function( arr, results ) {
			var ret = results || [];

			if ( arr != null ) {
				if ( isArraylike( Object(arr) ) ) {
					jQuery.merge( ret,
						typeof arr === "string" ?
						[ arr ] : arr
					);
				} else {
					push.call( ret, arr );
				}
			}

			return ret;
		},

		inArray: function( elem, arr, i ) {
			return arr == null ? -1 : indexOf.call( arr, elem, i );
		},

		merge: function( first, second ) {
			var len = +second.length,
				j = 0,
				i = first.length;

			for ( ; j < len; j++ ) {
				first[ i++ ] = second[ j ];
			}

			first.length = i;

			return first;
		},

		grep: function( elems, callback, invert ) {
			var callbackInverse,
				matches = [],
				i = 0,
				length = elems.length,
				callbackExpect = !invert;

			// Go through the array, only saving the items
			// that pass the validator function
			for ( ; i < length; i++ ) {
				callbackInverse = !callback( elems[ i ], i );
				if ( callbackInverse !== callbackExpect ) {
					matches.push( elems[ i ] );
				}
			}

			return matches;
		},

		// arg is for internal usage only
		map: function( elems, callback, arg ) {
			var value,
				i = 0,
				length = elems.length,
				isArray = isArraylike( elems ),
				ret = [];

			// Go through the array, translating each of the items to their new values
			if ( isArray ) {
				for ( ; i < length; i++ ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}

			// Go through every key on the object,
			} else {
				for ( i in elems ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}
			}

			// Flatten any nested arrays
			return concat.apply( [], ret );
		},

		// A global GUID counter for objects
		guid: 1,

		// Bind a function to a context, optionally partially applying any
		// arguments.
		proxy: function( fn, context ) {
			var tmp, args, proxy;

			if ( typeof context === "string" ) {
				tmp = fn[ context ];
				context = fn;
				fn = tmp;
			}

			// Quick check to determine if target is callable, in the spec
			// this throws a TypeError, but we will just return undefined.
			if ( !jQuery.isFunction( fn ) ) {
				return undefined;
			}

			// Simulated bind
			args = slice.call( arguments, 2 );
			proxy = function() {
				return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
			};

			// Set the guid of unique handler to the same of original handler, so it can be removed
			proxy.guid = fn.guid = fn.guid || jQuery.guid++;

			return proxy;
		},

		now: Date.now,

		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	});

	// Populate the class2type map
	jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	});

	function isArraylike( obj ) {
		var length = obj.length,
			type = jQuery.type( obj );

		if ( type === "function" || jQuery.isWindow( obj ) ) {
			return false;
		}

		if ( obj.nodeType === 1 && length ) {
			return true;
		}

		return type === "array" || length === 0 ||
			typeof length === "number" && length > 0 && ( length - 1 ) in obj;
	}
	var Sizzle =
	/*!
	 * Sizzle CSS Selector Engine v2.2.0-pre
	 * http://sizzlejs.com/
	 *
	 * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2014-12-16
	 */
	(function( window ) {

	var i,
		support,
		Expr,
		getText,
		isXML,
		tokenize,
		compile,
		select,
		outermostContext,
		sortInput,
		hasDuplicate,

		// Local document vars
		setDocument,
		document,
		docElem,
		documentIsHTML,
		rbuggyQSA,
		rbuggyMatches,
		matches,
		contains,

		// Instance-specific data
		expando = "sizzle" + 1 * new Date(),
		preferredDoc = window.document,
		dirruns = 0,
		done = 0,
		classCache = createCache(),
		tokenCache = createCache(),
		compilerCache = createCache(),
		sortOrder = function( a, b ) {
			if ( a === b ) {
				hasDuplicate = true;
			}
			return 0;
		},

		// General-purpose constants
		MAX_NEGATIVE = 1 << 31,

		// Instance methods
		hasOwn = ({}).hasOwnProperty,
		arr = [],
		pop = arr.pop,
		push_native = arr.push,
		push = arr.push,
		slice = arr.slice,
		// Use a stripped-down indexOf as it's faster than native
		// http://jsperf.com/thor-indexof-vs-for/5
		indexOf = function( list, elem ) {
			var i = 0,
				len = list.length;
			for ( ; i < len; i++ ) {
				if ( list[i] === elem ) {
					return i;
				}
			}
			return -1;
		},

		booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

		// Regular expressions

		// Whitespace characters http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",
		// http://www.w3.org/TR/css3-syntax/#characters
		characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

		// Loosely modeled on CSS identifier characters
		// An unquoted value should be a CSS identifier http://www.w3.org/TR/css3-selectors/#attribute-selectors
		// Proper syntax: http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = characterEncoding.replace( "w", "w#" ),

		// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + characterEncoding + ")(?:" + whitespace +
			// Operator (capture 2)
			"*([*^$|!~]?=)" + whitespace +
			// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
			"*\\]",

		pseudos = ":(" + characterEncoding + ")(?:\\((" +
			// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
			// 1. quoted (capture 3; capture 4 or capture 5)
			"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
			// 2. simple (capture 6)
			"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
			// 3. anything else (capture 2)
			".*" +
			")\\)|)",

		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rwhitespace = new RegExp( whitespace + "+", "g" ),
		rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

		rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
		rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

		rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

		rpseudo = new RegExp( pseudos ),
		ridentifier = new RegExp( "^" + identifier + "$" ),

		matchExpr = {
			"ID": new RegExp( "^#(" + characterEncoding + ")" ),
			"CLASS": new RegExp( "^\\.(" + characterEncoding + ")" ),
			"TAG": new RegExp( "^(" + characterEncoding.replace( "w", "w*" ) + ")" ),
			"ATTR": new RegExp( "^" + attributes ),
			"PSEUDO": new RegExp( "^" + pseudos ),
			"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
				"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
				"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
			"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
				whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
		},

		rinputs = /^(?:input|select|textarea|button)$/i,
		rheader = /^h\d$/i,

		rnative = /^[^{]+\{\s*\[native \w/,

		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

		rsibling = /[+~]/,
		rescape = /'|\\/g,

		// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
		funescape = function( _, escaped, escapedWhitespace ) {
			var high = "0x" + escaped - 0x10000;
			// NaN means non-codepoint
			// Support: Firefox<24
			// Workaround erroneous numeric interpretation of +"0x"
			return high !== high || escapedWhitespace ?
				escaped :
				high < 0 ?
					// BMP codepoint
					String.fromCharCode( high + 0x10000 ) :
					// Supplemental Plane codepoint (surrogate pair)
					String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
		},

		// Used for iframes
		// See setDocument()
		// Removing the function wrapper causes a "Permission Denied"
		// error in IE
		unloadHandler = function() {
			setDocument();
		};

	// Optimize for push.apply( _, NodeList )
	try {
		push.apply(
			(arr = slice.call( preferredDoc.childNodes )),
			preferredDoc.childNodes
		);
		// Support: Android<4.0
		// Detect silently failing push.apply
		arr[ preferredDoc.childNodes.length ].nodeType;
	} catch ( e ) {
		push = { apply: arr.length ?

			// Leverage slice if possible
			function( target, els ) {
				push_native.apply( target, slice.call(els) );
			} :

			// Support: IE<9
			// Otherwise append directly
			function( target, els ) {
				var j = target.length,
					i = 0;
				// Can't trust NodeList.length
				while ( (target[j++] = els[i++]) ) {}
				target.length = j - 1;
			}
		};
	}

	function Sizzle( selector, context, results, seed ) {
		var match, elem, m, nodeType,
			// QSA vars
			i, groups, old, nid, newContext, newSelector;

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}

		context = context || document;
		results = results || [];
		nodeType = context.nodeType;

		if ( typeof selector !== "string" || !selector ||
			nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

			return results;
		}

		if ( !seed && documentIsHTML ) {

			// Try to shortcut find operations when possible (e.g., not under DocumentFragment)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {
				// Speed-up: Sizzle("#ID")
				if ( (m = match[1]) ) {
					if ( nodeType === 9 ) {
						elem = context.getElementById( m );
						// Check parentNode to catch when Blackberry 4.6 returns
						// nodes that are no longer in the document (jQuery #6963)
						if ( elem && elem.parentNode ) {
							// Handle the case where IE, Opera, and Webkit return items
							// by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}
					} else {
						// Context is not a document
						if ( context.ownerDocument && (elem = context.ownerDocument.getElementById( m )) &&
							contains( context, elem ) && elem.id === m ) {
							results.push( elem );
							return results;
						}
					}

				// Speed-up: Sizzle("TAG")
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Speed-up: Sizzle(".CLASS")
				} else if ( (m = match[3]) && support.getElementsByClassName ) {
					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// QSA path
			if ( support.qsa && (!rbuggyQSA || !rbuggyQSA.test( selector )) ) {
				nid = old = expando;
				newContext = context;
				newSelector = nodeType !== 1 && selector;

				// qSA works strangely on Element-rooted queries
				// We can work around this by specifying an extra ID on the root
				// and working up from there (Thanks to Andrew Dupont for the technique)
				// IE 8 doesn't work on object elements
				if ( nodeType === 1 && context.nodeName.toLowerCase() !== "object" ) {
					groups = tokenize( selector );

					if ( (old = context.getAttribute("id")) ) {
						nid = old.replace( rescape, "\\$&" );
					} else {
						context.setAttribute( "id", nid );
					}
					nid = "[id='" + nid + "'] ";

					i = groups.length;
					while ( i-- ) {
						groups[i] = nid + toSelector( groups[i] );
					}
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) || context;
					newSelector = groups.join(",");
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch(qsaError) {
					} finally {
						if ( !old ) {
							context.removeAttribute("id");
						}
					}
				}
			}
		}

		// All others
		return select( selector.replace( rtrim, "$1" ), context, results, seed );
	}

	/**
	 * Create key-value caches of limited size
	 * @returns {Function(string, Object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */
	function createCache() {
		var keys = [];

		function cache( key, value ) {
			// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
			if ( keys.push( key + " " ) > Expr.cacheLength ) {
				// Only keep the most recent entries
				delete cache[ keys.shift() ];
			}
			return (cache[ key + " " ] = value);
		}
		return cache;
	}

	/**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */
	function markFunction( fn ) {
		fn[ expando ] = true;
		return fn;
	}

	/**
	 * Support testing using an element
	 * @param {Function} fn Passed the created div and expects a boolean result
	 */
	function assert( fn ) {
		var div = document.createElement("div");

		try {
			return !!fn( div );
		} catch (e) {
			return false;
		} finally {
			// Remove from its parent by default
			if ( div.parentNode ) {
				div.parentNode.removeChild( div );
			}
			// release memory in IE
			div = null;
		}
	}

	/**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */
	function addHandle( attrs, handler ) {
		var arr = attrs.split("|"),
			i = attrs.length;

		while ( i-- ) {
			Expr.attrHandle[ arr[i] ] = handler;
		}
	}

	/**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */
	function siblingCheck( a, b ) {
		var cur = b && a,
			diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
				( ~b.sourceIndex || MAX_NEGATIVE ) -
				( ~a.sourceIndex || MAX_NEGATIVE );

		// Use IE sourceIndex if available on both nodes
		if ( diff ) {
			return diff;
		}

		// Check if b follows a
		if ( cur ) {
			while ( (cur = cur.nextSibling) ) {
				if ( cur === b ) {
					return -1;
				}
			}
		}

		return a ? 1 : -1;
	}

	/**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */
	function createInputPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */
	function createButtonPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */
	function createPositionalPseudo( fn ) {
		return markFunction(function( argument ) {
			argument = +argument;
			return markFunction(function( seed, matches ) {
				var j,
					matchIndexes = fn( [], seed.length, argument ),
					i = matchIndexes.length;

				// Match elements found at the specified indexes
				while ( i-- ) {
					if ( seed[ (j = matchIndexes[i]) ] ) {
						seed[j] = !(matches[j] = seed[j]);
					}
				}
			});
		});
	}

	/**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */
	function testContext( context ) {
		return context && typeof context.getElementsByTagName !== "undefined" && context;
	}

	// Expose support vars for convenience
	support = Sizzle.support = {};

	/**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */
	isXML = Sizzle.isXML = function( elem ) {
		// documentElement is verified for cases where it doesn't yet exist
		// (such as loading iframes in IE - #4833)
		var documentElement = elem && (elem.ownerDocument || elem).documentElement;
		return documentElement ? documentElement.nodeName !== "HTML" : false;
	};

	/**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */
	setDocument = Sizzle.setDocument = function( node ) {
		var hasCompare, parent,
			doc = node ? node.ownerDocument || node : preferredDoc;

		// If no document and documentElement is available, return
		if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
			return document;
		}

		// Set our document
		document = doc;
		docElem = doc.documentElement;
		parent = doc.defaultView;

		// Support: IE>8
		// If iframe document is assigned to "document" variable and if iframe has been reloaded,
		// IE will throw "permission denied" error when accessing "document" variable, see jQuery #13936
		// IE6-8 do not support the defaultView property so parent will be undefined
		if ( parent && parent !== parent.top ) {
			// IE11 does not have attachEvent, so all must suffer
			if ( parent.addEventListener ) {
				parent.addEventListener( "unload", unloadHandler, false );
			} else if ( parent.attachEvent ) {
				parent.attachEvent( "onunload", unloadHandler );
			}
		}

		/* Support tests
		---------------------------------------------------------------------- */
		documentIsHTML = !isXML( doc );

		/* Attributes
		---------------------------------------------------------------------- */

		// Support: IE<8
		// Verify that getAttribute really returns attributes and not properties
		// (excepting IE8 booleans)
		support.attributes = assert(function( div ) {
			div.className = "i";
			return !div.getAttribute("className");
		});

		/* getElement(s)By*
		---------------------------------------------------------------------- */

		// Check if getElementsByTagName("*") returns only elements
		support.getElementsByTagName = assert(function( div ) {
			div.appendChild( doc.createComment("") );
			return !div.getElementsByTagName("*").length;
		});

		// Support: IE<9
		support.getElementsByClassName = rnative.test( doc.getElementsByClassName );

		// Support: IE<10
		// Check if getElementById returns elements by name
		// The broken getElementById methods don't pick up programatically-set names,
		// so use a roundabout getElementsByName test
		support.getById = assert(function( div ) {
			docElem.appendChild( div ).id = expando;
			return !doc.getElementsByName || !doc.getElementsByName( expando ).length;
		});

		// ID find and filter
		if ( support.getById ) {
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var m = context.getElementById( id );
					// Check parentNode to catch when Blackberry 4.6 returns
					// nodes that are no longer in the document #6963
					return m && m.parentNode ? [ m ] : [];
				}
			};
			Expr.filter["ID"] = function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					return elem.getAttribute("id") === attrId;
				};
			};
		} else {
			// Support: IE6/7
			// getElementById is not reliable as a find shortcut
			delete Expr.find["ID"];

			Expr.filter["ID"] =  function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
					return node && node.value === attrId;
				};
			};
		}

		// Tag
		Expr.find["TAG"] = support.getElementsByTagName ?
			function( tag, context ) {
				if ( typeof context.getElementsByTagName !== "undefined" ) {
					return context.getElementsByTagName( tag );

				// DocumentFragment nodes don't have gEBTN
				} else if ( support.qsa ) {
					return context.querySelectorAll( tag );
				}
			} :

			function( tag, context ) {
				var elem,
					tmp = [],
					i = 0,
					// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
					results = context.getElementsByTagName( tag );

				// Filter out possible comments
				if ( tag === "*" ) {
					while ( (elem = results[i++]) ) {
						if ( elem.nodeType === 1 ) {
							tmp.push( elem );
						}
					}

					return tmp;
				}
				return results;
			};

		// Class
		Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
			if ( documentIsHTML ) {
				return context.getElementsByClassName( className );
			}
		};

		/* QSA/matchesSelector
		---------------------------------------------------------------------- */

		// QSA and matchesSelector support

		// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
		rbuggyMatches = [];

		// qSa(:focus) reports false when true (Chrome 21)
		// We allow this because of a bug in IE8/9 that throws an error
		// whenever `document.activeElement` is accessed on an iframe
		// So, we allow :focus to pass through QSA all the time to avoid the IE error
		// See http://bugs.jquery.com/ticket/13378
		rbuggyQSA = [];

		if ( (support.qsa = rnative.test( doc.querySelectorAll )) ) {
			// Build QSA regex
			// Regex strategy adopted from Diego Perini
			assert(function( div ) {
				// Select is set to empty string on purpose
				// This is to test IE's treatment of not explicitly
				// setting a boolean content attribute,
				// since its presence should be enough
				// http://bugs.jquery.com/ticket/12359
				docElem.appendChild( div ).innerHTML = "<a id='" + expando + "'></a>" +
					"<select id='" + expando + "-\f]' msallowcapture=''>" +
					"<option selected=''></option></select>";

				// Support: IE8, Opera 11-12.16
				// Nothing should be selected when empty strings follow ^= or $= or *=
				// The test attribute must be unknown in Opera but "safe" for WinRT
				// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
				if ( div.querySelectorAll("[msallowcapture^='']").length ) {
					rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
				}

				// Support: IE8
				// Boolean attributes and "value" are not treated correctly
				if ( !div.querySelectorAll("[selected]").length ) {
					rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
				}

				// Support: Chrome<29, Android<4.2+, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.7+
				if ( !div.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
					rbuggyQSA.push("~=");
				}

				// Webkit/Opera - :checked should return selected option elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":checked").length ) {
					rbuggyQSA.push(":checked");
				}

				// Support: Safari 8+, iOS 8+
				// https://bugs.webkit.org/show_bug.cgi?id=136851
				// In-page `selector#id sibing-combinator selector` fails
				if ( !div.querySelectorAll( "a#" + expando + "+*" ).length ) {
					rbuggyQSA.push(".#.+[+~]");
				}
			});

			assert(function( div ) {
				// Support: Windows 8 Native Apps
				// The type and name attributes are restricted during .innerHTML assignment
				var input = doc.createElement("input");
				input.setAttribute( "type", "hidden" );
				div.appendChild( input ).setAttribute( "name", "D" );

				// Support: IE8
				// Enforce case-sensitivity of name attribute
				if ( div.querySelectorAll("[name=d]").length ) {
					rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
				}

				// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":enabled").length ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}

				// Opera 10-11 does not throw on post-comma invalid pseudos
				div.querySelectorAll("*,:x");
				rbuggyQSA.push(",.*:");
			});
		}

		if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
			docElem.webkitMatchesSelector ||
			docElem.mozMatchesSelector ||
			docElem.oMatchesSelector ||
			docElem.msMatchesSelector) )) ) {

			assert(function( div ) {
				// Check to see if it's possible to do matchesSelector
				// on a disconnected node (IE 9)
				support.disconnectedMatch = matches.call( div, "div" );

				// This should fail with an exception
				// Gecko does not error, returns false instead
				matches.call( div, "[s!='']:x" );
				rbuggyMatches.push( "!=", pseudos );
			});
		}

		rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
		rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

		/* Contains
		---------------------------------------------------------------------- */
		hasCompare = rnative.test( docElem.compareDocumentPosition );

		// Element contains another
		// Purposefully does not implement inclusive descendent
		// As in, an element does not contain itself
		contains = hasCompare || rnative.test( docElem.contains ) ?
			function( a, b ) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
					bup = b && b.parentNode;
				return a === bup || !!( bup && bup.nodeType === 1 && (
					adown.contains ?
						adown.contains( bup ) :
						a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
				));
			} :
			function( a, b ) {
				if ( b ) {
					while ( (b = b.parentNode) ) {
						if ( b === a ) {
							return true;
						}
					}
				}
				return false;
			};

		/* Sorting
		---------------------------------------------------------------------- */

		// Document order sorting
		sortOrder = hasCompare ?
		function( a, b ) {

			// Flag for duplicate removal
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			// Sort on method existence if only one input has compareDocumentPosition
			var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
			if ( compare ) {
				return compare;
			}

			// Calculate position if both inputs belong to the same document
			compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
				a.compareDocumentPosition( b ) :

				// Otherwise we know they are disconnected
				1;

			// Disconnected nodes
			if ( compare & 1 ||
				(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

				// Choose the first element that is related to our preferred document
				if ( a === doc || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
					return -1;
				}
				if ( b === doc || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
					return 1;
				}

				// Maintain original order
				return sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
			}

			return compare & 4 ? -1 : 1;
		} :
		function( a, b ) {
			// Exit early if the nodes are identical
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			var cur,
				i = 0,
				aup = a.parentNode,
				bup = b.parentNode,
				ap = [ a ],
				bp = [ b ];

			// Parentless nodes are either documents or disconnected
			if ( !aup || !bup ) {
				return a === doc ? -1 :
					b === doc ? 1 :
					aup ? -1 :
					bup ? 1 :
					sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;

			// If the nodes are siblings, we can do a quick check
			} else if ( aup === bup ) {
				return siblingCheck( a, b );
			}

			// Otherwise we need full lists of their ancestors for comparison
			cur = a;
			while ( (cur = cur.parentNode) ) {
				ap.unshift( cur );
			}
			cur = b;
			while ( (cur = cur.parentNode) ) {
				bp.unshift( cur );
			}

			// Walk down the tree looking for a discrepancy
			while ( ap[i] === bp[i] ) {
				i++;
			}

			return i ?
				// Do a sibling check if the nodes have a common ancestor
				siblingCheck( ap[i], bp[i] ) :

				// Otherwise nodes in our document sort first
				ap[i] === preferredDoc ? -1 :
				bp[i] === preferredDoc ? 1 :
				0;
		};

		return doc;
	};

	Sizzle.matches = function( expr, elements ) {
		return Sizzle( expr, null, null, elements );
	};

	Sizzle.matchesSelector = function( elem, expr ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		// Make sure that attribute selectors are quoted
		expr = expr.replace( rattributeQuotes, "='$1']" );

		if ( support.matchesSelector && documentIsHTML &&
			( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
			( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

			try {
				var ret = matches.call( elem, expr );

				// IE 9's matchesSelector returns false on disconnected nodes
				if ( ret || support.disconnectedMatch ||
						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11 ) {
					return ret;
				}
			} catch (e) {}
		}

		return Sizzle( expr, document, null, [ elem ] ).length > 0;
	};

	Sizzle.contains = function( context, elem ) {
		// Set document vars if needed
		if ( ( context.ownerDocument || context ) !== document ) {
			setDocument( context );
		}
		return contains( context, elem );
	};

	Sizzle.attr = function( elem, name ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		var fn = Expr.attrHandle[ name.toLowerCase() ],
			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
				fn( elem, name, !documentIsHTML ) :
				undefined;

		return val !== undefined ?
			val :
			support.attributes || !documentIsHTML ?
				elem.getAttribute( name ) :
				(val = elem.getAttributeNode(name)) && val.specified ?
					val.value :
					null;
	};

	Sizzle.error = function( msg ) {
		throw new Error( "Syntax error, unrecognized expression: " + msg );
	};

	/**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */
	Sizzle.uniqueSort = function( results ) {
		var elem,
			duplicates = [],
			j = 0,
			i = 0;

		// Unless we *know* we can detect duplicates, assume their presence
		hasDuplicate = !support.detectDuplicates;
		sortInput = !support.sortStable && results.slice( 0 );
		results.sort( sortOrder );

		if ( hasDuplicate ) {
			while ( (elem = results[i++]) ) {
				if ( elem === results[ i ] ) {
					j = duplicates.push( i );
				}
			}
			while ( j-- ) {
				results.splice( duplicates[ j ], 1 );
			}
		}

		// Clear input after sorting to release objects
		// See https://github.com/jquery/sizzle/pull/225
		sortInput = null;

		return results;
	};

	/**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */
	getText = Sizzle.getText = function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;

		if ( !nodeType ) {
			// If no nodeType, this is expected to be an array
			while ( (node = elem[i++]) ) {
				// Do not traverse comment nodes
				ret += getText( node );
			}
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
			// Use textContent for elements
			// innerText usage removed for consistency of new lines (jQuery #11153)
			if ( typeof elem.textContent === "string" ) {
				return elem.textContent;
			} else {
				// Traverse its children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}
		// Do not include comment or processing instruction nodes

		return ret;
	};

	Expr = Sizzle.selectors = {

		// Can be adjusted by the user
		cacheLength: 50,

		createPseudo: markFunction,

		match: matchExpr,

		attrHandle: {},

		find: {},

		relative: {
			">": { dir: "parentNode", first: true },
			" ": { dir: "parentNode" },
			"+": { dir: "previousSibling", first: true },
			"~": { dir: "previousSibling" }
		},

		preFilter: {
			"ATTR": function( match ) {
				match[1] = match[1].replace( runescape, funescape );

				// Move the given value to match[3] whether quoted or unquoted
				match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

				if ( match[2] === "~=" ) {
					match[3] = " " + match[3] + " ";
				}

				return match.slice( 0, 4 );
			},

			"CHILD": function( match ) {
				/* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/
				match[1] = match[1].toLowerCase();

				if ( match[1].slice( 0, 3 ) === "nth" ) {
					// nth-* requires argument
					if ( !match[3] ) {
						Sizzle.error( match[0] );
					}

					// numeric x and y parameters for Expr.filter.CHILD
					// remember that false/true cast respectively to 0/1
					match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
					match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

				// other types prohibit arguments
				} else if ( match[3] ) {
					Sizzle.error( match[0] );
				}

				return match;
			},

			"PSEUDO": function( match ) {
				var excess,
					unquoted = !match[6] && match[2];

				if ( matchExpr["CHILD"].test( match[0] ) ) {
					return null;
				}

				// Accept quoted arguments as-is
				if ( match[3] ) {
					match[2] = match[4] || match[5] || "";

				// Strip excess characters from unquoted arguments
				} else if ( unquoted && rpseudo.test( unquoted ) &&
					// Get excess from tokenize (recursively)
					(excess = tokenize( unquoted, true )) &&
					// advance to the next closing parenthesis
					(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

					// excess is a negative index
					match[0] = match[0].slice( 0, excess );
					match[2] = unquoted.slice( 0, excess );
				}

				// Return only captures needed by the pseudo filter method (type and argument)
				return match.slice( 0, 3 );
			}
		},

		filter: {

			"TAG": function( nodeNameSelector ) {
				var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
				return nodeNameSelector === "*" ?
					function() { return true; } :
					function( elem ) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
			},

			"CLASS": function( className ) {
				var pattern = classCache[ className + " " ];

				return pattern ||
					(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
					classCache( className, function( elem ) {
						return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
					});
			},

			"ATTR": function( name, operator, check ) {
				return function( elem ) {
					var result = Sizzle.attr( elem, name );

					if ( result == null ) {
						return operator === "!=";
					}
					if ( !operator ) {
						return true;
					}

					result += "";

					return operator === "=" ? result === check :
						operator === "!=" ? result !== check :
						operator === "^=" ? check && result.indexOf( check ) === 0 :
						operator === "*=" ? check && result.indexOf( check ) > -1 :
						operator === "$=" ? check && result.slice( -check.length ) === check :
						operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
						operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
						false;
				};
			},

			"CHILD": function( type, what, argument, first, last ) {
				var simple = type.slice( 0, 3 ) !== "nth",
					forward = type.slice( -4 ) !== "last",
					ofType = what === "of-type";

				return first === 1 && last === 0 ?

					// Shortcut for :nth-*(n)
					function( elem ) {
						return !!elem.parentNode;
					} :

					function( elem, context, xml ) {
						var cache, outerCache, node, diff, nodeIndex, start,
							dir = simple !== forward ? "nextSibling" : "previousSibling",
							parent = elem.parentNode,
							name = ofType && elem.nodeName.toLowerCase(),
							useCache = !xml && !ofType;

						if ( parent ) {

							// :(first|last|only)-(child|of-type)
							if ( simple ) {
								while ( dir ) {
									node = elem;
									while ( (node = node[ dir ]) ) {
										if ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) {
											return false;
										}
									}
									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}

							start = [ forward ? parent.firstChild : parent.lastChild ];

							// non-xml :nth-child(...) stores cache data on `parent`
							if ( forward && useCache ) {
								// Seek `elem` from a previously-cached index
								outerCache = parent[ expando ] || (parent[ expando ] = {});
								cache = outerCache[ type ] || [];
								nodeIndex = cache[0] === dirruns && cache[1];
								diff = cache[0] === dirruns && cache[2];
								node = nodeIndex && parent.childNodes[ nodeIndex ];

								while ( (node = ++nodeIndex && node && node[ dir ] ||

									// Fallback to seeking `elem` from the start
									(diff = nodeIndex = 0) || start.pop()) ) {

									// When found, cache indexes on `parent` and break
									if ( node.nodeType === 1 && ++diff && node === elem ) {
										outerCache[ type ] = [ dirruns, nodeIndex, diff ];
										break;
									}
								}

							// Use previously-cached element index if available
							} else if ( useCache && (cache = (elem[ expando ] || (elem[ expando ] = {}))[ type ]) && cache[0] === dirruns ) {
								diff = cache[1];

							// xml :nth-child(...) or :nth-last-child(...) or :nth(-last)?-of-type(...)
							} else {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) && ++diff ) {
										// Cache the index of each encountered element
										if ( useCache ) {
											(node[ expando ] || (node[ expando ] = {}))[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}

							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || ( diff % first === 0 && diff / first >= 0 );
						}
					};
			},

			"PSEUDO": function( pseudo, argument ) {
				// pseudo-class names are case-insensitive
				// http://www.w3.org/TR/selectors/#pseudo-classes
				// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
				// Remember that setFilters inherits from pseudos
				var args,
					fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
						Sizzle.error( "unsupported pseudo: " + pseudo );

				// The user may use createPseudo to indicate that
				// arguments are needed to create the filter function
				// just as Sizzle does
				if ( fn[ expando ] ) {
					return fn( argument );
				}

				// But maintain support for old signatures
				if ( fn.length > 1 ) {
					args = [ pseudo, pseudo, "", argument ];
					return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
						markFunction(function( seed, matches ) {
							var idx,
								matched = fn( seed, argument ),
								i = matched.length;
							while ( i-- ) {
								idx = indexOf( seed, matched[i] );
								seed[ idx ] = !( matches[ idx ] = matched[i] );
							}
						}) :
						function( elem ) {
							return fn( elem, 0, args );
						};
				}

				return fn;
			}
		},

		pseudos: {
			// Potentially complex pseudos
			"not": markFunction(function( selector ) {
				// Trim the selector passed to compile
				// to avoid treating leading and trailing
				// spaces as combinators
				var input = [],
					results = [],
					matcher = compile( selector.replace( rtrim, "$1" ) );

				return matcher[ expando ] ?
					markFunction(function( seed, matches, context, xml ) {
						var elem,
							unmatched = matcher( seed, null, xml, [] ),
							i = seed.length;

						// Match elements unmatched by `matcher`
						while ( i-- ) {
							if ( (elem = unmatched[i]) ) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) :
					function( elem, context, xml ) {
						input[0] = elem;
						matcher( input, null, xml, results );
						// Don't keep the element (issue #299)
						input[0] = null;
						return !results.pop();
					};
			}),

			"has": markFunction(function( selector ) {
				return function( elem ) {
					return Sizzle( selector, elem ).length > 0;
				};
			}),

			"contains": markFunction(function( text ) {
				text = text.replace( runescape, funescape );
				return function( elem ) {
					return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
				};
			}),

			// "Whether an element is represented by a :lang() selector
			// is based solely on the element's language value
			// being equal to the identifier C,
			// or beginning with the identifier C immediately followed by "-".
			// The matching of C against the element's language value is performed case-insensitively.
			// The identifier C does not have to be a valid language name."
			// http://www.w3.org/TR/selectors/#lang-pseudo
			"lang": markFunction( function( lang ) {
				// lang value must be a valid identifier
				if ( !ridentifier.test(lang || "") ) {
					Sizzle.error( "unsupported lang: " + lang );
				}
				lang = lang.replace( runescape, funescape ).toLowerCase();
				return function( elem ) {
					var elemLang;
					do {
						if ( (elemLang = documentIsHTML ?
							elem.lang :
							elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

							elemLang = elemLang.toLowerCase();
							return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
						}
					} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
					return false;
				};
			}),

			// Miscellaneous
			"target": function( elem ) {
				var hash = window.location && window.location.hash;
				return hash && hash.slice( 1 ) === elem.id;
			},

			"root": function( elem ) {
				return elem === docElem;
			},

			"focus": function( elem ) {
				return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
			},

			// Boolean properties
			"enabled": function( elem ) {
				return elem.disabled === false;
			},

			"disabled": function( elem ) {
				return elem.disabled === true;
			},

			"checked": function( elem ) {
				// In CSS3, :checked should return both checked and selected elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				var nodeName = elem.nodeName.toLowerCase();
				return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
			},

			"selected": function( elem ) {
				// Accessing this property makes selected-by-default
				// options in Safari work properly
				if ( elem.parentNode ) {
					elem.parentNode.selectedIndex;
				}

				return elem.selected === true;
			},

			// Contents
			"empty": function( elem ) {
				// http://www.w3.org/TR/selectors/#empty-pseudo
				// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
				//   but not by others (comment: 8; processing instruction: 7; etc.)
				// nodeType < 6 works because attributes (2) do not appear as children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					if ( elem.nodeType < 6 ) {
						return false;
					}
				}
				return true;
			},

			"parent": function( elem ) {
				return !Expr.pseudos["empty"]( elem );
			},

			// Element/input types
			"header": function( elem ) {
				return rheader.test( elem.nodeName );
			},

			"input": function( elem ) {
				return rinputs.test( elem.nodeName );
			},

			"button": function( elem ) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === "button" || name === "button";
			},

			"text": function( elem ) {
				var attr;
				return elem.nodeName.toLowerCase() === "input" &&
					elem.type === "text" &&

					// Support: IE<8
					// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
					( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
			},

			// Position-in-collection
			"first": createPositionalPseudo(function() {
				return [ 0 ];
			}),

			"last": createPositionalPseudo(function( matchIndexes, length ) {
				return [ length - 1 ];
			}),

			"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
				return [ argument < 0 ? argument + length : argument ];
			}),

			"even": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 0;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"odd": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 1;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; --i >= 0; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; ++i < length; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			})
		}
	};

	Expr.pseudos["nth"] = Expr.pseudos["eq"];

	// Add button/input type pseudos
	for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
		Expr.pseudos[ i ] = createInputPseudo( i );
	}
	for ( i in { submit: true, reset: true } ) {
		Expr.pseudos[ i ] = createButtonPseudo( i );
	}

	// Easy API for creating new setFilters
	function setFilters() {}
	setFilters.prototype = Expr.filters = Expr.pseudos;
	Expr.setFilters = new setFilters();

	tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
		var matched, match, tokens, type,
			soFar, groups, preFilters,
			cached = tokenCache[ selector + " " ];

		if ( cached ) {
			return parseOnly ? 0 : cached.slice( 0 );
		}

		soFar = selector;
		groups = [];
		preFilters = Expr.preFilter;

		while ( soFar ) {

			// Comma and first run
			if ( !matched || (match = rcomma.exec( soFar )) ) {
				if ( match ) {
					// Don't consume trailing commas as valid
					soFar = soFar.slice( match[0].length ) || soFar;
				}
				groups.push( (tokens = []) );
			}

			matched = false;

			// Combinators
			if ( (match = rcombinators.exec( soFar )) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					// Cast descendant combinators to space
					type: match[0].replace( rtrim, " " )
				});
				soFar = soFar.slice( matched.length );
			}

			// Filters
			for ( type in Expr.filter ) {
				if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
					(match = preFilters[ type ]( match ))) ) {
					matched = match.shift();
					tokens.push({
						value: matched,
						type: type,
						matches: match
					});
					soFar = soFar.slice( matched.length );
				}
			}

			if ( !matched ) {
				break;
			}
		}

		// Return the length of the invalid excess
		// if we're just parsing
		// Otherwise, throw an error or return tokens
		return parseOnly ?
			soFar.length :
			soFar ?
				Sizzle.error( selector ) :
				// Cache the tokens
				tokenCache( selector, groups ).slice( 0 );
	};

	function toSelector( tokens ) {
		var i = 0,
			len = tokens.length,
			selector = "";
		for ( ; i < len; i++ ) {
			selector += tokens[i].value;
		}
		return selector;
	}

	function addCombinator( matcher, combinator, base ) {
		var dir = combinator.dir,
			checkNonElements = base && dir === "parentNode",
			doneName = done++;

		return combinator.first ?
			// Check against closest ancestor/preceding element
			function( elem, context, xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						return matcher( elem, context, xml );
					}
				}
			} :

			// Check against all ancestor/preceding elements
			function( elem, context, xml ) {
				var oldCache, outerCache,
					newCache = [ dirruns, doneName ];

				// We can't set arbitrary data on XML nodes, so they don't benefit from dir caching
				if ( xml ) {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							if ( matcher( elem, context, xml ) ) {
								return true;
							}
						}
					}
				} else {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							outerCache = elem[ expando ] || (elem[ expando ] = {});
							if ( (oldCache = outerCache[ dir ]) &&
								oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

								// Assign to newCache so results back-propagate to previous elements
								return (newCache[ 2 ] = oldCache[ 2 ]);
							} else {
								// Reuse newcache so results back-propagate to previous elements
								outerCache[ dir ] = newCache;

								// A match means we're done; a fail means we have to keep checking
								if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
									return true;
								}
							}
						}
					}
				}
			};
	}

	function elementMatcher( matchers ) {
		return matchers.length > 1 ?
			function( elem, context, xml ) {
				var i = matchers.length;
				while ( i-- ) {
					if ( !matchers[i]( elem, context, xml ) ) {
						return false;
					}
				}
				return true;
			} :
			matchers[0];
	}

	function multipleContexts( selector, contexts, results ) {
		var i = 0,
			len = contexts.length;
		for ( ; i < len; i++ ) {
			Sizzle( selector, contexts[i], results );
		}
		return results;
	}

	function condense( unmatched, map, filter, context, xml ) {
		var elem,
			newUnmatched = [],
			i = 0,
			len = unmatched.length,
			mapped = map != null;

		for ( ; i < len; i++ ) {
			if ( (elem = unmatched[i]) ) {
				if ( !filter || filter( elem, context, xml ) ) {
					newUnmatched.push( elem );
					if ( mapped ) {
						map.push( i );
					}
				}
			}
		}

		return newUnmatched;
	}

	function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
		if ( postFilter && !postFilter[ expando ] ) {
			postFilter = setMatcher( postFilter );
		}
		if ( postFinder && !postFinder[ expando ] ) {
			postFinder = setMatcher( postFinder, postSelector );
		}
		return markFunction(function( seed, results, context, xml ) {
			var temp, i, elem,
				preMap = [],
				postMap = [],
				preexisting = results.length,

				// Get initial elements from seed or context
				elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && ( seed || !selector ) ?
					condense( elems, preMap, preFilter, context, xml ) :
					elems,

				matcherOut = matcher ?
					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

						// ...intermediate processing is necessary
						[] :

						// ...otherwise use results directly
						results :
					matcherIn;

			// Find primary matches
			if ( matcher ) {
				matcher( matcherIn, matcherOut, context, xml );
			}

			// Apply postFilter
			if ( postFilter ) {
				temp = condense( matcherOut, postMap );
				postFilter( temp, [], context, xml );

				// Un-match failing elements by moving them back to matcherIn
				i = temp.length;
				while ( i-- ) {
					if ( (elem = temp[i]) ) {
						matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
					}
				}
			}

			if ( seed ) {
				if ( postFinder || preFilter ) {
					if ( postFinder ) {
						// Get the final matcherOut by condensing this intermediate into postFinder contexts
						temp = [];
						i = matcherOut.length;
						while ( i-- ) {
							if ( (elem = matcherOut[i]) ) {
								// Restore matcherIn since elem is not yet a final match
								temp.push( (matcherIn[i] = elem) );
							}
						}
						postFinder( null, (matcherOut = []), temp, xml );
					}

					// Move matched elements from seed to results to keep them synchronized
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) &&
							(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

							seed[temp] = !(results[temp] = elem);
						}
					}
				}

			// Add elements to results, through postFinder if defined
			} else {
				matcherOut = condense(
					matcherOut === results ?
						matcherOut.splice( preexisting, matcherOut.length ) :
						matcherOut
				);
				if ( postFinder ) {
					postFinder( null, results, matcherOut, xml );
				} else {
					push.apply( results, matcherOut );
				}
			}
		});
	}

	function matcherFromTokens( tokens ) {
		var checkContext, matcher, j,
			len = tokens.length,
			leadingRelative = Expr.relative[ tokens[0].type ],
			implicitRelative = leadingRelative || Expr.relative[" "],
			i = leadingRelative ? 1 : 0,

			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator( function( elem ) {
				return elem === checkContext;
			}, implicitRelative, true ),
			matchAnyContext = addCombinator( function( elem ) {
				return indexOf( checkContext, elem ) > -1;
			}, implicitRelative, true ),
			matchers = [ function( elem, context, xml ) {
				var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
					(checkContext = context).nodeType ?
						matchContext( elem, context, xml ) :
						matchAnyContext( elem, context, xml ) );
				// Avoid hanging onto element (issue #299)
				checkContext = null;
				return ret;
			} ];

		for ( ; i < len; i++ ) {
			if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
				matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
			} else {
				matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

				// Return special upon seeing a positional matcher
				if ( matcher[ expando ] ) {
					// Find the next relative operator (if any) for proper handling
					j = ++i;
					for ( ; j < len; j++ ) {
						if ( Expr.relative[ tokens[j].type ] ) {
							break;
						}
					}
					return setMatcher(
						i > 1 && elementMatcher( matchers ),
						i > 1 && toSelector(
							// If the preceding token was a descendant combinator, insert an implicit any-element `*`
							tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
						).replace( rtrim, "$1" ),
						matcher,
						i < j && matcherFromTokens( tokens.slice( i, j ) ),
						j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
						j < len && toSelector( tokens )
					);
				}
				matchers.push( matcher );
			}
		}

		return elementMatcher( matchers );
	}

	function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
		var bySet = setMatchers.length > 0,
			byElement = elementMatchers.length > 0,
			superMatcher = function( seed, context, xml, results, outermost ) {
				var elem, j, matcher,
					matchedCount = 0,
					i = "0",
					unmatched = seed && [],
					setMatched = [],
					contextBackup = outermostContext,
					// We must always have either seed elements or outermost context
					elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
					len = elems.length;

				if ( outermost ) {
					outermostContext = context !== document && context;
				}

				// Add elements passing elementMatchers directly to results
				// Keep `i` a string if there are no elements so `matchedCount` will be "00" below
				// Support: IE<9, Safari
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
				for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
					if ( byElement && elem ) {
						j = 0;
						while ( (matcher = elementMatchers[j++]) ) {
							if ( matcher( elem, context, xml ) ) {
								results.push( elem );
								break;
							}
						}
						if ( outermost ) {
							dirruns = dirrunsUnique;
						}
					}

					// Track unmatched elements for set filters
					if ( bySet ) {
						// They will have gone through all possible matchers
						if ( (elem = !matcher && elem) ) {
							matchedCount--;
						}

						// Lengthen the array for every element, matched or not
						if ( seed ) {
							unmatched.push( elem );
						}
					}
				}

				// Apply set filters to unmatched elements
				matchedCount += i;
				if ( bySet && i !== matchedCount ) {
					j = 0;
					while ( (matcher = setMatchers[j++]) ) {
						matcher( unmatched, setMatched, context, xml );
					}

					if ( seed ) {
						// Reintegrate element matches to eliminate the need for sorting
						if ( matchedCount > 0 ) {
							while ( i-- ) {
								if ( !(unmatched[i] || setMatched[i]) ) {
									setMatched[i] = pop.call( results );
								}
							}
						}

						// Discard index placeholder values to get only actual matches
						setMatched = condense( setMatched );
					}

					// Add matches to results
					push.apply( results, setMatched );

					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if ( outermost && !seed && setMatched.length > 0 &&
						( matchedCount + setMatchers.length ) > 1 ) {

						Sizzle.uniqueSort( results );
					}
				}

				// Override manipulation of globals by nested matchers
				if ( outermost ) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}

				return unmatched;
			};

		return bySet ?
			markFunction( superMatcher ) :
			superMatcher;
	}

	compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
		var i,
			setMatchers = [],
			elementMatchers = [],
			cached = compilerCache[ selector + " " ];

		if ( !cached ) {
			// Generate a function of recursive functions that can be used to check each element
			if ( !match ) {
				match = tokenize( selector );
			}
			i = match.length;
			while ( i-- ) {
				cached = matcherFromTokens( match[i] );
				if ( cached[ expando ] ) {
					setMatchers.push( cached );
				} else {
					elementMatchers.push( cached );
				}
			}

			// Cache the compiled function
			cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

			// Save selector and tokenization
			cached.selector = selector;
		}
		return cached;
	};

	/**
	 * A low-level selection function that works with Sizzle's compiled
	 *  selector functions
	 * @param {String|Function} selector A selector or a pre-compiled
	 *  selector function built with Sizzle.compile
	 * @param {Element} context
	 * @param {Array} [results]
	 * @param {Array} [seed] A set of elements to match against
	 */
	select = Sizzle.select = function( selector, context, results, seed ) {
		var i, tokens, token, type, find,
			compiled = typeof selector === "function" && selector,
			match = !seed && tokenize( (selector = compiled.selector || selector) );

		results = results || [];

		// Try to minimize operations if there is no seed and only one group
		if ( match.length === 1 ) {

			// Take a shortcut and set the context if the root selector is an ID
			tokens = match[0] = match[0].slice( 0 );
			if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
					support.getById && context.nodeType === 9 && documentIsHTML &&
					Expr.relative[ tokens[1].type ] ) {

				context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
				if ( !context ) {
					return results;

				// Precompiled matchers will still verify ancestry, so step up a level
				} else if ( compiled ) {
					context = context.parentNode;
				}

				selector = selector.slice( tokens.shift().value.length );
			}

			// Fetch a seed set for right-to-left matching
			i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
			while ( i-- ) {
				token = tokens[i];

				// Abort if we hit a combinator
				if ( Expr.relative[ (type = token.type) ] ) {
					break;
				}
				if ( (find = Expr.find[ type ]) ) {
					// Search, expanding context for leading sibling combinators
					if ( (seed = find(
						token.matches[0].replace( runescape, funescape ),
						rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
					)) ) {

						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && toSelector( tokens );
						if ( !selector ) {
							push.apply( results, seed );
							return results;
						}

						break;
					}
				}
			}
		}

		// Compile and execute a filtering function if one is not provided
		// Provide `match` to avoid retokenization if we modified the selector above
		( compiled || compile( selector, match ) )(
			seed,
			context,
			!documentIsHTML,
			results,
			rsibling.test( selector ) && testContext( context.parentNode ) || context
		);
		return results;
	};

	// One-time assignments

	// Sort stability
	support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

	// Support: Chrome 14-35+
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates = !!hasDuplicate;

	// Initialize against the default document
	setDocument();

	// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached = assert(function( div1 ) {
		// Should return 1, but returns 4 (following)
		return div1.compareDocumentPosition( document.createElement("div") ) & 1;
	});

	// Support: IE<8
	// Prevent attribute/property "interpolation"
	// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !assert(function( div ) {
		div.innerHTML = "<a href='#'></a>";
		return div.firstChild.getAttribute("href") === "#" ;
	}) ) {
		addHandle( "type|href|height|width", function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
			}
		});
	}

	// Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if ( !support.attributes || !assert(function( div ) {
		div.innerHTML = "<input/>";
		div.firstChild.setAttribute( "value", "" );
		return div.firstChild.getAttribute( "value" ) === "";
	}) ) {
		addHandle( "value", function( elem, name, isXML ) {
			if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
				return elem.defaultValue;
			}
		});
	}

	// Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if ( !assert(function( div ) {
		return div.getAttribute("disabled") == null;
	}) ) {
		addHandle( booleans, function( elem, name, isXML ) {
			var val;
			if ( !isXML ) {
				return elem[ name ] === true ? name.toLowerCase() :
						(val = elem.getAttributeNode( name )) && val.specified ?
						val.value :
					null;
			}
		});
	}

	return Sizzle;

	})( window );



	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;
	jQuery.expr[":"] = jQuery.expr.pseudos;
	jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;



	var rneedsContext = jQuery.expr.match.needsContext;

	var rsingleTag = (/^<(\w+)\s*\/?>(?:<\/\1>|)$/);



	var risSimple = /^.[^:#\[\.,]*$/;

	// Implement the identical functionality for filter and not
	function winnow( elements, qualifier, not ) {
		if ( jQuery.isFunction( qualifier ) ) {
			return jQuery.grep( elements, function( elem, i ) {
				/* jshint -W018 */
				return !!qualifier.call( elem, i, elem ) !== not;
			});

		}

		if ( qualifier.nodeType ) {
			return jQuery.grep( elements, function( elem ) {
				return ( elem === qualifier ) !== not;
			});

		}

		if ( typeof qualifier === "string" ) {
			if ( risSimple.test( qualifier ) ) {
				return jQuery.filter( qualifier, elements, not );
			}

			qualifier = jQuery.filter( qualifier, elements );
		}

		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) >= 0 ) !== not;
		});
	}

	jQuery.filter = function( expr, elems, not ) {
		var elem = elems[ 0 ];

		if ( not ) {
			expr = ":not(" + expr + ")";
		}

		return elems.length === 1 && elem.nodeType === 1 ?
			jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
			jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
				return elem.nodeType === 1;
			}));
	};

	jQuery.fn.extend({
		find: function( selector ) {
			var i,
				len = this.length,
				ret = [],
				self = this;

			if ( typeof selector !== "string" ) {
				return this.pushStack( jQuery( selector ).filter(function() {
					for ( i = 0; i < len; i++ ) {
						if ( jQuery.contains( self[ i ], this ) ) {
							return true;
						}
					}
				}) );
			}

			for ( i = 0; i < len; i++ ) {
				jQuery.find( selector, self[ i ], ret );
			}

			// Needed because $( selector, context ) becomes $( context ).find( selector )
			ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
			ret.selector = this.selector ? this.selector + " " + selector : selector;
			return ret;
		},
		filter: function( selector ) {
			return this.pushStack( winnow(this, selector || [], false) );
		},
		not: function( selector ) {
			return this.pushStack( winnow(this, selector || [], true) );
		},
		is: function( selector ) {
			return !!winnow(
				this,

				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test( selector ) ?
					jQuery( selector ) :
					selector || [],
				false
			).length;
		}
	});


	// Initialize a jQuery object


	// A central reference to the root jQuery(document)
	var rootjQuery,

		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

		init = jQuery.fn.init = function( selector, context ) {
			var match, elem;

			// HANDLE: $(""), $(null), $(undefined), $(false)
			if ( !selector ) {
				return this;
			}

			// Handle HTML strings
			if ( typeof selector === "string" ) {
				if ( selector[0] === "<" && selector[ selector.length - 1 ] === ">" && selector.length >= 3 ) {
					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [ null, selector, null ];

				} else {
					match = rquickExpr.exec( selector );
				}

				// Match html or make sure no context is specified for #id
				if ( match && (match[1] || !context) ) {

					// HANDLE: $(html) -> $(array)
					if ( match[1] ) {
						context = context instanceof jQuery ? context[0] : context;

						// Option to run scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge( this, jQuery.parseHTML(
							match[1],
							context && context.nodeType ? context.ownerDocument || context : document,
							true
						) );

						// HANDLE: $(html, props)
						if ( rsingleTag.test( match[1] ) && jQuery.isPlainObject( context ) ) {
							for ( match in context ) {
								// Properties of context are called as methods if possible
								if ( jQuery.isFunction( this[ match ] ) ) {
									this[ match ]( context[ match ] );

								// ...and otherwise set as attributes
								} else {
									this.attr( match, context[ match ] );
								}
							}
						}

						return this;

					// HANDLE: $(#id)
					} else {
						elem = document.getElementById( match[2] );

						// Support: Blackberry 4.6
						// gEBID returns nodes no longer in the document (#6963)
						if ( elem && elem.parentNode ) {
							// Inject the element directly into the jQuery object
							this.length = 1;
							this[0] = elem;
						}

						this.context = document;
						this.selector = selector;
						return this;
					}

				// HANDLE: $(expr, $(...))
				} else if ( !context || context.jquery ) {
					return ( context || rootjQuery ).find( selector );

				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor( context ).find( selector );
				}

			// HANDLE: $(DOMElement)
			} else if ( selector.nodeType ) {
				this.context = this[0] = selector;
				this.length = 1;
				return this;

			// HANDLE: $(function)
			// Shortcut for document ready
			} else if ( jQuery.isFunction( selector ) ) {
				return typeof rootjQuery.ready !== "undefined" ?
					rootjQuery.ready( selector ) :
					// Execute immediately if ready is not present
					selector( jQuery );
			}

			if ( selector.selector !== undefined ) {
				this.selector = selector.selector;
				this.context = selector.context;
			}

			return jQuery.makeArray( selector, this );
		};

	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;

	// Initialize central reference
	rootjQuery = jQuery( document );


	var rparentsprev = /^(?:parents|prev(?:Until|All))/,
		// Methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};

	jQuery.extend({
		dir: function( elem, dir, until ) {
			var matched = [],
				truncate = until !== undefined;

			while ( (elem = elem[ dir ]) && elem.nodeType !== 9 ) {
				if ( elem.nodeType === 1 ) {
					if ( truncate && jQuery( elem ).is( until ) ) {
						break;
					}
					matched.push( elem );
				}
			}
			return matched;
		},

		sibling: function( n, elem ) {
			var matched = [];

			for ( ; n; n = n.nextSibling ) {
				if ( n.nodeType === 1 && n !== elem ) {
					matched.push( n );
				}
			}

			return matched;
		}
	});

	jQuery.fn.extend({
		has: function( target ) {
			var targets = jQuery( target, this ),
				l = targets.length;

			return this.filter(function() {
				var i = 0;
				for ( ; i < l; i++ ) {
					if ( jQuery.contains( this, targets[i] ) ) {
						return true;
					}
				}
			});
		},

		closest: function( selectors, context ) {
			var cur,
				i = 0,
				l = this.length,
				matched = [],
				pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
					jQuery( selectors, context || this.context ) :
					0;

			for ( ; i < l; i++ ) {
				for ( cur = this[i]; cur && cur !== context; cur = cur.parentNode ) {
					// Always skip document fragments
					if ( cur.nodeType < 11 && (pos ?
						pos.index(cur) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector(cur, selectors)) ) {

						matched.push( cur );
						break;
					}
				}
			}

			return this.pushStack( matched.length > 1 ? jQuery.unique( matched ) : matched );
		},

		// Determine the position of an element within the set
		index: function( elem ) {

			// No argument, return index in parent
			if ( !elem ) {
				return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
			}

			// Index in selector
			if ( typeof elem === "string" ) {
				return indexOf.call( jQuery( elem ), this[ 0 ] );
			}

			// Locate the position of the desired element
			return indexOf.call( this,

				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[ 0 ] : elem
			);
		},

		add: function( selector, context ) {
			return this.pushStack(
				jQuery.unique(
					jQuery.merge( this.get(), jQuery( selector, context ) )
				)
			);
		},

		addBack: function( selector ) {
			return this.add( selector == null ?
				this.prevObject : this.prevObject.filter(selector)
			);
		}
	});

	function sibling( cur, dir ) {
		while ( (cur = cur[dir]) && cur.nodeType !== 1 ) {}
		return cur;
	}

	jQuery.each({
		parent: function( elem ) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function( elem ) {
			return jQuery.dir( elem, "parentNode" );
		},
		parentsUntil: function( elem, i, until ) {
			return jQuery.dir( elem, "parentNode", until );
		},
		next: function( elem ) {
			return sibling( elem, "nextSibling" );
		},
		prev: function( elem ) {
			return sibling( elem, "previousSibling" );
		},
		nextAll: function( elem ) {
			return jQuery.dir( elem, "nextSibling" );
		},
		prevAll: function( elem ) {
			return jQuery.dir( elem, "previousSibling" );
		},
		nextUntil: function( elem, i, until ) {
			return jQuery.dir( elem, "nextSibling", until );
		},
		prevUntil: function( elem, i, until ) {
			return jQuery.dir( elem, "previousSibling", until );
		},
		siblings: function( elem ) {
			return jQuery.sibling( ( elem.parentNode || {} ).firstChild, elem );
		},
		children: function( elem ) {
			return jQuery.sibling( elem.firstChild );
		},
		contents: function( elem ) {
			return elem.contentDocument || jQuery.merge( [], elem.childNodes );
		}
	}, function( name, fn ) {
		jQuery.fn[ name ] = function( until, selector ) {
			var matched = jQuery.map( this, fn, until );

			if ( name.slice( -5 ) !== "Until" ) {
				selector = until;
			}

			if ( selector && typeof selector === "string" ) {
				matched = jQuery.filter( selector, matched );
			}

			if ( this.length > 1 ) {
				// Remove duplicates
				if ( !guaranteedUnique[ name ] ) {
					jQuery.unique( matched );
				}

				// Reverse order for parents* and prev-derivatives
				if ( rparentsprev.test( name ) ) {
					matched.reverse();
				}
			}

			return this.pushStack( matched );
		};
	});
	var rnotwhite = (/\S+/g);



	// String to Object options format cache
	var optionsCache = {};

	// Convert String-formatted options into Object-formatted ones and store in cache
	function createOptions( options ) {
		var object = optionsCache[ options ] = {};
		jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
			object[ flag ] = true;
		});
		return object;
	}

	/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */
	jQuery.Callbacks = function( options ) {

		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ?
			( optionsCache[ options ] || createOptions( options ) ) :
			jQuery.extend( {}, options );

		var // Last fire value (for non-forgettable lists)
			memory,
			// Flag to know if list was already fired
			fired,
			// Flag to know if list is currently firing
			firing,
			// First callback to fire (used internally by add and fireWith)
			firingStart,
			// End of the loop when firing
			firingLength,
			// Index of currently firing callback (modified by remove if needed)
			firingIndex,
			// Actual callback list
			list = [],
			// Stack of fire calls for repeatable lists
			stack = !options.once && [],
			// Fire callbacks
			fire = function( data ) {
				memory = options.memory && data;
				fired = true;
				firingIndex = firingStart || 0;
				firingStart = 0;
				firingLength = list.length;
				firing = true;
				for ( ; list && firingIndex < firingLength; firingIndex++ ) {
					if ( list[ firingIndex ].apply( data[ 0 ], data[ 1 ] ) === false && options.stopOnFalse ) {
						memory = false; // To prevent further calls using add
						break;
					}
				}
				firing = false;
				if ( list ) {
					if ( stack ) {
						if ( stack.length ) {
							fire( stack.shift() );
						}
					} else if ( memory ) {
						list = [];
					} else {
						self.disable();
					}
				}
			},
			// Actual Callbacks object
			self = {
				// Add a callback or a collection of callbacks to the list
				add: function() {
					if ( list ) {
						// First, we save the current length
						var start = list.length;
						(function add( args ) {
							jQuery.each( args, function( _, arg ) {
								var type = jQuery.type( arg );
								if ( type === "function" ) {
									if ( !options.unique || !self.has( arg ) ) {
										list.push( arg );
									}
								} else if ( arg && arg.length && type !== "string" ) {
									// Inspect recursively
									add( arg );
								}
							});
						})( arguments );
						// Do we need to add the callbacks to the
						// current firing batch?
						if ( firing ) {
							firingLength = list.length;
						// With memory, if we're not firing then
						// we should call right away
						} else if ( memory ) {
							firingStart = start;
							fire( memory );
						}
					}
					return this;
				},
				// Remove a callback from the list
				remove: function() {
					if ( list ) {
						jQuery.each( arguments, function( _, arg ) {
							var index;
							while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
								list.splice( index, 1 );
								// Handle firing indexes
								if ( firing ) {
									if ( index <= firingLength ) {
										firingLength--;
									}
									if ( index <= firingIndex ) {
										firingIndex--;
									}
								}
							}
						});
					}
					return this;
				},
				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function( fn ) {
					return fn ? jQuery.inArray( fn, list ) > -1 : !!( list && list.length );
				},
				// Remove all callbacks from the list
				empty: function() {
					list = [];
					firingLength = 0;
					return this;
				},
				// Have the list do nothing anymore
				disable: function() {
					list = stack = memory = undefined;
					return this;
				},
				// Is it disabled?
				disabled: function() {
					return !list;
				},
				// Lock the list in its current state
				lock: function() {
					stack = undefined;
					if ( !memory ) {
						self.disable();
					}
					return this;
				},
				// Is it locked?
				locked: function() {
					return !stack;
				},
				// Call all callbacks with the given context and arguments
				fireWith: function( context, args ) {
					if ( list && ( !fired || stack ) ) {
						args = args || [];
						args = [ context, args.slice ? args.slice() : args ];
						if ( firing ) {
							stack.push( args );
						} else {
							fire( args );
						}
					}
					return this;
				},
				// Call all the callbacks with the given arguments
				fire: function() {
					self.fireWith( this, arguments );
					return this;
				},
				// To know if the callbacks have already been called at least once
				fired: function() {
					return !!fired;
				}
			};

		return self;
	};


	jQuery.extend({

		Deferred: function( func ) {
			var tuples = [
					// action, add listener, listener list, final state
					[ "resolve", "done", jQuery.Callbacks("once memory"), "resolved" ],
					[ "reject", "fail", jQuery.Callbacks("once memory"), "rejected" ],
					[ "notify", "progress", jQuery.Callbacks("memory") ]
				],
				state = "pending",
				promise = {
					state: function() {
						return state;
					},
					always: function() {
						deferred.done( arguments ).fail( arguments );
						return this;
					},
					then: function( /* fnDone, fnFail, fnProgress */ ) {
						var fns = arguments;
						return jQuery.Deferred(function( newDefer ) {
							jQuery.each( tuples, function( i, tuple ) {
								var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];
								// deferred[ done | fail | progress ] for forwarding actions to newDefer
								deferred[ tuple[1] ](function() {
									var returned = fn && fn.apply( this, arguments );
									if ( returned && jQuery.isFunction( returned.promise ) ) {
										returned.promise()
											.done( newDefer.resolve )
											.fail( newDefer.reject )
											.progress( newDefer.notify );
									} else {
										newDefer[ tuple[ 0 ] + "With" ]( this === promise ? newDefer.promise() : this, fn ? [ returned ] : arguments );
									}
								});
							});
							fns = null;
						}).promise();
					},
					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function( obj ) {
						return obj != null ? jQuery.extend( obj, promise ) : promise;
					}
				},
				deferred = {};

			// Keep pipe for back-compat
			promise.pipe = promise.then;

			// Add list-specific methods
			jQuery.each( tuples, function( i, tuple ) {
				var list = tuple[ 2 ],
					stateString = tuple[ 3 ];

				// promise[ done | fail | progress ] = list.add
				promise[ tuple[1] ] = list.add;

				// Handle state
				if ( stateString ) {
					list.add(function() {
						// state = [ resolved | rejected ]
						state = stateString;

					// [ reject_list | resolve_list ].disable; progress_list.lock
					}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
				}

				// deferred[ resolve | reject | notify ]
				deferred[ tuple[0] ] = function() {
					deferred[ tuple[0] + "With" ]( this === deferred ? promise : this, arguments );
					return this;
				};
				deferred[ tuple[0] + "With" ] = list.fireWith;
			});

			// Make the deferred a promise
			promise.promise( deferred );

			// Call given func if any
			if ( func ) {
				func.call( deferred, deferred );
			}

			// All done!
			return deferred;
		},

		// Deferred helper
		when: function( subordinate /* , ..., subordinateN */ ) {
			var i = 0,
				resolveValues = slice.call( arguments ),
				length = resolveValues.length,

				// the count of uncompleted subordinates
				remaining = length !== 1 || ( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

				// the master Deferred. If resolveValues consist of only a single Deferred, just use that.
				deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

				// Update function for both resolve and progress values
				updateFunc = function( i, contexts, values ) {
					return function( value ) {
						contexts[ i ] = this;
						values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
						if ( values === progressValues ) {
							deferred.notifyWith( contexts, values );
						} else if ( !( --remaining ) ) {
							deferred.resolveWith( contexts, values );
						}
					};
				},

				progressValues, progressContexts, resolveContexts;

			// Add listeners to Deferred subordinates; treat others as resolved
			if ( length > 1 ) {
				progressValues = new Array( length );
				progressContexts = new Array( length );
				resolveContexts = new Array( length );
				for ( ; i < length; i++ ) {
					if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
						resolveValues[ i ].promise()
							.done( updateFunc( i, resolveContexts, resolveValues ) )
							.fail( deferred.reject )
							.progress( updateFunc( i, progressContexts, progressValues ) );
					} else {
						--remaining;
					}
				}
			}

			// If we're not waiting on anything, resolve the master
			if ( !remaining ) {
				deferred.resolveWith( resolveContexts, resolveValues );
			}

			return deferred.promise();
		}
	});


	// The deferred used on DOM ready
	var readyList;

	jQuery.fn.ready = function( fn ) {
		// Add the callback
		jQuery.ready.promise().done( fn );

		return this;
	};

	jQuery.extend({
		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,

		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,

		// Hold (or release) the ready event
		holdReady: function( hold ) {
			if ( hold ) {
				jQuery.readyWait++;
			} else {
				jQuery.ready( true );
			}
		},

		// Handle when the DOM is ready
		ready: function( wait ) {

			// Abort if there are pending holds or we're already ready
			if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
				return;
			}

			// Remember that the DOM is ready
			jQuery.isReady = true;

			// If a normal DOM Ready event fired, decrement, and wait if need be
			if ( wait !== true && --jQuery.readyWait > 0 ) {
				return;
			}

			// If there are functions bound, to execute
			readyList.resolveWith( document, [ jQuery ] );

			// Trigger any bound ready events
			if ( jQuery.fn.triggerHandler ) {
				jQuery( document ).triggerHandler( "ready" );
				jQuery( document ).off( "ready" );
			}
		}
	});

	/**
	 * The ready event handler and self cleanup method
	 */
	function completed() {
		document.removeEventListener( "DOMContentLoaded", completed, false );
		window.removeEventListener( "load", completed, false );
		jQuery.ready();
	}

	jQuery.ready.promise = function( obj ) {
		if ( !readyList ) {

			readyList = jQuery.Deferred();

			// Catch cases where $(document).ready() is called after the browser event has already occurred.
			// We once tried to use readyState "interactive" here, but it caused issues like the one
			// discovered by ChrisS here: http://bugs.jquery.com/ticket/12282#comment:15
			if ( document.readyState === "complete" ) {
				// Handle it asynchronously to allow scripts the opportunity to delay ready
				setTimeout( jQuery.ready );

			} else {

				// Use the handy event callback
				document.addEventListener( "DOMContentLoaded", completed, false );

				// A fallback to window.onload, that will always work
				window.addEventListener( "load", completed, false );
			}
		}
		return readyList.promise( obj );
	};

	// Kick off the DOM ready check even if the user does not
	jQuery.ready.promise();




	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = jQuery.access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			len = elems.length,
			bulk = key == null;

		// Sets many values
		if ( jQuery.type( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				jQuery.access( elems, fn, i, key[i], true, emptyGet, raw );
			}

		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;

			if ( !jQuery.isFunction( value ) ) {
				raw = true;
			}

			if ( bulk ) {
				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;

				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}

			if ( fn ) {
				for ( ; i < len; i++ ) {
					fn( elems[i], key, raw ? value : value.call( elems[i], i, fn( elems[i], key ) ) );
				}
			}
		}

		return chainable ?
			elems :

			// Gets
			bulk ?
				fn.call( elems ) :
				len ? fn( elems[0], key ) : emptyGet;
	};


	/**
	 * Determines whether an object can have data
	 */
	jQuery.acceptData = function( owner ) {
		// Accepts only:
		//  - Node
		//    - Node.ELEMENT_NODE
		//    - Node.DOCUMENT_NODE
		//  - Object
		//    - Any
		/* jshint -W018 */
		return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
	};


	function Data() {
		// Support: Android<4,
		// Old WebKit does not have Object.preventExtensions/freeze method,
		// return new empty object instead with no [[set]] accessor
		Object.defineProperty( this.cache = {}, 0, {
			get: function() {
				return {};
			}
		});

		this.expando = jQuery.expando + Data.uid++;
	}

	Data.uid = 1;
	Data.accepts = jQuery.acceptData;

	Data.prototype = {
		key: function( owner ) {
			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return the key for a frozen object.
			if ( !Data.accepts( owner ) ) {
				return 0;
			}

			var descriptor = {},
				// Check if the owner object already has a cache key
				unlock = owner[ this.expando ];

			// If not, create one
			if ( !unlock ) {
				unlock = Data.uid++;

				// Secure it in a non-enumerable, non-writable property
				try {
					descriptor[ this.expando ] = { value: unlock };
					Object.defineProperties( owner, descriptor );

				// Support: Android<4
				// Fallback to a less secure definition
				} catch ( e ) {
					descriptor[ this.expando ] = unlock;
					jQuery.extend( owner, descriptor );
				}
			}

			// Ensure the cache object
			if ( !this.cache[ unlock ] ) {
				this.cache[ unlock ] = {};
			}

			return unlock;
		},
		set: function( owner, data, value ) {
			var prop,
				// There may be an unlock assigned to this node,
				// if there is no entry for this "owner", create one inline
				// and set the unlock as though an owner entry had always existed
				unlock = this.key( owner ),
				cache = this.cache[ unlock ];

			// Handle: [ owner, key, value ] args
			if ( typeof data === "string" ) {
				cache[ data ] = value;

			// Handle: [ owner, { properties } ] args
			} else {
				// Fresh assignments by object are shallow copied
				if ( jQuery.isEmptyObject( cache ) ) {
					jQuery.extend( this.cache[ unlock ], data );
				// Otherwise, copy the properties one-by-one to the cache object
				} else {
					for ( prop in data ) {
						cache[ prop ] = data[ prop ];
					}
				}
			}
			return cache;
		},
		get: function( owner, key ) {
			// Either a valid cache is found, or will be created.
			// New caches will be created and the unlock returned,
			// allowing direct access to the newly created
			// empty data object. A valid owner object must be provided.
			var cache = this.cache[ this.key( owner ) ];

			return key === undefined ?
				cache : cache[ key ];
		},
		access: function( owner, key, value ) {
			var stored;
			// In cases where either:
			//
			//   1. No key was specified
			//   2. A string key was specified, but no value provided
			//
			// Take the "read" path and allow the get method to determine
			// which value to return, respectively either:
			//
			//   1. The entire cache object
			//   2. The data stored at the key
			//
			if ( key === undefined ||
					((key && typeof key === "string") && value === undefined) ) {

				stored = this.get( owner, key );

				return stored !== undefined ?
					stored : this.get( owner, jQuery.camelCase(key) );
			}

			// [*]When the key is not a string, or both a key and value
			// are specified, set or extend (existing objects) with either:
			//
			//   1. An object of properties
			//   2. A key and value
			//
			this.set( owner, key, value );

			// Since the "set" path can have two possible entry points
			// return the expected data based on which path was taken[*]
			return value !== undefined ? value : key;
		},
		remove: function( owner, key ) {
			var i, name, camel,
				unlock = this.key( owner ),
				cache = this.cache[ unlock ];

			if ( key === undefined ) {
				this.cache[ unlock ] = {};

			} else {
				// Support array or space separated string of keys
				if ( jQuery.isArray( key ) ) {
					// If "name" is an array of keys...
					// When data is initially created, via ("key", "val") signature,
					// keys will be converted to camelCase.
					// Since there is no way to tell _how_ a key was added, remove
					// both plain key and camelCase key. #12786
					// This will only penalize the array argument path.
					name = key.concat( key.map( jQuery.camelCase ) );
				} else {
					camel = jQuery.camelCase( key );
					// Try the string as a key before any manipulation
					if ( key in cache ) {
						name = [ key, camel ];
					} else {
						// If a key with the spaces exists, use it.
						// Otherwise, create an array by matching non-whitespace
						name = camel;
						name = name in cache ?
							[ name ] : ( name.match( rnotwhite ) || [] );
					}
				}

				i = name.length;
				while ( i-- ) {
					delete cache[ name[ i ] ];
				}
			}
		},
		hasData: function( owner ) {
			return !jQuery.isEmptyObject(
				this.cache[ owner[ this.expando ] ] || {}
			);
		},
		discard: function( owner ) {
			if ( owner[ this.expando ] ) {
				delete this.cache[ owner[ this.expando ] ];
			}
		}
	};
	var data_priv = new Data();

	var data_user = new Data();



	//	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		rmultiDash = /([A-Z])/g;

	function dataAttr( elem, key, data ) {
		var name;

		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if ( data === undefined && elem.nodeType === 1 ) {
			name = "data-" + key.replace( rmultiDash, "-$1" ).toLowerCase();
			data = elem.getAttribute( name );

			if ( typeof data === "string" ) {
				try {
					data = data === "true" ? true :
						data === "false" ? false :
						data === "null" ? null :
						// Only convert to a number if it doesn't change the string
						+data + "" === data ? +data :
						rbrace.test( data ) ? jQuery.parseJSON( data ) :
						data;
				} catch( e ) {}

				// Make sure we set the data so it isn't changed later
				data_user.set( elem, key, data );
			} else {
				data = undefined;
			}
		}
		return data;
	}

	jQuery.extend({
		hasData: function( elem ) {
			return data_user.hasData( elem ) || data_priv.hasData( elem );
		},

		data: function( elem, name, data ) {
			return data_user.access( elem, name, data );
		},

		removeData: function( elem, name ) {
			data_user.remove( elem, name );
		},

		// TODO: Now that all calls to _data and _removeData have been replaced
		// with direct calls to data_priv methods, these can be deprecated.
		_data: function( elem, name, data ) {
			return data_priv.access( elem, name, data );
		},

		_removeData: function( elem, name ) {
			data_priv.remove( elem, name );
		}
	});

	jQuery.fn.extend({
		data: function( key, value ) {
			var i, name, data,
				elem = this[ 0 ],
				attrs = elem && elem.attributes;

			// Gets all values
			if ( key === undefined ) {
				if ( this.length ) {
					data = data_user.get( elem );

					if ( elem.nodeType === 1 && !data_priv.get( elem, "hasDataAttrs" ) ) {
						i = attrs.length;
						while ( i-- ) {

							// Support: IE11+
							// The attrs elements can be null (#14894)
							if ( attrs[ i ] ) {
								name = attrs[ i ].name;
								if ( name.indexOf( "data-" ) === 0 ) {
									name = jQuery.camelCase( name.slice(5) );
									dataAttr( elem, name, data[ name ] );
								}
							}
						}
						data_priv.set( elem, "hasDataAttrs", true );
					}
				}

				return data;
			}

			// Sets multiple values
			if ( typeof key === "object" ) {
				return this.each(function() {
					data_user.set( this, key );
				});
			}

			return access( this, function( value ) {
				var data,
					camelKey = jQuery.camelCase( key );

				// The calling jQuery object (element matches) is not empty
				// (and therefore has an element appears at this[ 0 ]) and the
				// `value` parameter was not undefined. An empty jQuery object
				// will result in `undefined` for elem = this[ 0 ] which will
				// throw an exception if an attempt to read a data cache is made.
				if ( elem && value === undefined ) {
					// Attempt to get data from the cache
					// with the key as-is
					data = data_user.get( elem, key );
					if ( data !== undefined ) {
						return data;
					}

					// Attempt to get data from the cache
					// with the key camelized
					data = data_user.get( elem, camelKey );
					if ( data !== undefined ) {
						return data;
					}

					// Attempt to "discover" the data in
					// HTML5 custom data-* attrs
					data = dataAttr( elem, camelKey, undefined );
					if ( data !== undefined ) {
						return data;
					}

					// We tried really hard, but the data doesn't exist.
					return;
				}

				// Set the data...
				this.each(function() {
					// First, attempt to store a copy or reference of any
					// data that might've been store with a camelCased key.
					var data = data_user.get( this, camelKey );

					// For HTML5 data-* attribute interop, we have to
					// store property names with dashes in a camelCase form.
					// This might not apply to all properties...*
					data_user.set( this, camelKey, value );

					// *... In the case of properties that might _actually_
					// have dashes, we need to also store a copy of that
					// unchanged property.
					if ( key.indexOf("-") !== -1 && data !== undefined ) {
						data_user.set( this, key, value );
					}
				});
			}, null, value, arguments.length > 1, null, true );
		},

		removeData: function( key ) {
			return this.each(function() {
				data_user.remove( this, key );
			});
		}
	});


	jQuery.extend({
		queue: function( elem, type, data ) {
			var queue;

			if ( elem ) {
				type = ( type || "fx" ) + "queue";
				queue = data_priv.get( elem, type );

				// Speed up dequeue by getting out quickly if this is just a lookup
				if ( data ) {
					if ( !queue || jQuery.isArray( data ) ) {
						queue = data_priv.access( elem, type, jQuery.makeArray(data) );
					} else {
						queue.push( data );
					}
				}
				return queue || [];
			}
		},

		dequeue: function( elem, type ) {
			type = type || "fx";

			var queue = jQuery.queue( elem, type ),
				startLength = queue.length,
				fn = queue.shift(),
				hooks = jQuery._queueHooks( elem, type ),
				next = function() {
					jQuery.dequeue( elem, type );
				};

			// If the fx queue is dequeued, always remove the progress sentinel
			if ( fn === "inprogress" ) {
				fn = queue.shift();
				startLength--;
			}

			if ( fn ) {

				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if ( type === "fx" ) {
					queue.unshift( "inprogress" );
				}

				// Clear up the last queue stop function
				delete hooks.stop;
				fn.call( elem, next, hooks );
			}

			if ( !startLength && hooks ) {
				hooks.empty.fire();
			}
		},

		// Not public - generate a queueHooks object, or return the current one
		_queueHooks: function( elem, type ) {
			var key = type + "queueHooks";
			return data_priv.get( elem, key ) || data_priv.access( elem, key, {
				empty: jQuery.Callbacks("once memory").add(function() {
					data_priv.remove( elem, [ type + "queue", key ] );
				})
			});
		}
	});

	jQuery.fn.extend({
		queue: function( type, data ) {
			var setter = 2;

			if ( typeof type !== "string" ) {
				data = type;
				type = "fx";
				setter--;
			}

			if ( arguments.length < setter ) {
				return jQuery.queue( this[0], type );
			}

			return data === undefined ?
				this :
				this.each(function() {
					var queue = jQuery.queue( this, type, data );

					// Ensure a hooks for this queue
					jQuery._queueHooks( this, type );

					if ( type === "fx" && queue[0] !== "inprogress" ) {
						jQuery.dequeue( this, type );
					}
				});
		},
		dequeue: function( type ) {
			return this.each(function() {
				jQuery.dequeue( this, type );
			});
		},
		clearQueue: function( type ) {
			return this.queue( type || "fx", [] );
		},
		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function( type, obj ) {
			var tmp,
				count = 1,
				defer = jQuery.Deferred(),
				elements = this,
				i = this.length,
				resolve = function() {
					if ( !( --count ) ) {
						defer.resolveWith( elements, [ elements ] );
					}
				};

			if ( typeof type !== "string" ) {
				obj = type;
				type = undefined;
			}
			type = type || "fx";

			while ( i-- ) {
				tmp = data_priv.get( elements[ i ], type + "queueHooks" );
				if ( tmp && tmp.empty ) {
					count++;
					tmp.empty.add( resolve );
				}
			}
			resolve();
			return defer.promise( obj );
		}
	});
	var pnum = (/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;

	var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

	var isHidden = function( elem, el ) {
			// isHidden might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;
			return jQuery.css( elem, "display" ) === "none" || !jQuery.contains( elem.ownerDocument, elem );
		};

	var rcheckableType = (/^(?:checkbox|radio)$/i);



	(function() {
		var fragment = document.createDocumentFragment(),
			div = fragment.appendChild( document.createElement( "div" ) ),
			input = document.createElement( "input" );

		// Support: Safari<=5.1
		// Check state lost if the name is set (#11217)
		// Support: Windows Web Apps (WWA)
		// `name` and `type` must use .setAttribute for WWA (#14901)
		input.setAttribute( "type", "radio" );
		input.setAttribute( "checked", "checked" );
		input.setAttribute( "name", "t" );

		div.appendChild( input );

		// Support: Safari<=5.1, Android<4.2
		// Older WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

		// Support: IE<=11+
		// Make sure textarea (and checkbox) defaultValue is properly cloned
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
	})();
	var strundefined = typeof undefined;



	support.focusinBubbles = "onfocusin" in window;


	var
		rkeyEvent = /^key/,
		rmouseEvent = /^(?:mouse|pointer|contextmenu)|click/,
		rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
		rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;

	function returnTrue() {
		return true;
	}

	function returnFalse() {
		return false;
	}

	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch ( err ) { }
	}

	/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */
	jQuery.event = {

		global: {},

		add: function( elem, types, handler, data, selector ) {

			var handleObjIn, eventHandle, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = data_priv.get( elem );

			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if ( !elemData ) {
				return;
			}

			// Caller can pass in an object of custom data in lieu of the handler
			if ( handler.handler ) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}

			// Make sure that the handler has a unique ID, used to find/remove it later
			if ( !handler.guid ) {
				handler.guid = jQuery.guid++;
			}

			// Init the element's event structure and main handler, if this is the first
			if ( !(events = elemData.events) ) {
				events = elemData.events = {};
			}
			if ( !(eventHandle = elemData.handle) ) {
				eventHandle = elemData.handle = function( e ) {
					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== strundefined && jQuery.event.triggered !== e.type ?
						jQuery.event.dispatch.apply( elem, arguments ) : undefined;
				};
			}

			// Handle multiple events separated by a space
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[t] ) || [];
				type = origType = tmp[1];
				namespaces = ( tmp[2] || "" ).split( "." ).sort();

				// There *must* be a type, no attaching namespace-only handlers
				if ( !type ) {
					continue;
				}

				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[ type ] || {};

				// If selector defined, determine special event api type, otherwise given type
				type = ( selector ? special.delegateType : special.bindType ) || type;

				// Update special based on newly reset type
				special = jQuery.event.special[ type ] || {};

				// handleObj is passed to all event handlers
				handleObj = jQuery.extend({
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
					namespace: namespaces.join(".")
				}, handleObjIn );

				// Init the event handler queue if we're the first
				if ( !(handlers = events[ type ]) ) {
					handlers = events[ type ] = [];
					handlers.delegateCount = 0;

					// Only use addEventListener if the special events handler returns false
					if ( !special.setup || special.setup.call( elem, data, namespaces, eventHandle ) === false ) {
						if ( elem.addEventListener ) {
							elem.addEventListener( type, eventHandle, false );
						}
					}
				}

				if ( special.add ) {
					special.add.call( elem, handleObj );

					if ( !handleObj.handler.guid ) {
						handleObj.handler.guid = handler.guid;
					}
				}

				// Add to the element's handler list, delegates in front
				if ( selector ) {
					handlers.splice( handlers.delegateCount++, 0, handleObj );
				} else {
					handlers.push( handleObj );
				}

				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[ type ] = true;
			}

		},

		// Detach an event or set of events from an element
		remove: function( elem, types, handler, selector, mappedTypes ) {

			var j, origCount, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = data_priv.hasData( elem ) && data_priv.get( elem );

			if ( !elemData || !(events = elemData.events) ) {
				return;
			}

			// Once for each type.namespace in types; type may be omitted
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[t] ) || [];
				type = origType = tmp[1];
				namespaces = ( tmp[2] || "" ).split( "." ).sort();

				// Unbind all events (on this namespace, if provided) for the element
				if ( !type ) {
					for ( type in events ) {
						jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
					}
					continue;
				}

				special = jQuery.event.special[ type ] || {};
				type = ( selector ? special.delegateType : special.bindType ) || type;
				handlers = events[ type ] || [];
				tmp = tmp[2] && new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" );

				// Remove matching events
				origCount = j = handlers.length;
				while ( j-- ) {
					handleObj = handlers[ j ];

					if ( ( mappedTypes || origType === handleObj.origType ) &&
						( !handler || handler.guid === handleObj.guid ) &&
						( !tmp || tmp.test( handleObj.namespace ) ) &&
						( !selector || selector === handleObj.selector || selector === "**" && handleObj.selector ) ) {
						handlers.splice( j, 1 );

						if ( handleObj.selector ) {
							handlers.delegateCount--;
						}
						if ( special.remove ) {
							special.remove.call( elem, handleObj );
						}
					}
				}

				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if ( origCount && !handlers.length ) {
					if ( !special.teardown || special.teardown.call( elem, namespaces, elemData.handle ) === false ) {
						jQuery.removeEvent( elem, type, elemData.handle );
					}

					delete events[ type ];
				}
			}

			// Remove the expando if it's no longer used
			if ( jQuery.isEmptyObject( events ) ) {
				delete elemData.handle;
				data_priv.remove( elem, "events" );
			}
		},

		trigger: function( event, data, elem, onlyHandlers ) {

			var i, cur, tmp, bubbleType, ontype, handle, special,
				eventPath = [ elem || document ],
				type = hasOwn.call( event, "type" ) ? event.type : event,
				namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split(".") : [];

			cur = tmp = elem = elem || document;

			// Don't do events on text and comment nodes
			if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
				return;
			}

			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
				return;
			}

			if ( type.indexOf(".") >= 0 ) {
				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split(".");
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf(":") < 0 && "on" + type;

			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[ jQuery.expando ] ?
				event :
				new jQuery.Event( type, typeof event === "object" && event );

			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join(".");
			event.namespace_re = event.namespace ?
				new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" ) :
				null;

			// Clean up the event in case it is being reused
			event.result = undefined;
			if ( !event.target ) {
				event.target = elem;
			}

			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ?
				[ event ] :
				jQuery.makeArray( data, [ event ] );

			// Allow special events to draw outside the lines
			special = jQuery.event.special[ type ] || {};
			if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
				return;
			}

			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

				bubbleType = special.delegateType || type;
				if ( !rfocusMorph.test( bubbleType + type ) ) {
					cur = cur.parentNode;
				}
				for ( ; cur; cur = cur.parentNode ) {
					eventPath.push( cur );
					tmp = cur;
				}

				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if ( tmp === (elem.ownerDocument || document) ) {
					eventPath.push( tmp.defaultView || tmp.parentWindow || window );
				}
			}

			// Fire handlers on the event path
			i = 0;
			while ( (cur = eventPath[i++]) && !event.isPropagationStopped() ) {

				event.type = i > 1 ?
					bubbleType :
					special.bindType || type;

				// jQuery handler
				handle = ( data_priv.get( cur, "events" ) || {} )[ event.type ] && data_priv.get( cur, "handle" );
				if ( handle ) {
					handle.apply( cur, data );
				}

				// Native handler
				handle = ontype && cur[ ontype ];
				if ( handle && handle.apply && jQuery.acceptData( cur ) ) {
					event.result = handle.apply( cur, data );
					if ( event.result === false ) {
						event.preventDefault();
					}
				}
			}
			event.type = type;

			// If nobody prevented the default action, do it now
			if ( !onlyHandlers && !event.isDefaultPrevented() ) {

				if ( (!special._default || special._default.apply( eventPath.pop(), data ) === false) &&
					jQuery.acceptData( elem ) ) {

					// Call a native DOM method on the target with the same name name as the event.
					// Don't do default actions on window, that's where global variables be (#6170)
					if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ ontype ];

						if ( tmp ) {
							elem[ ontype ] = null;
						}

						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;
						elem[ type ]();
						jQuery.event.triggered = undefined;

						if ( tmp ) {
							elem[ ontype ] = tmp;
						}
					}
				}
			}

			return event.result;
		},

		dispatch: function( event ) {

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( event );

			var i, j, ret, matched, handleObj,
				handlerQueue = [],
				args = slice.call( arguments ),
				handlers = ( data_priv.get( this, "events" ) || {} )[ event.type ] || [],
				special = jQuery.event.special[ event.type ] || {};

			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[0] = event;
			event.delegateTarget = this;

			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
				return;
			}

			// Determine handlers
			handlerQueue = jQuery.event.handlers.call( this, event, handlers );

			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ( (matched = handlerQueue[ i++ ]) && !event.isPropagationStopped() ) {
				event.currentTarget = matched.elem;

				j = 0;
				while ( (handleObj = matched.handlers[ j++ ]) && !event.isImmediatePropagationStopped() ) {

					// Triggered event must either 1) have no namespace, or 2) have namespace(s)
					// a subset or equal to those in the bound event (both can have no namespace).
					if ( !event.namespace_re || event.namespace_re.test( handleObj.namespace ) ) {

						event.handleObj = handleObj;
						event.data = handleObj.data;

						ret = ( (jQuery.event.special[ handleObj.origType ] || {}).handle || handleObj.handler )
								.apply( matched.elem, args );

						if ( ret !== undefined ) {
							if ( (event.result = ret) === false ) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}

			// Call the postDispatch hook for the mapped type
			if ( special.postDispatch ) {
				special.postDispatch.call( this, event );
			}

			return event.result;
		},

		handlers: function( event, handlers ) {
			var i, matches, sel, handleObj,
				handlerQueue = [],
				delegateCount = handlers.delegateCount,
				cur = event.target;

			// Find delegate handlers
			// Black-hole SVG <use> instance trees (#13180)
			// Avoid non-left-click bubbling in Firefox (#3861)
			if ( delegateCount && cur.nodeType && (!event.button || event.type !== "click") ) {

				for ( ; cur !== this; cur = cur.parentNode || this ) {

					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if ( cur.disabled !== true || event.type !== "click" ) {
						matches = [];
						for ( i = 0; i < delegateCount; i++ ) {
							handleObj = handlers[ i ];

							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";

							if ( matches[ sel ] === undefined ) {
								matches[ sel ] = handleObj.needsContext ?
									jQuery( sel, this ).index( cur ) >= 0 :
									jQuery.find( sel, this, null, [ cur ] ).length;
							}
							if ( matches[ sel ] ) {
								matches.push( handleObj );
							}
						}
						if ( matches.length ) {
							handlerQueue.push({ elem: cur, handlers: matches });
						}
					}
				}
			}

			// Add the remaining (directly-bound) handlers
			if ( delegateCount < handlers.length ) {
				handlerQueue.push({ elem: this, handlers: handlers.slice( delegateCount ) });
			}

			return handlerQueue;
		},

		// Includes some event props shared by KeyEvent and MouseEvent
		props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),

		fixHooks: {},

		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function( event, original ) {

				// Add which for key events
				if ( event.which == null ) {
					event.which = original.charCode != null ? original.charCode : original.keyCode;
				}

				return event;
			}
		},

		mouseHooks: {
			props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function( event, original ) {
				var eventDoc, doc, body,
					button = original.button;

				// Calculate pageX/Y if missing and clientX/Y available
				if ( event.pageX == null && original.clientX != null ) {
					eventDoc = event.target.ownerDocument || document;
					doc = eventDoc.documentElement;
					body = eventDoc.body;

					event.pageX = original.clientX + ( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) - ( doc && doc.clientLeft || body && body.clientLeft || 0 );
					event.pageY = original.clientY + ( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) - ( doc && doc.clientTop  || body && body.clientTop  || 0 );
				}

				// Add which for click: 1 === left; 2 === middle; 3 === right
				// Note: button is not normalized, so don't use it
				if ( !event.which && button !== undefined ) {
					event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
				}

				return event;
			}
		},

		fix: function( event ) {
			if ( event[ jQuery.expando ] ) {
				return event;
			}

			// Create a writable copy of the event object and normalize some properties
			var i, prop, copy,
				type = event.type,
				originalEvent = event,
				fixHook = this.fixHooks[ type ];

			if ( !fixHook ) {
				this.fixHooks[ type ] = fixHook =
					rmouseEvent.test( type ) ? this.mouseHooks :
					rkeyEvent.test( type ) ? this.keyHooks :
					{};
			}
			copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

			event = new jQuery.Event( originalEvent );

			i = copy.length;
			while ( i-- ) {
				prop = copy[ i ];
				event[ prop ] = originalEvent[ prop ];
			}

			// Support: Cordova 2.5 (WebKit) (#13255)
			// All events should have a target; Cordova deviceready doesn't
			if ( !event.target ) {
				event.target = document;
			}

			// Support: Safari 6.0+, Chrome<28
			// Target should not be a text node (#504, #13143)
			if ( event.target.nodeType === 3 ) {
				event.target = event.target.parentNode;
			}

			return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
		},

		special: {
			load: {
				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			focus: {
				// Fire native event if possible so blur/focus sequence is correct
				trigger: function() {
					if ( this !== safeActiveElement() && this.focus ) {
						this.focus();
						return false;
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if ( this === safeActiveElement() && this.blur ) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {
				// For checkbox, fire native event so checked state will be right
				trigger: function() {
					if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
						this.click();
						return false;
					}
				},

				// For cross-browser consistency, don't fire native .click() on links
				_default: function( event ) {
					return jQuery.nodeName( event.target, "a" );
				}
			},

			beforeunload: {
				postDispatch: function( event ) {

					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if ( event.result !== undefined && event.originalEvent ) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		},

		simulate: function( type, elem, event, bubble ) {
			// Piggyback on a donor event to simulate a different one.
			// Fake originalEvent to avoid donor's stopPropagation, but if the
			// simulated event prevents default then we do the same on the donor.
			var e = jQuery.extend(
				new jQuery.Event(),
				event,
				{
					type: type,
					isSimulated: true,
					originalEvent: {}
				}
			);
			if ( bubble ) {
				jQuery.event.trigger( e, null, elem );
			} else {
				jQuery.event.dispatch.call( elem, e );
			}
			if ( e.isDefaultPrevented() ) {
				event.preventDefault();
			}
		}
	};

	jQuery.removeEvent = function( elem, type, handle ) {
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle, false );
		}
	};

	jQuery.Event = function( src, props ) {
		// Allow instantiation without the 'new' keyword
		if ( !(this instanceof jQuery.Event) ) {
			return new jQuery.Event( src, props );
		}

		// Event object
		if ( src && src.type ) {
			this.originalEvent = src;
			this.type = src.type;

			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented ||
					src.defaultPrevented === undefined &&
					// Support: Android<4.0
					src.returnValue === false ?
				returnTrue :
				returnFalse;

		// Event type
		} else {
			this.type = src;
		}

		// Put explicitly provided properties onto the event object
		if ( props ) {
			jQuery.extend( this, props );
		}

		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || jQuery.now();

		// Mark it as fixed
		this[ jQuery.expando ] = true;
	};

	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,

		preventDefault: function() {
			var e = this.originalEvent;

			this.isDefaultPrevented = returnTrue;

			if ( e && e.preventDefault ) {
				e.preventDefault();
			}
		},
		stopPropagation: function() {
			var e = this.originalEvent;

			this.isPropagationStopped = returnTrue;

			if ( e && e.stopPropagation ) {
				e.stopPropagation();
			}
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;

			this.isImmediatePropagationStopped = returnTrue;

			if ( e && e.stopImmediatePropagation ) {
				e.stopImmediatePropagation();
			}

			this.stopPropagation();
		}
	};

	// Create mouseenter/leave events using mouseover/out and event-time checks
	// Support: Chrome 15+
	jQuery.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function( orig, fix ) {
		jQuery.event.special[ orig ] = {
			delegateType: fix,
			bindType: fix,

			handle: function( event ) {
				var ret,
					target = this,
					related = event.relatedTarget,
					handleObj = event.handleObj;

				// For mousenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if ( !related || (related !== target && !jQuery.contains( target, related )) ) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply( this, arguments );
					event.type = fix;
				}
				return ret;
			}
		};
	});

	// Support: Firefox, Chrome, Safari
	// Create "bubbling" focus and blur events
	if ( !support.focusinBubbles ) {
		jQuery.each({ focus: "focusin", blur: "focusout" }, function( orig, fix ) {

			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function( event ) {
					jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ), true );
				};

			jQuery.event.special[ fix ] = {
				setup: function() {
					var doc = this.ownerDocument || this,
						attaches = data_priv.access( doc, fix );

					if ( !attaches ) {
						doc.addEventListener( orig, handler, true );
					}
					data_priv.access( doc, fix, ( attaches || 0 ) + 1 );
				},
				teardown: function() {
					var doc = this.ownerDocument || this,
						attaches = data_priv.access( doc, fix ) - 1;

					if ( !attaches ) {
						doc.removeEventListener( orig, handler, true );
						data_priv.remove( doc, fix );

					} else {
						data_priv.access( doc, fix, attaches );
					}
				}
			};
		});
	}

	jQuery.fn.extend({

		on: function( types, selector, data, fn, /*INTERNAL*/ one ) {
			var origFn, type;

			// Types can be a map of types/handlers
			if ( typeof types === "object" ) {
				// ( types-Object, selector, data )
				if ( typeof selector !== "string" ) {
					// ( types-Object, data )
					data = data || selector;
					selector = undefined;
				}
				for ( type in types ) {
					this.on( type, selector, data, types[ type ], one );
				}
				return this;
			}

			if ( data == null && fn == null ) {
				// ( types, fn )
				fn = selector;
				data = selector = undefined;
			} else if ( fn == null ) {
				if ( typeof selector === "string" ) {
					// ( types, selector, fn )
					fn = data;
					data = undefined;
				} else {
					// ( types, data, fn )
					fn = data;
					data = selector;
					selector = undefined;
				}
			}
			if ( fn === false ) {
				fn = returnFalse;
			} else if ( !fn ) {
				return this;
			}

			if ( one === 1 ) {
				origFn = fn;
				fn = function( event ) {
					// Can use an empty set, since event contains the info
					jQuery().off( event );
					return origFn.apply( this, arguments );
				};
				// Use same guid so caller can remove using origFn
				fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
			}
			return this.each( function() {
				jQuery.event.add( this, types, fn, data, selector );
			});
		},
		one: function( types, selector, data, fn ) {
			return this.on( types, selector, data, fn, 1 );
		},
		off: function( types, selector, fn ) {
			var handleObj, type;
			if ( types && types.preventDefault && types.handleObj ) {
				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery( types.delegateTarget ).off(
					handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
					handleObj.selector,
					handleObj.handler
				);
				return this;
			}
			if ( typeof types === "object" ) {
				// ( types-object [, selector] )
				for ( type in types ) {
					this.off( type, selector, types[ type ] );
				}
				return this;
			}
			if ( selector === false || typeof selector === "function" ) {
				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if ( fn === false ) {
				fn = returnFalse;
			}
			return this.each(function() {
				jQuery.event.remove( this, types, fn, selector );
			});
		},

		trigger: function( type, data ) {
			return this.each(function() {
				jQuery.event.trigger( type, data, this );
			});
		},
		triggerHandler: function( type, data ) {
			var elem = this[0];
			if ( elem ) {
				return jQuery.event.trigger( type, data, elem, true );
			}
		}
	});


	var
		rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		rtagName = /<([\w:]+)/,
		rhtml = /<|&#?\w+;/,
		rnoInnerhtml = /<(?:script|style|link)/i,
		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rscriptType = /^$|\/(?:java|ecma)script/i,
		rscriptTypeMasked = /^true\/(.*)/,
		rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,

		// We have to close these tags to support XHTML (#13200)
		wrapMap = {

			// Support: IE9
			option: [ 1, "<select multiple='multiple'>", "</select>" ],

			thead: [ 1, "<table>", "</table>" ],
			col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
			tr: [ 2, "<table><tbody>", "</tbody></table>" ],
			td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

			_default: [ 0, "", "" ]
		};

	// Support: IE9
	wrapMap.optgroup = wrapMap.option;

	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;

	// Support: 1.x compatibility
	// Manipulating tables requires a tbody
	function manipulationTarget( elem, content ) {
		return jQuery.nodeName( elem, "table" ) &&
			jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ?

			elem.getElementsByTagName("tbody")[0] ||
				elem.appendChild( elem.ownerDocument.createElement("tbody") ) :
			elem;
	}

	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript( elem ) {
		elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
		return elem;
	}
	function restoreScript( elem ) {
		var match = rscriptTypeMasked.exec( elem.type );

		if ( match ) {
			elem.type = match[ 1 ];
		} else {
			elem.removeAttribute("type");
		}

		return elem;
	}

	// Mark scripts as having already been evaluated
	function setGlobalEval( elems, refElements ) {
		var i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			data_priv.set(
				elems[ i ], "globalEval", !refElements || data_priv.get( refElements[ i ], "globalEval" )
			);
		}
	}

	function cloneCopyEvent( src, dest ) {
		var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

		if ( dest.nodeType !== 1 ) {
			return;
		}

		// 1. Copy private data: events, handlers, etc.
		if ( data_priv.hasData( src ) ) {
			pdataOld = data_priv.access( src );
			pdataCur = data_priv.set( dest, pdataOld );
			events = pdataOld.events;

			if ( events ) {
				delete pdataCur.handle;
				pdataCur.events = {};

				for ( type in events ) {
					for ( i = 0, l = events[ type ].length; i < l; i++ ) {
						jQuery.event.add( dest, type, events[ type ][ i ] );
					}
				}
			}
		}

		// 2. Copy user data
		if ( data_user.hasData( src ) ) {
			udataOld = data_user.access( src );
			udataCur = jQuery.extend( {}, udataOld );

			data_user.set( dest, udataCur );
		}
	}

	function getAll( context, tag ) {
		var ret = context.getElementsByTagName ? context.getElementsByTagName( tag || "*" ) :
				context.querySelectorAll ? context.querySelectorAll( tag || "*" ) :
				[];

		return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
			jQuery.merge( [ context ], ret ) :
			ret;
	}

	// Fix IE bugs, see support tests
	function fixInput( src, dest ) {
		var nodeName = dest.nodeName.toLowerCase();

		// Fails to persist the checked state of a cloned checkbox or radio button.
		if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
			dest.checked = src.checked;

		// Fails to return the selected option to the default selected state when cloning options
		} else if ( nodeName === "input" || nodeName === "textarea" ) {
			dest.defaultValue = src.defaultValue;
		}
	}

	jQuery.extend({
		clone: function( elem, dataAndEvents, deepDataAndEvents ) {
			var i, l, srcElements, destElements,
				clone = elem.cloneNode( true ),
				inPage = jQuery.contains( elem.ownerDocument, elem );

			// Fix IE cloning issues
			if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
					!jQuery.isXMLDoc( elem ) ) {

				// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
				destElements = getAll( clone );
				srcElements = getAll( elem );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					fixInput( srcElements[ i ], destElements[ i ] );
				}
			}

			// Copy the events from the original to the clone
			if ( dataAndEvents ) {
				if ( deepDataAndEvents ) {
					srcElements = srcElements || getAll( elem );
					destElements = destElements || getAll( clone );

					for ( i = 0, l = srcElements.length; i < l; i++ ) {
						cloneCopyEvent( srcElements[ i ], destElements[ i ] );
					}
				} else {
					cloneCopyEvent( elem, clone );
				}
			}

			// Preserve script evaluation history
			destElements = getAll( clone, "script" );
			if ( destElements.length > 0 ) {
				setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
			}

			// Return the cloned set
			return clone;
		},

		buildFragment: function( elems, context, scripts, selection ) {
			var elem, tmp, tag, wrap, contains, j,
				fragment = context.createDocumentFragment(),
				nodes = [],
				i = 0,
				l = elems.length;

			for ( ; i < l; i++ ) {
				elem = elems[ i ];

				if ( elem || elem === 0 ) {

					// Add nodes directly
					if ( jQuery.type( elem ) === "object" ) {
						// Support: QtWebKit, PhantomJS
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

					// Convert non-html into a text node
					} else if ( !rhtml.test( elem ) ) {
						nodes.push( context.createTextNode( elem ) );

					// Convert html into DOM nodes
					} else {
						tmp = tmp || fragment.appendChild( context.createElement("div") );

						// Deserialize a standard representation
						tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
						wrap = wrapMap[ tag ] || wrapMap._default;
						tmp.innerHTML = wrap[ 1 ] + elem.replace( rxhtmlTag, "<$1></$2>" ) + wrap[ 2 ];

						// Descend through wrappers to the right content
						j = wrap[ 0 ];
						while ( j-- ) {
							tmp = tmp.lastChild;
						}

						// Support: QtWebKit, PhantomJS
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( nodes, tmp.childNodes );

						// Remember the top-level container
						tmp = fragment.firstChild;

						// Ensure the created nodes are orphaned (#12392)
						tmp.textContent = "";
					}
				}
			}

			// Remove wrapper from fragment
			fragment.textContent = "";

			i = 0;
			while ( (elem = nodes[ i++ ]) ) {

				// #4087 - If origin and destination elements are the same, and this is
				// that element, do not do anything
				if ( selection && jQuery.inArray( elem, selection ) !== -1 ) {
					continue;
				}

				contains = jQuery.contains( elem.ownerDocument, elem );

				// Append to fragment
				tmp = getAll( fragment.appendChild( elem ), "script" );

				// Preserve script evaluation history
				if ( contains ) {
					setGlobalEval( tmp );
				}

				// Capture executables
				if ( scripts ) {
					j = 0;
					while ( (elem = tmp[ j++ ]) ) {
						if ( rscriptType.test( elem.type || "" ) ) {
							scripts.push( elem );
						}
					}
				}
			}

			return fragment;
		},

		cleanData: function( elems ) {
			var data, elem, type, key,
				special = jQuery.event.special,
				i = 0;

			for ( ; (elem = elems[ i ]) !== undefined; i++ ) {
				if ( jQuery.acceptData( elem ) ) {
					key = elem[ data_priv.expando ];

					if ( key && (data = data_priv.cache[ key ]) ) {
						if ( data.events ) {
							for ( type in data.events ) {
								if ( special[ type ] ) {
									jQuery.event.remove( elem, type );

								// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent( elem, type, data.handle );
								}
							}
						}
						if ( data_priv.cache[ key ] ) {
							// Discard any remaining `private` data
							delete data_priv.cache[ key ];
						}
					}
				}
				// Discard any remaining `user` data
				delete data_user.cache[ elem[ data_user.expando ] ];
			}
		}
	});

	jQuery.fn.extend({
		text: function( value ) {
			return access( this, function( value ) {
				return value === undefined ?
					jQuery.text( this ) :
					this.empty().each(function() {
						if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
							this.textContent = value;
						}
					});
			}, null, value, arguments.length );
		},

		append: function() {
			return this.domManip( arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.appendChild( elem );
				}
			});
		},

		prepend: function() {
			return this.domManip( arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.insertBefore( elem, target.firstChild );
				}
			});
		},

		before: function() {
			return this.domManip( arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this );
				}
			});
		},

		after: function() {
			return this.domManip( arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this.nextSibling );
				}
			});
		},

		remove: function( selector, keepData /* Internal Use Only */ ) {
			var elem,
				elems = selector ? jQuery.filter( selector, this ) : this,
				i = 0;

			for ( ; (elem = elems[i]) != null; i++ ) {
				if ( !keepData && elem.nodeType === 1 ) {
					jQuery.cleanData( getAll( elem ) );
				}

				if ( elem.parentNode ) {
					if ( keepData && jQuery.contains( elem.ownerDocument, elem ) ) {
						setGlobalEval( getAll( elem, "script" ) );
					}
					elem.parentNode.removeChild( elem );
				}
			}

			return this;
		},

		empty: function() {
			var elem,
				i = 0;

			for ( ; (elem = this[i]) != null; i++ ) {
				if ( elem.nodeType === 1 ) {

					// Prevent memory leaks
					jQuery.cleanData( getAll( elem, false ) );

					// Remove any remaining nodes
					elem.textContent = "";
				}
			}

			return this;
		},

		clone: function( dataAndEvents, deepDataAndEvents ) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

			return this.map(function() {
				return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
			});
		},

		html: function( value ) {
			return access( this, function( value ) {
				var elem = this[ 0 ] || {},
					i = 0,
					l = this.length;

				if ( value === undefined && elem.nodeType === 1 ) {
					return elem.innerHTML;
				}

				// See if we can take a shortcut and just use innerHTML
				if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
					!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

					value = value.replace( rxhtmlTag, "<$1></$2>" );

					try {
						for ( ; i < l; i++ ) {
							elem = this[ i ] || {};

							// Remove element nodes and prevent memory leaks
							if ( elem.nodeType === 1 ) {
								jQuery.cleanData( getAll( elem, false ) );
								elem.innerHTML = value;
							}
						}

						elem = 0;

					// If using innerHTML throws an exception, use the fallback method
					} catch( e ) {}
				}

				if ( elem ) {
					this.empty().append( value );
				}
			}, null, value, arguments.length );
		},

		replaceWith: function() {
			var arg = arguments[ 0 ];

			// Make the changes, replacing each context element with the new content
			this.domManip( arguments, function( elem ) {
				arg = this.parentNode;

				jQuery.cleanData( getAll( this ) );

				if ( arg ) {
					arg.replaceChild( elem, this );
				}
			});

			// Force removal if there was no new content (e.g., from empty arguments)
			return arg && (arg.length || arg.nodeType) ? this : this.remove();
		},

		detach: function( selector ) {
			return this.remove( selector, true );
		},

		domManip: function( args, callback ) {

			// Flatten any nested arrays
			args = concat.apply( [], args );

			var fragment, first, scripts, hasScripts, node, doc,
				i = 0,
				l = this.length,
				set = this,
				iNoClone = l - 1,
				value = args[ 0 ],
				isFunction = jQuery.isFunction( value );

			// We can't cloneNode fragments that contain checked, in WebKit
			if ( isFunction ||
					( l > 1 && typeof value === "string" &&
						!support.checkClone && rchecked.test( value ) ) ) {
				return this.each(function( index ) {
					var self = set.eq( index );
					if ( isFunction ) {
						args[ 0 ] = value.call( this, index, self.html() );
					}
					self.domManip( args, callback );
				});
			}

			if ( l ) {
				fragment = jQuery.buildFragment( args, this[ 0 ].ownerDocument, false, this );
				first = fragment.firstChild;

				if ( fragment.childNodes.length === 1 ) {
					fragment = first;
				}

				if ( first ) {
					scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
					hasScripts = scripts.length;

					// Use the original fragment for the last item instead of the first because it can end up
					// being emptied incorrectly in certain situations (#8070).
					for ( ; i < l; i++ ) {
						node = fragment;

						if ( i !== iNoClone ) {
							node = jQuery.clone( node, true, true );

							// Keep references to cloned scripts for later restoration
							if ( hasScripts ) {
								// Support: QtWebKit
								// jQuery.merge because push.apply(_, arraylike) throws
								jQuery.merge( scripts, getAll( node, "script" ) );
							}
						}

						callback.call( this[ i ], node, i );
					}

					if ( hasScripts ) {
						doc = scripts[ scripts.length - 1 ].ownerDocument;

						// Reenable scripts
						jQuery.map( scripts, restoreScript );

						// Evaluate executable scripts on first document insertion
						for ( i = 0; i < hasScripts; i++ ) {
							node = scripts[ i ];
							if ( rscriptType.test( node.type || "" ) &&
								!data_priv.access( node, "globalEval" ) && jQuery.contains( doc, node ) ) {

								if ( node.src ) {
									// Optional AJAX dependency, but won't run scripts if not present
									if ( jQuery._evalUrl ) {
										jQuery._evalUrl( node.src );
									}
								} else {
									jQuery.globalEval( node.textContent.replace( rcleanScript, "" ) );
								}
							}
						}
					}
				}
			}

			return this;
		}
	});

	jQuery.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function( name, original ) {
		jQuery.fn[ name ] = function( selector ) {
			var elems,
				ret = [],
				insert = jQuery( selector ),
				last = insert.length - 1,
				i = 0;

			for ( ; i <= last; i++ ) {
				elems = i === last ? this : this.clone( true );
				jQuery( insert[ i ] )[ original ]( elems );

				// Support: QtWebKit
				// .get() because push.apply(_, arraylike) throws
				push.apply( ret, elems.get() );
			}

			return this.pushStack( ret );
		};
	});


	var iframe,
		elemdisplay = {};

	/**
	 * Retrieve the actual display of a element
	 * @param {String} name nodeName of the element
	 * @param {Object} doc Document object
	 */
	// Called only from within defaultDisplay
	function actualDisplay( name, doc ) {
		var style,
			elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),

			// getDefaultComputedStyle might be reliably used only on attached element
			display = window.getDefaultComputedStyle && ( style = window.getDefaultComputedStyle( elem[ 0 ] ) ) ?

				// Use of this method is a temporary fix (more like optimization) until something better comes along,
				// since it was removed from specification and supported only in FF
				style.display : jQuery.css( elem[ 0 ], "display" );

		// We don't have any data stored on the element,
		// so use "detach" method as fast way to get rid of the element
		elem.detach();

		return display;
	}

	/**
	 * Try to determine the default display value of an element
	 * @param {String} nodeName
	 */
	function defaultDisplay( nodeName ) {
		var doc = document,
			display = elemdisplay[ nodeName ];

		if ( !display ) {
			display = actualDisplay( nodeName, doc );

			// If the simple way fails, read from inside an iframe
			if ( display === "none" || !display ) {

				// Use the already-created iframe if possible
				iframe = (iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" )).appendTo( doc.documentElement );

				// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
				doc = iframe[ 0 ].contentDocument;

				// Support: IE
				doc.write();
				doc.close();

				display = actualDisplay( nodeName, doc );
				iframe.detach();
			}

			// Store the correct default display
			elemdisplay[ nodeName ] = display;
		}

		return display;
	}
	var rmargin = (/^margin/);

	var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

	var getStyles = function( elem ) {
			// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
			// IE throws on elements created in popups
			// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
			if ( elem.ownerDocument.defaultView.opener ) {
				return elem.ownerDocument.defaultView.getComputedStyle( elem, null );
			}

			return window.getComputedStyle( elem, null );
		};



	function curCSS( elem, name, computed ) {
		var width, minWidth, maxWidth, ret,
			style = elem.style;

		computed = computed || getStyles( elem );

		// Support: IE9
		// getPropertyValue is only needed for .css('filter') (#12537)
		if ( computed ) {
			ret = computed.getPropertyValue( name ) || computed[ name ];
		}

		if ( computed ) {

			if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
				ret = jQuery.style( elem, name );
			}

			// Support: iOS < 6
			// A tribute to the "awesome hack by Dean Edwards"
			// iOS < 6 (at least) returns percentage for a larger set of values, but width seems to be reliably pixels
			// this is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values
			if ( rnumnonpx.test( ret ) && rmargin.test( name ) ) {

				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;

				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;

				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}

		return ret !== undefined ?
			// Support: IE
			// IE returns zIndex value as an integer.
			ret + "" :
			ret;
	}


	function addGetHookIf( conditionFn, hookFn ) {
		// Define the hook, we'll check on the first run if it's really needed.
		return {
			get: function() {
				if ( conditionFn() ) {
					// Hook not needed (or it's not possible to use it due
					// to missing dependency), remove it.
					delete this.get;
					return;
				}

				// Hook needed; redefine it so that the support test is not executed again.
				return (this.get = hookFn).apply( this, arguments );
			}
		};
	}


	(function() {
		var pixelPositionVal, boxSizingReliableVal,
			docElem = document.documentElement,
			container = document.createElement( "div" ),
			div = document.createElement( "div" );

		if ( !div.style ) {
			return;
		}

		// Support: IE9-11+
		// Style of cloned element affects source element cloned (#8908)
		div.style.backgroundClip = "content-box";
		div.cloneNode( true ).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";

		container.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;" +
			"position:absolute";
		container.appendChild( div );

		// Executing both pixelPosition & boxSizingReliable tests require only one layout
		// so they're executed at the same time to save the second computation.
		function computePixelPositionAndBoxSizingReliable() {
			div.style.cssText =
				// Support: Firefox<29, Android 2.3
				// Vendor-prefix box-sizing
				"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;" +
				"box-sizing:border-box;display:block;margin-top:1%;top:1%;" +
				"border:1px;padding:1px;width:4px;position:absolute";
			div.innerHTML = "";
			docElem.appendChild( container );

			var divStyle = window.getComputedStyle( div, null );
			pixelPositionVal = divStyle.top !== "1%";
			boxSizingReliableVal = divStyle.width === "4px";

			docElem.removeChild( container );
		}

		// Support: node.js jsdom
		// Don't assume that getComputedStyle is a property of the global object
		if ( window.getComputedStyle ) {
			jQuery.extend( support, {
				pixelPosition: function() {

					// This test is executed only once but we still do memoizing
					// since we can use the boxSizingReliable pre-computing.
					// No need to check if the test was already performed, though.
					computePixelPositionAndBoxSizingReliable();
					return pixelPositionVal;
				},
				boxSizingReliable: function() {
					if ( boxSizingReliableVal == null ) {
						computePixelPositionAndBoxSizingReliable();
					}
					return boxSizingReliableVal;
				},
				reliableMarginRight: function() {

					// Support: Android 2.3
					// Check if div with explicit width and no margin-right incorrectly
					// gets computed margin-right based on width of container. (#3333)
					// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
					// This support function is only executed once so no memoizing is needed.
					var ret,
						marginDiv = div.appendChild( document.createElement( "div" ) );

					// Reset CSS: box-sizing; display; margin; border; padding
					marginDiv.style.cssText = div.style.cssText =
						// Support: Firefox<29, Android 2.3
						// Vendor-prefix box-sizing
						"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" +
						"box-sizing:content-box;display:block;margin:0;border:0;padding:0";
					marginDiv.style.marginRight = marginDiv.style.width = "0";
					div.style.width = "1px";
					docElem.appendChild( container );

					ret = !parseFloat( window.getComputedStyle( marginDiv, null ).marginRight );

					docElem.removeChild( container );
					div.removeChild( marginDiv );

					return ret;
				}
			});
		}
	})();


	// A method for quickly swapping in/out CSS properties to get correct calculations.
	jQuery.swap = function( elem, options, callback, args ) {
		var ret, name,
			old = {};

		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}

		ret = callback.apply( elem, args || [] );

		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}

		return ret;
	};


	var
		// Swappable if display is none or starts with table except "table", "table-cell", or "table-caption"
		// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,
		rnumsplit = new RegExp( "^(" + pnum + ")(.*)$", "i" ),
		rrelNum = new RegExp( "^([+-])=(" + pnum + ")", "i" ),

		cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		},

		cssPrefixes = [ "Webkit", "O", "Moz", "ms" ];

	// Return a css property mapped to a potentially vendor prefixed property
	function vendorPropName( style, name ) {

		// Shortcut for names that are not vendor prefixed
		if ( name in style ) {
			return name;
		}

		// Check for vendor prefixed names
		var capName = name[0].toUpperCase() + name.slice(1),
			origName = name,
			i = cssPrefixes.length;

		while ( i-- ) {
			name = cssPrefixes[ i ] + capName;
			if ( name in style ) {
				return name;
			}
		}

		return origName;
	}

	function setPositiveNumber( elem, value, subtract ) {
		var matches = rnumsplit.exec( value );
		return matches ?
			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max( 0, matches[ 1 ] - ( subtract || 0 ) ) + ( matches[ 2 ] || "px" ) :
			value;
	}

	function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
		var i = extra === ( isBorderBox ? "border" : "content" ) ?
			// If we already have the right measurement, avoid augmentation
			4 :
			// Otherwise initialize for horizontal or vertical properties
			name === "width" ? 1 : 0,

			val = 0;

		for ( ; i < 4; i += 2 ) {
			// Both box models exclude margin, so add it if we want it
			if ( extra === "margin" ) {
				val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
			}

			if ( isBorderBox ) {
				// border-box includes padding, so remove it if we want content
				if ( extra === "content" ) {
					val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
				}

				// At this point, extra isn't border nor margin, so remove border
				if ( extra !== "margin" ) {
					val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			} else {
				// At this point, extra isn't content, so add padding
				val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

				// At this point, extra isn't content nor padding, so add border
				if ( extra !== "padding" ) {
					val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			}
		}

		return val;
	}

	function getWidthOrHeight( elem, name, extra ) {

		// Start with offset property, which is equivalent to the border-box value
		var valueIsBorderBox = true,
			val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
			styles = getStyles( elem ),
			isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Some non-html elements return undefined for offsetWidth, so check for null/undefined
		// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
		// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
		if ( val <= 0 || val == null ) {
			// Fall back to computed then uncomputed css if necessary
			val = curCSS( elem, name, styles );
			if ( val < 0 || val == null ) {
				val = elem.style[ name ];
			}

			// Computed unit is not pixels. Stop here and return.
			if ( rnumnonpx.test(val) ) {
				return val;
			}

			// Check for style in case a browser which returns unreliable values
			// for getComputedStyle silently falls back to the reliable elem.style
			valueIsBorderBox = isBorderBox &&
				( support.boxSizingReliable() || val === elem.style[ name ] );

			// Normalize "", auto, and prepare for extra
			val = parseFloat( val ) || 0;
		}

		// Use the active box-sizing model to add/subtract irrelevant styles
		return ( val +
			augmentWidthOrHeight(
				elem,
				name,
				extra || ( isBorderBox ? "border" : "content" ),
				valueIsBorderBox,
				styles
			)
		) + "px";
	}

	function showHide( elements, show ) {
		var display, elem, hidden,
			values = [],
			index = 0,
			length = elements.length;

		for ( ; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}

			values[ index ] = data_priv.get( elem, "olddisplay" );
			display = elem.style.display;
			if ( show ) {
				// Reset the inline display of this element to learn if it is
				// being hidden by cascaded rules or not
				if ( !values[ index ] && display === "none" ) {
					elem.style.display = "";
				}

				// Set elements which have been overridden with display: none
				// in a stylesheet to whatever the default browser style is
				// for such an element
				if ( elem.style.display === "" && isHidden( elem ) ) {
					values[ index ] = data_priv.access( elem, "olddisplay", defaultDisplay(elem.nodeName) );
				}
			} else {
				hidden = isHidden( elem );

				if ( display !== "none" || !hidden ) {
					data_priv.set( elem, "olddisplay", hidden ? display : jQuery.css( elem, "display" ) );
				}
			}
		}

		// Set the display of most of the elements in a second loop
		// to avoid the constant reflow
		for ( index = 0; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}
			if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
				elem.style.display = show ? values[ index ] || "" : "none";
			}
		}

		return elements;
	}

	jQuery.extend({

		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function( elem, computed ) {
					if ( computed ) {

						// We should always get a number back from opacity
						var ret = curCSS( elem, "opacity" );
						return ret === "" ? "1" : ret;
					}
				}
			}
		},

		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},

		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {
			"float": "cssFloat"
		},

		// Get and set the style property on a DOM Node
		style: function( elem, name, value, extra ) {

			// Don't set styles on text and comment nodes
			if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
				return;
			}

			// Make sure that we're working with the right name
			var ret, type, hooks,
				origName = jQuery.camelCase( name ),
				style = elem.style;

			name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( style, origName ) );

			// Gets hook for the prefixed version, then unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// Check if we're setting a value
			if ( value !== undefined ) {
				type = typeof value;

				// Convert "+=" or "-=" to relative numbers (#7345)
				if ( type === "string" && (ret = rrelNum.exec( value )) ) {
					value = ( ret[1] + 1 ) * ret[2] + parseFloat( jQuery.css( elem, name ) );
					// Fixes bug #9237
					type = "number";
				}

				// Make sure that null and NaN values aren't set (#7116)
				if ( value == null || value !== value ) {
					return;
				}

				// If a number, add 'px' to the (except for certain CSS properties)
				if ( type === "number" && !jQuery.cssNumber[ origName ] ) {
					value += "px";
				}

				// Support: IE9-11+
				// background-* props affect original clone's values
				if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
					style[ name ] = "inherit";
				}

				// If a hook was provided, use that value, otherwise just set the specified value
				if ( !hooks || !("set" in hooks) || (value = hooks.set( elem, value, extra )) !== undefined ) {
					style[ name ] = value;
				}

			} else {
				// If a hook was provided get the non-computed value from there
				if ( hooks && "get" in hooks && (ret = hooks.get( elem, false, extra )) !== undefined ) {
					return ret;
				}

				// Otherwise just get the value from the style object
				return style[ name ];
			}
		},

		css: function( elem, name, extra, styles ) {
			var val, num, hooks,
				origName = jQuery.camelCase( name );

			// Make sure that we're working with the right name
			name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( elem.style, origName ) );

			// Try prefixed name followed by the unprefixed name
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// If a hook was provided get the computed value from there
			if ( hooks && "get" in hooks ) {
				val = hooks.get( elem, true, extra );
			}

			// Otherwise, if a way to get the computed value exists, use that
			if ( val === undefined ) {
				val = curCSS( elem, name, styles );
			}

			// Convert "normal" to computed value
			if ( val === "normal" && name in cssNormalTransform ) {
				val = cssNormalTransform[ name ];
			}

			// Make numeric if forced or a qualifier was provided and val looks numeric
			if ( extra === "" || extra ) {
				num = parseFloat( val );
				return extra === true || jQuery.isNumeric( num ) ? num || 0 : val;
			}
			return val;
		}
	});

	jQuery.each([ "height", "width" ], function( i, name ) {
		jQuery.cssHooks[ name ] = {
			get: function( elem, computed, extra ) {
				if ( computed ) {

					// Certain elements can have dimension info if we invisibly show them
					// but it must have a current display style that would benefit
					return rdisplayswap.test( jQuery.css( elem, "display" ) ) && elem.offsetWidth === 0 ?
						jQuery.swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, name, extra );
						}) :
						getWidthOrHeight( elem, name, extra );
				}
			},

			set: function( elem, value, extra ) {
				var styles = extra && getStyles( elem );
				return setPositiveNumber( elem, value, extra ?
					augmentWidthOrHeight(
						elem,
						name,
						extra,
						jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
						styles
					) : 0
				);
			}
		};
	});

	// Support: Android 2.3
	jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
		function( elem, computed ) {
			if ( computed ) {
				return jQuery.swap( elem, { "display": "inline-block" },
					curCSS, [ elem, "marginRight" ] );
			}
		}
	);

	// These hooks are used by animate to expand properties
	jQuery.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function( prefix, suffix ) {
		jQuery.cssHooks[ prefix + suffix ] = {
			expand: function( value ) {
				var i = 0,
					expanded = {},

					// Assumes a single number if not a string
					parts = typeof value === "string" ? value.split(" ") : [ value ];

				for ( ; i < 4; i++ ) {
					expanded[ prefix + cssExpand[ i ] + suffix ] =
						parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
				}

				return expanded;
			}
		};

		if ( !rmargin.test( prefix ) ) {
			jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
		}
	});

	jQuery.fn.extend({
		css: function( name, value ) {
			return access( this, function( elem, name, value ) {
				var styles, len,
					map = {},
					i = 0;

				if ( jQuery.isArray( name ) ) {
					styles = getStyles( elem );
					len = name.length;

					for ( ; i < len; i++ ) {
						map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
					}

					return map;
				}

				return value !== undefined ?
					jQuery.style( elem, name, value ) :
					jQuery.css( elem, name );
			}, name, value, arguments.length > 1 );
		},
		show: function() {
			return showHide( this, true );
		},
		hide: function() {
			return showHide( this );
		},
		toggle: function( state ) {
			if ( typeof state === "boolean" ) {
				return state ? this.show() : this.hide();
			}

			return this.each(function() {
				if ( isHidden( this ) ) {
					jQuery( this ).show();
				} else {
					jQuery( this ).hide();
				}
			});
		}
	});


	function Tween( elem, options, prop, end, easing ) {
		return new Tween.prototype.init( elem, options, prop, end, easing );
	}
	jQuery.Tween = Tween;

	Tween.prototype = {
		constructor: Tween,
		init: function( elem, options, prop, end, easing, unit ) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || "swing";
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
		},
		cur: function() {
			var hooks = Tween.propHooks[ this.prop ];

			return hooks && hooks.get ?
				hooks.get( this ) :
				Tween.propHooks._default.get( this );
		},
		run: function( percent ) {
			var eased,
				hooks = Tween.propHooks[ this.prop ];

			if ( this.options.duration ) {
				this.pos = eased = jQuery.easing[ this.easing ](
					percent, this.options.duration * percent, 0, 1, this.options.duration
				);
			} else {
				this.pos = eased = percent;
			}
			this.now = ( this.end - this.start ) * eased + this.start;

			if ( this.options.step ) {
				this.options.step.call( this.elem, this.now, this );
			}

			if ( hooks && hooks.set ) {
				hooks.set( this );
			} else {
				Tween.propHooks._default.set( this );
			}
			return this;
		}
	};

	Tween.prototype.init.prototype = Tween.prototype;

	Tween.propHooks = {
		_default: {
			get: function( tween ) {
				var result;

				if ( tween.elem[ tween.prop ] != null &&
					(!tween.elem.style || tween.elem.style[ tween.prop ] == null) ) {
					return tween.elem[ tween.prop ];
				}

				// Passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails.
				// Simple values such as "10px" are parsed to Float;
				// complex values such as "rotate(1rad)" are returned as-is.
				result = jQuery.css( tween.elem, tween.prop, "" );
				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function( tween ) {
				// Use step hook for back compat.
				// Use cssHook if its there.
				// Use .style if available and use plain properties where available.
				if ( jQuery.fx.step[ tween.prop ] ) {
					jQuery.fx.step[ tween.prop ]( tween );
				} else if ( tween.elem.style && ( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null || jQuery.cssHooks[ tween.prop ] ) ) {
					jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
				} else {
					tween.elem[ tween.prop ] = tween.now;
				}
			}
		}
	};

	// Support: IE9
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function( tween ) {
			if ( tween.elem.nodeType && tween.elem.parentNode ) {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	};

	jQuery.easing = {
		linear: function( p ) {
			return p;
		},
		swing: function( p ) {
			return 0.5 - Math.cos( p * Math.PI ) / 2;
		}
	};

	jQuery.fx = Tween.prototype.init;

	// Back Compat <1.8 extension point
	jQuery.fx.step = {};




	var
		fxNow, timerId,
		rfxtypes = /^(?:toggle|show|hide)$/,
		rfxnum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" ),
		rrun = /queueHooks$/,
		animationPrefilters = [ defaultPrefilter ],
		tweeners = {
			"*": [ function( prop, value ) {
				var tween = this.createTween( prop, value ),
					target = tween.cur(),
					parts = rfxnum.exec( value ),
					unit = parts && parts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

					// Starting value computation is required for potential unit mismatches
					start = ( jQuery.cssNumber[ prop ] || unit !== "px" && +target ) &&
						rfxnum.exec( jQuery.css( tween.elem, prop ) ),
					scale = 1,
					maxIterations = 20;

				if ( start && start[ 3 ] !== unit ) {
					// Trust units reported by jQuery.css
					unit = unit || start[ 3 ];

					// Make sure we update the tween properties later on
					parts = parts || [];

					// Iteratively approximate from a nonzero starting point
					start = +target || 1;

					do {
						// If previous iteration zeroed out, double until we get *something*.
						// Use string for doubling so we don't accidentally see scale as unchanged below
						scale = scale || ".5";

						// Adjust and apply
						start = start / scale;
						jQuery.style( tween.elem, prop, start + unit );

					// Update scale, tolerating zero or NaN from tween.cur(),
					// break the loop if scale is unchanged or perfect, or if we've just had enough
					} while ( scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations );
				}

				// Update tween properties
				if ( parts ) {
					start = tween.start = +start || +target || 0;
					tween.unit = unit;
					// If a +=/-= token was provided, we're doing a relative animation
					tween.end = parts[ 1 ] ?
						start + ( parts[ 1 ] + 1 ) * parts[ 2 ] :
						+parts[ 2 ];
				}

				return tween;
			} ]
		};

	// Animations created synchronously will run synchronously
	function createFxNow() {
		setTimeout(function() {
			fxNow = undefined;
		});
		return ( fxNow = jQuery.now() );
	}

	// Generate parameters to create a standard animation
	function genFx( type, includeWidth ) {
		var which,
			i = 0,
			attrs = { height: type };

		// If we include width, step value is 1 to do all cssExpand values,
		// otherwise step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for ( ; i < 4 ; i += 2 - includeWidth ) {
			which = cssExpand[ i ];
			attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
		}

		if ( includeWidth ) {
			attrs.opacity = attrs.width = type;
		}

		return attrs;
	}

	function createTween( value, prop, animation ) {
		var tween,
			collection = ( tweeners[ prop ] || [] ).concat( tweeners[ "*" ] ),
			index = 0,
			length = collection.length;
		for ( ; index < length; index++ ) {
			if ( (tween = collection[ index ].call( animation, prop, value )) ) {

				// We're done with this property
				return tween;
			}
		}
	}

	function defaultPrefilter( elem, props, opts ) {
		/* jshint validthis: true */
		var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
			anim = this,
			orig = {},
			style = elem.style,
			hidden = elem.nodeType && isHidden( elem ),
			dataShow = data_priv.get( elem, "fxshow" );

		// Handle queue: false promises
		if ( !opts.queue ) {
			hooks = jQuery._queueHooks( elem, "fx" );
			if ( hooks.unqueued == null ) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function() {
					if ( !hooks.unqueued ) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;

			anim.always(function() {
				// Ensure the complete handler is called before this completes
				anim.always(function() {
					hooks.unqueued--;
					if ( !jQuery.queue( elem, "fx" ).length ) {
						hooks.empty.fire();
					}
				});
			});
		}

		// Height/width overflow pass
		if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {
			// Make sure that nothing sneaks out
			// Record all 3 overflow attributes because IE9-10 do not
			// change the overflow attribute when overflowX and
			// overflowY are set to the same value
			opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

			// Set display property to inline-block for height/width
			// animations on inline elements that are having width/height animated
			display = jQuery.css( elem, "display" );

			// Test default display if display is currently "none"
			checkDisplay = display === "none" ?
				data_priv.get( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;

			if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) {
				style.display = "inline-block";
			}
		}

		if ( opts.overflow ) {
			style.overflow = "hidden";
			anim.always(function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			});
		}

		// show/hide pass
		for ( prop in props ) {
			value = props[ prop ];
			if ( rfxtypes.exec( value ) ) {
				delete props[ prop ];
				toggle = toggle || value === "toggle";
				if ( value === ( hidden ? "hide" : "show" ) ) {

					// If there is dataShow left over from a stopped hide or show and we are going to proceed with show, we should pretend to be hidden
					if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
						hidden = true;
					} else {
						continue;
					}
				}
				orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );

			// Any non-fx value stops us from restoring the original display value
			} else {
				display = undefined;
			}
		}

		if ( !jQuery.isEmptyObject( orig ) ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = data_priv.access( elem, "fxshow", {} );
			}

			// Store state if its toggle - enables .stop().toggle() to "reverse"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}
			if ( hidden ) {
				jQuery( elem ).show();
			} else {
				anim.done(function() {
					jQuery( elem ).hide();
				});
			}
			anim.done(function() {
				var prop;

				data_priv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			});
			for ( prop in orig ) {
				tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );

				if ( !( prop in dataShow ) ) {
					dataShow[ prop ] = tween.start;
					if ( hidden ) {
						tween.end = tween.start;
						tween.start = prop === "width" || prop === "height" ? 1 : 0;
					}
				}
			}

		// If this is a noop like .hide().hide(), restore an overwritten display value
		} else if ( (display === "none" ? defaultDisplay( elem.nodeName ) : display) === "inline" ) {
			style.display = display;
		}
	}

	function propFilter( props, specialEasing ) {
		var index, name, easing, value, hooks;

		// camelCase, specialEasing and expand cssHook pass
		for ( index in props ) {
			name = jQuery.camelCase( index );
			easing = specialEasing[ name ];
			value = props[ index ];
			if ( jQuery.isArray( value ) ) {
				easing = value[ 1 ];
				value = props[ index ] = value[ 0 ];
			}

			if ( index !== name ) {
				props[ name ] = value;
				delete props[ index ];
			}

			hooks = jQuery.cssHooks[ name ];
			if ( hooks && "expand" in hooks ) {
				value = hooks.expand( value );
				delete props[ name ];

				// Not quite $.extend, this won't overwrite existing keys.
				// Reusing 'index' because we have the correct "name"
				for ( index in value ) {
					if ( !( index in props ) ) {
						props[ index ] = value[ index ];
						specialEasing[ index ] = easing;
					}
				}
			} else {
				specialEasing[ name ] = easing;
			}
		}
	}

	function Animation( elem, properties, options ) {
		var result,
			stopped,
			index = 0,
			length = animationPrefilters.length,
			deferred = jQuery.Deferred().always( function() {
				// Don't match elem in the :animated selector
				delete tick.elem;
			}),
			tick = function() {
				if ( stopped ) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
					remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),
					// Support: Android 2.3
					// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
					temp = remaining / animation.duration || 0,
					percent = 1 - temp,
					index = 0,
					length = animation.tweens.length;

				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( percent );
				}

				deferred.notifyWith( elem, [ animation, percent, remaining ]);

				if ( percent < 1 && length ) {
					return remaining;
				} else {
					deferred.resolveWith( elem, [ animation ] );
					return false;
				}
			},
			animation = deferred.promise({
				elem: elem,
				props: jQuery.extend( {}, properties ),
				opts: jQuery.extend( true, { specialEasing: {} }, options ),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function( prop, end ) {
					var tween = jQuery.Tween( elem, animation.opts, prop, end,
							animation.opts.specialEasing[ prop ] || animation.opts.easing );
					animation.tweens.push( tween );
					return tween;
				},
				stop: function( gotoEnd ) {
					var index = 0,
						// If we are going to the end, we want to run all the tweens
						// otherwise we skip this part
						length = gotoEnd ? animation.tweens.length : 0;
					if ( stopped ) {
						return this;
					}
					stopped = true;
					for ( ; index < length ; index++ ) {
						animation.tweens[ index ].run( 1 );
					}

					// Resolve when we played the last frame; otherwise, reject
					if ( gotoEnd ) {
						deferred.resolveWith( elem, [ animation, gotoEnd ] );
					} else {
						deferred.rejectWith( elem, [ animation, gotoEnd ] );
					}
					return this;
				}
			}),
			props = animation.props;

		propFilter( props, animation.opts.specialEasing );

		for ( ; index < length ; index++ ) {
			result = animationPrefilters[ index ].call( animation, elem, props, animation.opts );
			if ( result ) {
				return result;
			}
		}

		jQuery.map( props, createTween, animation );

		if ( jQuery.isFunction( animation.opts.start ) ) {
			animation.opts.start.call( elem, animation );
		}

		jQuery.fx.timer(
			jQuery.extend( tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			})
		);

		// attach callbacks from options
		return animation.progress( animation.opts.progress )
			.done( animation.opts.done, animation.opts.complete )
			.fail( animation.opts.fail )
			.always( animation.opts.always );
	}

	jQuery.Animation = jQuery.extend( Animation, {

		tweener: function( props, callback ) {
			if ( jQuery.isFunction( props ) ) {
				callback = props;
				props = [ "*" ];
			} else {
				props = props.split(" ");
			}

			var prop,
				index = 0,
				length = props.length;

			for ( ; index < length ; index++ ) {
				prop = props[ index ];
				tweeners[ prop ] = tweeners[ prop ] || [];
				tweeners[ prop ].unshift( callback );
			}
		},

		prefilter: function( callback, prepend ) {
			if ( prepend ) {
				animationPrefilters.unshift( callback );
			} else {
				animationPrefilters.push( callback );
			}
		}
	});

	jQuery.speed = function( speed, easing, fn ) {
		var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
			complete: fn || !fn && easing ||
				jQuery.isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
		};

		opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
			opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

		// Normalize opt.queue - true/undefined/null -> "fx"
		if ( opt.queue == null || opt.queue === true ) {
			opt.queue = "fx";
		}

		// Queueing
		opt.old = opt.complete;

		opt.complete = function() {
			if ( jQuery.isFunction( opt.old ) ) {
				opt.old.call( this );
			}

			if ( opt.queue ) {
				jQuery.dequeue( this, opt.queue );
			}
		};

		return opt;
	};

	jQuery.fn.extend({
		fadeTo: function( speed, to, easing, callback ) {

			// Show any hidden elements after setting opacity to 0
			return this.filter( isHidden ).css( "opacity", 0 ).show()

				// Animate to the value specified
				.end().animate({ opacity: to }, speed, easing, callback );
		},
		animate: function( prop, speed, easing, callback ) {
			var empty = jQuery.isEmptyObject( prop ),
				optall = jQuery.speed( speed, easing, callback ),
				doAnimation = function() {
					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation( this, jQuery.extend( {}, prop ), optall );

					// Empty animations, or finishing resolves immediately
					if ( empty || data_priv.get( this, "finish" ) ) {
						anim.stop( true );
					}
				};
				doAnimation.finish = doAnimation;

			return empty || optall.queue === false ?
				this.each( doAnimation ) :
				this.queue( optall.queue, doAnimation );
		},
		stop: function( type, clearQueue, gotoEnd ) {
			var stopQueue = function( hooks ) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop( gotoEnd );
			};

			if ( typeof type !== "string" ) {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if ( clearQueue && type !== false ) {
				this.queue( type || "fx", [] );
			}

			return this.each(function() {
				var dequeue = true,
					index = type != null && type + "queueHooks",
					timers = jQuery.timers,
					data = data_priv.get( this );

				if ( index ) {
					if ( data[ index ] && data[ index ].stop ) {
						stopQueue( data[ index ] );
					}
				} else {
					for ( index in data ) {
						if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
							stopQueue( data[ index ] );
						}
					}
				}

				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && (type == null || timers[ index ].queue === type) ) {
						timers[ index ].anim.stop( gotoEnd );
						dequeue = false;
						timers.splice( index, 1 );
					}
				}

				// Start the next in the queue if the last step wasn't forced.
				// Timers currently will call their complete callbacks, which
				// will dequeue but only if they were gotoEnd.
				if ( dequeue || !gotoEnd ) {
					jQuery.dequeue( this, type );
				}
			});
		},
		finish: function( type ) {
			if ( type !== false ) {
				type = type || "fx";
			}
			return this.each(function() {
				var index,
					data = data_priv.get( this ),
					queue = data[ type + "queue" ],
					hooks = data[ type + "queueHooks" ],
					timers = jQuery.timers,
					length = queue ? queue.length : 0;

				// Enable finishing flag on private data
				data.finish = true;

				// Empty the queue first
				jQuery.queue( this, type, [] );

				if ( hooks && hooks.stop ) {
					hooks.stop.call( this, true );
				}

				// Look for any active animations, and finish them
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
						timers[ index ].anim.stop( true );
						timers.splice( index, 1 );
					}
				}

				// Look for any animations in the old queue and finish them
				for ( index = 0; index < length; index++ ) {
					if ( queue[ index ] && queue[ index ].finish ) {
						queue[ index ].finish.call( this );
					}
				}

				// Turn off finishing flag
				delete data.finish;
			});
		}
	});

	jQuery.each([ "toggle", "show", "hide" ], function( i, name ) {
		var cssFn = jQuery.fn[ name ];
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return speed == null || typeof speed === "boolean" ?
				cssFn.apply( this, arguments ) :
				this.animate( genFx( name, true ), speed, easing, callback );
		};
	});

	// Generate shortcuts for custom animations
	jQuery.each({
		slideDown: genFx("show"),
		slideUp: genFx("hide"),
		slideToggle: genFx("toggle"),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function( name, props ) {
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return this.animate( props, speed, easing, callback );
		};
	});

	jQuery.timers = [];
	jQuery.fx.tick = function() {
		var timer,
			i = 0,
			timers = jQuery.timers;

		fxNow = jQuery.now();

		for ( ; i < timers.length; i++ ) {
			timer = timers[ i ];
			// Checks the timer has not already been removed
			if ( !timer() && timers[ i ] === timer ) {
				timers.splice( i--, 1 );
			}
		}

		if ( !timers.length ) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};

	jQuery.fx.timer = function( timer ) {
		jQuery.timers.push( timer );
		if ( timer() ) {
			jQuery.fx.start();
		} else {
			jQuery.timers.pop();
		}
	};

	jQuery.fx.interval = 13;

	jQuery.fx.start = function() {
		if ( !timerId ) {
			timerId = setInterval( jQuery.fx.tick, jQuery.fx.interval );
		}
	};

	jQuery.fx.stop = function() {
		clearInterval( timerId );
		timerId = null;
	};

	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,
		// Default speed
		_default: 400
	};


	// Based off of the plugin by Clint Helfers, with permission.
	// http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";

		return this.queue( type, function( next, hooks ) {
			var timeout = setTimeout( next, time );
			hooks.stop = function() {
				clearTimeout( timeout );
			};
		});
	};


	(function() {
		var input = document.createElement( "input" ),
			select = document.createElement( "select" ),
			opt = select.appendChild( document.createElement( "option" ) );

		input.type = "checkbox";

		// Support: iOS<=5.1, Android<=4.2+
		// Default value for a checkbox should be "on"
		support.checkOn = input.value !== "";

		// Support: IE<=11+
		// Must access selectedIndex to make default options select
		support.optSelected = opt.selected;

		// Support: Android<=2.3
		// Options inside disabled selects are incorrectly marked as disabled
		select.disabled = true;
		support.optDisabled = !opt.disabled;

		// Support: IE<=11+
		// An input loses its value after becoming a radio
		input = document.createElement( "input" );
		input.value = "t";
		input.type = "radio";
		support.radioValue = input.value === "t";
	})();


	var nodeHook, boolHook,
		attrHandle = jQuery.expr.attrHandle;

	jQuery.fn.extend({
		attr: function( name, value ) {
			return access( this, jQuery.attr, name, value, arguments.length > 1 );
		},

		removeAttr: function( name ) {
			return this.each(function() {
				jQuery.removeAttr( this, name );
			});
		}
	});

	jQuery.extend({
		attr: function( elem, name, value ) {
			var hooks, ret,
				nType = elem.nodeType;

			// don't get/set attributes on text, comment and attribute nodes
			if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			// Fallback to prop when attributes are not supported
			if ( typeof elem.getAttribute === strundefined ) {
				return jQuery.prop( elem, name, value );
			}

			// All attributes are lowercase
			// Grab necessary hook if one is defined
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
				name = name.toLowerCase();
				hooks = jQuery.attrHooks[ name ] ||
					( jQuery.expr.match.bool.test( name ) ? boolHook : nodeHook );
			}

			if ( value !== undefined ) {

				if ( value === null ) {
					jQuery.removeAttr( elem, name );

				} else if ( hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ) {
					return ret;

				} else {
					elem.setAttribute( name, value + "" );
					return value;
				}

			} else if ( hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ) {
				return ret;

			} else {
				ret = jQuery.find.attr( elem, name );

				// Non-existent attributes return null, we normalize to undefined
				return ret == null ?
					undefined :
					ret;
			}
		},

		removeAttr: function( elem, value ) {
			var name, propName,
				i = 0,
				attrNames = value && value.match( rnotwhite );

			if ( attrNames && elem.nodeType === 1 ) {
				while ( (name = attrNames[i++]) ) {
					propName = jQuery.propFix[ name ] || name;

					// Boolean attributes get special treatment (#10870)
					if ( jQuery.expr.match.bool.test( name ) ) {
						// Set corresponding property to false
						elem[ propName ] = false;
					}

					elem.removeAttribute( name );
				}
			}
		},

		attrHooks: {
			type: {
				set: function( elem, value ) {
					if ( !support.radioValue && value === "radio" &&
						jQuery.nodeName( elem, "input" ) ) {
						var val = elem.value;
						elem.setAttribute( "type", value );
						if ( val ) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		}
	});

	// Hooks for boolean attributes
	boolHook = {
		set: function( elem, value, name ) {
			if ( value === false ) {
				// Remove boolean attributes when set to false
				jQuery.removeAttr( elem, name );
			} else {
				elem.setAttribute( name, name );
			}
			return name;
		}
	};
	jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
		var getter = attrHandle[ name ] || jQuery.find.attr;

		attrHandle[ name ] = function( elem, name, isXML ) {
			var ret, handle;
			if ( !isXML ) {
				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ name ];
				attrHandle[ name ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					name.toLowerCase() :
					null;
				attrHandle[ name ] = handle;
			}
			return ret;
		};
	});




	var rfocusable = /^(?:input|select|textarea|button)$/i;

	jQuery.fn.extend({
		prop: function( name, value ) {
			return access( this, jQuery.prop, name, value, arguments.length > 1 );
		},

		removeProp: function( name ) {
			return this.each(function() {
				delete this[ jQuery.propFix[ name ] || name ];
			});
		}
	});

	jQuery.extend({
		propFix: {
			"for": "htmlFor",
			"class": "className"
		},

		prop: function( elem, name, value ) {
			var ret, hooks, notxml,
				nType = elem.nodeType;

			// Don't get/set properties on text, comment and attribute nodes
			if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			notxml = nType !== 1 || !jQuery.isXMLDoc( elem );

			if ( notxml ) {
				// Fix name and attach hooks
				name = jQuery.propFix[ name ] || name;
				hooks = jQuery.propHooks[ name ];
			}

			if ( value !== undefined ) {
				return hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ?
					ret :
					( elem[ name ] = value );

			} else {
				return hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ?
					ret :
					elem[ name ];
			}
		},

		propHooks: {
			tabIndex: {
				get: function( elem ) {
					return elem.hasAttribute( "tabindex" ) || rfocusable.test( elem.nodeName ) || elem.href ?
						elem.tabIndex :
						-1;
				}
			}
		}
	});

	if ( !support.optSelected ) {
		jQuery.propHooks.selected = {
			get: function( elem ) {
				var parent = elem.parentNode;
				if ( parent && parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
				return null;
			}
		};
	}

	jQuery.each([
		"tabIndex",
		"readOnly",
		"maxLength",
		"cellSpacing",
		"cellPadding",
		"rowSpan",
		"colSpan",
		"useMap",
		"frameBorder",
		"contentEditable"
	], function() {
		jQuery.propFix[ this.toLowerCase() ] = this;
	});




	var rclass = /[\t\r\n\f]/g;

	jQuery.fn.extend({
		addClass: function( value ) {
			var classes, elem, cur, clazz, j, finalValue,
				proceed = typeof value === "string" && value,
				i = 0,
				len = this.length;

			if ( jQuery.isFunction( value ) ) {
				return this.each(function( j ) {
					jQuery( this ).addClass( value.call( this, j, this.className ) );
				});
			}

			if ( proceed ) {
				// The disjunction here is for better compressibility (see removeClass)
				classes = ( value || "" ).match( rnotwhite ) || [];

				for ( ; i < len; i++ ) {
					elem = this[ i ];
					cur = elem.nodeType === 1 && ( elem.className ?
						( " " + elem.className + " " ).replace( rclass, " " ) :
						" "
					);

					if ( cur ) {
						j = 0;
						while ( (clazz = classes[j++]) ) {
							if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
								cur += clazz + " ";
							}
						}

						// only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( elem.className !== finalValue ) {
							elem.className = finalValue;
						}
					}
				}
			}

			return this;
		},

		removeClass: function( value ) {
			var classes, elem, cur, clazz, j, finalValue,
				proceed = arguments.length === 0 || typeof value === "string" && value,
				i = 0,
				len = this.length;

			if ( jQuery.isFunction( value ) ) {
				return this.each(function( j ) {
					jQuery( this ).removeClass( value.call( this, j, this.className ) );
				});
			}
			if ( proceed ) {
				classes = ( value || "" ).match( rnotwhite ) || [];

				for ( ; i < len; i++ ) {
					elem = this[ i ];
					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 && ( elem.className ?
						( " " + elem.className + " " ).replace( rclass, " " ) :
						""
					);

					if ( cur ) {
						j = 0;
						while ( (clazz = classes[j++]) ) {
							// Remove *all* instances
							while ( cur.indexOf( " " + clazz + " " ) >= 0 ) {
								cur = cur.replace( " " + clazz + " ", " " );
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = value ? jQuery.trim( cur ) : "";
						if ( elem.className !== finalValue ) {
							elem.className = finalValue;
						}
					}
				}
			}

			return this;
		},

		toggleClass: function( value, stateVal ) {
			var type = typeof value;

			if ( typeof stateVal === "boolean" && type === "string" ) {
				return stateVal ? this.addClass( value ) : this.removeClass( value );
			}

			if ( jQuery.isFunction( value ) ) {
				return this.each(function( i ) {
					jQuery( this ).toggleClass( value.call(this, i, this.className, stateVal), stateVal );
				});
			}

			return this.each(function() {
				if ( type === "string" ) {
					// Toggle individual class names
					var className,
						i = 0,
						self = jQuery( this ),
						classNames = value.match( rnotwhite ) || [];

					while ( (className = classNames[ i++ ]) ) {
						// Check each className given, space separated list
						if ( self.hasClass( className ) ) {
							self.removeClass( className );
						} else {
							self.addClass( className );
						}
					}

				// Toggle whole class name
				} else if ( type === strundefined || type === "boolean" ) {
					if ( this.className ) {
						// store className if set
						data_priv.set( this, "__className__", this.className );
					}

					// If the element has a class name or if we're passed `false`,
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					this.className = this.className || value === false ? "" : data_priv.get( this, "__className__" ) || "";
				}
			});
		},

		hasClass: function( selector ) {
			var className = " " + selector + " ",
				i = 0,
				l = this.length;
			for ( ; i < l; i++ ) {
				if ( this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf( className ) >= 0 ) {
					return true;
				}
			}

			return false;
		}
	});




	var rreturn = /\r/g;

	jQuery.fn.extend({
		val: function( value ) {
			var hooks, ret, isFunction,
				elem = this[0];

			if ( !arguments.length ) {
				if ( elem ) {
					hooks = jQuery.valHooks[ elem.type ] || jQuery.valHooks[ elem.nodeName.toLowerCase() ];

					if ( hooks && "get" in hooks && (ret = hooks.get( elem, "value" )) !== undefined ) {
						return ret;
					}

					ret = elem.value;

					return typeof ret === "string" ?
						// Handle most common string cases
						ret.replace(rreturn, "") :
						// Handle cases where value is null/undef or number
						ret == null ? "" : ret;
				}

				return;
			}

			isFunction = jQuery.isFunction( value );

			return this.each(function( i ) {
				var val;

				if ( this.nodeType !== 1 ) {
					return;
				}

				if ( isFunction ) {
					val = value.call( this, i, jQuery( this ).val() );
				} else {
					val = value;
				}

				// Treat null/undefined as ""; convert numbers to string
				if ( val == null ) {
					val = "";

				} else if ( typeof val === "number" ) {
					val += "";

				} else if ( jQuery.isArray( val ) ) {
					val = jQuery.map( val, function( value ) {
						return value == null ? "" : value + "";
					});
				}

				hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

				// If set returns undefined, fall back to normal setting
				if ( !hooks || !("set" in hooks) || hooks.set( this, val, "value" ) === undefined ) {
					this.value = val;
				}
			});
		}
	});

	jQuery.extend({
		valHooks: {
			option: {
				get: function( elem ) {
					var val = jQuery.find.attr( elem, "value" );
					return val != null ?
						val :
						// Support: IE10-11+
						// option.text throws exceptions (#14686, #14858)
						jQuery.trim( jQuery.text( elem ) );
				}
			},
			select: {
				get: function( elem ) {
					var value, option,
						options = elem.options,
						index = elem.selectedIndex,
						one = elem.type === "select-one" || index < 0,
						values = one ? null : [],
						max = one ? index + 1 : options.length,
						i = index < 0 ?
							max :
							one ? index : 0;

					// Loop through all the selected options
					for ( ; i < max; i++ ) {
						option = options[ i ];

						// IE6-9 doesn't update selected after form reset (#2551)
						if ( ( option.selected || i === index ) &&
								// Don't return options that are disabled or in a disabled optgroup
								( support.optDisabled ? !option.disabled : option.getAttribute( "disabled" ) === null ) &&
								( !option.parentNode.disabled || !jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

							// Get the specific value for the option
							value = jQuery( option ).val();

							// We don't need an array for one selects
							if ( one ) {
								return value;
							}

							// Multi-Selects return an array
							values.push( value );
						}
					}

					return values;
				},

				set: function( elem, value ) {
					var optionSet, option,
						options = elem.options,
						values = jQuery.makeArray( value ),
						i = options.length;

					while ( i-- ) {
						option = options[ i ];
						if ( (option.selected = jQuery.inArray( option.value, values ) >= 0) ) {
							optionSet = true;
						}
					}

					// Force browsers to behave consistently when non-matching value is set
					if ( !optionSet ) {
						elem.selectedIndex = -1;
					}
					return values;
				}
			}
		}
	});

	// Radios and checkboxes getter/setter
	jQuery.each([ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			set: function( elem, value ) {
				if ( jQuery.isArray( value ) ) {
					return ( elem.checked = jQuery.inArray( jQuery(elem).val(), value ) >= 0 );
				}
			}
		};
		if ( !support.checkOn ) {
			jQuery.valHooks[ this ].get = function( elem ) {
				return elem.getAttribute("value") === null ? "on" : elem.value;
			};
		}
	});




	// Return jQuery for attributes-only inclusion


	jQuery.each( ("blur focus focusin focusout load resize scroll unload click dblclick " +
		"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
		"change select submit keydown keypress keyup error contextmenu").split(" "), function( i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	});

	jQuery.fn.extend({
		hover: function( fnOver, fnOut ) {
			return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
		},

		bind: function( types, data, fn ) {
			return this.on( types, null, data, fn );
		},
		unbind: function( types, fn ) {
			return this.off( types, null, fn );
		},

		delegate: function( selector, types, data, fn ) {
			return this.on( types, selector, data, fn );
		},
		undelegate: function( selector, types, fn ) {
			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ? this.off( selector, "**" ) : this.off( types, selector || "**", fn );
		}
	});


	var nonce = jQuery.now();

	var rquery = (/\?/);



	// Support: Android 2.3
	// Workaround failure to string-cast null input
	jQuery.parseJSON = function( data ) {
		return JSON.parse( data + "" );
	};


	// Cross-browser xml parsing
	jQuery.parseXML = function( data ) {
		var xml, tmp;
		if ( !data || typeof data !== "string" ) {
			return null;
		}

		// Support: IE9
		try {
			tmp = new DOMParser();
			xml = tmp.parseFromString( data, "text/xml" );
		} catch ( e ) {
			xml = undefined;
		}

		if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	};


	var
		rhash = /#.*$/,
		rts = /([?&])_=[^&]*/,
		rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		rnoContent = /^(?:GET|HEAD)$/,
		rprotocol = /^\/\//,
		rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,

		/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */
		prefilters = {},

		/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */
		transports = {},

		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat( "*" ),

		// Document location
		ajaxLocation = window.location.href,

		// Segment location into parts
		ajaxLocParts = rurl.exec( ajaxLocation.toLowerCase() ) || [];

	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports( structure ) {

		// dataTypeExpression is optional and defaults to "*"
		return function( dataTypeExpression, func ) {

			if ( typeof dataTypeExpression !== "string" ) {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}

			var dataType,
				i = 0,
				dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];

			if ( jQuery.isFunction( func ) ) {
				// For each dataType in the dataTypeExpression
				while ( (dataType = dataTypes[i++]) ) {
					// Prepend if requested
					if ( dataType[0] === "+" ) {
						dataType = dataType.slice( 1 ) || "*";
						(structure[ dataType ] = structure[ dataType ] || []).unshift( func );

					// Otherwise append
					} else {
						(structure[ dataType ] = structure[ dataType ] || []).push( func );
					}
				}
			}
		};
	}

	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

		var inspected = {},
			seekingTransport = ( structure === transports );

		function inspect( dataType ) {
			var selected;
			inspected[ dataType ] = true;
			jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
				var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
				if ( typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[ dataTypeOrTransport ] ) {
					options.dataTypes.unshift( dataTypeOrTransport );
					inspect( dataTypeOrTransport );
					return false;
				} else if ( seekingTransport ) {
					return !( selected = dataTypeOrTransport );
				}
			});
			return selected;
		}

		return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
	}

	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend( target, src ) {
		var key, deep,
			flatOptions = jQuery.ajaxSettings.flatOptions || {};

		for ( key in src ) {
			if ( src[ key ] !== undefined ) {
				( flatOptions[ key ] ? target : ( deep || (deep = {}) ) )[ key ] = src[ key ];
			}
		}
		if ( deep ) {
			jQuery.extend( true, target, deep );
		}

		return target;
	}

	/* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */
	function ajaxHandleResponses( s, jqXHR, responses ) {

		var ct, type, finalDataType, firstDataType,
			contents = s.contents,
			dataTypes = s.dataTypes;

		// Remove auto dataType and get content-type in the process
		while ( dataTypes[ 0 ] === "*" ) {
			dataTypes.shift();
			if ( ct === undefined ) {
				ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
			}
		}

		// Check if we're dealing with a known content-type
		if ( ct ) {
			for ( type in contents ) {
				if ( contents[ type ] && contents[ type ].test( ct ) ) {
					dataTypes.unshift( type );
					break;
				}
			}
		}

		// Check to see if we have a response for the expected dataType
		if ( dataTypes[ 0 ] in responses ) {
			finalDataType = dataTypes[ 0 ];
		} else {
			// Try convertible dataTypes
			for ( type in responses ) {
				if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[0] ] ) {
					finalDataType = type;
					break;
				}
				if ( !firstDataType ) {
					firstDataType = type;
				}
			}
			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}

		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if ( finalDataType ) {
			if ( finalDataType !== dataTypes[ 0 ] ) {
				dataTypes.unshift( finalDataType );
			}
			return responses[ finalDataType ];
		}
	}

	/* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */
	function ajaxConvert( s, response, jqXHR, isSuccess ) {
		var conv2, current, conv, tmp, prev,
			converters = {},
			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();

		// Create converters map with lowercased keys
		if ( dataTypes[ 1 ] ) {
			for ( conv in s.converters ) {
				converters[ conv.toLowerCase() ] = s.converters[ conv ];
			}
		}

		current = dataTypes.shift();

		// Convert to each sequential dataType
		while ( current ) {

			if ( s.responseFields[ current ] ) {
				jqXHR[ s.responseFields[ current ] ] = response;
			}

			// Apply the dataFilter if provided
			if ( !prev && isSuccess && s.dataFilter ) {
				response = s.dataFilter( response, s.dataType );
			}

			prev = current;
			current = dataTypes.shift();

			if ( current ) {

			// There's only work to do if current dataType is non-auto
				if ( current === "*" ) {

					current = prev;

				// Convert response if prev dataType is non-auto and differs from current
				} else if ( prev !== "*" && prev !== current ) {

					// Seek a direct converter
					conv = converters[ prev + " " + current ] || converters[ "* " + current ];

					// If none found, seek a pair
					if ( !conv ) {
						for ( conv2 in converters ) {

							// If conv2 outputs current
							tmp = conv2.split( " " );
							if ( tmp[ 1 ] === current ) {

								// If prev can be converted to accepted input
								conv = converters[ prev + " " + tmp[ 0 ] ] ||
									converters[ "* " + tmp[ 0 ] ];
								if ( conv ) {
									// Condense equivalence converters
									if ( conv === true ) {
										conv = converters[ conv2 ];

									// Otherwise, insert the intermediate dataType
									} else if ( converters[ conv2 ] !== true ) {
										current = tmp[ 0 ];
										dataTypes.unshift( tmp[ 1 ] );
									}
									break;
								}
							}
						}
					}

					// Apply converter (if not an equivalence)
					if ( conv !== true ) {

						// Unless errors are allowed to bubble, catch and return them
						if ( conv && s[ "throws" ] ) {
							response = conv( response );
						} else {
							try {
								response = conv( response );
							} catch ( e ) {
								return { state: "parsererror", error: conv ? e : "No conversion from " + prev + " to " + current };
							}
						}
					}
				}
			}
		}

		return { state: "success", data: response };
	}

	jQuery.extend({

		// Counter for holding the number of active queries
		active: 0,

		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},

		ajaxSettings: {
			url: ajaxLocation,
			type: "GET",
			isLocal: rlocalProtocol.test( ajaxLocParts[ 1 ] ),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			/*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/

			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},

			contents: {
				xml: /xml/,
				html: /html/,
				json: /json/
			},

			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},

			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {

				// Convert anything to text
				"* text": String,

				// Text to html (true = no transformation)
				"text html": true,

				// Evaluate text as a json expression
				"text json": jQuery.parseJSON,

				// Parse text as xml
				"text xml": jQuery.parseXML
			},

			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},

		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function( target, settings ) {
			return settings ?

				// Building a settings object
				ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

				// Extending ajaxSettings
				ajaxExtend( jQuery.ajaxSettings, target );
		},

		ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
		ajaxTransport: addToPrefiltersOrTransports( transports ),

		// Main method
		ajax: function( url, options ) {

			// If url is an object, simulate pre-1.5 signature
			if ( typeof url === "object" ) {
				options = url;
				url = undefined;
			}

			// Force options to be an object
			options = options || {};

			var transport,
				// URL without anti-cache param
				cacheURL,
				// Response headers
				responseHeadersString,
				responseHeaders,
				// timeout handle
				timeoutTimer,
				// Cross-domain detection vars
				parts,
				// To know if global events are to be dispatched
				fireGlobals,
				// Loop variable
				i,
				// Create the final options object
				s = jQuery.ajaxSetup( {}, options ),
				// Callbacks context
				callbackContext = s.context || s,
				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context && ( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,
				// Deferreds
				deferred = jQuery.Deferred(),
				completeDeferred = jQuery.Callbacks("once memory"),
				// Status-dependent callbacks
				statusCode = s.statusCode || {},
				// Headers (they are sent all at once)
				requestHeaders = {},
				requestHeadersNames = {},
				// The jqXHR state
				state = 0,
				// Default abort message
				strAbort = "canceled",
				// Fake xhr
				jqXHR = {
					readyState: 0,

					// Builds headers hashtable if needed
					getResponseHeader: function( key ) {
						var match;
						if ( state === 2 ) {
							if ( !responseHeaders ) {
								responseHeaders = {};
								while ( (match = rheaders.exec( responseHeadersString )) ) {
									responseHeaders[ match[1].toLowerCase() ] = match[ 2 ];
								}
							}
							match = responseHeaders[ key.toLowerCase() ];
						}
						return match == null ? null : match;
					},

					// Raw string
					getAllResponseHeaders: function() {
						return state === 2 ? responseHeadersString : null;
					},

					// Caches the header
					setRequestHeader: function( name, value ) {
						var lname = name.toLowerCase();
						if ( !state ) {
							name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
							requestHeaders[ name ] = value;
						}
						return this;
					},

					// Overrides response content-type header
					overrideMimeType: function( type ) {
						if ( !state ) {
							s.mimeType = type;
						}
						return this;
					},

					// Status-dependent callbacks
					statusCode: function( map ) {
						var code;
						if ( map ) {
							if ( state < 2 ) {
								for ( code in map ) {
									// Lazy-add the new callback in a way that preserves old ones
									statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
								}
							} else {
								// Execute the appropriate callbacks
								jqXHR.always( map[ jqXHR.status ] );
							}
						}
						return this;
					},

					// Cancel the request
					abort: function( statusText ) {
						var finalText = statusText || strAbort;
						if ( transport ) {
							transport.abort( finalText );
						}
						done( 0, finalText );
						return this;
					}
				};

			// Attach deferreds
			deferred.promise( jqXHR ).complete = completeDeferred.add;
			jqXHR.success = jqXHR.done;
			jqXHR.error = jqXHR.fail;

			// Remove hash character (#7531: and string promotion)
			// Add protocol if not provided (prefilters might expect it)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ( ( url || s.url || ajaxLocation ) + "" ).replace( rhash, "" )
				.replace( rprotocol, ajaxLocParts[ 1 ] + "//" );

			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;

			// Extract dataTypes list
			s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];

			// A cross-domain request is in order when we have a protocol:host:port mismatch
			if ( s.crossDomain == null ) {
				parts = rurl.exec( s.url.toLowerCase() );
				s.crossDomain = !!( parts &&
					( parts[ 1 ] !== ajaxLocParts[ 1 ] || parts[ 2 ] !== ajaxLocParts[ 2 ] ||
						( parts[ 3 ] || ( parts[ 1 ] === "http:" ? "80" : "443" ) ) !==
							( ajaxLocParts[ 3 ] || ( ajaxLocParts[ 1 ] === "http:" ? "80" : "443" ) ) )
				);
			}

			// Convert data if not already a string
			if ( s.data && s.processData && typeof s.data !== "string" ) {
				s.data = jQuery.param( s.data, s.traditional );
			}

			// Apply prefilters
			inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

			// If request was aborted inside a prefilter, stop there
			if ( state === 2 ) {
				return jqXHR;
			}

			// We can fire global events as of now if asked to
			// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
			fireGlobals = jQuery.event && s.global;

			// Watch for a new set of requests
			if ( fireGlobals && jQuery.active++ === 0 ) {
				jQuery.event.trigger("ajaxStart");
			}

			// Uppercase the type
			s.type = s.type.toUpperCase();

			// Determine if request has content
			s.hasContent = !rnoContent.test( s.type );

			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			cacheURL = s.url;

			// More options handling for requests with no content
			if ( !s.hasContent ) {

				// If data is available, append data to url
				if ( s.data ) {
					cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );
					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}

				// Add anti-cache in url if needed
				if ( s.cache === false ) {
					s.url = rts.test( cacheURL ) ?

						// If there is already a '_' parameter, set its value
						cacheURL.replace( rts, "$1_=" + nonce++ ) :

						// Otherwise add one to the end
						cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
				}
			}

			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if ( s.ifModified ) {
				if ( jQuery.lastModified[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
				}
				if ( jQuery.etag[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
				}
			}

			// Set the correct header, if data is being sent
			if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
				jqXHR.setRequestHeader( "Content-Type", s.contentType );
			}

			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader(
				"Accept",
				s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[0] ] ?
					s.accepts[ s.dataTypes[0] ] + ( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
					s.accepts[ "*" ]
			);

			// Check for headers option
			for ( i in s.headers ) {
				jqXHR.setRequestHeader( i, s.headers[ i ] );
			}

			// Allow custom headers/mimetypes and early abort
			if ( s.beforeSend && ( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {
				// Abort if not done already and return
				return jqXHR.abort();
			}

			// Aborting is no longer a cancellation
			strAbort = "abort";

			// Install callbacks on deferreds
			for ( i in { success: 1, error: 1, complete: 1 } ) {
				jqXHR[ i ]( s[ i ] );
			}

			// Get transport
			transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

			// If no transport, we auto-abort
			if ( !transport ) {
				done( -1, "No Transport" );
			} else {
				jqXHR.readyState = 1;

				// Send global event
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
				}
				// Timeout
				if ( s.async && s.timeout > 0 ) {
					timeoutTimer = setTimeout(function() {
						jqXHR.abort("timeout");
					}, s.timeout );
				}

				try {
					state = 1;
					transport.send( requestHeaders, done );
				} catch ( e ) {
					// Propagate exception as error if not done
					if ( state < 2 ) {
						done( -1, e );
					// Simply rethrow otherwise
					} else {
						throw e;
					}
				}
			}

			// Callback for when everything is done
			function done( status, nativeStatusText, responses, headers ) {
				var isSuccess, success, error, response, modified,
					statusText = nativeStatusText;

				// Called once
				if ( state === 2 ) {
					return;
				}

				// State is "done" now
				state = 2;

				// Clear timeout if it exists
				if ( timeoutTimer ) {
					clearTimeout( timeoutTimer );
				}

				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;

				// Cache response headers
				responseHeadersString = headers || "";

				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;

				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;

				// Get response data
				if ( responses ) {
					response = ajaxHandleResponses( s, jqXHR, responses );
				}

				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert( s, response, jqXHR, isSuccess );

				// If successful, handle type chaining
				if ( isSuccess ) {

					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if ( s.ifModified ) {
						modified = jqXHR.getResponseHeader("Last-Modified");
						if ( modified ) {
							jQuery.lastModified[ cacheURL ] = modified;
						}
						modified = jqXHR.getResponseHeader("etag");
						if ( modified ) {
							jQuery.etag[ cacheURL ] = modified;
						}
					}

					// if no content
					if ( status === 204 || s.type === "HEAD" ) {
						statusText = "nocontent";

					// if not modified
					} else if ( status === 304 ) {
						statusText = "notmodified";

					// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {
					// Extract error from statusText and normalize for non-aborts
					error = statusText;
					if ( status || !statusText ) {
						statusText = "error";
						if ( status < 0 ) {
							status = 0;
						}
					}
				}

				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = ( nativeStatusText || statusText ) + "";

				// Success/Error
				if ( isSuccess ) {
					deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
				} else {
					deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
				}

				// Status-dependent callbacks
				jqXHR.statusCode( statusCode );
				statusCode = undefined;

				if ( fireGlobals ) {
					globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
						[ jqXHR, s, isSuccess ? success : error ] );
				}

				// Complete
				completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );
					// Handle the global AJAX counter
					if ( !( --jQuery.active ) ) {
						jQuery.event.trigger("ajaxStop");
					}
				}
			}

			return jqXHR;
		},

		getJSON: function( url, data, callback ) {
			return jQuery.get( url, data, callback, "json" );
		},

		getScript: function( url, callback ) {
			return jQuery.get( url, undefined, callback, "script" );
		}
	});

	jQuery.each( [ "get", "post" ], function( i, method ) {
		jQuery[ method ] = function( url, data, callback, type ) {
			// Shift arguments if data argument was omitted
			if ( jQuery.isFunction( data ) ) {
				type = type || callback;
				callback = data;
				data = undefined;
			}

			return jQuery.ajax({
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			});
		};
	});


	jQuery._evalUrl = function( url ) {
		return jQuery.ajax({
			url: url,
			type: "GET",
			dataType: "script",
			async: false,
			global: false,
			"throws": true
		});
	};


	jQuery.fn.extend({
		wrapAll: function( html ) {
			var wrap;

			if ( jQuery.isFunction( html ) ) {
				return this.each(function( i ) {
					jQuery( this ).wrapAll( html.call(this, i) );
				});
			}

			if ( this[ 0 ] ) {

				// The elements to wrap the target around
				wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

				if ( this[ 0 ].parentNode ) {
					wrap.insertBefore( this[ 0 ] );
				}

				wrap.map(function() {
					var elem = this;

					while ( elem.firstElementChild ) {
						elem = elem.firstElementChild;
					}

					return elem;
				}).append( this );
			}

			return this;
		},

		wrapInner: function( html ) {
			if ( jQuery.isFunction( html ) ) {
				return this.each(function( i ) {
					jQuery( this ).wrapInner( html.call(this, i) );
				});
			}

			return this.each(function() {
				var self = jQuery( this ),
					contents = self.contents();

				if ( contents.length ) {
					contents.wrapAll( html );

				} else {
					self.append( html );
				}
			});
		},

		wrap: function( html ) {
			var isFunction = jQuery.isFunction( html );

			return this.each(function( i ) {
				jQuery( this ).wrapAll( isFunction ? html.call(this, i) : html );
			});
		},

		unwrap: function() {
			return this.parent().each(function() {
				if ( !jQuery.nodeName( this, "body" ) ) {
					jQuery( this ).replaceWith( this.childNodes );
				}
			}).end();
		}
	});


	jQuery.expr.filters.hidden = function( elem ) {
		// Support: Opera <= 12.12
		// Opera reports offsetWidths and offsetHeights less than zero on some elements
		return elem.offsetWidth <= 0 && elem.offsetHeight <= 0;
	};
	jQuery.expr.filters.visible = function( elem ) {
		return !jQuery.expr.filters.hidden( elem );
	};




	var r20 = /%20/g,
		rbracket = /\[\]$/,
		rCRLF = /\r?\n/g,
		rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		rsubmittable = /^(?:input|select|textarea|keygen)/i;

	function buildParams( prefix, obj, traditional, add ) {
		var name;

		if ( jQuery.isArray( obj ) ) {
			// Serialize array item.
			jQuery.each( obj, function( i, v ) {
				if ( traditional || rbracket.test( prefix ) ) {
					// Treat each array item as a scalar.
					add( prefix, v );

				} else {
					// Item is non-scalar (array or object), encode its numeric index.
					buildParams( prefix + "[" + ( typeof v === "object" ? i : "" ) + "]", v, traditional, add );
				}
			});

		} else if ( !traditional && jQuery.type( obj ) === "object" ) {
			// Serialize object item.
			for ( name in obj ) {
				buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
			}

		} else {
			// Serialize scalar item.
			add( prefix, obj );
		}
	}

	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function( a, traditional ) {
		var prefix,
			s = [],
			add = function( key, value ) {
				// If value is a function, invoke it and return its value
				value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
				s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
			};

		// Set traditional to true for jQuery <= 1.3.2 behavior.
		if ( traditional === undefined ) {
			traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
		}

		// If an array was passed in, assume that it is an array of form elements.
		if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {
			// Serialize the form elements
			jQuery.each( a, function() {
				add( this.name, this.value );
			});

		} else {
			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for ( prefix in a ) {
				buildParams( prefix, a[ prefix ], traditional, add );
			}
		}

		// Return the resulting serialization
		return s.join( "&" ).replace( r20, "+" );
	};

	jQuery.fn.extend({
		serialize: function() {
			return jQuery.param( this.serializeArray() );
		},
		serializeArray: function() {
			return this.map(function() {
				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop( this, "elements" );
				return elements ? jQuery.makeArray( elements ) : this;
			})
			.filter(function() {
				var type = this.type;

				// Use .is( ":disabled" ) so that fieldset[disabled] works
				return this.name && !jQuery( this ).is( ":disabled" ) &&
					rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
					( this.checked || !rcheckableType.test( type ) );
			})
			.map(function( i, elem ) {
				var val = jQuery( this ).val();

				return val == null ?
					null :
					jQuery.isArray( val ) ?
						jQuery.map( val, function( val ) {
							return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
						}) :
						{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
			}).get();
		}
	});


	jQuery.ajaxSettings.xhr = function() {
		try {
			return new XMLHttpRequest();
		} catch( e ) {}
	};

	var xhrId = 0,
		xhrCallbacks = {},
		xhrSuccessStatus = {
			// file protocol always yields status code 0, assume 200
			0: 200,
			// Support: IE9
			// #1450: sometimes IE returns 1223 when it should be 204
			1223: 204
		},
		xhrSupported = jQuery.ajaxSettings.xhr();

	// Support: IE9
	// Open requests must be manually aborted on unload (#5280)
	// See https://support.microsoft.com/kb/2856746 for more info
	if ( window.attachEvent ) {
		window.attachEvent( "onunload", function() {
			for ( var key in xhrCallbacks ) {
				xhrCallbacks[ key ]();
			}
		});
	}

	support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
	support.ajax = xhrSupported = !!xhrSupported;

	jQuery.ajaxTransport(function( options ) {
		var callback;

		// Cross domain only allowed if supported through XMLHttpRequest
		if ( support.cors || xhrSupported && !options.crossDomain ) {
			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr(),
						id = ++xhrId;

					xhr.open( options.type, options.url, options.async, options.username, options.password );

					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}

					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers["X-Requested-With"] ) {
						headers["X-Requested-With"] = "XMLHttpRequest";
					}

					// Set headers
					for ( i in headers ) {
						xhr.setRequestHeader( i, headers[ i ] );
					}

					// Callback
					callback = function( type ) {
						return function() {
							if ( callback ) {
								delete xhrCallbacks[ id ];
								callback = xhr.onload = xhr.onerror = null;

								if ( type === "abort" ) {
									xhr.abort();
								} else if ( type === "error" ) {
									complete(
										// file: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								} else {
									complete(
										xhrSuccessStatus[ xhr.status ] || xhr.status,
										xhr.statusText,
										// Support: IE9
										// Accessing binary-data responseText throws an exception
										// (#11426)
										typeof xhr.responseText === "string" ? {
											text: xhr.responseText
										} : undefined,
										xhr.getAllResponseHeaders()
									);
								}
							}
						};
					};

					// Listen to events
					xhr.onload = callback();
					xhr.onerror = callback("error");

					// Create the abort callback
					callback = xhrCallbacks[ id ] = callback("abort");

					try {
						// Do send the request (this may raise an exception)
						xhr.send( options.hasContent && options.data || null );
					} catch ( e ) {
						// #14683: Only rethrow if this hasn't been notified as an error yet
						if ( callback ) {
							throw e;
						}
					}
				},

				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	});




	// Install script dataType
	jQuery.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /(?:java|ecma)script/
		},
		converters: {
			"text script": function( text ) {
				jQuery.globalEval( text );
				return text;
			}
		}
	});

	// Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter( "script", function( s ) {
		if ( s.cache === undefined ) {
			s.cache = false;
		}
		if ( s.crossDomain ) {
			s.type = "GET";
		}
	});

	// Bind script tag hack transport
	jQuery.ajaxTransport( "script", function( s ) {
		// This transport only deals with cross domain requests
		if ( s.crossDomain ) {
			var script, callback;
			return {
				send: function( _, complete ) {
					script = jQuery("<script>").prop({
						async: true,
						charset: s.scriptCharset,
						src: s.url
					}).on(
						"load error",
						callback = function( evt ) {
							script.remove();
							callback = null;
							if ( evt ) {
								complete( evt.type === "error" ? 404 : 200, evt.type );
							}
						}
					);
					document.head.appendChild( script[ 0 ] );
				},
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	});




	var oldCallbacks = [],
		rjsonp = /(=)\?(?=&|$)|\?\?/;

	// Default jsonp settings
	jQuery.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
			this[ callback ] = true;
			return callback;
		}
	});

	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

		var callbackName, overwritten, responseContainer,
			jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
				"url" :
				typeof s.data === "string" && !( s.contentType || "" ).indexOf("application/x-www-form-urlencoded") && rjsonp.test( s.data ) && "data"
			);

		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
				s.jsonpCallback() :
				s.jsonpCallback;

			// Insert callback into url or form data
			if ( jsonProp ) {
				s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
			} else if ( s.jsonp !== false ) {
				s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
			}

			// Use data converter to retrieve json after script execution
			s.converters["script json"] = function() {
				if ( !responseContainer ) {
					jQuery.error( callbackName + " was not called" );
				}
				return responseContainer[ 0 ];
			};

			// force json dataType
			s.dataTypes[ 0 ] = "json";

			// Install callback
			overwritten = window[ callbackName ];
			window[ callbackName ] = function() {
				responseContainer = arguments;
			};

			// Clean-up function (fires after converters)
			jqXHR.always(function() {
				// Restore preexisting value
				window[ callbackName ] = overwritten;

				// Save back as free
				if ( s[ callbackName ] ) {
					// make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;

					// save the callback name for future use
					oldCallbacks.push( callbackName );
				}

				// Call if it was a function and we have a response
				if ( responseContainer && jQuery.isFunction( overwritten ) ) {
					overwritten( responseContainer[ 0 ] );
				}

				responseContainer = overwritten = undefined;
			});

			// Delegate to script
			return "script";
		}
	});




	// data: string of html
	// context (optional): If specified, the fragment will be created in this context, defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function( data, context, keepScripts ) {
		if ( !data || typeof data !== "string" ) {
			return null;
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}
		context = context || document;

		var parsed = rsingleTag.exec( data ),
			scripts = !keepScripts && [];

		// Single tag
		if ( parsed ) {
			return [ context.createElement( parsed[1] ) ];
		}

		parsed = jQuery.buildFragment( [ data ], context, scripts );

		if ( scripts && scripts.length ) {
			jQuery( scripts ).remove();
		}

		return jQuery.merge( [], parsed.childNodes );
	};


	// Keep a copy of the old load method
	var _load = jQuery.fn.load;

	/**
	 * Load a url into a page
	 */
	jQuery.fn.load = function( url, params, callback ) {
		if ( typeof url !== "string" && _load ) {
			return _load.apply( this, arguments );
		}

		var selector, type, response,
			self = this,
			off = url.indexOf(" ");

		if ( off >= 0 ) {
			selector = jQuery.trim( url.slice( off ) );
			url = url.slice( 0, off );
		}

		// If it's a function
		if ( jQuery.isFunction( params ) ) {

			// We assume that it's the callback
			callback = params;
			params = undefined;

		// Otherwise, build a param string
		} else if ( params && typeof params === "object" ) {
			type = "POST";
		}

		// If we have elements to modify, make the request
		if ( self.length > 0 ) {
			jQuery.ajax({
				url: url,

				// if "type" variable is undefined, then "GET" method will be used
				type: type,
				dataType: "html",
				data: params
			}).done(function( responseText ) {

				// Save response for use in complete callback
				response = arguments;

				self.html( selector ?

					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery("<div>").append( jQuery.parseHTML( responseText ) ).find( selector ) :

					// Otherwise use the full result
					responseText );

			}).complete( callback && function( jqXHR, status ) {
				self.each( callback, response || [ jqXHR.responseText, status, jqXHR ] );
			});
		}

		return this;
	};




	// Attach a bunch of functions for handling common AJAX events
	jQuery.each( [ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function( i, type ) {
		jQuery.fn[ type ] = function( fn ) {
			return this.on( type, fn );
		};
	});




	jQuery.expr.filters.animated = function( elem ) {
		return jQuery.grep(jQuery.timers, function( fn ) {
			return elem === fn.elem;
		}).length;
	};




	var docElem = window.document.documentElement;

	/**
	 * Gets a window from an element
	 */
	function getWindow( elem ) {
		return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
	}

	jQuery.offset = {
		setOffset: function( elem, options, i ) {
			var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
				position = jQuery.css( elem, "position" ),
				curElem = jQuery( elem ),
				props = {};

			// Set position first, in-case top/left are set even on static elem
			if ( position === "static" ) {
				elem.style.position = "relative";
			}

			curOffset = curElem.offset();
			curCSSTop = jQuery.css( elem, "top" );
			curCSSLeft = jQuery.css( elem, "left" );
			calculatePosition = ( position === "absolute" || position === "fixed" ) &&
				( curCSSTop + curCSSLeft ).indexOf("auto") > -1;

			// Need to be able to calculate position if either
			// top or left is auto and position is either absolute or fixed
			if ( calculatePosition ) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;

			} else {
				curTop = parseFloat( curCSSTop ) || 0;
				curLeft = parseFloat( curCSSLeft ) || 0;
			}

			if ( jQuery.isFunction( options ) ) {
				options = options.call( elem, i, curOffset );
			}

			if ( options.top != null ) {
				props.top = ( options.top - curOffset.top ) + curTop;
			}
			if ( options.left != null ) {
				props.left = ( options.left - curOffset.left ) + curLeft;
			}

			if ( "using" in options ) {
				options.using.call( elem, props );

			} else {
				curElem.css( props );
			}
		}
	};

	jQuery.fn.extend({
		offset: function( options ) {
			if ( arguments.length ) {
				return options === undefined ?
					this :
					this.each(function( i ) {
						jQuery.offset.setOffset( this, options, i );
					});
			}

			var docElem, win,
				elem = this[ 0 ],
				box = { top: 0, left: 0 },
				doc = elem && elem.ownerDocument;

			if ( !doc ) {
				return;
			}

			docElem = doc.documentElement;

			// Make sure it's not a disconnected DOM node
			if ( !jQuery.contains( docElem, elem ) ) {
				return box;
			}

			// Support: BlackBerry 5, iOS 3 (original iPhone)
			// If we don't have gBCR, just use 0,0 rather than error
			if ( typeof elem.getBoundingClientRect !== strundefined ) {
				box = elem.getBoundingClientRect();
			}
			win = getWindow( doc );
			return {
				top: box.top + win.pageYOffset - docElem.clientTop,
				left: box.left + win.pageXOffset - docElem.clientLeft
			};
		},

		position: function() {
			if ( !this[ 0 ] ) {
				return;
			}

			var offsetParent, offset,
				elem = this[ 0 ],
				parentOffset = { top: 0, left: 0 };

			// Fixed elements are offset from window (parentOffset = {top:0, left: 0}, because it is its only offset parent
			if ( jQuery.css( elem, "position" ) === "fixed" ) {
				// Assume getBoundingClientRect is there when computed position is fixed
				offset = elem.getBoundingClientRect();

			} else {
				// Get *real* offsetParent
				offsetParent = this.offsetParent();

				// Get correct offsets
				offset = this.offset();
				if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
					parentOffset = offsetParent.offset();
				}

				// Add offsetParent borders
				parentOffset.top += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
			}

			// Subtract parent offsets and element margins
			return {
				top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
				left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
			};
		},

		offsetParent: function() {
			return this.map(function() {
				var offsetParent = this.offsetParent || docElem;

				while ( offsetParent && ( !jQuery.nodeName( offsetParent, "html" ) && jQuery.css( offsetParent, "position" ) === "static" ) ) {
					offsetParent = offsetParent.offsetParent;
				}

				return offsetParent || docElem;
			});
		}
	});

	// Create scrollLeft and scrollTop methods
	jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
		var top = "pageYOffset" === prop;

		jQuery.fn[ method ] = function( val ) {
			return access( this, function( elem, method, val ) {
				var win = getWindow( elem );

				if ( val === undefined ) {
					return win ? win[ prop ] : elem[ method ];
				}

				if ( win ) {
					win.scrollTo(
						!top ? val : window.pageXOffset,
						top ? val : window.pageYOffset
					);

				} else {
					elem[ method ] = val;
				}
			}, method, val, arguments.length, null );
		};
	});

	// Support: Safari<7+, Chrome<37+
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://code.google.com/p/chromium/issues/detail?id=229280
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	jQuery.each( [ "top", "left" ], function( i, prop ) {
		jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
			function( elem, computed ) {
				if ( computed ) {
					computed = curCSS( elem, prop );
					// If curCSS returns percentage, fallback to offset
					return rnumnonpx.test( computed ) ?
						jQuery( elem ).position()[ prop ] + "px" :
						computed;
				}
			}
		);
	});


	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
		jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name }, function( defaultExtra, funcName ) {
			// Margin is only for outerHeight, outerWidth
			jQuery.fn[ funcName ] = function( margin, value ) {
				var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
					extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

				return access( this, function( elem, type, value ) {
					var doc;

					if ( jQuery.isWindow( elem ) ) {
						// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
						// isn't a whole lot we can do. See pull request at this URL for discussion:
						// https://github.com/jquery/jquery/pull/764
						return elem.document.documentElement[ "client" + name ];
					}

					// Get document width or height
					if ( elem.nodeType === 9 ) {
						doc = elem.documentElement;

						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
						// whichever is greatest
						return Math.max(
							elem.body[ "scroll" + name ], doc[ "scroll" + name ],
							elem.body[ "offset" + name ], doc[ "offset" + name ],
							doc[ "client" + name ]
						);
					}

					return value === undefined ?
						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css( elem, type, extra ) :

						// Set width or height on the element
						jQuery.style( elem, type, value, extra );
				}, type, chainable ? margin : undefined, chainable, null );
			};
		});
	});


	// The number of elements contained in the matched element set
	jQuery.fn.size = function() {
		return this.length;
	};

	jQuery.fn.andSelf = jQuery.fn.addBack;




	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.

	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

	if ( true ) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return jQuery;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}




	var
		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,

		// Map over the $ in case of overwrite
		_$ = window.$;

	jQuery.noConflict = function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}

		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}

		return jQuery;
	};

	// Expose jQuery and $ identifiers, even in AMD
	// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if ( typeof noGlobal === strundefined ) {
		window.jQuery = window.$ = jQuery;
	}




	return jQuery;

	}));


/***/ },
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function() {
		var list = [];
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
		return list;
	}

/***/ }
/******/ ]);