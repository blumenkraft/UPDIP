class UsersController < ApplicationController
  def index
    @users = User.search(params[:search])
  end
end
