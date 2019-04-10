// CRUD : Create : Read : Update : Delete
require('dotenv').config();
console.log(
  `${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}`,
);

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const connectionURL = `${process.env.DB_HOST}:35786`;
const databaseName = 'task-manager';

MongoClient.connect(
  `mongodb://${process.env.DB_USER}:${
    process.env.DB_PASS
  }@${connectionURL}/${databaseName}`,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log('Unable to connect to database!');
    }

    const db = client.db(databaseName);
    db.collection('users').insertOne({
      name: 'Andy',
      age: '42',
    });
  },
);
