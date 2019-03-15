const fs = require('fs');
const chalk = require('chalk');

const fetchNotes = () => {
  try {
    const notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch (error) {
    return [];
  }
};
const saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

const addNote = (title, body) => {
  if (!title) {
    return 'Enter the title';
  } else if (!body) {
    return 'Enter the body';
  }

  let notes = fetchNotes();
  const note = {
    title,
    body,
  };

  const duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  } else {
    return 'The title is duplicated';
  }
};

const getNote = (title) => {
  if (!title) {
    return;
  }

  const notes = fetchNotes();
  return notes.filter((note) => note.title === title)[0];
};

const removeNote = (title) => {
  const notes = fetchNotes();
  console.log(`Title: ${chalk.yellow(title)}`);
  const filteredNotes = notes.filter((note) => note.title !== title);
  saveNotes(filteredNotes);

  return notes.length !== filteredNotes.length;
};

const getAll = () => {
  return fetchNotes();
};

const logNote = (note) => {
  console.log(`------
${chalk.green('Title:')} ${note.title}
${chalk.blue('Body:')} ${note.body}`);
};

module.exports = {
  addNote,
  logNote,
  getAll,
  removeNote,
  getNote,
};
