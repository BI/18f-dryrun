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


		programAreaChart = dc.rowChart('#programAreaChart')
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

		programChart = dc.rowChart('#programChart')
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
		
		dc.renderAll();
		$('#loading').addClass('loaded');
	});
}

});




