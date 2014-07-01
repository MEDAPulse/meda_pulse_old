function setActionPlanAjaxListeners() {
  $('body').on('ajax:success', '#new_goal', appendGoal)
  $('body').on('ajax:success', '#new_action_plan', appendActionPlan)
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

function appendActionPlan(e, actionPlanHTML) {
  newActionPlanDiv = $.parseHTML(actionPlanHTML)[0]
  actionPlansDiv = document.getElementById('action-plans')
  actionPlansDiv.appendChild(newActionPlanDiv)
  showGoals(newActionPlanDiv)
  $('#action_plan_description')[0].value = ""
}
