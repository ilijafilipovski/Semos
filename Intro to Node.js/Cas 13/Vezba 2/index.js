const express = require('express')
const app = express()
const myParser = require('body-parser')
const session = require('express-session')
const MongoClient = require('mongodb').MongoClient
var url = "mongodb://localhost:27017/?serverSelectionTimeoutMS=5000&connectTimeoutMS=10000&3t.uriVersion=3&3t.connection.name=DBConnection"
var db;
const port = 3000;

app.use(myParser.urlencoded({extended: true}))
app.set('view engine', 'ejs')
app.use(session({ secret: "mongodb"}))

// nashi moduli
const users = require('./helpers/users')
const auth = require('./helpers/auth')

app.listen(port, () => { console.log("Our local server is running on: " + port)})

app.get('/', (req, res) => {
    res.render("index")
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.post('/login', (req, res) => {
    let email = req.body.email
    let pass = req.body.pass

    MongoClient.connect(url, function(err, client) {
        db = client.db('DBConnection');

        db.collection("users").findOne({ email : email, pass : pass}, function(err, result){
            if(err) {
                throw err;
            } else {
                console.log(result)
                res.render("user")
            }
        })
    })
})