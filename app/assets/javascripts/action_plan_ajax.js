function setActionPlanAjaxListeners() {
  $('body').on('ajax:success', '#new_goal', appendGoal)
  $('body').on('ajax:success', '#new_action_plan', appendActionPlan)
  $('body').on('ajax:success', '.delete-action-plan', removeActionPlan)
  $('body').on('ajax:success', '.delete-goal', removeGoal)
  $('body').on('ajax:success', '#new_step', appendStep)
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

function hideActionPlanForm() {
  var actionPlanForm = $('#new_action_plan')[0]
  actionPlanForm.classList.add('hidden')
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
  hideActionPlanForm()
}

function removeActionPlan(e, response){
  actionPlanDiv = $('#action-plan-'+response.action_plan_id)[0]
  actionPlanDiv.remove()
}

function removeGoal(e, response){
  goalDiv = $('#goal-'+response.goal_id)[0]
  goalDiv.remove()
}

function appendStep(e, response){
  goalDiv = $('#goal-'+response.goal_id)[0]
  newStepDiv = $.parseHTML(response.html)[0]
  goalDiv.querySelector('.goal-steps').appendChild(newStepDiv)
  goalDiv.querySelector('#step_description').value = ""
  goalDiv.querySelector('#step_due_by').value = ""
}