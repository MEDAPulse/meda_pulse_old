$(document).ready(initialize)


function initialize() {
  setListeners()
}

function setListeners() {
  setActionPlanDisplayLogicListeners()
  setActionPlanAjaxListeners()
  setTextMessageDisplayLogicListeners()
}