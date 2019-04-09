const express = require("express");
const app = express();
const port = 3000;
const fetch = require("node-fetch");

app.set("view engine", "ejs");

app.listen(port, ()=>{console.log("Server is running on port: " + port)});

app.get("/", (req,res)=>{
    fetch("https://dog.ceo/api/breed/hound/images")
    .then(res => res.json())
    .then(json => {
        let pics = json.message;
        res.render("pics", {pics: pics} );
    })
})