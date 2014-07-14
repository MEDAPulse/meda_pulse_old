function StepController(stepModels, stepView) {
  this.models = stepModels
  this.view = stepView
}

StepController.prototype = {
  init: function() {
    this.setListeners()
  },

  setListeners: function() {
    $('body').on('click', this.view.stepCompleteYesButtonSelector, this.setStepToComplete.bind(this))
    $('body').on('click', this.view.stepCompleteNoButtonSelector, this.setStepToNotComplete.bind(this))
  },

  setStepToComplete: function(e) {
    e.preventDefault()
    var stepId = e.target.dataset.stepId
    this.view.markStepAsComplete(stepId)
  },

  setStepToNotComplete: function(e) {
    e.preventDefault()
    var stepId = e.target.dataset.stepId
    this.view.markStepAsNotComplete(stepId)
  },

}