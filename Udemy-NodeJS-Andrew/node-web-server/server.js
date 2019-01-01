const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const port = process.env.PORT || 3000;
const app = express();
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.use((req, res, next) => {
  const now = new Date().toString();
  const log = `${now}: ${req.method} ${req.url}`;
  console.log(log);
  fs.appendFile('server.log', log + '\n', (err) => {
    if (err) {
      console.log('Unable to append to server.log');
    }
  });
  next();
});

// app.use((req, res, next) => {
//   res.render('maitance.hbs');
// });

app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => new Date().getFullYear());
hbs.registerHelper('screamIt', (text) => text.toUpperCase());

app.get('/json', (req, res) => {
  res.send({
    name: 'User',
    likes: ['Bikes', 'Cities'],
  });
});
app.get('/about', (req, res) => {
  res.render('about.hbs', {
    title: 'About Page',
  });
});
app.get('/help', (req, res) => {
  res.render('help.hbs', {
    title: 'Help Page',
  });
});
app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
