var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var userSchema = new Schema({
    email : {
        type: String,
        required: true,
        unique: true
    },
    username : String,
    password: {
        type: String,
        required: true
    },
    movies : Array,
    books: Array
})

var User = mongoose.model('User', userSchema)


// ova posledno 
module.exports = User;
