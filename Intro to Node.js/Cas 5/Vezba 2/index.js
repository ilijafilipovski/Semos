const express = require('express')
const myParser = require('body-parser')
const users = require('./helpers/users')
const app = express();
const port = 8080;
app.set("view engine", "ejs")
app.use(myParser.urlencoded({extended: true}))

app.listen(port, () => console.log("My local server is running on port: " + port));


app.get('/', (req, res) => {
    res.render("index")
})

app.get('/register', (req, res) => {
    res.render("register")
})

var u1 = new users.create("Blazenka", "Parmakova", "parmakovab@yahoo.com", "123")
var u2 = new users.create("Mario", "Petrov", "mariopetrov@yahoo.com", "321")

var niza = [];
niza.push(u1, u2);

app.post('/register', (req, res) => {
    var fn = req.body.fn
    var ln = req.body.ln
    var email = req.body.email
    var pass = req.body.pass

    var flag = false;

    for(let i = 0 ; i < niza.length ; i++) {
        if(niza[i].email === email) {
            flag = true;
            break;
        }
    }
    if(flag === false) {
        var newUser = users.create(fn,ls,email,pass);
        niza.push(newUser);
        res.redirect('/login')
    } else {
        res.redirect('/')
    }

})

app.get('/login', (req, res) => {
    res.render('login');
})

app.post('/login', (req, res) =>{
    var email = req.body.email
    var pass = req.body.pass

    var flag = false;

    for(let i = 0 ; i < niza.length ; i++) {
        if(niza[i].email === email) {
            flag = true;
            break;
        }
    }
    if(flag === false) {
        var newUser = users.create(fn,ls,email,pass);
        niza.push(newUser);
        res.redirect('/login')
    } else {
        res.redirect('/home')
    }
})

