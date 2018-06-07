const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');

// Do work here
router.get('/', storeController.homePage);
router.get('/add', storeController.addStore);
router.post('/add', storeController.createStore);

router.get('/hey', (req, res) => {
  console.log('Hey !!');
  // res.send('Hey! It works!');
  const name = req.query.name || 'wes';
  const cool = req.query.cool || true;

  const wes = {
    name,
    cool,
  };

  res.json(wes);
});

router.get('/reverse/:name', (req, res) => {
  const reverse = [...req.params.name].reverse().join('');

  res.send(reverse);
});

router.get('/hello', (req, res) => {
  const name = ` ${req.query.name}` || ' stranger';

  res.render('hello', {
    name,
  });
});

module.exports = router;
