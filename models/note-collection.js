'use strict'


const notesSchema = require('./note-schema')

class Note {
    constructor() { }

    async get() {
        return await notesSchema.find()
    }
    async create(record) {
        let newRecord = new notesSchema(record)
        return await newRecord.save()
    }
    async update(_id, record) {
        console.log(record)
        return await notesSchema.findByIdAndUpdate(_id, { text: record });
    }
    async delete(_id) {
        return await notesSchema.deleteOne({ _id })
    }
}

module.exports = new Note()