qd = require('quickdash-core');

module.exports = qd.dataConfigurator({

	projectCount: {
    label: 'Project Count',
    autoConfig: 'totalSum'
  },
	
	state: {
    label: 'States',
    key_column: 'state_code',
    label_column: 'state_name',
    autoConfig: 'sum'
  },

  year: {
    label: 'Year',
    key_column: 'fiscal_year',
    dimension: function(opts) {
      var that = this;
      return opts.crossfilterObject.dimension(function(d){
        return parseInt(d[that.key_column]);
      });
    },
    group: function(opts) {
      var that = this;
      return this.dimension.group().reduceSum(function(d){
        return Math.round(d[opts.measureColumn]);
      });
    }
  },

  organizationType: {
    label: 'Organization Type',
    key_column: 'organization_type',
    autoConfig: 'sum'
  },

  programArea: {
    label: 'Program Area',
    key_column: 'program_area_name',
    autoConfig: 'sum'
  }	

});