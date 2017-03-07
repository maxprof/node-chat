const path = require('path');
const http = require('http');
const express = require('express');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
const socket = require('socket.io');
let app = express();
let server = http.createServer(app);
let io = socket(server);
app.use(express.static(publicPath));
server.listen(port, ()=> {
    console.log(`Sever is up on port ${port}`);
});

io.on('connection', (socket) => {
  console.log("New user connected");
  socket.on('disconnect',()=>{
    console.log("User was disconnected!");
  });
});
