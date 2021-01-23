// const Input = require('./lib/input')
// const Notes = require('./lib/notes')
// const mongoose = require('mongoose')

// const URL = 'mongodb://localhost:27017/note'
// mongoose.connect(URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });

// const instanceOfInput = new Input()
// const instanceOfNotes = new Notes(instanceOfInput)

// instanceOfNotes.execute(instanceOfInput)
// instanceOfNotes.add(instanceOfInput)
// instanceOfNotes.list(instanceOfInput)
// instanceOfNotes.delete(instanceOfInput)


'use strict'

const mongoose = require('mongoose')
const Input = require('./lib/input')
const Notes = require('./lib/notes')
const URI = 'mongodb://localhost:27017/okay'
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const instanceOfInput = new Input
const instanceOfNotes = new Notes(instanceOfInput)
instanceOfNotes.add(instanceOfInput)
instanceOfNotes.list(instanceOfInput)
instanceOfNotes.delete(instanceOfInput)
