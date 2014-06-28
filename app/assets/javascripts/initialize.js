$(document).ready(function(){
  setListeners()
})

function setListeners(){
  $('body').on('click', '#show-client-form', toggleAddClientForm)
}

function toggleAddClientForm(e){
  e.preventDefault()
  var addClientForm = document.getElementById('new_client')
  addClientForm.classList.toggle('hidden')
}