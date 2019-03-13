const express = require('express')
const app = express()
const port = 8000;
const users = require('./helpers/users')
const myParser = require('body-parser')
//session dec
const session = require('express-session')


app.listen(port, () => { console.log("My first session server is up and running on port: " + port) })


app.set('view engine', 'ejs')
app.use(myParser.urlencoded({ extended: true }))
app.use(session({ secret: 'semos' }))

var niza = [];
var ses;
var user1 = new users.create("parmakova@yahoo.com", "123", "user")
var user2 = new users.create("test@yahoo.com", "321", "admin")

niza.push(user1, user2)


app.get('/', (req, res) => {
    res.render('home')
})

// Login

app.get('/login', (req, res) => {

    ses = req.session;
    if (ses.email) {
        res.render('profile')
    } else {
        res.render("login")
    }
})

app.post('/login', (req, res) => {
    let email = req.body.email;
    let pass = req.body.pass;

    var flag = false;

    for (var i = 0; i < niza.length; i++) {
        if (niza[i].email === email && niza[i].pass === pass) {
            flag = true;
            ses = req.session
            ses.email = email;
            res.render('profile', { email: email })
        }
    }
    if (flag === false) {
        res.redirect('/error')
    }
})

app.get('/error', (req, res) => {
    res.render('error')
})

// Register

app.get('/register', (req, res) => {
    res.render('register')
})

app.post('/register', (req, res) => {
    let email = req.body.email;
    let pass = req.body.pass;
    var flag = false;

    for (var i = 0; i < niza.length; i++) {
        if (niza[i].email === email) {
            flag = true;
            res.redirect('/register')
        }
    }
    if (flag === false) {
        var newUser = new users.create(email, pass, "user")
        niza.push(newUser)
        res.redirect('/login')
    }
})

// Profile route

app.get('/profile', (req, res) => {
    ses = req.session;
    if (ses.email) {
        res.render('profile')
    } else {
        res.redirect('/')
    }
})

app.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if(err) {
            console.log(err);
        } else {
            res.redirect('/')
        }
    })
})