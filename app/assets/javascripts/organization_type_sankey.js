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

		programGroup = orgTypeDimension.group();

		var levels = [{'dimension': orgTypeDimension, 'columnName': 'ORGANIZATION_TYPE'},
					  {'dimension': programAreaDimension, 'columnName': 'PROGRAM_AREA_NAME'},
					  {'dimension': awardsOrgType, 'columnName': 'award_organization_type'}];

		proposalsSankey = dc.sankey("#organization-type-sankey")
								.width(900)
								.height(500)
								.levels(levels)
								.measureColumn('measure')
								.nodeWidth(30);

		proposalsTable = dc.dynatableComponent("#organization-type-table")
							.dimension(orgTypeDimension)
							.group(programGroup)
							.columns([{label: "Proposal", csvColumnName: "PROPOSAL_TITLE"},
									  {label: "Organization Type", csvColumnName: "ORGANIZATION_TYPE"},
					                  {label: "Program Area", csvColumnName: "PROGRAM_AREA_NAME"},
					                  {label: "Organization Awarded", csvColumnName: "award_organization_type"},
					                  {label: "Opportunity Begin Date", csvColumnName: 'FUNDING_OPPORTUNITY_BEGIN_DATE'},
					                  {label: "Opportunity End Date", csvColumnName: 'FUNDING_OPPORTUNITY_END_DATE', alignment: "right"}])

		dc.renderAll();
		$('#loading').addClass('loaded');
		console.log(data[0]);
	});
}

});




