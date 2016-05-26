class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  before_action :http_basic_authenticate

  private
  def http_basic_authenticate
    unless Rails.env == 'development'
      authenticate_or_request_with_http_basic do |user, passwd|
        if user == ENV['APP_USER'] && passwd == ENV['APP_PASSWD']
          true
        else
          false
        end
      end
    end
  end
end
