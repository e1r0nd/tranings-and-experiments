console.log('Starting app...');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

const user = os.userInfo();

fs.appendFile('greeting.txt', `Hello ${user.username || 'world'}!`, (err) => {
  err && console.log('Unable to write to file.');
});

console.log(`Your age is ${notes.age}`);
console.log(notes.sum(9, -2));
