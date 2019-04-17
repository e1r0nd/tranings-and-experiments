require('dotenv').config();
const mongoose = require('mongoose');
console.log(
  `${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}`,
);
const validator = require('validator');

// const { MongoClient, ObjectID } = require('mongodb');

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
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowecase: true,
    validate(value) {
      if (!validator.isEmail) {
        throw new Error('Email is invalid');
      }
    },
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 7,
    validate(value) {
      if (value.toLowerCase().includes('password')) {
        throw new Error('Password is invalid');
      }
    },
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error('Age must be a positive number');
      }
    },
  },
});

const me = new User({
  name: '  Andy  ',
  email: '  MiKE@   ',
  password: '123qwe321',
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
    required: true,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
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
