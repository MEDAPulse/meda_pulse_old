class UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    @user.password = params[:password]
    if @user && @user.save
      session[:user_id] = @user.id
      redirect_to dashboard_path
    end
  end

  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :email)
  end
end