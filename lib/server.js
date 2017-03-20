var express = require('express');
var path = require('path');
var app = express();
var server = require('http').createServer(app);

// View engine
// app.set('views', path.join(__dirname, '../views'));
// app.set('view engine', 'hbs');

// Middleware
app.use(express.static(path.join(__dirname, '../public')));

// Lib
var Reader = require('./reader.js').Reader;
// var chatrooms = require('../routes/chatrooms');
// var pages = require('../routes/pages');

// Routes
// app.use('/', pages);
// app.use('/room', chatrooms);

// Route for Templates
app.get('/views/*', function(req, res) {
  res.render('../public/views/' + req.params.filename)
})

app.get('*', function(req, res) {
  res.sendFile(path.resolve(__dirname, '../index.html'))
})

module.exports = server;