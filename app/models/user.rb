class User < ActiveRecord::Base
  has_attached_file :avatar, default_url: ActionController::Base.helpers.asset_path('/assets/missing.png')
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\Z/

  before_save :fetch_avatar

  def fetch_avatar
    self.avatar = open("https://api.app.net/users/@#{self.username}/avatar")
  end
end
