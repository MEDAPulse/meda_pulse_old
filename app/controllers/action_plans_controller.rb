class ActionPlansController < ApplicationController

  def create
    @action_plan = ActionPlan.new(action_plan_params)
    if @action_plan && @action_plan.save
      render partial: 'shared/action_plan', locals: {action_plan: @action_plan, new_goal: Goal.new}
    else
      #flash error messages
    end
  end

  def destroy
  end

  def update
  end

  private

  def action_plan_params
    params.require(:action_plan).permit(:description, :client_id)
  end
end