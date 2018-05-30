console.log('Starting notes.js\n')

const fs = require('fs');

var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch (e) {
    return [];
  }
}

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

var displayNote = (note) => {
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
}

var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title,
    body
  };

  var duplicateNotes = notes.filter((note) => note.title === title);

  if(duplicateNotes.length === 0){
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

var getAll = () => {
  var notes = fetchNotes();

  for(var note in notes){
    if (notes.hasOwnProperty(note)) {
      console.log(`\nNote-${note}`);
      displayNote(notes[note]);
    }
  }

};

var getNote = (title) => {
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note) => note.title === title);

  return filteredNotes[0];
};

var removeNote = (title) => {
  console.log('Removing note:', title);

  var notes = fetchNotes();
  var filteredNotes = notes.filter((note) => note.title != title);
  saveNotes(filteredNotes);

  return notes.length !== filteredNotes.length;
};

module.exports = {
   addNote,
   getAll,
   getNote,
   removeNote,
   displayNote
};
