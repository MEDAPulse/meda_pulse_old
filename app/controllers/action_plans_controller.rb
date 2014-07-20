class ActionPlansController < ApplicationController

  def create
    @action_plan = ActionPlan.new(action_plan_params)
    if @action_plan && @action_plan.save
      render partial: 'shared/action_plan', locals: {action_plan: @action_plan, new_goal: Goal.new}
    else
      #send error messages
    end
  end

  def destroy
    @action_plan = ActionPlan.find(params[:id])
    step_ids = action_plan_step_ids(@action_plan)
    if @action_plan && @action_plan.destroy
      render json: {action_plan_id: @action_plan.id, step_ids: step_ids}
    else
      #send error messages
    end

  end

  def update
  end

  private

  def action_plan_params
    params.require(:action_plan).permit(:description, :client_id)
  end

  def action_plan_step_ids(action_plan)
    steps = []
    action_plan.goals.each do |goal|
      steps << goal.steps
    end
    steps.flatten!
    step_ids = steps.map {|step| step.id}
  end
end