const express = require("express");
const app = express();
const port = 3000;
const myParser = require("body-parser");
const books = require("./helpers/books");
const users = require("./helpers/users");

app.set("view engine", "ejs");
app.use(myParser.urlencoded({extended: true}));


app.listen(port, () => {console.log("My app is running on port: " + port)});

var user1 = new users.create("fn1", "ln1", "email1@mail.com", "pass1");
var user2 = new users.create("fn2", "ln2", "email2@mail.com", "pass2");
var user3 = new users.create("fn3", "ln3", "email3@mail.com", "pass3");

var book1 = new books.create("title1", "author1", "1");
var book2 = new books.create("title2", "author2", "2");
var book3 = new books.create("title3", "author3", "3");


var niza1 = [];
var niza2 = [];

niza1.push(user1, user2, user3);
niza2.push(book1, book2, book3);

app.get("/", (req,res)=>{
    res.render("home");
})

app.get("/register", (req,res)=>{
    res.render("register");
})

app.post("/register", (req,res) => {
    var fn = req.body.fn;
    var ln = req.body.ln;
    var email = req.body.email;
    var password = req.body.password;

    var flag = false;

    for(let i=0;i<niza1.length;i++){
        if(niza1[i].email === email){
            res.redirect("/error");
            flag = true;
            break;
        }
    }
    
    if(!flag){
        var newUser = new users.create(fn,ln,email,password);
        niza1.push(newUser);
        res.redirect("/login");
    }
})

app.get("/login", (req,res) =>{
    res.render("login");
});

app.post("/login", (req,res)=>{
    var email = req.body.email;
    var password = req.body.password;
    var flag = false;
    for(let i = 0; i<niza1.length; i++){
        if(niza1[i].email === email && niza1[i].password === password){
            res.redirect("/myBooks");
            flag = true;
            break;
        }
    }
    if(!flag){
        res.redirect("/error");
    }
})

app.get("/myBooks", (req,res)=>{
    res.render("myBooks", {knigi: niza2})
})

app.get("/error", (req,res)=>{
    res.render("error")
})
