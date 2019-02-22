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

    db.collection('Todos')
      .find({ completed: false })
      .toArray()
      .then(
        (docs) => {
          console.log('Todos');
          console.log(JSON.stringify(docs, undefined, 2));
        },
        (err) => {
          console.log('Unable to fetch todos', err);
        },
      );
    db.collection('Todos')
      .find({ _id: new ObjectID('5c6fd870fb6fc01c4cea368d') })
      .toArray()
      .then(
        (docs) => {
          console.log('Todos');
          console.log(JSON.stringify(docs, undefined, 2));
        },
        (err) => {
          console.log('Unable to fetch todos', err);
        },
      );
    db.collection('Todos')
      .find()
      .count()
      .then(
        (num) => {
          console.log('Todos:', num);
        },
        (err) => {
          console.log('Unable to fetch todos', err);
        },
      );

    db.collection('Users')
      .find({ name: 'Andrew' })
      .count()
      .then(
        (num) => {
          console.log(`There are ${num} Andrews`);
        },
        (err) => {
          console.log('Unable to fetch todos', err);
        },
      );

    db.close();
  },
);
