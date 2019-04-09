// express
const express = require('express')
const app = express()
const port = 3000

const auth = require('./helpers/auth')

// session
const session = require('express-session')
app.use(session({ secret: "friday" }))

// body-parser
const myParser = require('body-parser')
app.use(myParser.urlencoded({ extended: true }))

// view engine
app.set('view engine', 'ejs')

// konekcija so baza
const mongoose = require('mongoose')
var url = "mongodb://127.0.0.1:27017/dbconnection"
mongoose.connect(url)

// pokrevanje lokalen server na porta 3000
app.listen(port, () => { console.log("Running on port: " + port) })

// deklariranje modeli
var User = require('./models/user')
var Movie = require('./models/movie')
var Book = require('./models/book')

// Default router ( / )
app.get('/', (req, res) => {
    res.render('index')
})

// Login route ( /login ) method : GET
app.get('/login', (req, res) => {
    res.render('login')
})

// Login route ( /login) method : POST

app.post('/login', (req, res) => {
    let username = req.body.username
    let password = req.body.password

    // proverka vo baza dali postoi userot so dadenite informacii
    User.findOne({ username: username, password: password }, function (err, result) {
        if (err) {
            throw err;
        } else {
            if (result !== null) {
                console.log("You are now logged in!")
                req.session.username = username;
                res.redirect('/user')
            } else {
                res.redirect('/login')
            }
        }
    })
})

// Register route ( /register ) method: GET
app.get('/register', (req, res) => {
    res.render('register')
})

// Register route ( /register ) method: POST
app.post('/register', (req, res) => {
    let email = req.body.email
    let username = req.body.username
    let password = req.body.password

    User.findOne({ email: email }, function (err, result) {
        if (err) {
            throw err
        } else {
            // proverka dali go ima vo baza
            if (result === null) {
                var newUser = new User({
                    email: email,
                    username: username,
                    password: password
                })
                // dodavanje vo baza
                newUser.save(function (err, result) {
                    if (err) {
                        throw err
                    } else {
                        console.log("You are now registered")
                        res.redirect('/login')
                    }
                })
            } else {
                res.render('error', { error: { message: "That email is already in our db." } })
            }
        }
    })
})

// User route ( /user ) method: GET

app.get('/user', auth.isLogged, (req, res) => {
    User.findOne({ username: req.session.username }, function (err, result) {
        if (err) {
            throw err
        } else {
            if (result !== null) {
                res.render("user", { userInformations: result })
            }
        }
    })
})

// Add movie route ( /addMovie ) method : GET

app.get("/addMovie", (req,res)=>{
    res.render("addMovie");
})

app.post("/addMovie", (req,res)=>{
    let title = req.body.title;
    let year = req.body.year;
    let produced_by = req.body.produced_by;

    var newMovie = new Movie({
        title: title,
        year: year,
        produced_by: produced_by
    })

    newMovie.save(function(err,newMovie){
        if(err){
            throw err;
        } else{
            User.update({username: req.session.username}, {"$push" : {"movies": newMovie}}, function(err, user){
                if(err){
                    throw err;
                } else{
                    if(user !==  null){
                        console.log("new movie added")
                        res.redirect("/user")
                    }

                }
            })
        }

    })
})

app.get("/addBook", (req,res)=>{
    res.render("addBook");
})

app.post("/addBook", (req,res)=>{
    let title = req.body.title;
    let year = req.body.year;
    let written_by = req.body.written_by;

    var newBook = new Book({
        title: title,
        year: year,
        written_by: written_by
    })

    newBook.save(function(err, newBook){
        if(err){
            throw err;
        } else{
            User.update({username: req.session.username}, {"$push": {"books": newBook}}, function(err, user){
                if(err){
                    throw err;
                } else{
                    if(user !== null){
                        console.log("new book added")
                        res.redirect("/user")
                    }
                }
            })
        }
    })
})
