var $ = require('jquery');
var jQuery = $;
var qd = require('quickdash-core'),
    inflection = require('inflection'),
    dc = require('dc-custom'),
    fastclick = require('fastclick'),
    dtip = require('d3-tip')(d3);

// var df = require('./lib/bubblemap-factories'),
//     dataConfig = require('./lib/bubblemap-data-config');

$(document).ready(function(){
	loadDataAndRender($('#year-select').val())

	//load data based on year selected
	$('#year-select').on("change", function(){
		loadDataAndRender(this.value);
	});

//make request for data based on year and load data for the chart
function loadDataAndRender(year) {
	$('#loading').removeClass('loaded');

	//make the request
	$.get("proposals/submission_fiscal_year/" + year + ".json", function(data, status) {
		crossfilterData = crossfilter(data);
		orgTypeDimension = crossfilterData.dimension(function(d) {return d.ORGANIZATION_TYPE;});
		programAreaDimension = crossfilterData.dimension(function(d) {return d.PROGRAM_AREA_NAME;})
		awardsOrgType = crossfilterData.dimension(function(d) {return d.award_organization_type;})

		var levels = [{'dimension': orgTypeDimension, 'columnName': 'ORGANIZATION_TYPE'},
					  {'dimension': programAreaDimension, 'columnName': 'PROGRAM_AREA_NAME'},
					  {'dimension': awardsOrgType, 'columnName': 'award_organization_type'}];

		proposalsSankey = dc.sankey("#organization-type-sankey")
								.width(900)
								.height(500)
								.levels(levels)
								.measureColumn('measure')
								.nodeWidth(30);
		dc.renderAll();
		$('#loading').addClass('loaded');
		console.log(data[0]);
	});
}

});




