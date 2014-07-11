function setTextMessageDisplayLogicListeners(){
  $('body').on('keyup', '#text_message_content', updateTextMessageLength)
}

function updateTextMessageLength(e) {
  var textLength = $('#text_message_content').val().length
  $('#text_length').text(textLength)
}