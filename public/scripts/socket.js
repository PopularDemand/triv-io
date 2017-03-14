// webpack for another day
// var io = require('socket.io');

var socket = io();
var questionTimer;

$('form').submit(function(e){
  socket.emit('chat message', $('#m').val());
  $('#m').val('');
  e.preventDefault();
  // return false;
});

socket.on('chat message', function(msg){
  $('#messages').append($('<li>').text(msg));
  scroll();
});

socket.on('question', function(prompt) {
  $('#messages').append($('<li>').addClass('question').text(prompt));
  scroll();
  questionTimer = setTimeout(function(){
    resetQuestion(false);
  }, 15000);
});

var resetQuestion = function(answerFound) {
  socket.emit('new question', answerFound);
}

var scroll = function() {
  var messages = document.getElementById('messages');
  var shouldScroll = messages.scrollTop + messages.clientHeight <= messages.scrollHeight;
  if (shouldScroll) {
    messages.scrollTop = messages.scrollHeight;
  }
}

socket.on('answer found', function(answerMsg) {
  $('li').remove();
  $('#messages').append($('<li>').addClass('answer').text(answerMsg));
  scroll();
  clearTimeout(questionTimer);
  resetQuestion(true);
});

socket.on('no answer found', function(noAnswerMsg) {
  $('#messages').append($('<li>').addClass('no-answer').text(noAnswerMsg));
  scroll();
})

socket.on('disconnect', function() {
  clearTimeout(questionTimer);
})