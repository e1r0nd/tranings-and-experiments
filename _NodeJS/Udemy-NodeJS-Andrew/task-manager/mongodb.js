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
    // db.collection('users').insertOne(
    //   {
    //     name: 'Andy',
    //     age: '42',
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log('Unable to insert a user');
    //     }
    //     console.log(result.ops);
    //   },
    // );
    // db.collection('users').insertMany(
    //   [
    //     {
    //       name: 'Jen',
    //       age: '12',
    //     },
    //     { name: 'Me', age: '10' },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log('Unable to insert users');
    //     }
    //     console.log(result.ops);
    //   },
    // );
    db.collection('tasks').insertMany(
      [
        { description: 'task1', completed: false },
        { description: 'yask 2', completed: false },
        { description: 'yield 3', completed: false },
      ],
      (error, result) => {
        if (error) {
          return console.log('Unable to insert tasks');
        }
        console.log(result.ops);
      },
    );
  },
);
