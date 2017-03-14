var express = require('express');
var path = require('path');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

// Constants
var PORT = process.env.PORT || 3000;
var INDEX = __dirname + '/index.html';

// View engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// Middleware
app.use(express.static(path.join(__dirname, './public')));

// Lib
var Reader = require('./reader.js').Reader;
var chatrooms = require('./routes/chatrooms');
var pages = require('./routes/pages');

// Routes
app.use('/', pages);
app.use('/room', chatrooms);

server.listen(PORT, () => console.log('listening', PORT));

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