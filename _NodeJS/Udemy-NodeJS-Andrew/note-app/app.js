const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const chalk = require('chalk');

const notes = require('./notes.js');

// Customize version
yargs.version('0.1.0');

const titleOptions = {
  describe: 'Title of note',
  demand: true,
  alias: 't',
};
const bodyOptions = {
  describe: 'Body of note',
  demand: true,
  alias: 'b',
};
const argv = yargs
  .command('add', 'Add a new note', {
    title: titleOptions,
    body: bodyOptions,
  })
  .command('list', 'List all notes')
  .command('read', 'Read a new note by title', {
    title: titleOptions,
  })
  .command('remove', 'Remove a new note by title', {
    title: titleOptions,
  }).argv;
const command = (argv._[0] && argv._[0].toLowerCase()) || '?';

if (command === 'add') {
  const note = notes.addNote(argv.title, argv.body);
  if (_.isObject(note)) {
    console.log(chalk.green('Note created'));
    notes.logNote(note);
  } else if (note) {
    console.log(note);
  }
} else if (command === 'list') {
  const allNotes = notes.getAll();
  console.log(`Found ${chalk.yellow(allNotes.length)} notes:`);
  allNotes.forEach((note) => notes.logNote(note));
} else if (command === 'read') {
  const note = notes.getNote(argv.title);
  if (_.isObject(note)) {
    console.log('The Note');
    notes.logNote(note);
  } else {
    console.log(chalk.red('Cannot find this note'));
  }
} else if (command === 'remove') {
  const noteRemoved = notes.removeNote(argv.title);
  const message = noteRemoved
    ? `Note "${chalk.red(argv.title)} is removed`
    : 'Note was not removed';
  console.log(message);
} else {
  console.log(`Usage: app.js ${chalk.green('[add | list | remove | --help]')}`);
}
