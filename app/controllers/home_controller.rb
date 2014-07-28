class HomeController < ApplicationController
  def index
    if logged_in?
      redirect_to action: "dashboard"
    end
    @user = User.new
  end

  def dashboard
    @user = current_user
    @client = Client.new
    @clients = @user.clients
  end
end