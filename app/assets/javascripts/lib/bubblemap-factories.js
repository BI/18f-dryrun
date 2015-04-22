var d3 = require('d3');
var dc = require('dc-custom');
var qd = require('quickdash-core');
var dtip = require('d3-tip')(d3);

var df = {};

df.numberDisplay = function(parent) {
  // Common config
  var _chart = qd.dataConfigMixin(dc.numberDisplay(parent));

  return _chart;
};

df.pieChart = function(parent){

  var _chart = qd.dataConfigMixin(dc.pieChart(parent));

  return _chart;
};

df.barChart = function(parent){

  var _chart = qd.dataConfigMixin(dc.barChart(parent));

  return _chart;
};

df.geoBubbleOverlayChart = function(parent){

  var _chart = qd.dataConfigMixin(dc.geoBubbleOverlayChart(parent));
    
  _chart.bubbleLabel(function(d){return _chart.keyAccessor()(d);});

  return _chart;
};


module.exports = df;