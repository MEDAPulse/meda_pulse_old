class HomeController < ApplicationController
  def index
    if logged_in?
      redirect_to action: "dashboard"
    end
  end

  def dashboard
  end
end