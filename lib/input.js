'use strict'

const minimist = require('minimist')

class Input {
    constructor() {
        const objectOfMinimist = minimist(process.argv.slice(2))
        const usedActionOfObject = Object.keys(objectOfMinimist)[1]
        const usedCategoryOfObject = Object.keys(objectOfMinimist)[2]
        const usedCategoryText = Object.values(objectOfMinimist)[2]
        const usedText = process.argv.slice(2)[1]

        if (usedActionOfObject === 'add' || usedActionOfObject === 'a') {
            this.action = usedActionOfObject

            if (usedText !== '') {
                this.text = usedText
            }
            if (usedCategoryOfObject === 'category') {
                this.category = usedCategoryText
            }
        }
        else if (usedActionOfObject === 'list' || usedActionOfObject === 'l') {
            this.action = usedActionOfObject
        }
        else if (usedActionOfObject === 'delete' || usedActionOfObject === 'd') {
            this.action = usedActionOfObject
            this.id = usedText
        } else {
            console.log('Please type a correct action')
        }

    }
}

module.exports = Input