const express = require('express');
const api = express();
const bodyParser = require('body-parser');
const mongo = require('./db/mongo');
const filmovi = require('./handlers/filmovi');

api.use(bodyParser.json());
mongo.init();

api.get("movies", filmovi.getAll);
api.get("movies/:id", filmovi.getOne);
api.post("movies", filmovi.addOne);
api.delete("movies/:id", filmovi.removeOne);
api.put("movies/:id", filmovi.updateOne);
api.patch("movies/:id", filmovi.patchOne);


api.listen(8080, (err)=>{
    if(err){
        return console.error(err);
    }
    return console.log("Server started port...")
})