const fs = require('fs');

exports.addNote = (title, body) => {
  let notes = [];
  const note = {
    title,
    body,
  };

  try {
    const notesString = fs.readFileSync('notes-data.json');
    notes = JSON.parse(notesString);
    console.log(notes);
  } catch (error) {}

  const duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
  }
};

exports.getNote = (title) => {
  console.log(title);
};

exports.removeNote = (title) => {
  console.log(title);
};

exports.getAll = () => {
  console.log('get all');
};
