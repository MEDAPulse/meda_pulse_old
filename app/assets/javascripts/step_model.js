function StepModel(stepJSON) {
  this.id = stepJSON.id
  this.complete = stepJSON.complete
  this.description = stepJSON.description
  this.due_by = stepJSON.due_by
  this.goalId = stepJSON.goal_id
}

StepModel.prototype = {

}