class Server < ApplicationRecord
  DEFAULT_ICONS = ["https://image.flaticon.com/icons/svg/188/188955.svg", "https://image.flaticon.com/icons/png/512/280/280870.png", "https://image.flaticon.com/icons/svg/188/188987.svg", "https://image.flaticon.com/icons/svg/188/188996.svg"]

  validates :admin_id, :icon_url, :name, presence: true
  validates :name, uniqueness: true

  belongs_to :admin, foreign_key: :admin_id, class_name: :User
  has_one_attached :photo

  after_initialize :ensure_icon_url

  private
  def ensure_icon_url
    self.icon_url ||= DEFAULT_ICON.sample
  end
end