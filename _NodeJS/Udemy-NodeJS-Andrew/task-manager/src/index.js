const express = require('express');
require('./db/mongoose');
const User = require('./models/user');
const Task = require('./models/task');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

/* Users Requests */
app.post('/users', async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
  // user
  //   .save()
  //   .then(() => {
  //     res.status(201).send(user);
  //   })
  //   .catch((error) => {
  //     res.status(400).send(error);
  //   });
});
app.get('/users', async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (error) {
    res.status(400).send(error);
  }
  // User.find({})
  //   .then((users) => res.send(users))
  //   .catch((error) => {
  //     res.status(400).send(error);
  //   });
});
app.get('/users/:id', async (req, res) => {
  const _id = req.params.id;
  try {
    const user = await User.findById(_id);
    if (user) {
      return res.send(user);
    } else {
      return res.status(404).send('User not found!');
    }
  } catch (error) {
    res.status(400).send(error);
  }
  // User.findById(_id)
  //   .then((user) => {
  //     if (user) {
  //       return res.send(user);
  //     } else {
  //       return res.status(404).send('User not found!');
  //     }
  //   })
  //   .catch((error) => {
  //     res.status(400).send(error);
  //   });
});

/* Tasks Requests */
app.post('/tasks', async (req, res) => {
  const task = new Task(req.body);
  try {
    await task.save();
    res.status(201).send(task);
  } catch (error) {
    res.status(400).send(error);
  }
  // task
  //   .save()
  //   .then(() => {
  //     res.status(201).send(task);
  //   })
  //   .catch((error) => {
  //     res.status(400).send(error);
  //   });
});
app.get('/tasks', async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.send(tasks);
  } catch (error) {
    res.status(400).send(error);
  }
  // Task.find({})
  //   .then((tasks) => res.send(tasks))
  //   .catch((error) => {
  //     res.status(400).send(error);
  //   });
});
app.get('/tasks/:id', async (req, res) => {
  const _id = req.params.id;
  try {
    const task = await Task.findById(_id);
    if (task) {
      return res.send(task);
    } else {
      return res.status(404).send('Task not found!');
    }
  } catch (error) {
    res.status(400).send(error);
  }
  // Task.findById(_id)
  //   .then((task) => {
  //     if (task) {
  //       return res.send(task);
  //     } else {
  //       return res.status(404).send('Task not found!');
  //     }
  //   })
  //   .catch((error) => {
  //     res.status(400).send(error);
  //   });
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
