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
  .command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
      title: {
        describe: 'Note title',
        demandOption: true,
        type: 'string',
        titleOptions,
      },
      body: {
        describe: 'Note body',
        demandOption: true,
        type: 'string',
        bodyOptions,
      },
    },
    handler: function(argv) {
      const note = notes.addNote(argv.title, argv.body);
      if (_.isObject(note)) {
        console.log(chalk.green('Note created'));
        notes.logNote(note);
      } else if (note) {
        console.log(note);
      }
    },
  })
  .command({
    command: 'list',
    describe: 'List all notes',
    handler: function(argv) {
      const allNotes = notes.getAll();
      console.log(`Found ${chalk.yellow(allNotes.length)} notes:`);
      allNotes.forEach((note) => notes.logNote(note));
    },
  })
  .command({
    command: 'read',
    describe: 'Read a new note by title',
    builder: {
      title: {
        describe: 'Note title',
        demandOption: true,
        type: 'string',
        titleOptions,
      },
    },
    handler: function(argv) {
      const note = notes.getNote(argv.title);
      if (_.isObject(note)) {
        console.log('The Note');
        notes.logNote(note);
      } else {
        console.log(chalk.red('Cannot find this note'));
      }
    },
  })
  .command({
    command: 'remove',
    describe: 'Remove a new note by title',
    builder: {
      title: {
        describe: 'Note title',
        demandOption: true,
        type: 'string',
        titleOptions,
      },
    },
    handler: function(argv) {
      const noteRemoved = notes.removeNote(argv.title);
      const message = noteRemoved
        ? `Note "${chalk.green(argv.title)}" is removed`
        : chalk.red('Note was not removed');
      console.log(message);
    },
  }).argv;
const command = (argv._[0] && argv._[0].toLowerCase()) || '?';
if (command === '?') {
  console.log(`Usage: app.js ${chalk.green('[add | list | remove | --help]')}`);
}

yargs.parse();
