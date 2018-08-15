class CreateChannels < ActiveRecord::Migration[5.2]
  def change
    create_table :channels do |t|
      t.string :server_id, null: false
      t.string :name, null: false
      t.integer :type
      t.integer :user_limit
      t.integer :last_message_id
      t.timestamps
    end
    add_index :channels, :server_id
    add_index :channels, [:server_id, :name], unique: true
  end
end
