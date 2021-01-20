const Input = require('./lib/input')
const Notes = require('./lib/notes')

const instanceOfInput = new Input()
const instanceOfNotes = new Notes(instanceOfInput)
instanceOfNotes.execute(instanceOfInput)
instanceOfNotes.add(instanceOfInput)
