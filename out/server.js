'use strict';

var path = require('path');
var http = require('http');
var express = require('express');
var publicPath = path.join(__dirname, '../public');
var port = process.env.PORT || 3000;
var socket = require('socket.io');
var app = express();
var server = http.createServer(app);
var io = socket(server);
app.use(express.static(publicPath));
server.listen(port, function () {
  console.log('Sever is up on port ' + port);
});

io.on('connection', function (socket) {
  console.log("New user connected");
  socket.on('disconnect', function () {
    console.log("User was disconnected!");
  });
  socket.on('createMessage', function (message, done) {
    io.emit('newMessage', message.from, message.text);
    done('New message created!');
  });
});