class CreateHistoryDashboards < ActiveRecord::Migration
  def change
    create_table :history_dashboards do |t|

      t.timestamps
    end
  end
end
