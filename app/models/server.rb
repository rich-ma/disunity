class Server < ApplicationRecord
  validates :admin_id, :icon_url, presence: true

  belongs_to :admin,
    foreign_key: :admin_id,
    class_name: :User

  


end