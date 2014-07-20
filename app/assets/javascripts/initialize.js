$(document).ready(initialize)


function initialize() {
  var stepModels = new StepModels()
  var stepView = new StepView()
  stepController = new StepController(stepModels, stepView)
  stepController.init()

  setListeners()
}

function setListeners() {
  setActionPlanDisplayLogicListeners()
  setActionPlanAjaxListeners()
  setTextMessageDisplayLogicListeners()
}