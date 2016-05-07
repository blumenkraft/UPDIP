class User < ActiveRecord::Base
  has_attached_file :avatar
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\Z/

  def fetch_avatar
    self.avatar = open("https://api.app.net/users/@#{self.name}/avatar")
  end
end
