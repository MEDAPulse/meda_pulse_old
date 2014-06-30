class GoalsController < ApplicationController
  def create
    @goal = Goal.new(goal_params)
    if @goal && @goal.save
      redirect_to @goal.action_plan.client
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