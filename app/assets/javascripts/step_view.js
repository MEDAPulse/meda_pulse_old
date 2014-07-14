function StepView() {
  this.toggleButtonDivSelector = '.step-complete-toggle'
  this.stepCompleteYesButtonSelector = '.step-complete-yes'
  this.stepCompleteNoButtonSelector = '.step-complete-no'
}

StepView.prototype = {
  getToggleButtonDivs: function() {
    return $(this.toggleButtonDivSelector)
  },

  getStepCompleteYesButtons: function() {
    return $(this.stepCompleteYesButtonSelector)
  },

  getStepCompleteNoButtons: function() {
    return $(this.stepCompleteNoButtonSelector)
  },

  markStepAsComplete: function(stepId) {
    var stepCompleteToggleDiv = document.getElementById("step-complete-toggle-"+stepId)
    var stepCompleteYesDiv = stepCompleteToggleDiv.getElementsByTagName('li')[1]
    var stepCompleteNoDiv = stepCompleteToggleDiv.getElementsByTagName('li')[0]
    stepCompleteNoDiv.classList.remove('on')
    stepCompleteYesDiv.classList.add('on')
  },

  markStepAsNotComplete: function(stepId) {
    var stepCompleteToggleDiv = document.getElementById("step-complete-toggle-"+stepId)
    var stepCompleteYesDiv = stepCompleteToggleDiv.getElementsByTagName('li')[1]
    var stepCompleteNoDiv = stepCompleteToggleDiv.getElementsByTagName('li')[0]
    stepCompleteNoDiv.classList.add('on')
    stepCompleteYesDiv.classList.remove('on')
  }
}
