const express = require('express');
const hbs = require('hbs');
const app = express();

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/json', (req, res) => {
  res.send({
    name: 'User',
    likes: ['Bikes', 'Cities'],
  });
});
app.get('/about', (req, res) => {
  res.render('about.hbs', {
    title: 'About Page',
    year: new Date().getFullYear(),
  });
});
app.listen(3000, () => {
  console.log('Server is up on port 3000');
});
