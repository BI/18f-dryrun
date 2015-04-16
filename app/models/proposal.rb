class Proposal < ActiveRecord::Base
	self.table_name = "proposals_view"
	self.primary_key = "PROPOSAL_NUMBER"
end
