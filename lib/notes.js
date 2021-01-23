// // --------------------------- Classes ------------------------

// class Notes {
//     constructor() {
//     }
//     execute(obj) {
//         console.log('your action is ', obj)
//     }
//     async add(obj) {
//         if (obj.action && obj.payload) {
//             let record = new Note(obj)
//             let save = await record.save()
//             obj.id = save.id
//             return save
//         } else {
//             console.log(`Error: ${this.error}`)
//         }
//     }
//     // async delete(obj) {
//     //     if (obj.action === '--delete' || obj.action === '-d') {
//     //         let found = await Note.findById(id);
//     //         console.log(await Note.findByIdAndRemove(id))

//     //     }
//     // }
//     async delete(obj) {
//         await Note.findByIdAndDelete(obj.id, function (err, doc) {
//             if (doc) {
//                 console.log(`Deleted Note ${doc._id}`);
//                 return doc;
//             } else {
//                 console.log('Id does not exsists.');
//             }
//         });
//     }
//     async list(obj) {
//         if (obj.action === '--list' || obj.action === '-l') {
//             let allNotes = await Note.find({ category: '--category' })
//             console.log(allNotes)

//             // console.log('your all notes are ', allNotes)
//             // console.log('your all notes are')
//             return allNotes
//         }
//     }
// }

// module.exports = Notes


'use strict'

const minimist = require('minimist')

const notesSchema = require('../models/note-schema')


class Notes {
    constructor() { }

    async add(inputObject) {
        if (inputObject.action && inputObject.text) {
            const newRecord = new notesSchema(inputObject)
            const savedNote = await newRecord.save()
            console.log('record saved', savedNote)
            return savedNote
        }
    }

    async list(inputObject) {
        if (inputObject.action === 'list' || inputObject.action === 'l') {
            const readNotes = await notesSchema.find({})
            inputObject.id = readNotes
            console.log(inputObject)
            return readNotes
        }
    }

    async delete(inputObject) {
        if (inputObject.action === 'delete' || inputObject.action === 'd') {
            await notesSchema.findByIdAndDelete(inputObject.id)
            console.log('deleted')
        }
    }


}

module.exports = Notes