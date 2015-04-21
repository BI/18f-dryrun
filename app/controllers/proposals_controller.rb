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

		puts "\n\nAGING TYPE: #{aging_type}\n\n"

		db_query = HistoryDashboard.where(:aging_type => aging_type)

		respond_to do |format|
			puts "FORMAT: #{format}\n\n"
			puts "db_query: #{db_query}\n\n"
			format.json {render json: db_query}
		end
	end

end