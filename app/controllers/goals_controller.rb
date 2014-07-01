class GoalsController < ApplicationController
  def create
    @goal = Goal.new(goal_params)
    if @goal && @goal.save
      html = render_to_string(partial: 'shared/goal', locals: {goal: @goal})
      action_plan_id = @goal.action_plan.id

      render json: {html: html, action_plan_id: action_plan_id}
    else
      #flash error messages
    end
  end

  def destroy
  end

  def update
  end

  private

  def goal_params
    params.require(:goal).permit(:description, :action_plan_id)
  end

end