class StepsController < ApplicationController
  def create
    @step = Step.new(step_params)
    if @step && @step.save
      html = render_to_string(partial: 'shared/step', locals:{step: @step})
      goal_id = @step.goal.id

      render json: {html: html, goal_id: goal_id}
    else
      #send error messages
    end
  end

  def destroy
    @step = Step.find(params[:id])
    if @step && @step.destroy
      render json: {step_id: @step.id}
    else
      #send error messages
    end
  end

  def update
  end

  def mark_complete
    @step = Step.find(params[:step_id])
    @step.complete = true
    if @step.save
      render json: {step_id: @step.id, step_complete: @step.complete}
    end
  end

  def mark_not_complete
    @step = Step.find(params[:step_id])
    @step.complete = false
    if @step.save
      render json: {step_id: @step.id, step_complete: @step.complete}
    end
  end

  private

  def step_params
    params.require(:step).permit(:description, :goal_id, :due_by)
  end
end