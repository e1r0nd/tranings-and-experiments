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
    db.collection('users')
      .updateOne(
        {
          _id: ObjectID('5cae565e6895006fb4b8ce90'),
        },
        {
          $set: {
            name: 'Mike',
          },
        },
      )
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });

    db.collection('tasks')
      .updateMany(
        {
          completed: false,
        },
        {
          $set: { completed: true },
        },
      )
      .then((result) => {
        console.log(`Modified ${result.modifiedCount} task(s)`);
      })
      .catch((error) => {
        console.log(error);
      });
  },
);
