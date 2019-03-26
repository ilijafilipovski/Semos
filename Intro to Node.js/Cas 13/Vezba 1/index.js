const MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/?serverSelectionTimeoutMS=5000&connectTimeoutMS=10000&3t.uriVersion=3&3t.connection.name=DBConnection"
var db ;

MongoClient.connect(url, function( err, client) {
    db = client.db('DBConnection')
    console.log("connected")
    
    // Test users

    // db.createCollection('users')

    var newUser = {
        name : "Marija",
        age: 15
    }

    // Insert one document in users collection
    // db.collection("users").insertOne(newUser, function(err, res) {
    //     if(err) {
    //         throw err;
    //     } else {
    //         console.log("New user added")
    //     }
    // })

    var myArrayUsers = [
        {name : "Jane", age: 25},
        {name : "Vlatko", age: 18}
    ]

    // Insert many documents in users  collection
    // db.collection("users").insertMany(myArrayUsers, function(err, res) {
    //     if(err) {
    //         throw  err;
    //     } else {
    //         console.log("Many users added")
    //     }

    // })

    // Find one document in DB
    // db.collection('users').findOne({name : "Jane"}, function(err, res) {
    //     if(err) {
    //         throw err;
    //     } else {
    //         console.log(res)
    //     }
    // })

    // Find many documents in DB
    db.collection('users').find({name : "Marija"}).toArray(function (err, res) {
        if(err) {
            throw err;
        } else {
            console.log(res)
        }
    })
    // Delete one document from DB
    db.collection('users').deleteOne({name : "Jane"}, function(err , res) {
        if(err) {
            throw err;
        } else {
            console.log("One element deleted")
        }
    })

    // Update document in DB

    var myQuery = {name : "Vlatko"};
    var newValues = {$set : {age : 30}};
    
    db.collection("users").updateOne(myQuery, newValues, function(err) {
        if(err) {
            throw err;
        } else {
            console.log("One element updated")
        }

    })

})

