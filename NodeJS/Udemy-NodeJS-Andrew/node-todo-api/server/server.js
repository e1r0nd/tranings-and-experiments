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
  text: { type: String, required: true, minlength: 1, trim: true },
  completed: { type: Boolean, default: false },
  completedAt: { type: Number, default: null },
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

const User = mongoose.model('User', {
  email: {
    type: String,
    require: true,
    trim: true,
    minlength: 1,
  },
});
const user = new User({
  email: 'andrew@mail.com',
});
user.save().then(
  (doc) => {
    console.log('User saved:', doc);
  },
  (e) => {
    console.log('Unable to save a user', e);
  },
);
