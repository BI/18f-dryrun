class Proposal < ActiveRecord::Base
	self.table_name = "proposals_view"
	self.primary_key = "PROPOSAL_NUMBER"

	def award_organization_type
		aot = "Not Awarded"
		if self.STATUS == "Awarded"
			aot = "Award - " + self.ORGANIZATION_TYPE 
		end

		aot
	end

	#each proposal carries just a single value count of one
	def measure
		1
	end
	def as_json(options={})
		super({ :methods => [:award_organization_type, :measure]})
	end
end
