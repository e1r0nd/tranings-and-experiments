require('dotenv').config();
const mongoose = require('mongoose');
console.log(
  `${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}`,
);

const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = `${process.env.DB_HOST}:35786`;
const databaseName = 'task-manager';

mongoose.connect(
  `mongodb://${process.env.DB_USER}:${
    process.env.DB_PASS
  }@${connectionURL}/${databaseName}`,
  { useNewUrlParser: true, useCreateIndex: true },
  //   (error, client) => {
  //     if (error) {
  //       return console.log('Unable to connect to database!');
  //     }
  //   },
);

const User = mongoose.model('User', {
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
});

const me = new User({
  name: 'Andy',
  age: 42,
});

me.save()
  .then(() => {
    console.log(me);
  })
  .catch((error) => {
    console.error('Error:', error);
  });

const Task = mongoose.model('Task', {
  description: {
    type: String,
  },
  completed: {
    type: Boolean,
  },
});
const task = new Task({
  description: 'Something to write here',
  completed: false,
});
task
  .save()
  .then(() => {
    console.log(task);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
