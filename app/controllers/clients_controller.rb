class ClientsController < ApplicationController
  def create
    @client = Client.new(client_params)
    @client.user = current_user
    if @client && @client.save
      redirect_to dashboard_path
    else
      flash[:errors] = @client.errors.full_messages
      redirect_to dashboard_path
    end
  end

  def destroy
  end

  def show
    @client = Client.includes(action_plans: {goals: :steps}).find(params[:id])
    @user = current_user
    @goal = Goal.new
    @action_plan = ActionPlan.new
    @step = Step.new
  end

  def update
  end

  private

  def client_params
    params.require(:client).permit(:first_name, :last_name, :salesforce_id, :phone, :email)
  end
end