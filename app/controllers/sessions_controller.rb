class SessionsController < ApplicationController
  def create
    @user = User.find_by_email(params[:email])
    if @user && @user.authenticate(params[:password])
      session[:user_id] = @user.id

      redirect_to dashboard_path
    else
      flash[:notice] = "Invalid email and/or password"
      redirect_to :root #flash error messages?
    end
  end

  def destroy
    reset_session
    redirect_to :root
  end
end