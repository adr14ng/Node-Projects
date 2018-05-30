console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');
const titleOptions = {
  describe: 'Title of note',
  demand: true,
  alias: 't'
};
const bodyOptions = {
  describe: 'Decribe the note',
  demand: true,
  alias: 'b'
};

const argv = yargs
.command('add', 'Add a new note', {
  title: titleOptions,
  body: bodyOptions
})
.command('list', 'List all notes')
.command('read', 'Read a note',{
  title: titleOptions
})
.command('remove', 'Remove a note',{
  title: titleOptions
})
.argv;
var command = argv._[0];




if(command === 'add'){
  var note = notes.addNote(argv.title, argv.body);
  if(note){
    console.log('Note created!\n');
    notes.displayNote(note);
  } else {
    console.log('Error duplicate note...');
  }
} else if (command === 'list'){
  notes.getAll();
} else if(command === 'read'){
  var noteRead = notes.getNote(argv.title);
  noteRead ? notes.displayNote(noteRead) : console.log('Note not found');
} else if(command === 'remove'){
  var noteRemoved = notes.removeNote(argv.title);
  noteRemoved ? console.log('Note was removed') : console.log('Note not found');;
} else {
  console.log('Command not recognized');
}
