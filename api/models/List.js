const mongoose = require('mongoose')

const listSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
        minLength: 1,
        trim: true
    },
})

const List = mongoose.model('List',listSchema)
module.exports = {List}