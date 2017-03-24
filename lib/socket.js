var server = require('./server');
var io = require('socket.io')(server);
var Reader = require('./reader.js').Reader;
var helpers = require('./helpers/socketHelpers');

var question,
    prompt,
    answer,
    acceptedWords;

var _setNewQuestion = () => {
  question = Reader.randomQuestion();
  prompt = question.question;
  answer = question.answers[0];
  acceptedWords = helpers.importantWords(answer);
};

_setNewQuestion();

// Socket
io.on('connection', (socket) => {
  console.log('a user connected');
  io.emit('question', prompt);

  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
    if ( helpers.closeMatch(acceptedWords, msg) ) {
      var answerMsg = 'the answer was ' + answer;
      io.emit('answer found', answerMsg);
    }
  });

  socket.on('new question', (answerFound) =>  {
    if (!answerFound) {
      var answerMsg = 'The answer: ' + answer;
      io.emit('no answer found', answerMsg);
    }
    _setNewQuestion();
    io.emit('question', prompt);
  });

  // io.on('disconnect', function() {
  //   console.log('a user disconnected io')
  // })

  socket.on('disconnect', () => { 
    io.emit('disconnect');
    console.log('a user disconnected');
  });
});

module.exports = io;