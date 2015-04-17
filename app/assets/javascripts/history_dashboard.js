var $ = require('jquery');
var jQuery = $;
var qd = require('quickdash-core'),
    inflection = require('inflection'),
    dc = require('dc-custom'),
    fastclick = require('fastclick'),
    dtip = require('d3-tip')(d3);


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

		daysToAwardChart = dc.barChart('#daysToAwardChart')
							 .x(d3.scale.linear().domain([0, 900]))
							 .width(900)
							 .height(350)
							 .dimension(daysToAward)
							 .group(daysToAwardGroup);
		
		dc.renderAll();
		$('#loading').addClass('loaded');
		console.log(data[0]);
	});
}

});




