const express = require('express');
const app = express();
const myParser = require('body-parser');
const session = require('express-session');
const port = 3000;

// nashi moduli
const users = require('./helpers/users')
const movies = require('./helpers/movies')
const auth = require('./helpers/auth')

app.use(myParser.urlencoded({extended: true}));
app.set('view engine', 'ejs')
app.use(session({ secret : "test"}));

var korisnici = [];
var filmovi = [];
var sess ;
// kreiranje i dodavanje admin vo korisnici
var admin = new users.create("Administrator", "admin@yahoo.com", "000000", "admin");
korisnici.push(admin);

app.listen(port, () => {console.log("Local server is running on port: " + port)});

// dodavanje na filmovi vo filmovi nizata
var movie1 = new movies.create("Movie1", "2017")
var movie2 = new movies.create("Movie2", "1995")
filmovi.push(movie1, movie2);

// Routing

// default / first route  ( / ) method : GET

app.get("/" , (req, res) => {
    res.render("index");
})

// Login ( /login ) method: GET
app.get('/login', (req, res) => {
    res.render('login')
})

// Login ( /login ) method: POST
app.post('/login', (req, res) => {

    let email = req.body.email;
    let pass = req.body.pass;

    let flag = false;
    // proverka dali toj user postoi vo niza korisnici ;
    for(let i = 0 ; i < korisnici.length; i++) {
        if(korisnici[i].email === email && korisnici[i].pass  === pass) {
            flag = true;
            sess = req.session;
            sess.email = email;
            sess.type = korisnici[i].type;
            if(sess.type === "admin") {
                res.redirect('/admin')
            } else {
                res.redirect('/user')
            }
            break;
        }
    }
    if(!flag) {
        res.redirect('/login');
    }
})

// Register ( /register ) method : GET
app.get('/register', (req, res) => {
    res.render('register')
})

// Register ( /register ) method: POST

app.post('/register', (req, res) => {
    let name = req.body.name;
    let email = req.body.email;
    let pass = req.body.pass;

    let flag = false;
    for(let i = 0 ; i < korisnici.length ; i++) {
        if(email === korisnici[i].email) {
            flag = true;
            break;
        }
    }
    if(!flag) {
        let newUser = new users.create(name, email, pass, "user");
        korisnici.push(newUser);
        res.redirect('/login');
    } else {
        res.redirect('/register');
    }
})

// Admin ( /admin ) method : GET

app.get('/admin', auth.isAdmin ,(req, res) => {
    res.render("admin", {nizaFilmovi : filmovi});
})


// Logout ( /logout ) method: GET

app.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if(err) {
            console.log(err)
        } else {
            res.redirect('/')
        }
    })
})

// Add new movie ( /addNewMovie ) method: GET

app.get('/addNewMovie', auth.isAdmin ,(req, res) => {
    res.render("addNewMovie")
})

// Add new movie form ( /addNewMovie ) method: POST
app.post('/addNewMovie', (req, res) => {
    let title = req.body.title;
    let year = req.body.year;

    let flag = false;

    for(let i = 0; i < filmovi.length ; i++ ) {
        if(filmovi[i].title === title && filmovi[i].year === year) {
                flag = true;
                break;
        }
    }
    if(!flag) {
        let newMovie = new movies.create( title, year);
        filmovi.push(newMovie)
    }
    res.redirect('/admin')
})

// Movie details ( /movieDetails ) method: GET

app.get('/movieDetails', (req, res) => {
    let title = req.query.title;

    for ( let i= 0 ; i < filmovi.length ; i++) {
        if(filmovi[i].title === title) {
            res.render("movieDetails", { film: filmovi[i]});
            break;
        }
    }
})

// User ( /user ) method: GET

app.get('/user', (req, res) => {
    res.render("user", { nizaFilmovi : filmovi})
})