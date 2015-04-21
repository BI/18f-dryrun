var $ = require('jquery');
var jQuery = $;
var qd = require('quickdash-core'),
    inflection = require('inflection'),
    dc = require('dc-custom'),
    fastclick = require('fastclick'),
    dtip = require('d3-tip')(d3);
var foundation = require('zurb-foundation');
var foundationOffcanvas = require('../../../node_modules/zurb-foundation/js/foundation/foundation.offcanvas.js');
var programTreemap;

require('../stylesheets/18f.scss');
require('../stylesheets/program_treemap.scss');

$(document).ready(function() {
	$(document).foundation();        
});

// var df = require('./lib/bubblemap-factories'),
//     dataConfig = require('./lib/bubblemap-data-config');

$(document).ready(function(){

	programTreemap = dc.treeMap("#program-treemap")
								.topBarHeight(45)
								.height(500)
								.crumbTrailX(10)
								.crumbTrailY(10)
								.crumbTrailHeight(".75em")
								.labelFunctions([
							      function(textElement, scale, opac) {
							        var opacity = (opac !== undefined) ? opac : 1;
							        
							        textElement.call(function (t) {
							          t.text(function(d){return d.name;})
							          .attr("x", function(d) {return scale.x(d.x) + 6;})
							          .attr("y", function(d) {
							            var offset = 6;
							            if(scale.y(d.dy) < 10)
							              offset = 0;
							            var calculatedHeight = (scale.y(d.y + d.dy) - scale.y(d.y)) / 8;
							            return scale.y(d.y) + offset + textSizeMinMax(scale, d, d.name, calculatedHeight);})
							          .attr("font-size", function(d) {
							            var rectHeight = (scale.y(d.y + d.dy) - scale.y(d.y));
							            var calculatedHeight = rectHeight / 8;
							            var rectifiedHeight = textSizeMinMax(scale, d, d.name, calculatedHeight);
							            if(rectHeight < rectifiedHeight)
							              return 0;
							            return rectifiedHeight;
							          })
							          .style("fill-opacity", opacity);
							        });

							      },
							      function(textElement, scale, opac) {
							        var opacity = (opac !== undefined) ? opac : 1;  
							        textElement.call(function(t) {
							          t.text(function(d){
							            return d.value;
							          })
							          .attr("text-anchor", "middle")
							          .attr("x", function(d) {
							            return scale.x(d.dx/2 +d.x);
							          })
							          .attr("y", function(d) {
							            var offset = 6;
							            if(scale.y(d.dy) < 200)
							              offset = 3.5;
							            return scale.y(d.dy+ d.y) - offset;
							          })
							          .attr("font-size", function(d) {
							            var rectHeight = (scale.y(d.y + d.dy) - scale.y(d.y));
							            var rectWidth = (scale.x(d.x + d.dx) - scale.x(d.x))
							            if(rectHeight <  rectWidth) {
							              var calculatedHeightUseY = (scale.y(d.y + d.dy) - scale.y(d.y)) / 3;
							              var rectifiedHeight = textSizeMinMax(scale, d, this.textContent , calculatedHeightUseY)
							              if(rectHeight < rectifiedHeight)
							                return 0;
							              return rectifiedHeight;
							            }
							            else {
							              var calculatedHeightUseX = rectWidth / 4.5;
							              var rectifiedHeight = textSizeMinMax(scale, d, this.textContent, calculatedHeightUseX)
							              if(rectHeight < rectifiedHeight)
							                return 0;
							              return rectifiedHeight;
							            }
							          })
							          .style("fill-opacity", opacity);

							        });
							      }])
								.measureColumn('measure')
								.rootName("")
								.titleBarCaption(function(dataNode) {
								      var columnNameKey = {"award_organization_type" : "Awards", 
								                            "PROGRAM_AREA_NAME" : "Program Area",
								                            "PROGRAM_NAME" : "Program"};
								      return title(dataNode);

								      function title(d) {
								          if(d.parent) {
								            return title(d.parent) + d.name + " // " + columnNameKey[d._children[0].columnName] + ": ";
								          }
								          else {
								            return columnNameKey[d._children[0].columnName] + ": " + d.name;
								          }
								      }
								    })
								.colors(d3.scale.ordinal().range(["1", "2", "3", "4", "5"]))
			                    .showNegativeTotal(true);

	loadDataAndRender($('#year-select').val())

	//load data based on year selected
	$('#year-select').on("change", function(){
		loadDataAndRender(this.value);
	});

});

//make request for data based on year and load data for the chart
function loadDataAndRender(year) {
	$('#loading').removeClass('loaded');

	//make the request
	$.get("proposals/submission_fiscal_year/" + year + ".json", function(data, status) {
		var crossfilterData = crossfilter(data);
		var awardsOrgType = crossfilterData.dimension(function(d) {return d.award_organization_type;})
		var programAreaDimension = crossfilterData.dimension(function(d) {return d.PROGRAM_AREA_NAME;})
		var programDimension = crossfilterData.dimension(function(d) {return d.PROGRAM_NAME})

		var programGroup = awardsOrgType.group();

		var levels = [{'dimension': awardsOrgType, 'columnName': 'award_organization_type'},
					  {'dimension': programAreaDimension, 'columnName': 'PROGRAM_AREA_NAME'},
					  {'dimension': programDimension, 'columnName': 'PROGRAM_NAME'}];

		
		programTreemap.levels(levels);

		var proposalsTable = dc.dynatableComponent("#organization-type-table")
							.dimension(awardsOrgType)
							.group(programGroup)
							.columns([{label: "Proposal", csvColumnName: "PROPOSAL_TITLE"},
									  {label: "Organization Type", csvColumnName: "ORGANIZATION_TYPE"},
					                  {label: "Program Area", csvColumnName: "PROGRAM_AREA_NAME"},
					                  {label: "Organization Awarded", csvColumnName: "award_organization_type"},
					                  {label: "Opportunity Begin Date", csvColumnName: 'FUNDING_OPPORTUNITY_BEGIN_DATE'},
					                  {label: "Opportunity End Date", csvColumnName: 'FUNDING_OPPORTUNITY_END_DATE', alignment: "right"}])


		dc.renderAll();
		programTreemap.filterAll();
		programTreemap.redraw();
		proposalsTable.redraw();

		$('#loading').addClass('loaded');
		console.log(data[0]);
	});
}

function textSizeMinMax(scale, d, text, calculatedHeight) {
  var minHeight = 12;
  var tooWideNewHeight = isTextTooWide(scale, d, text, calculatedHeight);
  if(tooWideNewHeight) {
    if(tooWideNewHeight < minHeight)
      return minHeight;
    return tooWideNewHeight;
  }
  else {
    if(calculatedHeight < minHeight)
      return minHeight;
    return calculatedHeight;
  }
}

function isTextTooWide(scale, d, text, calculatedHeight) {
  var letterWidth =(5/8) * calculatedHeight;
  var textWidth = letterWidth * text.length;
  var desiredWidth = scale.x(d.x + d.dx) - scale.x(d.x);
  if(textWidth > desiredWidth) {
    var percentBigger = textWidth / desiredWidth;
    textWidth = textWidth / percentBigger;
    calculatedHeight = textWidth / text.length * (8/5);
    return calculatedHeight;
  }
  else {
    return false;
  }

}

