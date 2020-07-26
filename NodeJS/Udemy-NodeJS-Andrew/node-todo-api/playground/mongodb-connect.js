require('dotenv').config();
const { MongoClient, ObjectID } = require('mongodb');
const obj = new ObjectID();
console.log(obj);

console.log(
  `${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}`,
);
MongoClient.connect(
  `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${
    process.env.DB_HOST
  }:61024/node-todo-api`,
  (err, db) => {
    if (err) {
      return console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected to MongoDB Server');

    db.collection('Todos').insertOne(
      {
        text: 'Something to do',
        completed: false,
      },
      (err, result) => {
        if (err) {
          return console.log('Unable to insert todo', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
      },
    );

    db.collection('Users').insertOne(
      {
        name: 'Andrew',
        age: '12',
        location: 'false',
      },
      (err, result) => {
        if (err) {
          return console.log('Unable to insert User', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
      },
    );

    db.close();
  },
);
