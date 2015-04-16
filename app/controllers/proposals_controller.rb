class ProposalsController < ApplicationController

	def results
		year = params[:year]

		db_query = Proposals.all.where(proposal: {year: year})

		respond_to do |format|
			format.json {render json: db_query}

			format.csv {render_csv(db_query)}
		end
	end

	private

	def render_csv(year)
	set_file_headers
	set_streaming_headers

	response.status = 200

	#setting the body to an enumerator, rails will iterate this enumerator
	self.response_body = csv_lines(year)
	end


	def set_file_headers
		file_name = "transactions.csv"
		headers["Content-Type"] = "text/csv"
		headers["Content-disposition"] = "attachment; filename=\"#{file_name}\""
	end


	def set_streaming_headers
		#nginx doc: Setting this to "no" will allow unbuffered responses suitable for Comet and HTTP streaming applications
		headers['X-Accel-Buffering'] = 'no'

		headers["Cache-Control"] ||= "no-cache"
		headers.delete("Content-Length")
	end

	def csv_lines(year)

		Enumerator.new do |y|
		  y << Transaction.csv_header.to_s

		  Transaction.find_in_batches(proposal: {year: year}, 5000){ |transaction| y << transaction.to_csv_row.to_s }
		end

	end
end