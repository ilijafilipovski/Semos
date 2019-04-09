var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: String,
    username: {
        type: String,
        required: true,
        unique: true
    },
    age: Number,
    created_at: Date
})

userSchema.pre("save", function(next){
    var currentDate = new Date();
    this.created_at = currentDate;

    next();
})
var User = mongoose.model("User", userSchema);

module.exports = User;