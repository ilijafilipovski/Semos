const express = require{("express")
const app = express();
const books = require('./helpers/books')
const port = 3000;

app.set("view engine", "ejs");

app.listen(port, () => console.log("My app is running on port: " + port));

var book1 = new books.create("1", "Title 1", "Author 1");
var book2 = new books.create("2", "Title 2", "Author 2");
var book3 = new books.create("3", "Title 3", "Author 3");

var niza = [];

niza.push(book1, book2, book3);

app.get("/allBooks", (request, response) => {
    response.render("books", {knigi : niza})
})

app.get("/book", (req , res) => {
    let id = req.query.id;

    for(let i = 0 ; i < niza.length ; i++) {
        if(id == niza[i].id) {
            res.render("book", {kniga : niza[i]})
        }
    }
    res.render('error')
})