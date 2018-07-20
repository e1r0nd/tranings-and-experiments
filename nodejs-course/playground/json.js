const fs = require('fs');

const obj = {
  name: 'My name',
};
const stringObj = JSON.stringify(obj);
console.log(stringObj);

const personString = '{"name":"This name"}';
const person = JSON.parse(personString);
console.log(person);

const originalNote = {
  title: 'This title',
  body: 'my body',
};
const originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

const noteString = fs.readFileSync('notes.json');
const note = JSON.parse(noteString);
console.log(`title: ${note.title}`);

const noteStringify = JSON.stringify(note, undefined, 2);
console.log(`title: ${noteStringify}`);
