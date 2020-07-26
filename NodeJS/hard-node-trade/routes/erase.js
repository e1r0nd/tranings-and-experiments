const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config({ path: '../variables.env' });

const router = express.Router();
mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises
const Trade = require('../models/Trade');

router.get('/', (req, res) => {
  async function deleteData() {
    await Trade.remove();
  }

  try {
    deleteData();
    res.set('Cached-Control', 'public, max-age=300, s-maxage=600');
    res.json();
  } catch (e) {
    /* eslint-disable-next-line no-console */
    console.error(`Something went wrong: ${e}`);
  }
});

module.exports = router;
