function setActionPlanAjaxListeners() {
  $('body').on('ajax:success', '#new_goal', appendGoal)
  $('body').on('ajax:success', '#new_action_plan', appendActionPlan)
  $('body').on('ajax:success', '.delete-action-plan', removeActionPlan)
  $('body').on('ajax:success', '.delete-goal', removeGoal)
  $('body').on('ajax:success', '#new_step', appendStep)
  $('body').on('ajax:success', '.delete-step', removeStep)
  $('body').on('ajax:success', '#new_text_message', appendTextMessage)
}

function appendGoal(e, response) {
  var actionPlanDiv = getActionPlanDiv(response.action_plan_id)
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

function hideStepForm(goalDiv) {
  goalDiv.querySelector('#new_step').classList.add('hidden')
}

function hideActionPlanForm() {
  var actionPlanForm = $('#new_action_plan')[0]
  actionPlanForm.classList.add('hidden')
}

function clearGoalForm(actionPlanDiv) {
  actionPlanDiv.querySelector('#goal_description').value = ""
}

function appendActionPlan(e, actionPlanHTML) {
  var newActionPlanDiv = $.parseHTML(actionPlanHTML)[0]
  var actionPlansDiv = document.getElementById('action-plans')
  actionPlansDiv.appendChild(newActionPlanDiv)
  showGoals(newActionPlanDiv)
  $('#action_plan_description')[0].value = ""
  hideActionPlanForm()
}

function removeActionPlan(e, response){
  var actionPlanDiv = $('#action-plan-'+response.action_plan_id)[0]
  stepController.model.deleteSteps(response.step_ids)
  actionPlanDiv.remove()
}

function removeGoal(e, response){
  stepController.model.deleteSteps(response.step_ids)
  var goalDiv = $('#goal-'+response.goal_id)[0]
  goalDiv.remove()
}

function appendStep(e, response){
  stepController.createStep(response.step)
  var goalDiv = $('#goal-'+response.goal_id)[0]
  var newStepDiv = $.parseHTML(response.html)[0]
  goalDiv.querySelector('.steps').appendChild(newStepDiv)
  goalDiv.querySelector('#step_description').value = ""
  goalDiv.querySelector('#step_due_by').value = ""
  hideStepForm(goalDiv)
}

function removeStep(e, response){
  stepController.model.deleteStep(response.step_id)
  var stepDiv = $('#step-'+response.step_id)[0]
  stepDiv.remove()
}

function appendTextMessage(e, response){
  var textMessageHistoryDiv = $('#text-message-history')[0]
  var newTextDiv = $.parseHTML(response)[0]
  $(textMessageHistoryDiv).prepend(newTextDiv)
  document.getElementById("text_message_content").value = ""
  $('#text_length').text("0")
}