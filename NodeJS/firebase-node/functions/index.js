const functions = require('firebase-functions');
const firebase = require('firebase-admin');
const express = require('express');
const engines = require('consolidate');
const resolve = require('url');

const firebaseApp = firebase.initializeApp(
  functions.config().firebase
);

// function getFacts() {
//   const ref = firebase.database().ref('facts');
//   return ref.once('value').then(snap => snap.val());
// }
const getFacts = () => new Promise((resolve, reject) => {
  const facts =
    [
      {"text":"fact1"},
      {"text":"fact2"},
      {"text":"fact3"}
    ];

  return resolve(facts);
});

const app = express();
app.engine('hbs', engines.handlebars);
app.set('views', './views');
app.set('view engine', 'hbs');

app.get('/', (request, response) => {
  response.set('Cached-Control', 'public, max-age=300, s-maxage=600');
  getFacts().then(facts => {
    response.render('index', { facts });
  });
});

app.get('/facts.json', (request, response) => {
  response.set('Cached-Control', 'public, max-age=300, s-maxage=600');
  getFacts().then(facts => {
    response.json(facts);
  });
});

exports.app = functions.https.onRequest(app);
