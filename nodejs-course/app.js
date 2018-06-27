const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes.js');

const command = process.argv[2].toLowercase;
console.log(`Command: ${command}`);

if (command === 'add') {
  console.log('Adding...');
} else if (command === 'list') {
  console.log('Listing...');
} else if (command === 'read') {
  console.log('Reading...');
} else if (command === 'remove') {
  console.log('Removing...');
} else {
  console.log('Usage: app.js [add | list]');
}
