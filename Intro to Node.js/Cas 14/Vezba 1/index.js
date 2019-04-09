var mongoose = require("mongoose");
var User = require("./models/users");

mongoose.connect("mongodb://127.0.0.1:27017/dbconnection");

// var newUser = new User({
//     name: "Goran",
//     username: "kumanovac",
//     age: 18
// })

// newUser.save(function(err){
//     if(err){
//         throw err;
//     } else{
//         console.log("New user added");
//     }
// })

// User.find({username: "trajko"}, function(err, result){
//     if(err){
//         throw err;
//     } else{
//         console.log(result);    }
// })

// User.find({username: {$regex: /ku/}}, function(err, result){
//     if(err){
//         throw err;
//     } else{
//         console.log(result)
//     }
// })

// User.find().where("age").lt(28).exec(function(err, result){
//     if(err){
//         throw err;
//     } 
//     else {
//         console.log(result);
//     }
// })

// User.find({age: {$lte: 30 , $gte: 20}}, function(err, result){
//     if(err){
//         throw err;
//     } else {
//         console.log(result);
//     }
// })

// User.findOneAndUpdate({name: "Trajko"}, {username: "trajko updated"}, function(err){
//     if (err){
//         throw err;
//     } else {
//         console.log("UPDATED BROSKIIIIIIIIIIII")
//     }
// })

User.findOneAndDelete({username: "trajko updated"}, function(err){
    if(err){
        throw err;
    } else{
        console.log("user deleted")
    }
})

