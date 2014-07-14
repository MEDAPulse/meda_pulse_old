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
    @text_message = TextMessage.new
    @text_messages = @client.text_messages.order(created_at: :desc)
    @formatted_phone_number = format_phone_number(@client.phone)
  end

  def update
  end

  def steps
    client = Client.find(params[:client_id])
    action_plans = client.action_plans
    goals = action_plans.map {|action_plan| action_plan.goals}.flatten
    steps = goals.map {|goal| goal.steps }.flatten
    render json: steps
  end

  private

  def client_params
    params.require(:client).permit(:first_name, :last_name, :salesforce_id, :phone, :email)
  end

  def format_phone_number(phone_num)
    area_code = phone_num[2..4]
    phone_num_section_1 = phone_num[5..7]
    phone_num_section_2 = phone_num[8..11]

    "(#{area_code}) #{phone_num_section_1}-#{phone_num_section_2}"
  end

end