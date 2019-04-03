const path = require('path');
const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const geocode = require('./utils/geocode');
const forecast = require('./utils/weather');

const port = process.env.PORT || 3000;
const app = express();

// Logging
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

// Turns off server :)
// app.use((req, res, next) => {
//   res.render('maitance.hbs');
// });

app.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname, '../views/partials'));
app.use(express.static(path.join(__dirname, '../public')));

hbs.registerHelper('getCurrentYear', () => new Date().getFullYear());
hbs.registerHelper('screamIt', (text) => text.toUpperCase());

app.get('/json', (req, res) => {
  res.send({
    name: 'User',
    likes: ['Bikes', 'Cities'],
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Page',
  });
});

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help Page',
  });
});

app.get('/help/*', (req, res) => {
  res.send('An article is not found.');
});

app.get('/weather', (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: 'You must provide an address',
    });
  }
  geocode.geocodeAddress(req.query.address, (errorMessage, results) => {
    if (errorMessage) {
      res.send({ error: errorMessage });
    } else {
      forecast.getWeather(
        results.latitude,
        results.longtitude,
        (
          errorMessage,
          { temperature, apparentTemperature, precipProbability, summary },
        ) => {
          if (errorMessage) {
            res.send({ error: errorMessage });
          } else {
            res.send({
              forcast: `It's currently: ${temperature}°C. Feels like ${apparentTemperature}°C. There's a ${precipProbability}% chance of rain. ${summary}`,
              location: results.address,
              address: req.query.address,
            });
          }
        },
      );
    }
  });
  // res.send({
  // forcast: 'Snowing',
  // location: 'New York',
  // address: req.query.address,
  // });
});

app.get('*', (req, res) => {
  res.render('404', {
    title: '404 Page',
  });
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
