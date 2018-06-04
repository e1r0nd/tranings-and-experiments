const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
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
module.exports = router;
