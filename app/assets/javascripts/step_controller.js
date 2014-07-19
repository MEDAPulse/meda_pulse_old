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
    var ajaxRequest = $.ajax({
      url: '/steps/mark_complete/'+stepId,
      type: 'PUT'
    })
    ajaxRequest.done(this.updateStepCompleteStatus.bind(this))
  },

  updateStepCompleteStatus: function(response) {
    var stepId = response.step_id
    var stepComplete = response.step_complete
    var step = this.model.getStep(stepId)
    step.complete = stepComplete
    this.updateAllStepsCompleteStatusView()
  },

  setStepToNotComplete: function(e) {
    e.preventDefault()
    var stepId = e.target.dataset.stepId
    var ajaxRequest = $.ajax({
      url: '/steps/mark_not_complete/'+stepId,
      type: 'PUT'
    })
    ajaxRequest.done(this.updateStepCompleteStatus.bind(this))
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
    this.updateAllStepsCompleteStatusView()
  },

  updateAllStepsCompleteStatusView: function() {
    var stepObjects = this.model.steps
    var numSteps = stepObjects.length
    for (var i=0; i<numSteps; i++) {
      var stepObj = stepObjects[i]
      this.updateStepCompleteStatusView(stepObj)
    }
  },

  updateStepCompleteStatusView: function(stepObj) {
    if (stepObj.complete) {
      this.view.markStepAsComplete(stepObj.id)
    } else {
      this.view.markStepAsNotComplete(stepObj.id)
    }
  },

}