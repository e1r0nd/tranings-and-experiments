const path = require('path');
const http = require('http');
const express = require('express');
const socketIo = require('socket.io');
const Filter = require('bad-words');

const {
  generateMessage,
  generateLocationMessage,
} = require('./utils/messages');
const {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom,
} = require('./utils/users');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const port = process.env.PORT || 3000;
const publicDirectoryPath = path.join(__dirname, '../public');

app.use(express.static(publicDirectoryPath));
let count = 0;

io.on('connection', socket => {
  console.log('New websocket connection:', count);

  socket.on('join', ({ username, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, username, room });
    if (error) {
      return callback(error);
    }

    socket.join(user.room);
    socket.emit('message', generateMessage('Welcome!'));
    socket.broadcast
      .to(user.room)
      .emit('message', generateMessage(`${user.username} has joined!`));
    callback();
  });

  socket.on('sendMessage', (message, callback) => {
    const filter = new Filter();
    if (filter.isProfane(message)) {
      return callback('Profanity is not allowed.');
    }
    io.emit('message', generateMessage(message));
    callback();
  });

  socket.emit('countUpdated', generateMessage(count));
  socket.on('increment', () => {
    count++;
    io.emit('countUpdated', generateMessage(count));
  });

  socket.on('disconnect', () => {
    const user = removeUser(socket.id);
    if (user) {
      io.to(user.room).emit(
        'message',
        generateMessage(`${user.username} has left!`),
      );
    }
  });

  socket.on('sendLocation', (coords, callback) => {
    io.emit(
      'locationMessage',
      generateLocationMessage(
        `https://google.com/maps?q=${coords.latitude},${coords.longitude}`,
      ),
    );
    callback();
  });
});

server.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
