
const fs = require('fs')
const {addNote, loadNotes, saveNotes, removeNote, listNotes} = require('./notes')
const yargs = require('yargs')
let command = process.argv[2]
// const notes = require('./notes')

if(command == 'add'){
    addNote(yargs.argv.notes)
}
else if (command == 'delete'){
    removeNote(yargs.argv.notes)
}
else if (command == 'read'){
    listNotes()
}
else if(command == 'list')
{
    listNotes()
}