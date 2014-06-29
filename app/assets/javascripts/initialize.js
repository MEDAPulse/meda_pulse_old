$(document).ready(function(){
  setListeners()
})

function setListeners(){
  $('body').on('click', '#show-client-form', toggleAddClientForm)
  $('body').on('click', '.show-steps', showStepsLink)
  $('body').on('click', '.show-goals', showGoalsLink)
  $('body').on('click', '.show-goals-steps', showGoalsAndStepsLink)
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
  var goalSteps = goalDiv.querySelector('.goal-steps')
  goalSteps.classList.remove('hidden')
}

function showGoalsLink(e){
  e.preventDefault()
  var actionPlanId = this.dataset.actionPlanId
  var actionPlanDiv = document.getElementById('action-plan-'+actionPlanId)
  showGoals(actionPlanDiv)
}

function showGoals(actionPlanDiv){
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