require('dotenv').config({ path: __dirname + '../variables.env' });
const fs = require('fs');

const mongoose = require('mongoose');

console.log('process.env.NODE_ENV', process.env.NODE_ENV);
console.log('process.env.DATABASE', process.env.DATABASE);
mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises

// import all of our models - they need to be imported only once
const Trade = require('../models/Trade');

const trades = JSON.parse(fs.readFileSync('/post-trades.json', 'utf-8'));

async function deleteData() {
  console.log('Removing data...');
  await Trade.remove();
  console.log(
    'Data Deleted. To load sample data, run\n\n\t npm run sample\n\n',
  );
  process.exit();
}

async function loadData() {
  try {
    await Trade.insertMany(trades);
    console.log('Data has been loaded!');
    process.exit();
  } catch (e) {
    console.log(
      '\nError! The Error info is below but if you are importing sample data make sure to drop the existing database first with.\n\n\t npm run sample:delete\n\n\n',
    );
    console.log(e);
    process.exit();
  }
}
if (process.argv.includes('--delete')) {
  deleteData();
} else {
  loadData();
}
