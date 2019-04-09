var mongoose = require("mongoose");
const Schema = mongoose.Schema;

var movieSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    year: String,
    img: {
        type: String
    }
})

var Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;