function Notes(Input) {

}

Notes.prototype.execute = function (Input) {
    console.log('Action you used is ', Input.action)
}

Notes.prototype.add = function (Input) {
    let object = {
        id: Math.ceil(Math.random() * 10),
        noteText: Input.payload
    }
    console.log('Your Note is ', object)
}

module.exports = Notes