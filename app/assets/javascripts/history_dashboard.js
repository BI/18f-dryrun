var $ = require('jquery');
var jQuery = $;
var qd = require('quickdash-core'),
    inflection = require('inflection'),
    dc = require('dc-custom'),
    fastclick = require('fastclick'),
    dtip = require('d3-tip')(d3);

var foundation = require('zurb-foundation');
var foundationOffcanvas = require('../../../node_modules/zurb-foundation/js/foundation/foundation.offcanvas.js');

require('../../../node_modules/dc/dc.css');
require('../stylesheets/18f.scss');
require('../stylesheets/_filter_builder.scss');
require('../stylesheets/_d3-tips.scss');

$(document).ready(function() {
	$(document).foundation();	
});


$(document).ready(function(){
	loadDataAndRender($('#aging-type').val())

	//load data based on year selected
	$('#aging-type').on("change", function(){
		loadDataAndRender(this.value);
	});

//make request for data based on year and load data for the chart
function loadDataAndRender(agingType) {
	$('#loading').removeClass('loaded');

	//make the request
	$.get("proposals/history/" + agingType + ".json", function(data, status) {
		measureColumn = "cnt_proposals"
		crossfilterData = crossfilter(data);
		daysToAward = crossfilterData.dimension(function(d) {return d.award_days;});
		daysToAwardGroup =  daysToAward.group().reduceSum(function(d){
			  return Math.round(d[measureColumn]) || 0;
		});
		fiscalYear = crossfilterData.dimension(function(d) {return d.fiscal_year;})
		fiscalYearGroup =  fiscalYear.group().reduceSum(function(d){
			  return Math.round(d[measureColumn]) || 0;
		});
		programArea = crossfilterData.dimension(function(d) {return d.program_area_name;})
		programAreaGroup =  programArea.group().reduceSum(function(d){
			  return Math.round(d[measureColumn]) || 0;
		});
		program = crossfilterData.dimension(function(d) {return d.program_name;})
		programGroup =  program.group().reduceSum(function(d){
			  return Math.round(d[measureColumn]) || 0;
		});

		daysToAwardDomain = [daysToAward.bottom(1)[0].award_days, daysToAward.top(1)[0].award_days];
		daysToAwardChart = dc.barChart('#daysToAwardChart')
							 .x(d3.scale.linear().domain(daysToAwardDomain))
							 .width(500)
							 .height(350)
							 .elasticY(true)
							 .elasticX(true)
							 .dimension(daysToAward)
							 .group(daysToAwardGroup);



		toolTipFunction = function(chartName, subselector){

				return function(){
			        var tt = d3.tip()
			          .attr('class', 'd3-tip-mouse')
			          .attr('id', 'd3-tip-'+chartName)
			          .positionAnchor('mouse')
			          .html(function (d) {
			            return "<label>" + (d.key || d.data.key) + "</label><br/>" + (d.value || d.data.value);
			          });

			        var rows = d3.selectAll('#'+chartName+' '+subselector);

			        //HACK: tried to use .call like the map but onresize x cant be found, had to do this on the pie charts also
			        if (!d3.select('#d3-tip').empty()) d3.select('#d3-tip').remove();

			        rows.call(tt);
			        rows.on('mouseover', tt.show)
			            .on('mouseout', tt.hide)
			            .on('mousemove', tt.updatePosition)
			            .on('click', tt.hide);
			    };
			    
		};

		fiscalYearDomain = [];
		firstYear = fiscalYear.bottom(1)[0].fiscal_year;
		lastYear = fiscalYear.top(1)[0].fiscal_year;
		for(var y = firstYear; y < lastYear; y++){
			fiscalYearDomain.push(y);
		}
		fiscalYearChart = dc.barChart('#fiscalYearChart')						 
							 .width(500)
							 .height(350)
							 .dimension(fiscalYear)
							 .group(fiscalYearGroup)
							 .elasticY(true)
						     .renderTitle(false)
						     .x(d3.scale.ordinal().domain(fiscalYearDomain))
						     .xUnits(dc.units.ordinal);

		fiscalYearChart.renderlet(toolTipFunction('fiscalYearChart','rect.bar'));


		programAreaChart = dc.rowChart('#programAreaChart');
		programAreaChart
			.dimension(programArea)
			.group(programAreaGroup)
			.ordering(function(d) { return -d.value})
		    .cap(30)
		    .height(600)
		    .width(500)
		    .renderTitle(false)
		    .elasticX(true)
		    .xAxis()
		      .ticks(4);

		programAreaChart.renderlet(toolTipFunction('programAreaChart','g.row'));

		programChart = dc.rowChart('#programChart');
		programChart
			.dimension(program)
			.group(programGroup)
			.ordering(function(d) { return -d.value})
		    .cap(30)
		    .height(600)
		    .width(500)
		    .renderTitle(false)
		    .elasticX(true)
		    .xAxis()
		      .ticks(4);

		programChart.renderlet(toolTipFunction('programChart','g.row'));

		filterBuilder = dc.filterBuilder('#filterBuilder')
	      .filterSources([{chart: programAreaChart, icon: 'globe', label: "Program Area"},
	        {chart: programChart, icon: 'tag', label: "Program"},
	        {chart: fiscalYearChart, icon: 'institution', label: "Fiscal Year"}]);
		
		dc.renderAll();
		$('#loading').addClass('loaded');
	});
}

});




