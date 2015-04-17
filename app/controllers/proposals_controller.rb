class ProposalsController < ApplicationController

	def submission_fiscal_year
		year = params[:year]

		#MAKE SURE to change AWARD_FISCAL_YEAR to SUBMISSION_FISCAL_YEAR !!IMPORTANT
		db_query = Proposal.where("Fiscal_Year = '#{year}'")

		respond_to do |format|
			format.json {render json: db_query}
		end
	end

	def history
		aging_type = params[:aging_type]

		db_query = HistoryDashboard.where(aging_type: aging_type)

		respond_to do |format|
			format.json {render json: db_query}
		end
	end

end