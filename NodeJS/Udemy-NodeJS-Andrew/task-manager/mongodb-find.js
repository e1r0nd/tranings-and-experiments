// CRUD : Create : Read : Update : Delete
require('dotenv').config();
console.log(
  `${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}`,
);

const { MongoClient, ObjectID } = require('mongodb');

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
    db.collection('users').findOne({ name: 'Jen' }, (error, user) => {
      if (error) {
        return console.log('Unable to fetch data.');
      }
      console.log(user);
      db.collection('users').findOne(
        { _id: ObjectID(user._id) },
        (error, user) => {
          if (error) {
            return console.log('Unable to find a user.');
          }
          console.log(`By id: ${user.name}`);
        },
      );
    });

    db.collection('users')
      .find({ age: 42 })
      .toArray((error, users) => {
        if (error) {
          return console.log('Unable to fetch data.');
        }
        console.log(users);
      });
    db.collection('users')
      .find({ age: 42 })
      .count((error, count) => {
        if (error) {
          return console.log('Unable to fetch data.');
        }
        console.log(count);
      });
    db.collection('tasks')
      .find({ completed: false })
      .toArray((error, tasks) => {
        if (error) {
          return console.log('Unable to fetch data.');
        }
        console.log(tasks);
      });
  },
);
