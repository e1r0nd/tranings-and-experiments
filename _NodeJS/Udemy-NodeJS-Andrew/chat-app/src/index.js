const path = require('path');
const http = require('http');
const express = require('express');
const socketIo = require('socket.io');
const Filter = require('bad-words');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const port = process.env.PORT || 3000;
const publicDirectoryPath = path.join(__dirname, '../public');

app.use(express.static(publicDirectoryPath));
let count = 0;

io.on('connection', socket => {
  console.log('New websocket connection:', count);
  socket.emit('message', 'Welcome!');
  socket.broadcast.emit('message', 'A new user has joined!');
  socket.on('sendMessage', (message, callback) => {
    const filter = new Filter();
    if (filter.isProfane(message)) {
      return callback('Profanity is not allowed.');
    }
    io.emit('message', message);
    callback();
  });

  socket.emit('countUpdated', count);
  socket.on('increment', () => {
    count++;
    io.emit('countUpdated', count);
  });

  socket.on('disconnect', () => {
    io.emit('message', 'A user has left!');
  });

  socket.on('sendLocation', (coords, callback) => {
    io.emit(
      'message',
      `https://google.com/maps?q=${coords.latitude},${coords.longitude}`,
    );
    callback();
  });
});

server.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
