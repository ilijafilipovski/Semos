const express = require('express')
const path = require('path')
const app = express();
const book = require('./helpers/book')
const port = 8080;
 

app.listen(port, () => console.log("My first express web server is running on port: " + port));

app.set("view engine", "ejs")

app.get('/', (req, res) => {
    res.send("Hello from the default route")
})

// app.get('/users', (req, res) => {
//     res.send("Hello from users page")
// })

// app.get('/home', (req, res) =>{
//     console.log(__dirname)
//     res.sendFile(path.join(__dirname + '/views/home.html'))
// })

// app.get('/test', (req, res) =>{
//     var name = "Marija";

//     res.render("index" , {firstName : name });
// })

var b1 = new book.create("1", "Book 1", "Author 1");
var b2 = new book.create("2", "Book 2", "Author 2");
var b3 = new book.create("3", "Book 3", "Author 3");
var b4 = new book.create("4", "Book 4", "Author 4");

var niza = [];
niza.push(b1, b2, b3 , b4);

// route /allBooks
app.get('/allBooks', (req, res) => {

    res.render("allBooks", {knigi : niza})
})

// route /book

app.get('/book', (req, res) =>{
    let id = req.query.id;

    niza.forEach(b =>{
        if(id === b.id) {
            res.render('book', {kniga: b})
        }
    })
})



