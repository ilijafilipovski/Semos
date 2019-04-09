var mongoose = require('mongoose')
var Schema = mongoose.Schema

var bookSchema = new Schema({
    title : {
        type: String,
        required : true
    },
    year: {
        type: String,
        required: true
    },
    written_by: {
        type: String,
        required: true
    }
})

var Book = mongoose.model('Book', bookSchema)

// always last
module.exports = Book;