class ProposalsController < ApplicationController

	def submission_fiscal_year
		year = params[:year]

		#MAKE SURE to change AWARD_FISCAL_YEAR to SUBMISSION_FISCAL_YEAR !!IMPORTANT
		db_query = Proposal.where("AWARD_FISCAL_YEAR = '#{year}'")

		respond_to do |format|
			format.json {render json: db_query}
		end
	end

end