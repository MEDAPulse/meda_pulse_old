class StepsController < ApplicationController
  def create
    @step = Step.new(step_params)
    if @step && @step.save
      html = render_to_string(partial: 'shared/step', locals:{step: @step})
      goal_id = @step.goal.id

      render json: {html: html, goal_id: goal_id}
    else

    end
  end

  def destroy
  end

  def update
  end

  private

  def step_params
    params.require(:step).permit(:description, :goal_id, :due_by)
  end
end