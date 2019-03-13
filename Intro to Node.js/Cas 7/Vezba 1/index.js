const express = require('express')
// for creating users objects 
const users = require('./helpers/users')

// needed for reading data from register or login forms in register.ejs/login.ejs
const myParser = require('body-parser')
const app = express();
const port = 8080;

// setting the view engine to be readable for .ejs files (beside regular html files)
app.set("view engine", "ejs");

// using urlencoded method so we can use req.body in /register or /login route
app.use(myParser.urlencoded({extended: true}))

app.listen(port, () => { console.log("My first login/register app is running on port: " + port)})

var user1 = new users.create("Blazenka", "Parmakova", "parmakova@yahoo.com", "123")
var user2 = new users.create("Martin", "Stefanovski", "test@yahoo.com", "321")

var niza = [];
niza.push(user1, user2);
// Default route

app.get('/', (req, res) => {
    res.render("home");
})

// Register GET route

app.get('/register', (req, res) =>{
    res.render("register");
})

// Register POST route

app.post('/register', (req, res) => {
    var fn = req.body.fn
    var ln = req.body.ln
    var email = req.body.email
    var password = req.body.password

    var flag = false;
    for(let i = 0 ; i < niza.length ; i++) {
        if(niza[i].email === email) {
            res.redirect('/error');
            flag = true;
            break;
        }
    }
    if(flag === false) {
        var newUser = new users.create(fn, ln, email, password)
        niza.push(newUser);
        res.redirect('/login')
    }
})

app.get('/login', (req,res) => {
    res.render("login");
})

app.post('/login', (req, res) => {
    var email = req.body.email
    var password = req.body.password

    var flag = false;
    for(let i = 0 ; i < niza.length ; i++) {
        if(niza[i].email === email && niza[i].password === password) {
            res.redirect('/myProfile');
            flag = true;
            break;
        }
    }
    if(flag === false) {
        res.redirect('/login')
    }
})

app.get('/myProfile', (req,res) =>{
    res.render('myProfile')
})

app.get('/allUsers', (req, res) => {
    res.render('allUsers', {korisnici : niza})
})

app.get('/error', (req, res) => {
    res.render("error")
})