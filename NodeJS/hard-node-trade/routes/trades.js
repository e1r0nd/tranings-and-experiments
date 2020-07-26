const express = require('express');

const router = express.Router();
const data = require('../json-examples/get-trades-user.json');

router.get('/', (req, res) => {
  res.set('Cached-Control', 'public, max-age=300, s-maxage=600');
  res.json(data);
});

module.exports = router;
