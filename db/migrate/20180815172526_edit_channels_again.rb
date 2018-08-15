class EditChannelsAgain < ActiveRecord::Migration[5.2]
  def change
    remove_column :channels, :channel_type
    add_column :channels, :channel_type, :integer
    remove_column :channels, :server_id
    add_column :channels, :server_id, :integer
    add_index :channels, :server_id
    add_index :channels, [:server_id, :name], unique: true
  end
end
