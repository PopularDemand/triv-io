var server = require('./server');
var io = require('socket.io')(server);
var Reader = require('./reader.js').Reader;

var question = Reader.randomQuestion();

var prompt = question.question;
var answers = question.answers;

// Socket
io.on('connection', function(socket){
  console.log('a user connected');
  io.emit('question', prompt);
  // console.log(answers)

  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
    if ( answers.includes(msg) ) {
      var answerMsg = 'the answer was ' + msg;
      io.emit('answer found', answerMsg)
    }
  });

  socket.on('new question', function(answerFound) {
    if (!answerFound) {
      var answerMsg = 'The answer: ' + answers[0];
      io.emit('no answer found', answerMsg);
    }
    question = Reader.randomQuestion();
    prompt = question.question;
    answers = question.answers;
    io.emit('question', prompt)
  })

  socket.on('disconnect', function(){
    io.emit('disconnect');
    console.log('a user disconnected')
  });
});

module.exports = io;