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
      .findOneAndUpdate(
        { text: 'Eat me' },
        { $set: { completed: true } },
        { returnOriginal: false },
      )
      .then(
        (response) => {
          console.log(`Updated ${response.lastErrorObject.n} records`);
          console.log(JSON.stringify(response.value, undefined, 2));
        },
        (err) => {
          console.log('Unable to fetch todos', err);
        },
      );

    db.collection('Users')
      .findOneAndUpdate(
        { name: 'Jen' },
        { $set: { name: 'Jen1' }, $inc: { age: 10 } },
        { returnOriginal: false },
      )
      .then(
        (response) => {
          console.log(`Updated ${response.lastErrorObject.n} records`);
          console.log(JSON.stringify(response.value, undefined, 2));
          console.log(response);
        },
        (err) => {
          console.log('Unable to fetch todos', err);
        },
      );

    db.close();
  },
);
