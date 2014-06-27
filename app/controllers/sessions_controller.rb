class SessionsController < ApplicationController
  def create
    @user = User.find(params[:email])
    if @user && @user.authenticate(params[:password])
      session[:user_id] = @user.id
    else
      @errors = @user.errors
      redirect_to :root #flash error messages?
    end
  end

  def destroy
    reset_session
    redirect_to :root
  end
end