var Reader = require('./reader.js').Reader;

var PORT = process.env.PORT || 3000;
var INDEX = __dirname + '/index.html';
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);


app.use(express.static(__dirname + '/public'))
app.get('/', function(req, res, next) {
  res.sendFile(INDEX);
});

server.listen(PORT, () => console.log('listening', PORT));

// var server = app.use((req, res) => res.sendFile(INDEX) )
//   .listen(PORT, () => console.log(`Listening on ${ PORT }`));



// Notice that I initialize a new instance of socket.io by passing the http (the HTTP server) object.

// app.get('/', function(req, res){
//   res.sendFile('index.html', { root: __dirname });
// });

var question = Reader.randomQuestion();

var prompt = question.question;
var answers = question.answers;

// Then I listen on the connection event for incoming sockets, and I log it to the console
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
  });
});