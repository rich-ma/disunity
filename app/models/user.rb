class User < ApplicationRecord
  DEFAULT_AVATAR_URL= [
		"https://cdn.discordapp.com/embed/avatars/0.png",
		"https://cdn.discordapp.com/embed/avatars/1.png",
		"https://cdn.discordapp.com/embed/avatars/2.png",
		"https://cdn.discordapp.com/embed/avatars/3.png",
		"https://cdn.discordapp.com/embed/avatars/4.png",
		"https://cdn.discordapp.com/embed/avatars/5.png"
	]

  # avatar_url needs to be validates
  validates :username, :email, :password_digest, :session_token, :username_salt, :avatar_url, presence: true
  validates :email, :session_token, uniqueness: true
  validates_uniqueness_of :username, :scope => [:username_salt]
  validates :password, length: {minimum: 6, allow_nil: true}

  attr_reader :password
  after_initialize :ensure_session_token, :ensure_salt, :ensure_avatar_url

  has_many :servers_owned, 
    foreign_key: :admin_id, 
    class_name: :Server, 
    dependent: :destroy

  has_many :memberships, 
    foreign_key: :user_id, 
    class_name: :ServersMembership, 
    dependent: :destroy

  has_many :servers, 
    through: :memberships, 
    source: :server

  has_many :messages,
    foreign_key: :author_id,
    class_name: :Message,
    dependent: :destroy

  has_one_attached :photo

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    generate_unique_session_token
    save!
    self.session_token
  end

  private

  def ensure_avatar_url
    self.avatar_url ||= DEFAULT_AVATAR_URL.sample
  end

  def generate_salt
    salt = ""
    4.times {salt << rand(0..9).to_s}
    salt
  end

  def ensure_salt
    self.username_salt ||= generate_salt
    # while User.where(username: self.username, username_salt: self.username_salt).exists?
    #   self.username_salt = generate_salt
    # end
  end

  def ensure_session_token
    self.session_token ||= generate_unique_session_token
  end

  def new_session_token
    SecureRandom.urlsafe_base64
  end

  def generate_unique_session_token
    self.session_token = new_session_token
    while User.find_by(session_token: self.session_token)
      self.session_token = new_session_token
    end
    self.session_token
  end
end
