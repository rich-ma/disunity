class Channel < ApplicationRecord
  CHANNEL_TYPE = {
    0 => 'TEXT', 
    1 => 'VOICE'
  }

  validates :name, :server_id, presence: true
  validates_uniqueness_of :server_id, :scope => [:name]
  validates :channel_type, inclusion: { in: CHANNEL_TYPE.keys }

  after_initialize :ensure_type #:ensure_server_id

  belongs_to :server, 
  foreign_key: :server_id, 
  class_name: :Server,
  optional: true

  has_many :messages,
  foreign_key: :channel_id,
  class_name: :Message,
  dependent: :destroy

  private
  def ensure_type 
    self.channel_type ||= 0
  end

  # def ensure_server_id
  #   self.server_id ||= 
  # end
end