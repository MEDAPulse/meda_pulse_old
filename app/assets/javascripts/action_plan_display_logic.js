function setActionPlanDisplayLogicListeners(){
  $('body').on('click', '#show-client-form', toggleAddClientForm)
  $('body').on('click', '.show-steps', showStepsLink)
  $('body').on('click', '.show-goals', showGoalsLink)
  $('body').on('click', '.show-goals-steps', showGoalsAndStepsLink)
  $('body').on('click', '.hide-steps', hideStepsLink)
  $('body').on('click', '.hide-goals', hideGoalsLink)
  $('body').on('click', '#add-goal', toggleGoalForm)
  $('body').on('click', '#add-action-plan', toggleActionPlanForm)
}

function toggleAddClientForm(e){
  e.preventDefault()
  var addClientForm = document.getElementById('new_client')
  addClientForm.classList.toggle('hidden')
}

function showStepsLink(e){
  e.preventDefault()
  var goalId = this.dataset.goalId
  var goalDiv = document.getElementById('goal-'+goalId)
  showSteps(goalDiv)
}

function showSteps(goalDiv){
  var showStepsLinkElement = goalDiv.querySelector('.show-steps')
  changeLinkToHideSteps(showStepsLinkElement)
  var goalSteps = goalDiv.querySelector('.goal-steps')
  goalSteps.classList.remove('hidden')
}

function hideStepsLink(e){
  e.preventDefault()
  var goalId = this.dataset.goalId
  var goalDiv = document.getElementById('goal-'+goalId)
  hideSteps(goalDiv)
}

function hideSteps(goalDiv){
  var hideStepsLinkElement = goalDiv.querySelector('.hide-steps')
  changeLinkToShowSteps(hideStepsLinkElement)
  var goalSteps = goalDiv.querySelector('.goal-steps')
  goalSteps.classList.add('hidden')
}

function changeLinkToHideSteps(showStepsLinkElement){
  if(showStepsLinkElement) {
    showStepsLinkElement.classList.remove('show-steps')
    showStepsLinkElement.classList.add('hide-steps')
    showStepsLinkElement.innerText = "Hide Steps"
  }
}

function changeLinkToShowSteps(hideStepsLinkElement){
  if(hideStepsLinkElement) {
    hideStepsLinkElement.classList.remove('hide-steps')
    hideStepsLinkElement.classList.add('show-steps')
    hideStepsLinkElement.innerText = "Show Steps"
  }
}

function showGoalsLink(e){
  e.preventDefault()
  var actionPlanId = this.dataset.actionPlanId
  var actionPlanDiv = document.getElementById('action-plan-'+actionPlanId)
  showGoals(actionPlanDiv)
}

function showGoals(actionPlanDiv){
  var showGoalsLinkElement = actionPlanDiv.querySelector('.show-goals')
  changeShowGoalsLinkToHideGoals(showGoalsLinkElement)
  var actionPlanGoals = actionPlanDiv.querySelector('.action-plan-goals')
  actionPlanGoals.classList.remove('hidden')
}

function showGoalsAndStepsLink(e){
  e.preventDefault()
  var actionPlanId = this.dataset.actionPlanId
  var actionPlanDiv = document.getElementById('action-plan-'+actionPlanId)
  showGoalsAndSteps(actionPlanDiv)
}

function showGoalsAndSteps(actionPlanDiv) {
  showGoals(actionPlanDiv)
  var goalDivs = actionPlanDiv.getElementsByClassName('goal')
  numberOfGoals = goalDivs.length
  for(var i=0; i<numberOfGoals; i++){
    showSteps(goalDivs[i])
  }
}

function changeShowGoalsLinkToHideGoals(showGoalsLinkElement) {
  if (showGoalsLinkElement) {
    showGoalsLinkElement.classList.remove('show-goals')
    showGoalsLinkElement.classList.add('hide-goals')
    showGoalsLinkElement.innerText = 'Hide All'
  }
}

function changeHideGoalsLinkToShowGoals(hideGoalsLinkElement) {
  if(hideGoalsLinkElement){
    hideGoalsLinkElement.classList.add('show-goals')
    hideGoalsLinkElement.classList.remove('hide-goals')
    hideGoalsLinkElement.innerText = 'Show Goals'
  }
}

function hideGoalsLink(e){
  e.preventDefault()
  var actionPlanId = this.dataset.actionPlanId
  var actionPlanDiv = document.getElementById('action-plan-'+actionPlanId)
  hideGoalsAndSteps(actionPlanDiv)
}

function hideGoalsAndSteps(actionPlanDiv){
  var hideGoalsLinkElement = actionPlanDiv.querySelector('.hide-goals')
  changeHideGoalsLinkToShowGoals(hideGoalsLinkElement)
  var actionPlanGoals = actionPlanDiv.querySelector('.action-plan-goals')
  actionPlanGoals.classList.add('hidden')
  var goalDivs = actionPlanDiv.getElementsByClassName('goal')
  numberOfGoals = goalDivs.length
  for(var i=0; i<numberOfGoals; i++){
    hideSteps(goalDivs[i])
  }
}

function toggleGoalForm(e){
  e.preventDefault()
  var actionPlanId = this.dataset.actionPlanId
  var actionPlanDiv = document.getElementById('action-plan-'+actionPlanId)
  var goalFormElement = actionPlanDiv.querySelector('#new_goal')
  goalFormElement.classList.toggle('hidden')
}

function toggleActionPlanForm(e) {
  e.preventDefault()
  var actionPlanForm = $('#new_action_plan')[0]
  actionPlanForm.classList.toggle('hidden')
}