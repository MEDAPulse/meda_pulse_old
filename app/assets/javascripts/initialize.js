$(document).on('page:change', initialize)

function initialize() {
  setListeners()
}

function setListeners() {
  setActionPlanDisplayLogicListeners()
  setActionPlanAjaxListeners()
}