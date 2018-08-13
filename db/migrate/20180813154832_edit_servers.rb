class EditServers < ActiveRecord::Migration[5.2]
  def change
    remove_column :servers, :topic
  end
end
