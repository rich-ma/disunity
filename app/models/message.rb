class Message < ApplicationRecord
  validates :author_id, :channel_id, :content, presence: true

  belongs_to :author,
  foreign_key: :author_id,
  class_name: :User

  belongs_to :channel,
  foreign_key: :channel_id,
  class_name: :Channel

end