class ServersMembership < ApplicationRecord
  validates :user_id, :server_id, presence: true

  validate :ensure_unique_user

  belongs_to :user
  belongs_to :server


  private
  def ensure_unique_user
    return true if self.server_id.nil?
    @membership = ServersMembership.where(user_id: self.user_id, server_id: self.server_id)
    if @membership.length.positive? 
      errors[:membership] << 'User is already in this server'
    end
    true
  end
end
