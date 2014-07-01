function setActionPlanAjaxListeners() {
  $('body').on('ajax:success', '#new_goal', appendGoal)
}

function appendGoal(e, response) {
  actionPlanDiv = getActionPlanDiv(response.action_plan_id)
  goalsDiv = actionPlanDiv.querySelector('.goals')
  newGoalDiv = $.parseHTML(response.html)[0]
  goalsDiv.appendChild(newGoalDiv)
  hideGoalForm(actionPlanDiv)
  clearGoalForm(actionPlanDiv)
  showSteps(newGoalDiv)
}

function getActionPlanDiv(actionPlanId) {
  return document.getElementById('action-plan-'+actionPlanId)
}

function hideGoalForm(actionPlanDiv) {
  actionPlanDiv.querySelector('#new_goal').classList.add('hidden')
}

function clearGoalForm(actionPlanDiv) {
  actionPlanDiv.querySelector('#goal_description').value = ""
}