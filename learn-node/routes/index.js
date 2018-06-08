const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');
const { catchErrors } = require('../handlers/errorHandlers');
// Do work here
router.get('/', catchErrors(storeController.homePage));
router.get('/stores', catchErrors(storeController.getStores));
router.get('/add', storeController.addStore);
router.post('/add', catchErrors(storeController.createStore));
router.post('/add/:id', catchErrors(storeController.updateStore));
router.get('/stores/:id/edit', catchErrors(storeController.editStore));

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
