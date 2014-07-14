function StepController(stepModels, stepView) {
  this.model = stepModels
  this.view = stepView
}

StepController.prototype = {
  init: function() {
    this.setListeners()
    if (typeof clientId !== "undefined") {
      this.getSteps(clientId)
    }
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

  getSteps: function(clientId) {
    var ajaxRequest = $.ajax({
      url: '/clients/'+clientId+'/steps',
      type: 'GET'
    })

    ajaxRequest.done(this.createStepsModels.bind(this))
  },

  createStepsModels: function(stepJSONs) {
    var stepObjects = stepFactory(stepJSONs)
    this.model.steps = stepObjects
    this.updateAllStepsCompleteStatus()
  },

  updateAllStepsCompleteStatus: function() {
    var stepObjects = this.model.steps
    var numSteps = stepObjects.length
    for (var i=0; i<numSteps; i++) {
      var stepObj = stepObjects[i]
      this.updateStepCompleteStatus(stepObj)
    }
  },

  updateStepCompleteStatus: function(stepObj) {
    if (stepObj.complete) {
      this.view.markStepAsComplete(stepObj.id)
    } else {
      this.view.markStepAsNotComplete(stepObj.id)
    }
  },

}