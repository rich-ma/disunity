class CreateServersMemberships < ActiveRecord::Migration[5.2]
  def change
    create_table :servers_memberships do |t|
      t.integer :server_id, null: false
      t.integer :user_id, null: false
      t.timestamps
    end
    add_index :servers_memberships, [:server_id, :user_id], unique: true
  end
end
