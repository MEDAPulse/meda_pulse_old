var stepFactory ={
  createSteps: function(stepJSONs) {
    var numSteps = stepJSONs.length
    var stepObjects = []
    for(var i=0; i<numSteps; i++) {
      var stepObj = new this.createStep(stepJSONs[i])
      stepObjects.push(stepObj)
    }
    return stepObjects
  },

  createStep: function(stepJSON) {
    var stepObj = new StepModel(stepJSON)
    return stepObj
  },
}