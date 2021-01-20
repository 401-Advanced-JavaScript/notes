
function Input() {
    const argv = require('minimist')(process.argv.slice(2))
    let usedMethod = process.argv[2]
    let method = Object.keys(argv)[1]
    let note = Object.values(argv)[1]

    if ((usedMethod === '--add' || usedMethod === '-a')) {
        if (note.length > 0) {
            this.action = method
            this.payload = note
        } else {
            console.log('Please enter a note content')
        }
    } else {
        console.log("Please you should be using either '--add' or '-a'")
    }

}




module.exports = Input










