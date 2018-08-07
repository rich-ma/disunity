class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :nickname
      t.string :email, null: false
      t.string :username, null: false
      t.string :avatar_url
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :username_salt, null: false
      t.timestamps
    end

    add_index :users, :username
    add_index :users, :email, unique: true
    add_index :users, :session_token, unique: true
    add_index :users, [:username, :username_salt], unique: true

  end
end
