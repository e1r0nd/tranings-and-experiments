const fs = require('fs');

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

exports.addNote = (title, body) => {
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

exports.getNote = (title) => {
  if (!title) {
    return;
  }

  const notes = fetchNotes();
  return notes.filter((note) => note.title === title)[0];
};

exports.removeNote = (title) => {
  const notes = fetchNotes();
  const filteredNotes = notes.filter((note) => note.title !== title);
  saveNotes(filteredNotes);

  return notes.length !== filteredNotes.length;
};

exports.getAll = () => {
  console.log('get all');
};

exports.logNote = (note) => {
  console.log(`------
Title: ${note.title}
Body: ${note.body}`);
};
