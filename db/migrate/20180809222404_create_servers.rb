class CreateServers < ActiveRecord::Migration[5.2]
  def change
    create_table :servers do |t|
      t.integer :admin_id, null: false
      t.string :name, null: false
      t.string :topic
      t.string :icon_url, null: false
    end

    add_index :servers, :admin_id
    add_index :servers, :name, unique: true
  end
end