require('dotenv').config();
const mongoose = require('mongoose');

console.log(
  `${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}`,
);
mongoose.Promise = global.Promise;
mongoose.connect(
  `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${
    process.env.DB_HOST
  }:61024/node-todo-api`,
);

const Todo = mongoose.model('Todo', {
  text: { type: String },
  completed: { type: Boolean },
  completedAt: { type: Number },
});

const newTodo = new Todo({
  text: 'Cook dinner',
});
newTodo.save().then(
  (doc) => {
    console.log('Save a todo', doc);
  },
  (err) => {
    console.log('Unable to save a todo', err);
  },
);

const anotherTodo = new Todo({
  text: 'Eat dinner',
  completed: true,
  completedAt: Date.now(),
});
anotherTodo.save().then(
  (doc) => {
    console.log('Save a todo', doc);
  },
  (err) => {
    console.log('Unable to save a todo', err);
  },
);
