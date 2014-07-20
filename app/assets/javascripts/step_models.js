function StepModels() {
  this.steps = []
}

StepModels.prototype = {
  getStep: function(stepId) {
    var stepCount = this.steps.length
    var steps = this.steps
    for(var i=0; i<stepCount; i++) {
      var step = steps[i]
      if(step.id === stepId) {
        return step
      }
    }
  },

  getStepIndex: function(stepId) {
    var stepCount = this.steps.length
    var steps = this.steps
    for(var i=0; i<stepCount; i++) {
      var step = steps[i]
      if(step.id === stepId) {
        return i
      }
    }
  },

  deleteStep: function(stepId) {
    var steps = this.steps
    var stepIndex = this.getStepIndex(stepId)
    steps.splice(stepIndex, 1)
  },

  deleteSteps: function(stepIdArray) {
    var stepCount = stepIdArray.length
    for(var i=0; i<stepCount; i++){
      this.deleteStep(stepIdArray[i])
    }
  },

  addStep: function(stepModel) {
    this.steps.push(stepModel)
  },
}