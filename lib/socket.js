var server = require('./server');
var io = require('socket.io')(server);
var Reader = require('./reader.js').Reader;

const FILLER_WORDS = [ 'a', 'an', 'the', 'at', 'by',
  'for', 'in', 'of', 'on', 'to', 'up', 'and', 'as',
  'but', 'or', 'nor', 'not', 'this', 'is'];

var _importantWords = (sentence) =>  {
  return sentence.split(' ').filter(_notFillerWord);
}
var _notFillerWord = (word) =>  {
  return !FILLER_WORDS.includes(word);
}
var _closeMatch = (answers, guess) => {
  var matches = 0;
  guess = _importantWords(guess);
  if (!guess.length) return;
  guess.forEach( (word) =>  {
    if (answers.includes(word)) matches += 1;
  });
  if (matches >= answers.length / 2) return true;
}
var _checkCorrect = (msg) => {
  if ( _closeMatch(acceptedWords, msg) ) {
    var answerMsg = 'the answer was ' + answer;
    io.emit('answer found', answerMsg)
  }
}

var question,
    prompt,
    answer,
    acceptedWords;

var _setNewQuestion = () => {
  question = Reader.randomQuestion(34);
  prompt = question.question;
  answer = question.answers[0];
  acceptedWords = _importantWords(answer)
}

_setNewQuestion();

// Socket
io.on('connection', (socket) => {
  console.log('a user connected');
  io.emit('question', prompt);

  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
    _checkCorrect(msg);
  });

  socket.on('new question', (answerFound) =>  {
    if (!answerFound) {
      var answerMsg = 'The answer: ' + answer;
      io.emit('no answer found', answerMsg);
    }
    _setNewQuestion();
    io.emit('question', prompt)
  })

  socket.on('disconnect', () => { 
    io.emit('disconnect');
    console.log('a user disconnected')
  });
});

module.exports = io;