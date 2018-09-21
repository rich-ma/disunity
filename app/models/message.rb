class Message < ApplicationRecord
  validates :author_id, :channel_id, :content, presence: true
  default_scope { order(created_at: :desc) }

  after_create_commit do
    MessageCreationEventBroadcastJob.perform_now(self, "create")
  end

  after_destroy_commit do
    MessageCreationEventBroadcastJob.perform_now(self, "destroy")
  end

  after_update_commit do
    MessageCreationEventBroadcastJob.perform_now(self, "update")
  end


  belongs_to :author,
  foreign_key: :author_id,
  class_name: :User

  belongs_to :channel,
  foreign_key: :channel_id,
  class_name: :Channel

end