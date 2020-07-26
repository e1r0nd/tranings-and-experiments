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
      .deleteMany({
        text: 'Something to do',
      })
      .then(
        (response) => {
          console.log(`Deleted ${response.result.n} records`);
        },
        (err) => {
          console.log('Unable to fetch todos', err);
        },
      );

    db.collection('Todos')
      .deleteOne({
        text: 'Eat lunch',
      })
      .then(
        (response) => {
          console.log(`Deleted ${response.result.n} records`);
        },
        (err) => {
          console.log('Unable to fetch todos', err);
        },
      );

    db.collection('Todos')
      .findOneAndDelete({
        completed: false,
      })
      .then(
        (response) => {
          console.log(`Deleted ${response.lastErrorObject.n} records`);
        },
        (err) => {
          console.log('Unable to fetch todos', err);
        },
      );
    db.close();
  },
);
