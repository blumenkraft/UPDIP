class StaticsController < ApplicationController
  def legal
    @user = User.first
  end
end