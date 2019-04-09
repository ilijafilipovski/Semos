const express = require("express");
const app = express();
var mongoose = require("mongoose");
const multer = require("multer");
const url = "mongodb://127.0.0.1:27017/dbconnection"
const myParser = require("body-parser");
const port = 3000;

app.set("view engine", "ejs");
app.use(myParser.urlencoded({extended: true}));
app.use(express.static("uploads"));

mongoose.connect(url)
app.listen(port, ()=>{console.log("Server is running on: " + port)});

const Movie = require("./models/movie");

var storageDisk = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, "./uploads");
    },
    filename: function(req, file, cb){
        cb(null, file.originalname)
    },

})

var upload  = multer({storage: storageDisk});

app.get("/", (req,res)=>{
    res.render("uploadImage")
})

app.post("/uploadImage", upload.single("image"), (req,res)=>{
    let newMovie = new Movie({
        title: req.body.title,
        year: req.body.year,
        img: req.file.filename
    })

    newMovie.save();
    res.render("displayMovie", {movie: newMovie})
})