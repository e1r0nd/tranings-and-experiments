const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.get('/404', (req, res) => {
  res.status(404).send({
    message: 'Page not found.',
  });
});

app.get('/users', (req, res) => {
  res.send([
    {
      name: 'Mike',
      age: 27,
    },
    {
      name: 'Andy',
      age: 25,
    },
  ]);
});

app.listen(3000);
module.exports.app = app;
