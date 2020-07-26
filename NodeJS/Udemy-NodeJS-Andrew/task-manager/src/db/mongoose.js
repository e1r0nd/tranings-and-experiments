require('dotenv').config();
const mongoose = require('mongoose');
console.log(
  `${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}`,
);

// const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = `${process.env.DB_HOST}:35786`;
const databaseName = 'task-manager';

mongoose.connect(
  `mongodb://${process.env.DB_USER}:${
    process.env.DB_PASS
  }@${connectionURL}/${databaseName}`,
  { useNewUrlParser: true, useCreateIndex: true },
  (error, client) => {
    if (error) {
      return console.log('Unable to connect to database!');
    }
  },
);
