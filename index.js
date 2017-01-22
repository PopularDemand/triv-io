// Express initializes app to be a function handler that you can supply to an HTTP server
var app = require('express')();
var http = require('http').Server(app);
// Notice that I initialize a new instance of socket.io by passing the http (the HTTP server) object.
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile('index.html', { root: __dirname });
});

// Then I listen on the connection event for incoming sockets, and I log it to the console
io.on('connection', function(socket){
  console.log('a user connected');

  socket.on('chat message', function(msg){
    // console.log('message: ' + msg);
    io.emit('chat message', msg);
  });

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});