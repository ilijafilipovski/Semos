var mongoose = require('mongoose')
var Schema = mongoose.Schema

var movieSchema = new Schema({
    title : {
        type: String,
        required : true
    },
    year: {
        type: String,
        required: true
    },
    produced_by: {
        type: String,
        required: true
    }
})

var Movie = mongoose.model('Movie', movieSchema)

// always last
module.exports = Movie;